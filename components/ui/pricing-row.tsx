import Link from "next/link";
import { Cord } from "./cord";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface PricingRowProps {
  tier: {
    name: string;
    label: string;
    price: number;
    unit: string;
    features: readonly string[];
    cta: { label: string; href: string };
    featured: boolean;
    badge?: string;
  };
}

/**
 * Magazine-table pricing row. No bordered cards.
 * Featured tier gets a warm-amber background band + cord-fragment marker.
 */
export function PricingRow({ tier }: PricingRowProps) {
  return (
    <div
      data-pricing-tier={tier.name}
      data-featured={tier.featured ? "true" : "false"}
      className={cn(
        "grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10 py-12 md:py-16",
        tier.featured && "relative -mx-6 px-6 md:-mx-10 md:px-10",
      )}
      style={
        tier.featured
          ? {
              backgroundColor: "rgba(232, 160, 74, 0.14)",
            }
          : undefined
      }
    >
      {tier.featured && (
        <div
          aria-hidden="true"
          className="absolute -top-3 left-6 md:left-10 w-20 opacity-90"
        >
          <Cord variant="fragment" />
        </div>
      )}

      {/* Name + label */}
      <div className="md:col-span-3">
        <p className="font-mono text-[12px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-secondary)]">
          {tier.label}
        </p>
        <h3 className="mt-3 font-[var(--font-display)] font-medium tracking-[var(--tracking-display)] text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] lowercase">
          {tier.name}
        </h3>
        {tier.badge && (
          <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-coral)] px-3 py-1 font-mono text-[10px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white/80" aria-hidden="true" />
            {tier.badge}
          </span>
        )}
      </div>

      {/* Features */}
      <ul className="md:col-span-6 grid grid-cols-1 gap-3 self-center">
        {tier.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 text-[15px] leading-relaxed text-[var(--color-ink-primary)]"
          >
            <span
              aria-hidden="true"
              className="mt-2 inline-block h-px w-4 shrink-0 bg-[var(--color-accent-coral)]"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Price + CTA */}
      <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between gap-4">
        <div className="text-left md:text-right">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-base text-[var(--color-ink-secondary)]">$</span>
            <span className="font-[var(--font-display)] font-medium tracking-[var(--tracking-display)] text-[clamp(2.5rem,4.5vw,4rem)] leading-none text-[var(--color-ink-primary)]">
              {tier.price}
            </span>
          </div>
          <p className="mt-2 font-mono text-[12px] text-[var(--color-ink-secondary)]">
            {tier.unit}
          </p>
        </div>
        <Button
          asChild
          size="md"
          variant={tier.featured ? "coral" : "outline"}
          className="w-full md:w-auto"
        >
          <Link href={tier.cta.href}>{tier.cta.label}</Link>
        </Button>
      </div>
    </div>
  );
}
