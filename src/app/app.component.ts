import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mountie-Mobile-Website-Angular';
  data = 'stuff';
  constructor(private http: HttpClient)
  {}
  onPressButton()
  {
    this.http.get('/api/test').subscribe((data : any) => {
      this.data = data.test;
    });
    console.log('Sent http request');
  }
}
