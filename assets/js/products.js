/* ============================================================
   URSUS — product catalog (real ЗАО «Урсус» / TM «Темен Суу» line)
   imgs[] = gallery; first image is the card thumbnail.
   Display is decided by extension: .png = transparent cutout (floats),
   .jpg = full photo (fills the frame).
   cat: cheese | butter | milk | cream
   ============================================================ */
window.PRODUCTS = [
  /* ---------------- CHEESE ---------------- */
  {
    id: "gollandsky-klass", cat: "cheese",
    imgs: ["p-gollandsky-klass-1.png", "p-gollandsky-klass-2.png", "p-gollandsky-klass-3.png", "p-gollandsky-klass-4.jpg"],
    badge: "hit", fat: "45%", shelf: "90",
    name: { ru: "Голландский классический", ky: "Голландия классикалык", en: "Gollandsky Classic" },
    desc: {
      ru: "Полутвёрдый сыр с плотной пластичной мякотью, мелким рисунком и чистым молочным вкусом. Классика завода.",
      ky: "Коюу, пластикалык эти, майда көздөрү жана таза сүт даамы бар жарым катуу сыр. Заводдун классикасы.",
      en: "A semi-hard cheese with a dense, supple body, fine eyes and a clean milky taste. The factory classic."
    }
  },
  {
    id: "gollandsky-sliv", cat: "cheese",
    imgs: ["p-gollandsky-sliv-1.png", "p-gollandsky-sliv-2.png", "p-gollandsky-sliv-3.jpg", "p-gollandsky-sliv-4.jpg"],
    badge: "hit", fat: "45%", shelf: "90",
    name: { ru: "Голландский сливочный", ky: "Голландия сливкалуу", en: "Gollandsky Creamy" },
    desc: {
      ru: "342 ккал на 100 г, жирность 45% в сухом веществе. Мягкий сливочный вкус и нежная текстура. ГОСТ 7616-85.",
      ky: "100 г 342 ккал, кургак затта 45% майлуулук. Жумшак сливкалуу даам жана назик текстура. ГОСТ 7616-85.",
      en: "342 kcal per 100 g, 45% fat in dry matter. A mild, buttery flavour and tender texture. GOST 7616-85."
    }
  },
  {
    id: "gollandsky-elite", cat: "cheese",
    imgs: ["p-gollandsky-elite-1.png", "p-gollandsky-elite-2.png", "p-gollandsky-elite-3.png"],
    badge: "premium", fat: "50%", shelf: "90",
    name: { ru: "Голландский Элитный", ky: "Голландия Элиталык", en: "Gollandsky Elite" },
    desc: {
      ru: "Премиальная линия «Темен-Сууйский Элитный» — более выдержанный, насыщенный сыр 50% жирности в восковой оболочке.",
      ky: "«Темен-Сууйский Элиталык» премиум линиясы — узак бышкан, бай даамдуу 50% майлуу сыр, балмум кабыкта.",
      en: "The premium “Temen-Suu Elite” line — a more matured, richer 50%-fat cheese in a wax coat."
    }
  },
  {
    id: "smetankovy", cat: "cheese", imgs: ["p-smetankovy-1.png", "p-smetankovy-2.png"],
    badge: "", fat: "50%", shelf: "90",
    name: { ru: "Сметанковый", ky: "Сметанковый", en: "Smetankovy" },
    desc: {
      ru: "Сыр с повышенной жирностью 50% — особенно мягкий, сливочно-сметанный вкус. В жёлтой и красной оболочке.",
      ky: "50% жогорулатылган майлуулуктагы сыр — өзгөчө жумшак, сливка-каймак даамы. Сары жана кызыл кабыкта.",
      en: "A higher-fat 50% cheese — especially soft, with a creamy, sour-cream note. In yellow and red coatings."
    }
  },
  {
    id: "temensuysky", cat: "cheese", imgs: ["p-temensuysky-1.png"],
    badge: "signature", fat: "45%", shelf: "90",
    name: { ru: "Теменсуйский", ky: "Темен-Суу сыры", en: "Temensuysky" },
    desc: {
      ru: "Фирменный сыр, названный в честь села Темен-Суу — родины завода. Узнаваемый вкус нашего региона.",
      ky: "Заводдун мекени — Темен-Суу айылынын урматына аталган фирмалык сыр. Биздин аймактын тааныш даамы.",
      en: "The signature cheese, named after Temen-Suu village — the factory's home. The recognisable taste of our region."
    }
  },
  {
    id: "rizhsky", cat: "cheese", imgs: ["p-rizhsky-1.png"],
    badge: "", fat: "45%", shelf: "90",
    name: { ru: "Рижский", ky: "Рига сыры", en: "Rizhsky" },
    desc: {
      ru: "Ароматный полутвёрдый сыр в традициях прибалтийской школы, с лёгкой пикантной ноткой.",
      ky: "Балтыка мектебинин салтындагы жыттуу жарым катуу сыр, жеңил ачуу нотасы менен.",
      en: "An aromatic semi-hard cheese in the Baltic tradition, with a light piquant note."
    }
  },
  {
    id: "edam", cat: "cheese", imgs: ["p-edam-1.png"],
    badge: "", fat: "45%", shelf: "90",
    name: { ru: "Эдам", ky: "Эдам сыры", en: "Edam" },
    desc: {
      ru: "Полутвёрдый сыр с мягким, чуть ореховым вкусом — европейская классика в исполнении «Урсус».",
      ky: "Жумшак, бир аз жаңгактуу даамы бар жарым катуу сыр — «Урсус» аткарган европалык классика.",
      en: "A semi-hard cheese with a mild, slightly nutty flavour — a European classic, the URSUS way."
    }
  },
  {
    id: "altaysky", cat: "cheese", imgs: ["p-altaysky-1.png"],
    badge: "", fat: "50%", shelf: "120",
    name: { ru: "Алтайский", ky: "Алтай сыры", en: "Altaysky" },
    desc: {
      ru: "Твёрдый сыр длительного созревания с выраженным сырным вкусом и плотной структурой.",
      ky: "Узак бышкан катуу сыр, айкын сыр даамы жана коюу түзүлүшү менен.",
      en: "A long-matured hard cheese with a pronounced flavour and a firm structure."
    }
  },
  {
    id: "kostromskoy", cat: "cheese", imgs: ["p-kostromskoy-1.png", "p-kostromskoy-2.png", "p-kostromskoy-3.png"],
    badge: "", fat: "45%", shelf: "90",
    name: { ru: "Костромской", ky: "Кострома сыры", en: "Kostromskoy" },
    desc: {
      ru: "Сыр-головка с тонким ароматом, нежной пластичной мякотью и характерным рисунком из глазков.",
      ky: "Назик жыттуу, жумшак пластикалык эти жана мүнөздүү көздөрү бар тегерек сыр.",
      en: "A round-wheel cheese with a delicate aroma, tender body and the classic pattern of eyes."
    }
  },
  {
    id: "poshehonsky", cat: "cheese", imgs: ["p-poshehonsky-1.png", "p-poshehonsky-2.png", "p-poshehonsky-3.png"],
    badge: "", fat: "45%", shelf: "90",
    name: { ru: "Пошехонский", ky: "Пошехон сыры", en: "Poshekhonsky" },
    desc: {
      ru: "Полутвёрдый сыр-головка с чистым кисломолочным вкусом и упругой консистенцией. Подаётся ломтиками.",
      ky: "Таза сүт-кычкыл даамы жана серпилгич консистенциясы бар жарым катуу тегерек сыр.",
      en: "A semi-hard wheel with a clean lactic taste and a springy texture. Served in slices."
    }
  },
  {
    id: "prosto-red", cat: "cheese", imgs: ["p-prosto-red-1.png"],
    badge: "", fat: "45%", shelf: "90",
    name: { ru: "Просто Сыр (красный)", ky: "Просто Сыр (кызыл)", en: "Prosto Syr (red)" },
    desc: {
      ru: "Фасованный сыр в вакуумной упаковке для розницы — удобный формат для каждого дня. Халал.",
      ky: "Чекене сатуу үчүн вакуумдук таңгактагы сыр — күнүмдүк ыңгайлуу формат. Халал.",
      en: "Retail-packed vacuum cheese — a handy everyday format. Halal certified."
    }
  },
  {
    id: "prosto-green", cat: "cheese", imgs: ["p-prosto-green-1.png"],
    badge: "", fat: "45%", shelf: "90",
    name: { ru: "Просто Сыр (зелёный)", ky: "Просто Сыр (жашыл)", en: "Prosto Syr (green)" },
    desc: {
      ru: "Тот же любимый сыр в зелёной линейке — натуральный продукт без растительных жиров.",
      ky: "Ошол эле сүйүктүү сыр жашыл линияда — өсүмдүк майларсыз табигый продукт.",
      en: "The same favourite cheese in the green line — a natural product with no vegetable fats."
    }
  },
  {
    id: "kolbasny", cat: "cheese", imgs: ["p-kolbasny-1.png", "p-kolbasny-2.jpg"],
    badge: "smoked", fat: "40%", shelf: "75",
    name: { ru: "Колбасный копчёный", ky: "Ысталган колбаса сыр", en: "Smoked Sausage Cheese" },
    desc: {
      ru: "Плавленый копчёный сыр в форме батона с насыщенным ароматом натурального дымка.",
      ky: "Табигый түтүндүн бай жыты бар, нан түрүндөгү эритилген ысталган сыр.",
      en: "A processed smoked cheese shaped like a log, with a rich natural-smoke aroma."
    }
  },
  /* ---------------- BUTTER ---------------- */
  {
    id: "butter", cat: "butter", imgs: ["p-butter-1.jpg", "p-butter-2.jpg", "p-butter-3.jpg"],
    badge: "hit", fat: "72.5%", shelf: "35",
    name: { ru: "Масло Крестьянское", ky: "Дыйкан сары майы", en: "Krestyanskoe Butter" },
    desc: {
      ru: "Сливочное масло из натуральных сливок, 72,5% жирности, пачка 200 г. Также выпускается 82,5%. ГОСТ.",
      ky: "Табигый каймактан жасалган сары май, 72,5% майлуулук, 200 г таңгак. 82,5% да чыгарылат. ГОСТ.",
      en: "Creamery butter from natural cream, 72.5% fat, 200 g pack. Also made at 82.5%. GOST."
    }
  },
  /* ---------------- MILK ---------------- */
  {
    id: "milk", cat: "milk", imgs: ["p-milk-1.jpg", "p-milk-2.jpg"],
    badge: "", fat: "3.2%", shelf: "",
    name: { ru: "Молоко питьевое", ky: "Ичүүчү сүт", en: "Drinking Milk" },
    desc: {
      ru: "Пастеризованное коровье молоко 3,2% в плёночной упаковке 1 л — натуральный источник кальция.",
      ky: "Пастеризацияланган коровь сүтү 3,2%, 1 л плёнка таңгакта — кальцийдин табигый булагы.",
      en: "Pasteurized cow's milk 3.2% in a 1 L film pouch — a natural source of calcium."
    }
  },
  /* ---------------- CREAM ---------------- */
  {
    id: "cream", cat: "cream", imgs: ["life-milk.jpg"],
    badge: "", fat: "20–40%", shelf: "",
    name: { ru: "Сливки пастеризованные", ky: "Пастеризацияланган каймак", en: "Pasteurized Cream" },
    desc: {
      ru: "Сливки из коровьего молока 20% / 30% / 40% жирности. Получают сепарированием натурального молока.",
      ky: "Коровь сүтүнөн 20% / 30% / 40% майлуу каймак. Табигый сүттү сепарациялоо менен алынат.",
      en: "Cream from cow's milk at 20% / 30% / 40% fat. Separated from natural milk."
    }
  }
];

/* badge → label per language */
window.BADGES = {
  hit:       { ru: "Хит", ky: "Хит", en: "Bestseller" },
  premium:   { ru: "Премиум", ky: "Премиум", en: "Premium" },
  signature: { ru: "Фирменный", ky: "Фирмалык", en: "Signature" },
  smoked:    { ru: "Копчёный", ky: "Ысталган", en: "Smoked" }
};
