import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { TikTokWorker } from './tiktok-worker.service';
import { AccountsModule } from '../accounts/accounts.module';
import { ConversationsModule } from '../conversations/conversations.module';
import { MessagesModule } from '../messages/messages.module';

@Module({
  imports: [AccountsModule, ConversationsModule, MessagesModule],
  providers: [WorkersService, TikTokWorker],
  exports: [WorkersService],
})
export class WorkersModule {}