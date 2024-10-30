'use client'

import { useTheme } from 'next-themes'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Header() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = !mounted 
    ? '/paid-logo-white.png' // Default logo while mounting
    : resolvedTheme === 'dark' 
      ? '/paid-logo-white.png' 
      : '/paid-logo-black.png'

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto h-16 relative px-4">
        <div className="flex h-full items-center justify-between">
          {/* Empty div for spacing */}
          <div className="w-10" />
          
          {/* Logo container */}
          <div className="relative h-8 w-32">
            <Image
              src={logoSrc}
              alt="Company Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Theme toggle */}
          <div className="w-10">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
