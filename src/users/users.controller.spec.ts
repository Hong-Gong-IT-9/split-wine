import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.module';
import { PrismaService } from '../db/prisma.service';
import { mock } from 'jest-mock-extended';

describe('UsersController', () => {
  const mockService = mock<UsersService>();
  const controller: UsersController = new UsersController(mockService);

  describe('getUsers', () => {
    it('should return exactly service returns', async () => {
      const givenUser = {
        id: 1,
        email: 'alan.kan@gmail.com',
        password: 'whiskeyplz',
        name: 'Alan',
      };
      mockService.getUsers.mockResolvedValue([givenUser]);
      const result = await controller.getUsers();
      expect(result.length).toEqual(1);
      expect(result).toContainEqual<User>(givenUser);
    });
  });
});
