import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as config from 'config';
import { DatabaseModule } from 'src/database/database.module';
import { BracersModule } from 'src/bracers/bracers.module';


@Module({
  imports: [
    MongooseModule.forRoot(config.get('database')),
    DatabaseModule,
    BracersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
