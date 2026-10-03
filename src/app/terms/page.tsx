import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Strike platform.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using the Strike platform, you agree to be bound by these Terms and Conditions and all applicable laws. If you do not agree with any part of these terms, you may not use the platform. These terms constitute an agreement between you and ${site.legalName}.`,
  },
  {
    title: "2. Description of Service",
    body: "Strike is a centralized membership and customer engagement platform that enables businesses to create memberships, provide exclusive discounts, launch early-bird registrations, publish updates, promote events, and analyze customer engagement.",
  },
  {
    title: "3. Eligibility & Accounts",
    body: "You must have the legal capacity to enter into this agreement. Businesses are responsible for maintaining the confidentiality of their account credentials and for all activity that occurs under their accounts, including the accuracy of membership information they publish.",
  },
  {
    title: "4. Acceptable Use",
    body: "You agree not to misuse the platform — including unlawful activity, infringement of others' rights, attempts to gain unauthorized access, distribution of malware, or publication of misleading offers and promotions. Strike may suspend accounts that violate these rules.",
  },
  {
    title: "5. Membership Content",
    body: "Businesses retain ownership of the content they create on Strike (memberships, offers, events, updates) and are responsible for honoring the benefits they advertise to their members. Strike may display aggregated, anonymized insights derived from platform usage.",
  },
  {
    title: "6. Fees & Payments",
    body: "Pricing plans and payment terms will be presented at signup or by agreement. Unless otherwise stated, fees are non-refundable. Pricing can be customized based on business requirements through direct agreement with the Strike team.",
  },
  {
    title: "7. Disclaimers",
    body: "The platform is provided on an 'as is' and 'as available' basis without warranties of any kind, whether express or implied, including fitness for a particular purpose, accuracy, or uninterrupted availability.",
  },
  {
    title: "8. Limitation of Liability",
    body: "To the maximum extent permitted by law, Strike Technologies Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising from your use of the platform.",
  },
  {
    title: "9. Termination",
    body: "We may suspend or terminate access to the platform for violations of these terms or for extended inactivity where permitted by law. You may stop using the platform at any time.",
  },
  {
    title: "10. Governing Law",
    body: "These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts located in Andhra Pradesh, India.",
  },
  {
    title: "11. Contact",
    body: `For questions about these Terms, contact ${site.email} or write to ${site.legalName}, ${site.addressLines.join(" ")}.`,
  },
];

export default function TermsPage() {
  return (
    <section className="bg-white pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Legal</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-sm text-ink-500">
          Last updated: August 23, 2026 · {site.legalName}
        </p>
        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold tracking-tight text-ink-950">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
