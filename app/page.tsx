import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Pricing from "@/components/pricing/Pricing";
import Extensions from "@/components/extensions/Extensions";
import FrequentlyAskedQuestions from "@/components/faq/FrequentlyAskedQuestions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Hero />
      <Features />
      <Extensions />
      <Pricing />
        <FrequentlyAskedQuestions />
    </main>
  );
}
