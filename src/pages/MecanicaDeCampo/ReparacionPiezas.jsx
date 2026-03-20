import React from 'react'
import Page from '../../components/Page'

export default function ReparacionPiezas() {
  return (
    <Page title="REPARACION Y PIEZAS">
      <div className="p-5 bg-panel border border-border mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-green-500">{'>'}</span>
          <span className="text-yellow-400">[INFO]</span>
          <span className="text-green-700">PENDIENTE DE CARGAR</span>
        </div>

        <p className="mb-4 pl-6 text-green-700">
          {'>'} Catalogo de reparaciones y piezas para unidades de ingenieria.
        </p>

        <div className="pl-6">
          <p className="text-green-500 mb-3">
            {'>'} Subsecciones disponibles:
          </p>
          <ul className="list-none p-0 m-0 pl-4">
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">Guia de Reparacion de Droides</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">Inventario de Piezas Mecanicas</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">Protocolos de Mantenimiento</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">Especificaciones de Componentes</span>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  )
}
