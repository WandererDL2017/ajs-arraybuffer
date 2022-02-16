export default class Damage {
  constructor(cell) {
    this.maxAttack = 100;
    this.cell = cell;
  }

  set attack(value) {
    if (value === true) {
      this.damage = this.maxAttack - (this.cell - 1) * 10;
      this.damage -= Math.round(Math.log2(this.cell) * 5);
    } else {
      this.damage = this.maxAttack - (this.cell - 1) * 10;
    }
  }

  get attack() {
    return this.damage;
  }

  set stoned(value) {
    this.value = value;
  }

  get stoned() {
    return this.value;
  }
}
