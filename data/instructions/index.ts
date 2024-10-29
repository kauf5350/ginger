import { DayInstructions } from '@/types/instruction'

export const instructions: DayInstructions[] = [
  {
    day: 1,
    title: "Starting Your Primary Fermentation",
    description: "Today we'll be getting the primary fermentation started. We'll be preparing the ingredients and assembling them in our large glass vessel.",
    steps: [
      {
        id: "1-1",
        title: "Recipe Calculation",
        description: "Use the recipe calculator to figure out how to scale this to your needs. We'll be using the full recipe in these directions, but you can certainly scale that up or down, as desired."
      },
      {
        id: "1-2",
        title: "Prepare Ginger",
        description: "Peel and grate 500g of fresh ginger using the large holes on a box grater.",
        tips: ["Don't shred your knuckles on the grater"]
      },
      {
        id: "1-3",
        title: "Combine Ingredients",
        description: "Add the ginger, 350g of sugar, and 12 cups of water to the large glass vessel.",
        tips: ["Give that baby a little stirypoo"]
      },
      {
        id: "1-4",
        title: "Cover and Place",
        description: "Cover it with a cheese cloth or a clean towel and park that vessel on your counter, now deemed the fermentation station.",
        tips: ["Choose a spot away from direct sunlight"]
      }
    ]
  },
  {
    day: "Days 2-5",
    title: "Primary Fermentation",
    description: "This is going to be our primary fermentation period. You just let that baby feed on the sugar and fart out bubbles. Don't touch it, don't stir it, and don't even look at it for too long.",
    steps: [
      {
        id: "2-1",
        title: "The Waiting Game",
        description: "The primary fermentation period might take 4 days or it might take 7. It really depends but that's how fermentation goes sometimes."
      },
      {
        id: "2-2",
        title: "Watch for Activity",
        description: "After the first couple of days you'll start to notice some bubbles at the top of the mixture. This means we've got some ACTIVITY going down. This activity means the bacteria is feeding on the sugar, and the mixture will become less sweet as this happens.",
        tips: ["Get excited"]
      },
      {
        id: "2-3",
        title: "Taste Test",
        description: "After 4 days, assuming there are some bubbles, you can start to give the animal a little tasteypoo to check on sweetness.",
        tips: ["If you want it less sweet, give it a little longer", "If you want it more sweet, move on to the next step"],
        warnings: ["We need SOME sugar remaining for the secondary fermentation"]
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
    day: "Days 7-10",
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
