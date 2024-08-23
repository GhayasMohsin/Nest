import { Module } from '@nestjs/common';
import { ConfigurationService } from './config';

@Module({
  providers: [ConfigurationService],
  exports: [ConfigurationService],
})
export class ConfigurationModule {}
