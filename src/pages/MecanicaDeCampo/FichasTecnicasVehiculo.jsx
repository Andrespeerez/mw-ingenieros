import React, { useState } from 'react';
import Page from '../../components/Page';
import VehicleCard from '../../components/VehicleCard';
import VehicleModal from '../../components/VehicleModal';
import { vehicles } from '../../data/vehicles';

export default function FichasTecnicasVehiculo() {
  const [activeTab, setActiveTab] = useState('terrestres');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const tabs = [
    { id: 'terrestres', label: 'Terrestres' },
    { id: 'naves', label: 'Naves' }
  ];

  return (
    <Page title="FICHAS TECNICAS VEHICULO">
      <div className="p-5 bg-panel border border-border mb-6">
        <div className="flex gap-2 mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-4 py-2 border ${
                activeTab === tab.id
                  ? 'bg-green-500 text-black'
                  : 'bg-panel text-green-500 border-border hover:border-green-500'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles[activeTab].map(vehicle => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onClick={setSelectedVehicle}
            />
          ))}
        </div>
      </div>

      <VehicleModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
      />
    </Page>
  );
}
