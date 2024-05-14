import Hero from "@/components/hero/page";
import Features from "@/components/features/page";
import Pricing from "@/components/pricing/Pricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
        <Features />
        <Pricing />
    </main>
  );
}
