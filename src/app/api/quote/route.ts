import { NextResponse } from "next/server";

/**
 * Quote/contact form endpoint.
 *
 * Wiring: set QUOTE_FORWARD_URL in the environment to a Formspree endpoint, a webhook,
 * or any service that accepts a JSON POST, and submissions are forwarded there.
 * If unset, the submission is accepted and logged server-side (so the UX works in dev),
 * and delivery is a clearly-marked TODO. No backend is invented here.
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 422 });
  }
  // Honeypot
  if (String(data.company ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const forwardUrl = process.env.QUOTE_FORWARD_URL;
  if (forwardUrl) {
    try {
      const res = await fetch(forwardUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _source: "neoecocleaning.co.uk", _received: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`Forward failed: ${res.status}`);
      return NextResponse.json({ ok: true, delivered: true });
    } catch (err) {
      console.error("[quote] forward error", err);
      return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
    }
  }

  // TODO: set QUOTE_FORWARD_URL to deliver these. For now, log and accept.
  console.log("[quote] received (no QUOTE_FORWARD_URL set):", { name, email });
  return NextResponse.json({ ok: true, delivered: false });
}
