import { cn } from "@/lib/utils";

function buildPoints(data: number[], width: number, height: number, pad = 6) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = (width - pad * 2) / (data.length - 1);
  return data.map((v, i) => [
    pad + i * stepX,
    height - pad - ((v - min) / range) * (height - pad * 2),
  ]) as [number, number][];
}

function smoothPath(points: [number, number][]) {
  if (points.length < 2) return "";
  let d = `M ${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    const [x0, y0] = points[i - 1];
    const [x1, y1] = points[i];
    const mx = (x0 + x1) / 2;
    d += ` C ${mx},${y0} ${mx},${y1} ${x1},${y1}`;
  }
  return d;
}

export function AreaChart({
  id,
  data,
  className,
  stroke = "#dd6328",
  from = "rgba(221,99,40,0.32)",
  to = "rgba(221,99,40,0)",
}: {
  id: string;
  data: number[];
  className?: string;
  stroke?: string;
  from?: string;
  to?: string;
}) {
  const W = 560;
  const H = 170;
  const pts = buildPoints(data, W, H, 8);
  const line = smoothPath(pts);
  const area = `${line} L ${pts[pts.length - 1][0]},${H} L ${pts[0][0]},${H} Z`;
  const last = pts[pts.length - 1];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true" className={cn("h-full w-full", className)}>
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="currentColor" strokeOpacity="0.07" strokeDasharray="3 6" />
      ))}
      <path d={area} fill={`url(#${id}-fill)`} />
      <path
        d={line}
        fill="none"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        className="chart-line"
      />
      <circle cx={last[0]} cy={last[1]} r="4.5" fill={stroke} />
      <circle cx={last[0]} cy={last[1]} r="9" fill={stroke} opacity="0.25" className="animate-pulse" />
    </svg>
  );
}

export function BarChart({
  data,
  className,
  highlight = -1,
}: {
  data: number[];
  className?: string;
  highlight?: number;
}) {
  const max = Math.max(...data) || 1;
  return (
    <div aria-hidden="true" className={cn("flex h-full items-end gap-[6%]", className)}>
      {data.map((v, i) => (
        <div
          key={i}
          className="chart-bar flex-1 rounded-t-md"
          style={{
            height: `${Math.max((v / max) * 100, 6)}%`,
            transitionDelay: `${i * 60}ms`,
            background:
              i === highlight
                ? "linear-gradient(to top,#9a3412,#dd6328)"
                : i % 2 === 0
                  ? "rgba(221,99,40,0.8)"
                  : "rgba(231,130,74,0.4)",
          }}
        />
      ))}
    </div>
  );
}

export function Donut({
  value,
  size = 120,
  label,
  className,
}: {
  value: number;
  size?: number;
  label?: string;
  className?: string;
}) {
  const r = 42;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label={label ?? `${value}%`} className={className} style={{ width: size, height: size }}>
      <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="9" />
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="url(#donut-grad)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray={`${(value / 100) * c} ${c}`}
        transform="rotate(-90 50 50)"
      />
      <defs>
        <linearGradient id="donut-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#dd6328" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function MiniBars({ data, className }: { data: number[]; className?: string }) {
  const max = Math.max(...data) || 1;
  return (
    <span aria-hidden="true" className={cn("inline-flex h-6 items-end gap-[3px]", className)}>
      {data.map((v, i) => (
        <span
          key={i}
          className="w-[4px] rounded-sm bg-brand-400/70"
          style={{ height: `${Math.max((v / max) * 100, 12)}%` }}
        />
      ))}
    </span>
  );
}
