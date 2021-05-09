import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Entity, ModelDocument } from 'src/database/schemes/entity.entity';
import { Discount, DiscountDocument } from './schemes/discountToken.entity';


@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(Entity.name)
    private Entity: Model<ModelDocument>,
    @InjectModel(Discount.name)
    private DiscountModel: Model<DiscountDocument>
  ) {}

  findAll() {
    return this.Entity.find()
  }

  findById(id : string) {
    return this.Entity.findById(id)
  }

  findByType(type : string) {
    return this.Entity.find({ type : type })
  }

  async create(data : Entity) {
    const bracer = await this.Entity.create(data)
    return bracer.save()
  }

  checkDiscount(code : string) {
    return this.DiscountModel.findOne({token : code})
  }

  async createDiscountToken(data) {
    const start = new Date(Date.now())
    const end = new Date('7.15.2021') 
    const discount = await this.DiscountModel.create({...data, end, start})

    return discount.save()
  }
}
