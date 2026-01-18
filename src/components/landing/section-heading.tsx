export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center space-y-2">
      <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
        {title}
      </h2>
      {subtitle ? <p className="text-muted max-w-2xl mx-auto">{subtitle}</p> : null}
    </div>
  );
}
