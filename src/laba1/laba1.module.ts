import { Module } from '@nestjs/common';
import { Laba1Controller } from './laba1.controller';

@Module({
  controllers: [Laba1Controller]
})
export class Laba1Module {}
