import { Body, Controller, Get, Post } from '@nestjs/common';
import { WebServerService } from './web-server.service';

@Controller()
export class WebServerController {
  constructor(private readonly webServerService: WebServerService) {}

  @Post()
  async getHello(@Body() message: any) {
    return await this.webServerService.sendMessage(message);
  }
}
