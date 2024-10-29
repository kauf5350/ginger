'use client'

import { motion } from 'framer-motion'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { ProcessCarousel } from './hero/process-carousel'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import { Highlight } from '@/components/ui/hero-highlight'
import { ChevronRight } from 'lucide-react'

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
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Adjust if you have a fixed header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="container max-w-7xl mx-auto px-4 py-8 md:py-16">
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
          <div className="space-y-2">
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Learn how to make your own naturally fermented ginger beer. This workshop will guide you through a 10-day process of creating a delicious, probiotic-rich beverage from scratch.
            </p>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              <Highlight>A healthy gut is a healthy butt.</Highlight>
            </p>
          </div>
          
          {/* Hosts Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Your Hosts</h2>
            <div className="flex flex-row items-center">
              <AnimatedTooltip items={hosts} />
            </div>
          </div>
        </motion.div>

        {/* Navigation Card */}
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-2xl font-bold tracking-tighter text-neutral-600 dark:text-white"
            >
              Quick Navigation
            </CardItem>
            <CardItem
              as="ul"
              translateZ="60"
              className="text-neutral-500 text-sm dark:text-neutral-300 mt-4 space-y-4"
            >
              <li>
                <button 
                  onClick={() => scrollToSection('process-overview')}
                  className="flex items-center gap-2 w-full text-left hover:text-neutral-600 dark:hover:text-white transition-colors group"
                >
                  <span className="font-semibold">Process Overview</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('requirements')}
                  className="flex items-center gap-2 w-full text-left hover:text-neutral-600 dark:hover:text-white transition-colors group"
                >
                  <span className="font-semibold">Ingredients & Equipment</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('timeline')}
                  className="flex items-center gap-2 w-full text-left hover:text-neutral-600 dark:hover:text-white transition-colors group"
                >
                  <span className="font-semibold">Step-by-step Instructions</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('calculator')}
                  className="flex items-center gap-2 w-full text-left hover:text-neutral-600 dark:hover:text-white transition-colors group"
                >
                  <span className="font-semibold">Recipe Calculator</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      {/* Process Carousel */}
      <motion.div 
        id="process-overview"
        className="mt-8 md:mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ProcessCarousel />
      </motion.div>
    </section>
  )
}
