import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateEmployeeCommand } from '../commands/update-employee.command';
import { EmployeeService } from 'src/employee/employee.service';

@CommandHandler(UpdateEmployeeCommand)
export class UpdateEmployeeHandler
  implements ICommandHandler<UpdateEmployeeCommand>
{
  constructor(private readonly employeeService: EmployeeService) {}

  execute(command: UpdateEmployeeCommand): Promise<any> {
    const {id, empData} = command
    return this.employeeService.updateEmployeeById(id, empData)
  }
}
