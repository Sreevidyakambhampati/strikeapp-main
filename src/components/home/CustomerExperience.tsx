import {
  Bell,
  CalendarDays,
  Check,
  Gift,
  Percent,
  QrCode,
  Ticket,
  Zap,
  Home,
  User,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, btnPrimary } from "@/components/ui/Section";
import Link from "next/link";

const customerPoints = [
  "Their membership and tier, always in their pocket",
  "Available discounts and exclusive member offers",
  "Upcoming events and early-bird registrations",
  "Business updates and notifications",
];

function PhoneMock() {
  return (
    <div className="relative mx-auto w-[290px] sm:w-[320px]">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[4rem] bg-gradient-to-br from-brand-600/25 via-brand-500/10 to-transparent blur-2xl"
      />
      <div className="relative rounded-[2.6rem] border border-white/10 bg-ink-950 p-2.5 shadow-[0_48px_100px_-30px_rgb(7_9_16/0.7)]">
        <div className="overflow-hidden rounded-[2.1rem] bg-ink-900">
          <div className="flex items-center justify-between px-6 pt-3" aria-hidden="true">
            <span className="h-5 w-16 rounded-full bg-black/60" />
          </div>

          <div className="px-4 pb-4 pt-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-white">
                Good morning, <span className="text-brand-300">Alex</span>
              </p>
              <span className="relative grid size-8 place-items-center rounded-full bg-white/5 text-ink-300">
                <Bell className="size-3.5" aria-hidden="true" />
                <span className="absolute right-2 top-2 size-1.5 rounded-full bg-brand-400" />
              </span>
            </div>

            <div className="mt-3 overflow-hidden rounded-xl border border-amber-200/20 bg-gradient-to-br from-ink-800 to-ink-950 p-3.5">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-medium uppercase tracking-widest text-ink-400">
                  Your Membership
                </p>
                <QrCode className="size-4 text-ink-400" aria-hidden="true" />
              </div>
              <p className="mt-1.5 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-lg font-extrabold text-transparent">
                Gold Member
              </p>
              <p className="text-[9px] font-medium uppercase tracking-widest text-ink-500">
                STK-88214-G · Member since 2026
              </p>
            </div>

            <div className="mt-3 grid grid-cols-4 gap-1.5">
              {[
                { icon: Percent, label: "Offers" },
                { icon: CalendarDays, label: "Events" },
                { icon: Zap, label: "Early" },
                { icon: Gift, label: "Benefits" },
              ].map((a) => (
                <div
                  key={a.label}
                  className="flex flex-col items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.03] py-2"
                >
                  <a.icon className="size-4 text-brand-300" aria-hidden="true" />
                  <span className="text-[8px] font-medium text-ink-400">{a.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 p-3">
              <p className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest text-brand-100">
                <Sparkles className="size-2.5" aria-hidden="true" /> Exclusive Benefits
              </p>
              <p className="mt-0.5 text-base font-extrabold text-white">20% OFF</p>
              <p className="text-[9px] text-brand-100">On your next visit · Gold members only</p>
            </div>

            <div className="mt-3 space-y-2">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-2.5">
                <p className="text-[8px] font-bold uppercase tracking-widest text-ink-500">Upcoming</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-500/15 text-center text-[7px] font-bold leading-tight text-brand-300">
                    AUG
                    <br />
                    30
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[10px] font-semibold text-white">Summer Event</span>
                    <span className="block text-[8.5px] text-ink-500">Sat · 6 PM · 2 passes</span>
                  </span>
                </div>
              </div>
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/[0.07] p-2.5">
                <p className="text-[8px] font-bold uppercase tracking-widest text-emerald-400">
                  Early Access
                </p>
                <p className="mt-0.5 text-[10px] font-medium text-emerald-100">
                  Registration opens today — before everyone else.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-around border-t border-white/[0.06] py-2.5">
            <Home className="size-4 text-brand-400" aria-label="Home tab" />
            <Ticket className="size-4 text-ink-600" aria-label="Offers tab" />
            <CalendarDays className="size-4 text-ink-600" aria-label="Events tab" />
            <User className="size-4 text-ink-600" aria-label="Profile tab" />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="glass-dark animate-float absolute -left-16 top-24 hidden rounded-2xl px-3.5 py-2.5 sm:block"
      >
        <p className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
          <Gift className="size-3.5 text-brand-400" /> New offer unlocked
        </p>
        <p className="mt-0.5 text-[10px] text-ink-400">20% off · valid this week</p>
      </div>
      <div
        aria-hidden="true"
        className="glass-dark animate-float-slow absolute -right-14 bottom-28 hidden rounded-2xl px-3.5 py-2.5 sm:block"
      >
        <p className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
          <Zap className="size-3.5 text-brand-400" /> Early access open
        </p>
        <p className="mt-0.5 text-[10px] text-ink-400">48 hrs before the public</p>
      </div>
    </div>
  );
}

export function CustomerExperience() {
  return (
    <section id="for-customers" className="relative overflow-hidden bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div>
            <SectionHeading
              align="left"
              eyebrow="For Customers"
              title={
                <>
                  A better experience{" "}
                  <span className="text-gradient-light">for your customers.</span>
                </>
              }
              description="Customers get one beautiful place for everything they love about your business — their membership, benefits, offers, events, and updates."
            />
            <ul className="mt-8 space-y-3.5">
              {customerPoints.map((point, i) => (
                <Reveal key={point} as="li" delay={i * 90}>
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-600/10 text-brand-600">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-ink-800">{point}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={380} className="mt-9">
              <Link href="/contact" className={btnPrimary}>
                Get Started
              </Link>
            </Reveal>
          </div>

          <Reveal variant="scale" delay={150}>
            <PhoneMock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
