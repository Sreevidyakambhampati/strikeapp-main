import { Check, Crown, IdCard, ScanLine } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { MembershipCard } from "@/components/ui/MembershipCard";

const cardFeatures = [
  "Membership tier with premium gold styling",
  "Unique member ID, instantly verifiable",
  "Built-in QR code for quick check-in",
  "Member benefits listed in the Strike app",
];

export function MembershipCardShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[30rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-100/50 blur-[130px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal variant="left" className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-500/20 via-brand-500/15 to-transparent blur-2xl"
              />
              <div className="animate-float-slow relative rotate-[-3deg] transition-transform duration-700 hover:rotate-0">
                <MembershipCard />
              </div>
              <div className="glass-dark absolute -bottom-6 -right-4 hidden items-center gap-2 rounded-xl px-3.5 py-2.5 text-white shadow-lift sm:flex">
                <ScanLine className="size-4 text-brand-300" aria-hidden="true" />
                <span className="text-xs font-medium">Tap to check in</span>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Digital Membership"
              title={
                <>
                  A membership card your customers{" "}
                  <span className="text-gradient-light">are proud to carry.</span>
                </>
              }
              description="Every member gets a premium digital card — living in the Strike app, always available, impossible to lose."
            />
            <ul className="mt-8 space-y-3.5">
              {cardFeatures.map((f, i) => (
                <Reveal key={f} as="li" delay={i * 90}>
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-ink-800">{f}</span>
                  </span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={380}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1.5 text-xs font-semibold text-amber-700">
                  <Crown className="size-3.5" aria-hidden="true" /> Gold Member
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                  <IdCard className="size-3.5" aria-hidden="true" /> Member ID STK-88214-G
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sand-300 bg-sand-100 px-3.5 py-1.5 text-xs font-semibold text-ink-700">
                  <Check className="size-3.5" aria-hidden="true" /> Exclusive Member benefits
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
