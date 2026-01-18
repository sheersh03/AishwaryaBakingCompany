"use client";
import Link from "next/link";
import { useCart } from "./cart-store";

export function CartButton() {
  const { count } = useCart();
  return (
    <Link href="/order" className="rounded-xl border border-border bg-card px-3 py-2 text-sm hover:border-accent/35 transition">
      Cart <span className="text-muted">({count})</span>
    </Link>
  );
}
