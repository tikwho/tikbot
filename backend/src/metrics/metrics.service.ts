import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conversation } from '../conversations/entities/conversation.entity';
import { Message } from '../messages/entities/message.entity';
import { Agent } from '../agents/entities/agent.entity';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class MetricsService {
  constructor(
    @InjectRepository(Conversation)
    private conversationRepository: Repository<Conversation>,
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
    @InjectRepository(Agent)
    private agentRepository: Repository<Agent>,
    private redisService: RedisService,
  ) {}

  async getSystemMetrics(): Promise<any> {
    const [
      totalConversations,
      activeConversations,
      totalMessages,
      onlineAgents,
      totalAgents,
    ] = await Promise.all([
      this.conversationRepository.count(),
      this.conversationRepository.count({ where: { status: 'open' as any } }),
      this.messageRepository.count(),
      this.agentRepository.count({ where: { presence: 'online' as any } }),
      this.agentRepository.count(),
    ]);

    // 从 Redis 获取实时指标
    const queueLength = await this.redisService.getQueueLength('conversations');
    const activeConnections = await this.getActiveConnections();

    return {
      conversations: {
        total: totalConversations,
        active: activeConversations,
      },
      messages: {
        total: totalMessages,
      },
      agents: {
        total: totalAgents,
        online: onlineAgents,
      },
      queue: {
        length: queueLength,
      },
      connections: {
        active: activeConnections,
      },
      timestamp: new Date(),
    };
  }

  async getAgentMetrics(agentId: string, days: number = 7): Promise<any> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const [
      conversationsHandled,
      messagesCount,
      avgResponseTime,
    ] = await Promise.all([
      this.conversationRepository.count({
        where: {
          assignee_id: agentId,
          created_at: { $gte: startDate } as any,
        },
      }),
      this.messageRepository.count({
        where: {
          author_id: agentId,
          created_at: { $gte: startDate } as any,
        },
      }),
      this.calculateAvgResponseTime(agentId, startDate),
    ]);

    return {
      agentId,
      period: { days, startDate },
      conversationsHandled,
      messagesCount,
      avgResponseTimeSeconds: avgResponseTime,
      timestamp: new Date(),
    };
  }

  async getTeamMetrics(teamId: string, days: number = 7): Promise<any> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const [
      totalConversations,
      resolvedConversations,
      avgResolutionTime,
      teamAgents,
    ] = await Promise.all([
      this.conversationRepository.count({
        where: {
          team_id: teamId,
          created_at: { $gte: startDate } as any,
        },
      }),
      this.conversationRepository.count({
        where: {
          team_id: teamId,
          status: 'resolved' as any,
          created_at: { $gte: startDate } as any,
        },
      }),
      this.calculateAvgResolutionTime(teamId, startDate),
      this.agentRepository.find({ where: { team_id: teamId } }),
    ]);

    const resolutionRate = totalConversations > 0 ? (resolvedConversations / totalConversations) * 100 : 0;

    return {
      teamId,
      period: { days, startDate },
      totalConversations,
      resolvedConversations,
      resolutionRate,
      avgResolutionTimeSeconds: avgResolutionTime,
      agentCount: teamAgents.length,
      onlineAgents: teamAgents.filter(a => a.presence === 'online').length,
      timestamp: new Date(),
    };
  }

  async getMessageMetrics(hours: number = 24): Promise<any> {
    const startDate = new Date();
    startDate.setHours(startDate.getHours() - hours);

    const [
      inboundCount,
      outboundCount,
      failedCount,
    ] = await Promise.all([
      this.messageRepository.count({
        where: {
          direction: 'inbound' as any,
          created_at: { $gte: startDate } as any,
        },
      }),
      this.messageRepository.count({
        where: {
          direction: 'outbound' as any,
          created_at: { $gte: startDate } as any,
        },
      }),
      this.messageRepository.count({
        where: {
          direction: 'outbound' as any,
          error: { $ne: null } as any,
          created_at: { $gte: startDate } as any,
        },
      }),
    ]);

    const successRate = outboundCount > 0 ? ((outboundCount - failedCount) / outboundCount) * 100 : 0;

    return {
      period: { hours, startDate },
      inbound: inboundCount,
      outbound: outboundCount,
      failed: failedCount,
      successRate,
      qps: (inboundCount + outboundCount) / (hours * 3600),
      timestamp: new Date(),
    };
  }

  private async getActiveConnections(): Promise<number> {
    // 从 Redis 获取活跃连接数
    const connections = await this.redisService.get<number>('active_connections');
    return connections ?? 0;
  }

  private async calculateAvgResponseTime(agentId: string, startDate: Date): Promise<number> {
    // TODO: 实现平均响应时间计算
    // 需要分析消息时间戳来计算响应时间
    return 0;
  }

  private async calculateAvgResolutionTime(teamId: string, startDate: Date): Promise<number> {
    // TODO: 实现平均解决时间计算
    // 从会话创建到解决的时间
    return 0;
  }

  async recordMetric(key: string, value: number, tags?: Record<string, string>): Promise<void> {
    const metric = {
      key,
      value,
      tags: tags || {},
      timestamp: new Date(),
    };

    // 存储到 Redis 用于实时查询
    await this.redisService.set(`metric:${key}:latest`, metric, 3600);
    
    // 添加到时序数据
    await this.redisService.enqueue('metrics', metric, Date.now());
  }
}
