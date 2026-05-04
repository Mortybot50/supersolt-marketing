import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Privacy — SuperSolt",
  description:
    "How SuperSolt handles your data, in plain English. Australian Privacy Principles compliant.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="container-page pt-32 pb-20 max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-warm-gray">
          Legal
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tighter">
          Privacy
        </h1>
        <p className="mt-4 text-warm-gray">Last updated: 4 May 2026</p>

        <div className="prose prose-zinc mt-10 space-y-6 text-[15px] leading-relaxed text-base-dark">
          <p>
            SuperSolt handles your data the way we&rsquo;d want our own handled:
            minimum needed, encrypted at rest, and never sold. This page is the
            human-readable summary. The full policy lives in your account
            settings once you sign in.
          </p>

          <h2 className="text-xl font-semibold tracking-tight">What we collect</h2>
          <p>
            Account details (name, email, business name), payments (handled by
            Stripe — we never see your card), and operational data you connect
            via Square and Xero (sales, items, invoices, roster). No customer
            credit card data ever touches SuperSolt.
          </p>

          <h2 className="text-xl font-semibold tracking-tight">How we store it</h2>
          <p>
            Hosted on Supabase (Australian region where available). POS access
            tokens are encrypted at rest using AES-256-GCM. Row-level security
            scopes every database query to your organisation only.
          </p>

          <h2 className="text-xl font-semibold tracking-tight">Who we share it with</h2>
          <p>
            Nobody, except sub-processors we use to run the service (Supabase
            for hosting, Vercel for the application layer, Plausible for
            privacy-respecting analytics). We don&rsquo;t sell your data and we
            don&rsquo;t train AI on it.
          </p>

          <h2 className="text-xl font-semibold tracking-tight">Your rights</h2>
          <p>
            You can export every table you can see as CSV at any time. You can
            request deletion and we will scrub your data within 30 days, except
            where retention is required by Australian tax law.
          </p>

          <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
          <p>
            Questions: <a className="text-accent underline underline-offset-4" href="mailto:morty@supersolt.app">morty@supersolt.app</a>.
            We respond same day.
          </p>
        </div>

        <Link
          href="/"
          className="mt-12 inline-block text-[14px] text-warm-gray hover:text-base-dark"
        >
          ← Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
