import { Injectable } from '@nestjs/common';
import { User } from './users.module';
import { PrismaService } from '../db/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async regUser(name: string, email: string, plainPassword: string) {
    // TODO: might need to hash the password later on
    
    // create new user in database
    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: plainPassword,
      },
    });

    return user;
  }
}
