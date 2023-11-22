import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from '../../user/user.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_CONNECTION_STRING,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [User],
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
