import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  consumption: number;
  description: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ consumption, description }) => {
  const data = {
    datasets: [
      {
        data: [consumption, 100 - consumption],
        backgroundColor: ['#FF5B5B', '#E0E0E0'],
        borderWidth: 0,
        cutout: '70%', // Tamanho do buraco no meio da rosca
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false }, // Desativa tooltip
      legend: { display: false },  // Remove a legenda
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-2 w-full h-full m-2">
      <div className="relative" style={{ width: '80px', height: '80px' }}>
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-lg font-bold text-gray-800">{consumption}%</h1>
        </div>
      </div>
      <div className="mt-1 text-center">
        <h4 className="text-xs font-medium text-gray-600">{description}</h4>
      </div>
    </div>
  );
};

export default DoughnutChart;
