import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/container/login.component';
import { EventsComponent } from './components/events/container/events.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AddEventComponent } from './components/events/add-event/add-event.component';
import { QueueComponent } from './components/queue/queue.component';
import { AnnouncementsComponent } from './components/announcements/container/announcements.component';
import { AddAnnouncementComponent } from './components/announcements/add-announcement/add-announcement.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},

  {path: 'events', component: EventsComponent,
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: () => redirectUnauthorizedTo(['login'])}},

  {path: 'login', component: LoginComponent},
  {path: 'addEvent', component: AddEventComponent,
  canActivate: [AngularFireAuthGuard], data: { authGuardPipe: () => redirectUnauthorizedTo(['login'])}},
  {path: 'announcements', component: AnnouncementsComponent,
  canActivate: [AngularFireAuthGuard], data: { authGuardPipe: () => redirectUnauthorizedTo(['login'])}},
  {path: 'addAnnouncement', component: AddAnnouncementComponent,
  canActivate: [AngularFireAuthGuard], data: { authGuardPipe: () => redirectUnauthorizedTo(['login'])}},
  {path: 'queue', component: QueueComponent, canActivate: [AngularFireAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
