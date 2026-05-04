"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/content/landing";
import { cn } from "@/lib/utils";

interface DemoCTAProps {
  size?: "md" | "lg";
  className?: string;
}

/**
 * Placeholder demo booking CTA.
 *
 * STATUS: Resend integration deliberately skipped per Morty's instruction
 * (Gate 2 in supersolt-marketing-site-plan.md). When the user clicks,
 * an inline message appears with a `mailto:` link to Morty's inbox.
 *
 * To wire up real bookings later:
 *  - Drop in Cal.com embed (set NEXT_PUBLIC_CAL_LINK), OR
 *  - Re-add Resend server action at /api/demo (see plan §3A).
 */
export function DemoCTA({ size = "md", className }: DemoCTAProps) {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={cn(
          "inline-flex flex-col gap-3 rounded-2xl border border-accent/40 bg-base-light text-base-dark p-5 shadow-card max-w-md text-left",
          className,
        )}
      >
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Demo bookings opening soon
        </div>
        <p className="text-[15px] leading-relaxed">
          We&rsquo;re finalising the booking flow this week. In the meantime,
          email Morty directly — he replies the same day.
        </p>
        <Button
          asChild
          variant="primary"
          size={size}
          data-analytics="demo-cta-mailto"
        >
          <a href={`mailto:${SITE.contactEmail}?subject=SuperSolt%20demo%20request`}>
            <Mail className="h-4 w-4" />
            Email {SITE.contactEmail}
          </a>
        </Button>
      </div>
    );
  }

  return (
    <Button
      type="button"
      variant="primary"
      size={size}
      onClick={() => setOpen(true)}
      className={className}
      data-analytics="demo-cta-open"
    >
      Book a 15-min demo
      <ArrowRight className="h-4 w-4" />
    </Button>
  );
}
