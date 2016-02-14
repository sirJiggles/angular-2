import {Component, OnInit} from 'angular2/core';
import {Hero} from '../../interfaces/hero/index';
import {HeroesService} from '../../services/heroes/index';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/components/dashboard/index.html'
})

export class DashboardComponent {
  public heroes: Hero[] = [];

  constructor(private _heroesService: HeroesService) {}

  ngOnInit() {
    this._heroesService.getHeroes().then( heroes => this.heroes = heroes.slice(1,5) );
  }

  goToDetail() {
    // TODO: implement
  }
}
