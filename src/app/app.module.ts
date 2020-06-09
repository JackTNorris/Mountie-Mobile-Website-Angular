import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/container/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { environment } from '../environments/environment';
import { AddEventComponent } from './components/events/add-event/add-event.component';
import { EventsComponent } from './components/events/container/events.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { QueueComponent } from './components/queue/queue.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import {AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthGuardModule, AngularFireAuthGuard} from '@angular/fire/auth-guard';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEventComponent,
    EventsComponent,
    EventListComponent,
    HeaderComponent,
    QueueComponent,
    AnnouncementsComponent
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
