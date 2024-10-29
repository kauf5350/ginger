import Image from "next/image";
import { Header } from '@/components/layout/header'
import { Hero } from '@/components/sections/hero'
import { Requirements } from '@/components/sections/requirements'
import { Timeline } from '@/components/sections/timeline'
import { Calculator } from '@/components/sections/calculator'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-16">
        <Hero />
        <div className="flex flex-col gap-24">
          <Requirements />
          <Timeline />
          <Calculator />
        </div>
      </main>
    </div>
  );
}
