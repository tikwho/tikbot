import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { ConversationsModule } from '../conversations/conversations.module';
import { MessagesModule } from '../messages/messages.module';
import { AgentsModule } from '../agents/agents.module';
import { QueuesModule } from '../queues/queues.module';
import { Conversation } from '../conversations/entities/conversation.entity';
import { Message } from '../messages/entities/message.entity';
import { Agent } from '../agents/entities/agent.entity';

@Module({
  imports: [
    ConversationsModule,
    MessagesModule,
    AgentsModule,
    QueuesModule,
    TypeOrmModule.forFeature([Conversation, Message, Agent]),
  ],
  controllers: [MetricsController],
  providers: [MetricsService],
  exports: [MetricsService],
})
export class MetricsModule {}