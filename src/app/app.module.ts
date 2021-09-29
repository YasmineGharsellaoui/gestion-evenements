import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { Home2Component } from './components/home2/home2.component';
import { FeaturesComponent } from './components/features/features.component';
import { PopularCoursesComponent } from './components/popular-courses/popular-courses.component';
import { CounterComponent } from './components/counter/counter.component';
import { EventsComponent } from './components/events/events.component';
import { TeamComponent } from './components/team/team.component';
import { NewsComponent } from './components/news/news.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayEventsComponent } from './components/display-events/display-events.component';
import { DisplayEventComponent } from './components/display-event/display-event.component';
import { SignupComponent } from './components/signup/signup.component';
import { EventComponent } from './components/event/event.component';
import { ReversePipe } from './pipes/reverse.pipe';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    Home2Component,
    FeaturesComponent,
    PopularCoursesComponent,
    CounterComponent,
    EventsComponent,
    TeamComponent,
    NewsComponent,
    NewsletterComponent,
    AddEventComponent,
    DisplayEventsComponent,
    DisplayEventComponent,
    SignupComponent,
    EventComponent,
    ReversePipe,
    LoginComponent,
    SearchComponent,
    AddAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
