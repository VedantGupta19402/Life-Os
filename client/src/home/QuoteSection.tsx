"use client";

export const QuoteSection = () => {
  return (
    <section id="manifesto" className="relative overflow-hidden bg-[#F3EFE6] py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        
        {/* Quote mark */}
        <span className="font-serif text-7xl text-[#173C32]/40 select-none">“</span>

        <h2 className="mt-[-20px] font-serif text-[clamp(2.4rem,4.5vw,4.8rem)] leading-[0.95] tracking-[-0.04em] text-[#18211D]">
          The best project you will ever work on is you.
        </h2>

        <div className="mx-auto mt-6 h-0.5 w-12 bg-[#C9795D]" />

        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#18211D]/50">
          LIFEOS Manifesto / 2026
        </p>

      </div>

      {/* Decorative Mountain Backdrop matching login/register theme */}
      <div className="relative mt-16 h-36 w-full overflow-hidden opacity-65">
        {/* Back range */}
        <div
          className="absolute inset-x-0 bottom-0 h-full bg-[#D8D3C7]"
          style={{
            clipPath:
              "polygon(0 100%,0 55%,9% 43%,17% 57%,28% 30%,38% 55%,49% 34%,60% 58%,72% 24%,83% 52%,93% 36%,100% 48%,100% 100%)",
          }}
        />

        {/* Middle range */}
        <div
          className="absolute inset-x-0 bottom-0 h-[75%] bg-[#B4B9AD]"
          style={{
            clipPath:
              "polygon(0 100%,0 61%,13% 46%,22% 63%,34% 30%,45% 59%,56% 39%,68% 64%,79% 27%,90% 54%,100% 38%,100% 100%)",
          }}
        />

        {/* Front range */}
        <div
          className="absolute inset-x-0 bottom-0 h-[50%] bg-[#68776D]"
          style={{
            clipPath:
              "polygon(0 100%,0 55%,13% 40%,24% 62%,35% 31%,46% 61%,58% 40%,69% 65%,80% 30%,91% 57%,100% 39%,100% 100%)",
          }}
        />

        {/* Person silhouette */}
        <div className="absolute bottom-[8%] left-[50%] -translate-x-1/2">
          <div className="mx-auto h-4 w-4 rounded-full bg-[#18211D]" />
          <div className="mx-auto h-7 w-5 rounded-t-xl bg-[#18211D]" />
        </div>
      </div>
    </section>
  );
};
