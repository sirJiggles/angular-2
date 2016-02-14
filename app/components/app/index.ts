import {Component} from 'angular2/core';

interface Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'app',
	template: `
		<h2>{{hero.name}} details!</h2>
		<div><label>id: </label>{{hero.id}}</div>
		<div><input [(ngModel)]="hero.name" placeholder="name" /></div>
	`
})

export class AppComponent {
	public title = 'Tour of heroes';
	public hero: Hero = {
		id: 1,
		name: 'Wilson'
	}
}
