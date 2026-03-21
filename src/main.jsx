import React from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import LoginScreen from './auth/LoginScreen'
import ProtectedRoute from './auth/ProtectedRoute'
import TerminalLayout from './components/TerminalLayout'
import ReglamentoBase from './pages/ReglamentoBase'
import ReparacionPiezas from './pages/MecanicaDeCampo/ReparacionPiezas'
import FichasTecnicasVehiculo from './pages/MecanicaDeCampo/FichasTecnicasVehiculo'
import ComsYCifrado from './pages/Ciberseguridad/ComsYCifrado'
import Hackeo from './pages/Ciberseguridad/Hackeo'
import Unidades from './pages/Robotica/Unidades'
import Protocolos from './pages/Robotica/Protocolos'
import RolPasivo from './pages/Ingenieria/RolPasivo'

const AppRouter = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route element={<ProtectedRoute />}> 
            <Route path="/" element={<TerminalLayout />}> 
              <Route index element={<ReglamentoBase />} />
              <Route path="reglamento-base" element={<ReglamentoBase />} />
              <Route path="mecanica-de-campo/reparacion-y-piezas" element={<ReparacionPiezas />} />
              <Route path="mecanica-de-campo/fichas-tecnicas-vehiculo" element={<FichasTecnicasVehiculo />} />
              <Route path="ciberseguridad/coms-y-cifrado" element={<ComsYCifrado />} />
              <Route path="ciberseguridad/hackeo" element={<Hackeo />} />
              <Route path="robotica/unidades" element={<Unidades />} />
              <Route path="robotica/protocolos" element={<Protocolos />} />
              <Route path="ingenieria/rol-pasivo" element={<RolPasivo />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<AppRouter />)
