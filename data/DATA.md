# URSUS — Data & Asset Map

This file maps everything in `data/` and records the **verified company facts** extracted
from the official documents. It is the source of truth for the website copy. Keep it updated.

> Sources: `Анкета профиль компании.docx` (company profile), `РЕЗЮМЕ ЗАО УРСУС new.docx`
> (company resume), `Сертификат СЖС 24-27год.PDF` (SGS ISO 22000), `Халал 2022.PDF`,
> `ursus/Этикетка.jpg` (product label), and on-pack text.

---

## 1. Verified company facts

| Field | Value | Source |
|---|---|---|
| Legal name | ЗАО «УРСУС» / Closed Joint-Stock Company "URSUS" (ЖАК in Kyrgyz) | docs |
| Brand | «Урсус» (Latin *Ursus* = bear; **polar-bear** logo) | label |
| Product trademark | **«Темен Суу» / "Temen Suu"** (used on the Halal cert) | Halal PDF |
| **Plant founded** | **1940** ("Завод основан в 1940" printed on the pack label) | label |
| **Company (ЗАО) operating since** | **1999** (resume) / **2003** (profile) — legal entity | docs |
| Sector | Milk processing & manufacture of dairy food products | docs |
| **Daily milk processing** | **60 tonnes/day** | resume |
| **Staff** | **63 full-time** employees + 80+ suppliers | resume |
| President / Chairman | Кадыркулов Нурлан Анарбекович | docs |
| Contact person | Кыдыралиев Азис Адильканович | profile |
| INN | 02503200310189 · ОКПО 23157129 | resume |
| Address | Кыргызская Республика, Чуйская обл., Московский р-н, с. Темен-Суу, ул. Сырзаводская 3 (postal **724614**) | docs/SGS |
| **Email (official)** | **zaoursus2003@gmail.com** | docs |
| Website | www.ursus.kg | docs |
| Phones | +996 312 45 35 62 (приёмная/reception) · +996 3131 5 00 31 · +996 3131 5 87 50 (бухгалтерия) · +996 772 54 69 21 | docs |

### Certificates
- **ISO 22000:2018** — issued by **SGS**, cert № ~1181841, scope: *manufacture of dairy
  products (hard cheese, cheese analogue, dairy butter and pasteurized cream)*, food category
  CI (perishable animal-origin products). **Valid 05 Aug 2024 → 27 May 2027**; certified since 27 May 2021.
- **HALAL** — issued by *Center for Halal Industry Development* (halal.kg), under TM «Темен Суу».
- **HACCP** — implemented (mentioned in resume).
- **Award:** "Почётная Грамота" of the Kyrgyz Republic, by decree of President A. Atambayev, **31.08.2017**.

### Markets & partners
- **Exports to:** Republic of Kazakhstan, Russian Federation (target = EAEU / ЕАЭС).
- **Domestic clients:** Кондитерский дом «Куликовский», образовательный комплекс «Илим», «ЮВИС».
- **Kazakhstan:** ТОО «Куаныш-Фуд», «Компания-Камертон», «JLC-Сут», «Номад и Ко».
- **Russia:** ООО «Импэкс-Алтай».

---

## 2. Product line (real, from docs + label + Halal cert)

HS codes from the company profile: cream `0401503900`, butter `0405101100`, hard rennet cheese `0406908700`.

**Hard cheeses (твёрдый сычужный сыр):**
- **Голландский сливочный** (Dutch Creamy) — 45% fat in dry matter. Per label: 342 kcal/100g,
  protein 21.15 g, fat 27.81 g, vit A 0.22 mg, B2 0.03 mg; shelf life 90 days at +2…+8 °C; ГОСТ 7616-85.
  Also made at **35% / 45% / 50%** fat variants.
- **Литовский** (Lithuanian) — 35% fat.
- **Просто Сыр** (packaged "Just Cheese").
- **Столичный** (Stolichny).
- (milk-fat-substitute "Голландский" analogue also listed on Halal cert)

**Butter:** Масло сливочное **72.5%** and **82.5%** fat.

**Cream (pasteurized):** from cow's milk **20% / 30% / 40%**.

**Milk:** pasteurized drinking milk.

---

## 3. Asset inventory (data/ folder)

### Documents
| File | What it is |
|---|---|
| `Анкета профиль компании.docx` | Company profile / export questionnaire — sector, products, certs, contacts, awards |
| `РЕЗЮМЕ ЗАО УРСУС new.docx` | Company resume — history, staff, products, partners, capacity |
| `логотип цветной.docx` | "Colour logo" doc (embedded logo image only) |
| `Сертификат СЖС 24-27год.PDF` | SGS ISO 22000:2018 certificate (2024–2027), RU + EN |
| `Халал 2022.PDF` | Halal certificate, TM «Темен Суу», product list |

### Photos (see Section 4 for the curated pick — filled in after photo survey)
| Folder | Count | Contents |
|---|---|---|
| `ursus/Этикетка.jpg` | 1 | Product label sheet (Голландский Сливочный) — full nutrition + branding |
| `ursus/Catalog/` | 44 (`_MG_40xx.jpg`) | Studio product/pack shots |
| `ursus/Composition/` | 14 (`_MG_4041–4126.jpg`) | Styled composition / lifestyle shots |
| `Урсус фото продукции/` | 340 (`1K5A2348–2897.jpg`) | Large product photoshoot (`._*` files are macOS junk — ignore) |

---

## 4. Curated photo picks (from the 5-agent photo survey)

All studio shots are bright white-background pack shots (ideal for transparent-PNG cutouts).
The `Урсус фото продукции` set has additional styled lifestyle frames. **No factory, worker,
or cream (сливки) photos exist anywhere in the data.**

### Product tiles → `images/p-<id>-N.png` (white-bg cutouts → transparent PNG; gallery sets)
**Corrected mapping** — verified by reading each pack label directly (the first agent
survey was off by one). First image is the card thumbnail; extra images form the gallery.

| Product | Source file(s) | Output(s) |
|---|---|---|
| Голландский классический | `_MG_4028` (pouch), `_MG_4016` (block) | `p-gollandsky-klass-1/2.png` |
| Голландский сливочный | `_MG_4015` (block), `_MG_4027` (pouch) | `p-gollandsky-sliv-1/2.png` |
| Голландский Элитный | `_MG_4025` | `p-gollandsky-elite-1.png` |
| Сметанковый | `1K5A2483` (yellow), `1K5A2566` (red) | `p-smetankovy-1/2.png` |
| Теменсуйский (signature) | `_MG_4017` | `p-temensuysky-1.png` |
| Рижский | `_MG_4018` | `p-rizhsky-1.png` |
| Эдам | `_MG_4019` | `p-edam-1.png` |
| Алтайский | `_MG_4020` | `p-altaysky-1.png` |
| Костромской | `_MG_4092` (cut), `_MG_4074` (whole), `_MG_4022` (wedge) | `p-kostromskoy-1/2/3.png` |
| Пошехонский | `_MG_4090` (cut), `_MG_4076` (whole), `_MG_4023` (wedge) | `p-poshehonsky-1/2/3.png` |
| Просто Сыр (red) | `_MG_4021` | `p-prosto-red-1.png` |
| Просто Сыр (green) | `_MG_4024` | `p-prosto-green-1.png` |
| Колбасный (smoked) | `_MG_4037` | `p-kolbasny-1.png` |
| Масло Крестьянское | `_MG_4051`, `_MG_4053` (pair) | `p-butter-1/2.png` |
| Молоко 1 л | `1K5A2470` | `p-milk-1.png` |

> Catalog cards show the first image with a `📷 N` badge when a gallery exists; clicking
> opens a lightbox (arrows/thumbnails/Esc). Label→file truth table for blocks:
> 4015=Голл.сливочный · 4016=Голландский · 4017=Теменсуйский · 4018=Рижский · 4019=Эдам ·
> 4020=Алтайский · 4021=ПростоСыр(red) · 4022=Костромской(wedge) · 4023=Пошехонский(wedge) ·
> 4024=ПростоСыр(green) · 4025=Голл.Элитный · 4028=Голл.классический. Wheels: 4074/4079=Костромской,
> 4076/4077=Пошехонский; cut 4090/4095=Пошехонский, 4092/4093=Костромской.

### Lifestyle / hero / section images (resized JPG, keep background)
| Use | Source | Output |
|---|---|---|
| Main hero — bright cheese board | `1K5A2721.jpg` | `hero-board.jpg` |
| Lifestyle — styled platter | `Composition/_MG_4109.jpg` | `life-platter.jpg` |
| Banner row (text space) | `Composition/_MG_4126.jpg` | `banner-row.jpg` |
| About / quality board | `Composition/_MG_4107.jpg` | `about-board.jpg` |
| Cut interior (texture) | `Catalog/_MG_4084.jpg` | `cut-interior.jpg` |
| Full assortment | `1K5A2884.jpg` | `assortment.jpg` |
| Butter breakfast lifestyle | `1K5A2792.jpg` | `life-butter.jpg` |
| Milk lifestyle | `1K5A2846.jpg` | `life-milk.jpg` |

`logo.png` (polar-bear roundel) stays as the existing site logo / favicon.
