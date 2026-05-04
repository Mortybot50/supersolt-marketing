"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV, HERO, SITE } from "@/content/landing";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-[var(--color-rule-line)] bg-[var(--color-bg-canvas)]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-18">
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
          aria-label={`${SITE.name} home`}
        >
          <Logo />
          <span className="font-[var(--font-display)] text-[18px] tracking-[var(--tracking-display)] lowercase text-[var(--color-ink-primary)]">
            {SITE.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[14px] text-[var(--color-ink-secondary)] transition-colors hover:text-[var(--color-ink-primary)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href={NAV.signIn.href}
            className="text-[14px] text-[var(--color-ink-secondary)] transition-colors hover:text-[var(--color-ink-primary)]"
          >
            {NAV.signIn.label}
          </Link>
          <Button asChild size="sm" variant="coral">
            <Link href={HERO.primaryCta.href}>{NAV.cta.label}</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-ink-primary)] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="container-page border-t border-[var(--color-rule-line)] bg-[var(--color-bg-canvas)] py-6">
            <ul className="flex flex-col gap-1">
              {NAV.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[16px] text-[var(--color-ink-primary)] hover:text-[var(--color-accent-coral)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-[var(--color-rule-line)] pt-4">
                <Link
                  href={NAV.signIn.href}
                  className="block py-2 text-[15px] text-[var(--color-ink-secondary)]"
                >
                  {NAV.signIn.label}
                </Link>
              </li>
              <li className="mt-3">
                <Button asChild size="md" variant="coral" className="w-full">
                  <Link
                    href={HERO.primaryCta.href}
                    onClick={() => setOpen(false)}
                  >
                    {NAV.cta.label}
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
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
