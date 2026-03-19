import React from 'react'
import Page from '../../components/Page'

export default function Unidades() {
  return (
    <Page title="UNIDADES">
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
          {'>'} Registro de unidades roboticas bajo mando GAR.
        </p>

        <div style={{ paddingLeft: '24px' }}>
          <p style={{ color: '#00ff00', marginBottom: '12px' }}>
            {'>'} Unidades clasificadas:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, paddingLeft: '16px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>BX-Series Droid</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>DSD1 Dwarf Spider Droid</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>MTT Mobile Battle Tank</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>STAP</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Droideka</span>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  )
}
