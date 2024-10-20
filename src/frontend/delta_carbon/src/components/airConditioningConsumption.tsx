import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface AirConditioningConsumptionProps {
  consumption: number;
  description: string;
}

const AirConditioningConsumption: React.FC<AirConditioningConsumptionProps> = ({ consumption, description }) => {
  const data = {
    datasets: [
      {
        data: [consumption, 100 - consumption],
        backgroundColor: ['#4CAF50', '#E0E0E0'], // Verde e Cinza claro
        borderWidth: 0,
        cutout: '70%', // Tamanho do "buraco" no centro
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false }, // Desativa tooltip
      legend: { display: false },  // Remove legenda
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 w-64 h-32">
      <div className="relative" style={{ width: '120px', height: '90px' }}>
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold text-gray-800">{consumption}%</h1>
        </div>
      </div>
      <div className="mt-2 text-center">
        <h4 className="text-sm font-medium text-gray-600">{description}</h4>
      </div>
    </div>
  );
};

export default AirConditioningConsumption;
