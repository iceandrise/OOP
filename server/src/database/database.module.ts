import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import { Entity, EntitySchema } from './schemes/entity.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Entity.name, schema: EntitySchema}])
  ],
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule {}
