import { UpdateEmployeeInputDTO } from 'src/employee/dto/update-employee.dto';

export class UpdateEmployeeCommand {
  constructor(public requestEvent: UpdateEmployeeInputDTO) {}
}
