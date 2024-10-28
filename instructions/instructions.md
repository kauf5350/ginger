# Product Requirements Document (PRD)
## Ginger Beer Workshop

### Project Overview
We are building a simple web application to be used as a reference for an upcoming multi-day social event at work. We'll be creating ginger beer and I'll be hosting a workshop on how to make it. We'll be doing things live synchronously, but some people will be following along asynchornously so we need a strong reference. 

### Technical Stack
- Next.js 14 with App Router
- React
- shadcn/ui for UI components
- Lucide icons
- Tailwind CSS for styling
- TypeScript for type safety
- next-themes for theme management

### Theme Requirements
- Application must support both dark and light modes
- Dark mode background color should be #09090b
- Header must include theme toggle functionality
- Company logo must switch based on theme:
  - Dark mode: paid-logo-white.png
  - Light mode: paid-logo-black.png
- Theme preference should persist across sessions
- Smooth transition between themes

### Core Functionality
1. Header
   - Sticky positioning
   - Company logo (theme-dependent)
   - Theme toggle button
   - Backdrop blur effect

2. Landing Section
   - Hero section with title and brief introduction
   - Quick overview of the workshop timeline
   - Visual representation of the final product

3. Requirements Section
   - List of required ingredients
   - List of required equipment
   - Optional items that might be helpful

4. Instructions Timeline
   - Day-by-day breakdown of the process
   - Interactive timeline or tabbed interface
   - Step-by-step instructions with visual aids
   - Important tips and warnings for each stage

5. Additional Features
   - Recipe scaling calculator
   - Mobile-responsive design

### User Experience Recommendations
1. Layout:
   - Single-page design with smooth scroll navigation
   - Sticky header with quick jump links
   - Collapsible sections for easy reference

2. Visual Elements:
   - Custom illustrations for each major step
   - Progress timeline visualization
   - Interactive cards for ingredients/equipment
   - Warning/tip callouts using shadcn/ui alerts
   - Theme-aware styling for all components

### Required Packages
1. next-themes - Theme management
2. framer-motion - Animations and transitions
3. react-intersection-observer - Scroll-based animations
4. @radix-ui/react-tabs - Tab interface (via shadcn/ui)
5. react-to-print - Print functionality

### File Structure
.
├── README.md
├── app
│   ├── favicon.ico
│   ├── fonts
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── error.tsx
├── components
│   ├── ui/
│   │   └── [shadcn components]
│   ├── layout/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── requirements/
│   │   │   ├── index.tsx
│   │   │   ├── ingredient-list.tsx
│   │   │   └── equipment-list.tsx
│   │   ├── timeline/
│   │   │   ├── index.tsx
│   │   │   ├── day-card.tsx
│   │   │   └── progress-indicator.tsx
│   │   └── troubleshooting/
│   │       ├── index.tsx
│   │       └── faq-accordion.tsx
│   └── shared/
│       ├── theme-toggle.tsx
│       ├── ingredient-card.tsx
│       ├── equipment-card.tsx
│       ├── instruction-card.tsx
│       └── page-section.tsx
├── config/
│   ├── site.ts          # Site-wide configuration
│   └── constants.ts     # Global constants and enums
├── data/
│   ├── ingredients.ts   # List of required ingredients
│   ├── equipment.ts     # List of required equipment
│   ├── instructions/    # Day-by-day instructions
│   │   ├── day-1.ts
│   │   ├── day-2-5.ts
│   │   ├── day-6.ts
│   │   └── day-7-10.ts
│   └── faq.ts          # Troubleshooting and FAQ data
├── hooks/
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── use-scroll-spy.ts
├── lib/
│   └── utils.ts        # Utility functions
├── public/
│   ├── paid-logo-black.png
│   ├── paid-logo-white.png
│   └── images/
│       ├── equipment/
│       ├── ingredients/
│       └── process/
├── styles/
│   └── animations.ts   # Framer motion animations
├── types/
│   ├── ingredient.ts
│   ├── equipment.ts
│   └── instruction.ts
├── components.json     # shadcn/ui configuration
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json