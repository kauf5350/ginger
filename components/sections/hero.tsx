'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { ProcessCarousel } from './hero/process-carousel'

// Hosts data
const hosts = [
  {
    id: 1,
    name: "David Kaufman",
    designation: "Product",
    image: "/images/hosts/david.jpg",
  },
  {
    id: 2,
    name: "Chelsea Tam",
    designation: "People Operations",
    image: "/images/hosts/chelsea.jpg",
  },
]

export function Hero() {
  return (
    <section className="container px-4 py-12 md:py-24">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        {/* Text Content */}
        <motion.div 
          className="flex flex-col justify-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            Ginger Beer Workshop
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Learn how to make your own naturally fermented ginger beer. This workshop will guide you through a 10-day process of creating a delicious, probiotic-rich beverage from scratch.
          </p>
          
          {/* Hosts Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Your Hosts</h2>
            <div className="flex flex-row items-center">
              <AnimatedTooltip items={hosts} />
            </div>
          </div>
        </motion.div>

        {/* Timeline Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="grid gap-4 p-6">
              <h3 className="text-lg font-semibold">Workshop Timeline</h3>
              <div className="grid gap-2">
                <TimelineItem day={1} description="Preparation and ginger bug start" />
                <TimelineItem day="2-5" description="Feeding the ginger bug" />
                <TimelineItem day={6} description="Main brew preparation" />
                <TimelineItem day="7-10" description="Fermentation and bottling" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Process Carousel */}
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ProcessCarousel />
      </motion.div>
    </section>
  )
}

// Helper component for timeline items
function TimelineItem({ day, description }: { day: string | number, description: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold">
        {day}
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
