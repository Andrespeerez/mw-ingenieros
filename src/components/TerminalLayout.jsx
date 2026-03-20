import React, { useEffect, useMemo, useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import menuConfig from '../data/menuConfig'
import { useAuth } from '../auth/AuthContext'

export default function TerminalLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  const { logout } = useAuth()

  const flatItems = useMemo(() => {
    const arr = []
    menuConfig.forEach((sec) => {
      sec.items.forEach((it) => arr.push(it))
    })
    return arr
  }, [])

  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const idx = flatItems.findIndex((it) => it.path === location.pathname)
    if (idx >= 0) setSelectedIndex(idx)
  }, [location.pathname, flatItems])

  useEffect(() => {
    const onKey = (e) => {
      if (location.pathname === '/login') return
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((n) => (n + 1) % flatItems.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((n) => (n - 1 + flatItems.length) % flatItems.length)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        const target = flatItems[selectedIndex]
        if (target) navigate(target.path)
      } else if (e.key === 'Escape') {
        // Only close sidebar on mobile when Escape is pressed
        if (window.innerWidth < 768) {
          setSidebarOpen(false)
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [flatItems, selectedIndex, navigate, location.pathname])

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="fixed inset-0 flex flex-col bg-black font-mono overflow-hidden">
      <header className="h-12 bg-panel border-b-2 border-green-500 flex items-center px-4 flex-shrink-0">
        {/* Hamburger button - only visible on mobile */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden mr-3 px-2 py-1 border border-green-500 text-green-500 bg-transparent cursor-pointer text-sm"
        >
          {sidebarOpen ? '[X]' : '[=]'}
        </button>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <span className="text-green-500 text-sm">{'>'} GRAN_EJERCITO_REPUBLICA</span>
            {/* Separator and version only visible on desktop */}
            <span className="hidden md:inline text-border">|</span>
            <span className="hidden md:inline text-green-700 text-xs">TERMINAL_INGENIEROS_MW_V2.4</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-green-700 text-xs">OPERADOR: CT-001</span>
            <button
              onClick={handleLogout}
              className="px-4 py-1 text-xs text-green-500 border border-green-500 bg-transparent cursor-pointer"
            >
              [SALIR]
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Desktop sidebar: always visible on md and up */}
        <aside className="hidden md:block w-72 h-full z-50 bg-transparent">
          <Sidebar
            items={menuConfig}
            currentIndex={selectedIndex}
            onNavigate={(index) => {
              setSelectedIndex(index)
              // Close mobile sidebar on navigation
              if (window.innerWidth < 768) setSidebarOpen(false)
            }}
          />
        </aside>

        {/* Mobile sidebar: overlay when opened via hamburger */}
        {sidebarOpen && (
          <>
            <div className="md:hidden fixed inset-0 bg-black/70 z-40" onClick={() => setSidebarOpen(false)} />
            <aside className="md:hidden fixed top-0 left-0 w-72 h-full bg-panel z-50 p-4">
              <Sidebar
                items={menuConfig}
                currentIndex={selectedIndex}
                onNavigate={(index) => {
                  setSelectedIndex(index)
                  if (window.innerWidth < 768) setSidebarOpen(false)
                }}
              />
            </aside>
          </>
        )}

        {/* Main content area */}
        <main className="flex-1 bg-black p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      <footer className="h-8 bg-panel border-t border-border flex items-center justify-between px-4 text-xs text-green-700 flex-shrink-0">
        <span>{'>'} ESTADO: OPERATIVO</span>
        <span>MEMORIA: 640K | SISTEMA: CLONE_OS_2.4</span>
        <span>SESION: ACTIVA</span>
      </footer>
    </div>
  )
}
