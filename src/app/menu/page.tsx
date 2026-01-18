"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { products, type Product } from "@/lib/products";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { useCart } from "@/components/cart/cart-store";

const categories: Array<Product["category"] | "All"> = ["All", "Cakes", "Pastries", "Breads", "Cookies", "Beverages"];

export default function MenuPage() {
  const { add } = useCart();
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [pulseCounts, setPulseCounts] = useState<Record<string, number>>({});
  const [burstCounts, setBurstCounts] = useState<Record<string, number>>({});

  const filtered = useMemo(() => (cat === "All" ? products : products.filter((p) => p.category === cat)), [cat]);

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Menu</h1>
        <p className="text-muted">Browse items and add to cart. Checkout via WhatsApp.</p>

        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <Chip key={c} active={c === cat} onClick={() => setCat(c)}>{c}</Chip>
          ))}
        </div>
      </header>

      <motion.div
        key={cat}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="grid gap-4 md:grid-cols-3"
      >
        {filtered.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="h-full"
          >
            <Card className="group h-full hover:border-accent/35 transition">
              <CardContent className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs text-muted">{p.category}</div>
                    <div className="mt-1 text-lg font-semibold">{p.name}</div>
                  </div>
                  <div className="rounded-lg bg-accent/10 px-2 py-1 text-sm">₹{p.price}</div>
                </div>

                <p className="mt-3 text-sm text-muted">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-bg/60 px-2 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <motion.div
                    key={`${p.id}-${pulseCounts[p.id] ?? 0}`}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative"
                  >
                    <Button
                      className="w-full"
                      onClick={() => {
                        add(p, 1);
                        setPulseCounts((prev) => ({ ...prev, [p.id]: (prev[p.id] ?? 0) + 1 }));
                        setBurstCounts((prev) => ({ ...prev, [p.id]: (prev[p.id] ?? 0) + 1 }));
                      }}
                    >
                      Add to cart
                    </Button>

                    <motion.div
                      key={`burst-${p.id}-${burstCounts[p.id] ?? 0}`}
                      className="pointer-events-none absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      {[
                        { x: -26, y: -24, r: 6, c: "bg-amber-300" },
                        { x: 10, y: -32, r: 7, c: "bg-pink-300" },
                        { x: 28, y: -18, r: 5, c: "bg-sky-300" },
                        { x: -8, y: -40, r: 6, c: "bg-lime-300" },
                        { x: 40, y: -34, r: 6, c: "bg-orange-300" },
                      ].map((b, i) => (
                        <motion.span
                          key={i}
                          className={`absolute left-1/2 top-1/2 ${b.c} rounded-full`}
                          style={{ width: b.r * 2, height: b.r * 2, marginLeft: -b.r, marginTop: -b.r }}
                          initial={{ x: 0, y: 0, scale: 0.8, opacity: 0 }}
                          animate={{ x: b.x, y: b.y, scale: 1.1, opacity: 1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                      ))}
                    </motion.div>

                    <motion.div
                      key={`hooray-${p.id}-${burstCounts[p.id] ?? 0}`}
                      className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
                      initial={{ opacity: 0, y: 8, scale: 0.9 }}
                      animate={{ opacity: [0, 1, 0], y: [-4, -20], scale: [0.9, 1.05, 0.95] }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                      <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold tracking-wide text-accent">
                        Hooray!
                      </span>
                    </motion.div>
                  </motion.div>
                </div>

                <div className="mt-4 text-xs text-muted">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-accent/70" />
                    Freshly prepared
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
