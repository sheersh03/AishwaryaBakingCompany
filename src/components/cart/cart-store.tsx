"use client";

import { useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/products";

export type CartItem = { product: Product; qty: number };
const KEY = "abc_cart_v1";
const listeners = new Set<(items: CartItem[]) => void>();
let cache: CartItem[] | null = null;

function read(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}
function write(items: CartItem[]) {
  try { window.localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
}

function getCache() {
  if (cache === null) {
    if (typeof window === "undefined") return [];
    cache = read();
  }
  return cache;
}

function updateCache(next: CartItem[]) {
  cache = next;
  write(next);
  listeners.forEach((listener) => listener(next));
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => getCache());

  useEffect(() => {
    setItems(getCache());
    const listener = (next: CartItem[]) => setItems(next);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const count = useMemo(() => items.reduce((a, x) => a + x.qty, 0), [items]);
  const total = useMemo(() => items.reduce((a, x) => a + x.qty * x.product.price, 0), [items]);

  function add(product: Product, qty = 1) {
    const prev = getCache();
    const idx = prev.findIndex((p) => p.product.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        updateCache(copy);
        return;
      }
    updateCache([...prev, { product, qty }]);
  }
  function remove(productId: string) { updateCache(getCache().filter((x) => x.product.id !== productId)); }
  function setQty(productId: string, qty: number) {
    updateCache(getCache().map((x) => (x.product.id === productId ? { ...x, qty: Math.max(1, qty) } : x)));
  }
  function clear() { updateCache([]); }

  return { items, count, total, add, remove, setQty, clear };
}
