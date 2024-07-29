import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplicationContext } from '@nestjs/common';
import { Shared } from './employee/shared-service';

export let app: INestApplicationContext;
export let appPromise: Promise<INestApplicationContext>;

let listEmployeeByIdEvent = {
  operation: 'query',
  eventName: 'LIST_EMPLOYEE_BY_ID',
  payload: {
    id: 1,
  },
};

let listEmployesEvent = {
  operation: 'query',
  eventName: 'LIST_EMPLOYEES',
  payload: {
    id: 1,
  },
};

let createEmployeeEvent = {
  operation: 'command',
  eventName: 'CREATE_EMPLOYEE',
  payload: {
    name: 'Muhammad Ibrahim',
    designation: 'Senior Software Engineer',
    department: 'MAX',
    reportingManager: 'Saad Salman',
  },
};

let updateEmployeeEvent = {
  operation: 'command',
  eventName: 'UPDATE_EMPLOYEE',
  payload: {
    id: 1,
    data: {
      name: 'Muhammad Ibrahim',
      designation: 'Senior Software Engineer',
      department: 'MAX',
      reportingManager: 'Saad Salman',
    },
  },
};

let deleteEmployeeEvent = {
  operation: 'command',
  eventName: 'DELETE_EMPLOYEE',
  payload: {
    id: 10
  },
};

export async function initApp(): Promise<INestApplicationContext> {
  if (app) return app;
  let appPromise = await NestFactory.createApplicationContext(AppModule);
  app = await appPromise;

  let response = await app.get(Shared).sendEvent(listEmployeeByIdEvent);
  console.log(response);

  // if (app) return app;
  // let appPromise = await NestFactory.createApplicationContext(AppModule);
  // app = await appPromise;
  // return app;
}

initApp();
