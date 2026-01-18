"use client";

import { useEffect, useState } from "react";

const THEMES = ["warm", "chalk", "dark"] as const;
type Theme = (typeof THEMES)[number];

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("warm");

  useEffect(() => {
    const saved = window.localStorage.getItem("abc_theme") as Theme | null;
    const initial = saved && THEMES.includes(saved) ? saved : "warm";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  function cycle() {
    const idx = THEMES.indexOf(theme);
    const next = THEMES[(idx + 1) % THEMES.length];
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("abc_theme", next);
  }

  return (
    <button
      type="button"
      onClick={cycle}
      className="rounded-xl border border-border bg-card px-3 py-2 text-sm hover:border-accent/35 transition"
      aria-label="Change color theme"
      title="Change theme"
    >
      Theme: <span className="text-muted">{theme}</span>
    </button>
  );
}
