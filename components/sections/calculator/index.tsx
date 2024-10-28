'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { baseRecipe } from '@/data/recipe'

export function Calculator() {
  const [gingerAmount, setGingerAmount] = useState([500]) // Start with base recipe amount

  const calculateIngredients = (ginger: number) => {
    return [
      {
        name: "Fresh Ginger",
        amount: ginger,
        unit: "g"
      },
      {
        name: "Sugar",
        amount: ginger * baseRecipe.ratios.sugar,
        unit: "g"
      },
      {
        name: "Water",
        amount: ginger * baseRecipe.ratios.water,
        unit: "cups"
      }
    ]
  }

  const ingredients = calculateIngredients(gingerAmount[0])

  const formatAmount = (amount: number): string => {
    return amount >= 10 ? Math.round(amount).toString() : amount.toFixed(1)
  }

  return (
    <section className="container px-4 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Recipe Calculator</h2>
          <p className="text-lg text-muted-foreground">
            Adjust the amount of ginger to scale the recipe
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Ginger Amount: {formatAmount(gingerAmount[0])}g
                </label>
                <Slider
                  value={gingerAmount}
                  onValueChange={setGingerAmount}
                  min={100}
                  max={1000}
                  step={50}
                  className="w-full"
                />
              </div>
              <div className="text-sm text-muted-foreground">
                Move the slider to adjust recipe quantities
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ingredients.map((ingredient) => (
                <div
                  key={ingredient.name}
                  className="flex items-center justify-between border-b pb-2 last:border-0"
                >
                  <span className="font-medium">{ingredient.name}</span>
                  <span>
                    {formatAmount(ingredient.amount)} {ingredient.unit}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-sm text-muted-foreground text-center">
          <p>Base recipe uses {baseRecipe.baseGinger}g of ginger</p>
        </div>
      </motion.div>
    </section>
  )
}
