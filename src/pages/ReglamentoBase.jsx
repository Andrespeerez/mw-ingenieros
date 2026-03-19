import React from 'react'
import Page from '../components/Page'

export default function ReglamentoBase() {
  return (
    <Page title="REGLAMENTO BASE">
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
          <span style={{ color: '#00aa00' }}>DOCUMENTO PENDIENTE</span>
        </div>

        <p style={{ marginBottom: '16px', paddingLeft: '24px', color: '#00aa00' }}>
          {'>'} Este modulo requiere documentacion oficial del estado mayor.
        </p>

        <div style={{ paddingLeft: '24px', marginBottom: '16px' }}>
          <p style={{ color: '#00ff00', marginBottom: '12px' }}>
            {'>'} Secciones planificadas:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, paddingLeft: '16px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Codigo de Conducta del Ingeniero Clonado</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Protocolos de Emergencia</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Jerarquia de Mando</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Regulaciones de Seguridad</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          padding: '16px',
          paddingLeft: '24px',
          borderLeft: '3px solid #00ff00',
          background: '#0d0d0d',
        }}
      >
        <span style={{ color: '#006600', fontSize: '12px' }}>
          {'>'} Use [ARROW KEYS] para navegar. [ENTER] para seleccionar.
        </span>
      </div>
    </Page>
  )
}
