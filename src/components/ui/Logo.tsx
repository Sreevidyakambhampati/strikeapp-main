import Link from "next/link";

export function Logo({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 shadow-glow">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5 text-white">
          <path
            d="M13.2 2.5 5.6 12.1c-.35.44-.04 1.08.51 1.08h4.14l-1.55 7.06c-.13.6.63.97 1 .48l7.9-9.94c.36-.45.04-1.1-.52-1.1h-4.2l1.42-6.72c.12-.58-.62-.93-1-.46Z"
            fill="currentColor"
          />
        </svg>
      </span>
      {!compact && (
        <span
          className={`text-[1.35rem] font-bold tracking-tight ${
            dark ? "text-white" : "text-ink-950"
          }`}
        >
          Strike
        </span>
      )}
    </span>
  );
}

export function LogoLink({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" aria-label="Strike home" className="rounded-xl transition-opacity hover:opacity-85">
      <Logo dark={dark} />
    </Link>
  );
}
