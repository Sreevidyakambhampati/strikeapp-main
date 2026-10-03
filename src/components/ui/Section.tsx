import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]",
              dark
                ? "border-white/10 bg-white/5 text-brand-300"
                : "border-brand-200 bg-brand-50 text-brand-700"
            )}
          >
            <span className={cn("size-1.5 rounded-full", dark ? "bg-brand-400" : "bg-brand-600")} />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={80}>
        <h2
          className={cn(
            "mt-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]",
            dark ? "text-white" : "text-ink-950"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={150}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              dark ? "text-ink-300" : "text-ink-600"
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift hover:brightness-110 active:translate-y-0 active:shadow-md";

export const btnSecondaryDark =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0";

export const btnSecondaryLight =
  "inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-900 shadow-soft transition-all duration-300 hover:border-ink-300 hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0";
