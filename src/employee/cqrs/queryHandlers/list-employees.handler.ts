import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ListEmployeesQuery } from '../queries/list-employees.query';
import { EmployeeService } from 'src/employee/employee.service';

@QueryHandler(ListEmployeesQuery)
export class ListEmployeesHandler
  implements IQueryHandler<ListEmployeesHandler>
{
  constructor(private readonly employeeService: EmployeeService) {}

  execute(): Promise<any> {
    return this.employeeService.getEmployees();
  }
}
