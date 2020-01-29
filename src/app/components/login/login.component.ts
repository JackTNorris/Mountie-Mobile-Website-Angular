import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private form : FormBuilder, private firebaseAuth: AngularFireAuth) {
    this.loginForm = form.group({
      username: '',
      password: ''
    })
  }

  ngOnInit() {
    
  }

}
