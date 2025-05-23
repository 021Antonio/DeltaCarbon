import React from 'react';

interface ActiveDevicesProps {
  icon: string;
  number: number;
  description: string;
}

const ActiveDevices: React.FC<ActiveDevicesProps> = ({ icon, number, description }) => {
  return (
    <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-2 w-full h-full m-2">
      <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
        <img src={icon} alt="icon" className="w-8 h-8" />
      </div>
      <div className="ml-2 text-center">
        <h1 className="text-3xl font-bold text-gray-800">{number}</h1>
        <h4 className="text-sm font-medium text-gray-600">{description}</h4>
      </div>
    </div>
  );
};

export default ActiveDevices;
