'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Badge } from '@/components/ui/badge'
import { ingredients } from '@/data/ingredients'

export function IngredientList() {
  return (
    <BentoGrid className="md:grid-cols-3 auto-rows-[20rem] mb-8">
      {ingredients.map((ingredient, index) => (
        <motion.div
          key={ingredient.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <BentoGridItem
            title={
              <div className="flex items-center gap-2">
                <span>{ingredient.name}</span>
                {ingredient.optional && (
                  <Badge variant="secondary">Optional</Badge>
                )}
              </div>
            }
            description={
              <div className="space-y-2">
                <p className="text-base font-medium">{ingredient.amount}</p>
                {ingredient.notes && (
                  <p className="text-sm text-muted-foreground">{ingredient.notes}</p>
                )}
              </div>
            }
            header={
              <div className="relative w-full h-40">
                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            }
          />
        </motion.div>
      ))}
    </BentoGrid>
  )
}
