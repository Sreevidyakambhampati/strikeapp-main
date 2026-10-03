import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { contactCards, site } from "@/lib/site";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Contact Strike",
  description:
    "Talk to the Strike team about building memberships, exclusive offers, early access, and customer engagement for your business.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Strike",
    description:
      "Talk to the Strike team about memberships and customer engagement for your business.",
  },
};

export default function ContactPage() {
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
              Contact
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build better{" "}
              <span className="text-gradient">customer relationships.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
              Tell us about your business and we&apos;ll show you how Strike can turn your customers
              into engaged, returning members.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand-100 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.6fr_1fr]">
          <ContactForm />

          <aside className="space-y-5">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{card.title}</span>
                    {card.lines.map((line) => (
                      <span key={line} className="block text-sm leading-relaxed text-ink-400">
                        {line}
                      </span>
                    ))}
                  </span>
                </>
              );
              return card.href ? (
                <a
                  key={card.title}
                  href={card.href}
                  className="glass-dark flex items-start gap-4 rounded-2xl p-5 transition-colors hover:border-brand-400/30 hover:bg-white/[0.06]"
                >
                  {content}
                </a>
              ) : (
                <div key={card.title} className="glass-dark flex items-start gap-4 rounded-2xl p-5">
                  {content}
                </div>
              );
            })}
            <div className="rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-600/15 to-brand-700/10 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-white">
                <Clock className="size-4 text-brand-300" aria-hidden="true" />
                Response time
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
                We typically reply within 1–2 business days. Prefer email? Write to{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-brand-300 underline-offset-2 hover:underline">
                  {site.email}
                </a>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
