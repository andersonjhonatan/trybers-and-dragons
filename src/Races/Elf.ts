import Race from './Race';

export default class Elf extends Race {
  private static _contador = 0;
  private _points = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._contador += 1;
  }
  
  static createdRacesInstances(): number {
    return Elf._contador;
  }
  
  get maxLifePoints(): number {
    return this._points;
  }
}
