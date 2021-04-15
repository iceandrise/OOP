import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { AppService } from './app.service';
import { BracerDto } from './Dto/bracer.dto';

@Controller()
export class AppController {
  constructor (
    private readonly databaseService : DatabaseService
  ) {}


  @Get()
  @HttpCode(HttpStatus.OK)
  get() {
    return this.databaseService.findAll()
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK) 
  getById(@Param('id') id : string) {
    return this.databaseService.findById(id)
  }

  @Get('/get/:type')
  @HttpCode(HttpStatus.OK) 
  getByType(@Param('type') type : string) {
    return this.databaseService.findByType(type)
  }

  @Post()
  some(@Body() data: BracerDto) {
    return this.databaseService.create(data)
  }
}
