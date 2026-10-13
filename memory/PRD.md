# Avora Homes — PRD

## Original Problem Statement
Build a premium landing page / storefront for **Avora Homes**, an Indian home-decor brand where **cement pots, decorative planters and designer vases are the hero products**. Priorities: P1 Pots & Planters, P2 Vases, P3 Wall Art & Paintings, P4 Other Decor. Headline "Elevate Your Space, Naturally." Tagline: "Sculptural Pots. Beautiful Vases. Thoughtful Living." Ordering happens via WhatsApp (+91 7061712908) with prefilled product/price/quantity messages; plus a simple enquiry form.

## Architecture
- **Frontend**: React (CRA/craco) + Tailwind + Framer Motion + Lenis smooth scroll, single-page storefront at `/`
- **Backend**: FastAPI at `/api` — `POST /api/enquiries`, `GET /api/enquiries`
- **DB**: MongoDB (`enquiries` collection, uuid string ids)
- **Catalogue**: static product data (`src/data/products.js`) with curated editorial imagery
- **Ordering**: `wa.me/917061712908` deep links with prefilled messages (`src/lib/whatsapp.js`)

## User Personas
- Design-conscious Indian homeowner styling a living room / balcony
- Interior designer sourcing statement planters & vases
- Gift buyer looking for premium handcrafted decor

## Core Requirements (static)
1. Pots & vases hero-first homepage, editorial warm-neutral art direction
2. Every product: photo, name, price (₹), dimensions, finish, availability, colours
3. "Order on WhatsApp" + "Ask a Question" per product; prefilled WhatsApp message
4. Enquiry form (name, phone, city, interest, message) saved to backend
5. Homepage section order: Hero → Pots → Vases → Featured → Styling Ideas → Wall Art → Decor → Shop by Room → Our Story → Reviews/FAQs/Footer

## Implemented (October 2026)
- Kinetic hero: masked line-by-line headline reveal, arch-clipped parallax hero image, floating bestseller card with one-tap WhatsApp order
- Slow editorial marquee strip; film-grain overlay; Lenis momentum scrolling; original SVG logo mark + favicon
- Product catalogue: 4 cement pots, 4 vases, 2 wall-art sets, 1 decor object — each with ₹ price, dimensions, finish, availability, colour swatches
- Quick-view modal with quantity stepper feeding the prefilled WhatsApp order message
- Featured "Cement Edit" spotlight (dark section), Styling Ideas with "Shop this look" WhatsApp links, Shop-by-Room tabs (Living/Balcony/Entryway/Workspace)
- Our Story with parallax artisan image, Reviews, FAQ accordion, enquiry form (saved to MongoDB, verified end-to-end), footer, floating WhatsApp button
- Verified: enquiry API via curl; UI flows via Playwright screenshots at 375/768/1366px; WhatsApp links point to +91 7061712908 with product name, price, quantity

## Notes / Known Limitations
- Product photos are curated editorial stock — the 5 photos the user uploaded could not be retrieved from the environment; re-upload to swap them in
- Prices, dimensions and availability are illustrative placeholders — easy to edit in `src/data/products.js`
- No admin panel for enquiries yet (readable via `GET /api/enquiries`)

## Backlog
- **P0**: Swap in real product photography; confirm real prices/stock with owner
- **P1**: Collection filters (price, size, material, colour, style); more SKUs per category
- **P1**: Admin view of enquiries
- **P2**: SEO meta/OG/sitemap/JSON-LD (farm-seo-setup skill); blog/styling journal CMS; multi-image product galleries
- **P2**: Razorpay/Stripe online checkout (WhatsApp flow retained as fallback)

## Next Tasks
1. Replace stock imagery with owner's real product photos
2. Add price/size/colour filters to Pots and Vases sections
3. Build a small admin page listing saved enquiries
4. Run SEO setup skill before go-live
