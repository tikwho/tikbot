#!/bin/bash

# 生产环境构建脚本

set -e

echo "🏗️  构建 TikTok 客服系统..."

# 清理之前的构建
echo "🧹 清理构建目录..."
rm -rf backend/dist
rm -rf frontend/.next
rm -rf frontend/out
rm -rf extension/dist

# 构建后端
echo "🔧 构建后端..."
cd backend
npm run build
cd ..

# 构建前端
echo "🎨 构建前端..."
cd frontend
npm run build
cd ..

# 构建插件
echo "🔌 构建浏览器插件..."
cd extension
npm run build
cd ..

# 创建部署包
echo "📦 创建部署包..."
mkdir -p dist

# 复制后端文件
cp -r backend/dist dist/backend
cp backend/package.json dist/backend/
cp -r backend/node_modules dist/backend/ 2>/dev/null || echo "跳过 node_modules 复制"

# 复制前端文件
cp -r frontend/.next dist/frontend
cp frontend/package.json dist/frontend/
cp frontend/next.config.js dist/frontend/

# 复制插件文件
cp -r extension/dist dist/extension

# 复制配置文件
cp .env.example dist/
cp package.json dist/
cp README.md dist/

# 创建启动脚本
cat > dist/start.sh << 'EOF'
#!/bin/bash
set -e

echo "🚀 启动 TikTok 客服系统..."

# 检查环境配置
if [ ! -f .env ]; then
    echo "❌ .env 文件不存在，请复制 .env.example 并配置"
    exit 1
fi

# 启动后端
cd backend
echo "🔧 启动后端服务..."
NODE_ENV=production node dist/main.js &
BACKEND_PID=$!

# 启动前端
cd ../frontend
echo "🎨 启动前端服务..."
NODE_ENV=production npm start &
FRONTEND_PID=$!

echo "✅ 服务已启动！"
echo "🌐 前端: http://localhost:3000"
echo "🔧 后端: http://localhost:3001"

# 等待信号
trap "kill $BACKEND_PID $FRONTEND_PID" EXIT
wait
EOF

chmod +x dist/start.sh

# 创建 Docker 文件
cat > dist/Dockerfile << 'EOF'
FROM node:18-alpine

WORKDIR /app

# 复制应用文件
COPY . .

# 安装生产依赖
RUN cd backend && npm ci --only=production
RUN cd frontend && npm ci --only=production

# 暴露端口
EXPOSE 3000 3001

# 启动应用
CMD ["./start.sh"]
EOF

# 创建 docker-compose.yml
cat > dist/docker-compose.yml << 'EOF'
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
      - "3001:3001"
    environment:
      - NODE_ENV=production
    depends_on:
      - postgres
      - redis
    volumes:
      - ./logs:/app/logs

  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: tiktok_cs
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
EOF

echo "✅ 构建完成！"
echo "📦 部署包位置: ./dist"
echo "🐳 Docker 部署: cd dist && docker-compose up"
echo "🚀 直接运行: cd dist && ./start.sh"