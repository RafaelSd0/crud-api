import { Test, TestingModule } from '@nestjs/testing';
import { ItensServiceService } from './itens-service.service';

describe('ItensServiceService', () => {
  let service: ItensServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItensServiceService],
    }).compile();

    service = module.get<ItensServiceService>(ItensServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
