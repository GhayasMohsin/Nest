import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateEmployeeCommand } from './cqrs/commands/create-employee.command';
import { ListEmployeesQuery } from './cqrs/queries/list-employees.query';
import { ListEmployeeByIdQuery } from './cqrs/queries/list-employee-by-id.query';
import { UpdateEmployeeCommand } from './cqrs/commands/update-employee.command';
import { DeleteEmployeeCommand } from './cqrs/commands/delete-employee.command';

@Controller('employee')
export class EmployeeController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.commandBus.execute(
      new CreateEmployeeCommand(createEmployeeDto),
    );
  }

  @Get()
  findAll() {
    return this.queryBus.execute(new ListEmployeesQuery());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.queryBus.execute(new ListEmployeeByIdQuery(+id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.commandBus.execute(
      new UpdateEmployeeCommand(+id, updateEmployeeDto),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commandBus.execute(new DeleteEmployeeCommand(+id));
  }
}
