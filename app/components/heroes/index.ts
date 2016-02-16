import {Component, OnInit} from 'angular2/core';
import {Hero} from '../../interfaces/hero/index';
import {HeroDetailsComponent} from '../hero-details/index';
import {Router} from 'angular2/router';
import {HeroesService} from '../../services/heroes/index';

@Component({
	selector: 'heroes',
	directives: [HeroDetailsComponent],
	styleUrls: ['app/components/heroes/styles.css'],
	templateUrl: 'app/components/heroes/template.html'
})

export class HeroesComponent implements OnInit {
	public title: String = 'Tour of heroes';
	public selectedHero: Hero;
	public heroes: Hero[];

	constructor (
		private _heroesService: HeroesService,
		private _router: Router
	) {}

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes() {
		this._heroesService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}

	goToDetails() {
		this._router.navigate(['HeroDetails', {id: this.selectedHero.id}]);
	}
}
