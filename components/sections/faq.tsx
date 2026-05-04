import { Section, Eyebrow, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { withAccent } from "@/components/ui/accent-word";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQ } from "@/content/landing";

export function Faq() {
  return (
    <Section id="faq" variant="canvas">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] lg:gap-20">
        <Reveal>
          <Eyebrow>{FAQ.eyebrow}</Eyebrow>
          <SectionHeading>
            {withAccent(FAQ.headline, FAQ.accentWord, {
              underline: true,
              variant: "short",
            })}
          </SectionHeading>
          <p className="mt-8 max-w-[42ch] text-[16px] leading-relaxed text-[var(--color-ink-secondary)]">
            Can&rsquo;t find your answer? Email{" "}
            <a
              href="mailto:morty@supersolt.app"
              className="text-[var(--color-ink-primary)] underline underline-offset-4 hover:text-[var(--color-accent-coral)]"
            >
              morty@supersolt.app
            </a>{" "}
            — Morty replies same day.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="border-t border-[var(--color-rule-line)]"
          >
            {FAQ.items.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
