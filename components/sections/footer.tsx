import Link from "next/link";
import { FOOTER, SITE } from "@/content/landing";

export function Footer() {
  return (
    <footer className="border-t border-line bg-base-light">
      <div className="container-page py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-semibold tracking-tight"
              aria-label={`${SITE.name} home`}
            >
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-base-dark text-white"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12 L10 17 L19 7" />
                </svg>
              </span>
              <span className="text-[17px]">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-warm-gray">
              {FOOTER.tagline}
            </p>
          </div>

          {FOOTER.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-warm-gray">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-base-dark transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-[12px] text-warm-gray md:flex-row md:items-center md:justify-between">
          <p>{FOOTER.bottomLine}</p>
          <p className="text-warm-gray-soft">
            Australian Privacy Principles compliant. Your data, your rules.
          </p>
        </div>
      </div>
    </footer>
  );
}
