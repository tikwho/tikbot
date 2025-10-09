import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conversation } from './entities/conversation.entity';
import { Message } from '../messages/entities/message.entity';
import { ConversationLockService } from './services/conversation-lock.service';
import { RoutingService } from '../queues/services/routing.service';
import { WebsocketGateway } from '../websocket/websocket.gateway';
import { RedisService } from '../redis/redis.service';
import { ConversationStatus, MessageDirection, Priority } from 'shared/types';
import { CreateConversationDto, UpdateConversationDto, ReplyDto } from './dto';
import * as crypto from 'crypto';

@Injectable()
export class ConversationsService {
  constructor(
    @InjectRepository(Conversation)
    private conversationRepository: Repository<Conversation>,
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
    private lockService: ConversationLockService,
    private routingService: RoutingService,
    private websocketGateway: WebsocketGateway,
    private redisService: RedisService,
  ) {}

  async create(createDto: CreateConversationDto): Promise<Conversation> {
    // 检查是否已存在相同的会话
    const existing = await this.conversationRepository.findOne({
      where: {
        account_id: createDto.account_id,
        channel: createDto.channel,
        user_id: createDto.user_id,
        video_id: createDto.video_id || null,
        status: ConversationStatus.OPEN,
      },
    });

    if (existing) {
      return existing;
    }

    const conversation = this.conversationRepository.create({
      ...createDto,
      last_msg_at: new Date(),
      status: ConversationStatus.OPEN,
    });

    const saved = await this.conversationRepository.save(conversation);

    // 触发路由分配
    await this.routeConversation(saved);

    return saved;
  }

  async findById(id: string): Promise<Conversation> {
    const conversation = await this.conversationRepository.findOne({
      where: { id },
      relations: ['team', 'account', 'assignee', 'messages'],
    });

    if (!conversation) {
      throw new NotFoundException('Conversation not found');
    }

    return conversation;
  }

  async findByInbox(agentId: string, filter: any): Promise<Conversation[]> {
    const query = this.conversationRepository.createQueryBuilder('conv')
      .leftJoinAndSelect('conv.account', 'account')
      .leftJoinAndSelect('conv.assignee', 'assignee')
      .leftJoinAndSelect('conv.messages', 'messages')
      .orderBy('conv.last_msg_at', 'DESC');

    // 根据过滤器添加条件
    if (filter.assignee === 'me') {
      query.andWhere('conv.assignee_id = :agentId', { agentId });
    } else if (filter.assignee === 'unassigned') {
      query.andWhere('conv.assignee_id IS NULL');
    }

    if (filter.status?.length) {
      query.andWhere('conv.status IN (:...statuses)', { statuses: filter.status });
    }

    if (filter.priority?.length) {
      query.andWhere('conv.priority IN (:...priorities)', { priorities: filter.priority });
    }

    if (filter.search) {
      query.andWhere('(messages.body_plain ILIKE :search OR conv.meta::text ILIKE :search)', {
        search: `%${filter.search}%`,
      });
    }

    return await query.getMany();
  }

  async reply(conversationId: string, agentId: string, replyDto: ReplyDto): Promise<Message> {
    const conversation = await this.findById(conversationId);

    // 检查是否持有锁
    const lockInfo = await this.lockService.getLockInfo(conversationId);
    if (!lockInfo || lockInfo.agentId !== agentId) {
      throw new BadRequestException('You must acquire the conversation lock to reply');
    }

    // 生成幂等键
    const idempotencyKey = this.generateIdempotencyKey(
      conversationId,
      replyDto.text,
      new Date(),
    );

    // 检查是否重复发送
    const existing = await this.messageRepository.findOne({
      where: { idempotency_key: idempotencyKey },
    });

    if (existing) {
      return existing;
    }

    // 创建消息
    const message = this.messageRepository.create({
      conversation_id: conversationId,
      direction: MessageDirection.OUTBOUND,
      body: replyDto.text,
      body_plain: replyDto.text, // TODO: 处理富文本
      attachments: replyDto.attachments || [],
      author_id: agentId,
      idempotency_key: idempotencyKey,
    });

    const savedMessage = await this.messageRepository.save(message);

    // 更新会话最后消息时间
    conversation.last_msg_at = new Date();
    await this.conversationRepository.save(conversation);

    // 发送到 TikTok (异步)
    this.sendToTikTok(conversation, savedMessage).catch(error => {
      console.error('Failed to send message to TikTok:', error);
      // 更新消息错误状态
      savedMessage.error = error.message;
      this.messageRepository.save(savedMessage);
    });

    // 实时通知
    await this.websocketGateway.notifyNewMessage(conversationId, savedMessage);

    return savedMessage;
  }

  async claim(conversationId: string, agentId: string): Promise<Conversation> {
    const conversation = await this.findById(conversationId);

    if (conversation.assignee_id && conversation.assignee_id !== agentId) {
      throw new BadRequestException('Conversation is already assigned');
    }

    conversation.assignee_id = agentId;
    conversation.status = ConversationStatus.PENDING;

    const updated = await this.conversationRepository.save(conversation);

    // 通知相关坐席
    await this.websocketGateway.notifyConversationAssigned(agentId, updated);

    return updated;
  }

  async transfer(conversationId: string, fromAgentId: string, toAgentId: string): Promise<Conversation> {
    const conversation = await this.findById(conversationId);

    if (conversation.assignee_id !== fromAgentId) {
      throw new BadRequestException('You can only transfer conversations assigned to you');
    }

    conversation.assignee_id = toAgentId;
    
    // 添加到跟进人列表
    if (!conversation.follower_ids.includes(fromAgentId)) {
      conversation.follower_ids.push(fromAgentId);
    }

    const updated = await this.conversationRepository.save(conversation);

    // 释放当前锁
    await this.lockService.forceReleaseLock(conversationId);

    // 通知相关坐席
    await this.websocketGateway.notifyConversationAssigned(toAgentId, updated);

    return updated;
  }

  async resolve(conversationId: string, agentId: string): Promise<Conversation> {
    const conversation = await this.findById(conversationId);

    if (conversation.assignee_id !== agentId) {
      throw new BadRequestException('You can only resolve conversations assigned to you');
    }

    conversation.status = ConversationStatus.RESOLVED;
    const updated = await this.conversationRepository.save(conversation);

    // 释放锁
    await this.lockService.forceReleaseLock(conversationId);

    return updated;
  }

  async addInternalNote(conversationId: string, agentId: string, content: string): Promise<Message> {
    const note = this.messageRepository.create({
      conversation_id: conversationId,
      direction: MessageDirection.INTERNAL_NOTE,
      body: content,
      body_plain: content,
      author_id: agentId,
    });

    const saved = await this.messageRepository.save(note);

    // 实时通知团队成员
    await this.websocketGateway.notifyNewMessage(conversationId, saved);

    return saved;
  }

  private async routeConversation(conversation: Conversation): Promise<void> {
    const result = await this.routingService.routeConversation(conversation);

    if (result.agentId) {
      // 直接分配给坐席
      conversation.assignee_id = result.agentId;
      conversation.status = ConversationStatus.PENDING;
      await this.conversationRepository.save(conversation);

      // 通知坐席
      await this.websocketGateway.notifyConversationAssigned(result.agentId, conversation);
    } else if (result.queueId) {
      // 进入队列等待
      conversation.status = ConversationStatus.OPEN;
      await this.conversationRepository.save(conversation);

      // 通知队列更新
      const queueStats = await this.getQueueStats(conversation.team_id);
      await this.websocketGateway.notifyQueueUpdate(conversation.team_id, queueStats);
    }
  }

  private generateIdempotencyKey(conversationId: string, text: string, timestamp: Date): string {
    const minuteBucket = Math.floor(timestamp.getTime() / (60 * 1000)); // 按分钟分桶
    const content = `${conversationId}:${text}:${minuteBucket}`;
    return crypto.createHash('sha256').update(content).digest('hex');
  }

  private async sendToTikTok(conversation: Conversation, message: Message): Promise<void> {
    // TODO: 实现 TikTok 消息发送
    // 这里会调用 Worker 服务来发送消息
    console.log(`Sending message to TikTok: ${message.body}`);
    
    // 模拟发送延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 更新发送状态
    message.sent_at = new Date();
    await this.messageRepository.save(message);

    // 通知发送结果
    await this.websocketGateway.notifyOutboundResult(conversation.id, {
      messageId: message.id,
      success: true,
      sentAt: message.sent_at,
    });
  }

  private async getQueueStats(teamId: string): Promise<any> {
    const queueLength = await this.redisService.getQueueLength(`team:${teamId}:queue`);
    
    return {
      teamId,
      queueLength,
      timestamp: new Date(),
    };
  }
}