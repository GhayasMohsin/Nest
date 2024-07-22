import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateEmployeeHandler } from './cqrs/commandHandlers/create-employee.handler';
import { UpdateEmployeeHandler } from './cqrs/commandHandlers/update-employee.handler';
import { DeleteEmployeeHandler } from './cqrs/commandHandlers/delete-employee.handler';
import { ListEmployeeByIdHandler } from './cqrs/queryHandlers/list-employee-by-id.handler';
import { ListEmployeesHandler } from './cqrs/queryHandlers/list-employees.handler';
import { EmployeeService } from './employee.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employee]), CqrsModule],
  controllers: [EmployeeController],
  providers: [
    CreateEmployeeHandler,
    UpdateEmployeeHandler,
    DeleteEmployeeHandler,
    ListEmployeeByIdHandler,
    ListEmployeesHandler,
    EmployeeService
  ],
})
export class EmployeeModule {}
