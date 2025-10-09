# API 文档

## 基础信息

- **Base URL**: `http://localhost:3001/api/v1`
- **认证方式**: JWT Bearer Token
- **内容类型**: `application/json`

## 认证

### 登录
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password"
}
```

**响应**:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "name": "用户名",
    "role": "agent",
    "tenant_id": "tenant-uuid"
  }
}
```

### 注册
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password",
  "name": "用户名",
  "tenant_name": "团队名称"
}
```

## 账号管理

### 获取账号列表
```http
GET /accounts
Authorization: Bearer <token>
```

**响应**:
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "账号名称",
      "username": "tiktok_username",
      "is_active": true,
      "expires_at": "2024-12-31T23:59:59Z",
      "proxy_config": {
        "type": "http",
        "host": "proxy.example.com",
        "port": 8080
      },
      "created_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### 创建账号
```http
POST /accounts
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "账号名称",
  "username": "tiktok_username",
  "encrypted_session": "加密的会话数据",
  "user_agent": "Mozilla/5.0...",
  "language": "zh-CN",
  "timezone": "Asia/Shanghai",
  "expires_at": "2024-12-31T23:59:59Z",
  "proxy_config": {
    "type": "http",
    "host": "proxy.example.com",
    "port": 8080,
    "username": "proxy_user",
    "password": "proxy_pass"
  }
}
```

### 更新账号
```http
PUT /accounts/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "新账号名称",
  "is_active": false
}
```

### 测试代理
```http
POST /accounts/:id/test-proxy
Authorization: Bearer <token>
```

**响应**:
```json
{
  "success": true,
  "message": "代理连接成功",
  "ip": "123.456.789.0"
}
```

### 删除账号
```http
DELETE /accounts/:id
Authorization: Bearer <token>
```

## 对话管理

### 获取对话列表
```http
GET /conversations
Authorization: Bearer <token>
Query Parameters:
- status: open|assigned|closed
- assigned_to: agent_id
- account_id: account_id
- page: 1
- limit: 20
```

**响应**:
```json
{
  "data": [
    {
      "id": "uuid",
      "account_id": "account-uuid",
      "customer_id": "customer-id",
      "customer_name": "客户名称",
      "status": "open",
      "assigned_to": "agent-uuid",
      "last_message": {
        "content": "最后一条消息",
        "created_at": "2024-01-01T12:00:00Z"
      },
      "unread_count": 3,
      "created_at": "2024-01-01T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

### 获取对话详情
```http
GET /conversations/:id
Authorization: Bearer <token>
```

### 分配对话
```http
PUT /conversations/:id/assign
Authorization: Bearer <token>
Content-Type: application/json

{
  "agent_id": "agent-uuid"
}
```

### 关闭对话
```http
PUT /conversations/:id/close
Authorization: Bearer <token>
```

## 消息管理

### 获取消息列表
```http
GET /conversations/:id/messages
Authorization: Bearer <token>
Query Parameters:
- page: 1
- limit: 50
```

**响应**:
```json
{
  "data": [
    {
      "id": "uuid",
      "conversation_id": "conversation-uuid",
      "sender_type": "customer",
      "sender_id": "customer-id",
      "content": "消息内容",
      "message_type": "text",
      "attachments": [],
      "created_at": "2024-01-01T12:00:00Z"
    }
  ]
}
```

### 发送消息
```http
POST /conversations/:id/messages
Authorization: Bearer <token>
Content-Type: application/json

{
  "content": "回复内容",
  "message_type": "text",
  "attachments": []
}
```

### 标记已读
```http
PUT /conversations/:id/messages/read
Authorization: Bearer <token>
```

## 队列管理

### 获取队列状态
```http
GET /queues/status
Authorization: Bearer <token>
```

**响应**:
```json
{
  "total_pending": 25,
  "by_priority": {
    "high": 5,
    "medium": 15,
    "low": 5
  },
  "by_account": {
    "account-1": 10,
    "account-2": 15
  },
  "processing_time": {
    "average": 120,
    "median": 90
  }
}
```

### 获取队列项目
```http
GET /queues/items
Authorization: Bearer <token>
Query Parameters:
- status: pending|processing|completed|failed
- priority: high|medium|low
- account_id: account_id
```

## 团队管理

### 获取团队信息
```http
GET /teams/current
Authorization: Bearer <token>
```

### 获取团队成员
```http
GET /teams/members
Authorization: Bearer <token>
```

### 邀请成员
```http
POST /teams/invite
Authorization: Bearer <token>
Content-Type: application/json

{
  "email": "new-member@example.com",
  "role": "agent",
  "name": "新成员"
}
```

## 用户管理

### 获取当前用户信息
```http
GET /users/profile
Authorization: Bearer <token>
```

### 更新用户信息
```http
PUT /users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "新名称",
  "avatar": "头像URL"
}
```

### 修改密码
```http
PUT /users/password
Authorization: Bearer <token>
Content-Type: application/json

{
  "current_password": "当前密码",
  "new_password": "新密码"
}
```

## 指标和监控

### 获取系统指标
```http
GET /metrics
Authorization: Bearer <token>
```

### 获取账号统计
```http
GET /metrics/accounts
Authorization: Bearer <token>
```

**响应**:
```json
{
  "total_accounts": 10,
  "active_accounts": 8,
  "expired_accounts": 2,
  "expiring_soon": 1
}
```

### 获取消息统计
```http
GET /metrics/messages
Authorization: Bearer <token>
Query Parameters:
- period: day|week|month
- account_id: account_id
```

**响应**:
```json
{
  "period": "day",
  "total_sent": 150,
  "total_received": 200,
  "response_time": {
    "average": 120,
    "median": 90
  },
  "by_hour": [
    { "hour": 0, "sent": 5, "received": 8 },
    { "hour": 1, "sent": 3, "received": 4 }
  ]
}
```

## WebSocket 事件

连接到 `ws://localhost:3001/ws` 并发送认证消息：

```json
{
  "type": "auth",
  "token": "jwt-token"
}
```

### 事件类型

#### 新消息
```json
{
  "type": "new_message",
  "data": {
    "conversation_id": "uuid",
    "message": {
      "id": "uuid",
      "content": "消息内容",
      "sender_type": "customer",
      "created_at": "2024-01-01T12:00:00Z"
    }
  }
}
```

#### 对话状态更新
```json
{
  "type": "conversation_updated",
  "data": {
    "conversation_id": "uuid",
    "status": "assigned",
    "assigned_to": "agent-uuid"
  }
}
```

#### 账号状态更新
```json
{
  "type": "account_status",
  "data": {
    "account_id": "uuid",
    "status": "offline",
    "message": "账号会话已过期"
  }
}
```

## 错误处理

所有 API 错误都遵循统一格式：

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "请求参数验证失败",
    "details": [
      {
        "field": "email",
        "message": "邮箱格式不正确"
      }
    ]
  }
}
```

### 常见错误码

- `UNAUTHORIZED`: 未授权访问
- `FORBIDDEN`: 权限不足
- `NOT_FOUND`: 资源不存在
- `VALIDATION_ERROR`: 参数验证失败
- `ACCOUNT_EXPIRED`: 账号已过期
- `PROXY_ERROR`: 代理连接失败
- `RATE_LIMIT_EXCEEDED`: 请求频率超限

## 限制说明

- API 请求频率限制: 100 请求/分钟
- 文件上传大小限制: 10MB
- 消息内容长度限制: 4000 字符
- 批量操作限制: 100 项/次