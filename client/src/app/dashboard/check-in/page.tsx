"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Clock3, Dumbbell, Moon, Sparkles } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { entriesApi } from "@/lib/api";
import { Sidebar } from "@/dashboard/Sidebar";

type FormValues = {
  sleep: number;
  mood: number;
  energy: number;
  focus: number;
  exercise: number;
  studyHours: number;
  screenTime: number;
};

const initialValues: FormValues = { sleep: 7.5, mood: 7, energy: 7, focus: 7, exercise: 0, studyHours: 0, screenTime: 0 };
const today = () => new Date().toISOString().slice(0, 10);
const prettyDate = (date: string) => new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(new Date(`${date}T12:00:00`));

const numberFields: { key: "sleep" | "exercise" | "studyHours" | "screenTime"; title: string; caption: string; unit: string; icon: typeof Moon }[] = [
  { key: "sleep", title: "Sleep", caption: "How long did you sleep?", unit: "hours", icon: Moon },
  { key: "exercise", title: "Exercise", caption: "Movement that felt good.", unit: "minutes", icon: Dumbbell },
  { key: "studyHours", title: "Study / work", caption: "Time spent in focused work.", unit: "hours", icon: Clock3 },
  { key: "screenTime", title: "Screen time", caption: "Time on screens today.", unit: "hours", icon: Sparkles },
];

const rangeFields: { key: "mood" | "energy" | "focus"; title: string; caption: string }[] = [
  { key: "mood", title: "Mood", caption: "How did the day feel overall?" },
  { key: "energy", title: "Energy", caption: "How much energy did you have?" },
  { key: "focus", title: "Focus", caption: "How present and absorbed were you?" },
];

export default function CheckInPage() {
  const router = useRouter();
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const date = useMemo(today, []);
  const updateValue = (key: keyof FormValues, value: number) => setValues((current) => ({ ...current, [key]: value }));

  const validate = () => {
    if (values.sleep < 0 || values.exercise < 0 || values.studyHours < 0 || values.screenTime < 0) return "Time values can’t be negative.";
    if ([values.mood, values.energy, values.focus].some((value) => value < 1 || value > 10)) return "Mood, energy, and focus must be between 1 and 10.";
    return "";
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = validate();
    if (validationError) { setError(validationError); return; }
    try {
      setLoading(true); setError("");
      await entriesApi.create({ date, ...values });
      setSuccess(true);
      window.setTimeout(() => router.push("/dashboard"), 1200);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "We couldn’t save your check-in. Please try again.");
    } finally { setLoading(false); }
  };

  return <main className="min-h-screen bg-[#f7f3eb] text-[#102b24] lg:grid lg:grid-cols-[282px_minmax(0,1fr)]"><Sidebar /><div className="mx-auto w-full max-w-[1100px] px-5 py-9 sm:px-8 lg:px-12 lg:py-12"><motion.header initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="mb-10 flex flex-wrap items-start justify-between gap-6"><div><Link href="/dashboard" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[.17em] text-[#5b665f] transition hover:text-[#124236]"><ArrowLeft size={15} /> Dashboard</Link><p className="mt-8 text-[11px] font-semibold uppercase tracking-[.27em] text-[#bf6949]">Daily check-in</p><h1 className="mt-3 font-serif text-[clamp(2.7rem,5vw,4.2rem)] leading-[.92] tracking-[-.045em]">Take a moment to understand<br className="hidden md:block" /> where you are today.</h1></div><div className="mt-1 border-l border-[#dfd7ca] pl-5 text-right"><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#68736c]">Today</p><p className="mt-2 font-serif text-lg">{prettyDate(date)}</p></div></motion.header><form onSubmit={submit} className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_290px] lg:items-start"><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .55 }} className="border-y border-[#e3dcd1]"><section className="py-7"><p className="text-[10px] font-semibold uppercase tracking-[.23em] text-[#68736c]">Your rhythms</p><div className="mt-2 divide-y divide-[#e7e0d6]">{numberFields.slice(0, 1).map((field) => <NumberField key={field.key} field={field} value={values[field.key]} onChange={updateValue} />)}{rangeFields.map((field) => <RangeField key={field.key} field={field} value={values[field.key]} onChange={updateValue} />)}</div></section><section className="border-t border-[#e7e0d6] py-7"><p className="text-[10px] font-semibold uppercase tracking-[.23em] text-[#68736c]">How you spent your time</p><div className="mt-2 divide-y divide-[#e7e0d6]">{numberFields.slice(1).map((field) => <NumberField key={field.key} field={field} value={values[field.key]} onChange={updateValue} />)}</div></section></motion.div><motion.aside initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16, duration: .55 }} className="sticky top-8 rounded-[10px] border border-[#e3dcd1] bg-[#fcfaf6] p-6"><p className="text-[10px] font-semibold uppercase tracking-[.23em] text-[#bf6949]">Today</p><div className="mt-5 space-y-4 border-y border-[#e7e0d6] py-5">{([['Sleep', `${values.sleep}h`], ['Mood', `${values.mood}/10`], ['Energy', `${values.energy}/10`], ['Focus', `${values.focus}/10`]] as const).map(([label, value]) => <div key={label} className="flex items-baseline justify-between"><span className="text-sm text-[#59635d]">{label}</span><span className="font-serif text-xl">{value}</span></div>)}</div><AnimatePresence>{error && <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="alert" className="mt-4 text-sm leading-5 text-[#a84d31]">{error}</motion.p>}</AnimatePresence><button type="submit" disabled={loading || success} className="group mt-6 flex w-full items-center justify-between rounded-lg bg-[#124236] px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#0d382e] disabled:cursor-not-allowed disabled:opacity-70"><span>{loading ? "Saving your check-in…" : success ? "Saved to LIFEOS" : "Save today’s entry"}</span><span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 transition group-hover:translate-x-1">{loading ? <span className="h-3.5 w-3.5 animate-spin rounded-full border border-white/30 border-t-white" /> : success ? <Check size={16} /> : <ArrowRight size={16} />}</span></button><p className="mt-4 text-center text-[11px] leading-5 text-[#707671]">Your entry is saved securely to your LIFEOS history.</p></motion.aside></form>{success && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 grid place-items-center bg-[#102b24]/20 p-5"><motion.div initial={{ scale: .96, y: 12 }} animate={{ scale: 1, y: 0 }} className="w-full max-w-sm rounded-xl bg-[#fcfaf6] p-8 text-center shadow-2xl"><div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#dce9df] text-[#124236]"><Check size={24} /></div><p className="mt-5 font-serif text-3xl">Check-in saved.</p><p className="mt-2 text-sm text-[#59635d]">Your dashboard is updating with today’s rhythm.</p></motion.div></motion.div>}</div></main>;
}

const NumberField = ({ field, value, onChange }: { field: (typeof numberFields)[number]; value: number; onChange: (key: keyof FormValues, value: number) => void }) => { const Icon = field.icon; return <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-4"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#e8ebe2] text-[#124236]"><Icon size={19} strokeWidth={1.6} /></span><div><h2 className="font-serif text-2xl">{field.title}</h2><p className="mt-1 text-sm text-[#69716d]">{field.caption}</p></div></div><label className="flex items-center self-end border-b border-[#bfc8bc] pb-1 sm:self-auto"><input aria-label={field.title} type="number" min="0" step={field.key === "exercise" ? "1" : "0.1"} value={value} onChange={(event) => onChange(field.key, Number(event.target.value))} className="w-20 bg-transparent text-right font-serif text-3xl outline-none" /><span className="ml-2 text-xs uppercase tracking-[.14em] text-[#69716d]">{field.unit}</span></label></div>; };

const RangeField = ({ field, value, onChange }: { field: (typeof rangeFields)[number]; value: number; onChange: (key: keyof FormValues, value: number) => void }) => <div className="py-5"><div className="flex items-end justify-between"><div><h2 className="font-serif text-2xl">{field.title}</h2><p className="mt-1 text-sm text-[#69716d]">{field.caption}</p></div><span className="font-serif text-3xl">{value}<small className="ml-1 font-sans text-sm text-[#69716d]">/10</small></span></div><input aria-label={field.title} type="range" min="1" max="10" value={value} onChange={(event) => onChange(field.key, Number(event.target.value))} className="mt-5 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[#dfe3d9] accent-[#124236]" /></div>;
