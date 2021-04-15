import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import { Bracers, BracersSchema } from './schemes/bracers.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Bracers.name, schema: BracersSchema}])
  ],
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule {}
