import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, Index } from 'typeorm';
import { MessageDirection } from 'shared/types';
import { Conversation } from '../../conversations/entities/conversation.entity';
import { Agent } from '../../agents/entities/agent.entity';

@Entity('messages')
@Index(['conversation_id', 'created_at'])
@Index(['idempotency_key'], { unique: true, where: 'idempotency_key IS NOT NULL' })
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  conversation_id: string;

  @Column({
    type: 'enum',
    enum: MessageDirection,
  })
  direction: MessageDirection;

  @Column({ type: 'text' })
  body: string;

  @Column({ type: 'text' })
  body_plain: string;

  @Column({ type: 'jsonb', nullable: true })
  attachments: any[];

  @Column({ nullable: true })
  author_id: string; // 坐席 ID (outbound/internal_note)

  @Column({ type: 'jsonb', nullable: true })
  external_ref: Record<string, any>; // TikTok 消息引用

  @Column({ nullable: true, unique: true })
  idempotency_key: string;

  @Column({ type: 'timestamp', nullable: true })
  sent_at: Date;

  @Column({ type: 'text', nullable: true })
  error: string;

  @Column({ type: 'jsonb', default: {} })
  meta: Record<string, any>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // 关联
  @ManyToOne(() => Conversation, conversation => conversation.messages)
  conversation: Conversation;

  @ManyToOne(() => Agent, agent => agent.messages)
  author: Agent;
}