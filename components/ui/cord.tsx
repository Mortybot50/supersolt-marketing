import { cn } from "@/lib/utils";

interface CordProps {
  className?: string;
  /** Renders a single thin braid for use in section dividers / corners */
  variant?: "hero" | "fragment" | "rule";
}

/**
 * The hero centrepiece — a 3-strand woven cord arcing diagonally.
 * Each strand maps to one audience: single-venue / multi-venue / franchisee.
 *
 * Implemented as inline SVG (per design-shotgun risk-register fallback —
 * Phase 1 AI image-gen was unavailable). Travels at any size, near-zero asset
 * weight, animates via CSS .cord-shift on the wrapper.
 */
export function Cord({ className, variant = "hero" }: CordProps) {
  if (variant === "fragment") {
    return (
      <svg
        className={cn("block", className)}
        viewBox="0 0 120 24"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <BraidPaths width={120} height={24} amplitude={6} segments={6} />
      </svg>
    );
  }

  if (variant === "rule") {
    return (
      <svg
        className={cn("block w-full", className)}
        viewBox="0 0 1200 8"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <BraidPaths
          width={1200}
          height={8}
          amplitude={2.5}
          segments={48}
          monochrome
        />
      </svg>
    );
  }

  // Hero variant — diagonal arc, large
  return (
    <div className={cn("cord-shift", className)} aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 700"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="cord-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
            <feOffset dx="0" dy="8" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.18" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="cord-coral" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#E36A4F" />
            <stop offset="55%" stopColor="#D9543B" />
            <stop offset="100%" stopColor="#A8412E" />
          </linearGradient>
          <linearGradient id="cord-amber" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#F0B266" />
            <stop offset="55%" stopColor="#E8A04A" />
            <stop offset="100%" stopColor="#B57A30" />
          </linearGradient>
          <linearGradient id="cord-cream" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#E8DFCE" />
            <stop offset="55%" stopColor="#C9BDA4" />
            <stop offset="100%" stopColor="#9F9582" />
          </linearGradient>
          {/* Subtle highlight on each strand */}
          <linearGradient id="strand-highlight" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        <g filter="url(#cord-shadow)">
          <HeroBraid />
        </g>
      </svg>
    </div>
  );
}

/**
 * Three sine-wave strands plaited together along a diagonal trajectory.
 * The path traces from upper-left (around 80, 220) to lower-right
 * (around 1120, 520) following a gentle bezier curve, with each strand
 * offset by 120deg phase.
 */
function HeroBraid() {
  // Generate the three strands by sampling a bezier curve and offsetting
  // each strand perpendicular by amplitude * sin(phase).
  const segments = 64;
  const amplitude = 26;

  // Bezier: P0 (80,220) → P1 (480,80) → P2 (760,640) → P3 (1120,500)
  const pts: { x: number; y: number; nx: number; ny: number }[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const mt = 1 - t;
    const x =
      mt * mt * mt * 80 +
      3 * mt * mt * t * 480 +
      3 * mt * t * t * 760 +
      t * t * t * 1120;
    const y =
      mt * mt * mt * 220 +
      3 * mt * mt * t * 80 +
      3 * mt * t * t * 640 +
      t * t * t * 500;
    // tangent derivative
    const dx =
      3 * mt * mt * (480 - 80) +
      6 * mt * t * (760 - 480) +
      3 * t * t * (1120 - 760);
    const dy =
      3 * mt * mt * (80 - 220) +
      6 * mt * t * (640 - 80) +
      3 * t * t * (500 - 640);
    const len = Math.hypot(dx, dy) || 1;
    // normal (perpendicular)
    pts.push({ x, y, nx: -dy / len, ny: dx / len });
  }

  const buildStrand = (phaseOffset: number) => {
    let d = "";
    pts.forEach((p, i) => {
      const phase = (i / segments) * Math.PI * 14 + phaseOffset;
      const offset = Math.sin(phase) * amplitude;
      const x = p.x + p.nx * offset;
      const y = p.y + p.ny * offset;
      d += i === 0 ? `M ${x.toFixed(1)} ${y.toFixed(1)} ` : `L ${x.toFixed(1)} ${y.toFixed(1)} `;
    });
    return d;
  };

  const strandA = buildStrand(0);
  const strandB = buildStrand((Math.PI * 2) / 3);
  const strandC = buildStrand((Math.PI * 4) / 3);

  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Outer dark base — gives the cord a unified body */}
      <path
        d={strandA}
        stroke="rgba(26, 24, 21, 0.10)"
        strokeWidth="62"
      />
      <path d={strandB} stroke="rgba(26, 24, 21, 0.08)" strokeWidth="62" />
      <path d={strandC} stroke="rgba(26, 24, 21, 0.06)" strokeWidth="62" />

      {/* Coloured strands */}
      <path d={strandA} stroke="url(#cord-coral)" strokeWidth="44" />
      <path d={strandB} stroke="url(#cord-amber)" strokeWidth="44" />
      <path d={strandC} stroke="url(#cord-cream)" strokeWidth="44" />

      {/* Inner highlights — narrow line along top of each strand */}
      <path d={strandA} stroke="url(#strand-highlight)" strokeWidth="10" />
      <path d={strandB} stroke="url(#strand-highlight)" strokeWidth="10" />
      <path d={strandC} stroke="url(#strand-highlight)" strokeWidth="10" />
    </g>
  );
}

/**
 * Generic braid drawn between (0,h/2) and (w,h/2). Used for fragment + rule.
 */
function BraidPaths({
  width,
  height,
  amplitude,
  segments,
  monochrome,
}: {
  width: number;
  height: number;
  amplitude: number;
  segments: number;
  monochrome?: boolean;
}) {
  const buildStrand = (phaseOffset: number) => {
    let d = "";
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const x = t * width;
      const phase = t * Math.PI * 8 + phaseOffset;
      const y = height / 2 + Math.sin(phase) * amplitude;
      d += i === 0 ? `M ${x.toFixed(1)} ${y.toFixed(1)} ` : `L ${x.toFixed(1)} ${y.toFixed(1)} `;
    }
    return d;
  };

  const sw = Math.max(2, Math.round(height / 4));
  const colours = monochrome
    ? ["#C8C0AE", "#C8C0AE", "#C8C0AE"]
    : ["#D9543B", "#E8A04A", "#C9BDA4"];

  return (
    <g strokeLinecap="round" fill="none">
      <path d={buildStrand(0)} stroke={colours[0]} strokeWidth={sw} />
      <path
        d={buildStrand((Math.PI * 2) / 3)}
        stroke={colours[1]}
        strokeWidth={sw}
      />
      <path
        d={buildStrand((Math.PI * 4) / 3)}
        stroke={colours[2]}
        strokeWidth={sw}
      />
    </g>
  );
}
