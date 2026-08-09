"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative bg-[#173C32] py-20 text-[#F7F3EA] lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 sm:p-14 lg:p-20">
          
          <div className="mx-auto max-w-3xl text-center">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9795D]/40 bg-[#C9795D]/20 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C9795D]">
              <Sparkles size={13} />
              Start Building Today
            </div>

            <h2 className="mt-6 font-serif text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[0.92] tracking-[-0.04em]">
              Ready to shape your tomorrow?
            </h2>

            <p className="mt-5 text-base leading-7 text-[#F7F3EA]/75 sm:text-lg">
              Join thousands who have turned daily noise into a clear, compounding 180-day personal growth trajectory.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/register"
                className="group flex h-14 items-center justify-between gap-4 rounded-xl bg-[#F7F3EA] px-7 text-sm font-semibold text-[#173C32] shadow-lg transition duration-300 hover:bg-white hover:shadow-xl"
              >
                <span>Create Your Account</span>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#173C32]/10 transition group-hover:translate-x-1">
                  <ArrowRight size={16} className="text-[#173C32]" />
                </span>
              </Link>

              <Link
                href="/login"
                className="flex h-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 text-sm font-medium text-[#F7F3EA] transition hover:bg-white/10"
              >
                Sign In to Existing Account
              </Link>
            </div>

            {/* Checkmarks */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#F7F3EA]/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C9795D]" />
                <span>Free 14-Day Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C9795D]" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#C9795D]" />
                <span>100% Private Data</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
