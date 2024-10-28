import Image from "next/image";
import { Header } from '@/components/layout/header'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Other content will go here */}
    </div>
  );
}
