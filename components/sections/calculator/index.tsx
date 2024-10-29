'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CustomSlider } from '@/components/ui/custom-slider'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { baseRecipe } from '@/data/recipe'
import { Scale, Minus, Plus } from 'lucide-react'

// Add this CSS to your globals.css file
// Or create a new styles/slider.css and import it in your layout.tsx
const sliderStyles = `
  .slider-track {
    height: 4px !important;
    width: 100%;
    position: relative;
    border-radius: 9999px;
    background-color: hsl(var(--muted)) !important;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .slider-range {
    height: 100%;
    position: absolute;
    background-color: hsl(var(--primary)) !important;
    border-radius: 9999px;
  }

  .slider-thumb {
    height: 16px !important;
    width: 16px !important;
    border-radius: 9999px;
    background-color: hsl(var(--primary)) !important;
    border: 2px solid hsl(var(--background)) !important;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .slider-thumb:hover {
    transform: scale(1.1);
  }

  .slider-thumb:focus {
    outline: none;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--primary));
  }
`

export function Calculator() {
  const [gingerAmount, setGingerAmount] = useState([500])

  const calculateIngredients = (ginger: number) => {
    return [
      {
        name: "Fresh Ginger",
        amount: ginger,
        unit: "g",
        icon: "🧄"
      },
      {
        name: "Sugar",
        amount: ginger * baseRecipe.ratios.sugar,
        unit: "g",
        icon: "🧂"
      },
      {
        name: "Water",
        amount: ginger * baseRecipe.ratios.water,
        unit: "cups",
        icon: "💧"
      }
    ]
  }

  const ingredients = calculateIngredients(gingerAmount[0])
  
  const formatAmount = (amount: number): string => {
    return amount >= 10 ? Math.round(amount).toString() : amount.toFixed(1)
  }

  const adjustAmount = (direction: 'decrease' | 'increase') => {
    const step = 50
    const newAmount = direction === 'decrease' 
      ? Math.max(100, gingerAmount[0] - step)
      : Math.min(1000, gingerAmount[0] + step)
    setGingerAmount([newAmount])
  }

  const getScaleDescription = (amount: number) => {
    if (amount === 500) return "Standard batch"
    if (amount < 500) return "Smaller batch"
    return "Larger batch"
  }

  return (
    <section id="calculator" className="container max-w-7xl mx-auto px-4 py-8 md:py-16">
      <style jsx global>{sliderStyles}</style>
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

        <Card className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 opacity-50" />
          
          <CardHeader>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Scale className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{getScaleDescription(gingerAmount[0])}</span>
                  </div>
                  <div className="text-2xl font-bold tracking-tight">
                    {formatAmount(gingerAmount[0])}g
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => adjustAmount('decrease')}
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                    disabled={gingerAmount[0] <= 100}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => adjustAmount('increase')}
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                    disabled={gingerAmount[0] >= 1000}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <CustomSlider
                  value={gingerAmount}
                  onValueChange={setGingerAmount}
                  min={100}
                  max={1000}
                  step={50}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>100g</span>
                  <span>1000g</span>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              {ingredients.map((ingredient) => (
                <motion.div
                  key={ingredient.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{ingredient.icon}</span>
                    <span className="font-medium">{ingredient.name}</span>
                  </div>
                  <span className="font-mono">
                    {formatAmount(ingredient.amount)} {ingredient.unit}
                  </span>
                </motion.div>
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
