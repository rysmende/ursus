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

### Product tiles → copied to `images/` (white-bg cutouts → transparent PNG)
| Product | Source file | Output |
|---|---|---|
| Голландский Классический | `Catalog/_MG_4017.jpg` | `p-gollandsky-klass.png` |
| Голландский Сливочный | `Catalog/_MG_4015.jpg` | `p-gollandsky-sliv.png` |
| Голландский Элитный | `Catalog/_MG_4025.jpg` | `p-gollandsky-elite.png` |
| Сметанковый | `фото продукции/1K5A2483.jpg` | `p-smetankovy.png` |
| Теменсуйский (signature) | `Catalog/_MG_4018.jpg` | `p-temensuysky.png` |
| Рижский | `Catalog/_MG_4019.jpg` | `p-rizhsky.png` |
| Эдам | `Catalog/_MG_4020.jpg` | `p-edam.png` |
| Алтайский | `Catalog/_MG_4021.jpg` | `p-altaysky.png` |
| Костромской (cut wheel) | `Catalog/_MG_4092.jpg` | `p-kostromskoy.png` |
| Пошехонский (cut wheel) | `Catalog/_MG_4090.jpg` | `p-poshehonsky.png` |
| Просто Сыр (red) | `Catalog/_MG_4023.jpg` | `p-prosto-red.png` |
| Просто Сыр (green) | `Catalog/_MG_4024.jpg` | `p-prosto-green.png` |
| Колбасный (smoked) | `Catalog/_MG_4037.jpg` | `p-kolbasny.png` |
| Масло Крестьянское | `Catalog/_MG_4051.jpg` | `p-butter.png` |
| Молоко 1 л | `фото продукции/1K5A2470.jpg` | `p-milk.png` |

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
