export class CreateEmployeeDto {
  name: string;
  designation: string;
  reportingManager?: string;
  department: string;
}
