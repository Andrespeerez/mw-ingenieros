import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar({ items, currentIndex, onNavigate }) {
  const location = useLocation()
  let flatIndex = 0

  return (
    <aside className="w-72 h-full bg-panel border-r border-border flex flex-col flex-shrink-0 overflow-hidden">
      <div className="p-4 border-b border-border">
        <span className="text-green-500 text-xs tracking-widest">
          [ MENU PRINCIPAL ]
        </span>
      </div>

      <nav className="flex-1 overflow-auto p-3">
        {items.map((section, sIdx) => (
          <div key={sIdx} className="mb-4">
            <div className="p-2 text-[11px] text-green-700 font-bold tracking-wider">
              {'[ '}{section.section.toUpperCase()}{' ]'}
            </div>
            <ul className="list-none p-0 m-0">
              {section.items.map((it) => {
                const index = flatIndex++
                const isActive = location.pathname === it.path
                const isSelected = currentIndex === index

                return (
                  <li key={it.path} className="px-2">
                    <Link
                      to={it.path}
                      onClick={() => onNavigate(index)}
                      className={`flex items-center p-2.5 text-[13px] rounded transition-all duration-150 mb-1 ${isActive ? 'bg-green-500 text-black' : isSelected ? 'bg-green-900 text-white' : 'text-green-700 bg-transparent'}`}
                    >
                      <span className={`w-4 text-center font-bold text-sm ${isActive ? 'text-black' : 'text-green-500'}`}>
                        {isActive ? '>' : isSelected ? '_' : ' '}
                      </span>
                      <span className="ml-3">{it.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-3 text-[11px] text-green-700 border-t border-border">
        <div className="mb-1">{'//'} Navegacion:</div>
        <div className="flex gap-3">
          <span>[↑↓]</span>
          <span>[ENTER]</span>
        </div>
      </div>
    </aside>
  )
}
