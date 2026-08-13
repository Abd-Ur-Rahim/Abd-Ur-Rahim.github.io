import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { Tag } from "../components/ui/Tag";
import { ArrowUpRight } from "../components/icons";
import { work } from "../data/work";

const categoryVariant: Record<string, "signal" | "flare" | "wire"> = {
  Research: "signal",
  "ML / CV": "wire",
  "Full-Stack": "flare",
  Systems: "wire",
};

export const Work = () => (
  <section id="work" className="border-b-2 border-line px-6 py-20 sm:px-10 lg:px-16">
    <SectionLabel
      index="02"
      title="Research & Builds"
      description="From a temporally-validated respiratory-disease model to a fintech app that reached the Startup Spark finals — projects that had to work outside the demo."
    />

    <div className="flex flex-col gap-6">
      {work.map((item, i) => (
        <Reveal key={item.id} delay={Math.min(i * 0.06, 0.3)}>
          <details
            className="group border-2 border-line bg-surface transition-colors open:border-ink"
            open={i === 0}
          >
            <summary className="flex cursor-pointer list-none flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Tag variant={categoryVariant[item.category] ?? "muted"}>{item.category}</Tag>
                  {item.badge && <Tag variant="flare">{item.badge}</Tag>}
                  <span className="font-mono text-xs text-muted">{item.period}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                  {item.title}
                </h3>
                <p className="max-w-2xl text-sm text-muted sm:text-base">{item.tagline}</p>
                {item.venue && (
                  <p className="font-mono text-xs text-signal-text">{item.venue}</p>
                )}
                {item.note && <p className="font-mono text-xs text-muted">{item.note}</p>}
              </div>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-line text-ink transition-transform group-open:rotate-45">
                <ArrowUpRight className="h-4 w-4 rotate-45 group-open:rotate-0" />
              </span>
            </summary>

            <div className="border-t-2 border-line px-6 pb-8 pt-6 sm:px-8">
              <ul className="mb-6 flex flex-col gap-3">
                {item.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-3 text-sm leading-relaxed text-ink/90 sm:text-base">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mb-6 flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>

              {item.links && item.links.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-signal-text underline decoration-signal/40 underline-offset-4 hover:decoration-signal"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </details>
        </Reveal>
      ))}
    </div>
  </section>
);
