import { Handler } from "../../interfaces/Hadler";
import { Car } from "../../interfaces/car";
import CarService from "../CarService";

export class BrandHandler implements Handler<string> {
  private nextHandler: Handler<string> | undefined;

  public setNext(handler: Handler<string>): Handler<string> {
    this.nextHandler = handler;
    return handler;
  }

  public handle(brand: string): Car[] | undefined {
    const cars = CarService.getInstance().getCarsByBrand(brand);
    if (cars.length > 0) {
      return cars;
    }
    if (this.nextHandler) {
      return this.nextHandler.handle(brand);
    }
    return undefined;
  }
}
