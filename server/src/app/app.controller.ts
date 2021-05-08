import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
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
    try {
      return this.databaseService.findAll()
    } catch (e) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK) 
  getById(@Param('id') id : string) {
    try {
      return this.databaseService.findById(id)
    } catch (e) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get('/get/:type')
  @HttpCode(HttpStatus.OK) 
  getByType(@Param('type') type : string) {
    try {
      return this.databaseService.findByType(type)
    } catch (e) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Post()
  some(@Body() data: BracerDto) {
    try {  
      return this.databaseService.create(data)
    } catch (e) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
    }    
  }
}
