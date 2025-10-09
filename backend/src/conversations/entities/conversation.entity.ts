import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, Index } from 'typeorm';
import { ConversationStatus, Channel, Priority } from 'shared/types';
import { Team } from '../../teams/entities/team.entity';
import { Account } from '../../accounts/entities/account.entity';
import { Agent } from '../../agents/entities/agent.entity';
import { Message } from '../../messages/entities/message.entity';

@Entity('conversations')
@Index(['account_id', 'channel', 'user_id'], { unique: true })
@Index(['status', 'priority', 'last_msg_at'])
@Index(['assignee_id', 'status'])
export class Conversation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tenant_id: string;

  @Column()
  team_id: string;

  @Column()
  account_id: string;

  @Column({
    type: 'enum',
    enum: Channel,
  })
  channel: Channel;

  @Column()
  user_id: string; // TikTok 用户 ID

  @Column({ nullable: true })
  video_id: string; // 评论所属视频 ID

  @Column({
    type: 'enum',
    enum: ConversationStatus,
    default: ConversationStatus.OPEN,
  })
  status: ConversationStatus;

  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.NORMAL,
  })
  priority: Priority;

  @Column({ nullable: true })
  assignee_id: string;

  @Column({ type: 'text', array: true, default: [] })
  follower_ids: string[];

  @Column({ nullable: true })
  locked_by: string;

  @Column({ type: 'timestamp', nullable: true })
  locked_until: Date;

  @Column()
  last_msg_at: Date;

  @Column({ type: 'text', array: true, default: [] })
  tags: string[];

  @Column({ type: 'jsonb', default: {} })
  meta: Record<string, any>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // 关联
  @ManyToOne(() => Team, team => team.conversations)
  team: Team;

  @ManyToOne(() => Account, account => account.conversations)
  account: Account;

  @ManyToOne(() => Agent, agent => agent.assigned_conversations)
  assignee: Agent;

  @OneToMany(() => Message, message => message.conversation)
  messages: Message[];
}