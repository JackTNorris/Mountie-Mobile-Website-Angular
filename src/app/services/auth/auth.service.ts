import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { 
    
  }
  get isAuthenticated(){
    return true;
  }
  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
    }).catch((error) => {
      console.log(error);
    })
  }
}
