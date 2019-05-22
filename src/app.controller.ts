import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 @Get('')
  getHello(): string {
    return 'Greetings';
  }
  @Get('channels')
  getChannels(): string[] {
    return ['starman_Channel', 'dev-quest', 'gen_industry', 'gen_movies'];
  }
}
