import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { EventsModule } from './events/events.module';
// import { BaseModule } from './base/base.module';
import { CoreModule } from '../libs/core/src/core.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    EmployeeModule,
    EventsModule,
    CoreModule
  ],
  exports: []
})
export class AppModule {}
