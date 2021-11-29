import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Laba1Module } from './laba1/laba1.module';

@Module({
  imports: [Laba1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
