import React, { useState } from 'react'

export default function LoginModal({onLogin, onClose}){
  const [user,setUser] = useState('')
  const [pass,setPass] = useState('')
  const submit = () => {
    onLogin(user, pass)
  }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Login VIP</h3>
        <input placeholder="Usuario" value={user} onChange={e=>setUser(e.target.value)} />
        <input placeholder="Contraseña" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
        <div className="modal-actions">
          <button onClick={submit} className="btn">Entrar</button>
          <button onClick={onClose} className="btn secondary">Cerrar</button>
        </div>
        <p className="hint">Contraseña republica (no segura, solo para UX)</p>
      </div>
    </div>
  )
}
