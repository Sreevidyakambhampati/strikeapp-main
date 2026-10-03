import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  Compass,
  HeartHandshake,
  Building2,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/Section";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "About Strike",
  description:
    "Strike Technologies Private Limited is building the infrastructure for better customer relationships — helping businesses create lasting membership and engagement experiences.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Strike",
    description:
      "We're building the infrastructure for better customer relationships.",
  },
};

const beliefs = [
  "Relationships outlast transactions.",
  "Every customer deserves to feel like a member, not a sale.",
  "Small businesses deserve enterprise-grade engagement tools.",
  "Technology should feel personal, never intrusive.",
  "Retention is the most honest form of growth.",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 pb-20 pt-32 text-white lg:pt-40">
        <div aria-hidden="true" className="absolute inset-0 bg-grid-dark mask-radial-faded" />
        <div
          aria-hidden="true"
          className="absolute -top-24 left-1/2 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[140px]"
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-300">
              About Strike
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              We&apos;re building the infrastructure for{" "}
              <span className="text-gradient">better customer relationships.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Idea"
                title={
                  <>
                    No business should have to treat every customer{" "}
                    <span className="text-gradient-light">as a one-time transaction.</span>
                  </>
                }
              />
              <Reveal delay={150}>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
                  <p>
                    Strike is designed around a simple idea: businesses shouldn&apos;t have to treat
                    every customer interaction as a one-time transaction.
                  </p>
                  <p>
                    Strike provides the technology needed to create ongoing membership relationships
                    between businesses and their customers — memberships that carry benefits,
                    benefits that create reasons to return, and engagement that turns visits into
                    loyalty.
                  </p>
                  <p>
                    From a café in Chirala to a retail chain across Andhra Pradesh, Strike gives any
                    business the same core capability: a connected community of customers who keep
                    coming back.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="space-y-5">
              <Reveal variant="right">
                <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-7 shadow-soft">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                    <Target className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-lg font-bold tracking-tight text-ink-950">Mission</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    Help businesses build lasting relationships with their customers through
                    meaningful membership and engagement experiences.
                  </p>
                </div>
              </Reveal>
              <Reveal variant="right" delay={120}>
                <div className="rounded-3xl border border-sand-300 bg-gradient-to-br from-sand-100 to-white p-7 shadow-soft">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-white shadow-glow">
                    <Eye className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-lg font-bold tracking-tight text-ink-950">Vision</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    Create a world where every business can build a connected and loyal customer
                    community.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand-100 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="What We Believe"
                title={
                  <>
                    Principles behind <span className="text-gradient-light">every feature.</span>
                  </>
                }
              />
              <ul className="mt-8 space-y-4">
                {beliefs.map((b, i) => (
                  <Reveal key={b} as="li" delay={i * 80}>
                    <div className="flex items-start gap-3.5 rounded-2xl border border-ink-100 bg-white p-4.5 shadow-soft">
                      <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand-600/10 text-brand-600">
                        <HeartHandshake className="size-3.5" aria-hidden="true" />
                      </span>
                      <p className="pt-0.5 text-sm font-medium leading-relaxed text-ink-800">{b}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading
                align="left"
                eyebrow="Why Strike"
                title={
                  <>
                    Engagement is becoming{" "}
                    <span className="text-gradient-light">the deciding factor.</span>
                  </>
                }
              />
              <Reveal delay={150}>
                <div className="mt-8 space-y-4 text-base leading-relaxed text-ink-600">
                  <p>
                    Customers today can buy anything from anywhere. What they can&apos;t get anywhere
                    else is belonging — recognition, benefits, early access, and a business that
                    communicates with them like a member of something.
                  </p>
                  <p>
                    That&apos;s why we built Strike as a centralized platform rather than another
                    discounts app. Memberships are the foundation; offers, events, early access, and
                    updates are how the relationship stays alive week after week.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={250}>
                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-7 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Work with us
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal variant="scale">
            <div className="overflow-hidden rounded-3xl border border-ink-100 bg-ink-950 p-8 text-white shadow-lift sm:p-12">
              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-glow">
                  <Building2 className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-xl font-bold tracking-tight">Company information</h2>
                  <p className="mt-1 text-sm font-semibold text-brand-300">{site.legalName}</p>
                </div>
              </div>
              <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                <div>
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-400">
                    <MapPin className="size-3.5" aria-hidden="true" /> Registered office
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-300">
                    {site.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-400">
                    <Mail className="size-3.5" aria-hidden="true" /> Email
                  </dt>
                  <dd className="mt-2 break-all text-sm text-ink-300">
                    <a href={`mailto:${site.email}`} className="hover:text-white">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-400">
                    <Phone className="size-3.5" aria-hidden="true" /> Phone
                  </dt>
                  <dd className="mt-2 text-sm text-ink-300">
                    <a href={`tel:${site.phoneHref}`} className="hover:text-white">
                      {site.phone}
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="mt-8 flex items-center gap-2 border-t border-white/[0.06] pt-6 text-xs text-ink-500">
                <Compass className="size-3.5 text-brand-400" aria-hidden="true" />
                Operating the Strike membership &amp; customer engagement platform from Chirala,
                Andhra Pradesh, India.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
