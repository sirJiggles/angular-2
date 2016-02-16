import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from '../../interfaces/hero/index';
import {HeroesService} from '../../services/heroes/index';

@Component({
  selector: 'dashboard',
  styleUrls: ['app/components/dashboard/styles.css'],
  templateUrl: 'app/components/dashboard/template.html'
})

export class DashboardComponent {
  public heroes: Hero[] = [];

  constructor(
    private _heroesService: HeroesService,
    private _router: Router) {

  }

  ngOnInit(): void {
    this._heroesService.getHeroes().then( heroes => this.heroes = heroes.slice(1,5) );
  }

  goToDetails(hero: Hero): void {
    let link = ['HeroDetails', { id: hero.id }];
    this._router.navigate(link);
  }
}
