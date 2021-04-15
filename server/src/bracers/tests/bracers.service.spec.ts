import { Test, TestingModule } from '@nestjs/testing';
import { BracersService } from './bracers.service';

describe('BracersService', () => {
  let service: BracersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BracersService],
    }).compile();

    service = module.get<BracersService>(BracersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
