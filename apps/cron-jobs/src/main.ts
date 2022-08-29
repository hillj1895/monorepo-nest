import { NestFactory } from '@nestjs/core';
import { CronJobsModule } from './cron-jobs.module';

async function bootstrap() {
  const app = await NestFactory.create(CronJobsModule);
  await app.listen(3000);
}
bootstrap();
