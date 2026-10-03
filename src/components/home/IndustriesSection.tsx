import {
  UtensilsCrossed,
  Dumbbell,
  ShoppingBag,
  Clapperboard,
  GraduationCap,
  ConciergeBell,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Cafés",
    text: "Memberships, offers, events, loyalty, and customer updates that fill tables on slow days.",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Wellness",
    text: "Membership benefits, classes, early registration, and consistent member communication.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    text: "Exclusive offers, member-only promotions, launches, and ongoing customer engagement.",
  },
  {
    icon: Clapperboard,
    title: "Entertainment",
    text: "Events, early access, registrations, and exclusive experiences for your biggest fans.",
  },
  {
    icon: GraduationCap,
    title: "Education & Communities",
    text: "Memberships, events, announcements, registrations, and community-wide engagement.",
  },
  {
    icon: ConciergeBell,
    title: "Hospitality",
    text: "Member benefits, offers, experiences, and retention for returning guests.",
  },
];

export function IndustriesSection() {
  return (
    <section id="solutions" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="For Businesses"
          title={
            <>
              Built for businesses that want{" "}
              <span className="text-gradient-light">customers to come back.</span>
            </>
          }
          description="Strike flexes to how your business engages customers — one platform, any industry."
        />

        <div id="for-businesses" className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 3) * 80}>
              <div className="card-hover group h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-soft hover:border-brand-200 hover:shadow-glow">
                <span className="grid size-12 place-items-center rounded-xl border border-brand-100 bg-brand-50 text-brand-600 transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-brand-700 group-hover:text-white">
                  <ind.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink-950">
                  {ind.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{ind.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-10 text-center">
          <p className="text-sm text-ink-500">
            Don&apos;t see your industry?{" "}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1 font-semibold text-brand-600 hover:text-brand-700"
            >
              Strike adapts to any business — talk to us
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
