import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import EventItem from 'src/app/models/EventItem';
@Injectable({
  providedIn: 'root'
})
export class EventdataService {

  constructor(private http : HttpClient) { }

  getEvents(category?: string): Observable<any> {
    return this.http.get<any>('/api/events/test');
  }

  getEvent(key: string): Observable<EventItem> {
    return this.http.get<EventItem>('/api/events/test');
  }


}
