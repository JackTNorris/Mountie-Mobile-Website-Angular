import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import EventItem from 'src/assets/models/EventItem';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private afDatabase: AngularFireDatabase) { }

  getEvents(category?: string): Observable<EventItem[]> {
    return this.afDatabase.object(`/events/${category}`)
    .valueChanges()
    .pipe(
      map((val: any ) => {
        const events: EventItem[] = [];
        // tslint:disable-next-line: forin
        // tslint:disable-next-line: no-shadowed-variable
        for (const category in val) {
          // tslint:disable-next-line: forin
          for (const event in val[category]) {
            events.push(val[category][event]);
          }
        }
        return events;
      })
    );
  }

  getEvent(category: string, key: string): Observable<EventItem> {
    return this.afDatabase.object(`/events/${category}/${key}`).valueChanges().pipe(map((val: EventItem) => val));
  }

  deleteEvent(category: string, key: string): void {
    this.afDatabase.object(`events/${category}/${key}`).remove()
    .then(() => console.log('Event removed'))
    .catch(error => console.log(error.message));
  }

  editEvent(key: string, editedEvent: EventItem): void {
    this.afDatabase.object(`/events/${editedEvent.category}/${key}`).set(editedEvent)
    .then(() => console.log('Event edited'))
    .catch(error => console.log(error.message));
  }

  addEvent(newEvent: EventItem): void {
    this.afDatabase.database.ref(`/events/${newEvent.category}`).push(newEvent)
    .then(() => console.log('Event added'))
    .catch(error => console.log(error.message));
  }

}
