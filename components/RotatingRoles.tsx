'use client'

import { useEffect, useState } from 'react'

interface RotatingRolesProps {
  roles?: string[]
  baseText?: string
  rotationSpeed?: number
  className?: string
}

export default function RotatingRoles({
  roles = ['Product Designer', 'Graphic Designer', 'Brand Designer'],
  baseText = "I'm a ",
  rotationSpeed = 5000,
  className = ''
}: RotatingRolesProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      // Show current role with a small delay (asynchronous)
      timeout = setTimeout(() => {
        setDisplayedText(roles[currentRoleIndex])
        
        // After showing, wait then start deleting
        const deleteTimeout = setTimeout(() => {
          setIsDeleting(true)
        }, rotationSpeed)
        
        // Cleanup for nested timeout
        return () => clearTimeout(deleteTimeout)
      }, 0) // Minimal delay to make it asynchronous
    } else {
      // Delete current role
      timeout = setTimeout(() => {
        setDisplayedText('')
        
        // When fully deleted, move to next role
        const nextRoleTimeout = setTimeout(() => {
          setIsDeleting(false)
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
        }, 1000)
        
        return () => clearTimeout(nextRoleTimeout)
      }, 0)
    }

    return () => clearTimeout(timeout)
  }, [currentRoleIndex, isDeleting, roles, rotationSpeed])

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="text-primary">
        {baseText}
      </span>
      <span className="text-secondary text-3xl md:text-4xl font-medium ml-2 min-w-[180px]">
        {displayedText}
        <span className="inline-block w-[3px] h-[1.2em] bg-secondary ml-1" />
      </span>
    </div>
  )
}