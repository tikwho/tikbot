import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Conversation } from '../../conversations/entities/conversation.entity';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tenant_id: string;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column({ type: 'text' })
  encrypted_session: string; // 加密的 Cookie 等会话信息

  @Column({ type: 'jsonb', nullable: true })
  proxy_config: Record<string, any>;

  @Column()
  user_agent: string;

  @Column()
  language: string;

  @Column()
  timezone: string;

  @Column()
  expires_at: Date;

  @Column({ default: true })
  is_active: boolean;

  @Column({ type: 'timestamp', nullable: true })
  last_heartbeat: Date;

  @Column({ type: 'jsonb', default: {} })
  meta: Record<string, any>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // 关联
  @OneToMany(() => Conversation, conversation => conversation.account)
  conversations: Conversation[];
}