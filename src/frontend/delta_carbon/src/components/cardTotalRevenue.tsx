import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, ScriptableContext } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const CardTotalRevenue: React.FC = () => {
  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'];

  const data = {
    labels,
    datasets: [
      {
        label: 'sem gás',
        data: [785, 765, 775, 770, 780, 790, 785, 785],
        borderColor: 'red',
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 100);
          gradient.addColorStop(0, 'rgba(255, 99, 132, 0.2)');
          gradient.addColorStop(1, 'rgba(255, 99, 132, 0)');
          return gradient;
        },
        fill: true,
        tension: 0.45,
        pointBorderColor: 'red',
        pointBackgroundColor: 'white',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: 'com gás',
        data: [337, 335, 340, 342, 340, 335, 338, 337],
        borderColor: 'green',
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 100);
          gradient.addColorStop(0, 'rgba(75, 192, 192, 0.2)');
          gradient.addColorStop(1, 'rgba(75, 192, 192, 0)');
          return gradient;
        },
        fill: true,
        tension: 0.45,
        pointBorderColor: 'green',
        pointBackgroundColor: 'white',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: ['Previsão de emissão de carbono', 'Kg de CO2 por KWh'],
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (tickValue: string | number) {
            if (typeof tickValue === 'number') {
              return tickValue;
            }
            return tickValue;
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-4 m-5" style={{ width: '733.92px', height: '335.97px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default CardTotalRevenue;
