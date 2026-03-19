import React from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'

const ProtectedRoute = () => {
  const { authenticated } = useAuth()
  const location = useLocation()
  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return <Outlet />
}

export default ProtectedRoute
