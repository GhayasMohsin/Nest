import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventListener } from './listeners/employee.listener';
import { EventNames } from './eventNames';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: true,
    }),
  ],
  providers: [EventListener, EventNames],
  exports: [EventNames, EventListener],
})
export class EventsModule {}
