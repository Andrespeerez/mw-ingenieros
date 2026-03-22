import React, { useState } from 'react';
import Page from '../../components/Page';
import VehicleCard from '../../components/VehicleCard';
import VehicleModal from '../../components/VehicleModal';
import TerminalTabGroup from '../../components/TerminalTabGroup';
import { vehicles } from '../../data/vehicles';

export default function FichasTecnicasVehiculo() {
  const [activeTab, setActiveTab] = useState('terrestres');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const tabs = [
    { id: 'terrestres', label: 'TERRESTRES' },
    { id: 'naves', label: 'NAVES' },
    { id: 'navesCapitales', label: 'NAVES CAPITALES' }
  ];

  return (
    <Page title="FICHAS TECNICAS VEHICULO">
      <div className="p-5 bg-panel border border-border mb-6">
        <TerminalTabGroup 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          className="mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vehicles[activeTab] && vehicles[activeTab].length > 0 ? (
            vehicles[activeTab].map(vehicle => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onClick={setSelectedVehicle}
              />
            ))
          ) : (
            <div className="col-span-full py-20 border border-dashed border-green-900 flex flex-col items-center justify-center opacity-50">
              <span className="text-green-500 text-lg mb-2">[!] SIN REGISTROS</span>
              <span className="text-green-700 text-xs tracking-tighter uppercase italic">La base de datos no contiene información sobre esta categoría</span>
            </div>
          )}
        </div>
      </div>

      <VehicleModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
      />
    </Page>
  );
}
