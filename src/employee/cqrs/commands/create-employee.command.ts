import { EmployeeDto } from 'src/employee/dto/create-employee.dto';

export class CreateEmployeeCommand {
  constructor(public readonly data: EmployeeDto) {}
}
