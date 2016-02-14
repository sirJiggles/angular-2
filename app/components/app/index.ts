import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroesComponent} from '../heroes/index';
import {DashboardComponent} from '../dashboard/index';
import {HeroesService} from '../../services/heroes/index';

@Component({
	selector: 'app',
	directives: [
		ROUTER_DIRECTIVES
	],
	providers: [
		HeroesService,
		ROUTER_PROVIDERS
	],
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a [routerLink]="['Heroes']">Heroes</a>
			<a [routerLink]="['Dashboard']">Dashboard</a>
		</nav>
		<router-outlet></router-outlet>
	`
})

@RouteConfig([
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	},
	{
		path: '/dahsboard',
		name: 'Dashboard',
		useAsDefault: true,
		component: DashboardComponent
	}
])

export class AppComponent {
	public title: String = 'Heroes app!';
}
