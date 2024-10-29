'use client'

import { Tabs } from '@/components/ui/acertenity-tabs'
import { IngredientList } from './ingredient-list'
import { EquipmentList } from './equipment-list'

export function Requirements() {
  const tabs = [
    {
      title: "Ingredients",
      value: "ingredients",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-6 bg-background border">
          <IngredientList />
        </div>
      )
    },
    {
      title: "Equipment",
      value: "equipment",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-6 bg-background border">
          <EquipmentList />
        </div>
      )
    }
  ]

  return (
    <section id="requirements" className="container max-w-7xl mx-auto px-4 py-8 md:py-16">
      <div className="space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">What You&apos;ll Need</h2>
          <p className="text-lg text-muted-foreground">
            Gather these ingredients and equipment before starting the workshop
          </p>
        </div>

        <div className="relative flex flex-col max-w-6xl mx-auto w-full pb-8">
          <Tabs 
            tabs={tabs} 
            contentClassName="bg-background"
            containerClassName="justify-center"
          />
        </div>
      </div>
    </section>
  )
}
