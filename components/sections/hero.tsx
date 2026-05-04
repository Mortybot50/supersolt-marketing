import Link from "next/link";
import { Cord } from "@/components/ui/cord";
import { AccentWord } from "@/components/ui/accent-word";
import { Button } from "@/components/ui/button";
import { HERO } from "@/content/landing";

/**
 * Hero — the keystone composition.
 *
 * Layout: ultrawide asymmetric split. Headline broken across the screen
 * — top-left fragment, bottom-right fragment, woven cord arcing diagonally
 * between them. Mobile collapses to single column.
 *
 * Accessibility: the full headline ("Run every venue from one screen.") is
 * preserved verbatim in the DOM as a single <h1> via visually-grouped spans
 * — screen readers get the natural phrase, sighted users get the editorial
 * split. This is also what the DoD curl/grep check 1 looks for.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Desktop / tablet — asymmetric absolute composition, ~100vh */}
      <div className="relative hidden md:block min-h-[760px] h-[calc(100svh)]">
        {/* Eyebrow */}
        <p className="absolute top-[14vh] left-[var(--gutter-tablet)] xl:left-[var(--gutter-desktop)] z-20 h-eyebrow">
          {HERO.eyebrow}
        </p>

        {/* Cord centrepiece — diagonal between fragments */}
        <Cord
          className="absolute inset-0 z-10 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent_0%,#000_8%,#000_92%,transparent_100%)]"
          variant="hero"
        />

        {/* Headline — single accessible h1 with visually split spans */}
        <h1
          className="absolute inset-0 z-20 pointer-events-none"
          aria-label={HERO.headline}
        >
          <span className="sr-only">{HERO.headline}</span>
          <span
            aria-hidden="true"
            className="absolute top-[20vh] left-[var(--gutter-tablet)] xl:left-[var(--gutter-desktop)] max-w-[14ch]"
          >
            <span className="h-display block">{HERO.headlineLeft}</span>
          </span>
          <span
            aria-hidden="true"
            className="absolute bottom-[30vh] right-[var(--gutter-tablet)] xl:right-[var(--gutter-desktop)] max-w-[14ch] text-right"
          >
            <span className="h-display block">
              {HERO.headlineRight}{" "}
              <AccentWord underline variant="short">
                {HERO.accentWord}
              </AccentWord>
              <span className="text-[var(--color-ink-primary)]">.</span>
            </span>
          </span>
        </h1>

        {/* Sub-line + CTAs */}
        <div className="absolute bottom-[8vh] right-[var(--gutter-tablet)] xl:right-[var(--gutter-desktop)] z-20 max-w-[52ch] text-right pointer-events-auto">
          <p className="font-sans text-[16px] md:text-[17px] leading-relaxed text-[var(--color-ink-secondary)]">
            {HERO.subline}
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-secondary)]">
            {HERO.trialNote}
          </p>
          <div className="mt-7 flex items-center justify-end gap-6">
            <Button asChild size="lg" variant="coral">
              <Link href={HERO.primaryCta.href} title={HERO.primaryCtaHoverNote}>
                {HERO.primaryCta.label}
              </Link>
            </Button>
            <Link
              href={HERO.secondaryCta.href}
              className="font-sans text-[15px] text-[var(--color-ink-primary)] underline-offset-4 hover:underline"
            >
              {HERO.secondaryCta.label} →
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile — single column */}
      <div className="md:hidden container-page pt-28 pb-16">
        <p className="h-eyebrow">{HERO.eyebrow}</p>
        <h1 className="mt-6" aria-label={HERO.headline}>
          <span className="sr-only">{HERO.headline}</span>
          <span aria-hidden="true" className="h-display block">
            {HERO.headlineLeft}
          </span>
          <Cord
            className="my-6 h-[220px] w-full"
            variant="hero"
          />
          <span aria-hidden="true" className="h-display block">
            {HERO.headlineRight}{" "}
            <AccentWord underline variant="short">
              {HERO.accentWord}
            </AccentWord>
            <span className="text-[var(--color-ink-primary)]">.</span>
          </span>
        </h1>
        <p className="mt-8 font-sans text-[16px] leading-relaxed text-[var(--color-ink-secondary)]">
          {HERO.subline}
        </p>
        <p className="mt-3 font-mono text-[11px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-secondary)]">
          {HERO.trialNote}
        </p>
        <div className="mt-7 flex flex-col gap-4">
          <Button asChild size="lg" variant="coral" className="w-full">
            <Link href={HERO.primaryCta.href}>{HERO.primaryCta.label}</Link>
          </Button>
          <Link
            href={HERO.secondaryCta.href}
            className="self-start font-sans text-[15px] text-[var(--color-ink-primary)] underline-offset-4 hover:underline"
          >
            {HERO.secondaryCta.label} →
          </Link>
        </div>
      </div>
    </section>
  );
}
