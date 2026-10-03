import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { site, footerLinks, socialLinks } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-ink-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-ink-950 text-ink-300">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr_1.7fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
              {site.tagline} One platform to manage memberships, reward customers, launch exclusive
              offers, and keep your community engaged.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Strike on ${label}`}
                  title={label}
                  className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-ink-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/40 hover:bg-brand-600 hover:text-white"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Platform" links={footerLinks.platform} />
          <LinkColumn title="Solutions" links={footerLinks.solutions} />
          <LinkColumn title="Company" links={footerLinks.company} />

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden="true" />
                <address className="not-italic leading-relaxed text-ink-400">
                  {site.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex gap-3 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden="true" />
                  <span className="break-all text-ink-400">{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex gap-3 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden="true" />
                  <span className="text-ink-400">{site.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Turn Customers Into Members. Members Into Loyal Customers.
          </p>
        </div>
      </div>
    </footer>
  );
}
