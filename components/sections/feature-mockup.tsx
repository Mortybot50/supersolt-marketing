import { cn } from "@/lib/utils";

interface FeatureMockupProps {
  variant: "operations" | "labour" | "stock";
}

/**
 * Themed CSS-only product mockups per feature block.
 * Replace with real screenshots when available.
 */
export function FeatureMockup({ variant }: FeatureMockupProps) {
  return (
    <div className="relative">
      <div className="absolute -inset-3 -z-10 rounded-[24px] bg-gradient-to-br from-accent/15 via-transparent to-base-dark/10 blur-xl" />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-card">
        <div className="flex items-center justify-between border-b border-line bg-[#fafaf6] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-warm-gray-soft" />
            <span className="h-2 w-2 rounded-full bg-warm-gray-soft" />
            <span className="h-2 w-2 rounded-full bg-warm-gray-soft" />
          </div>
          <span className="font-mono text-[10px] text-warm-gray">
            {variant === "operations" && "Group · 3 venues"}
            {variant === "labour" && "Roster · Mon 04 May"}
            {variant === "stock" && "Stock & ordering"}
          </span>
        </div>
        <div className="p-5 md:p-6">
          {variant === "operations" && <OperationsMockup />}
          {variant === "labour" && <LabourMockup />}
          {variant === "stock" && <StockMockup />}
        </div>
      </div>
    </div>
  );
}

function OperationsMockup() {
  const venues = [
    { name: "Piccolo · CBD", revenue: 24891, margin: 32, bar: 90 },
    { name: "Piccolo · Carlton", revenue: 18204, margin: 28, bar: 70 },
    { name: "Piccolo · Fitzroy", revenue: 14310, margin: 24, bar: 55 },
  ];
  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-warm-gray">
            Group · today
          </div>
          <div className="mt-1 text-2xl font-semibold tracking-tight">
            $57,405
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] uppercase tracking-wider text-warm-gray">
            vs last week
          </div>
          <div className="mt-1 text-sm font-medium text-emerald-600">
            +9.3%
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {venues.map((v) => (
          <div key={v.name} className="space-y-1.5">
            <div className="flex items-center justify-between text-[13px]">
              <span className="font-medium text-base-dark">{v.name}</span>
              <span className="font-mono text-warm-gray">
                ${v.revenue.toLocaleString()} · {v.margin}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-line">
              <div
                className="h-full rounded-full bg-base-dark"
                style={{ width: `${v.bar}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LabourMockup() {
  const shifts = [
    { name: "Sam K", role: "Chef", hours: "08:00 – 16:00", cost: 312, ok: true },
    { name: "Maya P", role: "Server", hours: "10:00 – 18:00", cost: 248, ok: true },
    { name: "Tom R", role: "Server", hours: "14:00 – 22:00", cost: 268, ok: false },
    { name: "Ava L", role: "Bar", hours: "16:00 – 23:00", cost: 224, ok: true },
  ];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-lg bg-accent-soft p-3">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-accent">
            Live cost
          </div>
          <div className="text-xl font-semibold text-base-dark">
            28.4% <span className="text-sm font-normal text-warm-gray">of forecast revenue</span>
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] uppercase tracking-wider text-warm-gray">
            Target
          </div>
          <div className="text-sm font-medium">29.0%</div>
        </div>
      </div>
      <div className="divide-y divide-line">
        {shifts.map((s) => (
          <div
            key={s.name}
            className="flex items-center justify-between py-2.5"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-line text-[11px] font-semibold">
                {s.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="text-[13px] font-medium text-base-dark">
                  {s.name}
                </div>
                <div className="font-mono text-[11px] text-warm-gray">
                  {s.role} · {s.hours}
                </div>
              </div>
            </div>
            <div
              className={cn(
                "rounded-full px-2 py-0.5 text-[11px] font-medium",
                s.ok
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-accent-soft text-accent",
              )}
            >
              ${s.cost}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StockMockup() {
  const items = [
    { name: "San Marzano tomatoes", par: 24, on: 8, status: "low" },
    { name: "Mozzarella di bufala", par: 18, on: 15, status: "ok" },
    { name: "00 flour", par: 60, on: 42, status: "ok" },
    { name: "Basil, fresh", par: 12, on: 3, status: "low" },
  ];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase tracking-wider text-warm-gray">
          Auto-built order · Wed
        </div>
        <span className="rounded-full bg-base-dark px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-base-light">
          12 items
        </span>
      </div>
      <div className="space-y-2.5">
        {items.map((it) => {
          const pct = Math.max(8, Math.round((it.on / it.par) * 100));
          return (
            <div key={it.name} className="space-y-1">
              <div className="flex items-center justify-between text-[13px]">
                <span className="font-medium text-base-dark">{it.name}</span>
                <span className="font-mono text-warm-gray">
                  {it.on} / {it.par}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-line">
                <div
                  className={cn(
                    "h-full rounded-full",
                    it.status === "low" ? "bg-accent" : "bg-base-dark",
                  )}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-dashed border-line p-3">
        <div className="grid h-8 w-8 place-items-center rounded-md bg-accent-soft text-accent">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9 H21" />
          </svg>
        </div>
        <div className="text-[12px] leading-snug text-warm-gray">
          <span className="text-base-dark font-medium">Snap an invoice</span> — line items parsed in 4 seconds.
        </div>
      </div>
    </div>
  );
}
