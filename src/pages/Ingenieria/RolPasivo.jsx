import React from 'react'
import Page from '../../components/Page'
import Tooltip from '../../components/Tooltip'

export default function RolPasivo() {
  return (
    <Page title="Ingeniería: Rol Pasivo">
      <div className="p-5 bg-panel border border-border mb-6">
        <h2 className="text-xl text-green-500 mb-4">{'>'} Guía de Rol Pasivo</h2>
        
        <p className="mb-4 text-green-700">
          Esta guía detalla cómo realizar tus roles pasivos como ingeniero de forma InCharacter (IC) y cómo se traducen a acciones OutOfCharacter (OOC).
        </p>

        <div className="space-y-4">
          <div className="p-4 border border-green-800">
            <h3 className="text-lg text-yellow-400 mb-2">Reparación de Motores</h3>
            <p className="mb-2">
              <Tooltip content="OOC: Usar comando /me seguido de la herramienta de reparación y /roll para verificar éxito.">
                <span className="text-green-500 cursor-help border-b border-green-500 border-dashed">
                  Rol IC: Inspección visual y limpieza de inyectores.
                </span>
              </Tooltip>
            </p>
          </div>

          <div className="p-4 border border-green-800">
            <h3 className="text-lg text-yellow-400 mb-2">Calibración de Sensores</h3>
            <p className="mb-2">
              <Tooltip content="OOC: Configurar la frecuencia en el panel OOC del servidor tras completar el rol /me.">
                <span className="text-green-500 cursor-help border-b border-green-500 border-dashed">
                  Rol IC: Ajuste manual de la antena de comunicaciones.
                </span>
              </Tooltip>
            </p>
          </div>
        </div>
      </div>
    </Page>
  )
}
