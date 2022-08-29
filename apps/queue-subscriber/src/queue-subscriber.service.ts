import { Injectable, Logger } from '@nestjs/common';
import { SqsMessageHandler } from '@ssut/nestjs-sqs';
import * as AWS from 'aws-sdk';

@Injectable()
export class QueueSubscriberService {
  @SqsMessageHandler('nestjs-test-queue', false)
  async handleMessage(message: AWS.SQS.Message) {
    const obj = JSON.parse(message.Body);
    console.log(obj);
  }
}
