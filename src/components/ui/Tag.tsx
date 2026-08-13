import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  variant?: "signal" | "flare" | "wire" | "muted";
}

const variants: Record<NonNullable<TagProps["variant"]>, string> = {
  signal: "border-signal-text/60 text-signal-text",
  flare: "border-flare-text/60 text-flare-text",
  wire: "border-wire-text/60 text-wire-text",
  muted: "border-line text-muted",
};

export const Tag = ({ children, variant = "muted" }: TagProps) => (
  <span
    className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs ${variants[variant]}`}
  >
    {children}
  </span>
);
