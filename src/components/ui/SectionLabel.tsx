interface SectionLabelProps {
  index: string;
  title: string;
  description?: string;
}

export const SectionLabel = ({ index, title, description }: SectionLabelProps) => (
  <div className="mb-10 flex flex-col gap-3 sm:mb-14">
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-sm text-signal-text">{index}</span>
      <span className="h-px flex-1 max-w-16 bg-line" />
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">Rahim Iqbal</span>
    </div>
    <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
      {title}
    </h2>
    {description && (
      <p className="max-w-2xl text-base text-muted sm:text-lg">{description}</p>
    )}
  </div>
);
