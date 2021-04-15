import { Body, Controller, Get, Post } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AppService } from './app.service';
import { BracerDto } from './Dto/bracer.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly databaseService : DatabaseService) {}

  
}
