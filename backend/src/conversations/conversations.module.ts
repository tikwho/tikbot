import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConversationsController } from './conversations.controller';
import { ConversationsService } from './conversations.service';
import { ConversationLockService } from './services/conversation-lock.service';
import { Conversation } from './entities/conversation.entity';
import { Message } from '../messages/entities/message.entity';
import { QueuesModule } from '../queues/queues.module';
import { WebsocketModule } from '../websocket/websocket.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Conversation, Message]),
    QueuesModule,
    forwardRef(() => WebsocketModule),
  ],
  controllers: [ConversationsController],
  providers: [ConversationsService, ConversationLockService],
  exports: [ConversationsService, ConversationLockService],
})
export class ConversationsModule {}