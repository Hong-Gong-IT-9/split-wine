import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.module';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }
}
