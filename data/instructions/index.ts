import { DayInstructions } from '@/types/instruction'

export const instructions: DayInstructions[] = [
  {
    day: 1,
    title: "Starting Your Ginger Bug",
    description: "The first day is all about creating your ginger bug starter, which will be the foundation of your fermentation.",
    steps: [
      {
        id: "1-1",
        title: "Prepare Your Ginger",
        description: "Grate 2 tablespoons of fresh ginger, including the skin. The skin contains beneficial wild yeasts.",
        tips: ["Use organic ginger if possible", "No need to peel the ginger"],
        image: "/images/process/grated-ginger.jpg"
      },
      {
        id: "1-2",
        title: "Add Sugar",
        description: "Add 2 tablespoons of raw sugar to your jar.",
        tips: ["Raw sugar works better than refined sugar"],
        image: "/images/process/sugar-add.jpg"
      },
      {
        id: "1-3",
        title: "Add Water",
        description: "Add 2 cups of non-chlorinated water and stir well.",
        warnings: ["Chlorinated water can kill beneficial bacteria"],
        image: "/images/process/water-add.jpg"
      }
    ]
  },
  {
    day: "2-5",
    title: "Feeding Your Ginger Bug",
    description: "During these days, you'll feed your ginger bug daily to build up the bacterial culture.",
    steps: [
      {
        id: "2-1",
        title: "Daily Feeding",
        description: "Add 1 tablespoon each of grated ginger and sugar daily.",
        tips: ["Feed at approximately the same time each day"],
        warnings: ["Skip a feeding if liquid gets too full"],
        image: "/images/process/feeding.jpg"
      },
      {
        id: "2-2",
        title: "Monitor Activity",
        description: "Look for signs of fermentation: bubbles, fizzing sounds, sweet-sour smell.",
        tips: ["Tiny bubbles should start appearing by day 3"],
        image: "/images/process/bubbles.jpg"
      }
    ]
  },
  {
    day: 6,
    title: "Making the Main Brew",
    description: "Time to start your main ginger beer brew using your active ginger bug.",
    steps: [
      {
        id: "6-1",
        title: "Prepare Ginger Tea",
        description: "Simmer 1/2 cup grated ginger in 4 cups water for 15 minutes.",
        tips: ["Strong tea makes spicier ginger beer"],
        image: "/images/process/tea.jpg"
      },
      {
        id: "6-2",
        title: "Add Sweetener",
        description: "Dissolve 1 cup sugar in the hot ginger tea.",
        warnings: ["Don't skip the sugar - it's food for fermentation"],
        image: "/images/process/sweetener.jpg"
      }
    ]
  },
  {
    day: "7-10",
    title: "Fermentation and Bottling",
    description: "The final stage where your ginger beer develops its flavor and fizz.",
    steps: [
      {
        id: "7-1",
        title: "First Fermentation",
        description: "Let the brew ferment at room temperature for 2-3 days.",
        warnings: ["Keep away from direct sunlight"],
        image: "/images/process/fermentation.jpg"
      },
      {
        id: "7-2",
        title: "Bottling",
        description: "Strain and bottle the ginger beer, leaving some headspace.",
        warnings: ["Don't fill bottles completely to allow for carbonation"],
        image: "/images/process/bottling.jpg"
      }
    ]
  }
]
