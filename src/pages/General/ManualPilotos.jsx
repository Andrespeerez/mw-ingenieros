import React, { useState } from 'react'
import Page from '../../components/Page'
import Tooltip from '../../components/Tooltip'

export default function ManualPilotos() {
  const [activeTab, setActiveTab] = useState('introduccion')

  const tabs = [
    { id: 'introduccion', label: 'INTRODUCCIÓN' },
    { id: 'rangos', label: 'RANGOS' },
    { id: 'licencias', label: 'LICENCIAS' },
    { id: 'controles', label: 'CONTROLES' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'introduccion':
        return (
          <div className="space-y-4">
            <p>Los pilotos del Gran Ejército de la República están entrenados para operar vehículos en combate atmosférico y espacial.</p>
            <p>Funciones principales:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Transporte y extracción de tropas</li>
              <li>Despliegue de vehículos y suministros</li>
              <li>Intercepción de naves enemigas</li>
              <li>Bombardeos</li>
            </ul>
          </div>
        )
      case 'rangos':
        return (
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse border border-green-800">
                <thead>
                  <tr className="bg-green-900/30">
                    <th className="border border-green-800 p-2 text-left">Rango</th>
                    <th className="border border-green-800 p-2 text-left">Naves</th>
                    <th className="border border-green-800 p-2 text-left">Licencias</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-green-800 p-2">Piloto Cadete</td>
                    <td className="border border-green-800 p-2">LAAT/i, ARC-170, LAAT/c</td>
                    <td className="border border-green-800 p-2">-</td>
                  </tr>
                  <tr>
                    <td className="border border-green-800 p-2">Piloto de combate</td>
                    <td className="border border-green-800 p-2">Caza Ligero V-19, Bombardero Ala-Y</td>
                    <td className="border border-green-800 p-2">Licencia Bombardero Ala-Y</td>
                  </tr>
                  <tr>
                    <td className="border border-green-800 p-2">Piloto de Élite</td>
                    <td className="border border-green-800 p-2">Naves Experimentales</td>
                    <td className="border border-green-800 p-2">Líder de Escuadrón</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>El acceso a naves requiere licencias específicas obtenidas mediante instrucción.</p>
          </div>
        )
      case 'licencias':
        return (
          <div className="space-y-4">
            <div className="border-l-2 border-green-700 pl-4">
              <p className="text-green-400 font-semibold">LAAT/c</p>
              <p className="text-xs">Desde: Piloto Cadete. Requiere uso preciso del VTOL para cargar y desplegar peso muerto.</p>
            </div>
            <div className="border-l-2 border-green-700 pl-4">
              <p className="text-green-400 font-semibold">Bombardero Ala-Y</p>
              <p className="text-xs">Desde: Piloto de Combate. Naves débiles en combate, requieren escolta para bombardeos orbitales.</p>
            </div>
            <div className="border-l-2 border-green-700 pl-4">
              <p className="text-green-400 font-semibold">Naves Experimentales</p>
              <p className="text-xs">Desde: Piloto Élite. Autoriza pruebas en combate real antes de adopción masiva.</p>
            </div>
          </div>
        )
      case 'controles':
        return (
          <div className="space-y-4">
            <p>Los controles por defecto son poco intuitivos. Se recomienda personalizarlos.</p>
            <Tooltip content={
              <div className="space-y-3 w-80">
                <p className="text-yellow-500 font-bold border-b border-yellow-700 pb-2">[OOC: CONTROLES DEL MOD]</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex justify-between border-b border-green-800 pb-1">
                    <span className="text-green-500">Mouse-Aim</span>
                    <span className="text-green-400">On</span>
                  </div>
                  <div className="flex justify-between border-b border-green-800 pb-1">
                    <span className="text-green-500">Camara Focus</span>
                    <span className="text-green-400">-1</span>
                  </div>
                  <div className="flex justify-between border-b border-green-800 pb-1">
                    <span className="text-green-500">VTOP UP</span>
                    <span className="text-green-400">Space</span>
                  </div>
                  <div className="flex justify-between border-b border-green-800 pb-1">
                    <span className="text-green-500">VTOP DOWN</span>
                    <span className="text-green-400">Ctrl</span>
                  </div>
                  <div className="flex justify-between border-b border-green-800 pb-1">
                    <span className="text-green-500">Thirdperson</span>
                    <span className="text-green-400">F2</span>
                  </div>
                  <div className="flex justify-between border-b border-green-800 pb-1">
                    <span className="text-green-500">Función Específica</span>
                    <span className="text-green-400">Alt</span>
                  </div>
                </div>
              </div>
            }>
              <span className="text-yellow-400 text-xs cursor-help border-b border-yellow-400 border-dashed">
                {'>>>'} Ver controles del mod
              </span>
            </Tooltip>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Page title="MANUAL_PILOTOS">
      <div className="p-5 bg-panel border border-border mb-6 space-y-6">
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-green-500">{'>>'}</span>
          <span className="text-yellow-400">[INFO]</span>
          <span className="text-green-700">MANUAL DE PILOTOS - MASTER WARS CW ROLEPLAY</span>
        </div>

        <div className="flex gap-2 mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-4 py-2 border text-xs ${
                activeTab === tab.id
                  ? 'bg-green-500 text-black font-bold'
                  : 'bg-panel text-green-500 border-border hover:border-green-500'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-terminal-bg/30 p-4 border border-green-900 text-green-600 text-sm">
          {renderContent()}
        </div>

      </div>
    </Page>
  )
}
