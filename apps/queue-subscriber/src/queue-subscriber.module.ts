import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import { QueueSubscriberService } from './queue-subscriber.service';

@Module({
  imports: [
    SqsModule.register({
      consumers: [
        {
          name: 'nestjs-test-queue',
          queueUrl:
            'https://sqs.us-east-1.amazonaws.com/044951571875/nestjs-test-queue',
          region: 'us-east-1',
        },
      ],
    }),
  ],
  providers: [QueueSubscriberService],
})
export class QueueSubscriberModule {}
