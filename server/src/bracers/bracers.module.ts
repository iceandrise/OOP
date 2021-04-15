import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BracersController } from './bracers.controller';
import { BracersService } from './bracers.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BracersController],
  providers: [BracersService]
})
export class BracersModule {}
