import {
  CreditCard,
  Percent,
  BellRing,
  Zap,
  CalendarDays,
  ClipboardCheck,
  Ticket,
  Repeat2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";

const nodes = [
  { icon: CreditCard, label: "Memberships", x: 50, y: 11 },
  { icon: Percent, label: "Discounts", x: 75, y: 20.1 },
  { icon: BellRing, label: "Customer Updates", x: 88.4, y: 43.2 },
  { icon: Zap, label: "Early Access", x: 83.8, y: 69.5 },
  { icon: CalendarDays, label: "Events", x: 63.3, y: 86.7 },
  { icon: ClipboardCheck, label: "Registrations", x: 36.7, y: 86.7 },
  { icon: Ticket, label: "Offers", x: 16.2, y: 69.5 },
  { icon: Repeat2, label: "Retention", x: 11.6, y: 43.2 },
  { icon: TrendingUp, label: "Analytics", x: 25, y: 20.1 },
];

const flow = ["Acquire", "Engage", "Reward", "Retain", "Grow"];

function EcosystemDiagram() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[680px]"
      role="img"
      aria-label="Diagram showing Strike at the center connected to memberships, discounts, customer updates, early access, events, registrations, offers, retention and analytics"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
        <defs>
          <linearGradient id="eco-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dd6328" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="39"
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="0.3"
          strokeDasharray="1.5 2.5"
        />
        <circle cx="50" cy="50" r="26" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.3" />
        {nodes.map((n) => (
          <line
            key={n.label}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="url(#eco-line)"
            strokeWidth="0.35"
            opacity="0.45"
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-pulse-ring rounded-full border border-brand-500/40"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-pulse-ring rounded-full border border-brand-400/40"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="relative grid size-24 place-items-center rounded-full bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 shadow-glow sm:size-28">
          <div className="flex flex-col items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-7 text-white">
              <path
                d="M13.2 2.5 5.6 12.1c-.35.44-.04 1.08.51 1.08h4.14l-1.55 7.06c-.13.6.63.97 1 .48l7.9-9.94c.36-.45.04-1.1-.52-1.1h-4.2l1.42-6.72c.12-.58-.62-.93-1-.46Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-[10px] font-bold tracking-[0.2em] text-white">STRIKE</span>
          </div>
        </div>
      </div>

      {nodes.map((n, i) => (
        <div
          key={n.label}
          className="absolute"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <Reveal delay={150 + i * 80} variant="scale">
            <div className="group flex w-max max-w-[9rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center sm:max-w-none">
              <span className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-brand-300 shadow-soft backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:border-brand-400/40 group-hover:bg-brand-500/15 group-hover:text-white sm:size-12">
                <n.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-[10px] font-medium leading-tight text-ink-300 sm:text-[11px]">
                {n.label}
              </span>
            </div>
          </Reveal>
        </div>
      ))}
    </div>
  );
}

export function SolutionSection() {
  return (
    <section id="solution" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark mask-radial-faded opacity-70" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/10 blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="The Strike Platform"
          title={
            <>
              One platform. <span className="text-gradient">Every customer relationship.</span>
            </>
          }
          description="Strike centralizes the customer membership experience, so your business can manage every offer, event, update, and registration from one place."
        />

        <Reveal variant="scale" className="mt-16">
          <EcosystemDiagram />
        </Reveal>

        <Reveal delay={200} className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
          {flow.map((step, i) => (
            <span key={step} className="flex items-center gap-2.5">
              <span
                className={`rounded-full px-4 py-1.5 text-xs font-semibold ${
                  i === flow.length - 1
                    ? "bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-glow"
                    : "border border-white/10 bg-white/[0.04] text-ink-300"
                }`}
              >
                {step}
              </span>
              {i < flow.length - 1 && (
                <ArrowRight className="size-3.5 text-ink-600" aria-hidden="true" />
              )}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
