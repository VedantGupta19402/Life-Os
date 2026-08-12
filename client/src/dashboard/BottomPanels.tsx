import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { goals } from "./dashboard-data";

export function CheckInPanel() {
  return <motion.section whileHover={{ y: -3 }} transition={{ duration: 0.22 }} className="relative min-h-[214px] overflow-hidden rounded-[10px] border border-[#e6ded2] bg-[#fcfaf6] px-6 py-6">
    <h2>Today’s Check-in</h2>
    <p className="my-4 text-[14px] text-[#545a56]">Haven’t logged your progress for today yet.</p>
    <button className="flex items-center gap-2 rounded-lg bg-[#124236] px-5 py-3 font-serif text-[15px] text-white">Begin Check-in <ArrowRight size={18} /></button>
    <div className="absolute bottom-3 right-8 h-36 w-28 rounded-[54%] bg-[#efede5]"><i className="absolute bottom-3 right-10 h-28 w-1 rotate-[21deg] rounded-full bg-[#124236]" /><b className="absolute bottom-7 right-4 h-14 w-6 rotate-[28deg] rounded-[100%_0_100%_0] bg-[#144a3a]" /><span className="absolute bottom-5 right-12 h-16 w-7 -rotate-[29deg] rounded-[100%_0_100%_0] bg-[#144a3a]" /></div>
  </motion.section>;
}

export function GoalsPanel() {
  return <motion.section whileHover={{ y: -3 }} transition={{ duration: 0.22 }} className="rounded-[10px] border border-[#e6ded2] bg-[#fcfaf6] pb-5">
    <div className="flex items-center justify-between px-6 pb-4 pt-6"><h2>Goals Progress</h2><button className="text-[13px] text-[#34413a]">View all</button></div>
    <div className="grid gap-4 px-6">{goals.map(({ label, value, icon: Icon }) => <div className="flex items-center gap-4" key={label}>
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#ebebe3] text-[#173d33]"><Icon size={20} strokeWidth={1.6} /></div>
      <div className="flex-1"><div className="mb-2 flex justify-between text-[14px]"><span>{label}</span><span>{value}%</span></div><div className="h-1.5 overflow-hidden rounded-full bg-[#e9e2d6]"><i className="block h-full rounded-full bg-[#174b3d]" style={{ width: `${value}%` }} /></div></div>
    </div>)}</div>
  </motion.section>;
}
