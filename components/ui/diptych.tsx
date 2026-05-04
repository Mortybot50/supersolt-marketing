import { Cord } from "./cord";
import { AccentWord } from "./accent-word";
import { cn } from "@/lib/utils";

interface DiptychProps {
  eyebrow: string;
  headline: string;
  accentWord: string;
  body: string;
  photoAlt: string;
  /** Ambience emoji or short string used as the dark-panel illustrative motif. */
  motif?: "kitchen" | "manager" | "franchise";
  /** When true, swap the column order (coral on the left). Used to alternate rhythm. */
  reverse?: boolean;
  /** Optional product mockup rendered on the coral panel below the body */
  mockup?: React.ReactNode;
}

/**
 * Magazine-diptych row: dark photographic panel + full-bleed coral panel.
 * Stacks on mobile (single column).
 */
export function Diptych({
  eyebrow,
  headline,
  accentWord,
  body,
  photoAlt,
  motif = "kitchen",
  reverse = false,
  mockup,
}: DiptychProps) {
  // Render headline split around the accent word
  const idx = headline.toLowerCase().indexOf(accentWord.toLowerCase());
  const before = idx >= 0 ? headline.slice(0, idx) : headline;
  const matched = idx >= 0 ? headline.slice(idx, idx + accentWord.length) : "";
  const after = idx >= 0 ? headline.slice(idx + accentWord.length) : "";

  return (
    <section
      data-section="audience-panel"
      className={cn(
        "grid grid-cols-1 md:grid-cols-2",
        reverse && "md:[&>*:nth-child(1)]:order-2",
      )}
    >
      {/* Dark photographic panel */}
      <div className="relative min-h-[420px] md:min-h-[640px] bg-[var(--color-panel-dark)] overflow-hidden">
        <DarkPanelMotif motif={motif} />
        {/* Cord-fragment glyph in corner — visual continuity with hero */}
        <div className="absolute bottom-8 left-8 w-24 opacity-70">
          <Cord variant="fragment" />
        </div>
        <span className="sr-only">{photoAlt}</span>
      </div>

      {/* Coral panel */}
      <div
        data-panel={accentWord.toLowerCase().replace(/\s+/g, "-")}
        className={cn(
          "relative bg-[var(--color-panel-coral)] text-[var(--color-ink-inverse)]",
          "flex flex-col justify-center",
          "px-[var(--gutter-mobile)] md:px-[var(--gutter-tablet)] xl:px-[var(--gutter-desktop)]",
          "py-20 md:py-24 xl:py-32",
        )}
      >
        <p className="font-mono text-[12px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-inverse)]/80">
          {eyebrow}
        </p>
        <h3 className="h-display mt-6 max-w-[18ch] text-[var(--color-ink-inverse)]">
          {before}
          {matched && (
            <AccentWord tone="inverse" underline variant="short">
              {matched}
            </AccentWord>
          )}
          {after}
        </h3>
        <p className="mt-8 font-sans text-base md:text-lg max-w-[42ch] leading-relaxed text-[var(--color-ink-inverse)]/95">
          {body}
        </p>
        {mockup && <div className="mt-12 max-w-md">{mockup}</div>}
      </div>
    </section>
  );
}

/**
 * Editorial illustration — abstract motif on the dark panel.
 * Replaces stock photos. Uses warm amber light + soft shadows + subtle textures
 * sketched via SVG, keeping the brief's "tactile gallery feel" without
 * importing photography.
 */
function DarkPanelMotif({ motif }: { motif: "kitchen" | "manager" | "franchise" }) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 800 1000"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`amber-glow-${motif}`} cx="0.7" cy="0.35" r="0.6">
          <stop offset="0%" stopColor="rgba(232, 160, 74, 0.55)" />
          <stop offset="60%" stopColor="rgba(232, 160, 74, 0.10)" />
          <stop offset="100%" stopColor="rgba(232, 160, 74, 0)" />
        </radialGradient>
        <linearGradient id={`steel-${motif}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(245, 240, 232, 0.04)" />
          <stop offset="100%" stopColor="rgba(245, 240, 232, 0.14)" />
        </linearGradient>
      </defs>

      {/* Base wash */}
      <rect width="800" height="1000" fill="#1a1815" />
      {/* Amber raking light */}
      <rect width="800" height="1000" fill={`url(#amber-glow-${motif})`} />

      {motif === "kitchen" && (
        <g>
          {/* Stainless bench horizon */}
          <rect
            x="0"
            y="640"
            width="800"
            height="240"
            fill={`url(#steel-${motif})`}
          />
          {/* Oven mouth glow */}
          <rect
            x="510"
            y="320"
            width="220"
            height="180"
            rx="8"
            fill="rgba(232, 160, 74, 0.20)"
            stroke="rgba(232, 160, 74, 0.45)"
            strokeWidth="2"
          />
          <rect
            x="540"
            y="350"
            width="160"
            height="120"
            rx="4"
            fill="rgba(217, 84, 59, 0.35)"
          />
          {/* Hanging utensils silhouettes */}
          {[120, 180, 240, 300].map((x) => (
            <line
              key={x}
              x1={x}
              y1={120}
              x2={x}
              y2={260}
              stroke="rgba(245, 240, 232, 0.18)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
          <circle cx="120" cy="270" r="14" fill="rgba(245, 240, 232, 0.12)" />
          <circle cx="180" cy="270" r="10" fill="rgba(245, 240, 232, 0.10)" />
          <circle cx="240" cy="270" r="12" fill="rgba(245, 240, 232, 0.10)" />
          <circle cx="300" cy="270" r="9" fill="rgba(245, 240, 232, 0.10)" />
          {/* Mise en place trays on bench */}
          <rect x="80" y="700" width="200" height="60" rx="6" fill="rgba(245, 240, 232, 0.06)" />
          <rect x="320" y="720" width="160" height="50" rx="6" fill="rgba(245, 240, 232, 0.05)" />
          <rect x="520" y="710" width="220" height="70" rx="6" fill="rgba(232, 160, 74, 0.10)" />
        </g>
      )}

      {motif === "manager" && (
        <g>
          {/* Soft motion-blur bar in background */}
          <rect
            x="0"
            y="540"
            width="800"
            height="80"
            fill="rgba(232, 160, 74, 0.18)"
          />
          <rect
            x="0"
            y="630"
            width="800"
            height="40"
            fill="rgba(217, 84, 59, 0.10)"
          />
          {/* Phone glow rectangle */}
          <rect
            x="320"
            y="380"
            width="160"
            height="280"
            rx="22"
            fill="rgba(245, 240, 232, 0.04)"
            stroke="rgba(245, 240, 232, 0.18)"
            strokeWidth="2"
          />
          <rect
            x="332"
            y="392"
            width="136"
            height="256"
            rx="14"
            fill="rgba(232, 160, 74, 0.20)"
          />
          {/* Faux dashboard rows on phone */}
          {[420, 460, 500, 540, 580].map((y, i) => (
            <rect
              key={y}
              x={344}
              y={y}
              width={i === 0 ? 110 : 95 - i * 6}
              height="6"
              rx="3"
              fill="rgba(245, 240, 232, 0.45)"
            />
          ))}
          {/* Bokeh dots */}
          {[
            [120, 200, 22],
            [620, 240, 30],
            [80, 760, 26],
            [680, 740, 18],
            [200, 880, 14],
          ].map(([cx, cy, r], i) => (
            <circle
              key={i}
              cx={cx as number}
              cy={cy as number}
              r={r as number}
              fill="rgba(232, 160, 74, 0.20)"
            />
          ))}
        </g>
      )}

      {motif === "franchise" && (
        <g>
          {/* Counter horizon */}
          <rect
            x="0"
            y="700"
            width="800"
            height="300"
            fill="rgba(245, 240, 232, 0.05)"
          />
          {/* Menu board panels */}
          {[60, 230, 400, 570].map((x) => (
            <g key={x}>
              <rect
                x={x}
                y={140}
                width="160"
                height="220"
                rx="6"
                fill="rgba(26, 24, 21, 0.8)"
                stroke="rgba(232, 160, 74, 0.35)"
                strokeWidth="2"
              />
              <rect
                x={x + 16}
                y={166}
                width={120}
                height={10}
                rx={4}
                fill="rgba(232, 160, 74, 0.6)"
              />
              {[200, 224, 248, 272, 296, 320].map((row) => (
                <rect
                  key={row}
                  x={x + 16}
                  y={row}
                  width={Math.random() * 80 + 40}
                  height={6}
                  rx={3}
                  fill="rgba(245, 240, 232, 0.35)"
                />
              ))}
            </g>
          ))}
          {/* Heat lamp glow above counter */}
          <ellipse
            cx="400"
            cy="540"
            rx="380"
            ry="40"
            fill="rgba(217, 84, 59, 0.20)"
          />
        </g>
      )}
    </svg>
  );
}
