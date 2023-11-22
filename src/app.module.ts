import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/user/user.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [CommonModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
