import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private angularFirteAuth: AngularFireAuth) { }

  loginWithEmail(email: string, password: string) {
    return this.angularFirteAuth.auth.signInWithEmailAndPassword(email, password);
  }

  registerWithEmail(email: string, password: string) {
    return this.angularFirteAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  getStatus() {
    return this.angularFirteAuth.authState;
  }

  logOut() {
    return this.angularFirteAuth.auth.signOut();
  }
}
