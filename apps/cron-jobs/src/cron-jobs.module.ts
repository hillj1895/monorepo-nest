import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CommonModule } from 'y/common';
import { CronJobsService } from './cron-jobs.service';

@Module({
  imports: [ScheduleModule.forRoot(), CommonModule],
  providers: [CronJobsService],
})
export class CronJobsModule {}
