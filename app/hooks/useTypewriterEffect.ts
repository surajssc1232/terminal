import { useState, useEffect } from 'react'

export function useTypewriterEffect(text: string, typingSpeed: number = 10) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    const lines = text.split('\n')
    let i = 0
    let currentLine = 0

    const timer = setInterval(() => {
      if (currentLine < lines.length) {
        const line = lines[currentLine]
        if (line.startsWith('$')) {
          setDisplayedText(prev => prev + `<h3 class="text-blue-400 mt-4 mb-2">${line}</h3>`)
          currentLine++
        } else {
          if (i < line.length) {
            setDisplayedText(prev => prev + line.slice(i, i + 3))
            i += 3
          } else {
            setDisplayedText(prev => prev + '\n')
            i = 0
            currentLine++
          }
        }
      } else {
        clearInterval(timer)
      }
    }, typingSpeed)

    return () => clearInterval(timer)
  }, [text, typingSpeed])

  return displayedText
}

