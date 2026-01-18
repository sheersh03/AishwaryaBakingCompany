import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>About Us</h1>
      <Card>
        <CardContent className="space-y-3 text-sm text-muted">
          <p><span className="text-fg font-medium">Aishwarya Baking Company</span> blends bakery-café warmth with modern ordering.</p>
          <p>Premium ingredients, clean flavors, and custom celebration orders made fresh.</p>
          <p className="text-fg font-medium">Custom cakes • Bulk orders • Seasonal specials • Fresh bakes</p>
        </CardContent>
      </Card>
    </div>
  );
}
