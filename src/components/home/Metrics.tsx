import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { metrics } from "@/lib/site";

export function Metrics() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark mask-radial-faded opacity-50" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[22rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/15 blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 110} className="text-center">
              <dd className="text-gradient text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <CountUp value={m.value} suffix={m.suffix} />
              </dd>
              <dt className="mt-2.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-400 sm:text-sm">
                {m.label}
              </dt>
            </Reveal>
          ))}
        </dl>
        <Reveal delay={200}>
          <p className="mt-14 text-center text-[11px] text-ink-500">
            Illustrative platform figures shown for demonstration — actual Strike statistics will be
            published as the platform grows.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
