import { Section, Eyebrow, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { withAccent } from "@/components/ui/accent-word";
import { SOLUTION } from "@/content/landing";

export function Solution() {
  return (
    <Section>
      <Reveal>
        <Eyebrow>{SOLUTION.eyebrow}</Eyebrow>
        <SectionHeading>What SuperSolt does, in four lines.</SectionHeading>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        {SOLUTION.blocks.map((b, i) => (
          <Reveal as="div" delay={i * 60} key={b.headline}>
            <div className="bg-base-light p-7 md:p-9 h-full">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-warm-gray">
                {String(i + 1).padStart(2, "0")} / 04
              </div>
              <h3 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-base-dark md:text-[28px] md:leading-tight">
                {withAccent(b.headline, b.accentWord)}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-warm-gray md:text-base">
                {b.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
