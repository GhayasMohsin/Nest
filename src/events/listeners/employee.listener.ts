import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { CreateEmployeeCommand } from 'src/employee/cqrs/commands/create-employee.command';
import { DeleteEmployeeCommand } from 'src/employee/cqrs/commands/delete-employee.command';
import { UpdateEmployeeCommand } from 'src/employee/cqrs/commands/update-employee.command';
import { ListEmployeeByIdQuery } from 'src/employee/cqrs/queries/list-employee-by-id.query';
import { ListEmployeesQuery } from 'src/employee/cqrs/queries/list-employees.query';
import {
  CreateEmployeeDto,
  EmployeeDto,
} from 'src/employee/dto/create-employee.dto';
import {
  DeleteEmployeeDTO,
  DeleteEmployeeRequestDTO,
} from 'src/employee/dto/delete-employee.dto';
import {
  ListEmployeeByIdDTO,
  ListEmployeeByIdRequestDTO,
} from 'src/employee/dto/list-employee-by-id.dto';
import {
  UpdateEmployeeDto,
  UpdateEmployeeInputDTO,
  UpdateEmployeeRequestDTO,
} from 'src/employee/dto/update-employee.dto';

@Injectable()
export class EventListener {
  constructor() {}

  @OnEvent('listEmployeeById')
  handleListEmployeeByIdEvent(event: ListEmployeeByIdRequestDTO) {
    const data = event.payload as ListEmployeeByIdDTO;
    return new ListEmployeeByIdQuery(data);
  }

  @OnEvent('listEmployees')
  handleListEmployeesEvent() {
    return new ListEmployeesQuery();
  }

  @OnEvent('createEmployee')
  handleCreateEmployeeEvent(event: CreateEmployeeDto) {
    const data = event.payload as EmployeeDto;
    return new CreateEmployeeCommand(data);
  }

  @OnEvent('updateEmployee')
  handleUpdateEmployeeEvent(event: UpdateEmployeeRequestDTO) {
    const data = event.payload as UpdateEmployeeInputDTO;
    return new UpdateEmployeeCommand(data);
  }

  @OnEvent('deleteEmployee')
  handleDeleteEmployeeEvent(event: DeleteEmployeeRequestDTO) {
    const data = event.payload as DeleteEmployeeDTO;
    return new DeleteEmployeeCommand(data);
  }
}
