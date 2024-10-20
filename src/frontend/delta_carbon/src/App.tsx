import ActiveDevices from './components/activeDevices';
import iconImage from './assets/wind1.png'; // ajuste o caminho conforme necessário
import Temperature from './components/temperature';
import thermometerIcon from './assets/Ellipse2.png'; // ajuste o caminho conforme necessário
import EnergyConsumption from './components/energyConsumption';
import AirConditioningConsumption from './components/airConditioningConsumption';
import EnergyReduced from './components/energyReduced';
import CarbonReduced from './components/carbonReduced';
import CardTotalRevenue from './components/cardTotalRevenue';
import PieChart from './components/pieChart';

function App() {
  return (
    <div className="bg-gray-100 p-8 h-screen">
      {/* Dashboard Header */}
      <div className="text-left">
        <h1 className="text-4xl font-bold mb-5">Dashboard</h1>
      </div>

      {/* Dashboard Grid with reduced gap */}
      <div className="grid grid-cols-4 gap-2">
        {/* First row - 4 Columns */}
        <div>
          <ActiveDevices icon={iconImage} number={13} description="Dispositivos ativos" />
        </div>
        <div>
          <Temperature icon={thermometerIcon} temperature={21} description="Temperatura" />
        </div>
        <div>
          <EnergyConsumption consumption={70} description="Consumo de energia total" />
        </div>
        <div>
          <AirConditioningConsumption consumption={30} description="Consumo da climatização" />
        </div>

        {/* Second row */}
        <div className="col-span-3">
          <CardTotalRevenue />
        </div>
        <div className="col-span-1">
          <CarbonReduced percent={15} descriptionTop="Você reduziu" descriptionBottom="das emissões de carbono" />
        </div>

        {/* Third row */}
        <div className="col-span-3">
          <PieChart />
        </div>
        <div className="col-span-1">
          <EnergyReduced reduced={62} description="Economizados" />
        </div>
      </div>
    </div>
  );
}

export default App;
