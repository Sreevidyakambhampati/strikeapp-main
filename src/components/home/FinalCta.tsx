import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const particles = [
  { left: "8%", top: "22%", size: 3, delay: "0s" },
  { left: "16%", top: "68%", size: 2, delay: "1.1s" },
  { left: "28%", top: "30%", size: 2.5, delay: "0.6s" },
  { left: "44%", top: "14%", size: 2, delay: "1.7s" },
  { left: "58%", top: "74%", size: 3, delay: "0.9s" },
  { left: "70%", top: "26%", size: 2, delay: "1.4s" },
  { left: "82%", top: "60%", size: 2.5, delay: "0.3s" },
  { left: "91%", top: "34%", size: 2, delay: "2s" },
];

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-36">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark mask-radial-faded" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_110%,rgba(99,102,241,0.32),transparent_70%),radial-gradient(ellipse_45%_40%_at_50%_-10%,rgba(139,92,246,0.18),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="animate-gradient-x absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent bg-[length:200%_100%]"
      />

      <div aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className="animate-float absolute rounded-full bg-brand-300/70"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your next customer could become your{" "}
            <span className="text-gradient">next loyal member.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-xl text-base text-ink-300 sm:text-lg">
            Build stronger customer relationships with Strike.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-ink-950 shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow sm:w-auto"
            >
              Get Started
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 sm:w-auto"
            >
              Talk to Our Team
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
