"use client";

import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { TrajectorySection } from "./TrajectorySection";
import { FeaturesSection } from "./FeaturesSection";
import { InteractiveDemo } from "./InteractiveDemo";
import { QuoteSection } from "./QuoteSection";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F3EFE6] text-[#18211D] selection:bg-[#C9795D]/20 selection:text-[#173C32]">
      <Navbar />
      <main>
        <HeroSection />
        <TrajectorySection />
        <FeaturesSection />
        <InteractiveDemo />
        <QuoteSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
