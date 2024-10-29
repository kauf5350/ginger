'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Badge } from '@/components/ui/badge'
import { equipment } from '@/data/equipment'

export function EquipmentList() {
  return (
    <BentoGrid className="md:grid-cols-3 auto-rows-[20rem] mb-8">
      {equipment.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <BentoGridItem
            title={
              <div className="flex items-center gap-2">
                <span>{item.name}</span>
                {item.optional && (
                  <Badge variant="secondary">Optional</Badge>
                )}
              </div>
            }
            description={
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {item.alternatives && (
                  <p className="text-sm text-muted-foreground">
                    Alternatives: {item.alternatives.join(', ')}
                  </p>
                )}
              </div>
            }
            header={
              <div className="relative w-full pt-[56.25%]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            }
          />
        </motion.div>
      ))}
    </BentoGrid>
  )
}
