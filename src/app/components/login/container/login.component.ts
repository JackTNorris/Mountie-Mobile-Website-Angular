import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
//import {LoginInfo} from './models/login-info';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = fb.group({
      username: ['', Validators.email],
      password: ''
    });
    this.errorMessage = '';
  }

  ngOnInit() {

  }

  signIn() {
    this.auth.loginWithEmailAndPassword(this.loginForm.controls.username.value,
                                        this.loginForm.controls.password.value,
                                        this.displayLoginError.bind(this));
  }

  displayLoginError() {
    this.errorMessage = 'Your username or password is incorrect';
  }

}
