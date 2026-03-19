import React from 'react'

export default function Page({ title, children }) {
  return (
    <div style={{ maxWidth: '900px' }}>
      <div
        style={{
          marginBottom: '32px',
          paddingBottom: '16px',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ color: '#00ff00', fontWeight: 'bold' }}>{'>'}</span>
          <h1
            style={{
              color: '#00ff00',
              fontSize: '18px',
              fontWeight: 'bold',
              letterSpacing: '1px',
            }}
          >
            {title}
          </h1>
        </div>
        <div style={{ paddingLeft: '24px', fontSize: '11px', color: '#006600' }}>
          {'//'} Modulo activo
        </div>
      </div>

      <div
        style={{
          fontSize: '13px',
          lineHeight: '1.7',
          color: '#00cc00',
        }}
      >
        {children}
      </div>
    </div>
  )
}
