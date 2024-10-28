import Image from "next/image";
import { Header } from '@/components/layout/header'
import { Hero } from '@/components/sections/hero'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        {/* Other sections will go here */}
      </main>
    </div>
  );
}
