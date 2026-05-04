import { LOGOS } from "@/content/landing";

export function LogosStrip() {
  return (
    <section className="border-y border-line bg-base-light py-12 md:py-14">
      <div className="container-page">
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-warm-gray">
          {LOGOS.heading}
        </p>
        <ul className="mt-7 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-6">
          {LOGOS.items.map((logo, i) => (
            <li
              key={`${logo.name}-${i}`}
              className="flex items-center justify-center"
            >
              {logo.featured ? (
                <span className="text-base font-semibold tracking-tight text-warm-gray grayscale">
                  Piccolo Panini
                </span>
              ) : (
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-warm-gray">
                  your logo here
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
