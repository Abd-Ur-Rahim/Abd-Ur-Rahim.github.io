import { useState } from "react";
import { Reveal } from "../components/ui/Reveal";
import { SectionLabel } from "../components/ui/SectionLabel";
import { CertificateModal } from "../components/ui/CertificateModal";
import { profile } from "../data/profile";
import { certifications, involvement } from "../data/certifications";
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from "../components/icons";

export const Contact = () => {
  const [viewing, setViewing] = useState<string | null>(null);

  return (
  <section id="contact" className="px-6 py-20 sm:px-10 lg:px-16">
    <SectionLabel index="06" title="Contact" />

    <Reveal>
      <div className="hard-shadow flex flex-col gap-8 border-2 border-ink bg-surface p-8 sm:p-12">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-signal-text">
            Let's build something
          </span>
          <h3 className="font-display text-3xl font-bold uppercase leading-tight text-ink sm:text-5xl">
            Open to ML Engineering internships & collaborations
          </h3>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-2 border-2 border-accent-ink bg-signal px-6 py-3 font-mono text-sm font-medium uppercase tracking-wide text-accent-ink transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-4 border-t-2 border-line pt-6">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-line px-4 py-2 font-mono text-xs uppercase text-ink transition-colors hover:border-signal-text hover:text-signal-text"
          >
            <GitHubIcon className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3 w-3" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-line px-4 py-2 font-mono text-xs uppercase text-ink transition-colors hover:border-signal-text hover:text-signal-text"
          >
            <LinkedInIcon className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3 w-3" />
          </a>
          <span className="font-mono text-xs text-muted">{profile.location}</span>
        </div>
      </div>
    </Reveal>

    <div className="mt-16 grid gap-10 lg:grid-cols-2">
      <Reveal delay={0.1}>
        <div>
          <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-signal-text">
            Certifications
          </h4>
          <ul className="flex flex-col gap-4">
            {certifications.map((cert) => (
              <li key={cert.title} className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                <div>
                  <p className="text-sm text-ink">{cert.title}</p>
                  <p className="font-mono text-xs text-muted">{cert.issuer}</p>
                  <div className="mt-1 flex gap-3">
                    {cert.certificate && (
                      <button
                        onClick={() => setViewing(cert.certificate!)}
                        className="font-mono text-[11px] uppercase tracking-wide text-signal-text underline decoration-signal/40 underline-offset-4 hover:decoration-signal"
                      >
                        View
                      </button>
                    )}
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] uppercase tracking-wide text-wire-text underline decoration-wire/40 underline-offset-4 hover:decoration-wire"
                      >
                        Verify
                      </a>
                    )}
                  </div>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted">{cert.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div>
          <h4 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-signal-text">
            Involvement
          </h4>
          <ul className="flex flex-col gap-4">
            {involvement.map((item) => (
              <li key={item.org} className="border-b border-line pb-3">
                <p className="text-sm font-medium text-ink">{item.org}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>

    <CertificateModal src={viewing} alt="Certificate" onClose={() => setViewing(null)} />
  </section>
  );
};
