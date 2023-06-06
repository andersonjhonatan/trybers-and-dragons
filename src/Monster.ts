import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor(life = 85, stren = 63) {
    this._lifePoints = life;
    this._strength = stren;
  }

  get lifePoints():number {
    return this._lifePoints;
  }

  get strength():number {
    return this._strength;
  }

  receiveDamage(attackPoints: number):number {
    const danos = this._lifePoints - attackPoints;
    if (danos <= 0) {
      this._lifePoints = -1;
    } 
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    const danos = this._strength; 
    enemy.receiveDamage(danos);
  }
}