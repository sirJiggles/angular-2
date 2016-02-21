import {Component, OnInit} from 'angular2/core';
import {Hero} from '../../interfaces/hero/index';
import {Router} from 'angular2/router';
import {HeroDetailsComponent} from '../hero-details/index';
import {HeroesService} from '../../services/heroes/index';

@Component({
	selector: 'heroes',
	directives: [HeroDetailsComponent],
	styleUrls: ['app/components/heroes/styles.css'],
	templateUrl: 'app/components/heroes/template.html'
})

export class HeroesComponent implements OnInit {
	public title: string = 'List of heroes';
	public selectedHero: Hero;
	public heroes: Hero[];

	constructor (
		private _heroesService: HeroesService,
		private _router: Router
	) {}

	ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
		this._heroesService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	goToDetails(): void {
		this._router.navigate(['HeroDetails', {id: this.selectedHero.id}]);
	}

	someCustomEvent(hero: Hero) {
		console.log(hero);
	}
}
