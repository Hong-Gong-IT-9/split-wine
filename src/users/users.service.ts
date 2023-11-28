import { Injectable } from '@nestjs/common';
import { User } from './users.module';

@Injectable()
export class UsersService {
  getUsers(): User[] {
    return [
      {
        id: 1,
        username: 'alan.kan',
        password: 'whiskeyplz',
        displayName: 'Alan',
      },
    ]; // todo: read db instead
  }
}
