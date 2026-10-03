import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Strike Technologies Private Limited collects, uses, and protects information.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly — such as your name, business name, email address, phone number, and business details when you contact us or use the Strike platform. We also collect usage information about how the platform is accessed and used.",
  },
  {
    title: "2. How We Use Information",
    body: "We use the information we collect to operate, maintain, and improve the Strike platform; respond to enquiries; provide customer support; communicate updates about memberships, offers, events, and services; and ensure the security of the platform.",
  },
  {
    title: "3. Sharing of Information",
    body: "We do not sell personal information. We may share information only with service providers who help us operate the platform, to comply with legal obligations, or to protect the rights and safety of Strike Technologies Private Limited and its users.",
  },
  {
    title: "4. Data Retention",
    body: "We retain information for as long as needed to provide the platform and fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law.",
  },
  {
    title: "5. Security",
    body: "We take reasonable measures designed to protect information from unauthorized access, alteration, disclosure, or destruction. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "6. Your Choices",
    body: "You may request access to, correction of, or deletion of your personal information by contacting us. You may also opt out of non-essential communications at any time.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Material changes will be communicated through the platform or other reasonable means before taking effect.",
  },
  {
    title: "8. Contact Us",
    body: `Questions about this policy can be directed to ${site.email} or by post to ${site.legalName}, ${site.addressLines.join(" ")}.`,
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-white pb-24 pt-32 lg:pt-40">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Legal</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">
          Privacy Policy
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
