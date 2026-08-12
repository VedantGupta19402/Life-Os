import {
  BookOpen,
  CalendarDays,
  ChevronDown,
  CircleDot,
  Home,
  Lightbulb,
  LogOut,
  Settings,
  Sparkles,
  Sun,
  Target,
} from "lucide-react";

const navigation = [
  { label: "Overview", icon: Home, active: true },
  { label: "Today", icon: Sun },
  { label: "Insights", icon: Sparkles },
  { label: "Goals", icon: Target },
  { label: "Journal", icon: BookOpen },
  { label: "History", icon: CalendarDays },
  { label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="flex min-h-screen flex-col border-r border-[#e6dfd5] bg-[#fbf8f1] px-5 py-11 lg:w-[282px]">
      <div className="mb-10 flex items-center gap-3 px-3">
        <div className="grid h-14 w-12 place-items-center rounded-[48%] border border-[#123d33] text-[#123d33]"><CircleDot size={37} strokeWidth={1.15} /></div>
        <div>
          <div className="font-serif text-[38px] leading-none tracking-[-2.5px]">LIFEOS</div>
          <div className="mt-2.5 whitespace-nowrap text-[9px] tracking-[1.25px] text-[#334039]">LIVE · UNDERSTAND · EVOLVE</div>
        </div>
      </div>

      <nav className="grid gap-2" aria-label="Dashboard navigation">
        {navigation.map(({ label, icon: Icon, active }) => (
          <button key={label} className={`flex items-center gap-6 rounded-xl px-6 py-3.5 text-left text-[16px] text-[#15211d] ${active ? "bg-[#efede5]" : ""}`}>
            <Icon size={22} strokeWidth={1.8} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto rounded-xl border border-[#e6ded2] bg-[#fbf9f3] px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[#124236] font-serif text-[17px] text-white">VG</div>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <strong>Vedant Gupta</strong>
            <span className="text-[11px] text-[#57605b]">vedant@example.com</span>
          </div>
          <ChevronDown size={17} />
        </div>
        <div className="my-6 h-px bg-[#ddd8ce]" />
        <button className="flex items-center gap-4 bg-transparent px-1 text-sm"><LogOut size={21} strokeWidth={1.7} /> Logout</button>
      </div>
    </aside>
  );
}
