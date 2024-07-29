import { Injectable } from '@nestjs/common';
import { EmployeeDto } from './dto/create-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepositry: Repository<Employee>,
  ) {}

  create(empData: EmployeeDto) {
    return this.employeeRepositry.save(empData);
  }

  getEmployees() {
    return this.employeeRepositry.find();
  }

  getEmployeeById(id: number) {
    return this.employeeRepositry.findOneBy({ id });
  }

  updateEmployeeById(id: number, data: any) {
    return this.employeeRepositry.update(id, data);
  }

  deleteEmployee(id: number) {
    return this.employeeRepositry.delete(id);
  }
}
