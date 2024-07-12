import { Car } from "./car";
export interface Handler<T> {
  setNext(handler: Handler<T>): Handler<T>;
  handle(request: T): Car[] | undefined;
}
