import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000', // for local yarn start
      'https://split-wine-ui.onrender.com',
    ],
  });
  await app.listen(5000);
}
bootstrap();
