import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventdataService {

  constructor() { }

  getEvents(category?: string): Observable<any> {
    return of('test');
  }

  getEvent(key: string): Observable<any> {
    return of('test');
  }


}
