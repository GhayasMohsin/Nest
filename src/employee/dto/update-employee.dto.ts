import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDto } from './create-employee.dto';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}

export class UpdateEmployeeRequestDTO {
  payload: UpdateEmployeeInputDTO;
}

export class UpdateEmployeeInputDTO {
  id: number;
  data: UpdateEmployeeDto;
}
