export class NumberPair {

  // tslint:disable-next-line:variable-name
  private _first: number;
  // tslint:disable-next-line:variable-name
  private _second: number;

  constructor(first: number, second: number) {
    this._first = first;
    this._second = second;
  }

  get first(): number {
    return this._first;
  }

  set first(value: number) {
    this._first = value;
  }

  get second(): number {
    return this._second;
  }

  set second(value: number) {
    this._second = value;
  }

}
