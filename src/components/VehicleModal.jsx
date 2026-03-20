import React from 'react';

export default function VehicleModal({ vehicle, onClose }) {
  if (!vehicle) return null;

  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return (
        <ul className="list-disc pl-5">
          {content.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      );
    }
    return <p>{content}</p>;
  };

  const renderCaracteristicas = (caracteristicas) => {
    // New structure
    if (caracteristicas.velocidad || caracteristicas.sistemasPropulsion || caracteristicas.armamento || caracteristicas.sistemas) {
      return (
        <>
          {caracteristicas.velocidad && (
            <>
              <p className="text-green-500 font-semibold mt-2">Velocidad:</p>
              {renderContent(caracteristicas.velocidad)}
            </>
          )}
          {caracteristicas.sistemasPropulsion && (
            <>
              <p className="text-green-500 font-semibold mt-2">Sistemas de Propulsión:</p>
              {renderContent(caracteristicas.sistemasPropulsion)}
            </>
          )}
          {caracteristicas.armamento && (
            <>
              <p className="text-green-500 font-semibold mt-2">Armamento:</p>
              {renderContent(caracteristicas.armamento)}
            </>
          )}
          {caracteristicas.sistemas && (
            <>
              <p className="text-green-500 font-semibold mt-2">Sistemas:</p>
              {renderContent(caracteristicas.sistemas)}
            </>
          )}
        </>
      );
    }

    // Old structure
    return (
      <>
        {caracteristicas.motores && <p className="mt-2"><strong>Motores:</strong> {caracteristicas.motores}</p>}
        {caracteristicas.armamento && <p><strong>Armamento:</strong> {caracteristicas.armamento}</p>}
        {caracteristicas.sistemas && <p><strong>Sistemas:</strong> {caracteristicas.sistemas}</p>}
      </>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-panel border border-border p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <button className="text-green-500 float-right" onClick={onClose}>[X]</button>
        <h2 className="text-green-500 text-xl font-bold mb-4">{vehicle.nombre}</h2>
        <img src={vehicle.img} alt={vehicle.nombre} className="w-full h-48 object-contain mb-4 border border-border" />
        
        <div className="text-green-700 text-sm space-y-2">
          <p><strong>Rol:</strong> {vehicle.tipoRol}</p>
          <p><strong>Fabricante:</strong> {vehicle.fabricante}</p>
          <p><strong>Dimensiones:</strong> {vehicle.dimensiones}</p>
          
          <div className="border-t border-border mt-2 pt-2">
            <h4 className="text-green-500 font-bold">Características</h4>
            {renderCaracteristicas(vehicle.caracteristicas)}
          </div>
          
          <p className="mt-2"><strong>Tripulación:</strong> {vehicle.tripulacion}</p>
          <p><strong>Notas:</strong> {vehicle.notas}</p>
        </div>
      </div>
    </div>
  );
}