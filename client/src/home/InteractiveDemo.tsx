"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, Sliders, Sparkles, Sun, Moon, Flame } from "lucide-react";

export const InteractiveDemo = () => {
  const [energyLevel, setEnergyLevel] = useState(8);
  const [completedHabits, setCompletedHabits] = useState([true, true, false, true]);

  const habits = [
    { title: "Morning Stillness & Reflection", duration: "15 min" },
    { title: "Deep Work Focus Window", duration: "90 min" },
    { title: "Physical Movement & Health", duration: "45 min" },
    { title: "Evening Journaling & Trajectory Review", duration: "10 min" },
  ];

  const toggleHabit = (index: number) => {
    setCompletedHabits((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const completedCount = completedHabits.filter(Boolean).length;
  const score = Math.round((completedCount / habits.length) * 70 + energyLevel * 3);

  return (
    <section id="intelligence" className="relative bg-[#EFEAE0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9795D]">
            Live Interface Preview / 04
          </p>

          <h2 className="mt-3 font-serif text-[clamp(2.5rem,4vw,4rem)] leading-[0.95] tracking-[-0.04em] text-[#18211D]">
            Experience the Daily Briefing
          </h2>

          <p className="mt-4 text-base leading-7 text-[#18211D]/65 sm:text-lg">
            Try adjusting your energy slider and toggling habits below to see how LIFEOS calculates real-time daily alignment.
          </p>
        </div>

        {/* Interactive Dashboard Mockup Widget */}
        <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-[#18211D]/12 bg-[#F8F5EE] p-6 shadow-2xl sm:p-10">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#18211D]/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#173C32] text-[#F7F3EA]">
                <Sun size={20} />
              </div>
              <div>
                <p className="font-serif text-lg font-semibold text-[#18211D]">Today&apos;s Intelligence Summary</p>
                <p className="text-xs text-[#18211D]/50">Sunday, August 9, 2026</p>
              </div>
            </div>

            {/* Streak & Score pills */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-full bg-[#C9795D]/15 px-3 py-1.5 text-xs font-semibold text-[#C9795D]">
                <Flame size={15} />
                <span>14 Day Streak</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-[#173C32]/10 px-3.5 py-1.5 text-xs font-semibold text-[#173C32]">
                <Sparkles size={15} />
                <span>Alignment: {score}%</span>
              </div>
            </div>
          </div>

          {/* Interactive Controls & Cards Grid */}
          <div className="mt-8 grid gap-8 md:grid-cols-12">
            
            {/* Left: Energy Slider & Intelligence Box */}
            <div className="space-y-6 md:col-span-5">
              
              {/* Energy Level Slider */}
              <div className="rounded-xl bg-white p-5 border border-[#18211D]/8 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#18211D]/70">
                    Energy & Focus Level
                  </span>
                  <span className="font-serif text-xl font-bold text-[#173C32]">
                    {energyLevel} / 10
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="10"
                  value={energyLevel}
                  onChange={(e) => setEnergyLevel(Number(e.target.value))}
                  className="mt-4 h-2 w-full cursor-pointer accent-[#173C32]"
                />

                <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.12em] text-[#18211D]/45">
                  <span>Low Energy</span>
                  <span>Optimal Peak</span>
                </div>
              </div>

              {/* Real-time AI Insight Box */}
              <div className="rounded-xl bg-[#173C32] p-5 text-[#F7F3EA] shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9795D]">
                  <Sparkles size={14} />
                  <span>LIFEOS Prediction</span>
                </div>

                <p className="mt-3 text-xs leading-5 text-[#F7F3EA]/85">
                  {score >= 80
                    ? "High momentum detected! Your trajectory is compounding rapidly. Peak focus window is available this afternoon."
                    : score >= 60
                    ? "Steady consistency. Completing 1 more habit will boost your 30-day projection by +12%."
                    : "Low energy baseline. Focus on light stillness and recovery before tackling heavy deep work."}
                </p>
              </div>

            </div>

            {/* Right: Interactive Habit Checklist */}
            <div className="md:col-span-7">
              <div className="rounded-xl bg-white p-5 border border-[#18211D]/8 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#18211D]/8 pb-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#18211D]/70">
                    Daily Core Habits ({completedCount}/{habits.length})
                  </p>
                  <span className="text-xs text-[#18211D]/45">Click to toggle</span>
                </div>

                <div className="mt-4 space-y-3">
                  {habits.map((h, i) => {
                    const isDone = completedHabits[i];
                    return (
                      <div
                        key={h.title}
                        onClick={() => toggleHabit(i)}
                        className={`flex cursor-pointer items-center justify-between rounded-lg p-3.5 transition duration-200 ${
                          isDone
                            ? "bg-[#173C32]/5 border border-[#173C32]/20"
                            : "bg-[#F3EFE6] hover:bg-[#EAE4D7]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`grid h-5 w-5 place-items-center rounded-full transition ${
                              isDone ? "bg-[#173C32] text-white" : "border-2 border-[#18211D]/30"
                            }`}
                          >
                            {isDone && <CheckCircle2 size={14} />}
                          </div>

                          <span
                            className={`text-xs font-medium transition ${
                              isDone ? "text-[#18211D] line-through opacity-70" : "text-[#18211D]"
                            }`}
                          >
                            {h.title}
                          </span>
                        </div>

                        <span className="text-[10px] font-semibold tracking-wider text-[#18211D]/45 uppercase">
                          {h.duration}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
