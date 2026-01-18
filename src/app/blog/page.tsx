import { Card, CardContent } from "@/components/ui/card";

const posts = [
  { title: "Seasonal Specials", excerpt: "Limited-time cakes and pastries inspired by the season." },
  { title: "Artisan Bread Day", excerpt: "Fresh loaves, sourdough, and buttery breadsticks." },
  { title: "Custom Cake Guide", excerpt: "How to choose flavors, size, and design for your event." }
];

export default function BlogPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Blog / News</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <Card key={p.title} className="hover:border-accent/30 transition">
            <CardContent>
              <div className="text-lg font-semibold">{p.title}</div>
              <p className="mt-2 text-sm text-muted">{p.excerpt}</p>
              <p className="mt-4 text-xs text-muted">Next: full blog pages + CMS integration.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
