import Character from './character';

export default class Magician extends Character {
  set stoned(cell) {
    super.attack = cell;
    this.damage = Math.round(super.attack - Math.log2(cell) * 5);
  }

  get stoned() {
    return this.damage;
  }
}
