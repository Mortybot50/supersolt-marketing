import { cn } from "@/lib/utils";

interface UnderlineProps {
  className?: string;
  variant?: "short" | "long";
}

/**
 * Hand-drawn underline accent. Single SVG path, slightly imperfect.
 * Use sparingly (3-4x per page max) — keeps it ownable.
 */
export function Underline({ className, variant = "short" }: UnderlineProps) {
  const path =
    variant === "long"
      ? "M3 9 C 60 4, 140 12, 220 7 C 300 3, 380 11, 460 6"
      : "M3 8 C 30 4, 70 11, 110 6 C 150 3, 195 10, 230 7";
  const viewBox = variant === "long" ? "0 0 470 14" : "0 0 235 14";
  const dash = variant === "long" ? 480 : 240;

  return (
    <svg
      className={cn("underline-svg pointer-events-none", className)}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ ["--dash" as string]: dash }}
    >
      <path d={path} />
    </svg>
  );
}
