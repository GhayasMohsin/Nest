import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteEmployeeCommand } from '../commands/delete-employee.command';
import { EmployeeService } from 'src/employee/employee.service';

@CommandHandler(DeleteEmployeeCommand)
export class DeleteEmployeeHandler
  implements ICommandHandler<DeleteEmployeeCommand>
{
  constructor(private readonly employeeService: EmployeeService) {}

  execute(command: DeleteEmployeeCommand): Promise<any> {
    const { id } = command;
    return this.employeeService.deleteEmployee(id);
  }
}
