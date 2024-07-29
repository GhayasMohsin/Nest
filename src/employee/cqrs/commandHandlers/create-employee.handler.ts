import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateEmployeeCommand } from '../commands/create-employee.command';
import { EmployeeService } from 'src/employee/employee.service';

@CommandHandler(CreateEmployeeCommand)
export class CreateEmployeeHandler
  implements ICommandHandler<CreateEmployeeCommand>
{
  constructor(private readonly employeeService: EmployeeService) {}

  execute(command: CreateEmployeeCommand): Promise<any> {
    const { data } = command;
    return this.employeeService.create(data);
  }
}
