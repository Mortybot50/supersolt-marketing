import { Check } from "lucide-react";
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
}

export function FeatureBlock({
  kicker,
  headline,
  accentWord,
  body,
  bullets,
  alignment,
  mockup,
}: FeatureBlockProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal
        className={cn(
          "order-2",
          alignment === "right" ? "lg:order-2" : "lg:order-1",
        )}
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {kicker}
        </div>
        <h3 className="mt-3 text-balance text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.1] tracking-tighter text-base-dark">
          {withAccent(headline, accentWord)}
        </h3>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-warm-gray md:text-[17px]">
          {body}
        </p>
        <ul className="mt-7 space-y-3">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 text-[15px] leading-relaxed text-base-dark"
            >
              <span
                className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-soft text-accent"
                aria-hidden="true"
              >
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal
        className={cn(
          "order-1",
          alignment === "right" ? "lg:order-1" : "lg:order-2",
        )}
        delay={120}
      >
        <FeatureMockup variant={mockup} />
      </Reveal>
    </div>
  );
}
