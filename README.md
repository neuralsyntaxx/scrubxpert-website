# ScrubXpert — Website Source (Next.js 15 / TypeScript / Tailwind)

Flagship B2B website for ScrubXpert, manufactured by E K Industry. Built as a
fully static export — no server required at runtime.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build for deployment

```bash
npm run build
```

This produces a static site in the `out/` folder (because `next.config.mjs`
sets `output: 'export'`). Upload the contents of `out/` to any static host —
Vercel, Netlify, Cloudflare Pages, or a standard cPanel/shared host, which is
likely how `scrubxpert.co.in` is currently hosted.

## What's real vs. placeholder

- **Product data** (`data/products.ts`) is transcribed directly from the
  supplied catalogue — item codes, materials, pack sizes, carton quantities.
  Copy (overview, features, applications) has been written fresh for the web;
  it does not appear in the source catalogue.
- **Retail MRP / offer prices** from the catalogue are intentionally **not**
  shown on the site. This is a B2B wholesale site — showing consumer retail
  pricing would undercut wholesale negotiation and contradicts the brief's
  "no online shopping" requirement. Wholesale pricing is gated behind the
  WhatsApp enquiry flow, as specified.
- **Product photography is extracted from your source catalogue.** Every
  image in `public/products/` is the real packshot pulled directly out of
  the PDF you supplied (via `pdfimages`), cropped to one product per file.
  A few products share a catalogue photo where the source catalogue itself
  used one photo for two SKUs (e.g. the two metallic scourer weights look
  identical in the original catalogue; the two cotton pocha sizes too).
  These are real photos, not placeholders — but they're catalogue-quality
  product-on-plain-background shots, not lifestyle photography. For a
  true "premium, Apple/Aesop-tier" feel per the brief, professional
  photography (clean studio shots, consistent lighting/angle across the
  whole range) is the highest-leverage upgrade you can make to this site.
  The `image` field in `data/products.ts` is the only place you need to
  update when you have new photos.
- **Logo and OG image** (`public/brand/`): the logo mark (`logo-mark.png`) is
  extracted directly from your catalogue PDF — the same round badge used
  throughout it — not a custom-drawn substitute. The OG share-card graphic
  (`og-image.svg`) is still a text-based placeholder; swap it for a version
  with real photography before heavy social sharing.
- **Download Centre**: only the product catalogue PDF is wired up
  (`public/downloads/scrubxpert-product-catalogue.pdf` — you'll need to add
  this file; it isn't included). Company Profile and Certifications are
  marked "available on request" until those documents exist.

## Data quality flags from the source catalogue (worth checking with your printer)

- Item code **EK-12050** appears twice in the catalogue — once for the 500g
  grass broom and once for the microfiber cloth. I've kept the broom's code
  as printed and suffixed the microfiber cloth as `EK-12050-M` so the two
  products don't collide on the site. Worth confirming the correct code with
  your supplier/printer for the next catalogue print run.
- The catalogue's item name field reads "Surub Xpert" throughout (rather than
  "Scrub Xpert") — treated as a print typo and corrected sitewide.

## Project structure

```
app/                  Routes (App Router)
  page.tsx            Homepage
  products/           Product listing + /products/[slug] detail
  categories/[slug]/  Category pages
  manufacturing/       industries/  distributors/  contact/  downloads/
  sitemap.ts robots.ts Auto-generated at build time
components/           Reusable UI (Header, Footer, ProductCard, etc.)
data/                 Single source of truth: products.ts, categories.ts,
                      industries.ts, company.ts — add new SKUs here only
lib/                  Utilities
types/                Shared TypeScript types
public/               Static assets (placeholder images, logo, favicon)
```

## Adding a new product

Add one object to the `products` array in `data/products.ts`. Every page
(listing, category, related products, sitemap) picks it up automatically —
no other file needs to change.

## Design system

- **Colour**: deep petrol teal primary (`#0E3B36`), warm paper background
  (`#FAF9F6`), brass accent (`#B08D57`) used sparingly, desaturated sage for
  secondary surfaces.
- **Type**: Space Grotesk (display), Inter (body), IBM Plex Mono (spec data
  and eyebrows) — loaded via `next/font/google`, self-hosted at build time.
- **Signature element**: the "spec strip" — a horizontal monospace data bar
  (`components/SpecStrip.tsx`) that always carries real product/company data
  (item codes, pack sizes, territory info), styled like a manufacturing spec
  sheet rather than a decorative stat block.

## WhatsApp integration

All CTAs route through `data/company.ts`'s `whatsappMessage(context)` helper,
which pre-fills a message including the product or page context where
relevant, per the brief.
