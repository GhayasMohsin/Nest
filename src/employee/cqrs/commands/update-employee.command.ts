import { UpdateEmployeeDto } from 'src/employee/dto/update-employee.dto';

export class UpdateEmployeeCommand {
  constructor(public id: number, public empData: UpdateEmployeeDto) {}
}
