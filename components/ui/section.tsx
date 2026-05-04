import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "canvas" | "canvas-deep" | "dark";
  containerClassName?: string;
}

/**
 * Standard page section: vertical rhythm + container.
 * Variants: canvas (warm bone), canvas-deep (slightly darker bone), dark (warm charcoal).
 */
export function Section({
  id,
  className,
  children,
  variant = "canvas",
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-pad",
        variant === "canvas" && "bg-[var(--color-bg-canvas)] text-[var(--color-ink-primary)]",
        variant === "canvas-deep" &&
          "bg-[var(--color-bg-canvas-deep)] text-[var(--color-ink-primary)]",
        variant === "dark" && "bg-[var(--color-panel-dark)] text-[var(--color-ink-inverse)]",
        className,
      )}
    >
      <div className={cn("container-page", containerClassName)}>{children}</div>
    </section>
  );
}

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export function Eyebrow({
  children,
  className,
  variant = "light",
}: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[12px] uppercase",
        "[letter-spacing:var(--tracking-eyebrow)]",
        variant === "light"
          ? "text-[var(--color-ink-secondary)]"
          : "text-[var(--color-ink-inverse)]/70",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-6",
          variant === "light"
            ? "bg-[var(--color-rule-line)]"
            : "bg-[var(--color-rule-line-dark)]",
        )}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3";
}

export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <Tag className={cn("h-display mt-6 max-w-[22ch]", className)}>
      {children}
    </Tag>
  );
}
