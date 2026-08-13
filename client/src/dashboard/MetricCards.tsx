import { metrics } from "./dashboard-data";
import { motion } from "framer-motion";
import type { LifeEntry } from "@/lib/api";

const metricValues = (entry: LifeEntry) => ({
  Sleep: entry.sleep,
  Focus: entry.focus,
  Mood: entry.mood,
  Exercise: entry.exercise,
  Study: entry.studyHours,
  "Screen Time": entry.screenTime,
});

export function MetricCards({ entry }: { entry: LifeEntry }) {
  const values = metricValues(entry);
  return (
    <section className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6" aria-label="Today's metrics">
      {metrics.map(({ label, unit, icon: Icon, iconTone }) => (
        <motion.article whileHover={{ y: -5, boxShadow: "0 12px 24px rgba(20, 62, 51, .08)" }} transition={{ duration: 0.22 }} className="flex min-h-[158px] gap-4 rounded-[10px] border border-[#e6ded2] bg-[#fcfaf6] px-4 py-7" key={label}>
          <div className={`grid h-[62px] w-[62px] shrink-0 place-items-center rounded-full text-[#0f3e32] ${iconTone === "peach" ? "bg-[#f0d9c9]" : "bg-[#dce1d6]"}`}>
            <Icon size={31} strokeWidth={1.45} />
          </div>
          <div>
            <p className="mb-3 mt-1 text-[12px] uppercase">{label}</p>
            <div className="font-serif text-[37px] leading-none tracking-[-1.7px]">{values[label as keyof typeof values]}<span className="ml-1 font-sans text-[16px] tracking-normal">{unit}</span></div>
            <p className="mt-5 whitespace-nowrap text-[13px] text-[#3e4541]"><i className="mr-2 inline-block h-2 w-2 rounded-full bg-[#1d8963]" />Latest entry</p>
          </div>
        </motion.article>
      ))}
    </section>
  );
}
