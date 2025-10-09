import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: Redis;
  private subscriber: Redis;
  private publisher: Redis;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    const redisUrl = this.configService.get('REDIS_URL');
    
    this.client = new Redis(redisUrl);
    this.subscriber = new Redis(redisUrl);
    this.publisher = new Redis(redisUrl);

    console.log('✅ Redis connected');
  }

  async onModuleDestroy() {
    await this.client?.quit();
    await this.subscriber?.quit();
    await this.publisher?.quit();
  }

  getClient(): Redis {
    return this.client;
  }

  getSubscriber(): Redis {
    return this.subscriber;
  }

  getPublisher(): Redis {
    return this.publisher;
  }

  // 分布式锁
  async acquireLock(key: string, ttl: number = 60000): Promise<string | null> {
    const lockId = `${Date.now()}-${Math.random()}`;
    const result = await this.client.set(
      `lock:${key}`,
      lockId,
      'PX',
      ttl,
      'NX'
    );
    return result === 'OK' ? lockId : null;
  }

  async renewLock(key: string, lockId: string, ttl: number = 60000): Promise<boolean> {
    const script = `
      if redis.call("get", KEYS[1]) == ARGV[1] then
        return redis.call("pexpire", KEYS[1], ARGV[2])
      else
        return 0
      end
    `;
    const result = await this.client.eval(script, 1, `lock:${key}`, lockId, ttl);
    return result === 1;
  }

  async releaseLock(key: string, lockId: string): Promise<boolean> {
    const script = `
      if redis.call("get", KEYS[1]) == ARGV[1] then
        return redis.call("del", KEYS[1])
      else
        return 0
      end
    `;
    const result = await this.client.eval(script, 1, `lock:${key}`, lockId);
    return result === 1;
  }

  // 队列操作
  async enqueue(queueName: string, item: any, priority: number = 0): Promise<void> {
    await this.client.zadd(
      `queue:${queueName}`,
      priority,
      JSON.stringify(item)
    );
  }

  async dequeue(queueName: string): Promise<any> {
    const result = await this.client.zpopmax(`queue:${queueName}`);
    if (result.length === 0) return null;
    return JSON.parse(result[0]);
  }

  async getQueueLength(queueName: string): Promise<number> {
    return await this.client.zcard(`queue:${queueName}`);
  }

  // 发布订阅
  async publish(channel: string, message: any): Promise<void> {
    await this.publisher.publish(channel, JSON.stringify(message));
  }

  async subscribe(channel: string, callback: (message: any) => void): Promise<void> {
    await this.subscriber.subscribe(channel);
    this.subscriber.on('message', (receivedChannel, message) => {
      if (receivedChannel === channel) {
        try {
          callback(JSON.parse(message));
        } catch (error) {
          console.error('Error parsing Redis message:', error);
        }
      }
    });
  }

  // 缓存操作
  async set(key: string, value: any, ttl?: number): Promise<void> {
    const serialized = JSON.stringify(value);
    if (ttl) {
      await this.client.setex(key, ttl, serialized);
    } else {
      await this.client.set(key, serialized);
    }
  }

  async get<T>(key: string): Promise<T | null> {
    const value = await this.client.get(key);
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch {
      return value as any;
    }
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }

  async exists(key: string): Promise<boolean> {
    return (await this.client.exists(key)) === 1;
  }

  // Hash 操作
  async hset(key: string, field: string, value: any): Promise<void> {
    await this.client.hset(key, field, JSON.stringify(value));
  }

  async hget<T>(key: string, field: string): Promise<T | null> {
    const value = await this.client.hget(key, field);
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch {
      return value as any;
    }
  }

  async hgetall<T>(key: string): Promise<Record<string, T>> {
    const hash = await this.client.hgetall(key);
    const result: Record<string, T> = {};
    for (const [field, value] of Object.entries(hash)) {
      try {
        result[field] = JSON.parse(value);
      } catch {
        result[field] = value as any;
      }
    }
    return result;
  }

  async hdel(key: string, field: string): Promise<void> {
    await this.client.hdel(key, field);
  }
}