import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QueueItem } from './entities/queue-item.entity';
import { RoutingService } from './services/routing.service';
import { RedisService } from '../redis/redis.service';
import { Priority } from 'shared/types';

@Injectable()
export class QueuesService {
  constructor(
    @InjectRepository(QueueItem)
    private queueRepository: Repository<QueueItem>,
    private routingService: RoutingService,
    private redisService: RedisService,
  ) {}

  async getQueueStats(teamId: string): Promise<any> {
    const totalItems = await this.queueRepository.count({
      where: { team_id: teamId },
    });

    const priorityStats = await this.queueRepository
      .createQueryBuilder('queue')
      .select('queue.priority', 'priority')
      .addSelect('COUNT(*)', 'count')
      .where('queue.team_id = :teamId', { teamId })
      .groupBy('queue.priority')
      .getRawMany();

    const avgWaitTime = await this.queueRepository
      .createQueryBuilder('queue')
      .select('AVG(EXTRACT(EPOCH FROM (NOW() - queue.created_at)))', 'avg_wait_seconds')
      .where('queue.team_id = :teamId', { teamId })
      .getRawOne();

    return {
      teamId,
      totalItems,
      priorityStats,
      avgWaitTimeSeconds: parseFloat(avgWaitTime.avg_wait_seconds) || 0,
      timestamp: new Date(),
    };
  }

  async getQueueItems(teamId: string, limit: number = 50): Promise<QueueItem[]> {
    return await this.queueRepository.find({
      where: { team_id: teamId },
      relations: ['conversation', 'conversation.account'],
      order: {
        priority: 'DESC',
        created_at: 'ASC',
      },
      take: limit,
    });
  }

  async claimNext(agentId: string, teamId: string): Promise<any> {
    return await this.routingService.claimFromQueue(agentId, teamId);
  }

  async removeExpired(): Promise<void> {
    const expired = await this.queueRepository.find({
      where: {
        expires_at: { $lte: new Date() } as any,
      },
    });

    if (expired.length > 0) {
      await this.queueRepository.remove(expired);
      console.log(`Removed ${expired.length} expired queue items`);
    }
  }

  async getPriorityDistribution(teamId: string): Promise<Record<Priority, number>> {
    const stats = await this.queueRepository
      .createQueryBuilder('queue')
      .select('queue.priority', 'priority')
      .addSelect('COUNT(*)', 'count')
      .where('queue.team_id = :teamId', { teamId })
      .groupBy('queue.priority')
      .getRawMany();

    const distribution: Record<Priority, number> = {
      [Priority.LOW]: 0,
      [Priority.NORMAL]: 0,
      [Priority.HIGH]: 0,
      [Priority.VIP]: 0,
    };

    stats.forEach(stat => {
      distribution[stat.priority as Priority] = parseInt(stat.count);
    });

    return distribution;
  }
}