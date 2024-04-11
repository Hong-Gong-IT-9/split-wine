import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.module';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  async regUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string
  ): Promise<User> {
    return this.usersService.regUser(name, email, password);
  }
}
