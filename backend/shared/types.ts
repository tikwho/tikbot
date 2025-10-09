// 用户角色
export enum UserRole {
  OWNER = 'owner',
  ADMIN = 'admin', 
  MANAGER = 'manager',
  AGENT = 'agent',
  AUDITOR = 'auditor'
}

// 会话状态
export enum ConversationStatus {
  OPEN = 'open',
  PENDING = 'pending', 
  SNOOZED = 'snoozed',
  RESOLVED = 'resolved',
  LOCKED = 'locked'
}

// 消息方向
export enum MessageDirection {
  INBOUND = 'inbound',
  OUTBOUND = 'outbound', 
  INTERNAL_NOTE = 'internal_note'
}

// 渠道类型
export enum Channel {
  DM = 'dm',
  COMMENT = 'comment'
}

// 坐席状态
export enum AgentPresence {
  ONLINE = 'online',
  AWAY = 'away',
  BUSY = 'busy', 
  OFFLINE = 'offline'
}

// 会话优先级
export enum Priority {
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
  VIP = 'vip'
}

// 基础实体接口
export interface BaseEntity {
  id: string;
  created_at: Date;
  updated_at: Date;
}

// 租户
export interface Tenant extends BaseEntity {
  name: string;
  settings: Record<string, any>;
}

// 团队
export interface Team extends BaseEntity {
  tenant_id: string;
  name: string;
  description?: string;
}

// 用户
export interface User extends BaseEntity {
  email: string;
  name: string;
  role: UserRole;
  tenant_id: string;
  team_id?: string;
}

// 坐席
export interface Agent extends BaseEntity {
  user_id: string;
  team_id: string;
  skills: string[];
  languages: string[];
  capacity: number;
  presence: AgentPresence;
  current_load: number;
  last_seen_at: Date;
}

// TikTok 账号
export interface Account extends BaseEntity {
  tenant_id: string;
  name: string;
  username: string;
  encrypted_session: string; // 加密的 Cookie 等会话信息
  proxy_config?: Record<string, any>;
  user_agent: string;
  language: string;
  timezone: string;
  expires_at: Date;
  is_active: boolean;
  last_heartbeat: Date;
}

// 会话
export interface Conversation extends BaseEntity {
  tenant_id: string;
  team_id: string;
  account_id: string;
  channel: Channel;
  user_id: string; // TikTok 用户 ID
  video_id?: string; // 评论所属视频 ID
  status: ConversationStatus;
  priority: Priority;
  assignee_id?: string;
  follower_ids: string[];
  locked_by?: string;
  locked_until?: Date;
  last_msg_at: Date;
  tags: string[];
  meta: Record<string, any>;
}

// 消息
export interface Message extends BaseEntity {
  conversation_id: string;
  direction: MessageDirection;
  body: string;
  body_plain: string;
  attachments?: Attachment[];
  author_id?: string; // 坐席 ID (outbound/internal_note)
  external_ref?: Record<string, any>; // TikTok 消息引用
  idempotency_key?: string;
  sent_at?: Date;
  error?: string;
}

// 附件
export interface Attachment {
  id: string;
  filename: string;
  content_type: string;
  size: number;
  url: string;
}

// 队列项
export interface QueueItem extends BaseEntity {
  conversation_id: string;
  team_id: string;
  priority: Priority;
  skills_required: string[];
  languages_required: string[];
  assigned_at?: Date;
  expires_at: Date;
}

// 模板
export interface Template extends BaseEntity {
  name: string;
  content: string;
  variables: string[];
  team_id?: string; // null 表示个人模板
  author_id: string;
  is_active: boolean;
}

// 审计日志
export interface AuditLog extends BaseEntity {
  tenant_id: string;
  user_id: string;
  action: string;
  resource_type: string;
  resource_id: string;
  details: Record<string, any>;
  ip_address: string;
}

// WebSocket 事件
export interface WSEvent {
  type: string;
  data: any;
  timestamp: Date;
}

// API 响应
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// 分页响应
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// 收件箱过滤器
export interface InboxFilter {
  status?: ConversationStatus[];
  assignee?: 'me' | 'team' | 'unassigned';
  priority?: Priority[];
  tags?: string[];
  search?: string;
  date_from?: Date;
  date_to?: Date;
}

// 坐席统计
export interface AgentStats {
  agent_id: string;
  conversations_handled: number;
  avg_response_time: number;
  resolution_rate: number;
  current_load: number;
  online_time: number;
}

// 系统指标
export interface SystemMetrics {
  active_connections: number;
  messages_per_second: number;
  avg_response_time: number;
  queue_length: number;
  error_rate: number;
}