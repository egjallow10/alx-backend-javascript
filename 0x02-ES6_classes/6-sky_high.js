import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floor = floors;
  }

  get floors() {
    return this._floor;
  }

  set floors(val) {
    this._floor = val;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
