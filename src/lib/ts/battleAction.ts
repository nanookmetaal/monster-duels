export abstract class BattleAction {
  private _id: string;
  private _selection: number;
  private _isActive: boolean;

  constructor(id: string, selection: number) {
    this._id = id;
    this._selection = selection;
    this._isActive = false;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  public get selection(): number {
    return this._selection;
  }
  public set selection(value: number) {
    this._selection = value;
  }

  public get isActive(): boolean {
    return this._isActive;
  }
  public set isActive(value: boolean) {
    this._isActive = value;
  }
}
