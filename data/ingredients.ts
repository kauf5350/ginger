import { Ingredient } from '@/types/ingredient'

export const ingredients: Ingredient[] = [
  {
    id: "fresh-ginger",
    name: "Fresh Ginger",
    amount: "200g",
    notes: "Organic preferred, young ginger works best",
    image: "/images/ingredients/ginger.jpg"
  },
  {
    id: "sugar",
    name: "Raw Sugar",
    amount: "200g",
    notes: "Organic raw sugar or panela recommended",
    image: "/images/ingredients/sugar.jpg"
  },
  {
    id: "water",
    name: "Filtered Water",
    amount: "2L",
    notes: "Chlorine-free water is essential",
    image: "/images/ingredients/water.jpg"
  },
  {
    id: "lemon",
    name: "Lemon",
    amount: "1-2",
    notes: "For added flavor and pH balance",
    optional: true,
    image: "/images/ingredients/lemon.jpg"
  }
]
