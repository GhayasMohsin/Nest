import { DeleteEmployeeDTO } from "src/employee/dto/delete-employee.dto";

export class DeleteEmployeeCommand {
  constructor(public event: DeleteEmployeeDTO) {}
}
