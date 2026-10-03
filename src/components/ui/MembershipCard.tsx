"use client";

import { useRef, useState, type MouseEvent } from "react";
import { Wifi } from "lucide-react";
import { cn } from "@/lib/utils";

const GOLD_TEXT =
  "bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent";

function QrPattern({ className }: { className?: string }) {
  const n = 15;
  const cells: boolean[][] = [];
  for (let i = 0; i < n; i++) {
    cells[i] = [];
    for (let j = 0; j < n; j++) {
      cells[i][j] = (i * i * 3 + j * j * 7 + i * j * 5) % 11 < 5;
    }
  }
  return (
    <svg viewBox="0 0 60 60" aria-hidden="true" className={className}>
      <rect x="0" y="0" width="60" height="60" rx="8" fill="#f4f5f7" />
      {cells.map((row, i) =>
        row.map((filled, j) =>
          filled ? (
            <rect key={`${i}-${j}`} x={j * 4} y={i * 4} width="3.2" height="3.2" fill="#0c0f17" />
          ) : null
        )
      )}
      {[
        [0, 0],
        [44, 0],
        [0, 44],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="14" height="14" rx="2" fill="#0c0f17" />
          <rect x={x + 2.4} y={y + 2.4} width="9.2" height="9.2" rx="1.4" fill="#f4f5f7" />
          <rect x={x + 4.6} y={y + 4.6} width="4.8" height="4.8" rx="0.8" fill="#0c0f17" />
        </g>
      ))}
    </svg>
  );
}

export function MembershipCard({
  interactive = true,
  className,
}: {
  interactive?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px)");

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!interactive || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(1000px) rotateX(${(-py * 9).toFixed(2)}deg) rotateY(${(px * 12).toFixed(2)}deg)`
    );
  };

  const onLeave = () => setTransform("perspective(1000px)");

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform }}
      className={cn(
        "group relative aspect-[8/5] w-full select-none overflow-hidden rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 shadow-[0_32px_80px_-24px_rgb(7_9_16/0.65)] transition-transform duration-300 ease-out",
        className
      )}
      role="img"
      aria-label="Strike Gold Member digital membership card"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-1/2 top-0 h-full bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.09)_45%,rgba(165,180,252,0.14)_52%,transparent_65%)] opacity-0 transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-16 size-56 rounded-full bg-brand-600/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-16 size-48 rounded-full bg-brand-500/20 blur-3xl"
      />

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-700">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4 text-white">
                <path
                  d="M13.2 2.5 5.6 12.1c-.35.44-.04 1.08.51 1.08h4.14l-1.55 7.06c-.13.6.63.97 1 .48l7.9-9.94c.36-.45.04-1.1-.52-1.1h-4.2l1.42-6.72c.12-.58-.62-.93-1-.46Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="text-sm font-bold tracking-[0.22em] text-white">STRIKE</span>
          </div>
          <Wifi className="size-5 rotate-90 text-ink-300" aria-hidden="true" />
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="min-w-0">
            <p className={`text-lg font-extrabold uppercase tracking-wide sm:text-xl ${GOLD_TEXT}`}>
              Gold Member
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-7 w-9 shrink-0 rounded-md bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-500 p-[3px]"
              >
                <span className="block h-full w-full rounded-[3px] border border-yellow-700/40 bg-[repeating-linear-gradient(90deg,rgba(120,85,20,0.55)_0_1px,transparent_1px_3px),repeating-linear-gradient(0deg,rgba(120,85,20,0.55)_0_1px,transparent_1px_3px)]" />
              </span>
              <div className="leading-tight">
                <p className="text-[9px] font-medium uppercase tracking-widest text-ink-400">
                  Member ID
                </p>
                <p className="font-mono text-xs font-semibold text-ink-100">STK-88214-G</p>
              </div>
            </div>
            <p className="mt-2 text-[10px] font-medium uppercase tracking-widest text-ink-400">
              Member since 2026 · Exclusive Member
            </p>
          </div>

        </div>
      </div>

      <div aria-hidden="true" className="absolute bottom-4 right-4 hidden sm:block">
        <QrPattern className="size-16 rounded-lg opacity-95 shadow-inner" />
      </div>
    </div>
  );
}
