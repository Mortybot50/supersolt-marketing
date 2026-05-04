import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "light" | "dark" | "accent-soft";
  containerClassName?: string;
}

/**
 * Standard page section: vertical rhythm + container.
 * Variants control colour scheme.
 */
export function Section({
  id,
  className,
  children,
  variant = "light",
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28 lg:py-32",
        variant === "light" && "bg-base-light text-base-dark",
        variant === "dark" && "bg-base-dark text-base-light",
        variant === "accent-soft" &&
          "bg-[#f5f3ed] text-base-dark border-y border-line",
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
        "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]",
        variant === "light" ? "text-warm-gray" : "text-warm-gray-soft",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-6",
          variant === "light" ? "bg-warm-gray/60" : "bg-warm-gray-soft/40",
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
    <Tag
      className={cn(
        "mt-4 max-w-3xl text-balance font-sans text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tighter",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
