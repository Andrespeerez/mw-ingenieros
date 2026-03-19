import React from 'react'

export default function Sidebar({onNavigate}){
  const items = [
    {id:'dashboard', label:'Dashboard'},
    {id:'projects', label:'Projects'},
    {id:'teams', label:'Teams'},
    {id:'settings', label:'Settings'},
  ]
  return (
    <aside className="sidebar">
      <div className="logo">STAR REPUBLIC DEV</div>
      <nav>
        {items.map(i => (
          <div key={i.id} className="sidebar-item" onClick={() => onNavigate(i.id)}>
            {i.label}
          </div>
        ))}
      </nav>
    </aside>
  )
}
