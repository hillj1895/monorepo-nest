import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CronJobsService {
  @Cron(CronExpression.EVERY_SECOND)
  everySecond() {
    console.log('Every second Job');
  }

  @Cron('*/2 * * * * *')
  everyTwoSeconds() {
    console.log('Every 2 seconds Job');
  }
}
