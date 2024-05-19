"use client"

import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Pricing from "@/components/pricing/Pricing";
import Extensions from "@/components/extensions/Extensions";
import FrequentlyAskedQuestions from "@/components/faq/FrequentlyAskedQuestions";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";

export default function Home() {
    const {data:session} = useSession();
    if(session){
        redirect('/bookmarks')
    }
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
