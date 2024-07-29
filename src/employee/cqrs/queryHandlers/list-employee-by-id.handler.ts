import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ListEmployeeByIdQuery } from '../queries/list-employee-by-id.query';
import { EmployeeService } from 'src/employee/employee.service';

@QueryHandler(ListEmployeeByIdQuery)
export class ListEmployeeByIdHandler
  implements IQueryHandler<ListEmployeeByIdQuery>
{
  constructor(private readonly employeeService: EmployeeService) {}

  execute(query: ListEmployeeByIdQuery): Promise<any> {
    const { id } = query.event;
    return this.employeeService.getEmployeeById(id);
  }
}
