import { Injectable } from '@nestjs/common';
import { RedisService } from '../../redis/redis.service';

export interface ConversationLock {
  conversationId: string;
  agentId: string;
  lockId: string;
  expiresAt: Date;
}

interface ConversationLockInfo {
  agentId: string;
  acquiredAt: string | Date;
  expiresAt: string | Date;
}

@Injectable()
export class ConversationLockService {
  private readonly LOCK_TTL = 120000; // 2分钟
  private readonly LOCK_PREFIX = 'conv_lock:';

  constructor(private redisService: RedisService) {}

  async acquireLock(conversationId: string, agentId: string): Promise<ConversationLock | null> {
    const lockKey = `${this.LOCK_PREFIX}${conversationId}`;
    const lockId = await this.redisService.acquireLock(lockKey, this.LOCK_TTL);
    
    if (!lockId) {
      return null;
    }

    const lock: ConversationLock = {
      conversationId,
      agentId,
      lockId,
      expiresAt: new Date(Date.now() + this.LOCK_TTL),
    };

    // 存储锁信息
    await this.redisService.hset(lockKey, 'info', {
      agentId,
      acquiredAt: new Date(),
      expiresAt: lock.expiresAt,
    });

    return lock;
  }

  async renewLock(conversationId: string, lockId: string): Promise<boolean> {
    const lockKey = `${this.LOCK_PREFIX}${conversationId}`;
    const renewed = await this.redisService.renewLock(lockKey, lockId, this.LOCK_TTL);
    
    if (renewed) {
      // 更新锁信息
      const lockInfo = await this.redisService.hget<ConversationLockInfo>(lockKey, 'info');
      if (lockInfo) {
        lockInfo.expiresAt = new Date(Date.now() + this.LOCK_TTL);
        await this.redisService.hset(lockKey, 'info', lockInfo);
      }
    }
    
    return renewed;
  }

  async releaseLock(conversationId: string, lockId: string): Promise<boolean> {
    const lockKey = `${this.LOCK_PREFIX}${conversationId}`;
    const released = await this.redisService.releaseLock(lockKey, lockId);
    
    if (released) {
      await this.redisService.hdel(lockKey, 'info');
    }
    
    return released;
  }

  async getLockInfo(conversationId: string): Promise<any> {
    const lockKey = `${this.LOCK_PREFIX}${conversationId}`;
    return await this.redisService.hget(lockKey, 'info');
  }

  async isLocked(conversationId: string): Promise<boolean> {
    const lockKey = `${this.LOCK_PREFIX}${conversationId}`;
    return await this.redisService.exists(lockKey);
  }

  async forceReleaseLock(conversationId: string): Promise<void> {
    const lockKey = `${this.LOCK_PREFIX}${conversationId}`;
    await this.redisService.del(lockKey);
  }

  // 自动续租锁（坐席活跃时）
  async startAutoRenewal(conversationId: string, lockId: string): Promise<NodeJS.Timeout> {
    const interval = setInterval(async () => {
      const renewed = await this.renewLock(conversationId, lockId);
      if (!renewed) {
        clearInterval(interval);
      }
    }, this.LOCK_TTL / 3); // 每40秒续租一次

    return interval;
  }

  stopAutoRenewal(interval: NodeJS.Timeout): void {
    clearInterval(interval);
  }
}
