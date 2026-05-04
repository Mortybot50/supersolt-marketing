import { cn } from "@/lib/utils";
import { Underline } from "./underline";

interface AccentWordProps {
  children: React.ReactNode;
  underline?: boolean;
  variant?: "short" | "long";
  className?: string;
}

/**
 * Single-word red accent — visual signature.
 * Wraps a word/phrase in accent red, optionally with hand-drawn underline.
 */
export function AccentWord({
  children,
  underline = false,
  variant = "short",
  className,
}: AccentWordProps) {
  return (
    <span className={cn("relative inline-block text-accent", className)}>
      {children}
      {underline && (
        <Underline
          variant={variant}
          className="absolute left-0 right-0 -bottom-2 h-[0.4em] w-full text-accent"
        />
      )}
    </span>
  );
}

/**
 * Replace a single word in a string with the accent treatment.
 * Case-insensitive match on first occurrence.
 * Renders the rest as plain text.
 */
export function withAccent(
  text: string,
  word: string,
  options: { underline?: boolean; variant?: "short" | "long" } = {},
) {
  const idx = text.toLowerCase().indexOf(word.toLowerCase());
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const matched = text.slice(idx, idx + word.length);
  const after = text.slice(idx + word.length);
  return (
    <>
      {before}
      <AccentWord underline={options.underline} variant={options.variant}>
        {matched}
      </AccentWord>
      {after}
    </>
  );
}
