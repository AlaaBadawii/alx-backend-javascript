export default class Airport {
  constructor(name, code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._name = name;
    this._code = code;
  }

  toString() {
    return this._code;
  }
}
