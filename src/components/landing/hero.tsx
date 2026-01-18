"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden rounded-xl2 border border-border bg-card/70 p-8 md:p-12 shadow-soft">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute inset-0 opacity-35 bg-[linear-gradient(to_right,rgba(233,162,59,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(233,162,59,0.08)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="space-y-5"
        >
          <p className="inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs">
            Premium • Modern • Approachable
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Café warmth.
            <br />
            <span className="text-primary">Premium bakes.</span>
          </h1>

          <p className="text-muted max-w-prose">
            Inspired by the comfort of a bakery café — cakes, pastries, breads, and custom orders made fresh.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="/menu">Explore Menu</Button>
            <Button href="/order" variant="secondary">Order Now</Button>
          </div>

          <div className="flex gap-3 text-xs text-muted">
            <span className="rounded-full border border-border bg-bg/60 px-3 py-1">Fresh daily</span>
            <span className="rounded-full border border-border bg-bg/60 px-3 py-1">Custom cakes</span>
            <span className="rounded-full border border-border bg-bg/60 px-3 py-1">Pickup/Delivery</span>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
          className="grid gap-4"
        >
          <div className="rounded-xl2 border border-accent/20 bg-card/80 p-5 shadow-soft">
            <div className="text-xs text-muted">Today’s Highlight</div>
            <div className="mt-1 text-lg font-semibold">Chocolate Truffle Cake</div>
            <div className="mt-2 text-sm text-muted">Deep cocoa layers + glossy ganache finish.</div>
          </div>

          <div className="rounded-xl2 border border-border bg-card/80 p-5 shadow-soft">
            <div className="text-xs text-muted">New</div>
            <div className="mt-1 text-lg font-semibold">Mango Dome Pastry</div>
            <div className="mt-2 text-sm text-muted">Seasonal tropical glaze with mousse core.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
