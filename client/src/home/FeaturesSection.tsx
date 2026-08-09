"use client";

import {
  Activity,
  BrainCircuit,
  Compass,
  Lock,
  Target,
  Workflow,
} from "lucide-react";

const FEATURES = [
  {
    number: "01",
    title: "Personal Intelligence Engine",
    description:
      "Analyzes your ambient daily check-ins, sleep quality, and focus windows to surface invisible patterns in your routines.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Habit Trajectory Mapping",
    description:
      "Predicts your 30-day, 90-day, and 180-day growth trajectories based on current habit momentum and consistency.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Intentional Reflection Space",
    description:
      "Editorial journaling prompts designed to reduce cognitive friction and focus on what truly shapes your future.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Holistic Life Balance Matrix",
    description:
      "Track career, health, relationships, and self-mastery in a unified, beautifully styled dashboard.",
    icon: Activity,
  },
  {
    number: "05",
    title: "Predictive Goal Alignment",
    description:
      "Align short-term tasks with long-term aspirations so every daily action contributes to real transformation.",
    icon: Target,
  },
  {
    number: "06",
    title: "Private & Encrypted Workspace",
    description:
      "Your personal data and insights stay 100% private, client-side encrypted, and completely under your control.",
    icon: Lock,
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative bg-[#F3EFE6] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9795D]">
            System Capabilities / 03
          </p>

          <h2 className="mt-3 font-serif text-[clamp(2.5rem,4vw,4rem)] leading-[0.95] tracking-[-0.04em] text-[#18211D]">
            Designed for Clarity & Intentionality
          </h2>

          <p className="mt-4 text-base leading-7 text-[#18211D]/65 sm:text-lg">
            LIFEOS replaces chaotic habit apps with an elegant, editorial system built around long-term personal intelligence.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.number}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#18211D]/10 bg-[#F8F5EE] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#173C32]/40 hover:bg-white hover:shadow-xl"
              >
                <div>
                  {/* Top Row: Icon & Number */}
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#173C32]/10 text-[#173C32] transition group-hover:bg-[#173C32] group-hover:text-[#F3EFE6]">
                      <Icon size={22} />
                    </div>

                    <span className="font-serif text-sm font-semibold tracking-[0.2em] text-[#C9795D]">
                      {feature.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 font-serif text-2xl font-medium text-[#18211D]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#18211D]/65">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Border Accent */}
                <div className="mt-6 h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-[#18211D]/10 to-transparent transition group-hover:via-[#173C32]" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
