import React from 'react'
import Page from '../../components/Page'
import ChatLogBlock from '../../components/ChatLogBlock'
import CompetenceCalculator from '../../components/CompetenceCalculator'
import RolesFlowchart from '../../components/RolesFlowchart'

export default function RolPasivo() {
  return (
    <Page title="ROL PASIVO">
      <div className="space-y-6">
        <section id="introduccion" className="p-5 bg-panel border border-border">
          <h2 className="text-xl text-yellow-500 mb-4">{'>'} Introducción a Roles Pasivos</h2>
          <p className="text-green-500 text-sm mb-4">
            La rama de ingeniería es una especialización que requiere de muchos roles pasivos. 
            Los roles pasivos se usan para simular dificultad / riesgo en acciones técnicas que realizamos como ingenieros. 
            Estos implican factores como suerte que determinan si una acción se puede llevar a cabo o no, o si de debe de pagar un precio.
          </p>
          <p className="text-green-500 text-sm mb-4">
            Esta guía es una guía de inicio. El objetivo es hacerte ameno la iniciación y darte una buena experiencia. 
            Como ingeniero vas a poder hacer muchas cosas: inspeccionar, diagnosticar, reparar, construir, modificar, y hackear. 
            Da igual que estés haciendo, los roles pasivos serán iguales, solo que cambiaremos términos.
          </p>
        </section>

        <section id="sistema-tiradas" className="p-5 bg-panel border border-border">
          <h2 className="text-xl text-yellow-500 mb-4">{'>'} Sistema de Tiradas (1d100)</h2>
          <p className="text-green-500 text-sm mb-4">
            Usamos un sistema basado en el dado de 100 caras (1d100). Cuando queremos saber si algo está roto, 
            cuán roto está, comprobar lecturas o realizar una acción complicada, lanzaremos 1d100.
          </p>
          <p className="text-green-500 text-sm mb-4">
            Solo usaremos los dados cuando la acción implica dificultad o riesgo. 
            Podemos dividir las tiradas en dos grupos:
          </p>
          <ul className="text-green-600 text-xs list-disc pl-6 space-y-1 mb-4">
            <li>Tiradas de Comprobación (para obtener información)</li>
            <li>Tiradas de Acción (para superar una dificultad)</li>
          </ul>
        </section>

        <section id="tiradas-comprobacion" className="p-5 bg-panel border border-border">
          <h2 className="text-xl text-yellow-500 mb-4">{'>'} Tiradas de Comprobación</h2>
          <p className="text-green-500 text-sm mb-4">
            Estas tiradas las haremos cuando estemos buscando información.
          </p>

          <div className="space-y-4">
            <div className="bg-terminal-bg/50 p-3 border-l-2 border-green-500">
              <h3 className="text-green-400 font-bold mb-1">Roles de Estado</h3>
              <p className="text-green-600 text-xs">Preguntamos cuál es el estado de aquello que revisamos. Cuanto más alto sea el dado, mejor estará.</p>
            </div>
            <div className="bg-terminal-bg/50 p-3 border-l-2 border-red-500">
              <h3 className="text-red-400 font-bold mb-1">Roles de Gravedad</h3>
              <p className="text-green-600 text-xs">Preguntamos cómo de roto está. Cuanto más alto sea el dado, peor estará.</p>
            </div>
            <div className="bg-terminal-bg/50 p-3 border-l-2 border-yellow-500">
              <h3 className="text-yellow-400 font-bold mb-1">Roles de Medición</h3>
              <p className="text-green-600 text-xs">Preguntamos por el valor de una lectura. Buscamos el valor más cercano a 50.</p>
            </div>
          </div>
        </section>

        <section id="tiradas-accion" className="p-5 bg-panel border border-border">
          <h2 className="text-xl text-yellow-500 mb-4">{'>'} Tiradas de Acción</h2>
          <p className="text-green-500 text-sm mb-4">
            Cuando necesitamos realizar una acción con riesgo o dificultad. Aquí, la habilidad importa: añadiremos un modificador de competencia.
          </p>
          <p className="text-green-700 text-xs italic mb-4">Fórmula: Resultado = Dado + Competencia. Objetivo: &gt;= Dificultad</p>
          
          <div className="space-y-3">
             <div className="bg-terminal-bg/30 p-3 border border-green-900">
                <h4 className="text-green-400 font-bold text-sm">vs. Dificultad</h4>
                <p className="text-green-600 text-xs">Superar un valor fijo. Ejemplo: Hackear terminal [50] + Competencia [+10]. Resultado 45+10 = 55 (Éxito).</p>
             </div>
             <div className="bg-terminal-bg/30 p-3 border border-green-900">
                <h4 className="text-green-400 font-bold text-sm">vs. Dado Enfrentado</h4>
                <p className="text-green-600 text-xs">Se enfrentan dos tiradas de acción. Gana quien saque el resultado más alto.</p>
             </div>
          </div>
        </section>

        <section id="competencias" className="p-5 bg-panel border border-border">
          <h2 className="text-xl text-yellow-500 mb-4">{'>'} Competencias y Modificadores</h2>
          <table className="w-full text-sm text-green-500 mb-4 border-collapse">
            <thead>
              <tr className="border-b border-green-700">
                <th className="text-left py-2">Competencia</th>
                <th className="text-left py-2">Modificador</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-green-900/50">
                <td className="py-2">Nivel I</td>
                <td className="py-2">-10</td>
              </tr>
              <tr className="border-b border-green-900/50">
                <td className="py-2">Nivel II</td>
                <td className="py-2">0</td>
              </tr>
              <tr className="border-b border-green-900/50">
                <td className="py-2">Nivel III</td>
                <td className="py-2">+10</td>
              </tr>
            </tbody>
          </table>
          <p className="text-green-600 text-xs mb-4">Si no posees Competencia (Nivel I o superior), no podrás realizar Tiradas de Acción.</p>
          <CompetenceCalculator />
        </section>

        <section id="diagramas" className="p-5 bg-panel border border-border">
          <h2 className="text-xl text-yellow-500 mb-4">{'>'} Diagramas de Flujo</h2>
          <p className="text-green-500 text-sm mb-4">
            Visualiza cómo funcionan los roles pasivos en diferentes escenarios.
          </p>
          <RolesFlowchart />
        </section>
      </div>
    </Page>
  )
}
