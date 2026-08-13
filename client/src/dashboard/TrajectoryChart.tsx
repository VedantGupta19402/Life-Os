"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { LifeEntry } from "@/lib/api";

const trends = {
  focus: { label: "Focus Score", accessor: (entry: LifeEntry) => entry.focus, max: 10 },
  mood: { label: "Mood", accessor: (entry: LifeEntry) => entry.mood, max: 10 },
  energy: { label: "Energy", accessor: (entry: LifeEntry) => entry.energy, max: 10 },
  sleep: { label: "Sleep", accessor: (entry: LifeEntry) => entry.sleep, max: 10 },
} as const;

type Trend = keyof typeof trends;
const formatDate = (date: string) => new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(new Date(`${date}T12:00:00`));

export function TrajectoryChart({ entries }: { entries: LifeEntry[] }) {
  const [trend, setTrend] = useState<Trend>("focus");
  const [open, setOpen] = useState(false);
  const chartEntries = useMemo(() => [...entries].sort((a, b) => a.date.localeCompare(b.date)).slice(-7), [entries]);
  const config = trends[trend];
  const points = chartEntries.map((entry, index) => {
    const x = chartEntries.length === 1 ? 340 : 18 + (644 * index) / (chartEntries.length - 1);
    return { x, y: 166 - (config.accessor(entry) / config.max) * 145, value: config.accessor(entry) };
  });
  const path = points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
  const area = points.length ? `${path} L ${points.at(-1)?.x} 166 L ${points[0].x} 166 Z` : "";

  return <motion.section whileHover={{ y: -3 }} transition={{ duration: 0.22 }} className="relative overflow-visible rounded-[10px] border border-[#e6ded2] bg-[#fcfaf6]">
    <div className="flex items-center justify-between px-6 pb-4 pt-6"><h2>Your Life Trajectory</h2><div className="relative"><button onClick={() => setOpen((value) => !value)} aria-expanded={open} className="flex min-w-[141px] items-center justify-center gap-3 rounded-lg border border-[#e1dbd1] bg-[#fcfaf6] px-3 py-2.5 text-[13px]">{config.label} <ChevronDown size={17} /></button>{open && <div className="absolute right-0 z-10 mt-2 w-36 rounded-lg border border-[#e1dbd1] bg-[#fcfaf6] p-1 shadow-lg">{(Object.keys(trends) as Trend[]).map((key) => <button key={key} onClick={() => { setTrend(key); setOpen(false); }} className="w-full rounded-md px-3 py-2 text-left text-[13px] hover:bg-[#efede5]">{trends[key].label}</button>)}</div>}</div></div>
    <div className="grid grid-cols-[43px_1fr] px-6 pb-8 pt-3"><div className="flex h-[164px] flex-col justify-between text-[12px] text-[#5b625e]"><span>{config.max}</span><span>{config.max * .75}</span><span>{config.max / 2}</span><span>{config.max * .25}</span><span>0</span></div><svg className="h-[164px] w-full overflow-visible" viewBox="0 0 680 190" preserveAspectRatio="none" role="img" aria-label={`${config.label} history based on your entries`}><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#173f35" stopOpacity=".18" /><stop offset="100%" stopColor="#173f35" stopOpacity=".02" /></linearGradient></defs>{[21,57,93,129,166].map((y) => <line key={y} x1="0" y1={y} x2="680" y2={y} stroke="#dedbd2" strokeWidth="1" strokeDasharray="2 3" />)}<path d={area} fill="url(#chartFill)" /><path d={path} fill="none" stroke="#143e33" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />{points.map((point, index) => <circle key={`${point.x}-${point.value}`} cx={point.x} cy={point.y} r={index === points.length - 1 ? 6 : 4} fill={index === points.length - 1 ? "#f4f1e9" : "#164638"} stroke="#164638" strokeWidth={index === points.length - 1 ? 4 : 1} />)}</svg><div className="col-start-2 flex justify-between gap-2 pt-3 text-[12px] text-[#59605c]">{chartEntries.map((entry, index) => <span key={entry._id} className={index === chartEntries.length - 1 ? "font-bold text-[#192923]" : ""}>{formatDate(entry.date)}</span>)}</div></div>
  </motion.section>;
}
