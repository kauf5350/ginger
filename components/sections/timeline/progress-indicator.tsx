'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProgressIndicatorProps {
  steps: { day: number | string }[]
  currentStep: number
  onStepClick: (index: number) => void
}

export function ProgressIndicator({ steps, currentStep, onStepClick }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center justify-center w-full max-w-3xl mx-auto mb-8">
      <div className="relative flex items-center w-full">
        {/* Progress Line */}
        <div className="absolute h-1 w-full bg-muted">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Step Indicators */}
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => onStepClick(index)}
            className={cn(
              'relative flex items-center justify-center w-10 h-10 rounded-full bg-background border-2 transition-colors',
              index <= currentStep ? 'border-primary' : 'border-muted',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
            )}
          >
            <span className="text-sm font-medium">
              {typeof step.day === 'string' ? step.day.split('-')[0] : step.day}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
