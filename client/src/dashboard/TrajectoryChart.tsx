import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const labels = ["Aug 3", "Aug 4", "Aug 5", "Aug 6", "Aug 7", "Aug 8", "Aug 9"];

export function TrajectoryChart() {
  return (
    <motion.section whileHover={{ y: -3 }} transition={{ duration: 0.22 }} className="relative overflow-hidden rounded-[10px] border border-[#e6ded2] bg-[#fcfaf6]">
      <div className="flex items-center justify-between px-6 pb-4 pt-6">
        <h2>Your Life Trajectory</h2>
        <button className="flex min-w-[141px] items-center justify-center gap-3 rounded-lg border border-[#e1dbd1] px-3 py-2.5 text-[13px]">Focus Score <ChevronDown size={17} /></button>
      </div>
      <div className="grid grid-cols-[43px_1fr] px-6 pt-3">
        <div className="flex h-[164px] flex-col justify-between text-[12px] text-[#5b625e]"><span>10</span><span>7.5</span><span>5</span><span>2.5</span><span>0</span></div>
        <svg className="h-[164px] w-full overflow-visible" viewBox="0 0 680 190" preserveAspectRatio="none" role="img" aria-label="Focus score rises from four to nine over seven days">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#173f35" stopOpacity=".18" />
              <stop offset="100%" stopColor="#173f35" stopOpacity=".02" />
            </linearGradient>
          </defs>
          {[12, 50, 88, 126, 164].map((y) => <line key={y} x1="0" y1={y} x2="680" y2={y} stroke="#dedbd2" strokeWidth="1" strokeDasharray="2 3" />)}
          <path d="M0 98 C29 95 40 90 52 90 C79 87 99 51 135 51 C171 51 196 89 233 89 C259 89 270 87 287 88 C321 92 337 110 363 107 C390 106 413 68 443 64 C474 57 488 72 519 67 C555 63 594 18 631 14 L631 164 L0 164Z" fill="url(#chartFill)" />
          <path d="M0 98 C29 95 40 90 52 90 C79 87 99 51 135 51 C171 51 196 89 233 89 C259 89 270 87 287 88 C321 92 337 110 363 107 C390 106 413 68 443 64 C474 57 488 72 519 67 C555 63 594 18 631 14" fill="none" stroke="#143e33" strokeWidth="2.5" strokeLinecap="round" />
          {[[52,90],[135,51],[287,88],[363,107],[443,64],[519,67],[631,14]].map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r={index === 6 ? 7 : 4} fill={index === 6 ? "#f4f1e9" : "#164638"} stroke="#164638" strokeWidth={index === 6 ? 4 : 1} />)}
        </svg>
        <div className="col-start-2 flex justify-between pt-3 text-[12px] text-[#59605c]">{labels.map((label, i) => <span key={label} className={i === 6 ? "font-bold text-[#192923]" : ""}>{label}</span>)}</div>
      </div>
      <div className="my-8 flex justify-center gap-7 text-[12px] uppercase text-[#5a605d]"><button className="border-b-2 border-[#123d32] px-2 pb-2 font-semibold text-[#102d25]">7 Days</button><button>30 Days</button><button>90 Days</button></div>
    </motion.section>
  );
}
