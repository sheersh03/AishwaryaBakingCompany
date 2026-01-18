export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg/60">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center justify-between">
            <p>© {new Date().getFullYear()} Aishwarya Baking Company</p>
            <p className="text-xs">Made by Sheersh with ❤️ love for his 🫶</p>
            <p className="text-xs text-right">Palettes • Fonts • Micro-animations</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
