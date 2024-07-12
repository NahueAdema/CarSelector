import React from "react";
import CarSelector from "./components/CarSelector";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-2xl font-bold mb-4">Selecciona tu Auto</h1>
      </header>
      <CarSelector />
    </div>
  );
};

export default App;
