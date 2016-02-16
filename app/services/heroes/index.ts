import {Injectable} from 'angular2/core';
import {HEROES} from '../../mocks/heroes/index'

@Injectable()

export class HeroesService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHero(id: number) {
    return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }
}
