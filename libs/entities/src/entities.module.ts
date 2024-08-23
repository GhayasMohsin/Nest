import { Module } from '@nestjs/common';
import { Employee } from './employee.entity';
@Module({
  providers: [],
  exports: [Employee],
})
export class EntitiesModule {}
