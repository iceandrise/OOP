import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bracers, BracersDocument } from 'src/database/schemes/bracers.entity';


@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(Bracers.name)
    private bracersModel: Model<BracersDocument>
  ) {}

  findAll() {
    return this.bracersModel.find()
  }

  findById(id : string) {
    return this.bracersModel.findById(id)
  }

  async create(data : Bracers) {
    const bracer = await this.bracersModel.create(data)

    return bracer.save()
  }
}
