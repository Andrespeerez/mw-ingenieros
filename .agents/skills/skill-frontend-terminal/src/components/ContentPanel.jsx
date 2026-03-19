import React from 'react'

export default function ContentPanel({contentKey}){
  const render = () => {
    switch(contentKey){
      case 'dashboard': return <div className="content">Dashboard content placeholder</div>
      case 'projects': return <div className="content">Projects content placeholder</div>
      case 'teams': return <div className="content">Teams content placeholder</div>
      case 'settings': return <div className="content">Settings content placeholder</div>
      default: return <div className="content">Select an item to load content</div>
    }
  }
  return (
    <main className="content-panel" aria-label="Content">
      {render()}
    </main>
  )
}
