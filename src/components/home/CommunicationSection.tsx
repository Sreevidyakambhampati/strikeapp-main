import { BadgePercent, CalendarDays, Zap, Building2, CheckCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";

const updates = [
  {
    icon: BadgePercent,
    tag: "New Offer",
    tone: "bg-brand-500/15 text-brand-300",
    message: "20% off for all Gold Members.",
    time: "9:00 AM",
  },
  {
    icon: CalendarDays,
    tag: "Event Announcement",
    tone: "bg-brand-500/15 text-brand-300",
    message: "Registrations open tomorrow.",
    time: "11:30 AM",
  },
  {
    icon: Zap,
    tag: "Early Access",
    tone: "bg-amber-500/15 text-amber-300",
    message: "Members get access 48 hours before everyone else.",
    time: "2:15 PM",
  },
  {
    icon: Building2,
    tag: "Business Update",
    tone: "bg-brand-400/15 text-brand-300",
    message: "We've extended our weekend hours.",
    time: "6:40 PM",
  },
];

export function CommunicationSection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark mask-radial-faded opacity-60" />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10rem] left-1/2 h-[26rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="Customer Updates"
          title={
            <>
              Stay connected,{" "}
              <span className="text-gradient">without being intrusive.</span>
            </>
          }
          description="Publish announcements, offers, events, and updates once — members receive them through the Strike ecosystem, right when they matter."
        />

        <ul className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          {updates.map((u, i) => (
            <Reveal as="li" key={u.tag} delay={i * 100}>
              <div
                className={`card-hover group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors hover:border-brand-400/30 hover:bg-white/[0.06] ${
                  i % 2 === 0 ? "sm:-rotate-1" : "sm:rotate-1"
                } sm:hover:rotate-0`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className={`grid size-10 place-items-center rounded-xl ${u.tone}`}>
                    <u.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-medium text-ink-500">
                    <CheckCheck className="size-3.5 text-brand-400" aria-hidden="true" />
                    {u.time}
                  </span>
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-brand-300">
                  {u.tag}
                </p>
                <p className="mt-1.5 text-base font-medium leading-snug text-white">
                  &ldquo;{u.message}&rdquo;
                </p>
                <p className="mt-3 border-t border-white/[0.06] pt-3 text-[10px] font-medium uppercase tracking-widest text-ink-500">
                  Delivered via Strike
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200} className="mt-12 text-center">
          <p className="text-sm text-ink-400">
            Announcements · Offers · Events · Product updates · Schedule changes · Promotions
          </p>
        </Reveal>
      </div>
    </section>
  );
}
