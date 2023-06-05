import Race from './Race';

export default class Halfling extends Race {
  private static _contador = 0;
  private _points = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._contador += 1;
  }
  
  static createdRacesInstances(): number {
    return Halfling._contador;
  }
  
  get maxLifePoints(): number {
    return this._points;
  }
}
