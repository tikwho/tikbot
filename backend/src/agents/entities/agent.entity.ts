import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { AgentPresence } from 'shared/types';
import { User } from '../../users/entities/user.entity';
import { Team } from '../../teams/entities/team.entity';
import { Conversation } from '../../conversations/entities/conversation.entity';
import { Message } from '../../messages/entities/message.entity';

@Entity('agents')
export class Agent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column()
  team_id: string;

  @Column({ type: 'text', array: true, default: [] })
  skills: string[];

  @Column({ type: 'text', array: true, default: [] })
  languages: string[];

  @Column({ default: 6 })
  capacity: number;

  @Column({
    type: 'enum',
    enum: AgentPresence,
    default: AgentPresence.OFFLINE,
  })
  presence: AgentPresence;

  @Column({ default: 0 })
  current_load: number;

  @Column({ type: 'timestamp', nullable: true })
  last_seen_at: Date;

  @Column({ type: 'jsonb', default: {} })
  settings: Record<string, any>;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // 关联
  @ManyToOne(() => User, user => user.agent_profiles)
  user: User;

  @ManyToOne(() => Team, team => team.agents)
  team: Team;

  @OneToMany(() => Conversation, conversation => conversation.assignee)
  assigned_conversations: Conversation[];

  @OneToMany(() => Message, message => message.author)
  messages: Message[];
}