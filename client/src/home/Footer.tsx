"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-[#18211D]/10 bg-[#F3EFE6] py-12 text-[#18211D]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="relative grid h-8 w-8 place-items-center">
              <span className="absolute inset-0 rounded-full border border-[#18211D]/40" />
              <span className="absolute inset-[5px] rounded-full border border-[#173C32]/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#173C32]" />
            </div>

            <span className="text-sm font-semibold tracking-[0.3em]">
              LIFEOS
            </span>

            <span className="hidden text-xs text-[#18211D]/40 md:inline">|</span>
            <span className="hidden text-xs text-[#18211D]/55 md:inline">
              Personal Intelligence Platform
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#18211D]/65">
            <Link href="/login" className="transition hover:text-[#173C32]">
              Login
            </Link>
            <Link href="/register" className="transition hover:text-[#173C32]">
              Register
            </Link>
            <Link href="#features" className="transition hover:text-[#173C32]">
              Features
            </Link>
            <Link href="#trajectory" className="transition hover:text-[#173C32]">
              Trajectory
            </Link>
            <Link href="#manifesto" className="transition hover:text-[#173C32]">
              Manifesto
            </Link>
          </div>

          {/* System Status & Copyright */}
          <div className="flex items-center gap-3 text-xs text-[#18211D]/50">
            <span className="flex items-center gap-1.5 rounded-full bg-[#173C32]/10 px-2.5 py-1 text-[10px] font-semibold text-[#173C32]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#173C32] animate-pulse" />
              All Systems Operational
            </span>
            <span>© 2026 LIFEOS</span>
          </div>

        </div>
      </div>
    </footer>
  );
};
