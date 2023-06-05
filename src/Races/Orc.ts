import Race from './Race';

export default class Orc extends Race {
  private static _contador = 0;
  private _points = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._contador += 1;
  }
  
  static createdRacesInstances(): number {
    return Orc._contador;
  }
  
  get maxLifePoints(): number {
    return this._points;
  }
}
