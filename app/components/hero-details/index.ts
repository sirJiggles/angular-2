import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HeroesService} from '../../services/heroes/index';
import {Hero} from '../../interfaces/hero/index';

@Component({
  selector: 'hero-details',
  inputs: ['hero'],
  styleUrls: ['app/components/hero-details/styles.css'],
  templateUrl: 'app/components/hero-details/template.html'
})

export class HeroDetailsComponent {
  public hero: Hero;

  constructor(
    private _heroesService: HeroesService,
    private _routeParams: RouteParams) {
  }

  ngOnInit(): void {
    // convert the route param to a number using + in JS
    let id = +this._routeParams.get('id');
    this._heroesService.getHero(id).then(hero => this.hero = hero);
  }

  goBack(): void {
    window.history.back();
  }
}
