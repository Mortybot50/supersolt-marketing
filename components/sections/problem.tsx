import { Section, Eyebrow, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { withAccent } from "@/components/ui/accent-word";
import { PROBLEM } from "@/content/landing";

export function Problem() {
  return (
    <Section variant="accent-soft">
      <Reveal>
        <Eyebrow>{PROBLEM.eyebrow}</Eyebrow>
        <SectionHeading>
          {withAccent(PROBLEM.headline, PROBLEM.accentWord, {
            underline: true,
            variant: "long",
          })}
        </SectionHeading>
        <p className="mt-6 max-w-2xl text-balance text-[17px] leading-relaxed text-warm-gray md:text-lg">
          {PROBLEM.body}
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
        {PROBLEM.bullets.map((b, i) => (
          <Reveal
            as="li"
            delay={i * 80}
            key={b.title}
            className="rounded-2xl border border-line bg-base-light p-7 h-full transition-shadow hover:shadow-card"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-base-dark">
              {b.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-warm-gray">
              {b.body}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
