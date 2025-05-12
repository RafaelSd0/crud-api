import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ItensModule } from './itens/itens.module';

@Module({
  imports: [DatabaseModule, ItensModule],
  controllers: [],
})
export class AppModule {}
