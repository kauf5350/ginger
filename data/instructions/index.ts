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
    title: "Bottling",
    description: "On day 6 we're going to be bottling the mixture.",
    steps: [
      {
        id: "6-1",
        title: "Prepare Bottles",
        description: "Make sure to wash your swing-top bottles.",
        warnings: ["Ideally don't use antibacterial soap"]
      },
      {
        id: "6-2",
        title: "Strain the Mixture",
        description: "We'll want to strain the mixture into a large bowl through a fine mesh strainer."
      },
      {
        id: "6-3",
        title: "Fill the Bottles",
        description: "Ladel, spoon, scoop, or siphon the mixture into your swing-top bottles using a funnel to avoid a mess.",
        tips: ["Leave a little bit of room at the top, maybe 2-3 inches"]
      },
      {
        id: "6-4",
        title: "Store",
        description: "Close the bottles and park them back at your fermentation station."
      }
    ]
  },
  {
    day: "Days 7-10",
    title: "Secondary Fermentation",
    description: "This is our secondary fermentation. The critters inside the bottle will feed on the remaining sugar and fart out some gas. Because the bottles are sealed, those farts will get cycled back into the liquid and POOF > carbonatiòn",
    steps: [
      {
        id: "7-1",
        title: "The Daily Burp",
        description: "Each day, it is important to open the bottles. This is called burping.",
        tips: ["Do this over the sink just in case"],
        warnings: ["If you're lucky, one day you'll start to see some fizz when you pop it open", "If you're unlucky, one day it will blast open and go everywhere like a classroom volcano experiment"]
      },
      {
        id: "7-2",
        title: "Check Carbonation",
        description: "When you burp the bottles, you'll be able to gauge the carbonation level. The more dramatic the burp, the more carbonated your brew has become.",
        tips: ["Listen for the fizz", "Watch for bubbles rising"]
      },
      {
        id: "7-3",
        title: "Finishing Up",
        description: "When it's carbonated to your desired bubble level, you can put them in your fridge and enjoy!",
        tips: ["Cold temperature will slow down fermentation", "Your ginger beer will keep getting less sweet over time"]
      }
    ]
  }
]
