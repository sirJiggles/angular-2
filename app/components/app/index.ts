import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroesComponent} from '../heroes/index';
import {DashboardComponent} from '../dashboard/index';
import {HeroDetailsComponent} from '../hero-details/index';
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
	styleUrls: ['app/components/app/styles'],
	templateUrl: 'app/components/app/template.html'
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
	},
	{
		path: '/detail/:id',
		name: 'HeroDetails',
		component: HeroDetailsComponent
	}
])

export class AppComponent {
	public title: String = 'Heroes app!';
}
