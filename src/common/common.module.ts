import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';

@Global()
@Module({
  imports: [DatabaseModule],
  exports: [DatabaseModule],
  providers: [],
})
export class CommonModule {}
