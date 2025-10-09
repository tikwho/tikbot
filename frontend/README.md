# TikTok 客服工作台 - 前端

基于 Next.js 14 和 TypeScript 构建的现代化客服管理系统前端。

## 功能特性

- 🎨 现代化的登录界面设计（左侧logo，右侧登录表单）
- 📊 丰富的首页仪表板，包含系统功能介绍
- 🔐 完整的用户认证系统
- 📱 响应式设计，支持多设备访问
- 🎯 基于后端API的数据交互

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **状态管理**: React Context + Hooks
- **HTTP客户端**: Axios
- **图标**: Lucide React
- **通知**: React Hot Toast

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 环境配置

创建 `.env.local` 文件：

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
NEXT_PUBLIC_WS_URL=ws://localhost:3001/ws
```

### 启动开发服务器

```bash
pnpm dev
```

访问 http://localhost:3000

## 项目结构

```
frontend/
├── app/                    # Next.js App Router
│   ├── dashboard/         # 仪表板页面
│   ├── login/            # 登录页面
│   ├── layout.tsx        # 根布局
│   ├── page.tsx          # 首页
│   └── globals.css       # 全局样式
├── components/            # 可复用组件
│   └── layout/           # 布局组件
├── lib/                  # 工具库
│   ├── api.ts           # API 客户端
│   └── auth.tsx         # 认证上下文
└── public/              # 静态资源
```

## 主要页面

### 登录页面 (`/login`)
- 左侧：品牌logo和功能介绍
- 右侧：登录表单
- 响应式设计，移动端友好

### 仪表板首页 (`/dashboard`)
- 欢迎信息和日期显示
- 实时统计数据卡片
- 系统功能介绍
- 快速操作入口
- 使用提示和最佳实践

## API 集成

项目已集成完整的后端API：

- **认证**: 登录、登出、用户信息
- **对话管理**: 获取对话列表、消息处理
- **账号管理**: TikTok账号管理
- **数据统计**: 系统指标和报表
- **团队管理**: 成员和权限管理

## 开发说明

### 认证流程
1. 用户在登录页面输入凭据
2. 前端调用 `/auth/login` API
3. 成功后保存 JWT token 和用户信息
4. 自动添加 Authorization header 到后续请求
5. Token 过期时自动跳转到登录页

### 状态管理
- 使用 React Context 管理全局认证状态
- 本地存储持久化用户会话
- 自动处理登录状态恢复

### 样式系统
- Tailwind CSS 提供原子化样式
- 自定义组件类封装常用样式
- 响应式设计断点
- 深色模式支持（可扩展）

## 构建部署

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 环境要求

- Node.js 18+
- pnpm 8+
- 现代浏览器支持

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request