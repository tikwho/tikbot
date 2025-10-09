import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Agent } from '../../agents/entities/agent.entity';
import { Conversation } from '../../conversations/entities/conversation.entity';

@Entity('teams')
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tenant_id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'jsonb', default: {} })
  settings: Record<string, any>;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // 关联
  @OneToMany(() => User, user => user.team)
  members: User[];

  @OneToMany(() => Agent, agent => agent.team)
  agents: Agent[];

  @OneToMany(() => Conversation, conversation => conversation.team)
  conversations: Conversation[];
}