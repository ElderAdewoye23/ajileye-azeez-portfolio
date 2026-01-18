'use client'

import { useEffect, useState } from 'react'

interface NameTypewriterProps {
  speed?: number
  delay?: number
  pauseBeforeReset?: number
  loop?: boolean
  className?: string
}

function NameTypewriter({
  speed = 200,
  delay = 800,
  pauseBeforeReset = 1500,
  loop = true,
  className = ''
}: NameTypewriterProps) {
  const fullName = 'Ajileye Azeez Agboola'
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isDeleting) {
      // Deleting mode
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1))
          setCurrentIndex(prev => prev - 1)
        }, speed / 2)
      } else {
        // Schedule state change for next render
        timeout = setTimeout(() => {
          setIsDeleting(false)
          setIsTyping(true)
        }, 0) // Use setTimeout to make it asynchronous
      }
    } else if (isTyping) {
      // Typing mode
      if (currentIndex < fullName.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + fullName[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }, currentIndex === 0 ? delay : speed)
      } else if (loop) {
        // Finished typing, schedule deletion after pause
        timeout = setTimeout(() => {
          setIsTyping(false)
          setIsDeleting(true)
        }, pauseBeforeReset)
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [currentIndex, isTyping, isDeleting, speed, delay, pauseBeforeReset, loop, fullName])

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="font-langar text-primary text-4xl md:text-5xl lg:text-6xl">
        {displayText}
      </span>
      
      {/* Always show cursor, blink when paused */}
      <span 
        className={`inline-block w-[3px] h-[1.2em] bg-primary ml-1 ${
          !isTyping && !isDeleting && loop ? 'animate-pulse' : ''
        }`} 
      />
    </div>
  )
}

export default NameTypewriter