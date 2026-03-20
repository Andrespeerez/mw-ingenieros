import React from 'react'
import Page from '../components/Page'

export default function ReglamentoBase() {
  return (
    <Page title="REGLAMENTO BASE">
      <div className="p-5 bg-panel border border-border mb-6"> 
        <div className="flex items-center gap-3 mb-4">
          <span className="text-mint-500">{'> '}</span>
          <span className="text-yellow-500">[INFO]</span>
          <span className="text-green-500">DOCUMENTO PENDIENTE</span>
        </div>

        <p className="mb-4 pl-6 text-green-500">{'>'} Este modulo requiere documentacion oficial del estado mayor.</p>

        <div className="pl-6 mb-4">
          <p className="text-green-500 mb-3">{'>'} Secciones planificadas:</p>
          <ul className="list-none pl-4 m-0">
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-500">Codigo de Conducta del Ingeniero Clonado</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-500">Protocolos de Emergencia</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-500">Jerarquia de Mando</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-500">Regulaciones de Seguridad</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pl-6 pb-4 border-l-4 border-green-500 bg-panel">
        <span className="text-green-500 text-xs">{'>'} Use [ARROW KEYS] para navegar. [ENTER] para seleccionar.</span>
      </div>
    </Page>
  )
}
