"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "Ananya", text: "The truffle cake is insanely rich and premium. Perfect for birthdays." },
  { name: "Rohit", text: "Fresh breads and super polite staff. Love the café vibe." },
  { name: "Meera", text: "Packaging is elegant and the pastries taste like a high-end bakery." }
];

export function Testimonials() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {data.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.06 }}
        >
          <Card className="hover:border-accent/30 transition">
            <CardContent>
              <div className="text-sm font-semibold">{t.name}</div>
              <p className="mt-2 text-sm text-muted">“{t.text}”</p>
              <div className="mt-4 text-xs text-muted">★★★★★</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
