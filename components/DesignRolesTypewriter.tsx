'use client'

import { useEffect, useState } from 'react'

interface DesignRolesTypewriterProps {
  roles?: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  loop?: boolean
  className?: string
}

function DesignRolesTypewriter({
  roles = [
    'Product designer',
    'Graphics designer', 
    'Brand designer'
  ],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
  loop = true,
  className = ''
}: DesignRolesTypewriterProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    const currentText = roles[currentRoleIndex]

    if (!isDeleting) {
      // Typing phase
      if (charIndex < currentText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(prev => prev + currentText[charIndex])
          setCharIndex(prev => prev + 1)
        }, typingSpeed)
      } else {
        // Finished typing current role, pause then start deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(true)
        }, pauseTime)
      }
    } else {
      // Deleting phase
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1))
          setCharIndex(prev => prev - 1)
        }, deletingSpeed)
      } else {
        // Finished deleting, move to next role
        const nextIndex = (currentRoleIndex + 1) % roles.length
        
        if (loop || nextIndex !== 0) {
          timeoutId = setTimeout(() => {
            setCurrentRoleIndex(nextIndex)
            setIsDeleting(false)
          }, 500) // Short pause before next role
        }
      }
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [charIndex, isDeleting, currentRoleIndex, roles, typingSpeed, deletingSpeed, pauseTime, loop])

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="font-semibold">I&apos;m a </span>
      <span className="ml-2 text-secondary font-lato">
        {displayText}
        <span className="inline-block w-[3px] h-[1.2em] bg-secondary ml-1 animate-pulse" />
      </span>
    </div>
  )
}

export default DesignRolesTypewriter