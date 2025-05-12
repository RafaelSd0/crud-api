import { Test, TestingModule } from '@nestjs/testing';
import { ItensControllerController } from './itens-controller.controller';

describe('ItensControllerController', () => {
  let controller: ItensControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItensControllerController],
    }).compile();

    controller = module.get<ItensControllerController>(ItensControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
