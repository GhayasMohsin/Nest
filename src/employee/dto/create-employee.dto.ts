export class CreateEmployeeDto {
  payload: EmployeeDto;
}
export class EmployeeDto {
  name: string;
  designation: string;
  reportingManager?: string;
  department: string;
}
