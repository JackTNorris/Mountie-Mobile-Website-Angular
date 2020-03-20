import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import EventItem from 'src/assets/models/EventItem';
@Injectable({
  providedIn: 'root'
})
export class EventdataService {

  constructor(private http : HttpClient) { }

  getEvents(category?: string): Observable<EventItem[]> {
    return this.http.get<any>(`/api/events/${category}`);
  }

  getEvent(category: string, key: string): Observable<EventItem> {
    return this.http.get<EventItem>(`/api/events/${category}/${key}`);
  }

  deleteEvent(category: string, key: string): Observable<any> {
    return this.http.delete<any>(`/api/actions/deleteEvent/${category}/${key}`);
  }


}
