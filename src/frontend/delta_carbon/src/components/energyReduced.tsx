import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface EnergyReducedProps {
  reduced: number;
  description: string;
}

const EnergyReduced: React.FC<EnergyReducedProps> = ({ reduced, description }) => {
  const data = {
    datasets: [
      {
        data: [reduced, 100 - reduced],
        backgroundColor: ['#1E88E5', '#BBDEFB'], // Azul escuro e azul claro
        borderWidth: 0,
        cutout: '70%', // Tamanho do buraco no centro
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
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4" style={{ width: '339px', height: '255px' }}>
      <div className="relative" style={{ width: '150px', height: '150px' }}>
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800">{reduced}</h1>
          <h3 className="text-lg font-bold text-gray-800">KWh</h3>
        </div>
      </div>
      <div className="mt-2 text-center">
        <h4 className="text-lg font-medium text-gray-600">{description}</h4>
      </div>
    </div>
  );
};

export default EnergyReduced;
