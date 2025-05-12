import { Test, TestingModule } from '@nestjs/testing';
import { ItensProvider } from './itens-provider';

describe('ItensProvider', () => {
  let provider: ItensProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItensProvider],
    }).compile();

    provider = module.get<ItensProvider>(ItensProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
