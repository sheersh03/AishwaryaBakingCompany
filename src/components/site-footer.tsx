export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg/60">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Aishwarya Baking Company</p>
          <p className="text-xs">Palettes • Fonts • Micro-animations</p>
        </div>
      </div>
    </footer>
  );
}
