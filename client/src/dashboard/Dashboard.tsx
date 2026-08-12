"use client";

import { CalendarDays, Plus } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckInPanel, GoalsPanel } from "./BottomPanels";
import { InsightCard } from "./InsightCard";
import { MetricCards } from "./MetricCards";
import { Sidebar } from "./Sidebar";
import { TrajectoryChart } from "./TrajectoryChart";

export function Dashboard() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } };
  return (
    <main className="min-h-screen bg-[#f7f3eb] text-[#102b24] lg:grid lg:grid-cols-[282px_minmax(0,1fr)]">
      <Sidebar />
      <div className="mx-auto min-w-0 w-full max-w-[1240px] px-4 py-9 md:px-8 lg:py-12">
        <motion.header {...reveal} className="mb-9 flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
          <div><h1 className="font-serif text-[38px] leading-none tracking-[-2.5px] md:text-[43px]">Good morning, Vedant.<span className="ml-3 text-[#849083]">⌁</span></h1><p className="mt-3 font-serif text-[18px] text-[#4e5550]">Here’s what’s happening with your life today.</p></div>
          <div className="flex flex-wrap gap-3 lg:mt-1"><button className="flex h-12 items-center gap-3 rounded-lg border border-[#ded8ce] bg-[#faf8f3] px-5 text-[14px]"><CalendarDays size={20} /> Sat, Aug 9, 2025</button><button className="flex h-12 items-center gap-2 rounded-lg bg-[#114737] px-5 text-[15px] text-white"><Plus size={21} /> New Entry</button></div>
        </motion.header>
        <motion.div {...reveal} transition={{ delay: reduceMotion ? 0 : 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}><MetricCards /></motion.div>
        <motion.div {...reveal} transition={{ delay: reduceMotion ? 0 : 0.18, duration: 0.55, ease: [0.16, 1, 0.3, 1] }} className="mb-6 grid gap-6 xl:grid-cols-[1.44fr_1fr] xl:gap-12"><TrajectoryChart /><InsightCard /></motion.div>
        <motion.div {...reveal} transition={{ delay: reduceMotion ? 0 : 0.25, duration: 0.55, ease: [0.16, 1, 0.3, 1] }} className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]"><CheckInPanel /><GoalsPanel /></motion.div>
      </div>
    </main>
  );
}
