import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private form : FormBuilder, private auth: AuthService) {
    this.loginForm = form.group({
      username: '',
      password: ''
    })
  }

  ngOnInit() {
    
  }

  onSubmit()
  {
    this.auth.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value);
  }

}
