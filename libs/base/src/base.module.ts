import { Module } from '@nestjs/common';
import { BaseService } from './base.service';
import { CoreModule } from '../../core/src/core.module';
import { handler } from './functions/app';
import { AppModule } from '../../../src/app.module';

@Module({
  imports: [CoreModule],
  exports: [handler]
})
export class BaseModule {}
