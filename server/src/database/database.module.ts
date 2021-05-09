import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './database.service';
import { Discount, DiscountSchema } from './schemes/discountToken.entity';
import { Entity, EntitySchema } from './schemes/entity.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Entity.name, schema: EntitySchema}, {name: Discount.name, schema: DiscountSchema}])
  ],
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule {}
