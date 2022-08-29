import { NestFactory } from '@nestjs/core';
import { QueueSubscriberModule } from './queue-subscriber.module';

async function bootstrap() {
  const app = await NestFactory.create(QueueSubscriberModule);
  await app.listen(3000);
}
bootstrap();
