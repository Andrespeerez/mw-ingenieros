import React from 'react';

export default function VehicleCard({ vehicle, onClick }) {
  return (
    <div className="bg-panel border border-border p-3 cursor-pointer hover:border-green-500 transition-colors" onClick={() => onClick(vehicle)}>
      <img src={vehicle.img} alt={vehicle.nombre} className="w-full h-48 object-contain mb-2 border border-border" />
      <h4 className="text-green-500 font-bold">{vehicle.nombre}</h4>
      <p className="text-xs text-green-700">Rol: {vehicle.tipoRol}</p>
    </div>
  );
}