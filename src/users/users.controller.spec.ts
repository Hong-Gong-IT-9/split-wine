import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.module';

describe('UsersController', () => {
  let usersController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
  });

  describe('root', () => {
    it('should return stored users', () => {
      expect(usersController.getUsers()).toContainEqual<User>({
        id: 1,
        username: 'jo.law',
        password: 'whiskeyplz',
        displayName: 'Alan',
      });
    });
  });
});
