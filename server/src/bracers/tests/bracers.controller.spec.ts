import { Test, TestingModule } from '@nestjs/testing';
import { BracersController } from '../bracers.controller';

describe('BracersController', () => {
  let controller: BracersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BracersController],
    }).compile();

    controller = module.get<BracersController>(BracersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
