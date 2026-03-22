import React from 'react'
import Page from '../../components/Page'
import Tooltip from '../../components/Tooltip'

export default function ManualPilotos() {
  return (
    <Page title="MANUAL_PILOTOS">
      <div className="p-5 bg-panel border border-border mb-6 space-y-6">
        
        <div className="flex items-center gap-3 mb-4">
          <span className="text-green-500">{'>'}</span>
          <span className="text-yellow-400">[INFO]</span>
          <span className="text-green-700">MANUAL DE PILOTOS - MASTER WARS CW ROLEPLAY</span>
        </div>

        <div className="bg-terminal-bg/30 p-4 border border-green-900">
          <h3 className="text-green-400 font-bold mb-3">{'>>'} INTRODUCCIÓN</h3>
          <div className="text-green-600 space-y-2 text-sm">
            <p>
              Los pilotos del Gran Ejército de la República están entrenados específicamente para operar vehículos en entornos de combate atmosférico y espacial. Su deber es mantener el dominio aéreo, asegurar la movilidad de las tropas terrestres y proporcionar fuego de cobertura.
            </p>
            <p>
              En la era actual, el dominio aéreo es primordial a la hora de ganar batallas. Las posiciones defensivas en trincheras solo sirven si no eres bombardeado desde arriba, y los avances terrestres sin apoyo aéreo son un suicidio si el enemigo tiene superioridad aérea.
            </p>
            <p>
              Durante nuestras misiones realizaremos funciones de:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Transporte y extracción de tropas en zona de combate</li>
              <li>Despliegue de vehículos y otros suministros</li>
              <li>Intercepción de cazas y transportes enemigos</li>
              <li>Bombardeos</li>
            </ul>
          </div>
        </div>

        <div className="bg-terminal-bg/30 p-4 border border-green-900">
          <h3 className="text-green-400 font-bold mb-3">{'>>'} RANGOS DE PILOTO</h3>
          <div className="text-green-600 space-y-2 text-sm">
            <p>
              Los pilotos nos dividimos en rangos internos que determinan nuestro dominio en situaciones aéreas. Cada piloto debe demostrar competencia, disciplina y dominio de vuelo antes de avanzar.
            </p>
            <p>
              El acceso a diferentes naves está regulado mediante licencias que se obtienen una vez dispones de suficiente rango como piloto y se supera una instrucción específica para dicho tipo de vehículo.
            </p>
            
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-xs border-collapse border border-green-800 mt-2">
                <thead>
                  <tr className="bg-green-900/30">
                    <th className="border border-green-800 p-2 text-left text-green-400">Rango</th>
                    <th className="border border-green-800 p-2 text-left text-green-400">Naves disponibles</th>
                    <th className="border border-green-800 p-2 text-left text-green-400">Licencias específicas</th>
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

            <p className="mt-4">
              Todos los nuevos ingresos a la rama de Ingeniería recibirán el rango interno de Piloto Cadete. Este rango permite el uso de vehículos sencillos como la LAAT/i de transporte de infantería y el ARC-170 de reconocimiento. Mediante licencia, podéis utilizar la LAAT/c que permite mover vehículos terrestres.
            </p>
            <p>
              Los pilotos de combate adquieren competencia con el Caza Ligero V-19 y pueden sacarse la licencia de bombardero Ala-Y.
            </p>
            <p>
              Los pilotos de élite tienen acceso a todas las naves experimentales. Estos pilotos serán también elegibles para ser líderes de sus propios escuadrones o tomarán el rol de líder si el líder no está presente.
            </p>
          </div>
        </div>

        <div className="bg-terminal-bg/30 p-4 border border-green-900">
          <h3 className="text-green-400 font-bold mb-3">{'>>'} LICENCIAS DE VEHÍCULOS</h3>
          <div className="text-green-600 space-y-3 text-sm">
            <div className="border-l-2 border-green-700 pl-4">
              <p className="text-green-400 font-semibold">Licencia de uso de LAAT/c:</p>
              <p>Disponible desde Pilotos Cadetes.</p>
              <p>Las LAATs de carga presentan una complejidad adicional a las LAATs convencionales, al cargar un peso muerto. El piloto debe aprender a hacer un uso preciso del VTOL para ubicarse correctamente encima del bulto que se pretende levantar, a desplazarse moviendo dicho bulto y a su posterior despliegue en el lugar designado.</p>
            </div>
            <div className="border-l-2 border-green-700 pl-4">
              <p className="text-green-400 font-semibold">Licencia de uso de Bombardero Ala-Y:</p>
              <p>Disponible desde Pilotos de Combate.</p>
              <p>Los bombarderos ALA-Y son naves que requieren de escolta, puesto que son extremadamente débiles en combate nave contra nave. Su principal función es la de bombardear naves capitales o posiciones enemigas. Por ello se necesitará que el piloto sepa manejar correctamente la nave, así como aprender a coordinarse con su escolta.</p>
            </div>
            <div className="border-l-2 border-green-700 pl-4">
              <p className="text-green-400 font-semibold">Licencia de uso de Naves Experimentales:</p>
              <p>Disponible para pilotos Élite.</p>
              <p>De vez en cuando recibiremos naves experimentales que necesitaremos y probando antes de que sean introducidas en masa. Ésta licencia autoriza a los pilotos a ser los primeros en probar dichas naves, incluso en situaciones de combate real. Cuando se determine que la nave es segura se adoptará por el resto de pilotos.</p>
            </div>
          </div>
        </div>

        <div className="bg-terminal-bg/30 p-4 border border-green-900">
          <h3 className="text-green-400 font-bold mb-3">{'>>'} CONFIGURACIONES DE VUELO</h3>
          <div className="text-green-600 space-y-2 text-sm">
            <p>
              Las configuraciones de vuelo que el Gran Ejército de la República nos proveé por defecto son bastante poco intuitivas, y no nos permiteアクション el VTOL que las naves disponen para despegues, o en caso de las LAATs, para movernos en vuelo atmosférico. Si encuentran una mejor configuración de vuelo, son libres de usarla o compartirla con el resto.
            </p>
            <Tooltip content={
              <div className="space-y-3 w-80">
                <p className="text-yellow-500 font-bold border-b border-yellow-700 pb-2">[OOC: CONTROLES DEL MOD]</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex justify-between border-b border-green-800 pb-1">
                    <span className="text-green-500">Mouse-Aim Steering</span>
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
                    <span className="text-green-500">Toogle Thirdperson</span>
                    <span className="text-green-400">F2</span>
                  </div>
                  <div className="flex justify-between border-b border-green-800 pb-1">
                    <span className="text-green-500">Toogle Vehicle-Specific</span>
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
        </div>

      </div>
    </Page>
  )
}
