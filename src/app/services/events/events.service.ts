import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import EventItem from 'src/assets/models/EventItem';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(category?: string): Observable<EventItem[]> {
    return this.http.get<any>(`${environment.apiUrl}/api/events/${category}`);
    console.log(`${environment.apiUrl}/api/events/${category}`);
  }

  getEvent(category: string, key: string): Observable<EventItem> {
    return this.http.get<EventItem>(`${environment.apiUrl}/api/events/${category}/${key}`);
  }

  deleteEvent(category: string, key: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}/api/actions/deleteEvent/${category}/${key}`);
  }
  
}
