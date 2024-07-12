import React, { useState } from "react";
import CarController from "../controller/CarController";
import { Car } from "../interfaces/car";

const carController = new CarController();

const CarSelector: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModelId, setSelectedModelId] = useState<number | undefined>(
    undefined
  );
  const [cars, setCars] = useState<Car[] | undefined>(undefined);
  const [car, setCar] = useState<Car[] | undefined>(undefined);

  const handleBrandChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    setCars(carController.getCarsByBrand(brand));
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = parseInt(e.target.value, 10);
    setSelectedModelId(id);
    setCar(carController.getCarById(id));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <div className="mb-4">
        <label htmlFor="brand" className="block text-sm font-medium">
          Marca:
        </label>
        <select
          id="brand"
          onChange={handleBrandChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">Selecciona tu marca</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Lamborghini">Lamborghini</option>
          <option value="Mclaren">Mclaren</option>
        </select>
      </div>

      {cars && (
        <div className="mb-4">
          <label htmlFor="model" className="block text-sm font-medium">
            Modelo:
          </label>
          <select
            id="model"
            onChange={handleModelChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-700 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select a model</option>
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.model}
              </option>
            ))}
          </select>
        </div>
      )}

      {car && car.length > 0 && (
        <div className="border border-gray-700 rounded-lg p-4 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-2">{car[0].model}</h2>
          <img
            src={`../assets/${car[0].image}`}
            alt={car[0].model}
            className="w-80 h-auto mb-2 mx-auto"
          />
          <p className="text-lg">Price: ${car[0].price}</p>
        </div>
      )}
    </div>
  );
};

export default CarSelector;
