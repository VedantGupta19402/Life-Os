"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { TrajectorySection } from "./TrajectorySection";
import { FeaturesSection } from "./FeaturesSection";
import { InteractiveDemo } from "./InteractiveDemo";
import { QuoteSection } from "./QuoteSection";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";

export const HomePage = () => {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 26 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } };
  return (
    <div className="min-h-screen bg-[#F3EFE6] text-[#18211D] selection:bg-[#C9795D]/20 selection:text-[#173C32]">
      <Navbar />
      <main>
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}><HeroSection /></motion.div>
        <motion.div {...reveal}><TrajectorySection /></motion.div>
        <motion.div {...reveal}><FeaturesSection /></motion.div>
        <motion.div {...reveal}><InteractiveDemo /></motion.div>
        <motion.div {...reveal}><QuoteSection /></motion.div>
        <motion.div {...reveal}><CTASection /></motion.div>
      </main>
      <Footer />
    </div>
  );
};
