import React from 'react'
import Page from '../../components/Page'

export default function FichasTecnicasVehiculo() {
  return (
    <Page title="FICHAS TECNICAS VEHICULO">
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
          {'>'} Base de datos de fichas tecnicas para vehiculos de combate.
        </p>

        <div style={{ paddingLeft: '24px' }}>
          <p style={{ color: '#00ff00', marginBottom: '12px' }}>
            {'>'} Vehiculos en base de datos:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, paddingLeft: '16px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>TX-130 Campo de Batalla</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>Hailfire Droid</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>AT-TE Walker</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>AT-RT</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ color: '#00ff00' }}>{'->'}</span>
              <span style={{ color: '#00cc00' }}>SPHA-T</span>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  )
}
