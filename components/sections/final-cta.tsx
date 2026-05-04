import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { withAccent } from "@/components/ui/accent-word";
import { FINAL_CTA } from "@/content/landing";
import { DemoCTA } from "@/components/demo-cta";

export function FinalCta() {
  return (
    <Section id="demo" variant="dark">
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <div
          className="absolute -inset-x-20 -top-20 -z-10 h-72 rounded-full bg-accent/15 blur-3xl"
          aria-hidden="true"
        />
        <h2 className="text-balance text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tighter text-base-light">
          {withAccent(FINAL_CTA.headline, FINAL_CTA.accentWord, {
            underline: true,
            variant: "long",
          })}
        </h2>
        <p className="mt-6 text-[17px] leading-relaxed text-warm-gray-soft md:text-lg">
          {FINAL_CTA.subline}
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <DemoCTA size="lg" />
          <Button asChild size="lg" variant="ghost" className="text-base-light hover:bg-white/5">
            <a href="#features">
              See features
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <p className="mt-5 text-[13px] text-warm-gray-soft">
          {FINAL_CTA.trialNote}
        </p>
      </Reveal>
    </Section>
  );
}
