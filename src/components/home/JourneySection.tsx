import { PenLine, Zap, Repeat2, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";

const steps = [
  {
    icon: PenLine,
    step: "Step 1",
    title: "Create",
    text: "Create your membership program with tiers, benefits, and pricing that fit your business.",
  },
  {
    icon: Zap,
    step: "Step 2",
    title: "Engage",
    text: "Offer discounts, benefits, updates, and early access that keep members connected.",
  },
  {
    icon: Repeat2,
    step: "Step 3",
    title: "Retain",
    text: "Give customers meaningful reasons to return — again and again.",
  },
  {
    icon: TrendingUp,
    step: "Step 4",
    title: "Grow",
    text: "Build a loyal customer community and increase repeat engagement over time.",
  },
];

export function JourneySection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark mask-radial-faded opacity-60" />
      <div
        aria-hidden="true"
        className="absolute right-[-8rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-brand-600/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="How It Works"
          title={
            <>
              From first visit to loyal community,{" "}
              <span className="text-gradient">in four steps.</span>
            </>
          }
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-9 hidden h-px bg-gradient-to-r from-brand-500/10 via-brand-500/50 to-brand-700/20 md:block"
          />
          <ol className="grid gap-10 md:grid-cols-4 md:gap-6 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.title} as="li" delay={i * 130}>
                <div className="group relative flex gap-5 md:flex-col md:gap-0">
                  <div className="relative z-10 shrink-0">
                    <span className="relative grid size-[4.5rem] place-items-center rounded-2xl border border-white/10 bg-ink-900 text-brand-300 shadow-lift transition-all duration-300 group-hover:border-brand-400/40 group-hover:text-white md:size-[4.5rem]">
                      <span
                        aria-hidden="true"
                        className="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-[11px] font-bold text-white shadow-glow"
                      >
                        {i + 1}
                      </span>
                      <s.icon className="size-7" aria-hidden="true" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-full hidden h-10 w-px bg-gradient-to-b from-white/15 to-transparent md:left-1/2 md:block"
                    />
                  </div>
                  <div className="md:mt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-400">
                      {s.step}
                    </p>
                    <h3 className="mt-1.5 text-xl font-bold tracking-tight text-white">{s.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-400">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
