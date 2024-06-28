import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand);
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    return new Car(this._brand);
  }
}

export default EVCar;
