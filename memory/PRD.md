# PachAmrit — PRD

## Current Product
**PachAmrit** — a premium Ayurvedic digestive churan brand (rebranded from the earlier Avora Homes decor storefront at the owner's request). Sells churan for digestion & bloating relief in 50g and 100g packs. Ordering via WhatsApp (+91 7061712908) with prefilled messages; enquiry form + private admin inbox.

## Architecture
- **Frontend**: React (CRA/craco) + Tailwind + Framer Motion + Lenis; single-page storefront at `/`, admin at `/admin`
- **Backend**: FastAPI `/api` — public `POST /api/enquiries`; JWT auth (`/api/auth/login|logout|me`); protected `GET /api/admin/enquiries`, `PATCH /api/admin/enquiries/{id}/status`
- **DB**: MongoDB (`enquiries`, `users`, `login_attempts`)
- **Catalogue**: static (`src/data/products.js`) — 3 packs (50g ₹149 / 100g ₹269 / Combo ₹379), 6 ingredients with benefits, reviews, FAQs
- **Theme**: apothecary-warm Ayurvedic — deep herbal green #2A3D2C, turmeric amber #D9822B, warm cream #FBF7EF, terracotta #B85334, brass #C89D5C; Cormorant Garamond + Plus Jakarta Sans
- **Logo**: original SVG mortar-&-pestle mark (green bowl, amber pestle) + "PachAmrit" wordmark; same mark as favicon

## Homepage Sections
Hero (kinetic reveal "A Happier Gut, the Natural Way") → Marquee → Shop Packs → Ingredients (6 cards w/ benefits) → Benefits (dark green, 4 cards) → How to Use (3 steps + lifestyle arch image) → Our Story → Reviews → FAQs & Enquiry → Footer. Search dialog (navbar), floating WhatsApp button, per-pack Order/Ask WhatsApp buttons, quick-view modal with qty stepper.

## Implemented (October 2026)
- Full rebrand to PachAmrit: palette, typography accents, logo + favicon, all copy
- Churan catalogue: 50g/100g/combo packs with price, servings, availability; ingredients showcase; benefits; how-to-use; story; churan reviews & FAQs
- WhatsApp checkout prefilled with pack, price, quantity to +91 7061712908
- Enquiry form (interest options: 50g/100g/Combo/Bulk/General) → MongoDB → admin inbox with New/Read/Replied workflow
- Verified previously: auth chain, enquiry flow, search, status PATCH — re-verified for rebrand in preview

## Notes / Known Limitations
- Pack/ingredient photos are MOCKED curated stock (spice photography) — owner to supply real pack shots + real logo; the earlier uploaded logo art was for Avora Homes
- Prices ₹149/₹269/₹379 are placeholders — confirm with owner
- Old Avora product images remain in /public/products (unused, harmless)

## Backlog
- **P0**: Real pack photography + real PachAmrit logo file; confirm prices & FSSAI/licence footer details
- **P1**: Nutritional info / ingredients-weight table per pack; subscription (monthly refill) offer
- **P2**: SEO setup (farm-seo-setup skill); Razorpay checkout; delivery pincode checker

## Next Tasks
1. Swap in real pack photos and logo when the owner uploads them
2. Confirm final prices, serving counts, shelf life and any licence/legal footer lines
3. Run SEO setup skill before go-live
4. Add subscription/bundle offers if the owner wants recurring orders
