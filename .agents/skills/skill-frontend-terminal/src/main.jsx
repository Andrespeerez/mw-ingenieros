import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './App.jsx'
import './styles.css'

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<div>Login flow placeholder</div>} />
      <Route path="/app/*" element={<AppShell/>} />
      <Route path="*" element={<Navigate to="/app" />} />
    </Routes>
  </BrowserRouter>
)

createRoot(document.getElementById('root')).render(<Root />)
