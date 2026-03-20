import React, { useState, useEffect } from 'react'

export default function Page({ title, children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [displayText, setDisplayText] = useState('')
  const loadingText = `> CONECTANDO CON EL SERVIDOR... [${title}]`

  useEffect(() => {
    let timer
    let charIndex = 0

    const typing = setInterval(() => {
      setDisplayText(loadingText.substring(0, charIndex + 1))
      charIndex++
      if (charIndex >= loadingText.length) {
        clearInterval(typing)
        timer = setTimeout(() => setIsLoading(false), 400)
      }
    }, 25)

    return () => {
      clearInterval(typing)
      clearTimeout(timer)
    }
  }, [title])

  if (isLoading) {
    return (
      <div className="flex flex-col items-start justify-start h-full p-4">
        <div className="text-green-500 font-mono text-lg animate-pulse">
          {displayText}
          <span className="animate-blink">_</span>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[900px]">
      <div className="mb-8 pb-4 border-b border-border">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-500 font-bold">{'>'}</span>
          <h1 className="text-green-500 text-lg font-bold tracking-widest">
            {title}
          </h1>
        </div>
        <div className="pl-6 text-[11px] text-green-700">
          {'//'} Modulo activo
        </div>
      </div>

      <div className="text-[13px] leading-relaxed text-green-700">
        {children}
      </div>
    </div>
  )
}
