import { Module } from '@nestjs/common';
import { BaseWrapper } from './middleware';

@Module({
  exports: [BaseWrapper],
})
export class CoreModule {}
