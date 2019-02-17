import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[];

  constructor() {
    let myUser1: User  = {
      nick: 'Maximino',
      subnick: 'adronimo',
      age: 31,
      email: 'adronimo@gmail.com',
      friend: true,
      status: 'online',
      uid: 1
    };

    let myUser2: User  = {
      nick: 'Jasmine',
      subnick: 'jasmina',
      age: 31,
      email: 'jasmine@gmail.com',
      friend: true,
      status: 'online',
      uid: 2
    };

    let myUser3: User  = {
      nick: 'Marcela',
      subnick: 'marce',
      age: 31,
      email: 'marcela@gmail.com',
      friend: true,
      status: 'online',
      uid: 3
    };

    let myUser4: User  = {
      nick: 'Andrea',
      subnick: 'andy',
      age: 31,
      email: 'andrea.andy@gmail.com',
      friend: true,
      status: 'online',
      uid: 4
    };

    let myUser5: User  = {
      nick: 'Karla',
      subnick: 'karli',
      age: 31,
      email: 'karla.karli@gmail.com',
      friend: true,
      status: 'online',
      uid: 4
    };
    this.friends = [myUser1, myUser2, myUser3, myUser4, myUser5];
  }

  getFriends() {
    return this.friends;
  }
}
