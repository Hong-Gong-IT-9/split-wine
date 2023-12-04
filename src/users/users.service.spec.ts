import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.module';
import { PrismaService } from '../db/prisma.service';

import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

describe('UsersService', () => {
  const mockPrisma: DeepMockProxy<PrismaService> = mockDeep<PrismaService>();
  const service: UsersService = new UsersService(mockPrisma);

  describe('getUsers', () => {
    it('should return empty if prisma returns empty', async () => {
      mockPrisma.user.findMany.mockResolvedValue([]);
      expect((await service.getUsers()).length).toEqual(0);
    });
  });
  it('should return exactly prisma returns', async () => {
    const givenUser = {
      id: 1,
      email: 'alan.kan@gmail.com',
      password: 'whiskeyplz',
      name: 'Alan',
    };
    mockPrisma.user.findMany.mockResolvedValue([givenUser]);
    const result = await service.getUsers();
    expect(result.length).toEqual(1);
    expect(result).toContainEqual<User>(givenUser);
  });
});
