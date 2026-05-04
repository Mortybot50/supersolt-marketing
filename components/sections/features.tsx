import { Section, Eyebrow, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { FeatureBlock } from "./feature-block";
import { FEATURES } from "@/content/landing";

export function Features() {
  return (
    <Section id="features">
      <Reveal>
        <Eyebrow>{FEATURES.eyebrow}</Eyebrow>
        <SectionHeading>The three things you'll use every day.</SectionHeading>
      </Reveal>

      <div className="mt-16 space-y-24 md:space-y-32">
        {FEATURES.blocks.map((block) => (
          <FeatureBlock
            key={block.headline}
            kicker={block.kicker}
            headline={block.headline}
            accentWord={block.accentWord}
            body={block.body}
            bullets={block.bullets}
            alignment={block.alignment}
            mockup={block.mockup}
          />
        ))}
      </div>
    </Section>
  );
}
