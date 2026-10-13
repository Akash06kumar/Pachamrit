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
- Expanded catalogue: 11 pots & planters, 14 vases, 2 wall-art sets, 4 decor objects — each with ₹ price, dimensions, finish, availability, colour swatches; many with multi-photo galleries (thumbnail switcher in quick view)
- The owner's 5 real product photos are live (hosted at /products/*.jpg): Sorrento Marble-Gold Trio, Gilded Vine Tall Vase, Cuzco Tribal Art Vase, Jaipur Blooms Handpainted Vase, Folk Flora Handpainted Planter; Marble Trio + Gilded Vine lead the Featured edit
- Collection filters on Pots and Vases sections: price buckets, size (Tabletop/Medium/Floor), material (Cement/Ceramic/Terracotta/Marble), colour family — with result counts, reset and empty state
- Private admin page at /admin (JWT auth, httpOnly cookie, bcrypt hash, seeded admin, brute-force lockout): login → enquiry inbox with name/phone/city/interest/message/date, refresh, logout; direct WhatsApp link per enquiry phone
- Enquiry status workflow: every enquiry carries New / Read / Replied; admin can mark read or replied (PATCH /api/admin/enquiries/{id}/status), filter tabs with live counts (All/New/Read/Replied), replied state persists
- Product search: navbar magnifier opens a full-screen search dialog matching all 31 products by name, material, finish and colour; results are full product cards (order/ask/quick-view all work; quick view opens standalone after the search dialog closes to avoid nested-dialog issues)
- Quick-view modal with quantity stepper feeding the prefilled WhatsApp order message
- Featured "Cement Edit" spotlight, Styling Ideas, Shop-by-Room tabs, Our Story, Reviews, FAQ accordion, enquiry form, footer, floating WhatsApp button
- Verified: auth chain via curl (401 unauth, login, /me, protected list); UI via Playwright (filters, gallery, admin login/logout, enquiry dashboard)

## Notes / Known Limitations
- Remaining stock photos are curated editorial images; new additions (Kavya, Aanya, Soma, Mira, etc.) are MOCKED imagery — swap with real photos as they are shot
- Prices, dimensions and availability are illustrative placeholders — easy to edit in `src/data/products.js`
- Admin credentials: admin@avorahomes.in / Avora@2026 (change ADMIN_PASSWORD in backend/.env; the seed re-syncs the hash on restart)

## Backlog
- **P0**: Confirm real prices/stock; shoot real photos for the new stock-imagery SKUs
- **P1**: Admin: mark enquiries as read/replied; delete spam
- **P2**: SEO meta/OG/sitemap/JSON-LD (farm-seo-setup skill); blog/styling journal CMS
- **P2**: Razorpay/Stripe online checkout (WhatsApp flow retained as fallback)

## Next Tasks
1. Replace remaining stock imagery with real photos as they're shot
2. Add delete/spam control to the admin enquiry inbox
3. Run SEO setup skill before go-live
4. Add more real SKUs as the catalogue grows
