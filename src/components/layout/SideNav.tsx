import { navItems } from "../../data/nav";
import { profile } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";
import { ThemeToggle } from "../ui/ThemeToggle";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../icons";

export const SideNav = () => {
  const active = useActiveSection(navItems.map((n) => n.id));

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col justify-between border-r-2 border-line bg-surface px-8 py-10 lg:flex">
      <div>
        <div className="flex items-center justify-between gap-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="hard-shadow-sm flex h-12 w-12 items-center justify-center border-2 border-signal bg-accent-ink font-display text-lg font-bold text-signal">
              {profile.initials}
            </span>
            <span className="flex flex-col">
              <span className="font-display text-base font-bold uppercase tracking-tight text-ink">
                {profile.name}
              </span>
              <span className="font-mono text-[11px] text-muted">{profile.role}</span>
            </span>
          </a>
        </div>

        <nav className="mt-16 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group flex items-center gap-3 rounded px-3 py-2.5 transition-colors ${
                active === item.id ? "bg-accent-ink text-signal" : "text-muted hover:text-ink"
              }`}
            >
              <span className="font-mono text-xs">{item.index}</span>
              <span
                className={`h-px flex-1 transition-colors ${
                  active === item.id ? "bg-signal" : "bg-line group-hover:bg-muted"
                }`}
              />
              <span className="font-mono text-xs uppercase tracking-wide">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          Open to ML & Software Engineering internships
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-muted">
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-signal-text">
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-signal-text">
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-signal-text">
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
          <ThemeToggle />
        </div>
        <span className="font-mono text-[11px] text-muted">{profile.location}</span>
      </div>
    </aside>
  );
};
