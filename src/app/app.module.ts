import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/container/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { environment } from '../environments/environment';
import { AddEventComponent } from './features/events/add-event/add-event.component';
import { EventsComponent } from './features/events/container/events.component';
import { EventListComponent } from './features/events/event-list/event-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { QueueComponent } from './features/queue/queue.component';
import { AnnouncementsComponent } from './features/announcements/container/announcements.component';
import {AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthGuardModule, AngularFireAuthGuard} from '@angular/fire/auth-guard';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AddAnnouncementComponent } from './features/announcements/add-announcement/add-announcement.component';
import { UsersComponent } from './features/users/users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEventComponent,
    EventsComponent,
    EventListComponent,
    HeaderComponent,
    QueueComponent,
    AnnouncementsComponent,
    AddAnnouncementComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFireDatabaseModule
  ],
  providers: [CookieService, AngularFireAuth, AngularFireAuthGuard, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
