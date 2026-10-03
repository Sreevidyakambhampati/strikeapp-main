import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";

const plans = [
  {
    name: "Starter",
    for: "For small businesses starting their membership journey.",
    price: "Launch pricing",
    note: "Announced at launch",
    featured: false,
    features: [
      "Membership program setup",
      "Member profiles & digital cards",
      "Member-only discounts & offers",
      "Customer updates & announcements",
      "Core engagement analytics",
    ],
  },
  {
    name: "Growth",
    for: "For growing businesses that want deeper customer engagement.",
    price: "Custom pricing",
    note: "Tailored to your business",
    featured: true,
    features: [
      "Everything in Starter",
      "Multiple membership tiers",
      "Early-bird registrations",
      "Events & promotions toolkit",
      "Advanced engagement analytics",
      "Priority support from Team Strike",
    ],
  },
  {
    name: "Enterprise",
    for: "For businesses with advanced membership and engagement requirements.",
    price: "Let's talk",
    note: "Built with you",
    featured: false,
    features: [
      "Everything in Growth",
      "Multi-location management",
      "Custom integrations & workflows",
      "Dedicated success manager",
      "Security & compliance review",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-sand-100 py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute right-[-8rem] top-[-8rem] h-[22rem] w-[22rem] rounded-full bg-brand-100/70 blur-[110px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Simple plans that grow{" "}
              <span className="text-gradient-light">with your community.</span>
            </>
          }
          description="Final pricing is being finalized. Share your requirements and we'll build the right plan for your business."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 110} variant={i === 1 ? "scale" : "up"}>
              <div
                className={`card-hover relative flex h-full flex-col rounded-3xl p-[1.5px] ${
                  plan.featured ? "bg-gradient-to-b from-brand-400 to-brand-700 shadow-glow" : "bg-sand-200"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-glow">
                    Most Popular
                  </span>
                )}
                <div
                  className={`flex h-full flex-col rounded-[calc(1.5rem-1.5px)] p-7 ${
                    plan.featured ? "bg-white" : "bg-white"
                  }`}
                >
                  <h3 className="text-lg font-bold tracking-tight text-ink-950">{plan.name}</h3>
                  <p className="mt-1.5 min-h-10 text-sm text-ink-500">{plan.for}</p>
                  <div className="mt-5">
                    <p className="text-gradient-light text-2xl font-extrabold tracking-tight">
                      {plan.price}
                    </p>
                    <p className="mt-0.5 text-xs text-ink-400">{plan.note}</p>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span
                          className={`mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full ${
                            plan.featured
                              ? "bg-gradient-to-br from-brand-500 to-brand-700 text-white"
                              : "bg-brand-600/10 text-brand-600"
                          }`}
                        >
                          <Check className="size-2.5" aria-hidden="true" />
                        </span>
                        <span className="text-sm font-medium text-ink-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                      plan.featured
                        ? "bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-glow hover:brightness-110"
                        : "border border-ink-200 bg-white text-ink-900 hover:border-brand-300 hover:text-brand-700"
                    }`}
                  >
                    Talk to Strike
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-center text-sm text-ink-500">
            Pricing can be customized based on business requirements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
