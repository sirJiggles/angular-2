import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {HeroesService} from '../../services/heroes/index';
import {Hero} from '../../interfaces/hero/index';

@Component({
  selector: 'hero-details',
  inputs: ['hero'],
  templateUrl: 'app/components/hero-details/template.html',
  styleUrls: ['app/components/hero-details/style.css']
})

export class HeroDetailsComponent {
  public hero: Hero;
  public powers: string[] = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  public submited: boolean = false;

  // An emitter for sending things out of the component
  @Output() customEvent = new EventEmitter<Hero>();
  // could use the custom event on the directive if it was a child like this
  // <hero-details (customEvent)="someParentFunction($event)"></hero-details>
  // The hero would be passed in the event to the parent

  constructor(
    private _heroesService: HeroesService,
    private _routeParams: RouteParams) {
  }

  ngOnInit(): void {
    // convert the route param to a number using + in JS
    let id = +this._routeParams.get('id');
    this._heroesService.getHero(id).then(hero => this.hero = hero);
  }

  onSubmit() {
    // emit the custom hero out (if we where using)
    this.customEvent.emit(this.hero);
    console.log('sending it out');
    this.submited = true;
  }

  goBack(): void {
    window.history.back();
  }
}
