import {
  UserX,
  Layers,
  HeartCrack,
  BellOff,
  Megaphone,
  GitBranch,
  ArrowDown,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";

const problems = [
  {
    icon: UserX,
    title: "Customers Leave",
    text: "Customers purchase once and disappear — with no reason built in to return.",
  },
  {
    icon: Layers,
    title: "Engagement Is Fragmented",
    text: "Offers, announcements, memberships, and registrations live in different places.",
  },
  {
    icon: HeartCrack,
    title: "Loyalty Is Difficult",
    text: "Businesses struggle to create meaningful reasons for customers to come back.",
  },
  {
    icon: BellOff,
    title: "Communication Gets Lost",
    text: "Important updates often never reach the right customers at the right time.",
  },
  {
    icon: Megaphone,
    title: "Promotions Feel Generic",
    text: "One-size-fits-all discounts fail to make customers feel like members.",
  },
  {
    icon: GitBranch,
    title: "No Central System",
    text: "Membership management happens in spreadsheets, notebooks, and guesswork.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Problem"
          title={
            <>
              Your customers shouldn&apos;t disappear after{" "}
              <span className="text-gradient-light">the first purchase.</span>
            </>
          }
          description="Most businesses work hard to acquire customers — then let the relationship fade. Without memberships, benefits, and ongoing engagement, every sale becomes a goodbye."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="card-hover group h-full rounded-2xl border border-ink-100 bg-ink-50/60 p-6 shadow-soft hover:border-rose-200 hover:bg-white hover:shadow-lift">
                <span className="grid size-11 place-items-center rounded-xl bg-rose-500/10 text-rose-500 transition-colors duration-300 group-hover:bg-rose-500 group-hover:text-white">
                  <p.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink-950">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-14 flex justify-center">
          <a
            href="#solution"
            className="group inline-flex items-center gap-3 rounded-full border border-brand-200 bg-brand-50 px-6 py-3 text-sm font-semibold text-brand-700 transition-all hover:border-brand-300 hover:shadow-glow"
          >
            Strike was built to change this
            <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
