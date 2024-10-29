'use client'

import { DayInstructions } from '@/types/instruction'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { InfoIcon, AlertTriangle } from 'lucide-react'
import Image from 'next/image'

interface DayCardProps {
  instructions: DayInstructions
  isActive: boolean
}

export function DayCard({ instructions, isActive }: DayCardProps) {
  const dayDisplay = typeof instructions.day === 'string' 
    ? instructions.day 
    : `Day ${instructions.day}`

  return (
    <Card className={`transition-all duration-300 ${isActive ? 'border-primary' : ''}`}>
      <CardHeader>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold">{dayDisplay}</span>
        </div>
        <h3 className="text-lg font-semibold">{instructions.title}</h3>
        <p className="text-sm text-muted-foreground">{instructions.description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {instructions.steps.map((step) => (
          <div key={step.id} className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>

            {step.image && (
              <div className="relative h-48 overflow-hidden rounded-md">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {step.tips && step.tips.length > 0 && (
              <Alert>
                <InfoIcon className="h-4 w-4" />
                <AlertTitle>Tips</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-4 text-sm">
                    {step.tips.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {step.warnings && step.warnings.length > 0 && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-4 text-sm">
                    {step.warnings.map((warning, index) => (
                      <li key={index}>{warning}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
