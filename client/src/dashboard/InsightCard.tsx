import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function InsightCard() {
  return <motion.section whileHover={{ y: -3 }} transition={{ duration: 0.22 }} className="overflow-hidden rounded-[10px] border border-[#e6ded2] bg-[#fcfaf6]">
    <div className="flex items-center justify-between px-6 pb-4 pt-6"><h2>Today’s Insight</h2><span className="text-[12px] text-[#34413a]">Coming soon</span></div>
    <div className="m-4 flex min-h-[272px] items-center overflow-hidden rounded-[10px] bg-[#f2ede4]"><div className="hidden h-[148px] w-[148px] shrink-0 place-items-center rounded-full border border-[#d4cabd] bg-[#174b3d] text-white md:grid"><Sparkles size={27} fill="white" /></div><div className="px-7 py-6"><h3 className="font-serif text-[27px] leading-[1.26] tracking-[-1px]">Insights will appear<br />as LIFEOS learns<br />your patterns.</h3><p className="my-4 text-[14px] leading-7 text-[#4a514d]">Keep checking in to build a meaningful view<br />of your own rhythms over time.</p></div></div>
  </motion.section>;
}
