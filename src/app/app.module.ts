import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { FormsModule } from '@angular/forms'; 
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroSearchComponent } from './hero-search.component';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component'; 
import { AppRoutingModule }     from './app.routing.module';
@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpModule ,    InMemoryWebApiModule.forRoot(InMemoryDataService), ],
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent,HeroSearchComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

