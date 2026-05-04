import { Cord } from "@/components/ui/cord";
import { SUB_HERO } from "@/content/landing";

/**
 * Quiet trust-mark row sitting under the hero. Replaces v1's loud logo wall.
 * One hairline rule top + bottom, one mono line, six dimmed name marks.
 */
export function SubHeroStrip() {
  return (
    <section className="border-y border-[var(--color-rule-line)] bg-[var(--color-bg-canvas-deep)]/40">
      <div className="container-page py-10 md:py-14">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <p className="font-mono text-[12px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-secondary)] max-w-[60ch] text-center md:text-left">
            {SUB_HERO.line}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:flex-nowrap md:justify-end">
            {SUB_HERO.logos.map((logo, i) => (
              <li key={`${logo.name}-${i}`}>
                {logo.featured ? (
                  <span className="font-[var(--font-display)] text-[15px] tracking-tight text-[var(--color-ink-primary)]/80">
                    Piccolo Panini
                  </span>
                ) : (
                  <span className="font-mono text-[10px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-secondary)]/55">
                    your logo here
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 opacity-50">
          <Cord variant="rule" className="h-2" />
        </div>
      </div>
    </section>
  );
}
