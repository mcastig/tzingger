import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: User;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.getStatus()
      .subscribe(
        (status) => {
          this.userService.getUserById(status.uid).valueChanges()
            .subscribe(
              (data: User) => {
                this.user = data;
                console.log(this.user);
              }
            )
        },
        (error) => {
          console.log(error);
        }
      )
  }

  saveSettings() {
    this.userService.editUser(this.user).then(
      () => {
        alert('Saved changes');
      }).catch((error) => {
        console.log('Error ocurred');
      })
  }
}
