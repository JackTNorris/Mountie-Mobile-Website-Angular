import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/container/login.component';
import { EventsComponent } from './components/events/container/events.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'events', component: EventsComponent, canActivate: [AngularFireAuthGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
