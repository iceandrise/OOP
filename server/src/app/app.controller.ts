import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { dispatch } from 'rxjs/internal/observable/pairs';
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

  @Post('/discount/create')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() request) {
    try {
      return await this.databaseService.createDiscountToken(request)
    } catch(e) {
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Post('/discount')
  @HttpCode(HttpStatus.OK)
  async getDiscount(@Body() request) {
    // try {
      if (!request.token) {
        throw new HttpException('Token is required', HttpStatus.BAD_REQUEST)
      }

      const discount = await this.databaseService.checkDiscount(request.token)

      if (!discount) {
        throw new HttpException('Discount not found', HttpStatus.NOT_FOUND)
      }

      if(discount.start > new Date(Date.now()) || discount.end < new Date(Date.now())) {
        // return new Date(Date.now())
        throw new HttpException('Token is outdate', HttpStatus.BAD_REQUEST)
      }

      return discount.discount
    // } catch (e) {
      // throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR)
    // }
  }
}
