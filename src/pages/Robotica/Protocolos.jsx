import React from 'react'
import Page from '../../components/Page'

export default function Protocolos() {
  return (
    <Page title="PROTOCOLOS">
      <div className="p-5 bg-panel border border-border mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-green-500">{'>'}</span>
          <span className="text-yellow-400">[INFO]</span>
          <span className="text-green-700">PENDIENTE DE CARGAR</span>
        </div>

        <p className="mb-4 pl-6 text-green-700">
          {'>'} Protocolos de activacion y control de unidades.
        </p>

        <div className="pl-6">
          <p className="text-green-500 mb-3">
            {'>'} Protocolos registrados:
          </p>
          <ul className="list-none p-0 m-0 pl-4">
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">Activacion en Cadena</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">Desactivacion de Emergencia</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">Modo Escuadron</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">Autodestruccion Segura</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">Reset de Factory</span>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  )
}
