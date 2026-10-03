"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Smartphone, Sparkles } from "lucide-react";
import { navLinks } from "@/lib/site";
import { LogoLink } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const BANNER_HIDE_AT = 160;

function BannerContent() {
  const messages = [
    "Strike App — Coming Soon",
    "Your membership, offers & events — soon in your pocket",
    "Early access opening shortly",
  ];
  const segments = Array.from({ length: 3 }).flatMap(() => messages);
  return (
    <>
      {[false, true].map((dup) => (
        <div key={String(dup)} aria-hidden={dup || undefined} className="flex items-center gap-10 pr-10">
          {segments.map((msg, i) => (
            <span
              key={`${msg}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
            >
              <Smartphone className="size-3.5 shrink-0 text-white/85" />
              {msg}
              <Sparkles className="size-3 shrink-0 text-white/70" />
            </span>
          ))}
        </div>
      ))}
    </>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [bannerHidden, setBannerHidden] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 12);
        setBannerHidden(window.scrollY > BANNER_HIDE_AT);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const showBanner = isHome && bannerOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {showBanner && (
        <div
          className={cn(
            "overflow-hidden border-b border-white/10 transition-all duration-500 ease-out",
            bannerHidden ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          )}
        >
          <div className="relative flex items-center bg-gradient-to-r from-brand-800 via-brand-600 to-brand-500 bg-[length:200%_100%] animate-gradient-x">
            <span className="sr-only">
              Announcement: The Strike mobile app is coming soon.
            </span>
            <div
              aria-hidden="true"
              className="min-w-0 flex-1 overflow-hidden py-2"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
              }}
            >
              <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
                <BannerContent />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setBannerOpen(false)}
              aria-label="Dismiss app announcement"
              className="absolute right-2.5 grid size-6 shrink-0 place-items-center rounded-full text-white/75 transition-colors hover:bg-white/20 hover:text-white"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </div>
      )}

      <nav
        aria-label="Main navigation"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8",
          scrolled ? "h-16" : "h-20",
          scrolled &&
            "border-b border-white/[0.06] bg-ink-950/80 shadow-[0_8px_32px_-16px_rgb(7_9_16/0.6)] backdrop-blur-xl"
        )}
      >
        <LogoLink dark />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-px hover:brightness-110"
          >
            Get Started
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-2 text-sm font-semibold text-white sm:inline-flex"
          >
            Get Started
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-b border-white/[0.06] bg-ink-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="space-y-1 px-5 py-5">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-ink-100 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
