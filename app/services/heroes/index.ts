import {Injectable} from 'angular2/core';
import {HEROES} from '../../mocks/heroes/index'

@Injectable()

export class HeroesService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }
}
