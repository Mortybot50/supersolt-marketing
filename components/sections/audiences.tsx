import { Diptych } from "@/components/ui/diptych";
import { AUDIENCES } from "@/content/landing";

const MOTIFS = ["kitchen", "manager", "franchise"] as const;

export function Audiences() {
  return (
    <div
      id="audiences"
      data-section="audiences"
      aria-label="Who SuperSolt is for"
    >
      {AUDIENCES.panels.map((p, i) => (
        <Diptych
          key={p.eyebrow}
          eyebrow={p.eyebrow}
          headline={p.headline}
          accentWord={p.accentWord}
          body={p.body}
          photoAlt={p.photoAlt}
          motif={MOTIFS[i]}
          reverse={i % 2 === 1}
        />
      ))}
    </div>
  );
}
