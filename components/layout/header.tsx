'use client'

import { useTheme } from 'next-themes'
import { ThemeToggle } from '@/components/shared/theme-toggle'
import Image from 'next/image'

export function Header() {
  const { resolvedTheme, theme } = useTheme()

  // Show dark mode logo by default if theme is not yet resolved
  const logoSrc = !resolvedTheme 
    ? '/paid-logo-white.png'
    : resolvedTheme === 'dark' 
      ? '/paid-logo-white.png' 
      : '/paid-logo-black.png'

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex flex-1 justify-between items-center">
          <div className="flex-1" />
          <div className="relative h-8 w-32 mx-auto">
            <Image
              src={logoSrc}
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
