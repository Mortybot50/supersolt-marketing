import { cn } from "@/lib/utils";

interface FeatureMockupProps {
  variant: "operations" | "labour" | "stock";
}

/**
 * Themed CSS-only product mockups per feature block. Re-skinned to v2 palette
 * (warm bone canvas, coral accent, paper hairlines). Replace with real
 * screenshots when available.
 */
export function FeatureMockup({ variant }: FeatureMockupProps) {
  return (
    <div className="relative">
      <div
        className="absolute -inset-3 -z-10 rounded-[24px] blur-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(217,84,59,0.10) 0%, rgba(232,160,74,0.10) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="relative overflow-hidden rounded-2xl bg-white"
        style={{ boxShadow: "var(--shadow-paper)" }}
      >
        <div className="flex items-center justify-between border-b border-[var(--color-rule-line)]/60 bg-[#fbf6ed] px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--color-rule-line)]" />
            <span className="h-2 w-2 rounded-full bg-[var(--color-rule-line)]" />
            <span className="h-2 w-2 rounded-full bg-[var(--color-rule-line)]" />
          </div>
          <span className="font-mono text-[10px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-secondary)]">
            {variant === "operations" && "Group · 3 venues"}
            {variant === "labour" && "Roster · Mon 04 May"}
            {variant === "stock" && "Stock & ordering"}
          </span>
        </div>
        <div className="p-5 md:p-7">
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
    <div className="space-y-5">
      <div className="flex items-baseline justify-between">
        <div>
          <div className="font-mono text-[10px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-secondary)]">
            Group · today
          </div>
          <div className="mt-2 font-[var(--font-display)] font-medium text-[28px] tracking-[var(--tracking-display)] lowercase text-[var(--color-ink-primary)]">
            $57,405
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-secondary)]">
            vs last week
          </div>
          <div className="mt-1 text-sm font-medium text-[var(--color-accent-coral)]">
            +9.3%
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {venues.map((v) => (
          <div key={v.name} className="space-y-1.5">
            <div className="flex items-center justify-between text-[13px]">
              <span className="font-medium text-[var(--color-ink-primary)]">{v.name}</span>
              <span className="font-mono text-[var(--color-ink-secondary)]">
                ${v.revenue.toLocaleString()} · {v.margin}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-[var(--color-rule-line)]/40">
              <div
                className="h-full rounded-full bg-[var(--color-ink-primary)]"
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
    <div className="space-y-5">
      <div
        className="flex items-center justify-between rounded-xl p-4"
        style={{ background: "rgba(217, 84, 59, 0.08)" }}
      >
        <div>
          <div className="font-mono text-[10px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-accent-coral)]">
            Live cost
          </div>
          <div className="font-[var(--font-display)] font-medium text-[24px] tracking-[var(--tracking-display)] lowercase text-[var(--color-ink-primary)]">
            28.4%
            <span className="ml-2 text-sm font-normal text-[var(--color-ink-secondary)]">
              of forecast revenue
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-secondary)]">
            Target
          </div>
          <div className="text-sm font-medium">29.0%</div>
        </div>
      </div>
      <div className="divide-y divide-[var(--color-rule-line)]/50">
        {shifts.map((s) => (
          <div
            key={s.name}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-bg-canvas-deep)] text-[11px] font-semibold text-[var(--color-ink-primary)]">
                {s.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="text-[13px] font-medium text-[var(--color-ink-primary)]">
                  {s.name}
                </div>
                <div className="font-mono text-[11px] text-[var(--color-ink-secondary)]">
                  {s.role} · {s.hours}
                </div>
              </div>
            </div>
            <div
              className={cn(
                "rounded-full px-2.5 py-0.5 text-[11px] font-medium",
                s.ok
                  ? "bg-[rgba(217,84,59,0.10)] text-[var(--color-ink-primary)]"
                  : "bg-[var(--color-accent-coral)] text-white",
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
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="font-mono text-[10px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-secondary)]">
          Auto-built order · Wed
        </div>
        <span className="rounded-full bg-[var(--color-panel-dark)] px-2.5 py-0.5 font-mono text-[10px] uppercase [letter-spacing:var(--tracking-eyebrow)] text-[var(--color-ink-inverse)]">
          12 items
        </span>
      </div>
      <div className="space-y-3">
        {items.map((it) => {
          const pct = Math.max(8, Math.round((it.on / it.par) * 100));
          return (
            <div key={it.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-[13px]">
                <span className="font-medium text-[var(--color-ink-primary)]">{it.name}</span>
                <span className="font-mono text-[var(--color-ink-secondary)]">
                  {it.on} / {it.par}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-[var(--color-rule-line)]/40">
                <div
                  className={cn(
                    "h-full rounded-full",
                    it.status === "low"
                      ? "bg-[var(--color-accent-coral)]"
                      : "bg-[var(--color-ink-primary)]",
                  )}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-dashed border-[var(--color-rule-line)] p-4">
        <div
          className="grid h-8 w-8 place-items-center rounded-md text-[var(--color-accent-coral)]"
          style={{ background: "rgba(217, 84, 59, 0.10)" }}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9 H21" />
          </svg>
        </div>
        <div className="text-[12px] leading-snug text-[var(--color-ink-secondary)]">
          <span className="text-[var(--color-ink-primary)] font-medium">Snap an invoice</span>
          {" "}— line items parsed in 4 seconds.
        </div>
      </div>
    </div>
  );
}
