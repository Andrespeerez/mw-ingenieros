import React, { useState, useEffect, useRef } from 'react';
import TerminalButton from './TerminalButton';
import TerminalTabGroup from './TerminalTabGroup';

export default function DroidModal({ droid, onClose, categoria }) {
  const [activeTab, setActiveTab] = useState('info');
  const modalRef = useRef(null);
  
  const showParts = categoria !== 'robotsSeparatistas';

  const tabs = [
    { id: 'info', label: 'INFO TÉCNICA' },
    ...(showParts ? [{ id: 'piezas', label: 'PIEZAS' }] : [])
  ];

  useEffect(() => {
    setActiveTab('info');
    if (droid) {
      modalRef.current?.focus();
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [droid, onClose]);

  if (!droid) return null;

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
    <div className="text-green-700 text-sm space-y-2 terminal-glow">
      <p><strong>Rol:</strong> {droid.tipoRol}</p>
      <p><strong>Fabricante:</strong> {droid.fabricante}</p>
      <p><strong>Dimensiones:</strong> {droid.dimensiones}</p>
      
      <div className="border-t border-border mt-2 pt-2">
        <h4 className="text-green-500 font-bold terminal-glow">Características</h4>
        {droid.caracteristicas.map((item, index) => (
            <div key={index} className="mt-2">
                <p className="text-green-500 font-semibold">{item.titulo}:</p>
                {renderContent(item.content)}
            </div>
        ))}
      </div>
      
      <p className="mt-2"><strong>Notas:</strong> {droid.notas}</p>
    </div>
  );

  const renderPiezas = () => {
    if (!droid.desguace || !Array.isArray(droid.desguace)) {
      return <p className="text-green-700">Información de piezas no disponible.</p>;
    }
    
    const esenciales = droid.desguace.filter(p => p.tipo === 'esencial');
    const necesarias = droid.desguace.filter(p => p.tipo === 'necesaria');
    const comunes = droid.desguace.filter(p => p.tipo === 'comun');

    return (
      <div className="space-y-4">
        {esenciales.length > 0 && (
          <div>
            <h4 className="text-yellow-500 font-bold text-sm mb-2 terminal-glow-strong">[*] ESENCIALES</h4>
            <div className="space-y-1">
              {esenciales.map((item, index) => (
                <div key={index} className="bg-yellow-900/10 p-2 border border-yellow-600/50 flex justify-between items-center">
                  <span className="text-yellow-500 font-bold">{item.nombre}</span>
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
                <span key={index} className="bg-green-900/5 p-1 border border-green-900/30 text-green-800 text-[10px] uppercase">
                  {item.nombre}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
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
        
        <h2 className="text-green-500 text-xl font-bold mb-4 terminal-glow-strong border-b border-green-900 pb-2">
          {droid.nombre}
        </h2>
        
        <div className="relative group mb-4">
          <img src={droid.img} alt={droid.nombre} className="w-full h-48 object-contain bg-black/40 border border-green-900/50 p-2" />
        </div>
        
        <TerminalTabGroup 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
          className="mb-6 border-b border-green-900 pb-2"
        />

        <div className="min-h-[200px]">
          {activeTab === 'info' && renderInfo()}
          {activeTab === 'piezas' && renderPiezas()}
        </div>
      </div>
    </div>
  );
}
