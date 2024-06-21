import { NestFactory } from '@nestjs/core';
import { Partner1Module } from './partner1.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from '@app/core/common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(Partner1Module);
  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
