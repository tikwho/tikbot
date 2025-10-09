# 部署指南

## 环境准备

### 系统要求

- **操作系统**: Ubuntu 20.04+ / CentOS 8+ / macOS 10.15+
- **Node.js**: 18.0+
- **PostgreSQL**: 13.0+
- **Redis**: 6.0+
- **内存**: 最低 2GB，推荐 4GB+
- **存储**: 最低 10GB 可用空间

### 依赖安装

#### Ubuntu/Debian
```bash
# 更新包管理器
sudo apt update

# 安装 Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 安装 PostgreSQL
sudo apt install postgresql postgresql-contrib

# 安装 Redis
sudo apt install redis-server

# 安装 PM2 (可选)
sudo npm install -g pm2
```

#### CentOS/RHEL
```bash
# 安装 Node.js
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# 安装 PostgreSQL
sudo yum install postgresql-server postgresql-contrib
sudo postgresql-setup initdb
sudo systemctl enable postgresql
sudo systemctl start postgresql

# 安装 Redis
sudo yum install redis
sudo systemctl enable redis
sudo systemctl start redis
```

#### macOS
```bash
# 使用 Homebrew
brew install node postgresql redis

# 启动服务
brew services start postgresql
brew services start redis
```

## 生产部署

### 1. 获取代码

```bash
git clone <repository-url>
cd tiktok-cs
```

### 2. 构建应用

```bash
chmod +x scripts/build.sh
./scripts/build.sh
```

### 3. 配置环境

```bash
cd dist
cp .env.example .env
```

编辑 `.env` 文件：

```bash
# 生产环境配置
NODE_ENV=production
PORT=3001

# 数据库配置
DATABASE_URL="postgresql://tiktok_user:secure_password@localhost:5432/tiktok_cs_prod"

# Redis 配置
REDIS_URL="redis://localhost:6379"

# 安全配置
JWT_SECRET="your-super-secure-jwt-secret-key-for-production"
ENCRYPTION_KEY="your-super-secure-encryption-key-for-production"

# Cloudflare R2 配置
CLOUDFLARE_ACCOUNT_ID="your-account-id"
CLOUDFLARE_ACCESS_KEY_ID="your-access-key"
CLOUDFLARE_SECRET_ACCESS_KEY="your-secret-key"
CLOUDFLARE_BUCKET_NAME="tiktok-cs-prod"

# 前端配置
NEXT_PUBLIC_API_URL="https://your-domain.com/api/v1"
NEXT_PUBLIC_WS_URL="wss://your-domain.com/ws"
```

### 4. 数据库设置

```bash
# 创建数据库用户和数据库
sudo -u postgres psql << EOF
CREATE USER tiktok_user WITH PASSWORD 'secure_password';
CREATE DATABASE tiktok_cs_prod OWNER tiktok_user;
GRANT ALL PRIVILEGES ON DATABASE tiktok_cs_prod TO tiktok_user;
\q
EOF

# 运行数据库迁移
cd backend
npm run migration:run
```

### 5. 启动应用

#### 使用内置脚本
```bash
./start.sh
```

#### 使用 PM2 (推荐)
```bash
# 安装 PM2
npm install -g pm2

# 创建 PM2 配置文件
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [
    {
      name: 'tiktok-cs-backend',
      cwd: './backend',
      script: 'dist/main.js',
      instances: 2,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      error_file: '../logs/backend-error.log',
      out_file: '../logs/backend-out.log',
      log_file: '../logs/backend.log'
    },
    {
      name: 'tiktok-cs-frontend',
      cwd: './frontend',
      script: 'node_modules/.bin/next',
      args: 'start',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: '../logs/frontend-error.log',
      out_file: '../logs/frontend-out.log',
      log_file: '../logs/frontend.log'
    }
  ]
};
EOF

# 启动应用
pm2 start ecosystem.config.js

# 保存 PM2 配置
pm2 save

# 设置开机自启
pm2 startup
```

## Docker 部署

### 1. 使用 Docker Compose

```bash
cd dist
docker-compose up -d
```

### 2. 自定义 Docker 部署

```bash
# 构建镜像
docker build -t tiktok-cs .

# 启动 PostgreSQL
docker run -d \
  --name tiktok-postgres \
  -e POSTGRES_DB=tiktok_cs \
  -e POSTGRES_USER=tiktok_user \
  -e POSTGRES_PASSWORD=secure_password \
  -v postgres_data:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres:15

# 启动 Redis
docker run -d \
  --name tiktok-redis \
  -v redis_data:/data \
  -p 6379:6379 \
  redis:7-alpine

# 启动应用
docker run -d \
  --name tiktok-cs \
  --link tiktok-postgres:postgres \
  --link tiktok-redis:redis \
  -p 3000:3000 \
  -p 3001:3001 \
  -v $(pwd)/logs:/app/logs \
  -v $(pwd)/.env:/app/.env \
  tiktok-cs
```

## Nginx 反向代理

### 1. 安装 Nginx

```bash
# Ubuntu/Debian
sudo apt install nginx

# CentOS/RHEL
sudo yum install nginx
```

### 2. 配置 Nginx

创建配置文件 `/etc/nginx/sites-available/tiktok-cs`:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # 重定向到 HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;

    # SSL 证书配置
    ssl_certificate /path/to/your/certificate.crt;
    ssl_certificate_key /path/to/your/private.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # 前端静态文件
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # API 接口
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # WebSocket 连接
    location /ws {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 86400;
    }

    # 文件上传大小限制
    client_max_body_size 10M;

    # 日志配置
    access_log /var/log/nginx/tiktok-cs.access.log;
    error_log /var/log/nginx/tiktok-cs.error.log;
}
```

### 3. 启用配置

```bash
# 创建软链接
sudo ln -s /etc/nginx/sites-available/tiktok-cs /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

## SSL 证书配置

### 使用 Let's Encrypt

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com

# 自动续期
sudo crontab -e
# 添加以下行
0 12 * * * /usr/bin/certbot renew --quiet
```

## 监控和日志

### 1. 日志管理

```bash
# 创建日志轮转配置
sudo tee /etc/logrotate.d/tiktok-cs << EOF
/path/to/tiktok-cs/logs/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 644 www-data www-data
    postrotate
        pm2 reload all
    endscript
}
EOF
```

### 2. 系统监控

```bash
# 安装监控工具
sudo apt install htop iotop nethogs

# 监控应用状态
pm2 monit

# 查看日志
pm2 logs

# 重启应用
pm2 restart all
```

### 3. 数据库监控

```bash
# PostgreSQL 状态
sudo -u postgres psql -c "SELECT * FROM pg_stat_activity;"

# Redis 状态
redis-cli info
```

## 备份策略

### 1. 数据库备份

```bash
# 创建备份脚本
cat > backup-db.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/backup/postgresql"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="tiktok_cs_prod"

mkdir -p $BACKUP_DIR

# 创建备份
pg_dump -U tiktok_user -h localhost $DB_NAME | gzip > $BACKUP_DIR/backup_${DATE}.sql.gz

# 删除 7 天前的备份
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +7 -delete

echo "Database backup completed: backup_${DATE}.sql.gz"
EOF

chmod +x backup-db.sh

# 设置定时备份
crontab -e
# 添加以下行（每天凌晨 2 点备份）
0 2 * * * /path/to/backup-db.sh
```

### 2. 文件备份

```bash
# 备份应用文件和配置
tar -czf tiktok-cs-backup-$(date +%Y%m%d).tar.gz \
  /path/to/tiktok-cs \
  /etc/nginx/sites-available/tiktok-cs \
  /etc/systemd/system/tiktok-cs.service
```

## 性能优化

### 1. 数据库优化

```sql
-- PostgreSQL 配置优化
-- 编辑 /etc/postgresql/13/main/postgresql.conf

shared_buffers = 256MB
effective_cache_size = 1GB
maintenance_work_mem = 64MB
checkpoint_completion_target = 0.9
wal_buffers = 16MB
default_statistics_target = 100
random_page_cost = 1.1
effective_io_concurrency = 200
```

### 2. Redis 优化

```bash
# 编辑 /etc/redis/redis.conf
maxmemory 512mb
maxmemory-policy allkeys-lru
save 900 1
save 300 10
save 60 10000
```

### 3. Node.js 优化

```bash
# 设置环境变量
export NODE_OPTIONS="--max-old-space-size=2048"
export UV_THREADPOOL_SIZE=16
```

## 故障排除

### 常见问题

1. **应用无法启动**
   ```bash
   # 检查端口占用
   netstat -tlnp | grep :3001
   
   # 检查日志
   pm2 logs
   tail -f logs/app.log
   ```

2. **数据库连接失败**
   ```bash
   # 检查 PostgreSQL 状态
   sudo systemctl status postgresql
   
   # 测试连接
   psql -U tiktok_user -h localhost -d tiktok_cs_prod
   ```

3. **Redis 连接失败**
   ```bash
   # 检查 Redis 状态
   sudo systemctl status redis
   
   # 测试连接
   redis-cli ping
   ```

4. **内存不足**
   ```bash
   # 检查内存使用
   free -h
   
   # 检查进程内存使用
   ps aux --sort=-%mem | head
   ```

### 日志分析

```bash
# 查看错误日志
grep -i error logs/*.log

# 查看访问日志
tail -f /var/log/nginx/tiktok-cs.access.log

# 分析响应时间
awk '{print $NF}' /var/log/nginx/tiktok-cs.access.log | sort -n | tail -10
```

## 安全加固

### 1. 防火墙配置

```bash
# Ubuntu UFW
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable

# CentOS firewalld
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

### 2. 系统更新

```bash
# 定期更新系统
sudo apt update && sudo apt upgrade -y

# 设置自动安全更新
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

### 3. 访问控制

```bash
# 限制 SSH 访问
# 编辑 /etc/ssh/sshd_config
PermitRootLogin no
PasswordAuthentication no
AllowUsers your-username

# 重启 SSH 服务
sudo systemctl restart ssh
```