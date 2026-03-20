import React, { useState } from 'react';
import Page from '../../components/Page';
import VehicleCard from '../../components/VehicleCard';
import VehicleModal from '../../components/VehicleModal';
import { vehicles } from '../../data/vehicles';

export default function Vehiculos() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <Page title="FICHA TÉCNICA VEHÍCULOS">
      {Object.entries(vehicles).map(([categoria, lista]) => (
        <section key={categoria} className="mb-8">
          <h3 className="text-green-500 mb-4 capitalize">[{categoria}]</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {lista.map(v => (
              <VehicleCard key={v.id} vehicle={v} onClick={setSelectedVehicle} />
            ))}
          </div>
        </section>
      ))}

      {selectedVehicle && (
        <VehicleModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />
      )}
    </Page>
  );
}