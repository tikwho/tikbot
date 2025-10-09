import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueuesService } from './queues.service';
import { RoutingService } from './services/routing.service';
import { QueueItem } from './entities/queue-item.entity';
import { Agent } from '../agents/entities/agent.entity';
import { Conversation } from '../conversations/entities/conversation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QueueItem, Agent, Conversation])],
  providers: [QueuesService, RoutingService],
  exports: [QueuesService, RoutingService],
})
export class QueuesModule {}