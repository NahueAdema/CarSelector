import { Car } from "../interfaces/car";
class CarService {
  private static instance: CarService;
  private cars: Car[] = [
    {
      id: 1,
      brand: "Ferrari",
      model: "LaFerrari",
      image: "ferrari-laferrari.jpg",
      price: 1300000,
    },
    {
      id: 2,
      brand: "Ferrari",
      model: "F40",
      image: "1-f40.jpg",
      price: 1500000,
    },
    {
      id: 3,
      brand: "Lamborghini",
      model: "Veneno",
      image: "lamboVeneno.jpg",
      price: 4080000,
    },
    {
      id: 4,
      brand: "Lamborghini",
      model: "Huracan",
      image: "laboHuracan.jpg",
      price: 240000,
    },
    {
      id: 5,
      brand: "Mclaren",
      model: "765L",
      image: "McClaren-765LT.jpg",
      price: 545000,
    },
    {
      id: 6,
      brand: "Mclaren",
      model: "720s",
      image: "mclaren-720s-spider-mso.jpg",
      price: 325000,
    },
  ];

  private constructor() {}

  public static getInstance(): CarService {
    if (!CarService.instance) {
      CarService.instance = new CarService();
    }
    return CarService.instance;
  }

  getCarsByBrand(brand: string): Car[] {
    return this.cars.filter((car) => car.brand === brand);
  }

  getCarById(id: number): Car | undefined {
    return this.cars.find((car) => car.id === id);
  }
}

export default CarService;
