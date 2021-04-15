import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as config from 'config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(config.get('port'));
}
bootstrap();
