import React from 'react'
import Page from '../../components/Page'

export default function Protocolos() {
  return (
    <Page title="PROTOCOLOS">
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
          {'>'} Protocolos de activacion y control de unidades.
        </p>

        <div style={{ paddingLeft: '24px' }}>
          <p style={{ color: '#00ff00', marginBottom: '12px' }}>
            {'>'} Protocolos registrados:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, paddingLeft: '16px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Activacion en Cadena</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Desactivacion de Emergencia</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Modo Escuadron</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Autodestruccion Segura</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Reset de Factory</span>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  )
}
