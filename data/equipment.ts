import { Equipment } from '@/types/equipment'

export const equipment: Equipment[] = [
  {
    id: "jar-large",
    name: "Large Glass Jar",
    description: "2L capacity with wide mouth for main fermentation",
    image: "/images/equipment/jar-large.jpg",
    alternatives: ["Large ceramic crock"]
  },
  {
    id: "jar-small",
    name: "Small Glass Jar",
    description: "500ml capacity for ginger bug",
    image: "/images/equipment/jar-small.jpg"
  },
  {
    id: "bottles",
    name: "Flip-top Bottles",
    description: "For final bottling and carbonation",
    image: "/images/equipment/bottles.jpg",
    alternatives: ["Clean plastic soda bottles"]
  },
  {
    id: "strainer",
    name: "Fine Mesh Strainer",
    description: "For filtering the ginger beer",
    image: "/images/equipment/strainer.jpg"
  },
  {
    id: "grater",
    name: "Grater",
    description: "For grating fresh ginger",
    optional: true,
    image: "/images/equipment/grater.jpg",
    alternatives: ["Food processor", "Sharp knife"]
  }
]
