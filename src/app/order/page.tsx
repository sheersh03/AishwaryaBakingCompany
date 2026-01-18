"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/components/cart/cart-store";

const WHATSAPP_NUMBER = "7017569620";

export default function OrderPage() {
  const { items, total, setQty, remove, clear } = useCart();

  const message = encodeURIComponent(
    `Hi Aishwarya Baking Company! I want to place an order:

` +
      items.map((x) => `• ${x.product.name} x ${x.qty} = ₹${x.product.price * x.qty}`).join("\n") +
      `

Total: ₹${total}

Pickup/Delivery:
Date/Time:
Address (if delivery):`
  );

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Your Order</h1>
        <p className="text-muted">Fast MVP checkout via WhatsApp.</p>
      </header>

      <Card>
        <CardContent className="space-y-4">
          {items.length === 0 ? (
            <p className="text-muted">Your cart is empty. Add items from Menu.</p>
          ) : (
            <>
              <div className="space-y-3">
                {items.map((x) => (
                  <div key={x.product.id} className="flex items-center justify-between gap-3 border-b border-border pb-3">
                    <div>
                      <div className="font-medium">{x.product.name}</div>
                      <div className="text-sm text-muted">₹{x.product.price} each</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="rounded-lg border border-border px-2 py-1 hover:border-accent/40 transition" onClick={() => setQty(x.product.id, x.qty - 1)} aria-label="Decrease quantity">−</button>
                      <span className="w-8 text-center">{x.qty}</span>
                      <button className="rounded-lg border border-border px-2 py-1 hover:border-accent/40 transition" onClick={() => setQty(x.product.id, x.qty + 1)} aria-label="Increase quantity">+</button>
                      <button className="rounded-lg border border-border px-3 py-1 text-sm hover:border-accent/40 transition" onClick={() => remove(x.product.id)}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">Total</div>
                <div className="text-lg font-semibold">₹{total}</div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={waLink} className="flex-1">Checkout on WhatsApp</Button>
                <Button variant="secondary" className="flex-1" onClick={clear}>Clear Cart</Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
