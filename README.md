# Aishwarya Baking Company — Phase 3
Next.js 14 store prototype with a curated dessert menu, premium theme palettes, animated interactions, and a guided checkout that funnels orders through WhatsApp for a real-world storefront feel.

## Highlights
- **Premium experience** with warm, chalk, and dark palettes plus a global theme toggle for on-the-fly styling.
- **Typography** powered by `next/font` with Playfair Display for headings and Inter for body copy.
- **Interactive UI** includes hover-lift cards, spring-based reveals, and animated state changes built with `framer-motion`.
- **Commerce flow** featuring menu filtering, a mini cart, and a WhatsApp checkout shortcut for fast customer outreach.
- **Packed for delivery**: Docker + docker-compose configs make it easy to run the app inside containers locally or in CI.

## Tech Stack
- **Framework**: Next.js 14 + App Router (React 18, TypeScript-backed).
- **Styling**: Tailwind CSS with utility-first design and custom animation triggers.
- **Animations**: Framer Motion for physics-based micro-interactions.
- **Deployment**: Dockerfile + docker-compose for containerized development or staging builds.

## Getting Started
### Prerequisites
- Node.js 20+ and npm (or yarn) installed.
- Docker + docker-compose if you plan to containerize the stack.

### Local development
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` to explore the menu, switch palettes, and test the cart/WhatsApp flow.

### Production build
```bash
npm run build
npm start
```
Use `npm run build` before deploying to ensure TypeScript and Tailwind generate optimized artifacts.

### Docker
```bash
docker-compose up --build
```
This spins up the app inside the project container, matching the production-indexed Next.js environment.

## Configuration Notes
- **Theme colors** and palette tokens live under `src/app` styles and Tailwind configuration—update `tailwind.config.ts` to extend or tweak.
- **WhatsApp checkout** uses `WHATSAPP_NUMBER` in `src/app/order/page.tsx`; change that constant to point to the store owner’s number before publishing.
- **Menu items** and layout components are defined inside `src/app/menu` and `src/app/components`; adjust filtering logic or add new cards if needed.

## About
Designed as a showcase of a boutique bakery experience, this phase focuses on polish—animated reveals, carefully-picked fonts, theme toggling, and a frictionless WhatsApp cart checkout round out the demo.
