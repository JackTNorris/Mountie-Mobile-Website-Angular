import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EventResolverService } from './services/resolver/event-resolver.service';

const routes: Routes = [
  {path: 'events', component: HomeComponent, resolve: EventResolverService },
  {path: 'login', component: LoginComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
