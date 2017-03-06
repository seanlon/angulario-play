import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
 styleUrls: ['app/heroes.component.css'],
  template: `
  
<h1>{{name}} {{title}} </h1> 
<h1>Hero List</h1>
    <h2>My Heroes</h2>
  <ul class="heroes">
    <!-- each hero goes here -->
    <li *ngFor="let hero of heroes" (click)="onSelect(hero)" 
        [class.selected]="hero === selectedHero"  >
        <p class="badge">{{hero.id}}</p>
        <p class="badge">{{hero.name}}</p> 
    <button class="delete"
      (click)="delete(hero); $event.stopPropagation()">x</button>
    </li>
  </ul> 
  

<div *ngIf="selectedHero">
  <h2>
    {{selectedHero.name | uppercase}} is my hero
  </h2>
  <button (click)="gotoDetail()">View Details</button>
</div>  


<div>
  <label>Hero name:</label> <input #heroName />
  <button (click)="add(heroName.value); heroName.value=''">
    Add
  </button>
</div>
   `,
  //  <my-hero-detail [hero]="selectedHero"></my-hero-detail>

  providers: [HeroService]

})



export class HeroesComponent implements OnInit {

  name = 'Angular';
  title = 'Tour of Heroes';
  selectedHero: Hero = null;
  heroes: Hero[];


  constructor(private heroService: HeroService, private router: Router) {
  }
  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);

  }
  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
