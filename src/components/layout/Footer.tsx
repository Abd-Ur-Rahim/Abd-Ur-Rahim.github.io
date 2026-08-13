import { profile } from "../../data/profile";

export const Footer = () => (
  <footer className="border-t-2 border-line px-6 py-8 sm:px-10 lg:px-16">
    <div className="flex flex-col gap-2 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
      <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
      <span>Built with React · TypeScript · Tailwind CSS</span>
    </div>
  </footer>
);
