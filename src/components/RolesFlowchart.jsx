'use client'
import React, { useState } from 'react'

export default function RolesFlowchart() {
  const [activeTab, setActiveTab] = useState('mecanica')

  const tabs = [
    { id: 'mecanica', label: 'Mecanica' },
    { id: 'hacking', label: 'Hacking' }
  ]

  return (
    <div className="bg-black/50 border border-green-900 p-4 rounded">
      <div className="flex gap-2 mb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-xs font-mono border transition-all ${
              activeTab === tab.id
                ? 'bg-green-600 text-black border-green-400'
                : 'bg-black text-green-500 border-green-900 hover:border-green-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'mecanica' && <MecanicaFlow />}
      {activeTab === 'hacking' && <HackingFlow />}
    </div>
  )
}

function MecanicaFlow() {
  return (
    <div className="space-y-4">
      <div className="text-green-500 text-xs mb-2">
        Proceso de reparacion en 3 pasos.
      </div>

      <div className="bg-green-900/30 border border-green-700 p-4 rounded">
        <div className="text-green-400 font-bold text-sm mb-2">
          PASO 1: ESTADO
        </div>
        <div className="text-green-500 text-xs mb-2">
          [COMPROBACION - Solo el dado]
        </div>
        <div className="bg-black/50 p-3 rounded font-mono text-xs text-green-400">
          /me revisa el estado de la nave<br/>
          /dados {'->'} 40<br/>
          /do La nave se encuentra en mal estado.
        </div>
      </div>

      <div className="text-center text-green-600 text-lg">{'|'} {'|'}</div>

      <div className="bg-yellow-900/30 border border-yellow-700 p-4 rounded">
        <div className="text-yellow-400 font-bold text-sm mb-2">
          PASO 2: COMPROBACIONES
        </div>
        <div className="text-yellow-500 text-xs mb-2">
          [COMPROBACION - Solo el dado, tantas como necesites]
        </div>
        <div className="bg-black/50 p-3 rounded font-mono text-xs space-y-2">
          <div className="text-green-400">
            /me intenta arrancar el motor<br/>
            /dados {'->'} 30<br/>
            /do Se escuchan ruidos estranos del motor de propulsion.
          </div>
          <div className="text-green-400">
            /me comprueba el panel de lecturas del motor<br/>
            /dados {'->'} 90<br/>
            /do Uno de los pilotos en Rojo. Problema con expulsion de gases.
          </div>
          <div className="text-green-400">
            /me comprueba las toberas de la nave<br/>
            /dados {'->'} 10<br/>
            /do Las toberas estan obstruidas.
          </div>
        </div>
      </div>

      <div className="text-center text-green-600 text-lg">{'|'}</div>

      <div className="bg-red-900/30 border border-red-700 p-4 rounded">
        <div className="text-red-400 font-bold text-sm mb-2">
          PASO 3: REPARACION
        </div>
        <div className="text-red-500 text-xs mb-2">
          [ACCION - Dado + Competencia vs Dificultad]
        </div>
        <div className="bg-black/50 p-3 rounded font-mono text-xs text-green-400">
          /me limpia los conductos (+0) [ACCION]<br/>
          /dados {'->'} 65<br/>
          /do La nave volveria a funcionar.
        </div>
      </div>
    </div>
  )
}

function HackingFlow() {
  return (
    <div className="space-y-4">
      <div className="text-green-500 text-xs mb-2">
        Proceso de hackeo en 3 pasos.
      </div>

      <div className="bg-green-900/30 border border-green-700 p-4 rounded">
        <div className="text-green-400 font-bold text-sm mb-2">
          PASO 1: DIAGNOSTICO
        </div>
        <div className="text-green-500 text-xs mb-2">
          [COMPROBACION - Solo el dado]
        </div>
        <div className="bg-black/50 p-3 rounded font-mono text-xs text-green-400">
          /me inserta la sonda de datos al dataport para acceder al sistema.<br/>
          /me evalua la seguridad del sistema.<br/>
          /dados {'->'} 60<br/>
          /do Habria una seguridad robusta. [Seguridad media: +60]
        </div>
      </div>

      <div className="text-center text-green-600 text-lg">{'|'}</div>

      <div className="bg-yellow-900/30 border border-yellow-700 p-4 rounded">
        <div className="text-yellow-400 font-bold text-sm mb-2">
          PASO 2: INFILTRACION
        </div>
        <div className="text-yellow-500 text-xs mb-2">
          [ACCION vs Dificultad - Dado + Competencia]
        </div>
        <div className="bg-black/50 p-3 rounded font-mono text-xs space-y-2">
          <div className="text-green-400">
            /me intenta explotar una vulnerabilidad en el protocolo de autenticacion.<br/>
            /dados {'->'} 45 - 10 = 35<br/>
            /do El sistema detecta y bloquea el script de intrusion (35)
          </div>
          <div className="text-green-400">
            /me ajusta los parametros del script e intenta una segunda intrusion.<br/>
            /dados {'->'} 75 - 10 = 65<br/>
            /do El sistema cede ante la segunda intrusion. Acceso concedido. (65)
          </div>
        </div>
      </div>

      <div className="text-center text-green-600 text-lg">{'|'}</div>

      <div className="bg-red-900/30 border border-red-700 p-4 rounded">
        <div className="text-red-400 font-bold text-sm mb-2">
          PASO 3: INFECCION
        </div>
        <div className="text-red-500 text-xs mb-2">
          [ACCION vs Dificultad - Dado + Competencia]
        </div>
        <div className="bg-black/50 p-3 rounded font-mono text-xs text-green-400">
          /me intentaria borrar los registros.<br/>
          /dados {'->'} 59 - 10 = 49<br/>
          /do Los registros se borran, pero saltan las alarmas de la base. (49)
        </div>
      </div>

      <div className="bg-cyan-900/30 border border-cyan-700 p-3 rounded mt-4">
        <div className="text-cyan-400 text-xs">
          <span className="font-bold">PASO 4: ESCALADA (opcional)</span><br/>
          Si lo necesitas, puedes intentar escalar privilegios para ganar +20 en tiradas y recuperar fallos.
        </div>
      </div>
    </div>
  )
}
