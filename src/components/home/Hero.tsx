import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  UserCheck,
  Repeat2,
  Ticket,
  BellRing,
  LayoutGrid,
  CalendarDays,
  Megaphone,
  Activity,
  Settings,
  Sparkles,
} from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { MembershipCard } from "@/components/ui/MembershipCard";
import { AreaChart, BarChart, Donut } from "@/components/ui/Charts";
import { btnSecondaryDark } from "@/components/ui/Section";

const growthData = [18, 24, 21, 30, 28, 38, 35, 47, 52, 49, 61, 74];
const redemptionData = [32, 48, 40, 62, 55, 78, 70, 92];

function StatCard({
  icon: Icon,
  label,
  value,
  suffix = "",
  delta,
}: {
  icon: typeof Users;
  label: string;
  value: number;
  suffix?: string;
  delta: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3.5">
      <div className="flex items-center justify-between">
        <span className="grid size-8 place-items-center rounded-lg bg-brand-500/15 text-brand-300">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400">
          {delta}
        </span>
      </div>
      <p className="mt-3 text-lg font-bold tracking-tight text-white sm:text-xl">
        <CountUp value={value} suffix={suffix} />
      </p>
      <p className="mt-0.5 truncate text-[11px] font-medium text-ink-400">{label}</p>
    </div>
  );
}

function Panel({
  title,
  children,
  action,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 text-ink-300 ${className}`}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-xs font-semibold text-ink-100">{title}</p>
        {action}
      </div>
      {children}
    </div>
  );
}

const events = [
  { date: "AUG 30", name: "Summer Night Market", meta: "612 registered" },
  { date: "SEP 07", name: "Members-Only Tasting", meta: "284 registered" },
];

const tickerItems = [
  "New Offer · 20% off for all Gold Members",
  "Early Access · Summer Event registration opens today",
  "Business Update · Weekend hours extended to 11 PM",
  "Event Announcement · Registrations open tomorrow",
];

function HeroDashboard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-[0_48px_120px_-32px_rgb(0_0_0/0.85)] backdrop-blur-xl">
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-ink-600" />
          <span className="size-2.5 rounded-full bg-ink-600" />
          <span className="size-2.5 rounded-full bg-brand-500/70" />
        </div>
        <span className="mx-auto rounded-md border border-white/[0.06] bg-ink-925 px-3 py-1 font-mono text-[10px] text-ink-400">
          app.strikeapp.in/overview
        </span>
        <span className="hidden size-6 place-items-center rounded-md bg-gradient-to-br from-brand-400 to-brand-700 text-[9px] font-bold text-white sm:grid">
          SC
        </span>
      </div>

      <div className="grid grid-cols-[auto_1fr]">
        <aside
          aria-label="Dashboard navigation"
          className="hidden flex-col items-center gap-1.5 border-r border-white/[0.06] px-2.5 py-4 md:flex"
        >
          {[LayoutGrid, Users, Ticket, CalendarDays, Megaphone, Activity, Settings].map(
            (Icon, i) => (
              <span
                key={i}
                className={`grid size-9 place-items-center rounded-lg ${
                  i === 0
                    ? "bg-brand-500/20 text-brand-300 ring-1 ring-brand-500/30"
                    : "text-ink-500"
                }`}
              >
                <Icon className="size-4" aria-hidden="true" />
              </span>
            )
          )}
        </aside>

        <div className="min-w-0 space-y-3.5 p-4 sm:p-5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[11px] text-ink-400">Good morning</p>
              <p className="text-sm font-semibold text-white sm:text-base">Business Overview</p>
            </div>
            <span className="hidden rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] font-medium text-ink-300 sm:block">
              Last 30 days
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            <StatCard icon={Users} label="Total Members" value={12842} delta="+12%" />
            <StatCard icon={UserCheck} label="Active Members" value={8421} delta="+8%" />
            <StatCard icon={Repeat2} label="Customer Retention" value={68} suffix="%" delta="+4 pts" />
            <StatCard icon={Ticket} label="Offers Redeemed" value={2384} delta="+23%" />
          </div>

          <div className="grid gap-2.5 lg:grid-cols-3">
            <Panel
              title="Membership Growth"
              className="lg:col-span-2"
              action={
                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
                  <Sparkles className="size-3" aria-hidden="true" /> +1,284 this month
                </span>
              }
            >
              <div className="h-32 sm:h-36">
                <AreaChart id="hero-growth" data={growthData} />
              </div>
            </Panel>
            <Panel title="Customer Engagement" className="flex flex-col items-center justify-center">
              <div className="relative grid place-items-center">
                <Donut value={68} size={104} label="68% customer engagement" />
                <p className="absolute text-xl font-bold text-white">68%</p>
              </div>
              <p className="mt-2 text-center text-[10px] text-ink-400">Returning this quarter</p>
            </Panel>
          </div>

          <div className="grid gap-2.5 md:grid-cols-2">
            <Panel title="Offer Redemptions">
              <div className="h-24">
                <BarChart data={redemptionData} highlight={7} />
              </div>
            </Panel>
            <Panel title="Upcoming Events">
              <ul className="space-y-2">
                {events.map((e) => (
                  <li key={e.name} className="flex items-center gap-3 rounded-lg bg-ink-925/80 p-2">
                    <span className="shrink-0 rounded-md bg-brand-500/15 px-2 py-1 text-center text-[9px] font-bold leading-tight text-brand-300">
                      {e.date.split(" ")[0]}
                      <br />
                      {e.date.split(" ")[1]}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-xs font-medium text-ink-100">{e.name}</span>
                      <span className="block text-[10px] text-ink-500">{e.meta}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-white/[0.06] bg-ink-925/60 py-2">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-[10.5px] text-ink-400">
              <BellRing className="size-3 text-brand-400" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark mask-radial-faded" />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-10rem] top-40 h-[26rem] w-[26rem] rounded-full bg-brand-500/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-[-12rem] top-[30rem] h-[22rem] w-[22rem] rounded-full bg-brand-700/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-4xl text-center">
          <span
            className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brand-200 backdrop-blur sm:text-[11px]"
            style={{ animationDelay: "0ms" }}
          >
            <Sparkles className="size-3.5 text-brand-400" aria-hidden="true" />
            The Membership &amp; Customer Engagement Platform
          </span>

          <h1
            className="animate-rise mt-7 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.35rem]"
            style={{ animationDelay: "90ms" }}
          >
            Turn Customers Into Members.
            <br />
            <span className="text-gradient">Members Into Loyal Customers.</span>
          </h1>

          <p
            className="animate-rise mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            Strike gives businesses one powerful platform to build memberships, offer exclusive
            benefits, launch early access, share updates, and keep customers coming back.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
            style={{ animationDelay: "270ms" }}
          >
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-8 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
            >
              Get Started
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#platform"
              className={`${btnSecondaryDark} w-full sm:w-auto`}
            >
              Explore Strike
            </Link>
          </div>

          <p
            className="animate-rise mt-7 flex items-center justify-center gap-2 text-xs text-ink-400 sm:text-sm"
            style={{ animationDelay: "360ms" }}
          >
            <ShieldCheck className="size-4 shrink-0 text-brand-400" aria-hidden="true" />
            Built to help businesses attract, engage, retain, and grow their customer community.
          </p>
        </div>

        <div className="animate-rise relative mx-auto mt-14 max-w-5xl lg:mt-20" style={{ animationDelay: "420ms" }}>
          <HeroDashboard />

          <div
            aria-hidden="true"
            className="animate-float absolute -right-20 -top-14 hidden w-80 xl:block"
            style={{ transform: "rotate(-6deg)" }}
          >
            <MembershipCard interactive={false} />
          </div>

          <div
            aria-hidden="true"
            className="glass-dark animate-float-slow absolute -left-16 bottom-24 hidden w-72 rounded-2xl p-4 lg:block"
          >
            <div className="flex items-start gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-white">
                <BellRing className="size-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-white">Early Access</p>
                <p className="mt-0.5 text-[11px] leading-snug text-ink-300">
                  Summer Event registration opens today for Gold members.
                </p>
                <p className="mt-1 text-[10px] text-ink-500">Just now · Strike</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
