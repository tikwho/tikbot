import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // 启用 CORS
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // 全局验证管道
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // WebSocket 适配器
  app.useWebSocketAdapter(new IoAdapter(app));

  // API 前缀
  app.setGlobalPrefix('api/v1');

  const port = configService.get('PORT', 3001);
  await app.listen(port);
  
  console.log(`🚀 TikTok CS Backend running on port ${port}`);
}

bootstrap();