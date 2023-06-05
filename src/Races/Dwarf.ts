import Race from './Race';

export default class Dwarf extends Race {
  private static _contador = 0;
  private _points = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._contador += 1;
  }
  
  static createdRacesInstances(): number {
    return Dwarf._contador;
  }
  
  get maxLifePoints(): number {
    return this._points;
  }
}
