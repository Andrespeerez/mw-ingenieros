import React, { useMemo, useState } from 'react'

// Port of a simplified Enigma-like cipher to JS/React

// Alphabet including Spanish characters
const ABECEDARIO_ENIGMA = "AÁBCDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZaábcdeéfghiíjklmnñoópqrstuúüvwxyz"
const ALFABETO_LEN = ABECEDARIO_ENIGMA.length

// Default rotors (66 chars each) copied from Python example
const ROTOR_R1_STR = "LtWBXioíÜzbleYycáIGuHNVRCógÁJÉxdPrqmÓUéaZnQüOpñMhfFÍKEvSÚwDjAksúÑT"
const ROTOR_R2_STR = "SbüADKEZÁhJePwLyRúVCÉifÚjWMxUuÍrGsgóQvdñYNBzÑmFInátOqXkaloTcÓpíéÜH"
const ROTOR_R3_STR = "rSxPÉOÁYBIúCyQqaXZÚHpWFGóütlgeÍboÓTfsumLñVMiEéUáJíhDÜvnNAÑRczdwKkj"
const ROTOR_R4_STR = "jnPWCZBlFaJLtIñyHONrhpívÓkidÍUGbÜÑRéEámeuÁcózÚxDYXQfúwqMTsSAüoÉKgV"
const ROTOR_R5_STR = "vhRFÉdgstÑéeGmpüúMbñJAEqóCaULÍOYyiwNoÓHrÁncWSTÚKBlZáÜVxDIzkPQufXíj"

// Block structure and transposition
const BLOCK_SIZE = 5
const TRANSPOSITION_KEY_ORDER_STR = "0, 2, 1, 3, 4"

// Rotor mapping char to rotor name
const ROTOR_MAPPING_KEY_CHARS = {
  'A': 'R1','B':'R2','C':'R3','D':'R4','E':'R5','F':'R1','G':'R2','H':'R3','I':'R4','J':'R5','K':'R1','L':'R2','M':'R3','N':'R4','Ñ':'R5','O':'R1','P':'R2','Q':'R3','R':'R4','S':'R5','T':'R1','U':'R2','V':'R3','W':'R4','X':'R5','Y':'R1','Z':'R2','Á':'R3','É':'R4','Í':'R5','Ó':'R1','Ú':'R2','Ü':'R3','a':'R4','á':'R5','b':'R1','c':'R2','d':'R3','e':'R4','é':'R5','f':'R1','g':'R2','h':'R3','i':'R4','í':'R5','j':'R1','k':'R2','l':'R3','m':'R4','n':'R5','ñ':'R1','o':'R2','ó':'R3','p':'R4','q':'R5','r':'R1','s':'R2','t':'R3','u':'R4','ú':'R5','ü':'R1','v':'R2','w':'R3','x':'R4','y':'R5','z':'R1',',':'R2',';':'R3','!':'R4','?':'R5','¿':'R1','¡':'R2',':':'R3','(':'R4',')':'R5','-':'R1','%':'R2',' ':'R3'
}

// Build rotor maps
const ROTORS = {
  R1: ROTOR_R1_STR,
  R2: ROTOR_R2_STR,
  R3: ROTOR_R3_STR,
  R4: ROTOR_R4_STR,
  R5: ROTOR_R5_STR,
}

function buildRotorMaps() {
  const ROTORS_MAPS = {}
  const INVERSE_ROTORS_MAPS = {}
  for (const [name, seq] of Object.entries(ROTORS)) {
    ROTORS_MAPS[name] = {}
    INVERSE_ROTORS_MAPS[name] = {}
    for (let i = 0; i < ALFABETO_LEN; i++) {
      const a = ABECEDARIO_ENIGMA[i]
      const b = seq[i]
      ROTORS_MAPS[name][a] = b
      INVERSE_ROTORS_MAPS[name][b] = a
    }
  }
  return { ROTORS_MAPS, INVERSE_ROTORS_MAPS }
}

function encodeEnigmaSimplified(message, rotor_key_base, transposition_key_order, block_size) {
  if (transposition_key_order.length !== block_size || JSON.stringify(transposition_key_order) !== JSON.stringify([...transposition_key_order].sort((a,b)=>a-b))) {
    // simple validation: must be a permutation
    // We'll still attempt, but better to throw in strict mode
  }

  const { ROTORS_MAPS, INVERSE_ROTORS_MAPS } = buildRotorMaps()
  const rotor_sequence_names = []
  for (const ch of rotor_key_base.toUpperCase()) {
    if (ch in ROTOR_MAPPING_KEY_CHARS) {
      const rotor_name = ROTOR_MAPPING_KEY_CHARS[ch]
      if (rotor_name in ROTORS_MAPS) rotor_sequence_names.push(rotor_name)
    }
  }
  if (!rotor_sequence_names.length) {
    throw new Error('La clave del rotor no generó una secuencia de rotores válida.')
  }
  const full_rotor_sequence_names = Array.from({ length: message.length }, (_, i) => rotor_sequence_names[i % rotor_sequence_names.length])
  let substituted = []
  for (let i = 0; i < message.length; i++) {
    const ch = message[i]
    if (ABECEDARIO_ENIGMA.includes(ch)) {
      const rotor = full_rotor_sequence_names[i]
      substituted.push(ROTORS_MAPS[rotor][ch])
    } else {
      substituted.push(ch)
    }
  }
  let text = substituted.join('')
  // padding
  const padding_needed = (block_size - (text.length % block_size)) % block_size
  if (padding_needed > 0) {
    text += 'Φ'.repeat(padding_needed)
  }
  // transposition
  const blocks = []
  for (let i = 0; i < text.length; i += block_size) {
    const block = text.slice(i, i + block_size).split('')
    const transposed = new Array(block_size).fill('')
    for (let j = 0; j < block_size; j++) {
      const toIndex = transposition_key_order[j]
      transposed[toIndex] = block[j]
    }
    blocks.push(...transposed)
  }
  return blocks.join('')
}

export default function EnigmaSimplificado() {
  const [mensajeOriginal, setMensajeOriginal] = useState('HELLO WORLD')
  const [claveRotor, setClaveRotor] = useState('PRUEBA')
  const [blockSize, setBlockSize] = useState(BLOCK_SIZE)
  const [transpositionOrder, setTranspositionOrder] = useState(TRANSPOSITION_KEY_ORDER_STR.split(',').map(s => parseInt(s.trim())))
  const [resultado, setResultado] = useState('')

  const onCodificar = () => {
    try {
      const out = encodeEnigmaSimplified(mensajeOriginal, claveRotor, transpositionOrder, blockSize)
      setResultado(out)
    } catch (e) {
      setResultado(`Error: ${e.message}`)
    }
  }

  return (
    <div className="border border-border p-3 rounded-md mt-4">
      <h3 className="m-0 text-green-500">Enigma Simplificada (portación)</h3>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <textarea rows={3} placeholder="Mensaje original" value={mensajeOriginal} onChange={e=>setMensajeOriginal(e.target.value)} className="w-full bg-panel text-text border border-border" />
        <input placeholder="Clave rotor" value={claveRotor} onChange={e=>setClaveRotor(e.target.value)} className="w-full p-1.5 bg-panel text-text border border-border" />
      </div>
      <div className="grid grid-cols-5 gap-1.5 mt-2">
        {[...Array(5)].map((_,i)=>(
          <input key={i} placeholder={`R${i+1} (66 chars)`} defaultValue={ROTOR_R1_STR} disabled className="w-full p-1.5 bg-panel text-text border border-border" />
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <button onClick={onCodificar} className="px-3 py-1.5 border border-green-500 text-green-500 bg-transparent rounded">Encode</button>
      </div>
      <div className="mt-2">
        <strong>Resultado:</strong>
        <pre className="whitespace-pre-wrap bg-panel p-2 text-text">{resultado}</pre>
      </div>
    </div>
  )
}
