"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is Strike?",
    a: "Strike is a centralized membership and customer engagement platform that helps businesses retain customers, provide exclusive benefits, and communicate updates — all from one place.",
  },
  {
    q: "Who can use Strike?",
    a: "Strike is designed for businesses across multiple industries — restaurants, retail, fitness, entertainment, hospitality, education, and communities — that want to build stronger customer relationships.",
  },
  {
    q: "Can I create multiple membership tiers?",
    a: "Yes. Strike's structure supports multiple membership levels, so you can offer tiers like Silver, Gold, or Platinum — each with its own benefits, pricing, and perks.",
  },
  {
    q: "Can businesses provide exclusive discounts?",
    a: "Yes. Strike is designed to help businesses provide member-only offers and benefits, visible only to the customers you choose.",
  },
  {
    q: "Can businesses send customer updates?",
    a: "Yes. Businesses can use Strike to keep members informed about offers, events, announcements, product updates, schedule changes, and other updates.",
  },
  {
    q: "Can customers access early-bird registrations?",
    a: "Yes. Businesses can open selected registrations and events to members before the general public — building excitement and rewarding loyalty.",
  },
  {
    q: "Does Strike provide analytics?",
    a: "Yes. The platform provides analytics around memberships and customer engagement — active members, growth, redemptions, registrations, and more.",
  },
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={cn(
        "rounded-2xl border transition-colors duration-300",
        open ? "border-brand-200 bg-white shadow-glow" : "border-ink-100 bg-white hover:border-ink-200"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left"
      >
        <span className="text-[15px] font-semibold text-ink-950">{q}</span>
        <span
          className={cn(
            "grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300",
            open
              ? "rotate-180 border-transparent bg-gradient-to-br from-brand-500 to-brand-700 text-white"
              : "border-ink-200 text-ink-400"
          )}
        >
          <ChevronDown className="size-4" aria-hidden="true" />
        </span>
      </button>
      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-ink-600">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-gradient-light">answered.</span>
            </>
          }
          description="Everything businesses usually ask before getting started with Strike."
        />
        <div id="resources" className="mt-12 space-y-3.5">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <FaqItem q={f.q} a={f.a} defaultOpen={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
