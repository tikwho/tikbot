import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agent } from '../../agents/entities/agent.entity';
import { Conversation } from '../../conversations/entities/conversation.entity';
import { QueueItem } from '../entities/queue-item.entity';
import { RedisService } from '../../redis/redis.service';
import { AgentPresence, Priority } from 'shared/types';

export interface RoutingResult {
  agentId?: string;
  queueId?: string;
  reason: string;
}

@Injectable()
export class RoutingService {
  constructor(
    @InjectRepository(Agent)
    private agentRepository: Repository<Agent>,
    @InjectRepository(Conversation)
    private conversationRepository: Repository<Conversation>,
    @InjectRepository(QueueItem)
    private queueRepository: Repository<QueueItem>,
    private redisService: RedisService,
  ) {}

  async routeConversation(conversation: Conversation): Promise<RoutingResult> {
    // 1. Sticky Agent - 检查上次处理人是否在线
    if (conversation.assignee_id) {
      const stickyAgent = await this.agentRepository.findOne({
        where: { 
          id: conversation.assignee_id,
          presence: AgentPresence.ONLINE,
        },
      });
      
      if (stickyAgent && stickyAgent.current_load < stickyAgent.capacity) {
        return {
          agentId: stickyAgent.id,
          reason: 'sticky_agent',
        };
      }
    }

    // 2. 技能与语言匹配
    const requiredSkills = this.extractRequiredSkills(conversation);
    const requiredLanguages = this.extractRequiredLanguages(conversation);

    // 3. 查找可用坐席
    const availableAgents = await this.agentRepository
      .createQueryBuilder('agent')
      .where('agent.team_id = :teamId', { teamId: conversation.team_id })
      .andWhere('agent.presence = :presence', { presence: AgentPresence.ONLINE })
      .andWhere('agent.current_load < agent.capacity')
      .getMany();

    if (availableAgents.length === 0) {
      // 无可用坐席，加入队列
      return await this.addToQueue(conversation, requiredSkills, requiredLanguages);
    }

    // 4. 技能匹配评分
    const scoredAgents = availableAgents.map(agent => ({
      agent,
      score: this.calculateAgentScore(agent, requiredSkills, requiredLanguages, conversation.priority),
    }));

    // 5. 按评分和负载排序
    scoredAgents.sort((a, b) => {
      if (a.score !== b.score) {
        return b.score - a.score; // 评分高的优先
      }
      // 评分相同时，负载低的优先
      const loadRatioA = a.agent.current_load / a.agent.capacity;
      const loadRatioB = b.agent.current_load / b.agent.capacity;
      return loadRatioA - loadRatioB;
    });

    const selectedAgent = scoredAgents[0]?.agent;
    if (selectedAgent) {
      return {
        agentId: selectedAgent.id,
        reason: 'skill_and_capacity_match',
      };
    }

    // 6. 降级到队列
    return await this.addToQueue(conversation, requiredSkills, requiredLanguages);
  }

  private async addToQueue(
    conversation: Conversation,
    requiredSkills: string[],
    requiredLanguages: string[],
  ): Promise<RoutingResult> {
    const queueItem = this.queueRepository.create({
      conversation_id: conversation.id,
      team_id: conversation.team_id,
      priority: conversation.priority,
      skills_required: requiredSkills,
      languages_required: requiredLanguages,
      expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24小时过期
    });

    await this.queueRepository.save(queueItem);

    // 添加到 Redis 队列用于实时处理
    const priorityScore = this.getPriorityScore(conversation.priority);
    await this.redisService.enqueue('conversations', {
      queueItemId: queueItem.id,
      conversationId: conversation.id,
      teamId: conversation.team_id,
      priority: conversation.priority,
      createdAt: new Date(),
    }, priorityScore);

    return {
      queueId: queueItem.id,
      reason: 'no_available_agent',
    };
  }

  private calculateAgentScore(
    agent: Agent,
    requiredSkills: string[],
    requiredLanguages: string[],
    priority: Priority,
  ): number {
    let score = 0;

    // 技能匹配评分
    const skillMatches = requiredSkills.filter(skill => 
      agent.skills.includes(skill)
    ).length;
    score += skillMatches * 10;

    // 语言匹配评分
    const languageMatches = requiredLanguages.filter(lang => 
      agent.languages.includes(lang)
    ).length;
    score += languageMatches * 5;

    // 优先级加成
    if (priority === Priority.VIP) {
      score += 20;
    } else if (priority === Priority.HIGH) {
      score += 10;
    }

    // 负载惩罚
    const loadRatio = agent.current_load / agent.capacity;
    score -= loadRatio * 15;

    return score;
  }

  private extractRequiredSkills(conversation: Conversation): string[] {
    // 根据会话内容、标签等提取所需技能
    const skills: string[] = [];
    
    if (conversation.tags.includes('technical')) {
      skills.push('technical_support');
    }
    if (conversation.tags.includes('billing')) {
      skills.push('billing_support');
    }
    if (conversation.tags.includes('vip')) {
      skills.push('vip_support');
    }

    return skills;
  }

  private extractRequiredLanguages(conversation: Conversation): string[] {
    // 根据用户语言偏好或消息内容检测语言
    const languages: string[] = [];
    
    // 从 meta 中获取用户语言偏好
    if (conversation.meta?.user_language) {
      languages.push(conversation.meta.user_language);
    } else {
      // 默认语言
      languages.push('zh-CN');
    }

    return languages;
  }

  private getPriorityScore(priority: Priority): number {
    switch (priority) {
      case Priority.VIP:
        return 1000;
      case Priority.HIGH:
        return 100;
      case Priority.NORMAL:
        return 10;
      case Priority.LOW:
        return 1;
      default:
        return 10;
    }
  }

  // 坐席认领队列中的会话
  async claimFromQueue(agentId: string, teamId: string): Promise<Conversation | null> {
    const agent = await this.agentRepository.findOne({
      where: { id: agentId, presence: AgentPresence.ONLINE },
    });

    if (!agent || agent.current_load >= agent.capacity) {
      return null;
    }

    // 从 Redis 队列中获取最高优先级的会话
    const queueItem = await this.redisService.dequeue(`team:${teamId}:queue`);
    if (!queueItem) {
      return null;
    }

    // 检查技能匹配
    const dbQueueItem = await this.queueRepository.findOne({
      where: { id: queueItem.queueItemId },
      relations: ['conversation'],
    });

    if (!dbQueueItem) {
      return null;
    }

    const skillsMatch = dbQueueItem.skills_required.every(skill =>
      agent.skills.includes(skill)
    );
    const languagesMatch = dbQueueItem.languages_required.every(lang =>
      agent.languages.includes(lang)
    );

    if (!skillsMatch || !languagesMatch) {
      // 技能不匹配，重新入队
      await this.redisService.enqueue(`team:${teamId}:queue`, queueItem, queueItem.priority);
      return null;
    }

    // 分配给坐席
    const conversation = dbQueueItem.conversation;
    conversation.assignee_id = agentId;
    conversation.status = 'pending' as any;
    
    await this.conversationRepository.save(conversation);
    await this.queueRepository.remove(dbQueueItem);

    // 更新坐席负载
    agent.current_load += 1;
    await this.agentRepository.save(agent);

    return conversation;
  }
}