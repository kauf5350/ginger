'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ingredients } from '@/data/ingredients'

export function IngredientList() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {ingredients.map((ingredient, index) => (
        <motion.div
          key={ingredient.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="flex gap-4 p-6">
              <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{ingredient.name}</h3>
                  {ingredient.optional && (
                    <Badge variant="secondary">Optional</Badge>
                  )}
                </div>
                <p className="text-sm font-medium">{ingredient.amount}</p>
                {ingredient.notes && (
                  <p className="text-sm text-muted-foreground">{ingredient.notes}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
