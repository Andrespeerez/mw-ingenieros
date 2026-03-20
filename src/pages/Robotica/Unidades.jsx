import React from 'react'
import Page from '../../components/Page'

export default function Unidades() {
  return (
    <Page title="UNIDADES">
      <div className="p-5 bg-panel border border-border mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-green-500">{'>'}</span>
          <span className="text-yellow-400">[INFO]</span>
          <span className="text-green-700">PENDIENTE DE CARGAR</span>
        </div>

        <p className="mb-4 pl-6 text-green-700">
          {'>'} Registro de unidades roboticas bajo mando GAR.
        </p>

        <div className="pl-6">
          <p className="text-green-500 mb-3">
            {'>'} Unidades clasificadas:
          </p>
          <ul className="list-none p-0 m-0 pl-4">
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">BX-Series Droid</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">DSD1 Dwarf Spider Droid</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">MTT Mobile Battle Tank</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">STAP</span>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <span className="text-green-500">{'->'}</span>
              <span className="text-green-700">Droideka</span>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  )
}
