import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Contact</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input className="mt-1 w-full rounded-xl border border-border bg-bg px-3 py-2 outline-none focus:ring-2 focus:ring-accent/50" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium">Phone / WhatsApp</label>
                <input className="mt-1 w-full rounded-xl border border-border bg-bg px-3 py-2 outline-none focus:ring-2 focus:ring-accent/50" placeholder="+91..." />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea className="mt-1 min-h-[120px] w-full rounded-xl border border-border bg-bg px-3 py-2 outline-none focus:ring-2 focus:ring-accent/50" placeholder="Cake size, flavor, date…" />
              </div>
              <Button type="submit" className="w-full">Send Inquiry (wire backend next)</Button>
              <p className="text-xs text-muted">Next: connect form to email/WhatsApp or API.</p>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3">
            <div className="text-lg font-semibold">Quick Actions</div>
            <Button href="/menu" className="w-full">View Menu</Button>
            <Button href="/order" variant="secondary" className="w-full">Open Cart</Button>

            <div className="mt-4 rounded-xl border border-border bg-accent/5 p-4 text-sm text-muted">
              <div className="font-medium text-fg">Business Hours</div>
              <div className="mt-1">Mon–Sun: 10:00 AM – 9:00 PM</div>
              <div className="mt-3 font-medium text-fg">Location</div>
              <div className="mt-1">Add address + Google Map embed next phase.</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
