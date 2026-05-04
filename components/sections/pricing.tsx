import Link from "next/link";
import { Check } from "lucide-react";
import { Section, Eyebrow, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PRICING } from "@/content/landing";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <Section id="pricing" variant="accent-soft">
      <Reveal className="text-center mx-auto max-w-2xl">
        <div className="flex justify-center">
          <Eyebrow>{PRICING.eyebrow}</Eyebrow>
        </div>
        <SectionHeading className="mx-auto">{PRICING.headline}</SectionHeading>
        <p className="mx-auto mt-5 max-w-xl text-balance text-[16px] text-warm-gray md:text-[17px]">
          {PRICING.subline}
        </p>
      </Reveal>

      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
        {PRICING.tiers.map((tier, i) => (
          <Reveal as="div" delay={i * 80} key={tier.name}>
            <div
              className={cn(
                "relative h-full rounded-2xl border p-7 md:p-8 transition-all flex flex-col",
                tier.featured
                  ? "border-accent bg-base-dark text-base-light shadow-card-hover scale-[1.01]"
                  : "border-line bg-base-light hover:shadow-card",
              )}
            >
              {tier.featured && tier.badge && (
                <div className="absolute -top-3 left-7">
                  <span className="rounded-full bg-accent px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div>
                <div
                  className={cn(
                    "font-mono text-[11px] uppercase tracking-[0.18em]",
                    tier.featured ? "text-accent" : "text-warm-gray",
                  )}
                >
                  {tier.label}
                </div>
                <h3
                  className={cn(
                    "mt-2 text-2xl font-semibold tracking-tight",
                    tier.featured ? "text-base-light" : "text-base-dark",
                  )}
                >
                  {tier.name}
                </h3>
                <div className="mt-5 flex items-baseline gap-1.5">
                  <span
                    className={cn(
                      "text-5xl font-semibold tracking-tighter",
                      tier.featured ? "text-base-light" : "text-base-dark",
                    )}
                  >
                    ${tier.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      tier.featured ? "text-warm-gray-soft" : "text-warm-gray",
                    )}
                  >
                    {tier.unit}
                  </span>
                </div>
              </div>

              <ul className="mt-7 space-y-3">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={cn(
                      "flex items-start gap-3 text-[14px] leading-relaxed",
                      tier.featured
                        ? "text-base-light"
                        : "text-base-dark",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full",
                        tier.featured
                          ? "bg-accent text-white"
                          : "bg-accent-soft text-accent",
                      )}
                      aria-hidden="true"
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 mt-auto">
                <Button
                  asChild
                  variant={tier.featured ? "primary" : "outline"}
                  size="md"
                  className="w-full"
                >
                  <Link href={tier.cta.href}>{tier.cta.label}</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-center text-[13px] text-warm-gray">
        {PRICING.note}
      </p>
    </Section>
  );
}
