import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/container/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { environment } from '../environments/environment';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EventsComponent } from './components/events/container/events.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddEventComponent,
    EventsComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AngularFireAuthModule,
  ],
  providers: [CookieService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
