export interface Equipment {
  id: string
  name: string
  description: string
  optional?: boolean
  image: string
  alternatives?: string[]
}
