import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

// 核心模块
import { RedisModule } from './redis/redis.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
import { AccountsModule } from './accounts/accounts.module';
import { ConversationsModule } from './conversations/conversations.module';
import { MessagesModule } from './messages/messages.module';
import { AgentsModule } from './agents/agents.module';
import { QueuesModule } from './queues/queues.module';
import { TemplatesModule } from './templates/templates.module';
import { WorkersModule } from './workers/workers.module';
import { WebsocketModule } from './websocket/websocket.module';
import { MetricsModule } from './metrics/metrics.module';

// 实体
import { User } from './users/entities/user.entity';
import { Team } from './teams/entities/team.entity';
import { Account } from './accounts/entities/account.entity';
import { Conversation } from './conversations/entities/conversation.entity';
import { Message } from './messages/entities/message.entity';
import { Agent } from './agents/entities/agent.entity';
import { QueueItem } from './queues/entities/queue-item.entity';
import { Template } from './templates/entities/template.entity';
import { AuditLog } from './audit/entities/audit-log.entity';

@Module({
  imports: [
    // 配置模块
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
    }),

    // 数据库模块
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        entities: [
          User,
          Team, 
          Account,
          Conversation,
          Message,
          Agent,
          QueueItem,
          Template,
          AuditLog,
        ],
        synchronize: true, // 生产环境应设为 false
        logging: configService.get('NODE_ENV') === 'development',
      }),
      inject: [ConfigService],
    }),

    // 定时任务模块
    ScheduleModule.forRoot(),

    // 基础设施模块
    RedisModule,

    // 业务模块
    AuthModule,
    UsersModule,
    TeamsModule,
    AccountsModule,
    ConversationsModule,
    MessagesModule,
    AgentsModule,
    QueuesModule,
    TemplatesModule,
    WorkersModule,
    WebsocketModule,
    MetricsModule,
  ],
})
export class AppModule {}