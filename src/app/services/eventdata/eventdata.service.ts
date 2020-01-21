import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventdataService {

  constructor(private http : HttpClient) { }

  getEvents(category?: string): Observable<any> {
    return this.http.get('/api/events/test');
  }

  getEvent(key: string): Observable<any> {
    return this.http.get('/api/events/test');
  }


}
