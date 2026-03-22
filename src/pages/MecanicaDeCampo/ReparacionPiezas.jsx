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
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Procedimiento Estándar de Reparación</h3>
        <div className="bg-terminal-bg/50 p-4 border-l-2 border-green-500">
          <p className="text-green-400 text-sm mb-3">
            El personal técnico seguirá estrictamente este protocolo para asegurar la integridad de los sistemas:
          </p>
          <div className="space-y-3">
            <div className="border border-green-800 p-3 rounded">
              <h4 className="text-green-400 font-bold text-xs mb-1">FASE 1: DIAGNÓSTICO INTEGRAL</h4>
              <p className="text-green-600 text-xs mb-2">Evaluación del estado operativo general del sistema.</p>
              <Tooltip content={
                <div className="space-y-2">
                  <p className="text-yellow-500 font-bold">[OOC: Tirada de Estado]</p>
                  <p className="text-green-400 text-xs">Más alto = mejor estado.</p>
                </div>
              }>
                <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                  Ver especificaciones técnicas
                </span>
              </Tooltip>
            </div>

            <div className="border border-yellow-700 p-3 rounded">
              <h4 className="text-yellow-400 font-bold text-xs mb-1">FASE 2: ANÁLISIS DE FALLAS</h4>
              <p className="text-yellow-600 text-xs mb-2">Identificación de componentes comprometidos o averiados.</p>
              <Tooltip content={
                <div className="space-y-2">
                  <p className="text-yellow-500 font-bold">[OOC: Tiradas de Gravedad/Estado]</p>
                  <p className="text-green-400 text-xs">Gravedad (bajo=bien), Estado (alto=bien).</p>
                </div>
              }>
                <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                  Ver especificaciones técnicas
                </span>
              </Tooltip>
            </div>

            <div className="border border-red-700 p-3 rounded">
              <h4 className="text-red-400 font-bold text-xs mb-1">FASE 3: INTERVENCIÓN Y REPARACIÓN</h4>
              <p className="text-red-600 text-xs mb-2">Ejecución de maniobras correctivas sobre los componentes identificados.</p>
              <Tooltip content={
                <div className="space-y-2">
                  <p className="text-yellow-500 font-bold">[OOC: Tirada de Acción]</p>
                  <p className="text-green-400 text-xs">Dado + Competencia >= Dificultad.</p>
                </div>
              }>
                <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                  Ver especificaciones técnicas
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
          Protocolo para la creación de sistemas complejos o restauración de vehículos desde cero utilizando recambios o componentes recuperados.
        </p>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Gestión de Suministros</h3>
        <p className="text-green-500 text-sm mb-2">
          Los materiales se adquieren mediante adquisición oficial o recuperación de campo:
        </p>
        <ul className="list-none ml-4 space-y-1 text-green-600 text-sm">
          <li>- Adquisición de componentes nuevos en almacenes.</li>
          <li>- Recuperación de componentes de vehículos inutilizados (Chatarreo).</li>
        </ul>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Fase de Recuperación</h3>
        <div className="space-y-3">
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Evaluación de Estructura Principal</h4>
            <p className="text-green-600 text-xs mb-2">
              Verificación de la viabilidad de un chasis base.
            </p>
            <Tooltip content={<p className="text-green-400 text-xs">[OOC: Tirada Estado, Dif 50]</p>}>
              <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">Ver criterios de evaluación</span>
            </Tooltip>
          </div>

          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Inspección de Componentes</h4>
            <p className="text-green-600 text-xs mb-2">
              Validación de funcionamiento de piezas críticas.
            </p>
            <Tooltip content={<p className="text-green-400 text-xs">[OOC: Tirada Estado, Resultado > 50]</p>}>
              <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">Ver criterios de inspección</span>
            </Tooltip>
          </div>

          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Maniobra de Extracción</h4>
            <p className="text-green-600 text-xs mb-2">
              Retirada del componente del vehículo donante.
            </p>
            <Tooltip content={<p className="text-green-400 text-xs">[OOC: Tirada Acción, Dif 50]</p>}>
              <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">Ver parámetros de riesgo</span>
            </Tooltip>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Fase de Ensamblaje</h3>
        <div className="bg-terminal-bg/30 p-3 border border-green-900 mb-3">
          <p className="text-green-600 text-xs mb-2">
            Instalación de componentes certificados.
          </p>
          <Tooltip content={<p className="text-green-400 text-xs">[OOC: Tirada Acción por componente, Dif 50]</p>}>
            <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">Ver protocolos de instalación</span>
          </Tooltip>
        </div>
      </div>
