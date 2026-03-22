import React from 'react'

export default function RollTypeCard({ type, isSelected, onClick }) {
  const getColorClass = () => {
    switch (type.id) {
      case 'estado':
        return 'border-l-green-500'
      case 'gravedad':
        return 'border-l-red-500'
      case 'medicion':
        return 'border-l-yellow-500'
      default:
        return 'border-l-green-500'
    }
  }

  const getTitleColor = () => {
    switch (type.id) {
      case 'estado':
        return 'text-green-500'
      case 'gravedad':
        return 'text-red-400'
      case 'medicion':
        return 'text-yellow-400'
      default:
        return 'text-green-500'
    }
  }

  return (
    <div
      onClick={onClick}
      className={`
        bg-terminal-bg/50 p-4 border-l-4 cursor-pointer transition-all duration-150
        ${getColorClass()}
        ${isSelected ? 'bg-black/40 border border-border' : 'border border-transparent hover:border-green-900'}
      `}
    >
      <h3 className={`font-bold mb-2 ${getTitleColor()}`}>
        {'>>'} {type.name}
      </h3>
      <p className="text-green-500 text-sm mb-2">
        {type.description}
      </p>
      <p className="text-green-600 text-xs mb-2">
        {type.example}
      </p>
      <div className="text-green-700 text-xs">
        <span className="text-green-800">{'>'}</span>{'-'}> {type.successCondition}
      </div>
    </div>
  )
}
