import { BrandHandler } from "../services/handlers/BrandHandler";
import { ModelHandler } from "../services/handlers/ModelHandler";
import { Car } from "../interfaces/car";

class CarController {
  private brandHandler: BrandHandler;
  private modelHandler: ModelHandler;

  constructor() {
    this.brandHandler = new BrandHandler();
    this.modelHandler = new ModelHandler();
  }

  getCarsByBrand(brand: string): Car[] | undefined {
    return this.brandHandler.handle(brand);
  }

  getCarById(id: number): Car[] | undefined {
    return this.modelHandler.handle(id);
  }
}

export default CarController;
