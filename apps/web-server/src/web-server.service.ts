import { Injectable } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';

@Injectable()
export class WebServerService {
  constructor(private readonly messageService: SqsService) {}

  async sendMessage(message: any) {
    return await this.messageService.send('nestjs-test-queue', {
      id: `hello`,
      body: message,
    });
  }
}
