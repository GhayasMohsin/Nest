import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepositry: Repository<Employee>,
  ) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.employeeRepositry.save(createEmployeeDto);
  }

  getEmployees() {
    return this.employeeRepositry.find();
  }

  getEmployeeById(id: number) {
    return this.employeeRepositry.findOneBy({ id });
  }

  updateEmployeeById(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeRepositry.update(id, updateEmployeeDto);
  }

  deleteEmployee(id: number) {
    return this.employeeRepositry.delete(id);
  }
}
