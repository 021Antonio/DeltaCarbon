import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import leafImage from './../assets/leaf1.png'; // Ajuste o caminho da imagem da folha

ChartJS.register(ArcElement, Tooltip, Legend);

interface CarbonReducedProps {
  percent: number;
  descriptionTop: string;
  descriptionBottom: string;
}

const CarbonReduced: React.FC<CarbonReducedProps> = ({ percent, descriptionTop, descriptionBottom }) => {
  const data = {
    datasets: [
      {
        data: [percent, 100 - percent],
        backgroundColor: ['#4CAF50', '#E0E0E0'],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 m-5" style={{ width: '340.47px', height: '335.97px' }}>
      <div className="relative" style={{ width: '150px', height: '150px' }}>
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img src={leafImage} alt="Leaf Icon" className="w-8 h-8 mb-2" />
          <h1 className="text-3xl font-bold text-gray-800">{percent}%</h1>
        </div>
      </div>
      <div className="mt-2 text-center">
        <h4 className="text-lg font-bold text-gray-800">{descriptionTop}</h4>
        <h4 className="text-sm font-medium text-gray-600">{descriptionBottom}</h4>
      </div>
    </div>
  );
};

export default CarbonReduced;
