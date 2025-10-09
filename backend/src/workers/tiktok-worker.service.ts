import { Injectable } from '@nestjs/common';
import { chromium, Browser, BrowserContext, Page } from 'playwright';
import { AccountsService } from '../accounts/accounts.service';
import { ConversationsService } from '../conversations/conversations.service';
import { MessagesService } from '../messages/messages.service';
import { RedisService } from '../redis/redis.service';

export interface WorkerStatus {
  accountId: string;
  status: 'init' | 'connecting' | 'connected' | 'error' | 'reconnecting';
  lastHeartbeat: Date;
  errorCount: number;
}

@Injectable()
export class TikTokWorker {
  private workers = new Map<string, WorkerInstance>();
  private browser: Browser;

  constructor(
    private accountsService: AccountsService,
    private conversationsService: ConversationsService,
    private messagesService: MessagesService,
    private redisService: RedisService,
  ) {}

  async initialize() {
    this.browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    console.log('🤖 TikTok Worker initialized');
  }

  async startWorker(accountId: string): Promise<void> {
    if (this.workers.has(accountId)) {
      console.log(`Worker for account ${accountId} already running`);
      return;
    }

    const account = await this.accountsService.findById(accountId);
    const sessionData = await this.accountsService.getDecryptedSession(accountId);

    const worker = new WorkerInstance(
      accountId,
      account,
      sessionData,
      this.browser,
      this.conversationsService,
      this.messagesService,
      this.redisService,
      this.accountsService,
    );

    this.workers.set(accountId, worker);
    await worker.start();
  }

  async stopWorker(accountId: string): Promise<void> {
    const worker = this.workers.get(accountId);
    if (worker) {
      await worker.stop();
      this.workers.delete(accountId);
    }
  }

  async getWorkerStatus(accountId: string): Promise<WorkerStatus | null> {
    const worker = this.workers.get(accountId);
    return worker ? worker.getStatus() : null;
  }

  async getAllWorkerStatuses(): Promise<WorkerStatus[]> {
    return Array.from(this.workers.values()).map(worker => worker.getStatus());
  }

  async restartWorker(accountId: string): Promise<void> {
    await this.stopWorker(accountId);
    await this.startWorker(accountId);
  }
}

class WorkerInstance {
  private context: BrowserContext;
  private page: Page;
  private status: WorkerStatus;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private heartbeatInterval: NodeJS.Timeout;

  constructor(
    private accountId: string,
    private account: any,
    private sessionData: string,
    private browser: Browser,
    private conversationsService: ConversationsService,
    private messagesService: MessagesService,
    private redisService: RedisService,
    private accountsService: AccountsService,
  ) {
    this.status = {
      accountId,
      status: 'init',
      lastHeartbeat: new Date(),
      errorCount: 0,
    };
  }

  async start(): Promise<void> {
    try {
      this.status.status = 'connecting';
      
      // 创建浏览器上下文
      this.context = await this.browser.newContext({
        userAgent: this.account.user_agent,
        locale: this.account.language,
        timezoneId: this.account.timezone,
      });

      // 设置 Cookie
      const cookies = JSON.parse(this.sessionData);
      await this.context.addCookies(cookies);

      // 创建页面
      this.page = await this.context.newPage();

      // 监听网络请求
      this.page.on('response', this.handleResponse.bind(this));
      this.page.on('websocket', this.handleWebSocket.bind(this));

      // 导航到 TikTok 消息页面
      await this.page.goto('https://www.tiktok.com/messages');
      
      // 等待页面加载
      await this.page.waitForSelector('[data-e2e="message-list"]', { timeout: 30000 });

      this.status.status = 'connected';
      this.status.lastHeartbeat = new Date();
      this.reconnectAttempts = 0;

      // 启动心跳
      this.startHeartbeat();

      console.log(`✅ Worker for account ${this.accountId} connected`);
    } catch (error) {
      console.error(`❌ Worker for account ${this.accountId} failed to start:`, error);
      this.status.status = 'error';
      this.status.errorCount++;
      
      // 尝试重连
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        setTimeout(() => this.reconnect(), 5000 * Math.pow(2, this.reconnectAttempts));
      }
    }
  }

  async stop(): Promise<void> {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
    }
    
    if (this.page) {
      await this.page.close();
    }
    
    if (this.context) {
      await this.context.close();
    }

    console.log(`🛑 Worker for account ${this.accountId} stopped`);
  }

  private async reconnect(): Promise<void> {
    this.reconnectAttempts++;
    this.status.status = 'reconnecting';
    
    console.log(`🔄 Reconnecting worker for account ${this.accountId} (attempt ${this.reconnectAttempts})`);
    
    try {
      await this.stop();
      await this.start();
    } catch (error) {
      console.error(`❌ Reconnection failed for account ${this.accountId}:`, error);
      
      if (this.reconnectAttempts < this.maxReconnectAttempts) {
        setTimeout(() => this.reconnect(), 5000 * Math.pow(2, this.reconnectAttempts));
      } else {
        this.status.status = 'error';
        console.error(`💀 Max reconnection attempts reached for account ${this.accountId}`);
      }
    }
  }

  private startHeartbeat(): void {
    this.heartbeatInterval = setInterval(async () => {
      try {
        // 检查页面是否还活着
        await this.page.evaluate(() => document.title);
        
        this.status.lastHeartbeat = new Date();
        
        // 更新数据库中的心跳时间
        await this.accountsService.updateHeartbeat(this.accountId);
        
        // 发布心跳事件
        await this.redisService.publish(`worker:${this.accountId}:heartbeat`, {
          timestamp: this.status.lastHeartbeat,
          status: this.status.status,
        });
      } catch (error) {
        console.error(`💔 Heartbeat failed for account ${this.accountId}:`, error);
        this.status.errorCount++;
        
        // 触发重连
        if (this.status.status === 'connected') {
          this.reconnect();
        }
      }
    }, 30000); // 30秒心跳
  }

  private async handleResponse(response: any): Promise<void> {
    // 处理 TikTok API 响应，提取新消息
    if (response.url().includes('/api/message/') && response.status() === 200) {
      try {
        const data = await response.json();
        await this.processIncomingMessages(data);
      } catch (error) {
        console.error('Error processing response:', error);
      }
    }
  }

  private async handleWebSocket(ws: any): Promise<void> {
    // 处理 WebSocket 连接，监听实时消息
    ws.on('framereceived', async (event: any) => {
      try {
        const data = JSON.parse(event.payload);
        await this.processWebSocketMessage(data);
      } catch (error) {
        console.error('Error processing WebSocket message:', error);
      }
    });
  }

  private async processIncomingMessages(data: any): Promise<void> {
    // TODO: 解析 TikTok 消息格式，创建会话和消息
    console.log('Processing incoming messages:', data);
  }

  private async processWebSocketMessage(data: any): Promise<void> {
    // TODO: 处理实时 WebSocket 消息
    console.log('Processing WebSocket message:', data);
  }

  async sendMessage(conversationId: string, text: string): Promise<boolean> {
    try {
      // TODO: 实现消息发送逻辑
      // 1. 找到对应的聊天窗口
      // 2. 输入文本
      // 3. 点击发送
      // 4. 等待发送确认
      
      console.log(`Sending message to conversation ${conversationId}: ${text}`);
      
      // 模拟发送延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return true;
    } catch (error) {
      console.error(`Failed to send message: ${error}`);
      return false;
    }
  }

  getStatus(): WorkerStatus {
    return { ...this.status };
  }
}
