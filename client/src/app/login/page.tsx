"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  MoveUpRight,
} from "lucide-react";
import { authApi } from "@/lib/api";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    try {
      setIsLoading(true);
      setError("");
      await authApi.login(String(formData.get("email")), String(formData.get("password")));
      router.push("/dashboard");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to log in right now.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Google Fonts — Playfair Display for serif headings */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />

      <style jsx global>{`
        .font-display {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
        }
      `}</style>

      <main className="h-screen overflow-hidden bg-[#F3EFE6] text-[#18211D]">
        <div className="grid h-screen lg:grid-cols-[1.1fr_0.9fr]">

          {/* ───────────── LEFT PANEL ───────────── */}
          <section className="relative hidden h-screen overflow-hidden lg:flex lg:flex-col">

            {/* Decorative arc */}
            <div className="pointer-events-none absolute -right-24 -top-44 h-[620px] w-[620px] rounded-full border border-[#C9795D]/20" />
            <div className="pointer-events-none absolute right-[15%] top-[17%] h-3 w-3 rounded-full bg-[#C9795D]" />

            {/* Brand */}
            <Link
              href="/"
              className="absolute left-12 top-8 z-30 flex items-center gap-3"
            >
              <div className="relative grid h-9 w-9 place-items-center">
                <span className="absolute inset-0 rounded-full border border-[#18211D]/40" />
                <span className="absolute inset-[6px] rounded-full border border-[#173C32]/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#173C32]" />
              </div>
              <span className="text-sm font-semibold tracking-[0.3em]">
                LIFEOS
              </span>
            </Link>

            {/* Editorial copy — positioned with better vertical rhythm */}
            <div className="absolute left-12 right-12 top-[18%] z-20">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C9795D]">
                Personal intelligence / 01
              </p>

              <h1 className="font-display max-w-[580px] text-[clamp(3.2rem,5.2vw,5.8rem)] leading-[0.88] tracking-[-0.04em]">
                Understand
                <br />
                today.
                <br />
                <span className="italic text-[#718571]">
                  Shape
                  <br />
                  tomorrow.
                </span>
              </h1>

              <p className="mt-6 max-w-[360px] text-[13.5px] leading-[1.65] text-[#18211D]/50">
                LIFEOS learns from the patterns of your everyday life and turns
                them into a clearer picture of where you could be heading.
              </p>
            </div>

            {/* ── TRAJECTORY ZONE ── */}
            <div className="absolute left-0 right-0 bottom-[24%] z-20 h-[140px]">

              <svg
                viewBox="0 0 900 180"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M0 145 C140 135 190 115 300 112 C410 108 465 78 570 65 C690 50 755 25 900 18"
                  fill="none"
                  stroke="#173C32"
                  strokeOpacity="0.28"
                  strokeWidth="1.2"
                />
                <path
                  d="M0 151 C140 141 190 121 300 118 C410 114 465 84 570 71 C690 56 755 31 900 24"
                  fill="none"
                  stroke="#C9795D"
                  strokeOpacity="0.12"
                  strokeWidth="1"
                />
              </svg>

              {/* Today */}
              <div className="absolute left-[6%] top-[100px]">
                <div className="mb-1.5 h-3 w-3 rounded-full border-2 border-[#F3EFE6] bg-[#173C32] shadow-[0_0_0_1px_#173C32]" />
                <p className="font-display text-[17px] leading-none">Today</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-[#18211D]/40">
                  You are here
                </p>
              </div>

              {/* 30 Days */}
              <div className="absolute left-[28%] top-[72px]">
                <div className="mb-1.5 h-2.5 w-2.5 rounded-full bg-[#173C32]" />
                <p className="font-display text-[17px] leading-none">30 Days</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-[#18211D]/40">
                  Consistency
                </p>
              </div>

              {/* 90 Days */}
              <div className="absolute left-[52%] top-[40px]">
                <div className="mb-1.5 h-2.5 w-2.5 rounded-full bg-[#173C32]" />
                <p className="font-display text-[17px] leading-none">90 Days</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-[#18211D]/40">
                  Momentum
                </p>
              </div>

              {/* 180 Days */}
              <div className="absolute right-[6%] top-[3px]">
                <div className="mb-1.5 h-3 w-3 rounded-full bg-[#C9795D]" />
                <p className="font-display text-[17px] leading-none">180 Days</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-[#18211D]/40">
                  Transformation
                </p>
              </div>
            </div>

            {/* ── MOUNTAINS ── */}
            <div className="absolute inset-x-0 bottom-0 h-[22%]">
              {/* Back range */}
              <div
                className="absolute inset-x-0 bottom-0 h-full bg-[#D9D5C9]/70"
                style={{
                  clipPath:
                    "polygon(0 100%,0 48%,10% 25%,19% 55%,29% 17%,40% 53%,51% 28%,63% 58%,75% 15%,86% 48%,94% 31%,100% 48%,100% 100%)",
                }}
              />
              {/* Mid range */}
              <div
                className="absolute inset-x-0 bottom-0 h-[78%] bg-[#B7BBAE]/75"
                style={{
                  clipPath:
                    "polygon(0 100%,0 54%,11% 38%,21% 59%,32% 20%,43% 53%,54% 32%,65% 61%,76% 25%,88% 51%,100% 34%,100% 100%)",
                }}
              />
              {/* Front range */}
              <div
                className="absolute inset-x-0 bottom-0 h-[58%] bg-[#68766C]"
                style={{
                  clipPath:
                    "polygon(0 100%,0 57%,12% 42%,22% 64%,34% 27%,45% 59%,56% 40%,67% 66%,78% 30%,89% 58%,100% 40%,100% 100%)",
                }}
              />
              {/* Person silhouette */}
              <div className="absolute bottom-[6%] left-[28%]">
                <div className="mx-auto h-5 w-5 rounded-full bg-[#18211D]" />
                <div className="mx-auto h-8 w-6 rounded-t-xl bg-[#18211D]" />
              </div>
            </div>

            {/* Quote */}
            <div className="absolute bottom-7 left-12 z-30 max-w-[240px]">
              <span className="font-display text-3xl leading-none text-[#173C32]">
                &ldquo;
              </span>
              <p className="mt-[-4px] font-display text-[15px] leading-[1.5] text-[#F3EFE6]">
                The best project you will ever work on is you.
              </p>
            </div>

            <span className="absolute bottom-8 right-12 z-30 text-[9px] uppercase tracking-[0.22em] text-[#18211D]/35">
              LIFEOS / 2026
            </span>
          </section>

          {/* ───────────── RIGHT PANEL ───────────── */}
          <section className="relative flex h-screen items-center justify-center overflow-y-auto px-6 py-16 sm:px-10 lg:px-16 xl:px-20">

            {/* Mobile logo */}
            <Link
              href="/"
              className="absolute left-6 top-7 flex items-center gap-3 lg:hidden"
            >
              <div className="relative grid h-8 w-8 place-items-center">
                <span className="absolute inset-0 rounded-full border border-[#18211D]/40" />
                <span className="absolute inset-[5px] rounded-full border border-[#173C32]/50" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#173C32]" />
              </div>
              <span className="text-sm font-semibold tracking-[0.3em]">
                LIFEOS
              </span>
            </Link>

            <div className="w-full max-w-[440px]">

              {/* Header */}
              <div className="mb-7">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C9795D]">
                  Welcome back
                </p>

                <h2 className="font-display text-[clamp(2.6rem,4vw,3.8rem)] leading-[0.9] tracking-[-0.04em]">
                  Continue
                  <br />
                  your journey.
                </h2>

                <p className="mt-4 text-[13.5px] leading-6 text-[#18211D]/50">
                  Your patterns have been waiting for you.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {error && <p role="alert" className="rounded-lg bg-[#c9795d]/10 px-3 py-2 text-sm text-[#9a3e25]">{error}</p>}

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#18211D]/55"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <Mail
                      size={17}
                      strokeWidth={1.5}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#18211D]/35"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      className="h-[50px] w-full rounded-xl border border-[#18211D]/12 bg-[#F8F5EE] pl-12 pr-4 text-sm outline-none transition-all duration-200 focus:border-[#173C32]/40 focus:bg-white focus:ring-4 focus:ring-[#173C32]/5"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#18211D]/55"
                    >
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-[11px] font-medium text-[#173C32] transition-colors hover:text-[#C9795D]"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <LockKeyhole
                      size={17}
                      strokeWidth={1.5}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#18211D]/35"
                    />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      required
                      className="h-[50px] w-full rounded-xl border border-[#18211D]/12 bg-[#F8F5EE] pl-12 pr-12 text-sm outline-none transition-all duration-200 focus:border-[#173C32]/40 focus:bg-white focus:ring-4 focus:ring-[#173C32]/5"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#18211D]/30 transition-colors hover:text-[#173C32]"
                    >
                      {showPassword ? (
                        <EyeOff size={17} strokeWidth={1.5} />
                      ) : (
                        <Eye size={17} strokeWidth={1.5} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group mt-1 flex h-[50px] w-full items-center justify-between rounded-xl bg-[#173C32] px-5 text-sm font-semibold text-[#F7F3EA] transition-all duration-200 hover:bg-[#204D41] hover:shadow-lg hover:shadow-[#173C32]/10 disabled:opacity-70"
                >
                  <span>
                    {isLoading ? "Entering..." : "Login to LIFEOS"}
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 transition-transform duration-200 group-hover:translate-x-1">
                    {isLoading ? (
                      <span className="h-4 w-4 animate-spin rounded-full border border-white/30 border-t-white" />
                    ) : (
                      <ArrowRight size={16} />
                    )}
                  </span>
                </button>
              </form>

              {/* Divider */}
              <div className="my-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-[#18211D]/8" />
                <span className="text-[9px] uppercase tracking-[0.18em] text-[#18211D]/35">
                  or continue with
                </span>
                <div className="h-px flex-1 bg-[#18211D]/8" />
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex h-[46px] items-center justify-center gap-2.5 rounded-xl border border-[#18211D]/10 bg-[#F8F5EE] text-sm font-medium transition-all duration-200 hover:border-[#18211D]/20 hover:bg-white hover:shadow-sm"
                >
                  <span className="text-base font-semibold">G</span>
                  Google
                </button>
                <button
                  type="button"
                  className="flex h-[46px] items-center justify-center gap-2.5 rounded-xl border border-[#18211D]/10 bg-[#F8F5EE] text-sm font-medium transition-all duration-200 hover:border-[#18211D]/20 hover:bg-white hover:shadow-sm"
                >
                  <span className="text-xs">●</span>
                  Github
                </button>
              </div>

              {/* Register link */}
              <div className="mt-6 flex items-center justify-between border-t border-[#18211D]/8 pt-5">
                <p className="text-sm text-[#18211D]/45">
                  New to LIFEOS?
                </p>
                <Link
                  href="/register"
                  className="group flex items-center gap-1.5 text-sm font-semibold text-[#173C32] transition-colors hover:text-[#C9795D]"
                >
                  Create an account
                  <MoveUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>

              <p className="mt-4 text-center text-[9px] leading-5 text-[#18211D]/30">
                By continuing, you agree to the LIFEOS Terms of Service and
                Privacy Policy.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
