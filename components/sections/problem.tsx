import { Section, Eyebrow, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { withAccent } from "@/components/ui/accent-word";
import { PROBLEM } from "@/content/landing";

export function Problem() {
  return (
    <Section variant="canvas-deep">
      <Reveal>
        <Eyebrow>{PROBLEM.eyebrow}</Eyebrow>
        <SectionHeading>
          {withAccent(PROBLEM.headline, PROBLEM.accentWord, {
            underline: true,
            variant: "long",
          })}
        </SectionHeading>
        <p className="mt-8 max-w-[60ch] text-[16px] leading-relaxed text-[var(--color-ink-secondary)] md:text-[17px]">
          {PROBLEM.body}
        </p>
      </Reveal>

      <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-12">
        {PROBLEM.bullets.map((b, i) => (
          <Reveal as="li" delay={i * 80} key={b.title}>
            <div className="font-mono text-[12px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-accent-coral)]">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-4 font-[var(--font-display)] text-[clamp(1.4rem,2.2vw,1.75rem)] font-medium leading-tight tracking-[var(--tracking-display)] lowercase text-[var(--color-ink-primary)]">
              {b.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink-secondary)]">
              {b.body}
            </p>
            <div className="mt-6 hairline" aria-hidden="true" />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
