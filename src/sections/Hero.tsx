import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { ArrowUpRight } from "../components/icons";

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-line px-6 pb-20 pt-16 sm:px-10 sm:pt-24 lg:px-16">
      <div className="grid-field pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal/10 blur-3xl" />

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-muted"
        >
          <span className="border border-line px-2 py-1">Moratuwa, Sri Lanka</span>
          <span className="border border-line px-2 py-1">Data Science · CSE</span>
          <span className="border border-signal-text/50 px-2 py-1 text-signal-text">Available Now</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[13vw] font-bold uppercase leading-[0.9] tracking-tighter text-ink sm:text-7xl lg:text-8xl"
        >
          Rahim
          <br />
          Iqbal
        </motion.h1>

        <div className="mt-6 flex h-8 items-center gap-2 font-mono text-lg text-signal-text sm:text-xl">
          <span>{'>'}</span>
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {profile.roles[roleIndex]}
          </motion.span>
          <span className="animate-pulse text-signal-text">_</span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg text-muted sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="hard-shadow group flex items-center gap-2 border-2 border-accent-ink bg-signal px-6 py-3 font-mono text-sm font-medium uppercase tracking-wide text-accent-ink transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-y-0"
          >
            View Research & Builds
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border-2 border-line px-6 py-3 font-mono text-sm font-medium uppercase tracking-wide text-ink transition-colors hover:border-ink"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t-2 border-line pt-8 sm:grid-cols-4"
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">{stat.label}</dt>
              <dd className="font-display text-3xl font-bold text-ink">{stat.value}</dd>
            </div>
          ))}
        </motion.dl> */}
      </div>
    </section>
  );
};
