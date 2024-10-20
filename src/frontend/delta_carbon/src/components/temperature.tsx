import React from 'react';

interface TemperatureProps {
  icon: string;
  temperature: number;
  description: string;
}

const Temperature: React.FC<TemperatureProps> = ({ icon, temperature, description }) => {
  return (
    <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-4 w-64 h-32">
      <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full">
        <img src={icon} alt="icon" className="w-10 h-10" />
      </div>
      <div className="ml-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800">{temperature}°C</h1>
        <h4 className="text-md font-medium text-gray-600">{description}</h4>
      </div>
    </div>
  );
};

export default Temperature;
