"use client";

import Link from "next/link";
import { ArrowRight, Compass, Sparkles, TrendingUp, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Animated Background Decorative Arc */}
      <div className="pointer-events-none absolute -right-32 -top-40 h-[700px] w-[700px] rounded-full border border-[#C9795D]/20 opacity-70 animate-spin-slow" />
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-3.5 w-3.5 rounded-full bg-[#C9795D] animate-pulse-glow" />
      <div className="pointer-events-none absolute right-[25%] top-[15%] h-2.5 w-2.5 rounded-full bg-[#173C32]/40 animate-pulse-glow" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9795D]/30 bg-[#C9795D]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C9795D] transition duration-300 hover:bg-[#C9795D]/20 hover:scale-105">
              <Sparkles size={13} className="text-[#C9795D] animate-spin" />
              Personal Intelligence Platform / 01
            </div>

            <h1 className="mt-6 font-serif text-[clamp(3rem,5.5vw,5.5rem)] leading-[0.92] tracking-[-0.05em] text-[#18211D]">
              Understand today.
              <br />
              Shape{" "}
              <span className="italic text-[#708571] underline decoration-[#C9795D]/30 underline-offset-8 transition-colors duration-500 hover:text-[#173C32]">
                tomorrow.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#18211D]/70 sm:text-lg">
              LIFEOS learns from the daily patterns of your habits, energy, and goals—turning ambient life data into a clear visual trajectory of where you are heading.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/register"
                className="group flex h-13 items-center justify-between gap-4 rounded-xl bg-[#173C32] px-6 text-sm font-semibold text-[#F7F3EA] shadow-md transition-all duration-300 hover:bg-[#204D41] hover:shadow-xl hover:scale-[1.02]"
              >
                <span>Start Your 180-Day Journey</span>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:bg-white/20">
                  <ArrowRight size={16} />
                </span>
              </Link>

              <Link
                href="#trajectory"
                className="flex h-13 items-center justify-center rounded-xl border border-[#18211D]/15 bg-[#F8F5EE] px-6 text-sm font-medium text-[#18211D] transition-all duration-300 hover:border-[#18211D]/30 hover:bg-white hover:shadow-sm hover:scale-[1.02]"
              >
                Explore Trajectory Demo
              </Link>
            </div>

            {/* Key stats pill row */}
            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-[#18211D]/10 pt-8">
              <div className="transition duration-300 hover:scale-105">
                <p className="font-serif text-2xl font-semibold text-[#173C32]">180 Days</p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-[#18211D]/50">Transformation Horizon</p>
              </div>

              <div className="h-8 w-px bg-[#18211D]/10 hidden sm:block" />

              <div className="transition duration-300 hover:scale-105">
                <p className="font-serif text-2xl font-semibold text-[#173C32]">94%</p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-[#18211D]/50">Clarity Metric</p>
              </div>

              <div className="h-8 w-px bg-[#18211D]/10 hidden sm:block" />

              <div className="transition duration-300 hover:scale-105">
                <p className="font-serif text-2xl font-semibold text-[#173C32]">Zero</p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-[#18211D]/50">Overwhelm</p>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Interactive Card Stack Preview */}
          <div className="relative lg:col-span-5 animate-float-slow">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card frame */}
              <div className="rounded-2xl border border-[#18211D]/12 bg-[#F8F5EE]/90 p-6 shadow-xl backdrop-blur-md transition duration-500 hover:shadow-2xl hover:border-[#173C32]/30">
                
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-[#18211D]/8 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#173C32] text-[#F3EFE6] shadow-sm">
                      <Compass size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#18211D]">Daily Trajectory</p>
                      <p className="text-[11px] text-[#18211D]/50">Active Forecast: Phase 01</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-[#173C32]/10 px-2.5 py-1 text-[10px] font-semibold text-[#173C32]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#173C32] animate-ping" />
                    LIVE PATTERN
                  </span>
                </div>

                {/* Score gauge mockup */}
                <div className="my-6 rounded-xl bg-white p-5 border border-[#18211D]/8 shadow-sm transition duration-300 hover:scale-[1.02] hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#18211D]/50">Consistency Score</p>
                      <p className="mt-1 font-serif text-3xl font-bold text-[#173C32]">88 / 100</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9795D]/15 text-[#C9795D] transition duration-300 hover:scale-110">
                      <TrendingUp size={22} />
                    </div>
                  </div>
                  
                  {/* Animated Progress bar */}
                  <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#F3EFE6]">
                    <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-[#173C32] via-[#708571] to-[#C9795D] transition-all duration-1000" />
                  </div>
                </div>

                {/* Micro highlights */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-[#F3EFE6] p-3 text-xs transition duration-200 hover:bg-white hover:shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <Zap size={15} className="text-[#C9795D]" />
                      <span className="font-medium text-[#18211D]">Morning Intentions</span>
                    </div>
                    <span className="font-semibold text-[#173C32]">Completed</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-[#F3EFE6] p-3 text-xs transition duration-200 hover:bg-white hover:shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <TrendingUp size={15} className="text-[#708571]" />
                      <span className="font-medium text-[#18211D]">30-Day Momentum Curve</span>
                    </div>
                    <span className="font-semibold text-[#173C32]">+18% vs last week</span>
                  </div>
                </div>

              </div>

              {/* Decorative background floating element */}
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border border-[#C9795D]/20 bg-[#C9795D]/5 animate-pulse-glow" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
