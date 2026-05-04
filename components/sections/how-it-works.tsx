import { Section, Eyebrow, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { withAccent } from "@/components/ui/accent-word";
import { HOW_IT_WORKS } from "@/content/landing";

export function HowItWorks() {
  return (
    <Section id="how-it-works" variant="dark">
      <Reveal>
        <Eyebrow variant="dark">{HOW_IT_WORKS.eyebrow}</Eyebrow>
        <SectionHeading className="text-[var(--color-ink-inverse)]">
          {withAccent(HOW_IT_WORKS.headline, HOW_IT_WORKS.accentWord, {
            underline: true,
            variant: "short",
            tone: "inverse",
          })}
        </SectionHeading>
      </Reveal>

      <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
        {HOW_IT_WORKS.steps.map((step, i) => (
          <Reveal as="li" delay={i * 100} key={step.n}>
            <div className="font-mono text-[12px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-accent-amber)]">
              {step.n}
            </div>
            <h3 className="mt-4 font-[var(--font-display)] text-[clamp(1.4rem,2.4vw,1.875rem)] font-medium leading-tight tracking-[var(--tracking-display)] lowercase text-[var(--color-ink-inverse)]">
              {step.title}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-inverse)]/75">
              {step.body}
            </p>
            <div
              className="mt-8 h-px w-full bg-[var(--color-rule-line-dark)]"
              aria-hidden="true"
            />
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
