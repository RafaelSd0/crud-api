import { Module } from '@nestjs/common';
import { databaseProvider } from './providers/database-provider/database-provider';

@Module({
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule {}
