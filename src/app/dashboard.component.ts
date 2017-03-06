import { Component } from '@angular/core'; 

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'dashboard-heroes',   
   templateUrl: './dashboard.component.html',
  providers: [HeroService]
})
export class DashboardComponent {
  title = 'Tour of Heroes';
  
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }



}