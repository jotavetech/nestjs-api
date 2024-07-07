import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigModuleTsService } from './env-config.service';

describe('EnvConfigModuleTsService', () => {
  let service: EnvConfigModuleTsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvConfigModuleTsService],
    }).compile();

    service = module.get<EnvConfigModuleTsService>(EnvConfigModuleTsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
