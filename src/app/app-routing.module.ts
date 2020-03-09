import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/component/login.component';
import { AuthGuard } from './guards/auth/auth.guard';
//import { EventResolver } from './services/resolver/event-resolver.service';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'events', component: HomeComponent, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
