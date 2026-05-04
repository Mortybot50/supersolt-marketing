import { Section, Eyebrow, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQ } from "@/content/landing";

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] lg:gap-20">
        <Reveal>
          <Eyebrow>{FAQ.eyebrow}</Eyebrow>
          <SectionHeading className="text-balance">
            {FAQ.headline}
          </SectionHeading>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-warm-gray">
            Can't find your answer? Email{" "}
            <a
              href="mailto:morty@supersolt.app"
              className="text-base-dark underline underline-offset-4 hover:text-accent"
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
            className="border-t border-line"
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
