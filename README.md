# ursus.kg

Website for **ЗАО «Урсус» / JSC URSUS** — a cheese factory in the village of Temen-Suu,
Moskovsky District, Chui Region, Kyrgyzstan. The plant dates to **1940** (printed on every
pack), and the joint-stock company has run the business since **1999**. The brand is the
polar bear (Latin *Ursus*); products also carry the trademark **«Темен Суу» / "Temen Suu"**.
Natural cheese, butter, milk and cream — **no vegetable fats**.

A bright, modern, **multi-page static site** (turquoise theme). No build step — every push to
`main` auto-deploys on **Cloudflare Pages**.

## Pages
| File | Purpose |
|---|---|
| `index.html` | Home — hero, trust marquee, featured products, quality, about teaser, CTA |
| `catalog.html` | Full product catalog with category filters |
| `about.html` | Company story, numbers, certificates, partners |
| `news.html` | News / blog index |
| `news/*.html` | SEO articles (cheese guide, "no vegetable fats", ISO 22000 news) |
| `contact.html` | Contacts, working form (Web3Forms), map |
| `404.html` | Branded not-found page |

## Shared assets
- `assets/css/site.css` — design system (turquoise palette, components, animations, responsive)
- `assets/js/site.js` — i18n engine (RU/KY/EN, persisted in `localStorage`), nav, scroll reveals,
  count-up, catalog rendering
- `assets/js/products.js` — the product catalog data (trilingual), driven by the real SKUs
- `images/` — web-optimised assets: `logo.png`, product cutouts `p-*.png` (transparent PNG),
  and lifestyle/section photos (`hero-board`, `life-*`, `about-board`, `cut-interior`, `assortment`, `banner-row`)

## SEO
- Per-page `<title>`, meta description, canonical, OpenGraph/Twitter tags
- JSON-LD: `Organization` (home) and `Article` (each post)
- `sitemap.xml`, `robots.txt`, `_headers` (caching + security headers for Cloudflare Pages)

## Real company data (verified from official docs — see `data/DATA.md`)
- **Address:** Чуйская обл., Московский р-н, с. Темен-Суу, ул. Сырзаводская 3 (724614)
- **Reception:** +996 (312) 45-35-62 · **Sales:** +996 772 54-69-21 · **Accounting:** +996 (3131) 5-87-50
- **Email:** zaoursus2003@gmail.com · INN 02503200310189
- **Capacity:** up to 60 t milk/day · **Staff:** 63 + 80 suppliers
- **Certs:** ISO 22000:2018 (SGS, to 2027), Halal (TM «Темен Суу»), HACCP; Honorary Diploma of KR (2017)
- **Cheeses:** Голландский (Классический / Сливочный / Элитный / Темен-Сууйский Элитный),
  Сметанковый, Теменсуйский, Рижский, Эдам, Алтайский, Костромской, Пошехонский, Просто Сыр,
  Колбасный копчёный; plus butter (72.5 / 82.5%), milk and cream (20/30/40%)
- **Exports:** Kazakhstan, Russia (EAEU)

## Notes / TODO
- The contact form uses **Web3Forms** — set a real `access_key` in `contact.html`
  (free at web3forms.com) to receive submissions; until then it falls back to opening the
  visitor's mail app.
- News articles are written in Russian (the core RU/KY/EN switch covers all site chrome,
  catalog, home, about and contact).
- Source assets & company documents live in `data/` and are **git-ignored** (they include
  bank details and 400+ raw photos — never deployed). Only `data/DATA.md` (the asset map) is tracked.
