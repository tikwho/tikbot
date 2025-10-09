#!/bin/bash

# TikTok 客服工作台开发环境启动脚本

echo "🚀 启动 TikTok 客服工作台开发环境..."

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ 错误: 未找到 Node.js，请先安装 Node.js 18+"
    exit 1
fi

# 检查 pnpm
if ! command -v pnpm &> /dev/null; then
    echo "❌ 错误: 未找到 pnpm，请先安装 pnpm"
    echo "   npm install -g pnpm"
    exit 1
fi

# 启动后端
echo "📦 启动后端服务..."
cd "$(dirname "$0")/../backend"
if [ ! -d "node_modules" ]; then
    echo "📦 安装后端依赖..."
    pnpm install
fi

# 检查环境配置
if [ ! -f ".env" ]; then
    echo "⚙️  创建后端环境配置文件..."
    cat > .env << EOF
# 数据库配置
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=password
DATABASE_NAME=tiktok_cs

# JWT 配置
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Redis 配置
REDIS_HOST=localhost
REDIS_PORT=6379

# 应用配置
PORT=3001
NODE_ENV=development
EOF
    echo "✅ 已创建后端 .env 文件"
fi

# 启动后端（后台运行）
echo "🌟 启动后端服务 (端口 3001)..."
pnpm run start:dev &
BACKEND_PID=$!

# 等待后端启动
sleep 5

# 启动前端
echo "📦 启动前端服务..."
cd "$(dirname "$0")/../frontend"
if [ ! -d "node_modules" ]; then
    echo "📦 安装前端依赖..."
    pnpm install
fi

# 检查环境配置
if [ ! -f ".env.local" ]; then
    echo "⚙️  创建前端环境配置文件..."
    cat > .env.local << EOF
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
NEXT_PUBLIC_WS_URL=ws://localhost:3001/ws
EOF
    echo "✅ 已创建前端 .env.local 文件"
fi

echo "🌟 启动前端服务 (端口 3000)..."
echo ""
echo "🎉 服务启动完成！"
echo "📱 前端地址: http://localhost:3000"
echo "🔗 后端地址: http://localhost:3001"
echo "📚 API文档: http://localhost:3001/api"
echo ""
echo "💡 提示:"
echo "   - 确保 PostgreSQL 和 Redis 服务已启动"
echo "   - 使用 Ctrl+C 停止所有服务"
echo ""

# 启动前端
pnpm dev

# 清理后台进程
cleanup() {
    echo "🛑 停止服务..."
    kill $BACKEND_PID 2>/dev/null
    exit 0
}

trap cleanup SIGINT SIGTERM