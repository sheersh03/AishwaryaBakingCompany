import { Hero } from "@/components/landing/hero";
import { SectionHeading } from "@/components/landing/section-heading";
import { Testimonials } from "@/components/landing/testimonials";
import { CTA } from "@/components/landing/cta";
import { products } from "@/lib/products";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const featured = products
    .filter((p) => p.tags.includes("best-seller") || p.tags.includes("seasonal"))
    .slice(0, 3);

  return (
    <div className="space-y-16">
      <Hero />

      <section className="space-y-8">
        <SectionHeading
          title="Signature Creations"
          subtitle="A few favorites customers keep coming back for — premium taste with café warmth."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((p) => (
            <Card key={p.id} className="group hover:border-accent/30 transition">
              <CardContent>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs text-muted">{p.category}</div>
                    <div className="mt-1 text-lg font-semibold">{p.name}</div>
                  </div>
                  <div className="rounded-lg bg-accent/10 px-2 py-1 text-sm">₹{p.price}</div>
                </div>
                <p className="mt-3 text-sm text-muted">{p.description}</p>
                <div className="mt-5">
                  <Button href="/menu" variant="secondary" className="w-full">
                    Explore all items
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading title="Testimonials" subtitle="Real words from real customers." />
        <Testimonials />
      </section>

      <CTA />
    </div>
  );
}
