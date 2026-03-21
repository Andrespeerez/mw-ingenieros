import React, { useState } from 'react'
import Page from '../../components/Page'
import Accordion from '../../components/Accordion'
import Tooltip from '../../components/Tooltip'

export default function Hackeo() {
  const [activeTab, setActiveTab] = useState('info')

  const tabs = [
    { id: 'info', label: 'Info General' },
    { id: 'conocimiento', label: 'Conocimiento Tecnico' },
    { id: 'ofensivas', label: 'Operaciones Ofensivas' },
    { id: 'defensivas', label: 'Operaciones Defensivas' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return <InfoGeneral />
      case 'conocimiento':
        return <ConocimientoTecnico />
      case 'ofensivas':
        return <OperacionesOfensivas />
      case 'defensivas':
        return <OperacionesDefensivas />
      default:
        return null
    }
  }

  return (
    <Page title="HACKEO">
      <div className="p-5 bg-panel border border-border mb-6">
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-4 py-2 border ${
                activeTab === tab.id
                  ? 'bg-green-500 text-black'
                  : 'bg-panel text-green-500 border-border hover:border-green-500'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {renderContent()}
      </div>
    </Page>
  )
}

function InfoGeneral() {
  return (
    <div className="space-y-6">
      <div className="bg-terminal-bg/50 p-4 border-l-2 border-green-500">
        <p className="text-green-400 text-sm mb-2">
          Los Especialistas en Seguridad Informatica (SysSec) son los encargados de librar la guerra por la seguridad de los datos y las comunicaciones contra las fuerzas separatistas.
        </p>
        <p className="text-green-400 text-sm">
          Dominar estas operaciones es asegurar que nuestras fuerzas mantengan la ventaja estrategica en cualquier teatro de operaciones.
        </p>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Areas Fundamentales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-terminal-bg/30 p-4 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-2">Operaciones Ofensivas</h4>
            <p className="text-green-600 text-xs">Penetrar redes, extraer datos, sabotear sistemas y perturbar comunicaciones enemigas.</p>
          </div>
          <div className="bg-terminal-bg/30 p-4 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-2">Operaciones Defensivas</h4>
            <p className="text-green-600 text-xs">Fortificar sistemas, detectar intrusiones, recuperar datos y desarrollar contramedidas.</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Normas de CiberSeguridad</h3>
        <div className="space-y-3">
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Confidencialidad</h4>
            <ul className="text-green-600 text-xs space-y-1 ml-2">
              <li>-> Trata la informacion con maxima confidencialidad operativa</li>
              <li>-> No reveles codigos de acceso a personal no autorizado</li>
              <li>-> Nunca accedas a sistemas sin autorizacion</li>
            </ul>
          </div>

          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Integridad de Transmision o Datos</h4>
            <p className="text-green-600 text-xs">Nunca alteres Mensajes o Datos sin autorizacion.</p>
          </div>

          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Vigilancia</h4>
            <ul className="text-green-600 text-xs space-y-1 ml-2">
              <li>-> Mantente permanentemente alerta a actividad anomala en redes y comunicaciones</li>
              <li>-> Si detectas un acceso enemigo, acta rapido y cambia las claves de acceso</li>
            </ul>
          </div>

          <div className="bg-terminal-bg/30 p-3 border border-red-600/50">
            <h4 className="text-red-400 font-bold text-sm mb-1">Protocolo de No Contacto</h4>
            <p className="text-green-600 text-xs">
              Esta terminantemente prohibido entablar comunicacion o interaccion no autorizada con elementos enemigos a traves de canales ciberneticos, salvo orden directa.
            </p>
          </div>
        </div>
      </div>

      <Tooltip content={
        <div className="space-y-2">
          <p className="text-yellow-500 font-bold">[OOC]</p>
          <p className="text-green-400 text-xs">El SysSec es una especializacion avanzada. Requiere nivel minimo en Ciberseguridad para participar.</p>
          <p className="text-green-400 text-xs mt-2">Los niveles dan ventaja en tiradas de acciones ciberneticas.</p>
        </div>
      }>
        <p className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed inline-block">
          Informacion adicional del sistema de especializacion
        </p>
      </Tooltip>
    </div>
  )
}

function ConocimientoTecnico() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Interfaces de Acceso</h3>
        <p className="text-green-500 text-sm mb-3">
          El primer paso para entender la seguridad es conocer las posibles vias de acceso a la red.
        </p>

        <div className="space-y-3">
          <div className="bg-terminal-bg/30 p-4 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Terminales de Acceso</h4>
            <p className="text-green-600 text-xs mb-2">
              Acceso directo a traves de la interfaz de usuario a una computadora. El agente debe estar fisicamente en el lugar.
            </p>
            <Tooltip content={
              <div className="space-y-1">
                <p className="text-yellow-500 font-bold">[OOC]</p>
                <p className="text-green-400 text-xs">Punto de entrada seguro pero requiere presencia fisica.</p>
                <p className="text-green-400 text-xs mt-1">Dificultad de hackeo: Muy Baja (40)</p>
              </div>
            }>
              <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                Ver informacion OOC
              </span>
            </Tooltip>
          </div>

          <div className="bg-terminal-bg/30 p-4 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Dataports</h4>
            <p className="text-green-600 text-xs mb-2">
              Interfaces para droides conectadas a traves de sondas de datos. Pueden ser usadas por hackers conectando un datapad.
            </p>
            <p className="text-green-600 text-xs mb-2">
              Normalmente permiten acceder a sistemas sencillos como activar puertas. Son un punto vulnerable.
            </p>
            <Tooltip content={
              <div className="space-y-1">
                <p className="text-yellow-500 font-bold">[OOC]</p>
                <p className="text-green-400 text-xs">Punto de acceso vulnerable.</p>
                <p className="text-green-400 text-xs mt-1">Dificultad de hackeo: Baja (50)</p>
                <p className="text-green-400 text-xs">Revisar permisos y vigilar dataports activos.</p>
              </div>
            }>
              <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                Ver informacion OOC
              </span>
            </Tooltip>
          </div>

          <div className="bg-terminal-bg/30 p-4 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Red Externa</h4>
            <p className="text-green-600 text-xs mb-2">
              El hacker no se encuentra fisicamente. Accede de forma remota. Este tipo de ataque suele ser facil de cortar.
            </p>
            <p className="text-green-600 text-xs">
              Muchos sistemas criticos estan completamente desconectados de la red exterior.
            </p>
            <Tooltip content={
              <div className="space-y-1">
                <p className="text-yellow-500 font-bold">[OOC]</p>
                <p className="text-green-400 text-xs">Ataque remoto Facil de detectar y bloquear.</p>
                <p className="text-green-400 text-xs mt-1">Dificultad de hackeo: Media-Alta (60+)</p>
                <p className="text-green-400 text-xs">Sistemas criticos aislados = sin riesgo.</p>
              </div>
            }>
              <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                Ver informacion OOC
              </span>
            </Tooltip>
          </div>

          <div className="bg-terminal-bg/30 p-4 border border-yellow-600/50">
            <h4 className="text-yellow-400 font-bold text-sm mb-1">Redes Internas</h4>
            <p className="text-green-600 text-xs mb-2">
              Una vez infiltrada una red, toda la red interna podra ser atacada desde la ubicacion del objetivo, pero hay un limite.
            </p>
            <p className="text-green-600 text-xs mb-2">
              La base dispone de redes independientes que impiden ataques a cualquier sistema desde cualquier Interfaz de Acceso.
            </p>
            <Tooltip content={
              <div className="space-y-1">
                <p className="text-yellow-500 font-bold">[OOC]</p>
                <p className="text-green-400 text-xs">Segmentacion de red por departamentos.</p>
                <p className="text-green-400 text-xs mt-1">Para extraer datos de comandancia, accede desde terminal de comandancia.</p>
                <p className="text-green-400 text-xs">Para acceder a motores, hazlo desde motores o sistemas asociados.</p>
              </div>
            }>
              <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                Ver informacion OOC
              </span>
            </Tooltip>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Equipo del Especialista (SysSec)</h3>
        <div className="space-y-3">
          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Dispositivos de Interfaz</h4>
            <ul className="text-green-600 text-xs space-y-1">
              <li><span className="text-yellow-500">Datapads:</span> Suite de programas para diagnostico y softwares maliciosos</li>
              <li><span className="text-yellow-500">Sondas de Datos:</span> Conexion directa a puertos para droides</li>
            </ul>
          </div>

          <div className="bg-terminal-bg/30 p-3 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-1">Herramientas de Analisis de Comunicaciones</h4>
            <p className="text-green-600 text-xs mb-1">
              <span className="text-yellow-500">Comlink Avanzado:</span> Funciones adicionales de escaneo de frecuencias, deteccion de emisiones de senales.
            </p>
            <p className="text-green-600 text-xs">
              No permite desencriptar, pero puede servir para triangular emisiones anomalas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function OperacionesOfensivas() {
  return (
    <div className="space-y-6">
      <div className="bg-terminal-bg/50 p-4 border-l-2 border-green-500">
        <p className="text-green-400 text-sm mb-2">
          Las operaciones ofensivas requieren precision y rapidez para explotar vulnerabilidades. El objetivo es lograr la penetracion antes de ser detectado o expulsado.
        </p>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Fases de las Operaciones Ofensivas</h3>
        
        <div className="space-y-4">
          <div className="bg-terminal-bg/30 p-4 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-2">1. Planificacion y Reconocimiento</h4>
            <p className="text-green-600 text-xs mb-2">
              Evaluamos el objetivo, recopilamos informacion y disenamos una estrategia.
            </p>
            <ul className="text-green-600 text-xs space-y-1 mb-2">
              <li>-> <span className="text-yellow-500">Evaluacion del Objetivo:</span> Civil, Militar, Industrial</li>
              <li>-> <span className="text-yellow-500">Recopilacion de Informacion:</span> Escaneo pasivo, analisis de comunicaciones abiertas</li>
              <li>-> <span className="text-yellow-500">Diseno de Estrategia:</span> Extraccion, Sabotaje, Anular Sistemas o Defensas</li>
            </ul>
            <Tooltip content={
              <div className="space-y-2">
                <p className="text-yellow-500 font-bold">[OOC]</p>
                <p className="text-green-400 text-xs">Determina la dificultad del sistema objetivo.</p>
                <p className="text-green-400 text-xs mt-1">Usa /me para comprobar si el sistema tiene seguridad y /dados para determinar dificultad.</p>
                <div className="mt-2 pt-2 border-t border-green-700">
                  <p className="text-yellow-500 text-xs mb-1">Tabla de Diagnostico:</p>
                  <table className="text-green-400 text-xs">
                    <tr><td className="pr-2">x {'<'} 40:</td><td>Seguridad Muy Baja (40), 3 fallos</td></tr>
                    <tr><td>40 {'<'} x {'<'} 60:</td><td>Seguridad Baja (50), 3 fallos</td></tr>
                    <tr><td>60 {'<'} x {'<'} 90:</td><td>Seguridad Media (60), 3 fallos</td></tr>
                    <tr><td>x {'>'} 90:</td><td>Seguridad Alta (60), 2 fallos</td></tr>
                  </table>
                </div>
              </div>
            }>
              <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                Ver tabla de dificultades [OOC]
              </span>
            </Tooltip>
          </div>

          <div className="bg-terminal-bg/30 p-4 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-2">2. Infiltracion</h4>
            <p className="text-green-600 text-xs mb-2">
              Establecimiento del primer punto de entrada en el sistema. Uso de exploits, insercion de codigo malicioso o robo de credenciales.
            </p>
            <p className="text-green-600 text-xs">
              El objetivo es obtener acceso sin activar alarmas.
            </p>
            <Tooltip content={
              <div className="space-y-2">
                <p className="text-yellow-500 font-bold">[OOC]</p>
                <p className="text-green-400 text-xs">Tirada de Accion vs Dificultad + Competencia Ciberseguridad.</p>
                <p className="text-green-400 text-xs mt-1">Si fallas 1 vez pierdes sigilo.</p>
                <p className="text-green-400 text-xs">Sin fallos = expulsion del sistema.</p>
                <div className="mt-2 pt-2 border-t border-green-700">
                  <p className="text-yellow-500 text-xs mb-1">Ejemplo:</p>
                  <p className="text-green-400 text-xs font-mono">/me intenta superar el firewall (+10)</p>
                  <p className="text-green-400 text-xs font-mono">/dados</p>
                </div>
              </div>
            }>
              <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                Ver mecanismo de tiradas [OOC]
              </span>
            </Tooltip>
          </div>

          <div className="bg-terminal-bg/30 p-4 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-2">3. Acciones Maliciosas</h4>
            <p className="text-green-600 text-xs mb-2">
              Una vez con control, ejecutamos el objetivo:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="bg-black/50 p-2 border border-green-700">
                <span className="text-yellow-500 text-xs">Descargar Archivos</span>
                <p className="text-green-600 text-xs">Archivos al datapad</p>
              </div>
              <div className="bg-black/50 p-2 border border-green-700">
                <span className="text-yellow-500 text-xs">Borrar/Modificar</span>
                <p className="text-green-600 text-xs">Crear datos falsos</p>
              </div>
              <div className="bg-black/50 p-2 border border-green-700">
                <span className="text-yellow-500 text-xs">Ransomware</span>
                <p className="text-green-600 text-xs">Encriptar archivos</p>
              </div>
              <div className="bg-black/50 p-2 border border-green-700">
                <span className="text-yellow-500 text-xs">Activar/Desactivar</span>
                <p className="text-green-600 text-xs">Alarmas, puertas, etc.</p>
              </div>
            </div>
            <Tooltip content={
              <div className="space-y-2">
                <p className="text-yellow-500 font-bold">[OOC]</p>
                <p className="text-green-400 text-xs">Tirada de Accion vs Dificultad para cada accion.</p>
                <div className="mt-2 pt-2 border-t border-green-700">
                  <p className="text-yellow-500 text-xs mb-1">Acciones Especiales:</p>
                  <p className="text-green-400 text-xs">Atacar otro nodo: Navegar a otro segmento</p>
                  <p className="text-green-400 text-xs">Escalar Privilegios: +10 dificultad, recupera fallos y +20 en tiradas</p>
                </div>
              </div>
            }>
              <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                Ver tabla de acciones [OOC]
              </span>
            </Tooltip>
          </div>

          <div className="bg-terminal-bg/30 p-4 border border-green-900">
            <h4 className="text-green-400 font-bold text-sm mb-2">4. Escalada de Privilegios <span className="text-yellow-600">(Opcional)</span></h4>
            <p className="text-green-600 text-xs mb-2">
              Obtener nivel de acceso superior (Administrador/Root) para facilitar acciones posteriores.
            </p>
            <p className="text-green-600 text-xs">
              Si lo logras: recuperas todos los intentos y ganas +20 en tiradas.
            </p>
            <Tooltip content={
              <div className="space-y-2">
                <p className="text-yellow-500 font-bold">[OOC]</p>
                <p className="text-green-400 text-xs">Tirada de Accion vs Dificultad base +10 + Competencia.</p>
                <div className="mt-2 pt-2 border-t border-green-700">
                  <p className="text-yellow-500 text-xs mb-1">Ejemplo:</p>
                  <p className="text-green-400 text-xs font-mono">/me intenta cambiar rol a admin (+10+10)</p>
                  <p className="text-green-400 text-xs font-mono">/dados</p>
                </div>
              </div>
            }>
              <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
                Ver mecanismo [OOC]
              </span>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="bg-yellow-900/30 p-4 border border-yellow-600/50">
        <h4 className="text-yellow-400 font-bold text-sm mb-2">{'>>'} Alternativas si Fallamos</h4>
        <p className="text-green-600 text-xs mb-2">
          Un buen hacker no se rinde con facilidad. Alternatives:
        </p>
        <ul className="text-green-500 text-xs space-y-1">
          <li>-> Manipular actuadores fisicamente (abrir puertas manualmente)</li>
          <li>-> Robar discos de datos fisicos para desencriptar en lugar seguro</li>
          <li>-> Obtener claves interrogando o enganando a alguien que las tenga</li>
        </ul>
      </div>
    </div>
  )
}

function OperacionesDefensivas() {
  return (
    <div className="space-y-6">
      <div className="bg-terminal-bg/50 p-4 border-l-2 border-green-500">
        <p className="text-green-400 text-sm">
          Las operaciones defensivas se centran en la proteccion, la respuesta y la recuperacion de los sistemas ante amenazas ciberneticas.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-terminal-bg/30 p-4 border border-green-900">
          <h4 className="text-green-400 font-bold text-sm mb-2">Deteccion y Alerta Temprana</h4>
          <p className="text-green-600 text-xs mb-2">
            Monitoreo y analisis del trafico de red. El objetivo es identificar patrones de actividad anomala o firmas de ataques conocidas.
          </p>
          <Tooltip content={
            <div className="space-y-2">
              <p className="text-yellow-500 font-bold">[OOC]</p>
              <p className="text-green-400 text-xs">Tiradas de Recopilar Informacion para detectar anomalias.</p>
              <p className="text-green-400 text-xs mt-1">Usa el Comlink Avanzado para escanear frecuencias y triangular emisiones.</p>
            </div>
          }>
            <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
              Ver informacion OOC
            </span>
          </Tooltip>
        </div>

        <div className="bg-terminal-bg/30 p-4 border border-green-900">
          <h4 className="text-green-400 font-bold text-sm mb-2">Contencion de Brechas</h4>
          <p className="text-green-600 text-xs mb-2">
            Protocolos de respuesta inmediata para aislar los sistemas o segmentos de la red comprometidos.
          </p>
          <ul className="text-green-600 text-xs space-y-1">
            <li>-> Evitar la propagacion del ataque</li>
            <li>-> Limitar el acceso del adversario</li>
            <li>-> Desconectar nodos comprometidos</li>
            <li>-> Configurar firewalls</li>
          </ul>
          <Tooltip content={
            <div className="space-y-2">
              <p className="text-yellow-500 font-bold">[OOC]</p>
              <p className="text-green-400 text-xs">Acciones rapidas para contener la brecha.</p>
              <p className="text-green-400 text-xs mt-1">Si el enemigo esta dentro, cambiar claves de acceso inmediatamente.</p>
            </div>
          }>
            <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
              Ver protocolo de respuesta [OOC]
            </span>
          </Tooltip>
        </div>

        <div className="bg-terminal-bg/30 p-4 border border-green-900">
          <h4 className="text-green-400 font-bold text-sm mb-2">Post-ataque</h4>
          <p className="text-green-600 text-xs mb-2">
            Investigacion detallada del incidente y elaboracion de informe indicando las vulnerabilidades usadas.
          </p>
          <ul className="text-green-600 text-xs space-y-1">
            <li>-> Recuperar la red y los datos perdidos</li>
            <li>-> Crear sistemas de seguridad contra ataques similares</li>
            <li>-> Documentar el incidente para Inteligencia</li>
          </ul>
          <Tooltip content={
            <div className="space-y-2">
              <p className="text-yellow-500 font-bold">[OOC]</p>
              <p className="text-green-400 text-xs">Tiradas de Investigacion para identificar vulnerabilidades.</p>
              <p className="text-green-400 text-xs mt-1">El informe ayudara a prevenir futuros ataques del mismo tipo.</p>
            </div>
          }>
            <span className="text-mint-400 text-xs cursor-help border-b border-mint-400 border-dashed">
              Ver informacion OOC
            </span>
          </Tooltip>
        </div>
      </div>

      <div className="bg-red-900/30 p-4 border border-red-600/50">
        <h4 className="text-red-400 font-bold text-sm mb-2">{'>>'} Protocolo de No Contacto</h4>
        <p className="text-green-600 text-xs">
          Esta terminantemente prohibido entablar cualquier tipo de comunicacion, negociacion o interaccion no autorizada con elementos enemigos a traves de canales ciberneticos, salvo orden directa de un superior.
        </p>
      </div>
    </div>
  )
}
