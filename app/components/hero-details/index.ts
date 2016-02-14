import {Component} from 'angular2/core';
import {Hero} from '../../interfaces/hero/index';

@Component({
  selector: 'hero-details',
  inputs: ['hero'],
  template:
    `
      <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
      </div>
    `
})

export class HeroDetailsComponent {
  public hero: Hero;
}
