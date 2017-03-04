import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from './app.component'; 
import { AppRoutingModule }     from './app.routing.module';
@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule  ],
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

