import 'source-map-support/register';
import { initApp } from '../../../../src/main';
import { BaseModule } from '../base.module';
import { Shared } from 'src/employee/shared-service';

const appPromise = initApp(BaseModule);

export const handler = async (event, context) => {
  const app = await appPromise;
  return await app.get(Shared).sendEvent(event);
};
