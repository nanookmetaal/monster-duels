export abstract class Action {
  private _id: string;
  private _selection: number;

  constructor(id: string, selection: number) {
    this._id = id;
    this._selection = selection;
  }

  public get selection(): number {
    return this._selection;
  }
  public set selection(value: number) {
    this._selection = value;
  }
}
