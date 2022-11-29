import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'mateo',
      password: 'nadasegura',
    },
    {
      id: 2,
      username: 'pablo',
      password: 'nadasegura',
    },
  ];

  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: this.users.length + 1,
    };
    this.users.push(user);
    console.log(this.users)
    return user;
  }

  

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }

  findAll() {
    return this.users;
  }
}
