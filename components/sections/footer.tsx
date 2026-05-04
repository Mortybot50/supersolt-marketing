import Link from "next/link";
import { Cord } from "@/components/ui/cord";
import { FOOTER, SITE } from "@/content/landing";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-rule-line)] bg-[var(--color-bg-canvas)]">
      <div className="container-page py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-medium tracking-tight"
              aria-label={`${SITE.name} home`}
            >
              <Logo />
              <span className="font-[var(--font-display)] text-[18px] tracking-[var(--tracking-display)] lowercase text-[var(--color-ink-primary)]">
                {SITE.name}
              </span>
            </Link>
            <p className="mt-5 max-w-[40ch] text-[14px] leading-relaxed text-[var(--color-ink-secondary)]">
              {FOOTER.tagline}
            </p>
          </div>

          {FOOTER.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-[12px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-secondary)]">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-[var(--color-ink-primary)] transition-colors hover:text-[var(--color-accent-coral)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 opacity-50">
          <Cord variant="rule" className="h-2" />
        </div>

        <div className="mt-6 flex flex-col gap-3 pt-2 text-[12px] text-[var(--color-ink-secondary)] md:flex-row md:items-center md:justify-between">
          <p>{FOOTER.bottomLine}</p>
          <p className="font-mono uppercase [letter-spacing:var(--tracking-eyebrow)]">
            Australian Privacy Principles compliant
          </p>
        </div>
      </div>
    </footer>
  );
}

function Logo() {
  return (
    <span
      className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[var(--color-panel-dark)] text-[var(--color-ink-inverse)]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12 L10 17 L19 7" />
      </svg>
    </span>
  );
}
