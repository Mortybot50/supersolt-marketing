import { Section, Eyebrow, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { withAccent } from "@/components/ui/accent-word";
import { PricingRow } from "@/components/ui/pricing-row";
import { PRICING } from "@/content/landing";

export function Pricing() {
  return (
    <Section id="pricing" variant="canvas">
      <Reveal>
        <Eyebrow>{PRICING.eyebrow}</Eyebrow>
        <SectionHeading>
          {withAccent(PRICING.headline, PRICING.accentWord, {
            underline: true,
            variant: "long",
          })}
        </SectionHeading>
        <p className="mt-8 max-w-[60ch] text-[16px] leading-relaxed text-[var(--color-ink-secondary)] md:text-[17px]">
          {PRICING.subline}
        </p>
      </Reveal>

      <div className="mt-16 divide-y divide-[var(--color-rule-line)]">
        {PRICING.tiers.map((tier) => (
          <PricingRow key={tier.name} tier={tier} />
        ))}
      </div>

      <p className="mt-12 font-mono text-[12px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-secondary)]">
        {PRICING.note}
      </p>
    </Section>
  );
}
