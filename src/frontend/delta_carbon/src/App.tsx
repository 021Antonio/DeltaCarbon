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
    <div className="bg-gray-100 p-5 h-screen">
      {/* Dashboard Header */}
      <div className="text-left">
        <h1 className="text-4xl font-bold mb-5">Dashboard</h1>
      </div>

{/* First Row - 4 Columns */}
<div className="grid grid-cols-4 mb-5 gap-0">
  <div className="p-0 m-0">
    <ActiveDevices icon={iconImage} number={13} description="Dispositivos ativos" />
  </div>
  <div className="p-0 m-0">
    <Temperature icon={thermometerIcon} temperature={21} description="Temperatura" />
  </div>
  <div className="p-0 m-0">
    <EnergyConsumption consumption={70} description="Consumo de energia total" />
  </div>
  <div className="p-0 m-0">
    <AirConditioningConsumption consumption={30} description="Consumo da climatização" />
  </div>
</div>

{/* Second Row - 2 Columns */}
<div className="grid grid-cols-4 gap-0 mb-5">
  <div className="col-span-3 p-0 m-0">
    <CardTotalRevenue />
  </div>
  <div className="p-0 m-0">
    <CarbonReduced percent={15} descriptionTop="Você reduziu" descriptionBottom="das emissões de carbono" />
  </div>
</div>

{/* Third Row - 2 Columns */}
<div className="grid grid-cols-4 gap-0">
  <div className="col-span-3 p-0 m-0">
    <PieChart />
  </div>
  <div className="p-0 m-0">
    <EnergyReduced reduced={62} description="Economizados" />
  </div>
</div>

    </div>
  );
}

export default App;
