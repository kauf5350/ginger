'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { equipment } from '@/data/equipment'

export function EquipmentList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {equipment.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="flex gap-4 p-6">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{item.name}</h3>
                  {item.optional && (
                    <Badge variant="secondary">Optional</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {item.alternatives && (
                  <p className="text-sm text-muted-foreground">
                    Alternatives: {item.alternatives.join(', ')}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
