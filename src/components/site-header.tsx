"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CartButton } from "@/components/cart/cart-button";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [isLogoOpen, setIsLogoOpen] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!isLogoOpen) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLogoVisible(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isLogoOpen]);

  useEffect(() => {
    if (!isLogoOpen) {
      return;
    }
    const id = requestAnimationFrame(() => setIsLogoVisible(true));
    return () => cancelAnimationFrame(id);
  }, [isLogoOpen]);

  useEffect(() => {
    if (isLogoVisible) {
      return;
    }
    if (!isLogoOpen) {
      return;
    }
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setIsLogoOpen(false);
    }, 220);
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, [isLogoVisible, isLogoOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setIsLogoOpen(true);
            }}
            className="h-14 w-14 overflow-hidden rounded-xl bg-white shadow-glow transition hover:scale-105"
            aria-label="Open logo preview"
          >
            <img src="/logo.png" alt="Aishwarya Baking Company logo" width={56} height={56} className="h-full w-full object-cover" />
          </button>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
              Aishwarya
            </div>
            <div className="text-xs text-muted">Baking Company</div>
          </div>
        </Link>

        <nav className="hidden gap-2 text-sm md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-full border border-transparent px-3 py-1.5 text-muted hover:border-accent/40 hover:bg-accent/10 hover:text-fg transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CartButton />
          <Link href="/menu" className="rounded-xl border border-accent/30 bg-accent/10 px-3 py-2 text-sm hover:bg-accent/15 transition">
            Order Fresh
          </Link>
        </div>
      </div>
      {isLogoOpen ? (
        <div
          className={`fixed inset-0 z-50 grid place-items-center p-6 transition-opacity duration-300 ${isLogoVisible ? "bg-black/70 opacity-100" : "bg-black/0 opacity-0"}`}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-zoom-out"
            onClick={() => setIsLogoVisible(false)}
            aria-label="Close logo preview"
          />
          <img
            src="/logo.png"
            alt="Aishwarya Baking Company logo"
            className={`relative mx-auto my-auto h-auto max-h-[80vh] w-auto max-w-[80vw] rounded-2xl bg-white shadow-2xl transition-transform duration-300 ease-out ${isLogoVisible ? "scale-100" : "scale-90"}`}
          />
        </div>
      ) : null}
    </header>
  );
}
