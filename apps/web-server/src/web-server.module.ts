import { Module } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import { WebServerController } from './web-server.controller';
import { WebServerService } from './web-server.service';

@Module({
  imports: [
    SqsModule.register({
      producers: [
        {
          name: 'nestjs-test-queue',
          queueUrl:
            'https://sqs.us-east-1.amazonaws.com/044951571875/nestjs-test-queue',
          region: 'us-east-1',
        },
      ],
    }),
  ],
  controllers: [WebServerController],
  providers: [WebServerService],
})
export class WebServerModule {}
