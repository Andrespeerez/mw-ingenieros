import React, { useState } from 'react';
import Accordion from './Accordion';

export default function VehicleModal({ vehicle, onClose }) {
  const [activeTab, setActiveTab] = useState('info');

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

  const renderInfo = () => (
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
  );

  const renderReparacion = () => {
    if (!vehicle.reparacion || !Array.isArray(vehicle.reparacion)) return <p className="text-green-700">Información técnica no disponible.</p>;
    return (
      <div className="space-y-1">
        {vehicle.reparacion.map((item, index) => (
          <Accordion key={index} title={item.titulo}>
            <div className="text-green-700 text-sm space-y-1">
              <p><strong>Piezas:</strong> {renderContent(item.piezasNecesarias)}</p>
              <p><strong>Dificultad:</strong> {item.nivelDificultad}</p>
              <p><strong>Herramientas:</strong> {renderContent(item.herramientas)}</p>
              <p><strong>Notas:</strong> {item.notas}</p>
            </div>
          </Accordion>
        ))}
      </div>
    );
  };

  const renderPiezas = () => {
    if (!vehicle.desguace || !Array.isArray(vehicle.desguace)) {
      return <p className="text-green-700">Información de piezas no disponible.</p>;
    }
    
    const esenciales = vehicle.desguace.filter(p => p.tipo === 'esencial');
    const necesarias = vehicle.desguace.filter(p => p.tipo === 'necesaria');
    const comunes = vehicle.desguace.filter(p => p.tipo === 'comun');

    return (
      <div className="space-y-4">
        <p className="text-green-600 text-xs mb-3">
          {'>>'} Componentes recuperables de este vehículo. Los recambios comunes tienen abundancia en cualquier taller.
        </p>

        {esenciales.length > 0 && (
          <div>
            <h4 className="text-yellow-500 font-bold text-sm mb-2">[*] Esenciales</h4>
            <div className="space-y-1">
              {esenciales.map((item, index) => (
                <div key={index} className="bg-terminal-bg/50 p-2 border border-yellow-600/50">
                  <span className="text-yellow-500 font-bold">{item.nombre}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {necesarias.length > 0 && (
          <div>
            <h4 className="text-green-500 font-bold text-sm mb-2">[*] Necesarias</h4>
            <div className="space-y-1">
              {necesarias.map((item, index) => (
                <div key={index} className="bg-terminal-bg/50 p-2 border border-green-600/50">
                  <span className="text-green-500 font-semibold">{item.nombre}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {comunes.length > 0 && (
          <div>
            <h4 className="text-mint-500 font-bold text-sm mb-2">[*] Recambios Comunes</h4>
            <div className="space-y-1">
              {comunes.map((item, index) => (
                <div key={index} className="bg-terminal-bg/20 p-2 border border-mint-600/50">
                  <span className="text-mint-400">{item.nombre}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderCaracteristicas = (caracteristicas) => {
    if (!Array.isArray(caracteristicas)) return null;
    return caracteristicas.map((item, index) => (
      <div key={index} className="mt-2">
        <p className="text-green-500 font-semibold">{item.titulo}:</p>
        {renderContent(item.content)}
      </div>
    ));
  };


  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-panel border border-border p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <button className="text-green-500 float-right" onClick={onClose}>[X]</button>
        <h2 className="text-green-500 text-xl font-bold mb-4">{vehicle.nombre}</h2>
        <img src={vehicle.img} alt={vehicle.nombre} className="w-full h-48 object-contain mb-4 border border-border" />
        
        <div className="flex space-x-4 mb-4 border-b border-border pb-2">
          <button 
            className={`text-sm ${activeTab === 'info' ? 'text-green-500 font-bold border-b border-green-500' : 'text-green-700'}`} 
            onClick={() => setActiveTab('info')}
          >
            [INFO TÉCNICA]
          </button>
          <button 
            className={`text-sm ${activeTab === 'repair' ? 'text-green-500 font-bold border-b border-green-500' : 'text-green-700'}`} 
            onClick={() => setActiveTab('repair')}
          >
            [REPARACIÓN]
          </button>
          <button 
            className={`text-sm ${activeTab === 'piezas' ? 'text-green-500 font-bold border-b border-green-500' : 'text-green-700'}`} 
            onClick={() => setActiveTab('piezas')}
          >
            [PIEZAS]
          </button>
        </div>

        {activeTab === 'info' && renderInfo()}
        {activeTab === 'repair' && renderReparacion()}
        {activeTab === 'piezas' && renderPiezas()}
      </div>
    </div>
  );
}
