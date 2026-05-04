import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AccentWord, withAccent } from "@/components/ui/accent-word";
import { HERO } from "@/content/landing";
import { HeroMockup } from "./hero-mockup";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28">
      <div
        className="hero-gradient absolute inset-0 -z-10"
        aria-hidden="true"
      />
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-base-light/80 px-3 py-1 text-[12px] text-warm-gray backdrop-blur">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            {HERO.eyebrow}
          </div>

          <h1 className="text-balance font-sans text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[1.02] tracking-tighter text-base-dark">
            {withAccent(HERO.headline, HERO.accentWord, {
              underline: true,
              variant: "short",
            })}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-[17px] leading-relaxed text-warm-gray md:text-lg">
            {HERO.subline}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="lg" variant="primary">
              <Link href={HERO.primaryCta.href}>
                {HERO.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href={HERO.secondaryCta.href}>
                {HERO.secondaryCta.label}
              </Link>
            </Button>
          </div>

          <p className="mt-5 text-[13px] text-warm-gray">{HERO.trialNote}</p>
        </div>

        <div className="mt-16 md:mt-20">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
