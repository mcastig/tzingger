import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  friends: User[];
  user: User;
  query: string = '';

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {

    // Get all contacts
    this.userService.getUsers().valueChanges().subscribe(
      (data: User[] ) => {
        this.friends = data;
      }, (error) => {
        console.log(error);
      }
    );

    // Verify the status and data of the user
    this.authenticationService.getStatus().subscribe(
      (status) => {
        this.userService.getUserById(status.uid).valueChanges().subscribe(
          (data: User) => {
            this.user = data;
            console.log(this.user);
          }, (error) => {
            console.log(error);
          });
      }, (error) => {
        console.log(error);
      });
}

  ngOnInit() {
  }
}
