import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mountie-Mobile-Website-Angular';
  data = 'stuff';
  constructor(private http: HttpClient){}
  onPressButton() {
    this.http.get(`${environment.apiUrl}/api/test`).subscribe((data: any) => {
      this.data = data.test;
    });
    console.log('Sent http request');
  }
}
