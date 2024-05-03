import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NextFunction, Request, Response } from 'express';

// Global middlewares (Always in functional component)
const globalMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('Global Middleware');
  next();
}
async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  // Middlewares:
  app.use(globalMiddleware);
  await app.listen(3000);
}
bootstrap();
