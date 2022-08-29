import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class CommonService {
  constructor(private logger: LoggerService) {}
  commonLog(message: any) {
    this.logger.log(message);
  }
}
