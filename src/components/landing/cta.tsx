"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="rounded-xl2 border border-border bg-card/70 p-8 md:p-10 shadow-soft text-center"
    >
      <h3 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
        Ready to order something special?
      </h3>
      <p className="mt-2 text-muted">Pick a favorite from the menu and checkout via WhatsApp.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button href="/menu">View Menu</Button>
        <Button href="/order" variant="secondary">Open Cart</Button>
      </div>
    </motion.section>
  );
}
