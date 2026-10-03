# Strike Website — Frontend KT (Knowledge Transfer)

Audience: developers maintaining the Strike marketing website.
Last updated: Aug 2026 · Owner: Strike Technologies Private Limited

---

## 1. What this project is

The public website for **Strike** (membership & customer engagement platform).
Marketing site only — no backend. The contact form currently shows a success
state locally; wiring it to email/CRM is a documented follow-up (§9).

**Stack**

| Layer      | Choice                              | Notes                                        |
| ---------- | ----------------------------------- | -------------------------------------------- |
| Framework  | Next.js 15 (App Router)             | Static prerender for every route             |
| Language   | TypeScript (strict)                 | `npm run build` type-checks                  |
| Styling    | Tailwind CSS v4                     | Design tokens live in `globals.css` (`@theme`)|
| Icons      | lucide-react                        | Tree-shaken, imported per component          |
| Animation  | CSS + IntersectionObserver          | No animation library                         |

**Commands**

```bash
npm install       # once
npm run dev       # http://localhost:3000
npm run build     # production build + type check
npm start         # serve production build
```

---

## 2. Folder structure

```
src/
├── app/                     # Routes (App Router = folder = URL)
│   ├── layout.tsx           # Root shell: fonts, <Navbar/>, <Footer/>, SEO, JSON-LD
│   ├── page.tsx             # Homepage — ONLY assembles sections, no markup
│   ├── globals.css          # ★ Design tokens + keyframes + utility classes
│   ├── icon.svg             # Favicon (orange bolt)
│   ├── sitemap.ts robots.ts # Generated /sitemap.xml, /robots.txt
│   ├── about/page.tsx       contact/
│   │                          ├── page.tsx        (server)
│   │                          └── ContactForm.tsx ("use client")
│   └── privacy/ terms/      # Legal pages (simple prose)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # CLIENT. Fixed header + app-banner marquee + mobile menu
│   │   └── Footer.tsx       # Server. Link columns driven by lib/site.ts
│   ├── ui/                  # Reusable primitives (see §4)
│   └── home/                # One file per homepage section (see §5)
└── lib/
    ├── site.ts              # ★ All site-wide copy/config (nav, footer, contact, metrics)
    └── utils.ts             # cn() class joiner
```

★ = the two files to know first.

---

## 3. Rendering model (important)

Default is **React Server Components**. Only these are `"use client"`:

| File                    | Why client                                    |
| ----------------------- | --------------------------------------------- |
| `layout/Navbar.tsx`     | scroll state, mobile menu, dismissible banner |
| `ui/Reveal.tsx`         | IntersectionObserver scroll-reveal            |
| `ui/CountUp.tsx`        | rAF number animation on scroll into view      |
| `ui/MembershipCard.tsx` | pointer-tracking 3D tilt                      |
| `home/Faq.tsx`          | accordion open state                          |
| `contact/ContactForm.tsx| controlled form + success state               |

Everything else renders on the server → small JS bundle (~111 kB first load).

**Rule:** when editing, keep new components server-side unless they need state,
event handlers, or browser APIs. Never wrap a whole section in `"use client"`
just to use one interactive child — compose instead (see `Hero` using `CountUp`).

---

## 4. Design system

### Brand colors (source of truth: `src/app/globals.css`, `@theme` block)

| Token          | Role                                | Value (current)        |
| -------------- | ----------------------------------- | ---------------------- |
| `brand-*`      | **Burnt orange** primary/accent     | core `#c2410c`(600)    |
| white          | Primary background                  | —                      |
| `sand-*`       | Beach neutral secondary background  | `#f9f3eb`(100)         |
| `ink-*`        | Warm charcoal text / dark sections  | `#15100c`(950)         |
| emerald/red    | Success / error only                | Tailwind defaults      |

To rebrand again: edit the CSS variables in `@theme`. Every component uses token
classes (`bg-brand-600`, `text-ink-500`…) so a palette change never touches TSX.
Gradient text utilities `.text-gradient` / `.text-gradient-light` and
`.shadow-glow` also read from these values — update them in the same place.

### Custom utilities (same file)

- `.glass-dark` – translucent panel used for floating chips
- `.card-hover` – lift-on-hover transition
- `.reveal` (+ `[data-visible="true"]`) – scroll animation base
- `.chart-line` / `.chart-bar` – draw-in animations for SVG charts
- `.bg-grid-dark/.bg-grid-light`, `.mask-radial-faded` – section backdrops

### Typography

Inter via `next/font/google` (variable `--font-inter`, wired to `--font-sans`
in `@theme`). Headings: tight tracking (`tracking-tight`), bold weights.

### Motion rules

- Entrances: wrap in `<Reveal delay={n}>`; stagger siblings by ~70–130 ms.
- Numbers: `<CountUp value={n} suffix="+" />`.
- Global `prefers-reduced-motion` kill-switch at the bottom of `globals.css`.
- Don't add JS animation libraries; extend the existing keyframes instead.

---

## 5. Homepage section inventory (order matters)

`src/app/page.tsx` composes them — each maps 1:1 to a file in
`components/home/`:

1. `Hero` — headline + dashboard mockup + floating membership card + ticker
2. `ProblemSection` — 6 pain-point cards (white bg)
3. `SolutionSection` — ecosystem diagram, Strike center + 9 nodes (dark)
4. `FeatureShowcase` — exactly 3 platform cards w/ mini UI previews (sand bg)
5. `JourneySection` — Create → Engage → Retain → Grow (dark)
6. `IndustriesSection` — 6 industry cards (#solutions anchor)
7. `CustomerExperience` — phone mockup + benefit list (sand bg)
8. `MembershipCardShowcase` — gold card feature block (white)
9. `CommunicationSection` — notification cards (dark)
10. `Testimonials` — placeholder logos marquee + demo quotes (#resources anchor)
11. `Metrics` — animated counters + disclaimer
12. `Pricing` — 3 tiers, Growth featured (#pricing anchor)
13. `Faq` — accordion (#faq, #resources anchors live here too)
14. `FinalCta` — gradient closer with floating particles

Anchors referenced by navbar: `#platform #solutions #how-it-works
#for-businesses #for-customers #pricing #resources`.

**Recipe — add a section**
1. Create `components/home/MySection.tsx` (server component).
2. Use `<section>` + `Container`-style padding (`max-w-7xl px-5 sm:px-8`),
   alternate background: white → `bg-sand-100` → dark `bg-ink-950`.
3. Headings: reuse `<SectionHeading>` for consistency.
4. Import + insert in `page.tsx` at the right position.

**Recipe — remove one**: delete import + tag from `page.tsx`, then delete the
component file if unused anywhere else.

---

## 6. Key primitives (`components/ui/`)

| Component      | Props (main)                                   | Purpose                        |
| -------------- | ---------------------------------------------- | ------------------------------ |
| `Reveal`       | `delay, variant(up/left/right/scale), as`      | Scroll-in wrapper              |
| `CountUp`      | `value, suffix, prefix, duration`              | Animated metric numbers        |
| `SectionHeading` | `eyebrow, title, description, dark, align`   | Consistent section headers     |
|                | `btnPrimary / btnSecondaryDark / btnSecondaryLight` | Shared button class strings |
| `Logo/LogoLink`| `dark`                                         | Bolt mark + wordmark           |
| `MembershipCard` | `interactive` (tilt on/off)                  | Gold member card visual        |
| `Charts`       | `AreaChart(id,data), BarChart(data), Donut(value)` | Pure SVG, deterministic (SSR-safe, unique `id` required per AreaChart) |

Charts contain **hardcoded demo arrays** — replace `data={[…]}` props when real
analytics exist. They are illustrations, not live data (say so in copy nearby).

---

## 7. Central content config — `lib/site.ts`

Single place for: site name/legal name/URL/email/phone/address, nav links,
footer columns, contact cards, homepage metrics. Edit copy here rather than
hunting through components. Section-level copy lives inside its component file
by design (keeps each section self-contained).

> If the domain changes, update `site.url` — it drives canonical URLs, OG tags,
> JSON-LD `@id`s, and sitemap/robots entries together.

---

## 8. App banner ("coming soon" marquee)

Lives inside `Navbar.tsx`: homepage-only (`usePathname()`), dismissible,
auto-collapses past ~160 px scroll. Marquee = duplicated content +
`animate-marquee` (`translateX(-50%)` loop). Keep both copies identical or the
loop will visibly jump. Screen readers get an `sr-only` static line.

---

## 9. SEO & schema

- `layout.tsx` exports `metadata` (title template `%s | Strike`, description,
  keywords, OpenGraph, Twitter, robots) + `viewport.themeColor`.
- Every page adds `alternates: { canonical }` in its own `metadata`.
- JSON-LD graph (`Organization` + `WebSite`) injected in root layout — keep in
  sync with `site.ts`.
- `sitemap.ts` / `robots.ts` auto-generate from route list + `site.url`.
- Add any new page to `sitemap.ts` routes array.

---

## 10. Known follow-ups (for the team backlog)

1. **Contact form backend — Formspree (done)** — `ContactForm.tsx` POSTs to
   `https://formspree.io/f/<ID>`. Set the ID via `NEXT_PUBLIC_FORMSPREE_ID` in
   `.env.local` (copy `.env.example`). If the variable is empty the form
   simulates success locally (useful for dev). Submissions land in the
   Formspree dashboard and email the account owner; free tier = 50/month.
   Field keys: `fullName, businessName, email, phone, industry,
   customerCount, message` (+ `_subject`). Spam protection: `_gotcha` honeypot.
2. Replace placeholder testimonials/logos/metrics with real, verified content.
3. Pricing is intentionally price-less ("Talk to Strike") until plans finalize —
   edit `Pricing.tsx` `plans[]` only.
4. Social links are placeholders in `Footer.tsx` (`role="img"` spans) — swap for
   real `<a>` tags when accounts exist.
5. `Donut` uses a shared SVG gradient id (`donut-grad`) — if two donuts ever
   render on one page, give it an `id` prop like AreaChart has.
6. Consider OG image asset (`opengraph-image`) when brand art is final.

---

## 11. Pre-release QA checklist

- [ ] `npm run build` passes (includes type check)
- [ ] Check 360 px width — no horizontal scroll on any page
- [ ] Keyboard-tab the homepage: focus rings visible, order logical
- [ ] Mobile menu opens/closes; Escape closes it
- [ ] Banner dismiss works; reappears on reload (intentional)
- [ ] Anchors from navbar land correctly (scroll-padding compensates header)
- [ ] `/sitemap.xml` and `/robots.txt` return 200 wit
