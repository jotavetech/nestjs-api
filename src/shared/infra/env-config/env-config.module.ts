import { Module } from '@nestjs/common';
import { EnvConfigModuleTsService } from './env-config.service';

@Module({
  providers: [EnvConfigModuleTsService],
})
export class EnvConfigModuleTsModule {}
