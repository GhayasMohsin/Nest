import { NestFactory } from '@nestjs/core';
import { INestApplicationContext } from '@nestjs/common';

export let app: INestApplicationContext;
export let appPromise: Promise<INestApplicationContext>;

export async function initApp(module): Promise<INestApplicationContext> {
  if (app) return app;
  let appPromise = await NestFactory.createApplicationContext(module);
  app = await appPromise;
  return app;

  // let response = await app.get(Shared).sendEvent(listEmployeeByIdEvent);
  // console.log(response);

  // if (app) return app;
  // let appPromise = await NestFactory.createApplicationContext(AppModule);
  // app = await appPromise;
  // return app;
}

// initApp();
