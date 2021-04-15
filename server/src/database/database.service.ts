import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Entity, ModelDocument } from 'src/database/schemes/entity.entity';


@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(Entity.name)
    private Entity: Model<ModelDocument>
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
}
