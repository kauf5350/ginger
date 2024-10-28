export interface InstructionStep {
  id: string
  title: string
  description: string
  tips?: string[]
  warnings?: string[]
  image?: string
}

export interface DayInstructions {
  day: number | string
  title: string
  description: string
  steps: InstructionStep[]
}
