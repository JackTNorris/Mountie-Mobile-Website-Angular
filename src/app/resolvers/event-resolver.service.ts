import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<any> {

  constructor() { }
  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<boolean> {
    return of(true);
  }
}
