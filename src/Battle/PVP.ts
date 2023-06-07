import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(play1: Fighter, play2: Fighter) {
    super(play1);
    this._player1 = play1;
    this._player2 = play2;
  }

  fight(): number {
    while (
      this._player1.lifePoints > 0 
      && this._player2.lifePoints > 0
    ) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }

    return super.fight();
  }
}
