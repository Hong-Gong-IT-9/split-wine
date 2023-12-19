import { Injectable } from '@nestjs/common';
import { User } from './users.module';
import { PrismaService } from '../db/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }
}
