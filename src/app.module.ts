import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvConfigModuleTsModule } from './shared/infra/env-config.module.ts/env-config.module.ts.module';

@Module({
  imports: [EnvConfigModuleTsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
