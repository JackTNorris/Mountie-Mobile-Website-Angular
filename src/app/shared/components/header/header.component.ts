import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/auth';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAdmin$: Observable<boolean>;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.isAdmin$ = this.auth.verifyAdmin();
  }

}
