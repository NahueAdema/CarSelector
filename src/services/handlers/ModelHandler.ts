import { Car } from "../../interfaces/car";
import { Handler } from "../../interfaces/Hadler";
import CarService from "../CarService";

export class ModelHandler implements Handler<number> {
  private nextHandler: Handler<number> | undefined;

  public setNext(handler: Handler<number>): Handler<number> {
    this.nextHandler = handler;
    return handler;
  }

  public handle(id: number): Car[] | undefined {
    const car = CarService.getInstance().getCarById(id);
    if (car) {
      return [car];
    }
    if (this.nextHandler) {
      return this.nextHandler.handle(id);
    }
    return undefined;
  }
}
