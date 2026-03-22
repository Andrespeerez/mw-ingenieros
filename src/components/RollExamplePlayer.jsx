'use client'
import React, { useState, useEffect, useCallback } from 'react'
import ChatLogBlock from './ChatLogBlock'
import { examples } from '../data/rolesPasivos'

function TreeVisualizer({ tree, currentPath, onNodeClick }) {
  const renderNode = (nodeId, depth = 0, path = []) => {
    const node = tree.steps[nodeId]
    if (!node) return null
    
    const currentNodeId = path[path.length - 1]
    const isInPath = path.includes(nodeId)
    const isCurrent = currentNodeId === nodeId
    
    return (
      <div key={nodeId} className={`relative ${depth > 0 ? 'ml-6 pl-4 border-l border-green-800' : ''}`}>
        <div 
          className={`
            p-2 mb-1 rounded cursor-pointer transition-all
            ${isCurrent ? 'bg-green-800 border border-green-500' : ''}
            ${isInPath && !isCurrent ? 'bg-green-900/50 border border-green-700' : ''}
            ${!isInPath ? 'hover:bg-green-900/30' : ''}
          `}
          onClick={() => onNodeClick(nodeId)}
        >
          <span className="text-green-400 text-sm font-mono">
            {isCurrent && '> '}{node.label}
          </span>
          {node.isTerminal && (
            <span className="ml-2 text-xs text-yellow-500">[FINAL]</span>
          )}
          {!node.isTerminal && node.rollType && (
            <span className="ml-2 text-xs text-cyan-400">[{node.rollType}]</span>
          )}
        </div>
        
        {isInPath && node.outcomes && (
          <div className="mt-1 ml-2">
            <div className="text-green-600 text-xs mb-1">Ramas disponibles:</div>
            {node.outcomes.map((outcome, idx) => (
              <div key={idx} className="text-green-500 text-xs mb-1">
                <span className="text-yellow-500">[{idx + 1}]</span> {outcome.note.substring(0, 60)}...
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-black/50 p-4 border border-green-900 rounded mb-4">
      <div className="text-yellow-500 text-xs mb-3">{'>'} VISUALIZADOR DE ÁRBOL</div>
      <div className="space-y-1">
        {renderNode(tree.entryPoint, 0, currentPath)}
        {currentPath.slice(0, -1).map((nodeId, idx) => (
          <div key={nodeId} className="ml-6">
            {renderNode(nodeId, idx + 1, currentPath)}
          </div>
        ))}
      </div>
    </div>
  )
}

function DiceRoller({ onRoll, isRolling, currentRoll }) {
  const [displayNumber, setDisplayNumber] = useState(null)
  
  useEffect(() => {
    if (isRolling) {
      setDisplayNumber(null)
      let count = 0
      const interval = setInterval(() => {
        setDisplayNumber(Math.floor(Math.random() * 100) + 1)
        count++
        if (count > 15) {
          clearInterval(interval)
          setDisplayNumber(currentRoll)
        }
      }, 40)
      return () => clearInterval(interval)
    } else if (currentRoll !== null) {
      setDisplayNumber(currentRoll)
    }
  }, [isRolling, currentRoll])
  
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onRoll}
        disabled={isRolling}
        className={`
          px-6 py-3 font-mono text-lg border-2 transition-all
          ${isRolling 
            ? 'bg-green-800 text-green-300 border-green-500 cursor-wait animate-pulse' 
            : 'bg-black text-green-400 border-green-500 hover:bg-green-500 hover:text-black'}
        `}
      >
        [TIRAR DADO]
      </button>
      
      {displayNumber !== null && (
        <div className={`
          px-6 py-3 font-mono text-2xl border-2
          ${displayNumber >= 75 ? 'border-yellow-500 text-yellow-400' : ''}
          ${displayNumber >= 50 && displayNumber < 75 ? 'border-green-500 text-green-400' : ''}
          ${displayNumber >= 35 && displayNumber < 50 ? 'border-yellow-500 text-yellow-500' : ''}
          ${displayNumber < 35 ? 'border-red-500 text-red-400' : ''}
        `}>
          {displayNumber}
        </div>
      )}
    </div>
  )
}

export default function RollExamplePlayer() {
  const [selectedExample, setSelectedExample] = useState('mecanica')
  const [currentNodeId, setCurrentNodeId] = useState(null)
  const [currentPath, setCurrentPath] = useState([])
  const [history, setHistory] = useState([])
  const [currentRoll, setCurrentRoll] = useState(null)
  const [isRolling, setIsRolling] = useState(false)
  const [showTree, setShowTree] = useState(true)
  
  const example = examples[selectedExample]
  
  useEffect(() => {
    setCurrentNodeId(example.entryPoint)
    setCurrentPath([example.entryPoint])
    setHistory([])
    setCurrentRoll(null)
  }, [selectedExample, example.entryPoint])
  
  const handleRoll = useCallback(() => {
    if (!currentNodeId) return
    
    const node = example.steps[currentNodeId]
    if (!node || node.isTerminal || !node.rollType) return
    
    setIsRolling(true)
    
    setTimeout(() => {
      const roll = Math.floor(Math.random() * 100) + 1
      setCurrentRoll(roll)
      setIsRolling(false)
    }, 600)
  }, [currentNodeId, example.steps])
  
  const handleConfirmRoll = useCallback(() => {
    if (currentRoll === null) return
    
    const node = example.steps[currentNodeId]
    if (!node || !node.outcomes) return
    
    let selectedOutcome = null
    for (const outcome of node.outcomes) {
      if (outcome.condition(currentRoll)) {
        selectedOutcome = outcome
        break
      }
    }
    
    if (selectedOutcome) {
      const newHistory = [...history, {
        nodeId: currentNodeId,
        node: node,
        roll: currentRoll,
        outcome: selectedOutcome
      }]
      setHistory(newHistory)
      
      if (!example.steps[selectedOutcome.nextStep].isTerminal) {
        const newPath = [...currentPath, selectedOutcome.nextStep]
        setCurrentPath(newPath)
        setCurrentNodeId(selectedOutcome.nextStep)
      } else {
        setCurrentPath([...currentPath, selectedOutcome.nextStep])
        setCurrentNodeId(selectedOutcome.nextStep)
      }
      
      setCurrentRoll(null)
    }
  }, [currentRoll, currentNodeId, history, currentPath, example.steps])
  
  const handleReset = () => {
    setCurrentNodeId(example.entryPoint)
    setCurrentPath([example.entryPoint])
    setHistory([])
    setCurrentRoll(null)
  }
  
  const handleNodeClick = (nodeId) => {
    const nodeIndex = currentPath.indexOf(nodeId)
    if (nodeIndex !== -1 && nodeIndex < currentPath.length - 1) {
      const newPath = currentPath.slice(0, nodeIndex + 1)
      setCurrentPath(newPath)
      setCurrentNodeId(nodeId)
      setCurrentRoll(null)
    }
  }
  
  const currentNode = currentNodeId ? example.steps[currentNodeId] : null
  const canRoll = currentNode && !currentNode.isTerminal && currentNode.rollType && !isRolling && currentRoll === null
  
  return (
    <div className="bg-panel border border-border p-4">
      <div className="mb-4">
        <span className="text-yellow-500 text-xs">{'>'} ÁRBOL DE POSIBILIDADES - SIMULADOR</span>
      </div>

      <div className="mb-4">
        <span className="text-green-700 text-xs block mb-2">{'//'} Selecciona un rol:</span>
        <div className="flex gap-2">
          {Object.entries(examples).map(([key, ex]) => (
            <button
              key={key}
              onClick={() => setSelectedExample(key)}
              className={`
                px-4 py-2 text-sm font-mono border transition-all
                ${selectedExample === key 
                  ? 'bg-green-900 text-white border-green-500' 
                  : 'bg-black text-green-500 border-border hover:border-green-700'}
              `}
            >
              [{ex.title.toUpperCase()}]
            </button>
          ))}
        </div>
      </div>

      {showTree && (
        <TreeVisualizer 
          tree={example} 
          currentPath={currentPath}
          onNodeClick={handleNodeClick}
        />
      )}

      <div className="mb-4 flex items-center justify-between flex-wrap gap-2">
        <div className="flex gap-2">
          <button
            onClick={() => setShowTree(!showTree)}
            className={`
              px-3 py-1 text-xs font-mono border transition-all
              ${showTree 
                ? 'bg-green-700 text-white border-green-500' 
                : 'bg-black text-green-500 border-green-900 hover:border-green-500'}
            `}
          >
            {showTree ? '[OCULTAR ÁRBOL]' : '[MOSTRAR ÁRBOL]'}
          </button>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="px-4 py-2 text-sm font-mono border border-green-700 text-green-700 hover:bg-green-900 hover:text-white transition-all"
          >
            [REINICIAR]
          </button>
        </div>
      </div>

      {currentNode && (
        <div className="bg-black/50 p-4 border border-green-900 rounded mb-4">
          <div className="text-green-400 text-sm font-bold mb-2">
            {currentNode.label}
          </div>
          
          {currentNode.rollType && !currentNode.isTerminal && (
            <div className="mb-4">
              <div className="text-green-600 text-xs mb-2">
                Tipo de tirada: <span className="text-cyan-400">{currentNode.rollType.toUpperCase()}</span>
              </div>
              <DiceRoller 
                onRoll={handleRoll}
                isRolling={isRolling}
                currentRoll={currentRoll}
              />
              
              {currentRoll !== null && !isRolling && (
                <div className="mt-4">
                  <div className="text-green-500 text-xs mb-2">Resultado: {currentRoll}</div>
                  <button
                    onClick={handleConfirmRoll}
                    className="px-4 py-2 text-sm font-mono bg-green-600 text-white border border-green-400 hover:bg-green-500 transition-all"
                  >
                    [CONFIRMAR Y CONTINUAR]
                  </button>
                </div>
              )}
            </div>
          )}
          
          {currentNode.isTerminal && (
            <div className="bg-yellow-900/30 border border-yellow-600 p-3">
              <div className="text-yellow-500 text-sm font-bold">ESTADO FINAL</div>
              <div className="text-green-400 text-xs mt-1">{currentNode.note}</div>
            </div>
          )}
        </div>
      )}

      <div className="space-y-3">
        {history.map((item, index) => (
          <div key={index} className="bg-black/30 p-3 border border-green-900/50 rounded">
            <div className="text-green-600 text-xs mb-2">
              {'>>>'} Paso {index + 1}: {item.node.label}
            </div>
            <ChatLogBlock 
              lines={[
                { type: 'me', text: `CT-001 realiza diagnóstico.` },
                { type: 'roll', value: item.roll },
                { type: 'do', text: item.outcome.note }
              ]}
            />
            {index < history.length - 1 && (
              <div className="text-green-700 text-xs mt-2 ml-2">
                ↓ {item.outcome.note}
              </div>
            )}
          </div>
        ))}
      </div>

      {history.length === 0 && !currentNode?.isTerminal && (
        <div className="text-green-700 text-sm italic">
          {'>>'} Pulsa [TIRAR DADO] para comenzar el ejemplo interactivo.
        </div>
      )}
    </div>
  )
}
