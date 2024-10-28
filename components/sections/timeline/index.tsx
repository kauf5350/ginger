'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { instructions } from '@/data/instructions'
import { DayCard } from './day-card'
import { ProgressIndicator } from './progress-indicator'

export function Timeline() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <section className="container max-w-7xl mx-auto px-4 py-12 md:py-24">
      <div className="space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Day by Day Instructions</h2>
          <p className="text-lg text-muted-foreground">
            Follow along with our detailed brewing process
          </p>
        </div>

        <ProgressIndicator
          steps={instructions}
          currentStep={currentStep}
          onStepClick={setCurrentStep}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <DayCard
              instructions={instructions[currentStep]}
              isActive={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
