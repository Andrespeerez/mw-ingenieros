import React, { useState } from 'react';
import Page from '../../components/Page';
import VehicleCard from '../../components/VehicleCard';
import VehicleModal from '../../components/VehicleModal';
import { droids } from '../../data/droids';

export default function Unidades() {
  const [activeTab, setActiveTab] = useState('robotsCiviles');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const tabs = [
    { id: 'robotsCiviles', label: 'Robots Civiles' },
    { id: 'robotsSeparatistas', label: 'Robots Separatistas' }
  ];

  return (
    <Page title="UNIDADES ROBOTICAS">
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
          {(droids[activeTab] || []).map(vehicle => (
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
