import { Section, Eyebrow, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { withAccent } from "@/components/ui/accent-word";
import { HOW_IT_WORKS } from "@/content/landing";

export function HowItWorks() {
  return (
    <Section id="how-it-works" variant="dark">
      <Reveal>
        <Eyebrow variant="dark">{HOW_IT_WORKS.eyebrow}</Eyebrow>
        <SectionHeading className="text-base-light">
          {withAccent(HOW_IT_WORKS.headline, HOW_IT_WORKS.accentWord, {
            underline: true,
            variant: "short",
          })}
        </SectionHeading>
      </Reveal>

      <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
        {HOW_IT_WORKS.steps.map((step, i) => (
          <Reveal
            as="li"
            delay={i * 100}
            key={step.n}
            className="relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8"
          >
            <div className="font-mono text-[42px] font-light leading-none text-accent tracking-tight">
              {step.n}
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-base-light">
              {step.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-warm-gray-soft">
              {step.body}
            </p>
            {i < HOW_IT_WORKS.steps.length - 1 && (
              <div
                className="hidden absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 md:block"
                aria-hidden="true"
              >
                <div className="h-px w-6 bg-white/15" />
              </div>
            )}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
