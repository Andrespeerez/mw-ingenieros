import React from 'react'
import Page from '../../components/Page'
import Tooltip from '../../components/Tooltip'

export default function GestionTecnicaDroide() {
  return (
    <Page title="GESTION_TECNICA_DROIDE">
      <div className="p-5 bg-panel border border-border mb-6 space-y-6">
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-green-500">{'>>'}</span>
          <span className="text-yellow-400">[INFO]</span>
          <span className="text-green-700">BASE DE CONOCIMIENTO TÉCNICO</span>
        </div>

        <div className="bg-terminal-bg/30 p-4 border border-green-900">
          <h3 className="text-green-400 font-bold mb-3">{'>>'} ARQUITECTURA DE SISTEMAS INTERNOS</h3>
          <div className="text-green-600 space-y-2 text-sm">
            <p>La arquitectura interna se divide en subsistemas críticos:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Cerebro Droide:</strong> Procesador central, unidad lógica e IA.</li>
              <li><strong>Núcleo de Memoria:</strong> Almacenamiento de datos, experiencias y registros.</li>
              <li><strong>Sistemas de Sensores:</strong> Red interna/externa (fotorreceptores, audio, etc.).</li>
              <li><strong>Sistemas de Comunicación:</strong> Vocalizadores, transceptores e interfaces de datos.</li>
              <li><strong>Fuente de Energía:</strong> Celda de energía o microreactor de fusión.</li>
              <li><strong>Actuadores y Servomotores:</strong> Conversión de directivas lógicas en movimiento físico.</li>
            </ul>
          </div>
        </div>

        <div className="bg-terminal-bg/30 p-4 border border-green-900">
          <h3 className="text-green-400 font-bold mb-3">{'>>'} OPERACIONES Y DIAGNÓSTICO</h3>
          <div className="text-green-600 space-y-3 text-sm">
            <p><strong>Diagnóstico:</strong></p>
            <p className="pl-4 border-l-2 border-green-900">
              Identificar causas de comportamiento errático, fallos de programación, errores de memoria o mal funcionamiento.
            </p>
            <p><strong>Mantenimiento, Modificación y Reparación:</strong></p>
            <p className="pl-4 border-l-2 border-green-900">
              Operaciones para corregir errores, calibrar sensores, o reemplazar chips lógicos.
            </p>
            <p className="pl-4 border-l-2 border-green-900">
              Reparación de actuadores y sistemas mecánicos mediante operativa común de mecánica general.
            </p>
          </div>
        </div>

        <div className="bg-terminal-bg/30 p-4 border border-green-900">
          <h3 className="text-green-400 font-bold mb-3">{'>>'} PROGRAMACIÓN Y MEMORIA</h3>
          <div className="text-green-600 space-y-3 text-sm">
            <p><strong>Operaciones sobre protocolos:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Instalar Protocolos:</strong> Añadir habilidades o conocimientos.</li>
              <li><strong>Modificar Comportamientos:</strong> Cambio de personalidad o rutinas.</li>
              <li><strong>Gestión de Memoria:</strong> Extracción o borrado de datos del núcleo.</li>
            </ul>
            <p><strong>Reprogramación Hostil/Capturados:</strong></p>
            <p className="pl-4 border-l-2 border-red-900">
              Acceso a sistemas encriptados. Si se falla, el droide ejecutará el autoformateo de memoria borrando protocolos y datos.
            </p>
          </div>
        </div>

      </div>
    </Page>
  )
}
