#!/bin/bash

# TikTok 客服工作台前端启动脚本

echo "🚀 启动 TikTok 客服工作台前端..."

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

# 进入前端目录
cd "$(dirname "$0")/../frontend" || exit 1

# 检查依赖
if [ ! -d "node_modules" ]; then
    echo "📦 安装依赖..."
    pnpm install
fi

# 检查环境配置
if [ ! -f ".env.local" ]; then
    echo "⚙️  创建环境配置文件..."
    cat > .env.local << EOF
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
NEXT_PUBLIC_WS_URL=ws://localhost:3001/ws
EOF
    echo "✅ 已创建 .env.local 文件"
fi

# 启动开发服务器
echo "🌟 启动开发服务器..."
echo "📱 前端地址: http://localhost:3000"
echo "🔗 后端地址: http://localhost:3001"
echo ""
echo "💡 提示:"
echo "   - 确保后端服务已启动 (端口 3001)"
echo "   - 使用 Ctrl+C 停止服务"
echo ""

pnpm dev