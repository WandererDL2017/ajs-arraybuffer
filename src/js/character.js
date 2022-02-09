export default class Character {
  constructor() {
    this.damage = 100;
  }

  set attack(cell) {
    this.damage -= (cell - 1) * 10;
  }

  get attack() {
    return this.damage;
  }
}
