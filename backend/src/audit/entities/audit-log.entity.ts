import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index } from 'typeorm';

@Entity('audit_logs')
@Index(['tenant_id', 'created_at'])
@Index(['user_id', 'created_at'])
@Index(['resource_type', 'resource_id'])
export class AuditLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tenant_id: string;

  @Column()
  user_id: string;

  @Column()
  action: string;

  @Column()
  resource_type: string;

  @Column()
  resource_id: string;

  @Column({ type: 'jsonb', default: {} })
  details: Record<string, any>;

  @Column()
  ip_address: string;

  @Column({ nullable: true })
  user_agent: string;

  @CreateDateColumn()
  created_at: Date;
}