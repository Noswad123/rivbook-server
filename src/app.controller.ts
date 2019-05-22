import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('channels')
  getHello(): string[] {
    return ['starman_Channel', 'dev-quest', 'gen_industry', 'gen_movies'];
  }
}
