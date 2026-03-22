import React, { useState } from 'react';
import Page from '../../components/Page';
import Tooltip from '../../components/Tooltip';

export default function ReparacionPiezas() {
  const [activeTab, setActiveTab] = useState('guia');

  const tabs = [
    { id: 'guia', label: 'Guia del Mecanico' },
    { id: 'conceptos', label: 'Conceptos de Sistemas' },
    { id: 'tareas', label: 'Tareas de Mecanica' },
    { id: 'construccion', label: 'Construccion' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'guia':
        return <GuiaMecanico />;
      case 'conceptos':
        return <ConceptosSistemas />;
      case 'tareas':
        return <TareasMecanica />;
      case 'construccion':
        return <Construccion />;
      default:
        return null;
    }
  };

  return (
    <Page title="REPARACION Y PIEZAS">
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

        {renderContent()}
      </div>
    </Page>
  );
}

function GuiaMecanico() {
  return (
    <div className="space-y-6">
      <div className="bg-terminal-bg/50 p-4 border-l-2 border-green-500">
        <p className="text-green-400 text-sm">
          Tu specialization te confiere la responsabilidad de operar como tecnico en mantenimiento 
          y reparacion en entornos criticos: hangares, talleres, naves capitals y bases.
        </p>
        <p className="text-green-400 text-sm mt-3">
          En el campo de batalla, aportaras soluciones a problemas tecnicos inesperados.
        </p>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Tu Funcion</h3>
        <p className="text-green-500 text-sm">
          Asegurar que todo el equipo, desde cazas hasta infraestructura, permanezca en 
          condiciones adecuadas de funcionamiento.
        </p>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Entornos de Operacion</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Hangares</h4>
            <p className="text-green-600 text-xs">Mantenimiento rutinario, diagnostico y reparaciones de naves y vehiculos.</p>
          </div>
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Naves Capitales</h4>
            <p className="text-green-600 text-xs">Encargado de todos los sistemas que requieran mantenimiento.</p>
          </div>
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Bases e Instalaciones</h4>
            <p className="text-green-600 text-xs">Generadores de energia, sistemas de defensa, infraestructura.</p>
          </div>
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Campo de Batalla</h4>
            <p className="text-green-600 text-xs">Reparaciones de emergencia e improvisacion en combate.</p>
          </div>
          <div className="bg-terminal-bg/30 p-3 border border-green-900 md:col-span-2">
            <h4 className="text-green-400 font-bold text-sm mb-1">Robotica</h4>
            <p className="text-green-600 text-xs">Mantenimiento, programacion y reparacion de droides de la base.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Especializaciones</h3>
        <p className="text-green-500 text-sm mb-2">
          La mecanica abarca vehiculos aereos, terrestres y espaciales, armamento pesado, 
          sistemas de soporte vital, generadores de energia, integridad estructural y componentes 
          electronicos.
        </p>
        <div className="bg-terminal-bg/30 p-3 border border-green-900/50">
          <p className="text-green-600 text-xs">
            {'>>>'} Documentos relacionados: <span className="text-mint-400">Manual: Robotica</span>,{' '}
            <span className="text-mint-400">Manual: Sistemas de una Nave</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function ConceptosSistemas() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Fuerza y Movimiento</h3>
        <div className="space-y-2">
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm">Actuadores</h4>
            <p className="text-green-600 text-xs">Convierten energia en movimiento lineal o rotatorio. Puertas automaticas, tren de aterrizaje, torretas, ascensores.</p>
          </div>
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm">Servomotores</h4>
            <p className="text-green-600 text-xs">Version de mayor precision. Empleados en droides, brazos prosteticos.</p>
          </div>
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm">Engranajes, Palancas y Sistemas Hidraulicos</h4>
            <p className="text-green-600 text-xs">Transferir movimiento o transformar movimiento lineal/circular.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Circuitera y Conduccion de Energia</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm">Conductos de Energia</h4>
            <p className="text-green-600 text-xs">Transportan potencia del reactor a los componentes.</p>
          </div>
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm">Capacitores y Condensadores</h4>
            <p className="text-green-600 text-xs">Almacenan energia temporalmente para descargas rapidas.</p>
          </div>
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm">Reguladores</h4>
            <p className="text-green-600 text-xs">Controlan voltaje o amperaje.</p>
          </div>
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm">Interruptores y Reles</h4>
            <p className="text-green-600 text-xs">Controlan el flujo de energia.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Estructura y Resistencia</h3>
        <div className="bg-terminal-bg/30 p-3 border border-green-900">
          <p className="text-green-600 text-xs">
            Mantienen la estructura unida y resisten fuerzas externas: impactos, presion, tension, compresion.
            Compuesto por vigas, mamparas, placas de casco y blindaje.
            Son el esqueleto y piel protectora de vehiculos.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Temperatura y Refrigeracion</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm">Sistemas de Enfriamiento</h4>
            <p className="text-green-600 text-xs">Circulan fluidos para absorber y disipar calor. Radiadores en atmosfera. En espacio: particulas calientes y radiadores infrarrojos.</p>
          </div>
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm">Disipadores de Calor</h4>
            <p className="text-green-600 text-xs">Componentes disenados para absorber y dispersar calor.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Sistemas de Fluidos</h3>
        <p className="text-green-600 text-xs mb-2">
          Liquidos y gases: bombas (mueven fluidos), valvulas (controlan direccion/caudal), 
          tuberias (transportan), tanques (almacenan), filtros y procesadores (limpian/procesan).
        </p>
      </div>
    </div>
  );
}

function TareasMecanica() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Proceso de Reparacion</h3>
        <div className="bg-terminal-bg/50 p-4 border-l-2 border-green-500">
          <p className="text-green-400 text-sm mb-3">
            El proceso de reparacion sigue estos pasos:
          </p>
          <div className="space-y-3">
            <div className="border border-green-800 p-3 rounded">
              <h4 className="text-green-400 font-bold text-xs mb-1">PASO 1: ESTADO [COMPROBACION]</h4>
              <p className="text-green-600 text-xs mb-2">Evaluar el estado general del sistema.</p>
              <Tooltip content={
                <div className="space-y-2">
                  <p className="text-yellow-500 font-bold">[OOC]</p>
                  <p className="text-green-400 text-xs">Tirada de Estado: solo el dado.</p>
                  <p className="text-green-400 text-xs mt-1">Mas alto = mejor estado.</p>
                  <p className="text-green-400 text-xs mt-1">{'/me'} revisa el estado de la nave</p>
                  <p className="text-green-400 text-xs">{'/dados'} {'->'} [valor]</p>
                  <p className="text-green-400 text-xs">{'/do'} [resultado]</p>
                </div>
              }>
                <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                  Ver mecanismo
                </span>
              </Tooltip>
            </div>

            <div className="border border-yellow-700 p-3 rounded">
              <h4 className="text-yellow-400 font-bold text-xs mb-1">PASO 2: COMPROBACIONES [COMPROBACION]</h4>
              <p className="text-yellow-600 text-xs mb-2">Diagnosticar problemas especificos. Tantas como necesites.</p>
              <Tooltip content={
                <div className="space-y-2">
                  <p className="text-yellow-500 font-bold">[OOC]</p>
                  <p className="text-green-400 text-xs">Usa Gravedad para evaluar dano: bajo = poco dano.</p>
                  <p className="text-green-400 text-xs mt-1">Usa Estado para evaluar componentes: alto = bueno.</p>
                  <p className="text-green-400 text-xs mt-1">{'/me'} intenta arrancar el motor</p>
                  <p className="text-green-400 text-xs">{'/dados'} {'->'} [valor]</p>
                  <p className="text-green-400 text-xs">{'/do'} [diagnostico]</p>
                </div>
              }>
                <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                  Ver mecanismo
                </span>
              </Tooltip>
            </div>

            <div className="border border-red-700 p-3 rounded">
              <h4 className="text-red-400 font-bold text-xs mb-1">PASO 3: REPARACION [ACCION]</h4>
              <p className="text-red-600 text-xs mb-2">Reparar el problema encontrado.</p>
              <Tooltip content={
                <div className="space-y-2">
                  <p className="text-yellow-500 font-bold">[OOC]</p>
                  <p className="text-green-400 text-xs">Tirada de Accion: Dado + Competencia.</p>
                  <p className="text-green-400 text-xs mt-1">Superar la dificultad del sistema.</p>
                  <p className="text-green-400 text-xs mt-1">{'/me'} limpia los conductos (+0) [ACCION]</p>
                  <p className="text-green-400 text-xs">{'/dados'} {'->'} [valor] + [competencia]</p>
                  <p className="text-green-400 text-xs">{'/do'} [resultado]</p>
                </div>
              }>
                <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                  Ver mecanismo
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Tipos de Tiradas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-green-900/30 p-3 border border-green-700 rounded">
            <h4 className="text-green-400 font-bold text-xs mb-1">ESTADO</h4>
            <p className="text-green-500 text-xs">Mas alto = mejor</p>
            <p className="text-green-600 text-xs mt-1">Evaluar si algo funciona</p>
          </div>
          <div className="bg-red-900/30 p-3 border border-red-700 rounded">
            <h4 className="text-red-400 font-bold text-xs mb-1">GRAVEDAD</h4>
            <p className="text-red-500 text-xs">Mas bajo = mejor</p>
            <p className="text-red-600 text-xs mt-1">Evaluar dano</p>
          </div>
          <div className="bg-yellow-900/30 p-3 border border-yellow-700 rounded">
            <h4 className="text-yellow-400 font-bold text-xs mb-1">MEDICION</h4>
            <p className="text-yellow-500 text-xs">Cerca de 50 = mejor</p>
            <p className="text-yellow-600 text-xs mt-1">Calibrar sistemas</p>
          </div>
        </div>
      </div>

      <div className="bg-terminal-bg/30 p-4 border border-green-900/50">
        <h3 className="text-green-400 font-bold mb-2">{'>>>'} Recordatorio</h3>
        <p className="text-green-500 text-xs">
          Las <span className="text-green-400">COMPROBACIONES</span> usan solo el dado.
          Las <span className="text-red-400">ACCIONES</span> usan Dado + Competencia.
        </p>
      </div>
    </div>
  );
}

function Construccion() {
  return (
    <div className="space-y-6">
      <div className="bg-terminal-bg/50 p-4 border-l-2 border-green-500">
        <p className="text-green-400 text-sm">
          Funcion avanzada de la mecanica: construir sistemas y vehiculos desde cero 
          utilizando piezas nuevas o recuperadas (chatarra).
        </p>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Mecanica de Resolucion</h3>
        <p className="text-green-500 text-sm mb-2">
          Los componentes se obtienen de dos fuentes:
        </p>
        <ul className="list-none ml-4 space-y-1">
          <li className="text-green-600 text-sm">-&gt; Comprando recambios nuevos o de segunda mano</li>
          <li className="text-green-600 text-sm">-&gt; Recuperando componentes de vehiculos inutilizados (chatarreo)</li>
        </ul>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Chatarreo: Recuperacion de Componentes</h3>
        <div className="space-y-3">
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">1. Evaluar el Chasis</h4>
            <p className="text-green-600 text-xs mb-2">
              Determina si el chasis es recuperable.
            </p>
            <Tooltip content={
              <div>
                <p className="text-yellow-500 font-bold mb-2">[OOC]</p>
                <p>Tirada de Estado, dificultad 50.</p>
                <p className="mt-2">Si se supera, el chasis entero se puede recuperar y servir de base.</p>
              </div>
            }>
              <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                Ver tirada
              </span>
            </Tooltip>
          </div>

          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">2. Evaluar las Partes</h4>
            <p className="text-green-600 text-xs mb-2">
              Para cada componente principal deseado (excepto chasis).
            </p>
            <Tooltip content={
              <div>
                <p className="text-yellow-500 font-bold mb-2">[OOC]</p>
                <p>Tirada de Estado por cada componente.</p>
                <p className="mt-2">El resultado debe ser superior a 50.</p>
              </div>
            }>
              <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                Ver tirada
              </span>
            </Tooltip>
          </div>

          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">3. Desmontar</h4>
            <p className="text-green-600 text-xs mb-2">
              Extraer la pieza del vehiculo donante.
            </p>
            <Tooltip content={
              <div>
                <p className="text-yellow-500 font-bold mb-2">[OOC]</p>
                <p>Tirada de Accion vs. Dificultad 50.</p>
                <p className="mt-2">Si fallas varias veces, la pieza se rompera al extraerla.</p>
              </div>
            }>
              <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                Ver tirada
              </span>
            </Tooltip>
          </div>

          <div className="bg-terminal-bg/30 p-3 border border-yellow-600/50">
            <p className="text-yellow-400 text-xs">
              {'>>>'} Documenta las piezas que recuperes
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Ensamblaje</h3>
        <p className="text-green-500 text-sm mb-2">
          Una vez tengas los componentes principales y un chasis adecuado.
        </p>
        <div className="bg-terminal-bg/30 p-3 border border-green-900 mb-3">
          <p className="text-green-600 text-xs mb-2">
            Los componentes deben ser del mismo tipo de vehiculo que estas construyendo.
          </p>
          <Tooltip content={
            <div>
              <p className="text-yellow-500 font-bold mb-2">[OOC]</p>
              <p>Por cada componente principal instalado:</p>
              <p className="mt-2">Tirada de Accion vs. Dificultad 50.</p>
            </div>
          }>
            <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
              Ver tiradas de instalacion
            </span>
          </Tooltip>
        </div>

        <div className="bg-terminal-bg/30 p-3 border border-red-900/50">
          <p className="text-red-400 text-xs">
            {'>>>'} Si fallas continuamente la Tirada de Accion, puedes romper la pieza.
            Deberas obtener otra pieza similar para intentarlo de nuevo.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Componentes Principales</h3>
        <p className="text-green-600 text-xs mb-3">
          Para construir un vehiculo o sistema complejo a partir de chatarra. 
          Las Piezas Comunes tienen abundancia y no hay que preocuparse por su disponibilidad.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <div className="bg-terminal-bg/50 p-2 border border-green-700 text-center">
            <h4 className="text-green-400 font-bold text-sm">Chasis</h4>
            <p className="text-yellow-500 text-xs">[Esencial]</p>
          </div>
          <div className="bg-terminal-bg/30 p-2 border border-green-900 text-center">
            <h4 className="text-green-500 text-sm">Circuitera</h4>
            <p className="text-green-600 text-xs">[Recambios Comunes]</p>
          </div>
          <div className="bg-terminal-bg/30 p-2 border border-green-900 text-center">
            <h4 className="text-green-500 text-sm">Sistema de Propulsion</h4>
          </div>
          <div className="bg-terminal-bg/30 p-2 border border-green-900 text-center">
            <h4 className="text-green-500 text-sm">Sistema de Armamento</h4>
          </div>
          <div className="bg-terminal-bg/30 p-2 border border-green-900 text-center">
            <h4 className="text-green-500 text-sm">Sistema de Navegacion</h4>
          </div>
          <div className="bg-terminal-bg/30 p-2 border border-green-900 text-center">
            <h4 className="text-green-500 text-sm">Sistema de Soporte Vital</h4>
          </div>
        </div>
      </div>

      <div className="bg-terminal-bg/30 p-4 border border-green-900/50">
        <p className="text-green-500 text-sm">
          {'>>>'} Un vehiculo que no funcione pero con chasis intacto, o uno destruido con 
          chasis en buenas condiciones, puede ser remolcado hasta taller para su reconstruccion.
        </p>
      </div>
    </div>
  );
}
