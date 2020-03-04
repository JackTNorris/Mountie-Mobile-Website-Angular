import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookie: CookieService, private route: Router/*, private afAuth: AngularFireAuth*/) {}

   loginWithEmailAndPassword(email: string, password: string, invalidFunction: () => void ) {
     /*
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((idToken) => {
      this.cookie.set('__session', 'test');
      this.route.navigate(['events']);
    }).catch((error) => {
      console.log(error);
      invalidFunction();
    });
    */
    
  }
  
}
