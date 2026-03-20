import React, { useState, useEffect } from 'react'
import EnigmaSimplificado from '../../components/EnigmaSimplificado'
import Page from '../../components/Page'

export default function ComsYCifrado() {
  const [aPassword, setAPassword] = useState('')
  const [aesPlain, setAesPlain] = useState('Hello world')
  const [aesCipher, setAesCipher] = useState('')
  const [aesIv, setAesIv] = useState('')
  const [aesSalt, setAesSalt] = useState('')

  const [rsaPair, setRsaPair] = useState(null)
  const [rsaPlain, setRsaPlain] = useState('Hello RSA')
  const [rsaCipher, setRsaCipher] = useState('')
  const [rsaDecoded, setRsaDecoded] = useState('')

  const [recipientPublicKeyPEM, setRecipientPublicKeyPEM] = useState('')
  const [recipientPublicKey, setRecipientPublicKey] = useState(null)
  const [publicKeyPem, setPublicKeyPem] = useState('')
  const [privateKeyPem, setPrivateKeyPem] = useState('')
  
  const [openSection, setOpenSection] = useState('simetrico')

  const AccordionItem = ({ title, id, children }) => (
    <div className="border border-border mb-4 bg-panel">
      <button
        onClick={() => setOpenSection(openSection === id ? null : id)}
        className="w-full text-left p-4 flex justify-between items-center text-green-500 hover:bg-black/20"
      >
        <span className="font-bold">{title}</span>
        <span>{openSection === id ? '[-]' : '[+]'}</span>
      </button>
      {openSection === id && <div className="p-4 border-t border-border">{children}</div>}
    </div>
  )

  const fromBase64 = (b64) => {
    const binary = typeof window !== 'undefined' ? atob(b64) : Buffer.from(b64, 'base64').toString('binary')
    const len = binary.length
    const bytes = new Uint8Array(len)
    for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i)
    return bytes.buffer
  }

  const importRecipientPublicKeyFromPEM = async (pem) => {
    const pemLines = pem.replace(/-----BEGIN PUBLIC KEY-----|-----END PUBLIC KEY-----|\n|\r/g, '').trim()
    const binary = atob(pemLines)
    const bytes = new Uint8Array(binary.split('').map(ch => ch.charCodeAt(0)))
    const key = await crypto.subtle.importKey('spki', bytes, { name: 'RSA-OAEP', hash: 'SHA-256' }, false, ['encrypt'])
    setRecipientPublicKey(key)
    setRecipientPublicKeyPEM(pem)
  }

  const exportPrivateKeyPEM = async () => {
    if (!rsaPair?.privateKey) return ''
    const pkcs8 = await crypto.subtle.exportKey('pkcs8', rsaPair.privateKey)
    const b64 = btoa(String.fromCharCode(...new Uint8Array(pkcs8)))
    const lines = b64.match(/.{1,64}/g) || []
    return `-----BEGIN PRIVATE KEY-----\n${lines.join('\n')}\n-----END PRIVATE KEY-----`
  }

  const exportPublicKeyPEM = async () => {
    if (!rsaPair?.publicKey) return ''
    const spki = await crypto.subtle.exportKey('spki', rsaPair.publicKey)
    const b64 = btoa(String.fromCharCode(...new Uint8Array(spki)))
    const lines = b64.match(/.{1,64}/g) || []
    return `-----BEGIN PUBLIC KEY-----\n${lines.join('\n')}\n-----END PUBLIC KEY-----`
  }

  useEffect(() => {
    let cancelled = false
    const loadKeys = async () => {
      try {
        if (rsaPair && rsaPair.publicKey) {
          const pem = await exportPublicKeyPEM()
          if (!cancelled) setPublicKeyPem(pem)
        }
        if (rsaPair && rsaPair.privateKey) {
          const pem = await exportPrivateKeyPEM()
          if (!cancelled) setPrivateKeyPem(pem)
        }
      } catch (err) {
        console.error(err)
      }
    }
    loadKeys()
    return () => { cancelled = true }
  }, [rsaPair])

  const encryptAES = async () => {
    try {
      const salt = crypto.getRandomValues(new Uint8Array(16))
      const iv = crypto.getRandomValues(new Uint8Array(12))
      const keyMaterial = await crypto.subtle.importKey('raw', new TextEncoder().encode(aPassword), 'PBKDF2', false, ['deriveKey'])
      const key = await crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt']
      )
      const encoded = new TextEncoder().encode(aesPlain)
      const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoded)
      const ctBytes = new Uint8Array(ct)
      const ctB64 = btoa(String.fromCharCode(...ctBytes))
      setAesCipher(ctB64)
      setAesIv(btoa(String.fromCharCode(...iv)))
      setAesSalt(btoa(String.fromCharCode(...salt)))
    } catch (e) {
      console.error(e)
    }
  }
  const decryptAES = async () => {
    try {
      const salt = new Uint8Array(fromBase64(aesSalt))
      const iv = new Uint8Array(fromBase64(aesIv))
      const keyMaterial = await crypto.subtle.importKey('raw', new TextEncoder().encode(aPassword), 'PBKDF2', false, ['deriveKey'])
      const key = await crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt']
      )
      const ct = new Uint8Array(fromBase64(aesCipher))
      const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct)
      const text = new TextDecoder().decode(pt)
      setAesPlain(text)
    } catch (e) {
      console.error(e)
    }
  }

  const generateRSA = async () => {
    const pair = await crypto.subtle.generateKey({ name: 'RSA-OAEP', modulusLength: 2048, publicExponent: new Uint8Array([1,0,1]), hash: 'SHA-256' }, true, ['encrypt', 'decrypt'])
    setRsaPair(pair)
  }
  
  const rsaEncrypt = async () => {
    const key = recipientPublicKey || rsaPair?.publicKey
    if (!key) return
    const enc = new TextEncoder().encode(rsaPlain)
    const ct = await crypto.subtle.encrypt({ name: 'RSA-OAEP' }, key, enc)
    setRsaCipher(btoa(String.fromCharCode(...new Uint8Array(ct))))
  }
  const rsaDecrypt = async () => {
    if (!rsaPair?.privateKey) return
    const data = new Uint8Array(fromBase64(rsaCipher))
    const pt = await crypto.subtle.decrypt({ name: 'RSA-OAEP' }, rsaPair.privateKey, data)
    setRsaDecoded(new TextDecoder().decode(pt))
  }

  return (
    <Page title="COMS Y CIFRADO">
      
      {/* BLOQUE 1: CIFRADO SIMÉTRICO - AES-GCM */}
      <AccordionItem title="[ CIFRADO SIMÉTRICO - AES-GCM ]" id="simetrico">
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-green-500">Contraseña</label>
            <input placeholder="Password" value={aPassword} onChange={e=>setAPassword(e.target.value)} className="w-full p-2 bg-black text-text border border-border" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-green-500">Texto Plano</label>
            <textarea rows={3} placeholder="Plaintext" value={aesPlain} onChange={e=>setAesPlain(e.target.value)} className="w-full p-2 bg-black text-text border border-border" />
          </div>
          <div className="flex gap-2">
            <button onClick={encryptAES} className="px-3 py-1 border border-green-500 text-green-500 rounded">Encrypt</button>
            <button onClick={decryptAES} className="px-3 py-1 border border-green-500 text-green-500 rounded">Decrypt</button>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-green-500">Texto Cifrado</label>
            <textarea rows={2} placeholder="Ciphertext" value={aesCipher} readOnly className="w-full p-2 bg-black text-text border border-border" />
          </div>
        </div>
      </AccordionItem>

      {/* BLOQUE 2: CIFRADO ASIMÉTRICO - RSA-OAEP */}
      <AccordionItem title="[ CIFRADO ASIMÉTRICO - RSA-OAEP ]" id="asimetrico">
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-green-500">Texto Plano</label>
            <textarea rows={3} placeholder="Plaintext" value={rsaPlain} onChange={e=>setRsaPlain(e.target.value)} className="w-full p-2 bg-black text-text border border-border" />
          </div>
          <div className="flex gap-2">
            <button onClick={rsaEncrypt} className="px-3 py-1 border border-green-500 text-green-500 rounded">Encrypt</button>
            <button onClick={rsaDecrypt} className="px-3 py-1 border border-green-500 text-green-500 rounded">Decrypt</button>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-green-500">Texto Cifrado</label>
            <textarea rows={2} placeholder="Ciphertext" value={rsaCipher} readOnly className="w-full p-2 bg-black text-text border border-border" />
          </div>
        </div>
      </AccordionItem>

      {/* BLOQUE 3: GESTIÓN DE CLAVES RSA */}
      <AccordionItem title="[ GESTIÓN DE CLAVES RSA ]" id="claves">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-green-500">Public Key PEM</label>
              <textarea rows={4} value={publicKeyPem} onChange={e=>setPublicKeyPem(e.target.value)} className="w-full bg-black text-text border border-border p-2" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-green-500">Private Key PEM</label>
              <textarea rows={4} value={privateKeyPem} onChange={e=>setPrivateKeyPem(e.target.value)} className="w-full bg-black text-text border border-border p-2" />
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={generateRSA} className="px-3 py-1 border border-green-500 text-green-500 rounded">Generar Par de Claves</button>
          </div>
          
          <div className="pt-4 border-t border-border">
            <label className="text-green-500">Clave Pública Destinatario</label>
            <textarea rows={4} value={recipientPublicKeyPEM} onChange={e=>setRecipientPublicKeyPEM(e.target.value)} className="w-full bg-black text-text border border-border p-2 mt-1" />
            <button onClick={()=>importRecipientPublicKeyFromPEM(recipientPublicKeyPEM)} className="mt-2 px-3 py-1 border border-green-500 text-green-500 rounded">Cargar Destinatario</button>
          </div>
        </div>
      </AccordionItem>

      {/* BLOQUE 4: CIFRADO ENIGMA */}
      <AccordionItem title="[ CIFRADO ENIGMA ]" id="enigma">
        <EnigmaSimplificado />
      </AccordionItem>

    </Page>
  )
}
