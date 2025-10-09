import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { MessageDirection } from 'shared/types';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  async create(messageData: Partial<Message>): Promise<Message> {
    const message = this.messageRepository.create(messageData);
    return await this.messageRepository.save(message);
  }

  async findById(id: string): Promise<Message> {
    const message = await this.messageRepository.findOne({
      where: { id },
      relations: ['conversation', 'author'],
    });

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }

  async findByConversation(conversationId: string, limit: number = 100): Promise<Message[]> {
    return await this.messageRepository.find({
      where: { conversation_id: conversationId },
      relations: ['author', 'author.user'],
      order: { created_at: 'ASC' },
      take: limit,
    });
  }

  async getConversationHistory(conversationId: string, before?: Date, limit: number = 50): Promise<Message[]> {
    const query = this.messageRepository
      .createQueryBuilder('message')
      .leftJoinAndSelect('message.author', 'author')
      .leftJoinAndSelect('author.user', 'user')
      .where('message.conversation_id = :conversationId', { conversationId })
      .orderBy('message.created_at', 'DESC')
      .take(limit);

    if (before) {
      query.andWhere('message.created_at < :before', { before });
    }

    const messages = await query.getMany();
    return messages.reverse(); // 返回时按时间正序
  }

  async markAsSent(messageId: string): Promise<void> {
    await this.messageRepository.update(messageId, {
      sent_at: new Date(),
      error: null,
    });
  }

  async markAsError(messageId: string, error: string): Promise<void> {
    await this.messageRepository.update(messageId, {
      error,
    });
  }

  async getUnsentMessages(): Promise<Message[]> {
    return await this.messageRepository.find({
      where: {
        direction: MessageDirection.OUTBOUND,
        sent_at: null,
        error: null,
      },
      relations: ['conversation', 'conversation.account'],
      order: { created_at: 'ASC' },
    });
  }

  async searchMessages(query: string, conversationId?: string, limit: number = 50): Promise<Message[]> {
    const searchQuery = this.messageRepository
      .createQueryBuilder('message')
      .leftJoinAndSelect('message.conversation', 'conversation')
      .leftJoinAndSelect('message.author', 'author')
      .where('message.body_plain ILIKE :query', { query: `%${query}%` })
      .orderBy('message.created_at', 'DESC')
      .take(limit);

    if (conversationId) {
      searchQuery.andWhere('message.conversation_id = :conversationId', { conversationId });
    }

    return await searchQuery.getMany();
  }
}