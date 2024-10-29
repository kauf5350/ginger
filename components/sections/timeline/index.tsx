'use client'

import { motion } from 'framer-motion'
import { Tabs } from '@/components/ui/acertenity-tabs'
import { instructions } from '@/data/instructions'
import { DayCard } from './day-card'

export function Timeline() {
  const tabs = instructions.map(instruction => ({
    title: typeof instruction.day === 'string' 
      ? instruction.day 
      : `Day ${instruction.day}`,
    value: instruction.day.toString(),
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 bg-background border">
        <DayCard instructions={instruction} isActive={true} />
      </div>
    )
  }))

  return (
    <section id="timeline" className="container max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Day by Day Instructions</h2>
          <p className="text-lg text-muted-foreground">
            Follow along with our detailed brewing process
          </p>
        </div>

        <div className="h-[800px] md:h-[600px] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full">
          <Tabs 
            tabs={tabs} 
            contentClassName="bg-background"
          />
        </div>
      </div>
    </section>
  )
}
