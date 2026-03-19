import React, { useEffect, useState } from 'react'
import Page from '../../components/Page'

// Utilities for Web Crypto (AES-GCM + RSA-OAEP)
const toBase64 = (buf) => {
  const bytes = new Uint8Array(buf)
  let binary = ''
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i])
  return typeof window !== 'undefined' ? btoa(binary) : Buffer.from(binary, 'binary').toString('base64')
}

const fromBase64 = (b64) => {
  const binary = typeof window !== 'undefined' ? atob(b64) : Buffer.from(b64, 'base64').toString('binary')
  const len = binary.length
  const bytes = new Uint8Array(len)
  for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i)
  return bytes.buffer
}

const _arrayBufferToString = (buf) => {
  const dec = new TextDecoder()
  return dec.decode(buf)
}

const _stringToArrayBuffer = (str) => {
  const enc = new TextEncoder()
  return enc.encode(str)
}

export default function Hackeo() {
  // Simple login modal state
  const [loginOpen, setLoginOpen] = useState(false)
  const [user, setUser] = useState(null)

  // Symmetric (AES-GCM) state
  const [aPassword, setAPassword] = useState('')
  const [aesPlain, setAesPlain] = useState('Hello world')
  const [aesCipher, setAesCipher] = useState('')
  const [aesIv, setAesIv] = useState('')
  const [aesSalt, setAesSalt] = useState('')

  // Asymmetric (RSA-OAEP) state
  const [rsaPair, setRsaPair] = useState(null)
  const [rsaPlain, setRsaPlain] = useState('Hello RSA')
  const [rsaCipher, setRsaCipher] = useState('')
  const [rsaDecoded, setRsaDecoded] = useState('')

  // Persist login
  useEffect(() => {
    const saved = localStorage.getItem('mw_user')
    if (saved) setUser(JSON.parse(saved))
  }, [])

  const login = async (username, password) => {
    if (!username || !password) return false
    const u = { name: username }
    setUser(u)
    localStorage.setItem('mw_user', JSON.stringify(u))
    setLoginOpen(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('mw_user')
  }

  // AES-GCM encryption/decryption
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

  // RSA-OAEP helpers
  const generateRSA = async () => {
    const pair = await crypto.subtle.generateKey({ name: 'RSA-OAEP', modulusLength: 2048, publicExponent: new Uint8Array([1,0,1]), hash: 'SHA-256' }, true, ['encrypt', 'decrypt'])
    setRsaPair(pair)
  }

  const exportPublicKeyPEM = async () => {
    if (!rsaPair?.publicKey) return ''
    const spki = await crypto.subtle.exportKey('spki', rsaPair.publicKey)
    const b64 = btoa(String.fromCharCode(...new Uint8Array(spki)))
    const lines = b64.match(/.{1,64}/g) || []
    return `-----BEGIN PUBLIC KEY-----\n${lines.join('\n')}\n-----END PUBLIC KEY-----`
  }

  const rsaEncrypt = async () => {
    if (!rsaPair?.publicKey) return
    const enc = new TextEncoder().encode(rsaPlain)
      const ct = await crypto.subtle.encrypt({ name: 'RSA-OAEP' }, rsaPair.publicKey, enc)
    setRsaCipher(btoa(String.fromCharCode(...new Uint8Array(ct))))
  }

  const rsaDecrypt = async () => {
    if (!rsaPair?.privateKey) return
    const data = new Uint8Array(fromBase64(rsaCipher))
    const pt = await crypto.subtle.decrypt({ name: 'RSA-OAEP' }, rsaPair.privateKey, data)
    setRsaDecoded(new TextDecoder().decode(pt))
  }

  // Render
  return (
    <Page title="HACKE0">
      <div
        style={{
          padding: '20px',
          background: '#0d0d0d',
          border: '1px solid #1a1a1a',
          marginBottom: '24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ color: '#00ff00' }}>{'>'}</span>
          <span style={{ color: '#ffcc00' }}>[INFO]</span>
          <span style={{ color: '#00aa00' }}>PENDIENTE DE CARGAR</span>
        </div>

        <p style={{ marginBottom: '16px', paddingLeft: '24px', color: '#00aa00' }}>
          {'>'} Herramientas y tecnicas de infiltracion digital.
        </p>

        <div style={{ paddingLeft: '24px' }}>
          <p style={{ color: '#00ff00', marginBottom: '12px' }}>
            {'>'} Herramientas disponibles:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, paddingLeft: '16px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Desactivacion de Droides</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Infiltracion de Redes Separatistas</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Extraccion de Datos</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Contrainteligencia</span>
            </li>
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href="#" onClick={(e)=>{e.preventDefault(); setLoginOpen(true);}} style={{ color: '#00ff00', textDecoration: 'underline' }}>Cerrar/Acceder</a>
          </div>
        </div>
      </div>

      {/* Login Button / Modal */}
      <div style={{ marginTop: 8 }}>
        {!user && (
          <div>
            <button onClick={()=>setLoginOpen(true)} style={{ padding: '8px 12px', border: '1px solid #00ff00', color: '#00ff00', background: 'transparent', borderRadius: 4, cursor: 'pointer' }}>
              Iniciar sesión para usar cifrado
            </button>
          </div>
        )}
        {user && (
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span style={{ color: '#00ff00' }}>Bienvenido, {user.name || user.name}</span>
            <button onClick={logout} style={{ padding: '6px 10px', border: '1px solid #00ff00', color: '#00ff00', background: 'transparent', borderRadius: 4 }}>Logout</button>
          </div>
        )}
      </div>

      {/* Login modal */}
      {loginOpen && (
        <div aria-label="Login modal" role="dialog" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }}>
          <div style={{ background: '#111', padding: 20, borderRadius: 8, width: 360, maxWidth: '90%', border: '1px solid #333' }}>
            <h3 style={{ color: '#00ff00', marginTop: 0 }}>Login</h3>
            <LoginForm onSubmit={(u,p)=>login(u,p)} onCancel={()=>setLoginOpen(false)} />
          </div>
        </div>
      )}

      {/* Encryption Playground (requires login) */}
      {user && (
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 20 }}>
          <div style={{ padding: 16, background: '#0d0d0d', border: '1px solid #1a1a1a' }}>
            <h4 style={{ color: '#00ff00' }}>AES-GCM (Symmetric)</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, alignItems: 'center' }}>
              <input placeholder="Password" value={aPassword} onChange={e=>setAPassword(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: 4, border: '1px solid #333', background: '#111', color: '#fff' }} />
              <button onClick={encryptAES} style={{ padding: '8px 12px', border: '1px solid #00ff00', color: '#00ff00', background: 'transparent', borderRadius: 4, cursor: 'pointer' }}>Encrypt</button>
            </div>
            <textarea rows={4} placeholder="Plaintext" value={aesPlain} onChange={e=>setAesPlain(e.target.value)} style={{ width: '100%', marginTop: 8, padding: 8, borderRadius: 4, border: '1px solid #333', background: '#111', color: '#fff' }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 8 }}>
              <input placeholder="IV (base64)" value={aesIv} onChange={e=>setAesIv(e.target.value)} style={{ width: '100%', padding: '6px', borderRadius: 4, border: '1px solid #333', background: '#111', color: '#fff' }} />
              <input placeholder="Salt (base64)" value={aesSalt} onChange={e=>setAesSalt(e.target.value)} style={{ width: '100%', padding: '6px', borderRadius: 4, border: '1px solid #333', background: '#111', color: '#fff' }} />
            </div>
            <textarea rows={2} placeholder="Ciphertext (base64)" value={aesCipher} onChange={e=>setAesCipher(e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #333', background: '#111', color: '#fff', marginTop: 8 }} />
            <button onClick={decryptAES} style={{ gridColumn: 'span 2', padding: '8px 12px', border: '1px solid #00ff00', color: '#00ff00', background: 'transparent', borderRadius: 4, cursor: 'pointer', marginTop: 4 }}>Decrypt</button>
          </div>
          <div style={{ padding: 16, background: '#0d0d0d', border: '1px solid #1a1a1a' }}>
            <h4 style={{ color: '#00ff00' }}>RSA-OAEP (Asymmetric)</h4>
            <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              <button onClick={generateRSA} style={{ padding: '8px 12px', border: '1px solid #00ff00', color: '#00ff00', background: 'transparent', borderRadius: 4 }}>Generate Key Pair</button>
              <button onClick={async ()=>{ const pem = await exportPublicKeyPEM(); alert(pem || 'No public key'); }} style={{ padding: '8px 12px', border: '1px solid #00ff00', color: '#00ff00', background: 'transparent', borderRadius: 4 }}>Export Public Key</button>
            </div>
            <textarea rows={2} placeholder="Plaintext" value={rsaPlain} onChange={e=>setRsaPlain(e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #333', background: '#111', color: '#fff' }} />
            <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
              <button onClick={rsaEncrypt} style={{ padding: '8px 12px', border: '1px solid #00ff00', color: '#00ff00', background: 'transparent', borderRadius: 4 }}>Encrypt</button>
              <button onClick={rsaDecrypt} style={{ padding: '8px 12px', border: '1px solid #00ff00', color: '#00ff00', background: 'transparent', borderRadius: 4 }}>Decrypt</button>
            </div>
            <textarea rows={2} placeholder="Ciphertext (base64)" value={rsaCipher} onChange={e=>setRsaCipher(e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #333', background: '#111', color: '#fff', marginTop: 6 }} />
            <textarea rows={2} placeholder="Decrypted plaintext" value={rsaDecoded} onChange={e=>setRsaDecoded(e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #333', background: '#111', color: '#fff', marginTop: 6 }} />
          </div>
        </section>
      )}
    </Page>
  )
}

// Simple login form component inside Hackeo.jsx
function LoginForm({ onSubmit, onCancel }) {
  const [u, setU] = useState('')
  const [p, setP] = useState('')
  return (
    <form onSubmit={(e)=>{e.preventDefault(); onSubmit?.(u,p);}}>
      <div style={{ marginBottom: 8 }}>
        <label>Usuario</label>
        <input value={u} onChange={e=>setU(e.target.value)} style={{ width: '100%', padding: 6, marginTop: 4 }} />
      </div>
      <div style={{ marginBottom: 8 }}>
        <label>Contraseña</label>
        <input type="password" value={p} onChange={e=>setP(e.target.value)} style={{ width: '100%', padding: 6, marginTop: 4 }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
        <button type="button" onClick={onCancel} style={{ padding: '6px 10px' }}>Cancelar</button>
        <button type="submit" style={{ padding: '6px 10px' }}>Login</button>
      </div>
    </form>
  )
}
