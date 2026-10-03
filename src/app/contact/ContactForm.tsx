"use client";

import { useState, type FormEvent } from "react";
import { Send, CircleCheck, TriangleAlert, Loader2 } from "lucide-react";
import { formEndpoint, site } from "@/lib/site";

const industries = [
  "Restaurants & Cafés",
  "Fitness & Wellness",
  "Retail",
  "Entertainment",
  "Education & Communities",
  "Hospitality",
  "Other",
];

const customerRanges = [
  "Under 100 customers",
  "100 – 500 customers",
  "500 – 2,000 customers",
  "2,000 – 10,000 customers",
  "10,000+ customers",
];

const inputClass =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 shadow-sm transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-600";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "New enquiry from the Strike website");
    setStatus("submitting");

    try {
      if (formEndpoint) {
        const res = await fetch(formEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (!res.ok) throw new Error(`Submission failed (${res.status})`);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl border border-emerald-200 bg-emerald-50/50 p-10 text-center">
        <span className="grid size-16 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
          <CircleCheck className="size-8" aria-hidden="true" />
        </span>
        <h2 className="mt-6 text-xl font-bold tracking-tight text-ink-950">
          Thanks — we&apos;ve got your message.
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-600">
          The Strike team will get back to you within 1–2 business days. For anything urgent, email
          us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Contact Strike"
      className="rounded-3xl border border-ink-100 bg-white p-7 shadow-lift sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name *
          </label>
          <input id="fullName" name="fullName" type="text" required autoComplete="name" placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="businessName" className={labelClass}>
            Business Name *
          </label>
          <input id="businessName" name="businessName" type="text" required autoComplete="organization" placeholder="Your business name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@business.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000" className={inputClass} />
        </div>
        <div>
          <label htmlFor="industry" className={labelClass}>
            Industry
          </label>
          <select id="industry" name="industry" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select your industry
            </option>
            {industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="customerCount" className={labelClass}>
            Number of Customers
          </label>
          <select id="customerCount" name="customerCount" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a range
            </option>
            {customerRanges.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your business and what you'd like to achieve with memberships…"
            className={`${inputClass} resize-y`}
          />
        </div>
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            Something went wrong while sending your message. Please try again, or email us directly
            at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-2">
              {site.email}
            </a>
            .
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-8 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            Sending…
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            Contact Strike
            <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>
      <p className="mt-4 text-xs text-ink-400">
        By submitting, you agree to be contacted by the Strike team about your enquiry.
      </p>
    </form>
  );
}
