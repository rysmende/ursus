# ursus.kg

Single-page website for **ЗАО «Урсус»** — a cheese factory in the village of Temen-Suu,
Moskovsky District, Chui Region, Kyrgyzstan. Founded in 1940; the brand is the polar bear
(Latin *Ursus*). Produces natural cheese, butter, milk and cream — no vegetable fats.

Hosted on Cloudflare Pages. Every push to `main` triggers an automatic deploy.

## Features
- Trilingual interface — **Russian / Kyrgyz / English** (in-page switcher, no reload)
- Dark wood-themed design with a product catalog (Cheese / Butter / Dairy filters)
- Scroll-driven 3D cheese wheel as an ambient background (Three.js, with a photo fallback)
- Sections: hero, catalog, about, quality, contact (with map)

## Real company data baked in
- **Address:** Chui Region, Moskovsky District, Temen-Suu village, Syrzavodskaya St 3
- **Reception:** +996 (312) 45-35-62 · **Sales:** +996 772 54-69-06 (WhatsApp +996 554 05-89-49)
- **Email:** info@ursus.kg
- **Cheeses:** Gollandsky (+ Classic/Creamy), Poshekhonsky, Kostromskoy, Rizhsky, Altaysky,
  Edam, Temensuysky (signature), smoked Kolbasny; plus Krestyanskoe butter, drinking milk, cream
- Capacity ~30 t/day, 70+ staff, Halal-certified, sold in Kyrgyzstan and Kazakhstan

## Files
- `index.html` — the entire site (single static page, embedded CSS + JS)
- `images/` — real URSUS assets recovered from the original ursus.kg (logo, product photos)
  plus a few generic dairy stand-ins (`milk.jpg`, `butter.jpg`, `cream.jpg`, `factory.jpg`)

## Notes
- Real per-cheese photos are limited; some cards reuse a handful of authentic cheese shots.
- No prices are shown (the factory works wholesale; pricing is via the sales department).
