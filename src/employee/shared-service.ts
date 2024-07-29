import { CommandBus, ICommandBus, IQueryBus, QueryBus } from '@nestjs/cqrs';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EventNames } from 'src/events/eventNames';
import { app } from 'src/main';

export class Shared {
  constructor(
    private eventEmitter: EventEmitter2,
    private queryBus: IQueryBus,
    private commandBus: ICommandBus,
  ) {}

  async sendEvent(event) {
    await this.injectDependencies();
    let bus: ICommandBus | IQueryBus;
    let request = await this.eventEmitter.emitAsync(
      EventNames[event.eventName],
      event,
    );

    event.operation === 'command'
      ? (bus = this.commandBus)
      : (bus = this.queryBus);
    let reqPromises = request.flat().map((item) => bus.execute(item));
    let response = (await Promise.all(reqPromises)).flat();
    return response;
  }

  async injectDependencies() {
    this.eventEmitter = app.get(EventEmitter2);
    this.commandBus = app.get(CommandBus);
    this.queryBus = app.get(QueryBus);
  }
}
