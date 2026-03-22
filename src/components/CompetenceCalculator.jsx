'use client'
import React, { useState, useEffect } from 'react'
import { competenceLevels } from '../data/rolesPasivos'

export default function CompetenceCalculator() {
  const [selectedLevel, setSelectedLevel] = useState(competenceLevels[0])
  const [diceValue, setDiceValue] = useState('')
  const [difficultyValue, setDifficultyValue] = useState(50) // Default difficulty
  const [result, setResult] = useState(null)
  const [displayDice, setDisplayDice] = useState(null)
  const [isRolling, setIsRolling] = useState(false)

  const calculateResult = (dice, level) => {
    const final = dice + level.modifier
    const success = final >= difficultyValue
    return { dice, modifier: level.modifier, final, success, difficulty: difficultyValue }
  }

  useEffect(() => {
    if (diceValue && !isNaN(parseInt(diceValue))) {
      const dice = parseInt(diceValue)
      const res = calculateResult(dice, selectedLevel)
      
      setIsRolling(true)
      let count = 0
      const interval = setInterval(() => {
        setDisplayDice(Math.floor(Math.random() * 100) + 1)
        count++
        if (count > 10) {
          clearInterval(interval)
          setDisplayDice(dice)
          setResult(res)
          setIsRolling(false)
        }
      }, 50)
    } else {
      setResult(null)
      setDisplayDice(null)
    }
  }, [diceValue, selectedLevel, difficultyValue])

  const handleRoll = () => {
    const randomDice = Math.floor(Math.random() * 100) + 1
    setDiceValue(randomDice.toString())
  }

  return (
    <div className="bg-panel border border-border p-4">
      <div className="mb-4">
        <span className="text-yellow-500 text-xs">{'>'} CALCULADORA DE TIRADA</span>
      </div>

      <div className="mb-4">
        <span className="text-green-700 text-xs block mb-2">{'//'} Nivel de Competencia:</span>
        <div className="flex gap-2">
          {competenceLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level)}
              className={`
                px-3 py-2 text-sm font-mono border transition-all
                ${selectedLevel.id === level.id 
                  ? 'bg-green-900 text-white border-green-500' 
                  : 'bg-black text-green-500 border-border hover:border-green-700'}
              `}
            >
              [{level.name}] ({level.modifier >= 0 ? '+' : ''}{level.modifier})
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <span className="text-green-700 text-xs block mb-2">{'//'} Dificultad objetivo:</span>
        <input
            type="number"
            value={difficultyValue}
            onChange={(e) => setDifficultyValue(parseInt(e.target.value))}
            className="bg-black text-green-500 border border-border px-3 py-2 w-24 font-mono text-center"
        />
      </div>

      <div className="mb-4">
        <span className="text-green-700 text-xs block mb-2">{'//'} Valor del dado (1-100):</span>
        <div className="flex gap-2">
          <input
            type="number"
            min="1"
            max="100"
            value={diceValue}
            onChange={(e) => setDiceValue(e.target.value)}
            className="bg-black text-green-500 border border-border px-3 py-2 w-24 font-mono text-center"
          />
          <button
            onClick={handleRoll}
            className="bg-black text-yellow-500 border border-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all"
          >
            [TIRAR]
          </button>
        </div>
      </div>

      {result && (
        <div className="bg-black/50 border border-green-900 p-3 font-mono">
          <div className="text-green-500 mb-1">
            {'>>'} DADO (<span className={`text-yellow-400 ${isRolling ? 'animate-pulse' : ''}`}>{displayDice}</span>) 
            {result.modifier >= 0 ? '+' : ''}{result.modifier} = <span className="text-yellow-400">{result.final}</span>
          </div>
          <div className={`mt-2 ${result.success ? 'text-green-400' : 'text-red-400'}`}>
            <span className="text-green-700">{'>'}</span>{'-'}&gt; RESULTADO: {result.success ? 'ÉXITO' : 'FALLO'}
          </div>
          <div className="text-green-700 text-xs mt-1">
            {'//'} Objetivo: {result.difficulty}
          </div>
        </div>
      )}
    </div>
  )
}
