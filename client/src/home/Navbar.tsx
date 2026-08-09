"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#18211D]/8 bg-[#F3EFE6]/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative grid h-9 w-9 place-items-center">
            <span className="absolute inset-0 rounded-full border border-[#18211D]/40 transition group-hover:scale-105 group-hover:border-[#173C32]" />
            <span className="absolute inset-[6px] rounded-full border border-[#173C32]/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#173C32]" />
          </div>

          <span className="text-sm font-semibold tracking-[0.3em] text-[#18211D]">
            LIFEOS
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#18211D]/60 transition hover:text-[#173C32]"
          >
            Features
          </Link>
          <Link
            href="#trajectory"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#18211D]/60 transition hover:text-[#173C32]"
          >
            Trajectory
          </Link>
          <Link
            href="#intelligence"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#18211D]/60 transition hover:text-[#173C32]"
          >
            Intelligence
          </Link>
          <Link
            href="#manifesto"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#18211D]/60 transition hover:text-[#173C32]"
          >
            Manifesto
          </Link>
        </nav>

        {/* Auth CTAs */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#18211D]/80 transition hover:text-[#173C32]"
          >
            Sign in
          </Link>

          <Link
            href="/register"
            className="group flex items-center gap-2 rounded-xl bg-[#173C32] px-4 py-2.5 text-xs font-semibold text-[#F7F3EA] shadow-sm transition hover:bg-[#204D41] hover:shadow-md"
          >
            <span>Get Started</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
};
