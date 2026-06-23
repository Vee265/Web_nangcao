import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // File app.module.ts chuẩn nằm ngay cùng cấp
import cookieParser from 'cookie-parser';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cấu hình Cookie (Yêu cầu 1)
  app.use(cookieParser());

  // Cấu hình Session (Yêu cầu 2)
  app.use(
    session({
      secret: 'my-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 3600000,
        secure: false,
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();