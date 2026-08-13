import { useState } from "react";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { CertificateModal } from "../components/ui/CertificateModal";
import { achievements } from "../data/achievements";

export const Achievements = () => {
  const [viewing, setViewing] = useState<string | null>(null);

  return (
    <section id="achievements" className="border-b-2 border-line px-6 py-20 sm:px-10 lg:px-16">
      <SectionLabel index="03" title="Achievements" />

      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={Math.min(i * 0.08, 0.3)}>
            <div className="hard-shadow-sm flex h-full flex-col border-2 border-line bg-surface transition-transform hover:-translate-y-1">
              {a.photo && (
                <button
                  onClick={() => setViewing(a.photo!)}
                  className="group block aspect-[16/10] w-full shrink-0 overflow-hidden border-b-2 border-line"
                >
                  <img
                    src={a.photo}
                    alt={`${a.title} — event moment`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              )}
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <span className="border-2 border-signal bg-accent-ink px-3 py-1 font-mono text-xs font-medium uppercase tracking-wide text-signal">
                    {a.place}
                  </span>
                  <span className="font-mono text-xs text-muted">{a.period}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-ink">{a.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted">{a.detail}</p>
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-line pt-3">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-muted">
                    {a.org}
                  </p>
                  <div className="flex shrink-0 gap-3">
                    {a.photo && (
                      <button
                        onClick={() => setViewing(a.photo!)}
                        className="font-mono text-[11px] uppercase tracking-wide text-signal-text underline decoration-signal/40 underline-offset-4 hover:decoration-signal"
                      >
                        View photo
                      </button>
                    )}
                    {a.certificate && (
                      <button
                        onClick={() => setViewing(a.certificate!)}
                        className="font-mono text-[11px] uppercase tracking-wide text-signal-text underline decoration-signal/40 underline-offset-4 hover:decoration-signal"
                      >
                        View certificate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <CertificateModal
        src={viewing}
        alt="Achievement certificate"
        onClose={() => setViewing(null)}
      />
    </section>
  );
};
