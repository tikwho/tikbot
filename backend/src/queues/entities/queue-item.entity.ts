import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, Index } from 'typeorm';
import { Priority } from 'shared/types';
import { Conversation } from '../../conversations/entities/conversation.entity';
import { Team } from '../../teams/entities/team.entity';

@Entity('queue_items')
@Index(['team_id', 'priority', 'created_at'])
@Index(['expires_at'])
export class QueueItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  conversation_id: string;

  @Column()
  team_id: string;

  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.NORMAL,
  })
  priority: Priority;

  @Column({ type: 'text', array: true, default: [] })
  skills_required: string[];

  @Column({ type: 'text', array: true, default: [] })
  languages_required: string[];

  @Column({ type: 'timestamp', nullable: true })
  assigned_at: Date;

  @Column()
  expires_at: Date;

  @Column({ type: 'jsonb', default: {} })
  meta: Record<string, any>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // 关联
  @ManyToOne(() => Conversation)
  conversation: Conversation;

  @ManyToOne(() => Team)
  team: Team;
}