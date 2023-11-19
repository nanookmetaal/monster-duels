export abstract class Duellist {
  private _health: number;
  private _name: string;

  constructor(inName: string) {
    this._health = 10;
    this._name = inName;
  }

  public get health(): number {
    return this._health;
  }

  public get name(): string {
    return this._name;
  }

  public set name(inName: string) {
    this._name = inName;
  }

  public removeHealth(amount: number): number {
    this._health = this._health - amount;

    return this._health;
  }

}