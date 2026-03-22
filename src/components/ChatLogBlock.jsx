import React from 'react'

export default function ChatLogBlock({ lines }) {
  return (
    <div className="bg-black/30 border border-green-900/50 p-3 font-mono text-sm">
      {lines.map((line, index) => (
        <div key={index} className="mb-1">
          {line.type === 'me' && (
            <div className="text-green-400">
              <span className="text-green-500">{'>'}</span> {line.text}
            </div>
          )}
          {line.type === 'roll' && (
            <div className="text-green-500">
              <span className="text-green-600">{'>'}{'>'}</span>{' '}
              <span className="text-yellow-400">DADO ({line.value})</span>
            </div>
          )}
          {line.type === 'do' && (
            <div className="text-green-700">
              <span className="text-green-800">{'>'}</span>{'-'} {line.text}
            </div>
          )}
          {line.type === 'comment' && (
            <div className="text-green-700 ml-4">
              {'//'} {line.text}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
