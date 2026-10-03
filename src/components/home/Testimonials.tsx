import { Star, Info } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";

const placeholderLogos = [
  "NORTHWIND",
  "Acme & Co",
  "BLUEPEAK",
  "Kindred",
  "LUMEN LABS",
  "Craftline",
  "OAKFIELD",
  "Solace",
];

const testimonials = [
  {
    quote:
      "Strike gives us a simple way to keep our customers engaged beyond the transaction.",
    name: "Laya",
    role: "Owner, Demo Café",
    industry: "Restaurants & Cafés",
    initials: "L",
  },
  {
    quote:
      "Our members finally have one place for offers, events, and updates from us.",
    name: "Sunil",
    role: "Manager, Demo Fitness Studio",
    industry: "Fitness & Wellness",
    initials: "S",
  },
  {
    quote:
      "Early-bird registrations filled our launch event in the first weekend.",
    name: "Aarya",
    role: "Founder, Demo Retail Co.",
    industry: "Retail",
    initials: "A",
  },
];

function Stars() {
  return (
    <span className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </span>
  );
}

export function Testimonials() {
  return (
    <section id="resources" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
            Trusted by forward-thinking businesses
          </p>
        </Reveal>
        <div
          className="relative mt-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee items-center gap-16 pr-16 hover:[animation-play-state:paused]">
            {[...placeholderLogos, ...placeholderLogos].map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                aria-hidden={i >= placeholderLogos.length}
                className="select-none whitespace-nowrap text-lg font-bold tracking-wide text-ink-300 transition-colors hover:text-ink-500"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
        <Reveal delay={100}>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-ink-400">
            <Info className="size-3" aria-hidden="true" />
            official partners.
          </p>
        </Reveal>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Social Proof"
            title={
              <>
                What businesses will say{" "}
                <span className="text-gradient-light">about Strike.</span>
              </>
            }
            description="A preview of the stories we plan to tell. The examples below are illustrative placeholders."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.role} delay={i * 100}>
                <figure className="card-hover flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-soft hover:shadow-lift">
                  <Stars />
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-800">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                    <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
                      {t.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink-950">{t.name}</span>
                      <span className="block text-xs text-ink-500">{t.role}</span>
                    </span>
                  </figcaption>
                  <span className="mt-4 inline-flex w-fit rounded-full border border-brand-200 bg-brand-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-700">
                    {t.industry}
                  </span>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
