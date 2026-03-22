import React from 'react';

export default function DroidCard({ droid, onClick }) {
  return (
    <div className="bg-panel border border-border p-3 cursor-pointer hover:border-green-500 transition-colors" onClick={() => onClick(droid)}>
      <img src={droid.img} alt={droid.nombre} className="w-full h-48 object-contain mb-2 border border-border" />
      <h4 className="text-green-500 font-bold">{droid.nombre}</h4>
      <p className="text-xs text-green-700">Rol: {droid.tipoRol}</p>
    </div>
  );
}
