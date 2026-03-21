import React, { useState } from 'react'
import Page from '../../components/Page'
import Accordion from '../../components/Accordion'
import CryptoIO from '../../components/CryptoIO'
import { 
  textToBinary, 
  binaryToText, 
  textToHex, 
  hexToText,
  textToUtf8Hex, 
  utf8HexToText,
  textToUtf16Hex, 
  utf16HexToText,
  textToBase64, 
  base64ToText,
  textToMorse,
  morseToText
} from '../../utils/cryptoUtils'
import { 
  vigenereEncrypt, 
  vigenereDecrypt,
  phalanxEncrypt,
  phalanxDecrypt
} from '../../utils/cipherUtils'

export default function ComsYCifrado() {
  const [activeTab, setActiveTab] = useState('info')

  const tabs = [
    { id: 'info', label: 'Info General' },
    { id: 'codificacion', label: 'Codificacion' },
    { id: 'encriptacion', label: 'Encriptacion' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return <InfoGeneral />
      case 'codificacion':
        return <Codificacion />
      case 'encriptacion':
        return <Encriptacion />
      default:
        return null
    }
  }

  return (
    <Page title="COMS Y CIFRADO">
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
          Las comunicaciones son el nervio central de cualquier operacion estrategica.
        </p>
        <p className="text-green-400 text-sm">
          Recuerda: el enemigo escucha, el enemigo intercepta, y si no ciframos bien nuestros mensajes, el enemigo vence.
        </p>
      </div>

      <div>
        <p className="text-green-500 text-sm mb-4">
          Necesitamos clones capaces de entender las comunicaciones de forma integral: el medio fisico de transmision, 
          los equipos de emision y recepcion, y la encodificacion del mensaje.
        </p>

        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} En este manual aprenderas a:</h3>
        <ul className="list-none ml-4 space-y-1">
          <li className="text-green-500 text-sm">-> Establecer lineas de comunicacion</li>
          <li className="text-green-500 text-sm">-> Codificar mensajes para evitar intercepciones</li>
          <li className="text-green-500 text-sm">-&GT; Detectar alteraciones o sellos rotos en transmisiones falsas</li>
          <li className="text-green-500 text-sm">-> Usar cifrados de nivel basico y avanzado</li>
        </ul>
      </div>

      <div>
        <h3 className="text-yellow-500 font-bold mb-3">{'>>'} Tipos de Transmision</h3>

        <div className="space-y-4">
          <div className="bg-terminal-bg/30 p-4 border border-green-900">
            <h4 className="text-green-400 font-bold mb-2">Transmision Por Comlinks</h4>
            <div className="grid grid-cols-2 gap-2 text-xs mb-3">
              <div><span className="text-yellow-500">Alcance:</span> <span className="text-green-500">50km</span></div>
              <div><span className="text-yellow-500">Medio:</span> <span className="text-green-500">Electromagnetico</span></div>
              <div><span className="text-yellow-500">Velocidad:</span> <span className="text-green-500">Luz</span></div>
              <div><span className="text-yellow-500">Precio:</span> <span className="text-green-500">Muy baratas</span></div>
            </div>
            <p className="text-green-600 text-xs mb-2">
              Solo se necesita un emisor y un receptor. Se usan dentro de un planeta o entre planeta y orbita.
            </p>
            <p className="text-green-600 text-xs">
              Todos los clones tenemos un ComLink en nuestros cascos. Pueden ser interferidas por emisiones electromagneticas.
            </p>
          </div>

          <div className="bg-terminal-bg/30 p-4 border border-green-900">
            <h4 className="text-green-400 font-bold mb-2">Transmision por Subespacio</h4>
            <div className="grid grid-cols-2 gap-2 text-xs mb-3">
              <div><span className="text-yellow-500">Alcance:</span> <span className="text-green-500">100 anos luz</span></div>
              <div><span className="text-yellow-500">Medio:</span> <span className="text-green-500">Subespacio</span></div>
              <div><span className="text-yellow-500">Velocidad:</span> <span className="text-green-500">Supraluz (casi instante)</span></div>
              <div><span className="text-yellow-500">Precio:</span> <span className="text-green-500">Medio</span></div>
            </div>
            <p className="text-green-600 text-xs mb-2">
              Emplea el subespacio para envios a velocidades superiores a la luz. Se pueden enviar senales a todo un sistema estelar instantaneamente.
            </p>
            <p className="text-green-600 text-xs">
              Requiere equipamiento mas avanzado: reles de subespacio y terminales mas complejos. Una red conecta toda la galaxia pero Naboo a Coruscant puede tardar 1 semana.
            </p>
          </div>

          <div className="bg-terminal-bg/30 p-4 border border-green-900">
            <h4 className="text-green-400 font-bold mb-2">Transmisiones por HoloNet</h4>
            <div className="grid grid-cols-2 gap-2 text-xs mb-3">
              <div><span className="text-yellow-500">Alcance:</span> <span className="text-green-500">Galaxia</span></div>
              <div><span className="text-yellow-500">Medio:</span> <span className="text-green-500">Hiperespacio</span></div>
              <div><span className="text-yellow-500">Velocidad:</span> <span className="text-green-500">Supraluz (casi instante)</span></div>
              <div><span className="text-yellow-500">Precio:</span> <span className="text-green-500">Alto</span></div>
            </div>
            <p className="text-green-600 text-xs mb-2">
              La forma de comunicacion mas rapida y segura. Comunicacion punto a punto, muy dificil de interceptar.
            </p>
            <p className="text-green-600 text-xs">
              Requiere mucha energia. Normalmente la HoloNet envia a Subespacio para abaratar costes. Naves de guerra y bases importantes tienen transceptor propio.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Codificacion() {
  return (
    <div className="space-y-6">
      <div className="bg-terminal-bg/50 p-4 border-l-2 border-green-500">
        <p className="text-green-400 text-sm mb-2">
          La codificacion transforma un mensaje en un formato estructurado para envio o interpretacion por sistemas electronicos.
        </p>
        <p className="text-green-600 text-xs">
          No confundas codificacion con encriptacion: un mensaje codificado lo puede leer cualquiera, uno encriptado necesita clave.
        </p>
      </div>

      <div className="space-y-2">
        <Accordion title="Binario">
          <div className="space-y-3">
            <p className="text-green-500 text-sm">
              El lenguaje fundamental de todas las computadoras. La informacion se almacena en 0 y 1 (bits), agrupados en bloques traducidos mediante un diccionario.
            </p>
            <CryptoIO
              encodeFn={textToBinary}
              decodeFn={binaryToText}
              placeholder="Escribe para convertir a binario..."
            />
          </div>
        </Accordion>

        <Accordion title="Hexadecimal">
          <div className="space-y-3">
            <p className="text-green-500 text-sm">
              Forma mas compacta de representar secuencias binarias. Usa 16 simbolos: 0-9 y a-f.
            </p>
            <div className="bg-black/50 p-3 border border-green-900 mb-3">
              <p className="text-yellow-500 text-xs mb-1">Referencia rapida:</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div><span className="text-green-500">0000</span> = <span className="text-green-400 font-mono">00</span></div>
                <div><span className="text-green-500">1111</span> = <span className="text-green-400 font-mono">FF</span></div>
                <div><span className="text-green-500">0001</span> = <span className="text-green-400 font-mono">01</span></div>
                <div><span className="text-green-500">1010</span> = <span className="text-green-400 font-mono">0A</span></div>
              </div>
            </div>
            <CryptoIO
              encodeFn={textToHex}
              decodeFn={hexToText}
              placeholder="Escribe para convertir a hexadecimal..."
            />
          </div>
        </Accordion>

        <Accordion title="UTF-8">
          <div className="space-y-3">
            <p className="text-green-500 text-sm">
              Codificacion de caracteres a bytes (8 bits). Caracteres comunes usan 1 byte, los menos frecuentes usan multiples bytes.
            </p>
            <p className="text-green-600 text-xs">
              Ventaja: eficiencia en almacenamiento para textos con caracteres ASCII. Compatible con UTF-8 original.
            </p>
            <CryptoIO
              encodeFn={textToUtf8Hex}
              decodeFn={utf8HexToText}
              placeholder="Escribe para convertir a UTF-8 hex..."
            />
          </div>
        </Accordion>

        <Accordion title="UTF-16">
          <div className="space-y-3">
            <p className="text-green-500 text-sm">
              Sistema de 16 bits con soporte para varios sistemas de escritura de la galaxia. Cada caracter se transforma a 16 bits.
            </p>
            <CryptoIO
              encodeFn={textToUtf16Hex}
              decodeFn={utf16HexToText}
              placeholder="Escribe para convertir a UTF-16 hex..."
            />
          </div>
        </Accordion>

        <Accordion title="Base64">
          <div className="space-y-3">
            <p className="text-green-500 text-sm">
              Convierte datos binarios en caracteres ASCII. Permite representar cualquier tipo de informacion binaria.
            </p>
            <div className="bg-black/50 p-3 border border-green-900 mb-3">
              <p className="text-yellow-500 text-xs mb-1">Casos de uso:</p>
              <ul className="text-green-600 text-xs space-y-1">
                <li>-> Transmisiones que no aceptan binario</li>
                <li>-> Enviar imagenes o documentos</li>
                <li>-> Representar texto en formato portable</li>
              </ul>
            </div>
            <CryptoIO
              encodeFn={textToBase64}
              decodeFn={base64ToText}
              placeholder="Escribe para codificar en Base64..."
            />
          </div>
        </Accordion>

        <Accordion title="Codigo Morse">
          <div className="space-y-3">
            <p className="text-green-500 text-sm">
              Sistema basado en puntos (.) y rayas (-). Sistema binario con diccionario propio.
            </p>
            <div className="bg-black/50 p-3 border border-green-900 mb-3">
              <p className="text-yellow-500 text-xs mb-1">Ejemplo:</p>
              <p className="text-green-400 text-lg mb-1">S O S</p>
              <p className="text-green-500 font-mono">... --- ...</p>
              <p className="text-green-600 text-xs mt-2">
                Palabras separadas con doble barra (//). Letras separadas con espacio.
              </p>
            </div>
            <CryptoIO
              encodeFn={textToMorse}
              decodeFn={morseToText}
              placeholder="Escribe para convertir a Morse..."
            />
          </div>
        </Accordion>
      </div>
    </div>
  )
}

function Encriptacion() {
  const handlePhalanxEncrypt = async (plaintext, key) => {
    if (!plaintext || !key) return { cipher: '', salt: '', iv: '' };
    try {
      return await phalanxEncrypt(plaintext, key);
    } catch (e) {
      return { cipher: 'Error: ' + e.message, salt: '', iv: '' };
    }
  };

  const handlePhalanxDecrypt = async (cipher, key, salt, iv) => {
    if (!cipher || !key || !salt || !iv) return 'Se requiere cipher, clave, salt e IV';
    try {
      return await phalanxDecrypt(cipher, key, salt, iv);
    } catch (e) {
      return 'Error: ' + e.message;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-terminal-bg/50 p-4 border-l-2 border-green-500">
        <p className="text-green-400 text-sm">
          Los mensajes encriptados aportan seguridad mediante una clave conocida solo por emisor y receptor.
          Dependiendo del sistema, la clave sera mas o menos segura.
        </p>
      </div>

      <div className="space-y-2">
        <Accordion title="VIG-9 [Sistema Vigenere]">
          <div className="space-y-3">
            <p className="text-green-500 text-sm">
              Metodo de codificacion que emplea una clave compartida para desplazar cada caracter. La clave se repite ciclicamente.
            </p>
            <p className="text-green-600 text-xs">
              Seguridad muy baja. Se pueden distinguir palabras y patrones para deducir la clave.
            </p>
            <CryptoIO
              encodeFn={(text, key) => vigenereEncrypt(text, key || 'republica')}
              decodeFn={(text, key) => vigenereDecrypt(text, key || 'republica')}
              decodeRequiresKey={true}
              keyLabel="Clave VIG-9"
              placeholder="Escribe el mensaje a cifrar..."
            />
          </div>
        </Accordion>

        <Accordion title="PHALANX-CORE [AES-GCM]">
          <div className="space-y-3">
            <p className="text-green-500 text-sm">
              Sistema avanzado de grado militar. Asegura confidencialidad, integridad y autenticidad.
            </p>
            <p className="text-green-600 text-xs">
              Si el enemigo modifica un solo bit del mensaje, se rompe el sello de autenticidad y se invalida.
            </p>
            <div className="bg-black/50 p-3 border border-green-900 mb-3 space-y-1">
              <p className="text-yellow-500 text-xs">Componentes:</p>
              <p className="text-green-600 text-xs"><span className="text-mint-400">Clave:</span> Compartida entre emisor y receptor</p>
              <p className="text-green-600 text-xs"><span className="text-mint-400">Nonce:</span> Unico por mensaje, generado automaticamente</p>
              <p className="text-green-600 text-xs"><span className="text-mint-400">Tag:</span> Verifica integridad, detecta manipulacion</p>
            </div>
            <CryptoIO
              encodeFn={handlePhalanxEncrypt}
              decodeFn={handlePhalanxDecrypt}
              decodeRequiresKey={true}
              keyLabel="Clave PHALANX-CORE"
              placeholder="Escribe el mensaje a cifrar..."
              isAsync={true}
              showDecryptFields={true}
            />
          </div>
        </Accordion>

        <Accordion title="Mensajes Enemigos - KARD-52">
          <div className="space-y-3">
            <p className="text-green-500 text-sm">
              El enemigo emplea sus propios sistemas de codificacion y encriptacion. Es un area de investigacion activa.
            </p>
            <div className="bg-red-900/30 p-3 border border-red-600/50">
              <p className="text-yellow-500 text-xs mb-2">Sistema de Encriptacion Enemiga: KARD-52</p>
              <p className="text-green-600 text-xs">
                Desencriptar KARD-52 es practicamente imposible sin acceso a:
              </p>
              <ul className="text-green-600 text-xs mt-2 space-y-1">
                <li>-> Diccionarios (rotores) exactos del enemigo</li>
                <li>-> Configuracion de bloques</li>
                <li>-> Patron de transposiciones</li>
                <li>-> Clave de encriptacion</li>
              </ul>
            </div>
            <div className="bg-yellow-900/30 p-3 border border-yellow-600/50">
              <p className="text-yellow-400 text-xs">
                Solicita apoyo a Inteligencia o la Flota ante cualquier intercepcion de comunicaciones KARD-52.
              </p>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  )
}
