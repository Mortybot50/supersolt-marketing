import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { withAccent } from "@/components/ui/accent-word";
import { Cord } from "@/components/ui/cord";
import { FINAL_CTA, HERO } from "@/content/landing";

export function FinalCta() {
  return (
    <Section id="demo" variant="dark">
      <Reveal className="relative mx-auto max-w-[44ch]">
        <h2 className="font-[var(--font-display)] font-medium text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[var(--tracking-display)] lowercase text-[var(--color-ink-inverse)]">
          {withAccent(FINAL_CTA.headline, FINAL_CTA.accentWord, {
            underline: true,
            variant: "long",
            tone: "inverse",
          })}
        </h2>
        <p className="mt-8 text-[16px] md:text-[17px] leading-relaxed text-[var(--color-ink-inverse)]/75">
          {FINAL_CTA.subline}
        </p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Button asChild size="lg" variant="coral">
            <Link href={HERO.primaryCta.href}>
              {FINAL_CTA.primaryCta.label}
            </Link>
          </Button>
          <Link
            href="#features"
            className="font-sans text-[15px] text-[var(--color-ink-inverse)] underline-offset-4 hover:underline"
          >
            See features →
          </Link>
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-inverse)]/65">
          {FINAL_CTA.trialNote}
        </p>
        <div className="mt-12 opacity-30 max-w-md">
          <Cord variant="rule" className="h-2" />
        </div>
      </Reveal>
    </Section>
  );
}
