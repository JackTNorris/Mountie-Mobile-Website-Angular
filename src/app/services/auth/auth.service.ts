import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { 
    
  }

  loginWithEmailAndPassword(email: string, password: string ) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    }).catch((error) => {
      console.log(error);
    })
  }

  isVerified(idToken: string): Observable<boolean>{
    //maybe an http request to verify auth?
    return of(true);
  }
}
