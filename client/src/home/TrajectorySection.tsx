"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, Sparkles, Target } from "lucide-react";

const TRAJECTORY_STAGES = [
  {
    id: "today",
    label: "Today",
    subtitle: "You Are Here",
    tagline: "Foundation & Baseline Logging",
    description:
      "Capture ambient daily inputs, energy levels, and essential reflections without overwhelming effort.",
    metrics: [
      { label: "Clarity Score", value: "62%" },
      { label: "Daily Friction", value: "Low" },
      { label: "Focus Window", value: "2.5 hrs" },
    ],
    highlights: ["Habit Baseline Established", "Intentional Morning Check-in", "Zero Noise Logging"],
  },
  {
    id: "30days",
    label: "30 Days",
    subtitle: "Consistency Phase",
    tagline: "Rhythm & Habit Stabilization",
    description:
      "Micro-habits compound into automatic behaviors. Pattern recognition begins identifying your peak productive hours.",
    metrics: [
      { label: "Clarity Score", value: "78%" },
      { label: "Habit Retention", value: "86%" },
      { label: "Focus Window", value: "4.2 hrs" },
    ],
    highlights: ["Automatic Habit Triggers", "Energy Dip Mitigation", "Weekly Pattern Summaries"],
  },
  {
    id: "90days",
    label: "90 Days",
    subtitle: "Momentum Phase",
    tagline: "Compound Growth & Strategic Alignment",
    description:
      "Your decisions align effortlessly with long-term aspirations. Friction drops drastically as clarity increases.",
    metrics: [
      { label: "Clarity Score", value: "89%" },
      { label: "Goal Alignment", value: "92%" },
      { label: "Focus Window", value: "5.5 hrs" },
    ],
    highlights: ["Compound Growth Acceleration", "Deep Work Systemization", "Predictive Life Insights"],
  },
  {
    id: "180days",
    label: "180 Days",
    subtitle: "Transformation",
    tagline: "Mastery & High Intentional Living",
    description:
      "A complete shift in everyday baseline. You no longer react to circumstance—you design your days with intention.",
    metrics: [
      { label: "Clarity Score", value: "96%" },
      { label: "Transformation Index", value: "95%" },
      { label: "Focus Window", value: "6.8 hrs" },
    ],
    highlights: ["Peak Trajectory Mastery", "Subconscious High Performance", "Long-term Future Proofing"],
  },
];

export const TrajectorySection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentStage = TRAJECTORY_STAGES[activeTab];

  return (
    <section id="trajectory" className="relative bg-[#EFEAE0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9795D]">
            Interactive Projection / 02
          </p>

          <h2 className="mt-3 font-serif text-[clamp(2.5rem,4vw,4rem)] leading-[0.95] tracking-[-0.04em] text-[#18211D]">
            The 180-Day Compound Trajectory
          </h2>

          <p className="mt-4 text-base leading-7 text-[#18211D]/65 sm:text-lg">
            Consistent small actions compound exponentially over time. Select a stage below to preview your future growth trajectory.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="mt-12 flex items-center justify-center">
          <div className="inline-flex flex-wrap items-center gap-2 rounded-2xl border border-[#18211D]/10 bg-[#F8F5EE] p-2 shadow-sm">
            {TRAJECTORY_STAGES.map((stage, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex flex-col items-center rounded-xl px-5 py-3 text-left transition duration-200 ${
                    isActive
                      ? "bg-[#173C32] text-[#F7F3EA] shadow-md"
                      : "text-[#18211D]/70 hover:bg-[#EAE4D7] hover:text-[#18211D]"
                  }`}
                >
                  <span className="font-serif text-lg font-medium leading-none">{stage.label}</span>
                  <span
                    className={`mt-1 text-[9px] uppercase tracking-[0.15em] ${
                      isActive ? "text-[#C9795D]" : "text-[#18211D]/45"
                    }`}
                  >
                    {stage.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Trajectory SVG Graphic */}
        <div className="relative mt-12 rounded-2xl border border-[#18211D]/12 bg-[#F8F5EE] p-6 shadow-lg sm:p-10">
          
          <div className="relative h-44 w-full overflow-hidden rounded-xl bg-[#F3EFE6] p-4">
            {/* SVG Trajectory curve */}
            <svg
              viewBox="0 0 900 180"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M60 150 C180 120 300 95 450 65 C600 35 720 20 840 10"
                fill="none"
                stroke="#173C32"
                strokeOpacity="0.25"
                strokeWidth="2"
              />
              <path
                d="M60 156 C180 126 300 101 450 71 C600 41 720 26 840 16"
                fill="none"
                stroke="#C9795D"
                strokeOpacity="0.15"
                strokeWidth="1.5"
              />
            </svg>

            {/* Nodes on curve */}
            <div className="relative flex h-full items-center justify-between px-6 sm:px-16">
              {TRAJECTORY_STAGES.map((st, i) => (
                <div
                  key={st.id}
                  onClick={() => setActiveTab(i)}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeTab === i ? "scale-110" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`mx-auto grid h-7 w-7 place-items-center rounded-full transition ${
                      activeTab === i
                        ? "bg-[#C9795D] text-white ring-4 ring-[#C9795D]/20 shadow-md"
                        : "border-2 border-[#173C32] bg-[#F3EFE6]"
                    }`}
                  >
                    <div
                      className={`h-2 w-2 rounded-full ${
                        activeTab === i ? "bg-white" : "bg-[#173C32]"
                      }`}
                    />
                  </div>
                  <p className="mt-2 text-center font-serif text-sm font-semibold text-[#18211D]">
                    {st.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Active Stage Details Card */}
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
            
            <div className="lg:col-span-7">
              <span className="inline-block rounded-full bg-[#173C32]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#173C32]">
                {currentStage.tagline}
              </span>

              <h3 className="mt-3 font-serif text-3xl font-medium text-[#18211D]">
                {currentStage.label} — {currentStage.subtitle}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#18211D]/70">
                {currentStage.description}
              </p>

              {/* Highlights */}
              <div className="mt-6 grid gap-2.5 sm:grid-cols-3">
                {currentStage.highlights.map((hl) => (
                  <div
                    key={hl}
                    className="flex items-center gap-2 rounded-lg bg-[#F3EFE6] p-2.5 text-xs font-medium text-[#18211D]"
                  >
                    <CheckCircle2 size={15} className="text-[#173C32] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 rounded-xl bg-white p-5 border border-[#18211D]/8 shadow-sm lg:col-span-5">
              {currentStage.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <p className="font-serif text-2xl font-bold text-[#173C32]">{m.value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#18211D]/50">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
