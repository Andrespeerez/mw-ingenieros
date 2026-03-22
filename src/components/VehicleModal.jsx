import React, { useState, useEffect, useRef } from 'react';
import Accordion from './Accordion';
import TerminalButton from './TerminalButton';
import TerminalTabGroup from './TerminalTabGroup';

export default function VehicleModal({ vehicle, onClose }) {
  const [activeTab, setActiveTab] = useState('info');
  const modalRef = useRef(null);

  const tabs = [
    { id: 'info', label: 'INFO TÉCNICA' },
    ...(vehicle?.tipoRol !== 'Nave Capital de Combate' ? [{ id: 'piezas', label: 'PIEZAS' }] : []),
    ...(vehicle?.reparacion ? [{ id: 'logs', label: 'LOGS REPARACIÓN' }] : [])
  ];

  useEffect(() => {
    setActiveTab('info');
  }, [vehicle]);

  useEffect(() => {
    if (vehicle) {
      // Focus modal when opened
      modalRef.current?.focus();
      
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'Tab') {
          const focusableElements = modalRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (!focusableElements) return;
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [vehicle, onClose]);

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
    <div className="text-green-400 text-sm space-y-2 terminal-glow">
      <p><strong>Rol:</strong> {vehicle.tipoRol}</p>
      <p><strong>Fabricante:</strong> {vehicle.fabricante}</p>
      <p><strong>Dimensiones:</strong> {vehicle.dimensiones}</p>
      
      <div className="border-t border-border mt-2 pt-2">
        <h4 className="text-green-500 font-bold terminal-glow">Características</h4>
        {renderCaracteristicas(vehicle.caracteristicas)}
      </div>
      
      <p className="mt-2"><strong>Tripulación:</strong> {vehicle.tripulacion}</p>
      <p><strong>Notas:</strong> {vehicle.notas}</p>
    </div>
  );

  const renderPiezas = () => {
    if (!vehicle.desguace || !Array.isArray(vehicle.desguace)) {
      return <p className="text-green-700">Información de piezas no disponible.</p>;
    }
    
    const esenciales = vehicle.desguace.filter(p => p.tipo === 'esencial');
    const necesarias = vehicle.desguace.filter(p => p.tipo === 'necesaria');
    const comunes = vehicle.desguace.filter(p => p.tipo === 'comun');

    return (
      <div className="space-y-4">
        <p className="text-green-600 text-xs mb-3 italic">
          {'>>'} Componentes recuperables de este vehículo. Los recambios comunes tienen abundancia en cualquier taller.
        </p>

        {esenciales.length > 0 && (
          <div>
            <h4 className="text-yellow-500 font-bold text-sm mb-2 terminal-glow-strong">[*] ESENCIALES</h4>
            <div className="space-y-1">
              {esenciales.map((item, index) => (
                <div key={index} className="bg-yellow-900/10 p-2 border border-yellow-600/50 flex justify-between items-center">
                  <span className="text-yellow-500 font-bold">{item.nombre}</span>
                  <span className="text-[10px] bg-yellow-600 text-black px-1 font-bold">CRITICO</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {necesarias.length > 0 && (
          <div>
            <h4 className="text-green-500 font-bold text-sm mb-2 terminal-glow">[*] NECESARIAS</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {necesarias.map((item, index) => (
                <div key={index} className="bg-green-900/10 p-2 border border-green-600/30">
                  <span className="text-green-500 font-semibold text-xs tracking-tight">{item.nombre}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {comunes.length > 0 && (
          <div>
            <h4 className="text-green-700 font-bold text-sm mb-2">[*] RECAMBIOS COMUNES</h4>
            <div className="flex flex-wrap gap-1">
              {comunes.map((item, index) => (
                <span key={index} className="bg-green-900/20 p-1 border border-green-700/50 text-green-400 text-[10px] uppercase">
                  {item.nombre}
                </span>
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


  const renderLogs = () => {
    if (!vehicle.reparacion || !Array.isArray(vehicle.reparacion)) return null;

    return (
      <div className="space-y-4">
        {vehicle.reparacion.map((log, index) => (
          <div key={index} className="border border-green-900/50 p-3 bg-green-500/5">
            <h4 className="text-green-500 font-bold text-sm mb-2 uppercase tracking-wide">
              {'>'} {log.titulo}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[10px] mb-2">
              <div className="flex flex-col">
                <span className="text-green-700">DIFICULTAD:</span>
                <span className={log.nivelDificultad === 'Alto' ? 'text-red-500' : log.nivelDificultad === 'Medio' ? 'text-yellow-500' : 'text-green-500'}>
                  {log.nivelDificultad.toUpperCase()}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-green-700">HERRAMIENTAS:</span>
                <span className="text-green-500 italic">{log.herramientas.join(', ')}</span>
              </div>
            </div>
            <div className="text-[11px] space-y-1">
              <p className="text-green-700 italic border-l-2 border-green-900 pl-2">
                {log.notas}
              </p>
              <div className="mt-2">
                <span className="text-green-500 font-bold block mb-1">REQUISITOS:</span>
                <div className="flex flex-wrap gap-1">
                  {log.piezasNecesarias.map((p, i) => (
                    <span key={i} className="bg-green-500/10 border border-green-500/30 px-1 text-[9px] text-green-500">
                      {p.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        tabIndex="-1"
        className="bg-panel border-2 border-green-500 p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto relative outline-none shadow-[0_0_30px_rgba(0,255,0,0.2)]" 
        onClick={e => e.stopPropagation()}
      >
        <TerminalButton 
          variant="ghost" 
          onClick={onClose} 
          className="absolute top-4 right-4"
          ariaLabel="Cerrar modal"
        >
          X
        </TerminalButton>
        
        <h2 id="modal-title" className="text-green-500 text-xl font-bold mb-4 terminal-glow-strong border-b border-green-900 pb-2">
          {vehicle.nombre}
        </h2>
        
        <div className="relative group mb-4">
          <img src={vehicle.img} alt={vehicle.nombre} className="w-full h-48 object-contain bg-black/40 border border-green-900/50 p-2" />
          <div className="absolute inset-0 bg-green-500/5 pointer-events-none" />
        </div>
        
        <TerminalTabGroup 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          className="mb-6 border-b border-green-900 pb-2"
        />

        <div className="min-h-[200px]">
          {activeTab === 'info' && renderInfo()}
          {(activeTab === 'piezas' && vehicle?.tipoRol !== 'Nave Capital de Combate') && renderPiezas()}
          {activeTab === 'logs' && renderLogs()}
        </div>
      </div>
    </div>
  );
}
