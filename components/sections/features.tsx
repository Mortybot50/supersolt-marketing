import { Section, Eyebrow, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { FeatureBlock } from "./feature-block";
import { FEATURES } from "@/content/landing";

export function Features() {
  return (
    <Section id="features" variant="canvas">
      <Reveal>
        <Eyebrow>{FEATURES.eyebrow}</Eyebrow>
        <SectionHeading>{FEATURES.headline}</SectionHeading>
      </Reveal>

      <div className="mt-20 space-y-32 md:space-y-40">
        {FEATURES.blocks.map((block, i) => (
          <FeatureBlock
            key={block.headline}
            kicker={block.kicker}
            headline={block.headline}
            accentWord={block.accentWord}
            body={block.body}
            bullets={block.bullets}
            alignment={block.alignment}
            mockup={block.mockup}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
}
