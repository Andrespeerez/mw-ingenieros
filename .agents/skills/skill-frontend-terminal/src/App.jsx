import React, { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import ContentPanel from './components/ContentPanel.jsx'
import LoginModal from './components/LoginModal.jsx'

export default function AppShell(){
  const [user, setUser] = useState(null)
  const [content, setContent] = useState('dashboard')
  const [showLogin, setShowLogin] = useState(false)

  // simple fake login
 const login = (u, p) => {
   if(p === 'republica') {
     setUser({name: u})
     setShowLogin(false)
   }
 }

  return (
    <div className="terminal-shell">
      {!user && (
        <div className="login-bar">
          <button onClick={() => setShowLogin(true)} className="btn">Login</button>
        </div>
      )}
      <div className="layout">
        <Sidebar onNavigate={setContent} />
        <ContentPanel contentKey={content} />
      </div>
      {showLogin && (
        <LoginModal onLogin={login} onClose={() => setShowLogin(false)} />
      )}
    </div>
  )
}
