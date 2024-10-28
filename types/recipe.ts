export interface RecipeIngredient {
  name: string
  amount: number
  unit: string
}

export interface Recipe {
  baseGinger: number
  ratios: {
    sugar: number
    water: number
  }
  ingredients: RecipeIngredient[]
}
