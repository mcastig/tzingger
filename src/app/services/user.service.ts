import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[];

  constructor(
    private angularFireDatabase: AngularFireDatabase
  ) {}

  getUsers() {
    return this.angularFireDatabase.list('/users');
  }

  getUserById(uid: string) {
    return this.angularFireDatabase.object('/users/' + uid);
  }

  createUser(user: any) {
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
  }

  editUser(user: any) {
    return this.angularFireDatabase.object('/users/' + user.uid).update(user);
  }
}
