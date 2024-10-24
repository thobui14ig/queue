import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { BullModule } from '@nestjs/bull';
import { UsersConsumer } from './users.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'users',
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersConsumer],
})
export class UsersModule {}
