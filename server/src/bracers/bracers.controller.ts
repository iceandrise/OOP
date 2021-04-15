import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { BracerDto } from 'src/app/Dto/bracer.dto';
import { DatabaseService } from 'src/database/database.service';
import { BracersService } from './bracers.service';

@Controller('bracers')
export class BracersController {
  constructor (
    private readonly bracersService : BracersService,
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


  @Post()
  some(@Body() data: BracerDto) {
    return this.databaseService.create(data)
  }
}
