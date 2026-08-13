"use client";

import Link from "next/link";
import { CalendarDays, Plus, RefreshCw } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { entriesApi, type LifeEntry } from "@/lib/api";
import { CheckInPanel, GoalsPanel } from "./BottomPanels";
import { InsightCard } from "./InsightCard";
import { MetricCards } from "./MetricCards";
import { Sidebar } from "./Sidebar";
import { TrajectoryChart } from "./TrajectoryChart";

const formatLongDate = (date: string) => new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" }).format(new Date(`${date}T12:00:00`));

export function Dashboard() {
  const [entries, setEntries] = useState<LifeEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const reduceMotion = useReducedMotion();
  const loadEntries = useCallback(async () => { try { setLoading(true); setError(""); const response = await entriesApi.getAll(); setEntries(response.entries); } catch (loadError) { setError(loadError instanceof Error ? loadError.message : "We couldn’t load your entries right now."); } finally { setLoading(false); } }, []);
  useEffect(() => { void loadEntries(); }, [loadEntries]);
  const latestEntry = useMemo(() => [...entries].sort((a, b) => b.date.localeCompare(a.date))[0], [entries]);
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: .55, ease: [0.16, 1, .3, 1] as const } };

  return <main className="min-h-screen bg-[#f7f3eb] text-[#102b24] lg:grid lg:grid-cols-[282px_minmax(0,1fr)]"><Sidebar /><div className="mx-auto min-w-0 w-full max-w-[1240px] px-4 py-9 md:px-8 lg:py-12"><motion.header {...reveal} className="mb-9 flex flex-col justify-between gap-6 lg:flex-row lg:items-start"><div><h1 className="font-serif text-[38px] leading-none tracking-[-2.5px] md:text-[43px]">Your LIFEOS<span className="ml-3 text-[#849083]">⌁</span></h1><p className="mt-3 font-serif text-[18px] text-[#4e5550]">Your daily patterns, clearly in view.</p></div><div className="flex flex-wrap gap-3 lg:mt-1"><div className="flex h-12 items-center gap-3 rounded-lg border border-[#ded8ce] bg-[#faf8f3] px-5 text-[14px]"><CalendarDays size={20} /> {latestEntry ? formatLongDate(latestEntry.date) : "Your daily overview"}</div><Link href="/dashboard/check-in" className="flex h-12 items-center gap-2 rounded-lg bg-[#114737] px-5 text-[15px] text-white"><Plus size={21} /> New Entry</Link></div></motion.header>{loading ? <LoadingState /> : error ? <ErrorState message={error} onRetry={loadEntries} /> : !latestEntry ? <EmptyState /> : <><motion.div {...reveal} transition={{ delay: .1, duration: .55, ease: [0.16, 1, .3, 1] }}><MetricCards entry={latestEntry} /></motion.div><motion.div {...reveal} transition={{ delay: .18, duration: .55, ease: [0.16, 1, .3, 1] }} className="mb-6 grid gap-6 xl:grid-cols-[1.44fr_1fr] xl:gap-12"><TrajectoryChart entries={entries} /><InsightCard /></motion.div><motion.div {...reveal} transition={{ delay: .25, duration: .55, ease: [0.16, 1, .3, 1] }} className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]"><CheckInPanel /><GoalsPanel /></motion.div></>}</div></main>;
}

const LoadingState = () => <div className="grid gap-6"><div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">{Array.from({ length: 6 }, (_, index) => <div key={index} className="h-[158px] animate-pulse rounded-[10px] border border-[#e6ded2] bg-[#fcfaf6]" />)}</div><div className="h-[330px] animate-pulse rounded-[10px] border border-[#e6ded2] bg-[#fcfaf6]" /></div>;

const ErrorState = ({ message, onRetry }: { message: string; onRetry: () => void }) => <section className="rounded-[10px] border border-[#e6ded2] bg-[#fcfaf6] px-7 py-16 text-center"><p className="font-serif text-3xl">Your dashboard needs a moment.</p><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#545a56]">{message}</p><button onClick={onRetry} className="mx-auto mt-7 flex items-center gap-2 rounded-lg bg-[#124236] px-5 py-3 text-sm text-white"><RefreshCw size={16} /> Try again</button></section>;

const EmptyState = () => <section className="rounded-[10px] border border-[#e6ded2] bg-[#fcfaf6] px-7 py-16 text-center"><p className="font-serif text-3xl">Your LIFEOS starts with one check-in.</p><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#545a56]">Capture today’s rhythm and watch your personal trajectory take shape.</p><Link href="/dashboard/check-in" className="mx-auto mt-7 inline-flex items-center gap-2 rounded-lg bg-[#124236] px-5 py-3 text-sm text-white"><Plus size={16} /> Begin today’s check-in</Link></section>;
