import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import EventItem from '../../models/EventItem';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventdataService } from '../eventdata/eventdata.service';
@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<EventItem>{
  constructor(private http : HttpClient, private eventdataService : EventdataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EventItem>
  {
    return this.eventdataService.getEvent(route.paramMap.get('eventKey'));
  }
}
