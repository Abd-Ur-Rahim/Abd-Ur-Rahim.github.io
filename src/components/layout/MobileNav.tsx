import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "../../data/nav";
import { profile } from "../../data/profile";
import { ThemeToggle } from "../ui/ThemeToggle";
import { CloseIcon, GitHubIcon, LinkedInIcon, MailIcon, MenuIcon } from "../icons";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-40 flex items-center justify-between border-b-2 border-line bg-surface/95 px-5 py-4 backdrop-blur lg:hidden">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center border-2 border-signal bg-accent-ink font-display text-sm font-bold text-signal">
            {profile.initials}
          </span>
          <span className="font-display text-sm font-bold uppercase tracking-tight text-ink">
            {profile.name}
          </span>
        </a>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center border-2 border-line text-ink"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Rendered as a sibling, not a descendant of the bar above — that bar has
          backdrop-blur, and per spec any element with backdrop-filter becomes a
          new containing block for position:fixed children, which would trap this
          full-screen overlay inside the bar's own (tiny) box instead of the viewport. */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-void px-6 py-6 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-bold uppercase tracking-tight text-ink">
                Menu
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center border-2 border-line text-ink"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex items-center gap-4 border-b border-line py-4"
                >
                  <span className="font-mono text-sm text-signal-text">{item.index}</span>
                  <span className="font-display text-2xl font-bold uppercase text-ink">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto flex items-center gap-5 text-muted">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitHubIcon className="h-6 w-6" />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon className="h-6 w-6" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <MailIcon className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
