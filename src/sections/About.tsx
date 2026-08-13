import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { profile } from "../data/profile";

export const About = () => (
  <section id="about" className="border-b-2 border-line px-6 py-20 sm:px-10 lg:px-16">
    <SectionLabel index="01" title="About" />

    <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
      <Reveal>
        <p className="text-xl leading-relaxed text-ink sm:text-2xl">
          {profile.summary}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="hard-shadow-sm flex flex-col gap-5 border-2 border-line bg-surface p-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal-text">
            Currently
          </span>
          <ul className="flex flex-col gap-4 text-sm text-muted">
            <li className="flex justify-between gap-4 border-b border-line pb-3">
              <span>Institution</span>
              <span className="text-right text-ink">University of Moratuwa</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-line pb-3">
              <span>Stream</span>
              <span className="text-right text-ink">Data Science, Year 3</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-line pb-3">
              <span>Looking for</span>
              <span className="text-right text-ink">ML Engineering internship</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Based in</span>
              <span className="text-right text-ink">{profile.location}</span>
            </li>
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);
