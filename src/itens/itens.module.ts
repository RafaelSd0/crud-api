import { Module } from '@nestjs/common';
import { ItensProvider } from './itens-provider/itens-provider';
import { ItensServiceService } from './itens-service/itens-service.service';
import { ItensControllerController } from './itens-controller/itens-controller.controller';

@Module({
  providers: [ItensProvider, ItensServiceService],
  controllers: [ItensControllerController]
})
export class ItensModule {}
