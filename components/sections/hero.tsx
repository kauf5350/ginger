'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { ProcessCarousel } from './hero/process-carousel'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'

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
            Learn how to make your own naturally fermented ginger beer. This workshop will guide you through a 10-day process of creating a delicious, probiotic-rich beverage from scratch. A healthy gut is a healthy butt.
          </p>
          
          {/* Hosts Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Your Hosts</h2>
            <div className="flex flex-row items-center">
              <AnimatedTooltip items={hosts} />
            </div>
          </div>
        </motion.div>

        {/* 3D Timeline Card */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Workshop Timeline
            </CardItem>
            <CardItem
              as="ul"
              translateZ="60"
              className="text-neutral-500 text-sm dark:text-neutral-300 mt-4 space-y-4"
            >
              <li className="flex items-center gap-2">
                <span className="font-semibold">Day 1:</span>
                Preparation and primary fermentation
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold">Days 2-5:</span>
                Let that baby feed
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold">Day 6:</span>
                Bottle for secondary fermentation
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold">Days 7-10:</span>
                Bacteria farts will carbonate
              </li>
            </CardItem>
          </CardBody>
        </CardContainer>
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
