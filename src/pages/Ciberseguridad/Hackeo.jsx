import React from 'react'
import Page from '../../components/Page'

// Simplified Hackeo page (encryption UI moved out to Comms)
export default function Hackeo() {
  return (
    <Page title="Hackeo">
      <div className="p-5 bg-panel border border-border mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-green-500">{'>'}</span>
          <span className="text-yellow-400">[INFO]</span>
          <span className="text-green-700">PENDIENTE DE CARGAR</span>
        </div>

        <p className="mb-4 pl-6 text-green-700">
          {'>'} Herramientas y tecnicas de infiltracion digital.
        </p>

        <div className="pl-6">
          <p className="text-green-500 mb-3">
            {'>'} Herramientas disponibles:
          </p>
          <ul className="list-none p-0 m-0 pl-4">
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">Desactivacion de Droides</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">Infiltracion de Redes Separatistas</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">Extraccion de Datos</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">Contrainteligencia</span>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  )
}
