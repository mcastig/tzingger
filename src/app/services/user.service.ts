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
      subnick: 'mx',
      age: 31,
      email: 'maximino@gmail.com',
      friend: true,
      uid: 1
    };

    let myUser2: User  = {
      nick: 'Nyha',
      subnick: 'huston',
      age: 31,
      email: 'nyha.huston@gmail.com',
      friend: true,
      uid: 2
    };

    let myUser3: User  = {
      nick: 'Swati',
      subnick: 'swat',
      age: 31,
      email: 'swati.swat@gmail.com',
      friend: false,
      uid: 3
    };

    let myUser4: User  = {
      nick: 'Andrea',
      subnick: 'andy',
      age: 31,
      email: 'andrea.andy@gmai.com',
      friend: false,
      uid: 4
    };

    let myUser5: User  = {
      nick: 'Karla',
      subnick: 'kar',
      age: 31,
      email: 'karla.kar@gmai.com',
      friend: false,
      uid: 4
    };
    this.friends = [myUser1, myUser2, myUser3, myUser4, myUser5];
  }

  getFriends() {
    return this.friends;
  }
}
