import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function LoginScreen() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!password) return
    setLoading(true)
    setError(null)
    const ok = login(password)
    if (ok) {
      navigate('/')
    } else {
      setError('CREDENCIALES INVALIDAS')
      setLoading(false)
      setPassword('')
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0a0a0a',
        fontFamily: 'Courier New, Courier, monospace',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          background: '#050505',
          border: '1px solid #1a1a1a',
        }}
      >
        <div
          style={{
            padding: '16px 24px',
            background: '#111111',
            borderBottom: '1px solid #1a1a1a',
          }}
        >
          <span style={{ color: '#00ff00', fontSize: '12px' }}>
            {'>'} GAR-SECURE-TERMINAL
          </span>
        </div>

        <div style={{ padding: '32px' }}>
          <div style={{ marginBottom: '32px', color: '#00aa00', fontSize: '12px' }}>
            <div style={{ marginBottom: '4px' }}>GAR SECURITY TERMINAL v2.4.1</div>
            <div style={{ marginBottom: '8px' }}>==============================</div>
            <div style={{ marginBottom: '4px', color: '#006600' }}>INICIALIZANDO SISTEMA... [OK]</div>
            <div style={{ marginBottom: '4px', color: '#006600' }}>CARGANDO MODULOS... [OK]</div>
            <div style={{ marginBottom: '4px', color: '#006600' }}>VERIFICANDO CREDENCIALES... [OK]</div>
            <div style={{ marginTop: '16px', color: '#00ff00' }}>ACCESO RESTRINGIDO</div>
            <div style={{ marginTop: '8px' }}>INGRESE PASSWORD:</div>
          </div>

          {error && (
            <div
              style={{
                marginBottom: '16px',
                padding: '12px',
                background: '#1a0000',
                border: '1px solid #330000',
                color: '#ff4444',
                fontSize: '12px',
              }}
            >
              {'[ERROR]'} {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <span style={{ color: '#00ff00' }}>{'>'}</span>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setError(null)
                }}
                style={{
                  flex: 1,
                  background: 'transparent',
                  color: '#00ff00',
                  border: 'none',
                  borderBottom: '1px solid #00ff00',
                  padding: '8px 0',
                  fontSize: '14px',
                  outline: 'none',
                  fontFamily: 'Courier New, Courier, monospace',
                }}
                disabled={loading}
                autoFocus
              />
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button
                type="submit"
                disabled={loading || !password}
                style={{
                  flex: 1,
                  padding: '12px 24px',
                  color: '#00ff00',
                  border: '1px solid #00ff00',
                  background: 'transparent',
                  fontSize: '12px',
                  cursor: loading || !password ? 'not-allowed' : 'pointer',
                  opacity: loading || !password ? 0.5 : 1,
                  fontFamily: 'Courier New, Courier, monospace',
                }}
              >
                {loading ? 'VERIFICANDO...' : '[ENTER] ACCEDER'}
              </button>
              <button
                type="button"
                onClick={() => setPassword('')}
                style={{
                  padding: '12px 24px',
                  color: '#006600',
                  border: '1px solid #006600',
                  background: 'transparent',
                  fontSize: '12px',
                  cursor: 'pointer',
                  fontFamily: 'Courier New, Courier, monospace',
                }}
              >
                [LIMPIAR]
              </button>
            </div>
          </form>
        </div>

        <div
          style={{
            padding: '12px 24px',
            background: '#0d0d0d',
            borderTop: '1px solid #1a1a1a',
            fontSize: '11px',
            color: '#006600',
          }}
        >
          <span>GRAN_EJERCITO_REPUBLICA</span>
          <span style={{ marginLeft: '24px' }}>|</span>
          <span style={{ marginLeft: '24px' }}>CLONE_REGIMENT</span>
          <span style={{ marginLeft: '24px' }}>|</span>
          <span style={{ marginLeft: '24px' }}>EST. 22_ABBY</span>
        </div>
      </div>
    </div>
  )
}
