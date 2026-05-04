import { Reveal } from "@/components/ui/reveal";
import { withAccent } from "@/components/ui/accent-word";
import { cn } from "@/lib/utils";
import { FeatureMockup } from "./feature-mockup";

interface FeatureBlockProps {
  kicker: string;
  headline: string;
  accentWord: string;
  body: string;
  bullets: readonly string[];
  alignment: "left" | "right";
  mockup: "operations" | "labour" | "stock";
  index: number;
}

/**
 * Magazine spread: full-width row, image one side, copy the other,
 * alternating which side based on `alignment`. No bordered cards.
 */
export function FeatureBlock({
  kicker,
  headline,
  accentWord,
  body,
  bullets,
  alignment,
  mockup,
  index,
}: FeatureBlockProps) {
  return (
    <div
      data-feature-block={kicker.toLowerCase()}
      className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
    >
      <Reveal
        className={cn(
          "order-2 lg:col-span-5",
          alignment === "right" ? "lg:order-2" : "lg:order-1",
        )}
      >
        <div className="font-mono text-[12px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-accent-coral)]">
          <span className="mr-3 text-[var(--color-ink-secondary)]">
            {String(index + 1).padStart(2, "0")} —
          </span>
          {kicker}
        </div>
        <h3 className="mt-5 font-[var(--font-display)] text-[clamp(1.875rem,3.5vw,3rem)] font-medium leading-[1.05] tracking-[var(--tracking-display)] lowercase text-[var(--color-ink-primary)]">
          {withAccent(headline, accentWord, { underline: true, variant: "short" })}
        </h3>
        <p className="mt-6 max-w-[58ch] text-[16px] leading-relaxed text-[var(--color-ink-secondary)] md:text-[17px]">
          {body}
        </p>
        <ul className="mt-8 space-y-4">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-4 text-[15px] leading-relaxed text-[var(--color-ink-primary)]"
            >
              <span
                className="mt-2 inline-block h-px w-5 shrink-0 bg-[var(--color-accent-coral)]"
                aria-hidden="true"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal
        className={cn(
          "order-1 lg:col-span-7",
          alignment === "right" ? "lg:order-1" : "lg:order-2",
        )}
        delay={120}
      >
        <FeatureMockup variant={mockup} />
      </Reveal>
    </div>
  );
}
