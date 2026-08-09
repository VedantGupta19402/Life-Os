"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");
    const confirmPassword = String(formData.get("confirmPassword") || "");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed.");
      }

      setSuccess("Account created successfully. You can sign in now.");
      form.reset();
      console.log("Register success:", data.user);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Registration failed. Please try again.";
      setError(message);
      console.error("Registration failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="h-screen overflow-hidden bg-[#F3EFE6] text-[#18211D]">
      <div className="grid h-screen lg:grid-cols-[1.05fr_0.95fr]">

        {/* ───────────────────── LEFT EDITORIAL PANEL ───────────────────── */}

        <section className="relative hidden h-screen overflow-hidden lg:block">

          {/* Large editorial circle */}
          <div className="pointer-events-none absolute -right-28 -top-48 h-[610px] w-[610px] rounded-full border border-[#C9795D]/20" />

          {/* Accent point */}
          <div className="absolute right-[27%] top-[15%] h-3 w-3 rounded-full bg-[#C9795D]" />

          {/* Botanical branch */}
          <div className="pointer-events-none absolute right-[2%] top-[7%] h-[300px] w-[190px] opacity-70">
            <svg
              viewBox="0 0 190 300"
              className="h-full w-full"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M178 12C146 47 128 89 116 127C102 171 80 213 25 267"
                stroke="#173C32"
                strokeOpacity=".35"
                strokeWidth="1.2"
              />

              <path
                d="M134 79C112 68 101 54 99 38"
                stroke="#173C32"
                strokeOpacity=".28"
              />

              <path
                d="M119 111C94 104 80 91 76 76"
                stroke="#173C32"
                strokeOpacity=".28"
              />

              <path
                d="M101 151C76 146 60 135 53 119"
                stroke="#173C32"
                strokeOpacity=".28"
              />

              <path
                d="M80 192C57 190 41 181 31 165"
                stroke="#173C32"
                strokeOpacity=".28"
              />

              <path
                d="M137 74C148 53 162 48 174 50C165 65 153 74 137 74Z"
                fill="#667C6B"
                fillOpacity=".65"
              />

              <path
                d="M119 110C130 88 144 82 157 85C148 100 136 108 119 110Z"
                fill="#7B907D"
                fillOpacity=".6"
              />

              <path
                d="M101 150C112 129 126 122 138 126C130 141 118 148 101 150Z"
                fill="#526A5B"
                fillOpacity=".62"
              />

              <path
                d="M80 191C91 172 105 166 116 169C107 183 96 189 80 191Z"
                fill="#819383"
                fillOpacity=".6"
              />

              <path
                d="M101 55C88 43 82 30 84 17C98 25 104 38 101 55Z"
                fill="#718675"
                fillOpacity=".6"
              />

              <path
                d="M76 95C61 85 54 72 56 60C70 68 77 80 76 95Z"
                fill="#526A5B"
                fillOpacity=".6"
              />

              <path
                d="M53 138C39 129 32 117 34 106C47 113 54 124 53 138Z"
                fill="#7B907D"
                fillOpacity=".6"
              />
            </svg>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="absolute left-12 top-9 z-30 flex items-center gap-3"
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

          {/* Editorial heading */}
          <div className="absolute left-12 right-16 top-[14%] z-20">

            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C9795D]">
              Personal intelligence / 01
            </p>

            <h1 className="max-w-[630px] font-serif text-[clamp(4rem,5.7vw,6.5rem)] leading-[0.86] tracking-[-0.06em]">
              Understand today.
              <br />
              Shape{" "}
              <span className="italic text-[#708571]">
                tomorrow.
              </span>
            </h1>

            <p className="mt-8 max-w-[390px] text-[14px] leading-6 text-[#18211D]/60">
              Create your LIFEOS account and start building a clearer picture
              of your future with intention every day.
            </p>
          </div>

          {/* Trajectory */}
          <div className="absolute left-0 right-0 top-[50%] z-20 h-[150px]">

            <svg
              viewBox="0 0 900 190"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M60 170 C180 80 305 76 440 55 C570 35 670 22 850 5"
                fill="none"
                stroke="#173C32"
                strokeOpacity=".26"
                strokeWidth="1.2"
              />

              <path
                d="M60 176 C180 86 305 82 440 61 C570 41 670 28 850 11"
                fill="none"
                stroke="#C9795D"
                strokeOpacity=".12"
                strokeWidth="1"
              />
            </svg>

            {/* Today */}
            <div className="absolute left-[13%] top-[112px]">
              <div className="mb-2 h-3 w-3 rounded-full border-2 border-[#F3EFE6] bg-[#173C32] shadow-[0_0_0_1px_#173C32]" />

              <p className="font-serif text-[18px] leading-none">
                Today
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.13em] text-[#18211D]/45">
                You are here
              </p>
            </div>

            {/* 30 */}
            <div className="absolute left-[34%] top-[73px]">
              <div className="mb-2 h-2.5 w-2.5 rounded-full bg-[#173C32]" />

              <p className="font-serif text-[18px] leading-none">
                30 Days
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.13em] text-[#18211D]/45">
                Consistency
              </p>
            </div>

            {/* 90 */}
            <div className="absolute left-[58%] top-[39px]">
              <div className="mb-2 h-2.5 w-2.5 rounded-full bg-[#173C32]" />

              <p className="font-serif text-[18px] leading-none">
                90 Days
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.13em] text-[#18211D]/45">
                Momentum
              </p>
            </div>

            {/* 180 */}
            <div className="absolute right-[9%] top-0">
              <div className="mb-2 h-3 w-3 rounded-full bg-[#C9795D]" />

              <p className="font-serif text-[18px] leading-none">
                180 Days
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.13em] text-[#18211D]/45">
                Transformation
              </p>
            </div>
          </div>

          {/* Mountains */}

          {/* Back range */}
          <div
            className="absolute inset-x-0 bottom-0 h-[30%] bg-[#D8D3C7]/80"
            style={{
              clipPath:
                "polygon(0 100%,0 55%,9% 43%,17% 57%,28% 30%,38% 55%,49% 34%,60% 58%,72% 24%,83% 52%,93% 36%,100% 48%,100% 100%)",
            }}
          />

          {/* Middle range */}
          <div
            className="absolute inset-x-0 bottom-0 h-[23%] bg-[#B4B9AD]/80"
            style={{
              clipPath:
                "polygon(0 100%,0 61%,13% 46%,22% 63%,34% 30%,45% 59%,56% 39%,68% 64%,79% 27%,90% 54%,100% 38%,100% 100%)",
            }}
          />

          {/* Front range */}
          <div
            className="absolute inset-x-0 bottom-0 h-[16%] bg-[#68776D]"
            style={{
              clipPath:
                "polygon(0 100%,0 55%,13% 40%,24% 62%,35% 31%,46% 61%,58% 40%,69% 65%,80% 30%,91% 57%,100% 39%,100% 100%)",
            }}
          />

          {/* Person */}
          <div className="absolute bottom-[7%] left-[46%] z-10">
            <div className="mx-auto h-5 w-5 rounded-full bg-[#18211D]" />
            <div className="mx-auto h-9 w-6 rounded-t-xl bg-[#18211D]" />
          </div>

          {/* Quote */}
          <div className="absolute bottom-9 left-12 z-30 max-w-[220px]">
            <span className="font-serif text-4xl text-[#173C32]">
              “
            </span>

            <p className="mt-[-6px] font-serif text-[16px] leading-6">
              The best project you will ever work on is you.
            </p>

            <div className="mt-4 h-px w-8 bg-[#C9795D]" />
          </div>

          <span className="absolute bottom-9 right-12 z-30 text-[9px] uppercase tracking-[0.22em] text-[#18211D]/30">
            LIFEOS / 2026
          </span>
        </section>

        {/* ───────────────────── RIGHT REGISTER PANEL ───────────────────── */}

        <section className="relative flex h-screen items-center justify-center overflow-y-auto px-6 py-6 sm:px-10 lg:px-14 xl:px-20">

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

          <div className="w-full max-w-[460px]">

            {/* Header */}
            <div className="mb-5">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C9795D]">
                Create your account
              </p>

              <h2 className="font-serif text-[clamp(2.5rem,3.6vw,3.6rem)] leading-[0.92] tracking-[-0.05em]">
                Welcome to LIFEOS
              </h2>

              <p className="mt-2.5 text-[13.5px] leading-5 text-[#18211D]/50">
                Let&apos;s build your future, together.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-3.5"
            >
              {error ? (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </p>
              ) : null}

              {success ? (
                <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  {success}
                </p>
              ) : null}

              {/* Full name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-[11px] font-semibold text-[#18211D]/80"
                >
                  Full name
                </label>

                <div className="relative">
                  <UserRound
                    size={17}
                    strokeWidth={1.5}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#18211D]/35"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    required
                    className="h-[48px] w-full rounded-xl border border-[#18211D]/12 bg-[#F8F5EE] pl-11 pr-4 text-sm outline-none transition focus:border-[#173C32]/40 focus:bg-white focus:ring-4 focus:ring-[#173C32]/5"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-[11px] font-semibold text-[#18211D]/80"
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
                    className="h-[48px] w-full rounded-xl border border-[#18211D]/12 bg-[#F8F5EE] pl-11 pr-4 text-sm outline-none transition focus:border-[#173C32]/40 focus:bg-white focus:ring-4 focus:ring-[#173C32]/5"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-[11px] font-semibold text-[#18211D]/80"
                >
                  Password
                </label>

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
                    autoComplete="new-password"
                    placeholder="Create a password"
                    required
                    minLength={8}
                    className="h-[48px] w-full rounded-xl border border-[#18211D]/12 bg-[#F8F5EE] pl-11 pr-11 text-sm outline-none transition focus:border-[#173C32]/40 focus:bg-white focus:ring-4 focus:ring-[#173C32]/5"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#18211D]/35 hover:text-[#173C32]"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>

                {/* Password requirements */}
                <div className="mt-2 flex flex-wrap items-center justify-between gap-1 text-[10.5px] text-[#18211D]/50">
                  {[
                    "8+ characters",
                    "One uppercase letter",
                    "One number",
                  ].map((requirement) => (
                    <div
                      key={requirement}
                      className="flex items-center gap-1.5"
                    >
                      <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-[#7A947D]/30">
                        <Check
                          size={9}
                          strokeWidth={2.5}
                          className="text-[#315A43]"
                        />
                      </span>

                      {requirement}
                    </div>
                  ))}
                </div>
              </div>

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-1.5 block text-[11px] font-semibold text-[#18211D]/80"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <LockKeyhole
                    size={17}
                    strokeWidth={1.5}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#18211D]/35"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    autoComplete="new-password"
                    placeholder="Confirm your password"
                    required
                    className="h-[48px] w-full rounded-xl border border-[#18211D]/12 bg-[#F8F5EE] pl-11 pr-11 text-sm outline-none transition focus:border-[#173C32]/40 focus:bg-white focus:ring-4 focus:ring-[#173C32]/5"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((value) => !value)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#18211D]/35 hover:text-[#173C32]"
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-2.5 pt-0.5">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 accent-[#173C32]"
                />

                <span className="text-[11px] leading-4 text-[#18211D]/65">
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="font-semibold text-[#173C32] underline underline-offset-2"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-[#173C32] underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="group mt-1 flex h-[50px] w-full items-center justify-between rounded-xl bg-[#173C32] px-5 text-sm font-semibold text-[#F7F3EA] transition duration-300 hover:bg-[#204D41] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span>
                  {isLoading
                    ? "Creating your account..."
                    : "Create my LIFEOS account"}
                </span>

                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10 transition group-hover:translate-x-1">
                  {isLoading ? (
                    <span className="h-3.5 w-3.5 animate-spin rounded-full border border-white/30 border-t-white" />
                  ) : (
                    <ArrowRight size={16} />
                  )}
                </span>
              </button>
            </form>

            {/* Divider */}
            <div className="my-4 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#18211D]/10" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#18211D]/35">
                or sign up with
              </span>

              <div className="h-px flex-1 bg-[#18211D]/10" />
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex h-[46px] items-center justify-center gap-2 rounded-xl border border-[#18211D]/10 bg-[#F8F5EE] text-sm font-medium transition hover:border-[#18211D]/20 hover:bg-white"
              >
                <span className="font-semibold">G</span>
                Continue with Google
              </button>

              <button
                type="button"
                className="flex h-[46px] items-center justify-center gap-2 rounded-xl border border-[#18211D]/10 bg-[#F8F5EE] text-sm font-medium transition hover:border-[#18211D]/20 hover:bg-white"
              >
                <span className="text-sm">●</span>
                Continue with Github
              </button>
            </div>

            {/* Login */}
            <p className="mt-4 text-center text-sm text-[#18211D]/55">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#173C32] underline-offset-4 hover:text-[#C9795D] hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RegisterPage;