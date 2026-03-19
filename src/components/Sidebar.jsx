import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar({ items, currentIndex, onNavigate }) {
  const location = useLocation()
  let flatIndex = 0

  return (
    <aside
      style={{
        width: '280px',
        height: '100%',
        background: '#0d0d0d',
        borderRight: '1px solid #1a1a1a',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '16px',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        <span
          style={{
            color: '#00ff00',
            fontSize: '12px',
            letterSpacing: '2px',
          }}
        >
          [ MENU PRINCIPAL ]
        </span>
      </div>

      <nav
        style={{
          flex: 1,
          overflow: 'auto',
          padding: '12px 0',
        }}
      >
        {items.map((section, sIdx) => (
          <div key={sIdx} style={{ marginBottom: '16px' }}>
            <div
              style={{
                padding: '8px 16px',
                fontSize: '11px',
                color: '#00aa00',
                fontWeight: 'bold',
                letterSpacing: '1px',
              }}
            >
              {'[ '}{section.section.toUpperCase()}{' ]'}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {section.items.map((it) => {
                const index = flatIndex++
                const isActive = location.pathname === it.path
                const isSelected = currentIndex === index

                return (
                  <li key={it.path} style={{ padding: '0 8px' }}>
                    <Link
                      to={it.path}
                      onClick={() => onNavigate(index)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px 12px',
                        fontSize: '13px',
                        color: isActive ? '#000000' : isSelected ? '#ffffff' : '#00cc00',
                        background: isActive ? '#00ff00' : isSelected ? '#1a2a1a' : 'transparent',
                        textDecoration: 'none',
                        borderRadius: '2px',
                        marginBottom: '4px',
                        transition: 'all 0.15s',
                      }}
                    >
                      <span
                        style={{
                          width: '16px',
                          textAlign: 'center',
                          color: isActive ? '#000000' : '#00ff00',
                          fontWeight: 'bold',
                          fontSize: '14px',
                        }}
                      >
                        {isActive ? '>' : isSelected ? '_' : ' '}
                      </span>
                      <span style={{ marginLeft: '12px' }}>{it.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div
        style={{
          padding: '12px 16px',
          fontSize: '11px',
          color: '#006600',
          borderTop: '1px solid #1a1a1a',
        }}
      >
        <div style={{ marginBottom: '4px' }}>{'//'} Navegacion:</div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <span>[↑↓]</span>
          <span>[ENTER]</span>
        </div>
      </div>
    </aside>
  )
}
