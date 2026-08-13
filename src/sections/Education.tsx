import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { education } from "../data/education";

export const Education = () => (
  <section id="education" className="border-b-2 border-line px-6 py-20 sm:px-10 lg:px-16">
    <SectionLabel index="05" title="Education" />

    <div className="flex flex-col">
      {education.map((entry, i) => (
        <Reveal key={entry.institution} delay={i * 0.08}>
          <div className="flex flex-col gap-2 border-t-2 border-line py-8 first:border-t-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink">{entry.institution}</h3>
              <p className="mt-1 text-base text-muted">{entry.credential}</p>
              {entry.detail && (
                <p className="mt-1 font-mono text-xs text-signal-text">{entry.detail}</p>
              )}
            </div>
            <span className="shrink-0 font-mono text-sm text-muted">{entry.period}</span>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
