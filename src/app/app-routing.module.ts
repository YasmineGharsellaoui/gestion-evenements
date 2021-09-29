import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { DisplayEventComponent } from './components/display-event/display-event.component';
import { DisplayEventsComponent } from './components/display-events/display-events.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {path: 'addEvent', component: AddEventComponent},
  {path: '', component: HomeComponent},
  {path: 'displayEvents', component: DisplayEventsComponent},
  //path dynamique
  {path: 'displayEvent/:id', component: DisplayEventComponent},
  {path: 'editEvent/:id', component: AddEventComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchComponent},
  {path: 'addAdmin', component: AddAdminComponent}








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
