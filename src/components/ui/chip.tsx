import clsx from "clsx";

export function Chip({ children, active, onClick }: { children: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "rounded-full border px-3 py-1 text-xs transition",
        active
          ? "border-accent/40 bg-accent/15 text-fg"
          : "border-border bg-bg/60 text-muted hover:border-accent/30 hover:bg-accent/10"
      )}
    >
      {children}
    </button>
  );
}
