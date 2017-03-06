// import { Component, Input } from '@angular/core';
import { Hero } from './hero';

// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail', moduleId: module.id,
  providers: [HeroService],
  styleUrls: ['heroes.component.css'],
  template: `
<h1>Hero Details </h1> 
   
<div *ngIf="hero">
<h1> </h1>
<h1>Selected Hero </h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name"/>
  </div>
</div>
<button (click)="save()">Save</button>
<button (click)="goBack()">Back</button>
   `
})
export class HeroDetailComponent implements OnInit {
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  @Input()
  hero: Hero;

  goBack(): void {
    this.location.back();
  }
  save(): void {
  this.heroService.update(this.hero)
    .then(() => this.goBack());
}
}