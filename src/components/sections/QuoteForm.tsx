"use client";
import { useState } from "react";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { ButtonEl } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20";
const labelCls = "mb-1.5 block text-sm font-medium text-ink";
const selectCls = cn(inputCls, "appearance-none pr-10 select-chevron");

export function QuoteForm({ defaultService = "", defaultArea = "" }: { defaultService?: string; defaultArea?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name || !data.email || !data.message) {
      setError("Please fill in your name, email and a short message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) {
      setError("Please enter a valid email address.");
      return;
    }
    if (data.company) {
      // Honeypot filled = bot. Pretend success.
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please call us on 07768 066860 or email hello@neoecocleaning.co.uk.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand-800 text-white">
          <Icon name="Check" className="size-7" />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-ink">Thank you, we will be in touch</h3>
        <p className="mt-2 text-sm text-body">
          We have received your enquiry and will respond shortly to arrange your free site survey. For anything urgent,
          call us on 07768 066860.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      {/* Honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-name" className={labelCls}>
            Your name
          </label>
          <input id="qf-name" name="name" autoComplete="name" required className={inputCls} placeholder="Sarah Chen" />
        </div>
        <div>
          <label htmlFor="qf-email" className={labelCls}>
            Email
          </label>
          <input id="qf-email" name="email" type="email" autoComplete="email" required className={inputCls} placeholder="sarah@rendallandrittner.co.uk" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-phone" className={labelCls}>
            Phone <span className="font-normal text-muted">(optional)</span>
          </label>
          <input id="qf-phone" name="phone" type="tel" autoComplete="tel" className={inputCls} placeholder="07700 000000" />
        </div>
        <div>
          <label htmlFor="qf-role" className={labelCls}>
            You are a <span className="font-normal text-muted">(optional)</span>
          </label>
          <select id="qf-role" name="role" defaultValue="" className={selectCls}>
            <option value="">Select</option>
            <option>Managing agent</option>
            <option>Freeholder</option>
            <option>Resident / leaseholder</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-service" className={labelCls}>
            Service
          </label>
          <select id="qf-service" name="service" defaultValue={defaultService} className={selectCls}>
            <option value="">Any service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="qf-area" className={labelCls}>
            Area
          </label>
          <select id="qf-area" name="area" defaultValue={defaultArea} className={selectCls}>
            <option value="">Select area</option>
            {areas.map((a) => (
              <option key={a.slug} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="qf-message" className={labelCls}>
          About your block
        </label>
        <textarea
          id="qf-message"
          name="message"
          required
          rows={4}
          className={inputCls}
          placeholder="Tell us about the building, the communal areas and what you need."
        />
      </div>

      {error && (
        <p className="flex items-center gap-2 text-sm text-red-600" role="alert">
          <Icon name="X" className="size-4" />
          {error}
        </p>
      )}

      <ButtonEl type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending..." : "Request my free quote"}
        {status !== "submitting" && <Icon name="ArrowRight" className="size-4" />}
      </ButtonEl>
      <p className="text-xs text-muted">
        By submitting, you agree we may contact you about your enquiry. We never share your details.
      </p>
    </form>
  );
}
