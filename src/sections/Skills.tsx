import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { skillGroups, spokenLanguages } from "../data/skills";

export const Skills = () => (
  <section id="skills" className="border-b-2 border-line px-6 py-20 sm:px-10 lg:px-16">
    <SectionLabel index="04" title="Skills" />

    <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {skillGroups.map((group, i) => (
        <Reveal key={group.group} delay={Math.min(i * 0.05, 0.25)}>
          <div className="border-b-2 border-line pb-6">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-signal-text">
              {group.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border border-line px-3 py-1.5 text-sm text-ink transition-colors hover:border-signal-text hover:text-signal-text"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.2}>
      <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wide text-muted">
        <span className="text-signal-text">Spoken:</span>
        {spokenLanguages.map((lang) => (
          <span key={lang} className="border border-line px-3 py-1">
            {lang}
          </span>
        ))}
      </div>
    </Reveal>
  </section>
);
