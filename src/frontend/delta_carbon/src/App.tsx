import ActiveDevices from "./components/activeDevices";
import iconImage from "./assets/wind1.png";
import Temperature from "./components/temperature";
import thermometerIcon from "./assets/Ellipse2.png";
import EnergyConsumption from "./components/energyConsumption";
import AirConditioningConsumption from "./components/airConditioningConsumption";
import CarbonReduced from "./components/carbonReduced";
import CardTotalRevenue from "./components/cardTotalRevenue";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Conteúdo principal centralizado */}
      <main className="flex-1 flex flex-col gap-8 px-10 pb-10">
        {/* Primeira linha: 4 cards lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <ActiveDevices
            icon={iconImage}
            number={13}
            description="Dispositivos ativos"
          />
          <Temperature
            icon={thermometerIcon}
            temperature={21}
            description="Temperatura"
          />
          <EnergyConsumption
            consumption={70}
            description="Consumo de energia total"
          />
          <AirConditioningConsumption
            consumption={30}
            description="Consumo da climatização"
          />
        </div>

        {/* Segunda linha: 2 cards lado a lado */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
            <CardTotalRevenue />
          </div>
          <CarbonReduced
            percent={15}
            descriptionTop="Você reduziu"
            descriptionBottom="das emissões de carbono"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
