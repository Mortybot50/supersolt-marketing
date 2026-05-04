import { cn } from "@/lib/utils";
import { Underline } from "./underline";

interface AccentWordProps {
  children: React.ReactNode;
  underline?: boolean;
  variant?: "short" | "long";
  className?: string;
  tone?: "coral" | "inverse";
}

/**
 * Single-word coral accent — visual signature.
 * Wraps a word/phrase in coral, optionally with a hand-drawn underline.
 * Reusable across canvas (coral) and dark/coral panels (inverse / underline white).
 */
export function AccentWord({
  children,
  underline = true,
  variant = "short",
  className,
  tone = "coral",
}: AccentWordProps) {
  return (
    <span
      data-accent-word
      className={cn(
        "relative inline-block",
        tone === "coral" && "text-[var(--color-accent-coral)]",
        tone === "inverse" && "text-[var(--color-ink-inverse)]",
        className,
      )}
    >
      {children}
      {underline && (
        <Underline
          variant={variant}
          className={cn(
            "absolute left-0 right-0 -bottom-2 h-[0.4em] w-full",
            tone === "coral"
              ? "text-[var(--color-accent-coral)]"
              : "text-[var(--color-ink-inverse)]",
          )}
        />
      )}
    </span>
  );
}

/**
 * Replace the first occurrence of a word in a string with the accent treatment.
 * Case-insensitive match. Renders the rest as plain text.
 */
export function withAccent(
  text: string,
  word: string,
  options: {
    underline?: boolean;
    variant?: "short" | "long";
    tone?: "coral" | "inverse";
  } = {},
) {
  const idx = text.toLowerCase().indexOf(word.toLowerCase());
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const matched = text.slice(idx, idx + word.length);
  const after = text.slice(idx + word.length);
  return (
    <>
      {before}
      <AccentWord
        underline={options.underline ?? true}
        variant={options.variant ?? "short"}
        tone={options.tone}
      >
        {matched}
      </AccentWord>
      {after}
    </>
  );
}
