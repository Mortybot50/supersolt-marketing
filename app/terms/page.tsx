import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Terms — SuperSolt",
  description:
    "SuperSolt terms of service — month-to-month, no lock-in, your data stays yours.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="container-page pt-32 pb-20 max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-warm-gray">
          Legal
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tighter">
          Terms of service
        </h1>
        <p className="mt-4 text-warm-gray">Last updated: 4 May 2026</p>

        <div className="prose prose-zinc mt-10 space-y-6 text-[15px] leading-relaxed text-base-dark">
          <p>
            The short version: month-to-month, cancel anytime, no setup fees, no
            lock-in. Your data is yours and exportable. We&rsquo;ll act in good
            faith and we expect you to do the same.
          </p>

          <h2 className="text-xl font-semibold tracking-tight">1. The service</h2>
          <p>
            SuperSolt is a hospitality operations platform. We make best efforts
            to keep it available 24/7. Unplanned downtime is rare; planned
            maintenance happens overnight AEST and is announced in-app.
          </p>

          <h2 className="text-xl font-semibold tracking-tight">2. Billing</h2>
          <p>
            Per-venue, per-month, billed in arrears. Tier shifts based on active
            venue count, automatically. 14-day free trial, no card required.
            Cancel anytime — you&rsquo;ll be charged for the days used and
            nothing else.
          </p>

          <h2 className="text-xl font-semibold tracking-tight">3. Acceptable use</h2>
          <p>
            Don&rsquo;t use SuperSolt to break the law, infringe rights, or
            interfere with the service. Don&rsquo;t resell access without
            written permission.
          </p>

          <h2 className="text-xl font-semibold tracking-tight">4. Liability</h2>
          <p>
            We rely on data from your POS and your bookkeeping tools. If those
            sources are wrong, our reports will be wrong. SuperSolt is provided
            on an &ldquo;as-is&rdquo; basis to the maximum extent permitted by
            Australian Consumer Law.
          </p>

          <h2 className="text-xl font-semibold tracking-tight">5. Termination</h2>
          <p>
            Either party can terminate with 30 days&rsquo; notice. We&rsquo;ll
            export your data on request and delete it within 30 days of
            termination, subject to legal retention obligations.
          </p>

          <h2 className="text-xl font-semibold tracking-tight">6. Governing law</h2>
          <p>
            These terms are governed by the laws of Victoria, Australia.
            Disputes are subject to the exclusive jurisdiction of the courts of
            Victoria.
          </p>

          <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
          <p>
            Questions: <a className="text-accent underline underline-offset-4" href="mailto:morty@supersolt.app">morty@supersolt.app</a>.
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
