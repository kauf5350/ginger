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
      <div className="container relative h-16">
        {/* Logo container - absolutely positioned in center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-8 w-32">
            <Image
              src={logoSrc}
              alt="Company Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Theme toggle - fixed position on right */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
