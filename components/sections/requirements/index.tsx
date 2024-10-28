'use client'

import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { IngredientList } from './ingredient-list'
import { EquipmentList } from './equipment-list'

export function Requirements() {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter">What You'll Need</h2>
          <p className="text-lg text-muted-foreground">
            Gather these ingredients and equipment before starting the workshop
          </p>
        </div>

        <Tabs defaultValue="ingredients" className="space-y-6">
          <TabsList>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="equipment">Equipment</TabsTrigger>
          </TabsList>
          <TabsContent value="ingredients" className="space-y-4">
            <IngredientList />
          </TabsContent>
          <TabsContent value="equipment" className="space-y-4">
            <EquipmentList />
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  )
}
