import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('auth')
    if (saved === 'true') setAuthenticated(true)
  }, [])

  const login = (password) => {
    if (password === 'republica') {
      setAuthenticated(true)
      localStorage.setItem('auth', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setAuthenticated(false)
    localStorage.setItem('auth', 'false')
  }

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
