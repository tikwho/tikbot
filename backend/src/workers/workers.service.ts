import { Injectable, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TikTokWorker } from './tiktok-worker.service';
import { AccountsService } from '../accounts/accounts.service';

@Injectable()
export class WorkersService implements OnModuleInit {
  constructor(
    private tikTokWorker: TikTokWorker,
    private accountsService: AccountsService,
  ) {}

  async onModuleInit() {
    // await this.tikTokWorker.initialize();
    // await this.startActiveWorkers();
  }

  private async startActiveWorkers(): Promise<void> {
    const activeAccounts = await this.accountsService.findByTenant('default'); // TODO: 支持多租户
    
    for (const account of activeAccounts) {
      if (account.is_active) {
        await this.tikTokWorker.startWorker(account.id);
      }
    }
  }

  async startWorker(accountId: string): Promise<void> {
    await this.tikTokWorker.startWorker(accountId);
  }

  async stopWorker(accountId: string): Promise<void> {
    await this.tikTokWorker.stopWorker(accountId);
  }

  async restartWorker(accountId: string): Promise<void> {
    await this.tikTokWorker.restartWorker(accountId);
  }

  async getWorkerStatuses(): Promise<any[]> {
    return await this.tikTokWorker.getAllWorkerStatuses();
  }

  // 定时检查过期的账号
  @Cron(CronExpression.EVERY_HOUR)
  async checkExpiredAccounts(): Promise<void> {
    const expiringSoon = await this.accountsService.getExpiringSoon(3);
    
    for (const account of expiringSoon) {
      console.log(`⚠️ Account ${account.username} expires soon: ${account.expires_at}`);
      // TODO: 发送通知给管理员
    }
  }

  // 定时重启异常的 Worker
  @Cron(CronExpression.EVERY_5_MINUTES)
  async healthCheck(): Promise<void> {
    const statuses = await this.getWorkerStatuses();
    
    for (const status of statuses) {
      const timeSinceLastHeartbeat = Date.now() - status.lastHeartbeat.getTime();
      
      // 如果超过 5 分钟没有心跳，重启 Worker
      if (timeSinceLastHeartbeat > 5 * 60 * 1000) {
        console.log(`🚨 Worker ${status.accountId} is unhealthy, restarting...`);
        await this.restartWorker(status.accountId);
      }
    }
  }
}