import { Card, CardContent } from "@/components/ui/card";

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Gallery</h1>
      <p className="text-muted">Replace placeholders with real photos (we’ll optimize them next).</p>
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <Card key={i} className="hover:border-accent/30 transition">
            <CardContent>
              <div className="aspect-[4/3] rounded-xl border border-accent/20 bg-accent/10 flex items-center justify-center text-sm text-muted">
                Photo Placeholder {i + 1}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
