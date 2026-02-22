# NAH — Website

## Brand
- Tokens: `C:\Users\david\OneDrive\Documents\SNIPS Second Brain\design-tokens\nah\tokens.json`
- Archetype: Outlaw/Rebel (Caregiver shadow)
- Voice: The brutally honest mate at the beach. Dark humour, Aussie slang, blunt-force public health wrapped in laughs.
- Primary tagline: "Mate, you're cooked."
- Domain: getnah.com.au

## Tech Stack
- Framework: Next.js 16 (App Router)
- Styling: Tailwind CSS v4 (CSS-based config via `@theme inline`)
- Email: Klaviyo (waitlist capture via API route)
- Deployment: Vercel (auto-deploy from GitHub)
- Repo: https://github.com/ferrisbueller92/nah

## Colour Palette
- Base: #FFF8F0 (Sun White)
- Contrast: #1A1A1A (Charcoal)
- Accent: #FE8510 (Sun Orange)
- Error: #D92B2B (Danger Red — skin cancer stats only)
- Gradient: sunBurst (135deg, #F6C47D → #FEA609 → #FE8510 → #F47800)

## Typography
- Display: Anton (headlines, hero, uppercase always)
- Body: DM Sans (body copy, buttons, UI)
- Accent: Permanent Marker (dark humour callouts, max 2 per layout)
- Data: Space Mono (stats, pricing, technical)

## Rules
- All colours via Tailwind token classes — never raw hex
- 0px border radius (sharp corners — Outlaw archetype)
- Mobile-first responsive approach
- Australian English for all copy
- Gradient sunBurst hero is the signature look
- Danger Red only for negative health statistics

## Page Structure
1. Hero (gradient sunBurst, "MATE, YOU'RE COOKED.", waitlist CTA)
2. Stats bar (2 in 3, 10 sec, $4, 90%)
3. How it works (Walk In → Get Sprayed → Walk Out)
4. Warning label (dark humour section)
5. FAQ (NAH voice)
6. Final CTA (waitlist repeat)
7. Footer
