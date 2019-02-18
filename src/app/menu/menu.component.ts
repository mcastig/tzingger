import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.authenticationService.logOut().then(
      () => {
        alert('Session closed correctly!');
        this.router.navigate(['login']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
