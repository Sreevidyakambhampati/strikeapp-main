import { IdCard, BadgePercent, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";

function MemberRow({
  initials,
  name,
  meta,
  tier,
  tone,
}: {
  initials: string;
  name: string;
  meta: string;
  tier: string;
  tone: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-white px-2.5 py-2 shadow-sm">
      <span className={`grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-bold text-white ${tone}`}>
        {initials}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[11px] font-semibold text-ink-900">{name}</span>
        <span className="block truncate text-[10px] text-ink-500">{meta}</span>
      </span>
      <span className="rounded-full border border-brand-200 bg-brand-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-brand-700">
        {tier}
      </span>
    </div>
  );
}

function PreviewMembership() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <div className="flex items-center gap-2 rounded-lg border border-ink-100 bg-white px-3 py-1.5 text-[10px] text-ink-400 shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" className="size-3"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        Search members…
      </div>
      <MemberRow initials="AP" name="Ananya P." meta="ananya@mail.com · 12 visits" tier="Gold" tone="bg-gradient-to-br from-amber-400 to-orange-500" />
      <MemberRow initials="RK" name="Rahul K." meta="rahul@mail.com · 8 visits" tier="Silver" tone="bg-gradient-to-br from-stone-400 to-stone-600" />
      <MemberRow initials="MS" name="Meera S." meta="meera@mail.com · 21 visits" tier="Gold" tone="bg-gradient-to-br from-amber-400 to-orange-500" />
    </div>
  );
}

function PreviewDiscount() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-brand-600 to-brand-500 p-4 text-white shadow-glow" aria-hidden="true">
      <span className="absolute -left-2 top-1/2 size-4 -translate-y-1/2 rounded-full bg-sand-100" />
      <span className="absolute -right-2 top-1/2 size-4 -translate-y-1/2 rounded-full bg-sand-100" />
      <div className="flex items-center justify-between gap-3 border-dashed">
        <div>
          <p className="text-2xl font-extrabold tracking-tight">20% OFF</p>
          <p className="text-[11px] font-medium text-orange-100">Exclusive Member Offer</p>
        </div>
        <BadgePercent className="size-9 opacity-80" />
      </div>
    </div>
  );
}

function PreviewEarlyAccess() {
  return (
    <div className="space-y-2.5" aria-hidden="true">
      <div className="flex items-center justify-between rounded-lg bg-white p-2.5 shadow-sm">
        <span className="flex items-center gap-2 text-[11px] font-semibold text-ink-900">
          <span className="size-1.5 rounded-full bg-emerald-500" /> Members
        </span>
        <span className="text-[10px] font-medium text-ink-500">Access now</span>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-white p-2.5 shadow-sm">
        <span className="flex items-center gap-2 text-[11px] font-semibold text-ink-900">
          <span className="size-1.5 rounded-full bg-ink-300" /> General public
        </span>
        <span className="text-[10px] font-medium text-ink-500">Opens Friday</span>
      </div>
      <div className="pt-0.5">
        <div className="h-1.5 overflow-hidden rounded-full bg-ink-100">
          <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-brand-500 to-brand-700" />
        </div>
        <p className="mt-1.5 text-[10px] font-medium text-ink-500">48-hour early window · 62% claimed</p>
      </div>
    </div>
  );
}

const features = [
  {
    icon: IdCard,
    name: "Membership Management",
    headline: "Build and manage your customer membership ecosystem.",
    text: "Create membership programs, manage member profiles, define benefits, and track membership activity — all from one dashboard.",
    preview: <PreviewMembership />,
  },
  {
    icon: BadgePercent,
    name: "Exclusive Discounts",
    headline: "Give members a reason to come back.",
    text: "Create member-only discounts, promotions, offers, and benefits that make membership feel valuable every single visit.",
    preview: <PreviewDiscount />,
  },
  {
    icon: Zap,
    name: "Early-Bird Access",
    headline: "Reward your most engaged customers with early access.",
    text: "Let members register for events, classes, product launches, promotions, and special experiences before general customers.",
    preview: <PreviewEarlyAccess />,
  },
];

export function FeatureShowcase() {
  return (
    <section id="platform" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Platform"
          title={
            <>
              Everything you need to build{" "}
              <span className="text-gradient-light">lasting customer relationships.</span>
            </>
          }
          description="Memberships, exclusive discounts, and early access — one focused platform for keeping customers connected."
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3 lg:mt-16">
          {features.map((f, i) => (
            <Reveal key={f.name} delay={i * 90}>
              <article className="card-hover group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft hover:border-brand-200 hover:shadow-glow">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                    <f.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold tracking-widest text-ink-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                  {f.name}
                </h3>
                <p className="mt-2 text-lg font-semibold leading-snug tracking-tight text-ink-950">
                  {f.headline}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{f.text}</p>
                <div className="mt-6 rounded-xl bg-sand-50 p-4 ring-1 ring-inset ring-ink-100">
                  {f.preview}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
