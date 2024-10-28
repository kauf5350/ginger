import { Recipe } from '@/types/recipe'

export const baseRecipe: Recipe = {
  baseGinger: 500, // Base ginger amount in grams
  ratios: {
    sugar: 0.72, // 360g sugar / 500g ginger = 0.72
    water: 0.024, // 12 cups / 500g ginger = 0.024 cups per gram
  },
  ingredients: [
    {
      name: "Fresh Ginger",
      amount: 500,
      unit: "g"
    },
    {
      name: "Sugar",
      amount: 360,
      unit: "g"
    },
    {
      name: "Water",
      amount: 12,
      unit: "cups"
    }
  ]
}
