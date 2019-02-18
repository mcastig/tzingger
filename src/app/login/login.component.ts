import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  operation: string = 'signin';
  email: string = null;
  password: string = null;
  nickname: string = null;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.loginWithEmail(this.email, this.password)
      .then((data) => {
        alert('Logged correctly!');
        console.log(data);
        this.router.navigate(['home']);
      }).catch((error) => {
        alert('Error ocurred!');
        console.log(error);
      });
  }

  loginWithFacebook() {
    this.authenticationService.loginWithFacebook()
      .then((data) => {
        alert('Logged with facebook correctly!');
        console.log(data);
        this.router.navigate(['home']);
      }).catch((error) => {
        alert('Error ocurred!');
        console.log(error);
      });
  }

  register() {
    this.authenticationService.registerWithEmail(this.email, this.password)
      .then((data) => {
        const user = {
          uid: data.user.uid,
          email: this.email,
          nickname: this.nickname
        }
        this.userService.createUser(user).then((data) => {
          alert('Registered succesfully!');
          console.log(data);
        }).catch((error) => {
          alert('Error ocurred!');
          console.log(error);
        });
      }).catch((error) => {
        alert('Error ocurred!');
        console.log(error);
      });
  }
}
