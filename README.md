# TikTok 客服系统

一个完整的 TikTok 客服管理系统，支持多账号管理、自动化消息处理、团队协作和实时监控。

## 🚀 功能特性

### 核心功能
- **多账号管理**: 支持多个 TikTok 账号的统一管理
- **浏览器插件**: 一键检测和导入 TikTok 账号信息
- **实时消息**: WebSocket 实时消息推送和处理
- **智能路由**: 基于规则的消息自动分配
- **团队协作**: 多用户、多角色的团队管理
- **代理支持**: 支持 HTTP/HTTPS/SOCKS5 代理配置

### 技术特性
- **现代化架构**: NestJS + Next.js + TypeScript
- **实时通信**: WebSocket + Redis 发布订阅
- **数据存储**: PostgreSQL + Redis 缓存
- **文件存储**: Cloudflare R2 对象存储
- **监控指标**: Prometheus 兼容的指标收集
- **容器化**: Docker 和 Docker Compose 支持

## 📋 系统要求

- Node.js 18+
- PostgreSQL 13+
- Redis 6+
- Chrome/Edge 浏览器（用于插件）

## 🛠️ 快速开始

### 1. 克隆项目

```bash
git clone <repository-url>
cd tiktok-cs
```

### 2. 自动安装

```bash
chmod +x scripts/setup.sh
./scripts/setup.sh
```

### 3. 配置环境

编辑 `.env` 文件，配置数据库和其他必要设置：

```bash
# 数据库配置
DATABASE_URL="postgresql://username:password@localhost:5432/tiktok_cs"

# Redis 配置
REDIS_URL="redis://localhost:6379"

# JWT 密钥
JWT_SECRET="your-super-secret-jwt-key"

# 加密密钥
ENCRYPTION_KEY="your-encryption-key-for-sessions"

# Cloudflare R2 配置（可选）
CLOUDFLARE_ACCOUNT_ID="your-account-id"
CLOUDFLARE_ACCESS_KEY_ID="your-access-key"
CLOUDFLARE_SECRET_ACCESS_KEY="your-secret-key"
CLOUDFLARE_BUCKET_NAME="tiktok-cs-storage"
```

### 4. 启动开发环境

```bash
chmod +x scripts/dev.sh
./scripts/dev.sh
```

或者手动启动：

```bash
# 终端 1: 启动后端
cd backend
npm run start:dev

# 终端 2: 启动前端
cd frontend
npm run dev

# 终端 3: 构建插件
cd extension
npm run build
```

### 5. 访问系统

- 前端界面: http://localhost:3000
- 后端 API: http://localhost:3001
- API 文档: http://localhost:3001/api/docs

## 🔌 浏览器插件安装

1. 构建插件：
   ```bash
   cd extension
   npm run build
   ```

2. 在 Chrome 中加载插件：
   - 打开 `chrome://extensions/`
   - 启用"开发者模式"
   - 点击"加载已解压的扩展程序"
   - 选择 `extension/dist` 目录

3. 使用插件：
   - 访问任意 TikTok 用户页面
   - 点击插件图标
   - 点击"检测账号"按钮
   - 配置代理（可选）
   - 上传到系统

## 📁 项目结构

```
tiktok-cs/
├── backend/                 # NestJS 后端
│   ├── src/
│   │   ├── accounts/       # 账号管理
│   │   ├── agents/         # 客服代理
│   │   ├── auth/           # 认证授权
│   │   ├── conversations/  # 对话管理
│   │   ├── messages/       # 消息处理
│   │   ├── queues/         # 队列管理
│   │   ├── teams/          # 团队管理
│   │   ├── users/          # 用户管理
│   │   ├── websocket/      # WebSocket 网关
│   │   └── workers/        # TikTok 工作进程
│   └── package.json
├── frontend/               # Next.js 前端
│   ├── app/               # App Router 页面
│   ├── components/        # React 组件
│   ├── lib/              # 工具库
│   └── package.json
├── extension/             # 浏览器插件
│   ├── src/
│   │   ├── popup.html    # 插件弹窗
│   │   ├── popup.js      # 弹窗脚本
│   │   ├── background.js # 后台脚本
│   │   ├── content.js    # 内容脚本
│   │   └── inject.js     # 注入脚本
│   └── manifest.json
├── shared/               # 共享类型定义
├── scripts/              # 部署脚本
└── docs/                # 文档
```

## 🔧 开发指南

### 后端开发

```bash
cd backend

# 启动开发服务器
npm run start:dev

# 运行测试
npm run test

# 生成数据库迁移
npm run migration:generate -- -n MigrationName

# 运行迁移
npm run migration:run
```

### 前端开发

```bash
cd frontend

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 运行测试
npm run test
```

### 插件开发

```bash
cd extension

# 开发模式构建
npm run dev

# 生产构建
npm run build

# 监听文件变化
npm run watch
```

## 🚀 部署

### 生产构建

```bash
chmod +x scripts/build.sh
./scripts/build.sh
```

### Docker 部署

```bash
cd dist
docker-compose up -d
```

### 手动部署

```bash
cd dist
./start.sh
```

## 📊 监控和指标

系统提供以下监控指标：

- **账号状态**: 活跃账号数、过期账号数
- **消息统计**: 发送/接收消息数、响应时间
- **队列状态**: 待处理消息数、处理速度
- **系统性能**: CPU、内存、网络使用情况

访问 `http://localhost:3001/metrics` 查看 Prometheus 格式的指标。

## 🔐 安全考虑

- 所有账号会话数据使用 AES-256 加密存储
- JWT Token 用于 API 认证
- 支持代理配置保护账号 IP
- 定期检查账号状态和会话有效性
- 敏感操作需要管理员权限

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## ❓ 常见问题

### Q: 插件无法检测到账号信息？
A: 确保已登录 TikTok 并访问用户页面，等待页面完全加载后再使用插件。

### Q: 代理连接失败？
A: 检查代理配置是否正确，确保代理服务器可访问。

### Q: 消息发送失败？
A: 检查账号状态是否正常，Cookie 是否过期，代理是否正常工作。

### Q: 数据库连接失败？
A: 检查 PostgreSQL 服务是否运行，数据库配置是否正确。

## 📞 支持

如有问题或建议，请：

1. 查看 [文档](docs/)
2. 搜索 [Issues](issues)
3. 创建新的 [Issue](issues/new)

---

**注意**: 本系统仅用于合法的客服管理目的，请遵守 TikTok 的服务条款和相关法律法规。