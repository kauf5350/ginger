'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import { useEffect, useState } from 'react'

export function Header() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Only render after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Use a loading state while determining the theme
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex flex-1 justify-between items-center">
            <div className="flex-1" />
            <div className="relative h-8 w-32 mx-auto">
              {/* Show nothing while loading to avoid flash */}
              <div className="w-full h-full" />
            </div>
            <div className="flex-1 flex justify-end">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex flex-1 justify-between items-center">
          <div className="flex-1" />
          <div className="relative h-8 w-32 mx-auto">
            <Image
              src={resolvedTheme === 'dark' ? '/paid-logo-white.png' : '/paid-logo-black.png'}
              alt="Company Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex-1 flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
