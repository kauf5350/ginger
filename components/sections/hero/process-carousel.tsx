"use client";
import React from "react";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Static card component without click behavior
function StaticCard({ card }: { card: typeof processSteps[0] }) {
  return (
    <div className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative">
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-8">
        <p className="text-white text-sm md:text-base font-medium font-sans text-left">
          {card.category}
        </p>
        <p className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
          {card.title}
        </p>
      </div>
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute z-10 inset-0"
      />
    </div>
  );
}

const processSteps = [
  {
    category: "Day 1",
    title: "Preparation and Initial Soak",
    src: "/images/process/day-1.jpg",
  },
  {
    category: "Days 2-5",
    title: "Primary Fermentation",
    src: "/images/process/days-2-5.jpg",
  },
  {
    category: "Day 6",
    title: "Bottling time",
    src: "/images/process/day-6.jpg",
  },
  {
    category: "Days 7-10",
    title: "Secondary Fermentation",
    src: "/images/process/days-7-10.jpg",
  },
];

export function ProcessCarousel() {
  const cards = processSteps.map((card, index) => (
    <StaticCard key={card.src} card={card} />
  ));

  return (
    <div className="w-full">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Process Overview</h2>
      </div>
      <Carousel items={cards} />
    </div>
  );
}
