/**
 * Visual placeholder mockup for the hero — CSS-only dashboard preview.
 * Replace with real product screenshot when Morty provides PNG.
 */
export function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-accent/20 via-transparent to-base-dark/10 blur-2xl" />
      <div className="relative rounded-2xl border border-line bg-white shadow-card overflow-hidden">
        <div className="flex items-center gap-1.5 border-b border-line bg-[#f7f5f0] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-[11px] text-warm-gray">
            supersolt.app · Group dashboard · Today
          </span>
        </div>
        <div className="grid gap-4 p-5 md:p-7">
          {/* Top stats row */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { label: "Sales today", value: "$24,891", trend: "+12.4%" },
              { label: "Food cost", value: "31.2%", trend: "-1.1%" },
              { label: "Labour cost", value: "28.4%", trend: "-0.6%" },
              { label: "Contribution", value: "$9,840", trend: "+8.2%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-line bg-white p-4"
              >
                <div className="font-mono text-[10px] uppercase tracking-wider text-warm-gray">
                  {stat.label}
                </div>
                <div className="mt-2 font-sans text-xl md:text-2xl font-semibold tracking-tight">
                  {stat.value}
                </div>
                <div
                  className={
                    stat.trend.startsWith("+")
                      ? "mt-1 text-[11px] text-emerald-600"
                      : "mt-1 text-[11px] text-emerald-600"
                  }
                >
                  {stat.trend} vs last week
                </div>
              </div>
            ))}
          </div>

          {/* Chart row */}
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-xl border border-line bg-white p-5 lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-warm-gray">
                    Hourly margin
                  </div>
                  <div className="mt-1 text-sm font-medium text-base-dark">
                    All venues — Mon 04 May
                  </div>
                </div>
                <div className="hidden items-center gap-3 text-[11px] text-warm-gray md:flex">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm bg-base-dark" />
                    Sales
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm bg-accent" />
                    Cost
                  </span>
                </div>
              </div>
              <div className="mt-4 h-32 md:h-40">
                <MiniChart />
              </div>
            </div>

            <div className="rounded-xl border border-line bg-white p-5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-warm-gray">
                Venues
              </div>
              <div className="mt-3 space-y-3">
                {[
                  { name: "Piccolo Panini · CBD", margin: "32%", up: true },
                  { name: "Piccolo · Carlton", margin: "28%", up: true },
                  { name: "Piccolo · Fitzroy", margin: "24%", up: false },
                ].map((v) => (
                  <div
                    key={v.name}
                    className="flex items-center justify-between border-b border-line/60 pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <div className="text-[13px] font-medium text-base-dark">
                        {v.name}
                      </div>
                      <div className="font-mono text-[10px] text-warm-gray">
                        Live · 3 min ago
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold tracking-tight">
                        {v.margin}
                      </div>
                      <div
                        className={
                          v.up
                            ? "text-[10px] text-emerald-600"
                            : "text-[10px] text-accent"
                        }
                      >
                        {v.up ? "▲ on track" : "▼ watch"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniChart() {
  // Two stacked area paths suggesting sales vs cost.
  return (
    <svg
      viewBox="0 0 600 160"
      className="h-full w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0a0a0a" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#c3261c" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#c3261c" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 130 L40 110 L80 90 L120 95 L160 70 L200 55 L240 60 L280 40 L320 30 L360 35 L400 22 L440 28 L480 18 L520 22 L560 12 L600 18 L600 160 L0 160 Z"
        fill="url(#g1)"
      />
      <path
        d="M0 130 L40 110 L80 90 L120 95 L160 70 L200 55 L240 60 L280 40 L320 30 L360 35 L400 22 L440 28 L480 18 L520 22 L560 12 L600 18"
        fill="none"
        stroke="#0a0a0a"
        strokeWidth="2"
      />
      <path
        d="M0 145 L40 138 L80 130 L120 132 L160 118 L200 110 L240 112 L280 100 L320 95 L360 96 L400 90 L440 92 L480 86 L520 88 L560 82 L600 84 L600 160 L0 160 Z"
        fill="url(#g2)"
      />
      <path
        d="M0 145 L40 138 L80 130 L120 132 L160 118 L200 110 L240 112 L280 100 L320 95 L360 96 L400 90 L440 92 L480 86 L520 88 L560 82 L600 84"
        fill="none"
        stroke="#c3261c"
        strokeWidth="2"
      />
    </svg>
  );
}
