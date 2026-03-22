import React from 'react'
import Page from '../components/Page'
import Tooltip from '../components/Tooltip'

export default function ReglamentoBase() {
  return (
    <Page title="REGLAMENTO BASE">
      <div className="p-5 bg-panel border border-border mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-mint-500">{'> '}</span>
          <span className="text-yellow-500">[INFO]</span>
          <span className="text-green-500">MANUAL DEL INGENIERO CLON</span>
        </div>

        <p className="mb-6 pl-6 text-green-500 text-sm">
          {'>'} Todo ingeniero debe dominar tres pilares fundamentales. Con tiempo y experiencia, 
          podras expandir tus horizontes hacia funciones avanzadas como la ciberseguridad.
        </p>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500">[Pilares Fundamentales]</span>
          </div>

          <div className="pl-4 space-y-4">
            <div className="bg-terminal-bg/50 p-4 border-l-2 border-green-500">
              <h3 className="text-yellow-500 font-bold mb-2">{'>>'} Pilotaje</h3>
              <p className="text-green-400 text-sm mb-2">Capacidad de pilotar vehiculos aereos cuando la situacion lo requiera.</p>
              <ul className="list-none ml-4 space-y-1">
                <li className="text-green-500 text-sm">-&gt; Vehiculo de Transporte LAAT/i</li>
                <li className="text-green-500 text-sm">-&gt; Vehiculo de Reconocimiento ARC-170</li>
              </ul>
            </div>

            <div className="bg-terminal-bg/50 p-4 border-l-2 border-green-500">
              <h3 className="text-yellow-500 font-bold mb-2">{'>>'} Mecanica</h3>
              <p className="text-green-400 text-sm mb-2">Si algo se rompe, es tu responsabilidad arreglarlo.</p>
              <ul className="list-none ml-4 space-y-1">
                <li className="text-green-500 text-sm">-&gt; Reparar sistemas criticos: consolas, puertas, motores</li>
                <li className="text-green-500 text-sm">-&gt; Reparar naves y otros vehiculos</li>
                <li className="text-green-500 text-sm">-&gt; Realizar mantenimientos periodicos</li>
              </ul>
            </div>

            <div className="bg-terminal-bg/50 p-4 border-l-2 border-green-500">
              <h3 className="text-yellow-500 font-bold mb-2">{'>>'} Zapadores</h3>
              <p className="text-green-400 text-sm mb-2">En mitad del campo de batalla, construir e improvisar.</p>
              <ul className="list-none ml-4 space-y-1">
                <li className="text-green-500 text-sm">-&gt; Levantar estructuras de defensa: barricadas y torretas</li>
                <li className="text-green-500 text-sm">-&gt; Establecer puestos avanzados o zonas de reparacion</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500">[Normas del Ingeniero]</span>
          </div>

          <div className="pl-4 space-y-4">
            <div className="bg-terminal-bg/50 p-4 border-l-2 border-mint-500">
              <h3 className="text-mint-500 font-bold mb-2">{'>>'} Obediencia</h3>
              <ul className="list-none ml-4 space-y-1">
                <li className="text-green-500 text-sm">-&gt; Obedece siempre a los mandos superiores</li>
                <li className="text-green-500 text-sm">-&gt; Ofrece soluciones, pero respeta la cadena de mando</li>
                <li className="text-green-500 text-sm">-&gt; Valora tu vida y la de tus aliados</li>
                <li className="text-green-500 text-sm">-&gt; Vuelve con tu nave, no seas temerario</li>
                <li className="text-green-500 text-sm">-&gt; Comunica si existe riesgo elevado antes de iniciar una accion</li>
              </ul>
            </div>

            <div className="bg-terminal-bg/50 p-4 border-l-2 border-mint-500">
              <h3 className="text-mint-500 font-bold mb-2">{'>>'} Uso Adecuado de Recursos</h3>
              <ul className="list-none ml-4 space-y-1">
                <li className="text-green-500 text-sm">-&gt; No malgastes los recursos de la Republica</li>
                <li className="text-green-500 text-sm">-&gt; Improvisa si no dispones de los recursos necesarios</li>
              </ul>
            </div>

            <div className="bg-terminal-bg/50 p-4 border-l-2 border-mint-500">
              <h3 className="text-mint-500 font-bold mb-2">{'>>'} Documentacion</h3>
              <ul className="list-none ml-4 space-y-1">
                <li className="text-green-500 text-sm">-&gt; Documenta las cosas importantes, como equipo que deba ser sustituido</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500">[Equipamiento de Ingenieria]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
            <div className="bg-terminal-bg/50 p-3 border border-green-900">
              <h4 className="text-green-400 font-bold text-sm mb-1">Cortador de Fusion</h4>
              <p className="text-green-600 text-xs">Cortar o soldar elementos metalicos, cables y otros materiales.</p>
            </div>

            <div className="bg-terminal-bg/50 p-3 border border-green-900">
              <h4 className="text-green-400 font-bold text-sm mb-1">Kit de Herramientas</h4>
              <p className="text-green-600 text-xs">Hidrollave, manipuladores robóticos, herramientas de engarce, multi-destornillador y componentes.</p>
            </div>

            <div className="bg-terminal-bg/50 p-3 border border-green-900">
              <h4 className="text-green-400 font-bold text-sm mb-1">Espuma de Fraguado Rapido</h4>
              <p className="text-green-600 text-xs">Sellar fugas en conductos y tuberias. Fragua rapidamente.</p>
            </div>

            <div className="bg-terminal-bg/50 p-3 border border-green-900">
              <h4 className="text-green-400 font-bold text-sm mb-1">Datapad con Sonda</h4>
              <p className="text-green-600 text-xs">Diagnosticar equipos y naves conectandolo a cualquier puerto de datos.</p>
            </div>

            <div className="bg-terminal-bg/50 p-3 border border-green-900">
              <h4 className="text-green-400 font-bold text-sm mb-1">Extintor</h4>
              <p className="text-green-600 text-xs">De espuma y CO2. Para usar en caso de incendio.</p>
            </div>

            <div className="bg-terminal-bg/50 p-3 border border-green-900">
              <h4 className="text-green-400 font-bold text-sm mb-1">Guantes Reforzados</h4>
              <p className="text-green-600 text-xs">Proteger manos de superficies frias, afiladas, energeticas o calientes.</p>
            </div>

            <div className="bg-terminal-bg/50 p-3 border border-green-900 md:col-span-2">
              <h4 className="text-green-400 font-bold text-sm mb-1">Visor de Casco</h4>
              <p className="text-green-600 text-xs">Aumentos opticos para elementos pequenos. Escaneo de infrarrojos para detectar focos de calor. Escaneo electromagnetico para zonas de alta densidad de energia. Alcance corto, requiere tiempo de escaneo.</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500">[Progresion de la Rama]</span>
          </div>

          <div className="text-green-500 text-sm mb-2 pl-4">
            {'>'} La rama de ingenieros se divide en niveles por areas.
            <Tooltip content={
              <div className="text-xs">
                <p className="text-yellow-500 font-bold mb-2">[OOC]</p>
                <p className="mb-2">Los niveles dan ventaja en tiradas de acciones.</p>
                <p>Minimo nivel I para realizar tiradas.</p>
                <p className="mt-2">La rama de Ciberseguridad requiere licencia para participar.</p>
              </div>
            }>
              <span className="text-mint-400 cursor-help border-b border-mint-400 border-dashed ml-1">
                El nivel determina tu habilidad.
              </span>
            </Tooltip>
          </div>

          <div className="pl-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-green-700">
                  <th className="text-left text-yellow-500 py-2 px-3">Piloto</th>
                  <th className="text-left text-yellow-500 py-2 px-3">Mecanica</th>
                  <th className="text-left text-yellow-500 py-2 px-3">Ciberseguridad</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-green-900/50">
                  <td className="py-2 px-3 text-green-500">Piloto Cadete</td>
                  <td className="py-2 px-3 text-green-500">Mecanico I</td>
                  <td className="py-2 px-3 text-green-500">Ciberseguridad I</td>
                </tr>
                <tr className="border-b border-green-900/50">
                  <td className="py-2 px-3 text-green-500">Piloto Combate</td>
                  <td className="py-2 px-3 text-green-500">Mecanico II</td>
                  <td className="py-2 px-3 text-green-500">Ciberseguridad II</td>
                </tr>
                <tr className="border-b border-green-900/50">
                  <td className="py-2 px-3 text-green-500">Piloto Elite</td>
                  <td className="py-2 px-3 text-green-500">Mecanico III</td>
                  <td className="py-2 px-3 text-green-500">Ciberseguridad III</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-terminal-bg/30 p-3 border border-green-900/50 ml-4">
            <p className="text-green-400 text-sm mb-2">{'>>'} Ingreso inicial:</p>
            <ul className="list-none ml-4 space-y-1">
              <li className="text-green-500 text-sm">-&gt; Piloto Cadete</li>
              <li className="text-green-500 text-sm">-&gt; Mecanico I</li>
            </ul>
            <Tooltip content={
              <div className="text-xs">
                <p className="text-yellow-500 font-bold mb-2">[OOC]</p>
                <p>Subiras de nivel mediante instrucciones y demostrando habilidades en campo.</p>
                <p className="mt-2">Si abandonas la rama y vuelves, conservaras tus rangos.</p>
              </div>
            }>
              <p className="text-mint-400 text-xs mt-3 cursor-help border-b border-mint-400 border-dashed inline-block">
                {'>>>'} Ver informacion de progresion
              </p>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="pl-6 pb-4 border-l-4 border-green-500 bg-panel">
        <span className="text-green-500 text-xs">{'>'} Use [ARROW KEYS] para navegar. [ENTER] para seleccionar.</span>
      </div>
    </Page>
  )
}
