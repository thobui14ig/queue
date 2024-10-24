import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  create() {
    this.usersService.handleInAdaptor();
    setTimeout(() => {
      this.usersService.handleInBridge();
    }, 500);
  }
}
