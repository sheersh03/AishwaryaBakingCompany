import Link from "next/link";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({ children, href, variant="primary", className, type="button", onClick }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";
  const styles = {
    primary: "bg-primary text-white shadow-glow hover:translate-y-[-1px] hover:brightness-110 active:translate-y-0",
    secondary: "bg-card text-fg border border-border hover:border-accent/40 hover:shadow-soft",
    ghost: "text-fg hover:bg-accent/10",
  }[variant];

  const cn = clsx(base, styles, className);
  if (href) return <Link className={cn} href={href}>{children}</Link>;
  return <button className={cn} type={type} onClick={onClick}>{children}</button>;
}
