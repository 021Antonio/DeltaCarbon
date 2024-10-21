import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import 'tailwindcss/tailwind.css';

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

const PieChart: React.FC = () => {
  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago'];

  const data = {
    labels,
    datasets: [
      {
        label: 'sem gás',
        data: [99, 95, 90, 93, 95, 98, 94, 99],
        borderColor: 'red',
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 180); 
          gradient.addColorStop(0, 'rgba(255, 99, 132, 0.3)'); 
          gradient.addColorStop(1, 'rgba(255, 99, 132, 0)'); 
          return gradient;
        },
        fill: true,
        tension: 0.4, 
        pointBorderColor: 'red',
        pointBackgroundColor: 'white',
        pointBorderWidth: 2,
        pointRadius: 4,
      },
      {
        label: 'com gás',
        data: [81, 79, 75, 77, 78, 80, 82, 81],
        borderColor: 'green',
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 180); 
          gradient.addColorStop(0, 'rgba(75, 192, 192, 0.3)'); 
          gradient.addColorStop(1, 'rgba(75, 192, 192, 0)'); 
          return gradient;
        },
        fill: true,
        tension: 0.4, 
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
          color: '#fff', 
        },
      },
      title: {
        display: true,
        text: 'Valor financeiro gasto $',
        font: {
          size: 18,
        },
        color: '#fff', 
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
          color: '#fff', 
        },
        grid: {
          color: 'rgba(255,255,255,0.1)', 
        },
      },
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          color: '#fff', 
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-teal-700 to-teal-900 p-5 rounded-xl shadow-lg w-[734px] h-[255.49px] m-5">
      <Line data={data} options={options} />
    </div>
  );
};

export default PieChart;
