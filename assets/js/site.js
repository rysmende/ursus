/* ============================================================
   URSUS — shared site engine
   i18n (RU/KY/EN, persisted), nav, reveal, count-up, catalog render.
   Include on every page AFTER products.js.
   ============================================================ */
(function () {
  "use strict";

  /* ---------------- Translations ---------------- */
  const I18N = {
    ru: {
      "nav.home": "Главная", "nav.catalog": "Каталог", "nav.about": "О заводе",
      "nav.news": "Новости", "nav.contact": "Контакты", "nav.order": "Оптовый заказ",

      "cta.catalog": "Смотреть каталог", "cta.wholesale": "Оптовые заказы",
      "cta.contact": "Связаться с нами", "cta.more": "Подробнее", "cta.all": "Весь каталог →",

      /* ---- Home ---- */
      "home.badge": "🐻‍❄️ Завод основан в 1940 году",
      "home.title": 'Натуральный сыр <span class="hl">из Чуйской долины</span>',
      "home.lead": "ЗАО «Урсус» — один из крупнейших молочных заводов Кыргызстана. Сыр, масло и молоко из натурального коровьего молока, без растительных жиров. Сертификаты ISO 22000, Халал и HACCP.",
      "home.s1n": "1940", "home.s1l": "год основания завода",
      "home.s2n": "60", "home.s2l": "тонн молока в сутки",
      "home.s3n": "13+", "home.s3l": "сортов сыра",
      "home.s4n": "63", "home.s4l": "сотрудника",
      "home.chip1": "Без растительных жиров", "home.chip1s": "только натуральное",
      "home.chip2": "Халал сертификат", "home.chip2s": "TM «Темен Суу»",
      "home.trust": "Поставки по Кыргызстану · Казахстану · России · стандарты ЕАЭС",

      "home.feat.eyebrow": "Почему «Урсус»",
      "home.feat.title": "Качество в каждой упаковке",
      "feat.1t": "Без растительных жиров", "feat.1d": "Только натуральное коровье молоко, ничего лишнего.",
      "feat.2t": "Экологически чистое сырьё", "feat.2d": "Молоко ферм Московского и Панфиловского районов.",
      "feat.3t": "ISO 22000 и HACCP", "feat.3d": "Международная система менеджмента безопасности пищи.",
      "feat.4t": "Халал сертификат", "feat.4d": "Сертифицированная продукция TM «Темен Суу».",

      "home.prod.eyebrow": "Каталог", "home.prod.title": "Популярная продукция",
      "home.prod.sub": "Более тринадцати сортов твёрдого сыра, сливочное масло, молоко и сливки.",

      "home.about.eyebrow": "О заводе",
      "home.about.title": "Сыр с историей с 1940 года",
      "home.about.p": "Завод в селе Темен-Суу работает с 1940 года, а ЗАО «Урсус» развивает производство с 1999 года. Сегодня мы перерабатываем до 60 тонн молока в сутки и поставляем продукцию в Кыргызстан, Казахстан и Россию.",
      "home.about.li1": "Почётная грамота Кыргызской Республики (2017)",
      "home.about.li2": "Экспорт в страны ЕАЭС",
      "home.about.li3": "Более 80 поставщиков молока",

      "home.cta.title": "Работаем с оптом и сетями",
      "home.cta.sub": "Прямые поставки от производителя, индивидуальные условия для партнёров. Расскажите о вашем заказе — мы перезвоним.",

      /* ---- Catalog ---- */
      "cat.title": "Каталог продукции",
      "cat.sub": "Натуральные твёрдые сыры, сливочное масло, молоко и сливки. Жирность и сроки указаны для справки; точные спецификации — у отдела продаж.",
      "cat.f.all": "Все", "cat.f.cheese": "Сыры", "cat.f.butter": "Масло", "cat.f.dairy": "Молоко и сливки",
      "cat.fat": "жир", "cat.shelf": "срок", "cat.days": "сут",
      "cat.note": "Цены оптовые — уточняйте в отделе продаж. Возможна фасовка под заказ.",

      /* ---- About ---- */
      "about.title": "О заводе «Урсус»",
      "about.sub": "Сырный завод в селе Темен-Суу, Московский район, Чуйская область, Кыргызстан.",
      "about.h1": "Наследие с 1940 года",
      "about.p1": "Производство сыра в селе Темен-Суу было основано ещё в 1940 году — об этом напоминает надпись «Завод основан в 1940» на каждой упаковке. На этой базе в 1999 году выросло Закрытое акционерное общество «Урсус», названное в честь белого медведя (лат. <i>Ursus</i>), который стал символом бренда.",
      "about.p2": "Сегодня «Урсус» — одно из крупнейших предприятий молочной промышленности Кыргызстана. Мы перерабатываем до 60 тонн молока в сутки, выпускаем более тринадцати сортов твёрдого сыра, сливочное масло, питьевое молоко и сливки. В коллективе 63 штатных сотрудника и более 80 поставщиков молока.",
      "about.p3": "Молоко закупается у фермеров Московского и Панфиловского районов Чуйской долины. Мы работаем без растительных жиров — только натуральное коровье молоко и проверенные временем рецептуры.",
      "about.numTitle": "Завод в цифрах",
      "about.n1": "год основания", "about.n2": "тонн молока/сутки", "about.n3": "сортов сыра", "about.n4": "сотрудника",
      "about.certTitle": "Сертификаты и награды",
      "about.cert1t": "ISO 22000:2018", "about.cert1d": "Система менеджмента безопасности пищевой продукции, орган SGS. Действует до 27 мая 2027 г.",
      "about.cert2t": "Халал", "about.cert2d": "Сертификат «Центра развития халал индустрии», TM «Темен Суу».",
      "about.cert3t": "HACCP", "about.cert3d": "Внедрённая система анализа рисков и контроля критических точек.",
      "about.cert4t": "Почётная грамота КР", "about.cert4d": "Указ Президента Кыргызской Республики, 31 августа 2017 года.",
      "about.partTitle": "Нам доверяют",
      "about.partSub": "Среди партнёров — кондитерские, образовательные и торговые компании Кыргызстана, Казахстана и России.",

      /* ---- Contact ---- */
      "cont.title": "Контакты", "cont.sub": "Оптовые поставки, сотрудничество и заказы — мы всегда на связи.",
      "cont.addr": "Адрес", "cont.addrval": "Кыргызстан, Чуйская область, Московский район, с. Темен-Суу, ул. Сырзаводская, 3",
      "cont.phone": "Приёмная", "cont.acc": "Бухгалтерия", "cont.sales": "Отдел продаж", "cont.email": "Эл. почта",
      "cont.formTitle": "Написать нам",
      "cont.fName": "Ваше имя", "cont.fContact": "Телефон или e-mail", "cont.fMsg": "Сообщение",
      "cont.fSend": "Отправить заявку", "cont.fNote": "Нажимая «Отправить», вы соглашаетесь на обработку данных для ответа на обращение.",
      "cont.fOk": "Спасибо! Заявка отправлена — мы свяжемся с вами.",
      "cont.fErr": "Не удалось отправить. Напишите нам напрямую на zaoursus2003@gmail.com",

      /* ---- News ---- */
      "news.title": "Новости и статьи",
      "news.sub": "Жизнь завода, наша продукция и полезное о сыре.",

      /* ---- Footer ---- */
      "foot.tagline": "Натуральный сыр, масло и молоко из Чуйской долины с 1940 года.",
      "foot.nav": "Навигация", "foot.products": "Продукция", "foot.contacts": "Контакты",
      "foot.rights": "ЗАО «Урсус». Все права защищены.",
      "foot.madein": "Сделано в Кыргызстане 🇰🇬"
    },

    ky: {
      "nav.home": "Башкы", "nav.catalog": "Каталог", "nav.about": "Завод жөнүндө",
      "nav.news": "Жаңылыктар", "nav.contact": "Байланыш", "nav.order": "Дүң буйрутма",

      "cta.catalog": "Каталогду көрүү", "cta.wholesale": "Дүң буйрутмалар",
      "cta.contact": "Байланышуу", "cta.more": "Толугураак", "cta.all": "Бардык каталог →",

      "home.badge": "🐻‍❄️ Завод 1940-жылы негизделген",
      "home.title": 'Чүй өрөөнүнүн <span class="hl">табигый сыры</span>',
      "home.lead": "«Урсус» ЖАК — Кыргызстандын ири сүт заводдорунун бири. Табигый коровь сүтүнөн сыр, май жана сүт, өсүмдүк майларсыз. ISO 22000, Халал жана HACCP сертификаттары.",
      "home.s1n": "1940", "home.s1l": "завод негизделген жыл",
      "home.s2n": "60", "home.s2l": "тонна сүт суткасына",
      "home.s3n": "13+", "home.s3l": "сыр түрү",
      "home.s4n": "63", "home.s4l": "кызматкер",
      "home.chip1": "Өсүмдүк майларсыз", "home.chip1s": "табигый гана",
      "home.chip2": "Халал сертификат", "home.chip2s": "TM «Темен Суу»",
      "home.trust": "Кыргызстан · Казакстан · Россия боюнча жеткирүү · ЕАЭБ стандарттары",

      "home.feat.eyebrow": "Эмне үчүн «Урсус»",
      "home.feat.title": "Ар бир таңгакта сапат",
      "feat.1t": "Өсүмдүк майларсыз", "feat.1d": "Табигый коровь сүтү гана, ашыкча эч нерсе жок.",
      "feat.2t": "Экологиялык таза сырьё", "feat.2d": "Московский жана Панфилов райондорунун фермаларынын сүтү.",
      "feat.3t": "ISO 22000 жана HACCP", "feat.3d": "Тамак-аш коопсуздугунун эл аралык системасы.",
      "feat.4t": "Халал сертификат", "feat.4d": "TM «Темен Суу» сертификацияланган өнүмү.",

      "home.prod.eyebrow": "Каталог", "home.prod.title": "Популярдуу өнүмдөр",
      "home.prod.sub": "Он үчтөн ашуун катуу сыр, сары май, сүт жана каймак.",

      "home.about.eyebrow": "Завод жөнүндө",
      "home.about.title": "1940-жылдан бери тарыхы бар сыр",
      "home.about.p": "Темен-Суу айылындагы завод 1940-жылдан бери иштейт, «Урсус» ЖАК 1999-жылдан өндүрүштү өнүктүрүүдө. Бүгүн биз суткасына 60 тоннага чейин сүт иштетип, өнүмдөрдү Кыргызстанга, Казакстанга жана Россияга жеткиребиз.",
      "home.about.li1": "Кыргыз Республикасынын Ардак грамотасы (2017)",
      "home.about.li2": "ЕАЭБ өлкөлөрүнө экспорт",
      "home.about.li3": "80дөн ашуун сүт жеткирүүчү",

      "home.cta.title": "Дүң жана тармактар менен иштейбиз",
      "home.cta.sub": "Өндүрүүчүдөн түз жеткирүү, өнөктөштөр үчүн жеке шарттар. Буйрутмаңызды айтыңыз — биз чалабыз.",

      "cat.title": "Өнүмдөр каталогу",
      "cat.sub": "Табигый катуу сырлар, сары май, сүт жана каймак. Майлуулук жана мөөнөттөр маалымат үчүн; так спецификация — сатуу бөлүмүндө.",
      "cat.f.all": "Баары", "cat.f.cheese": "Сырлар", "cat.f.butter": "Май", "cat.f.dairy": "Сүт жана каймак",
      "cat.fat": "май", "cat.shelf": "мөөнөт", "cat.days": "күн",
      "cat.note": "Баалар дүң — сатуу бөлүмүнөн тактаңыз. Буйрутма боюнча таңгактоо мүмкүн.",

      "about.title": "«Урсус» заводу жөнүндө",
      "about.sub": "Темен-Суу айылындагы сыр заводу, Московский району, Чүй облусу, Кыргызстан.",
      "about.h1": "1940-жылдан бери мурас",
      "about.p1": "Темен-Суу айылында сыр өндүрүү 1940-жылы негизделген — бул жөнүндө ар бир таңгактагы «Завод 1940-жылы негизделген» деген жазуу эскертет. Ушул базада 1999-жылы ак аюунун (лат. <i>Ursus</i>) урматына аталган «Урсус» жабык акционердик коому өсүп чыккан.",
      "about.p2": "Бүгүн «Урсус» — Кыргызстандын сүт өнөр жайынын ири ишканаларынын бири. Биз суткасына 60 тоннага чейин сүт иштетип, он үчтөн ашуун катуу сыр, сары май, ичүүчү сүт жана каймак чыгарабыз. Жамаатта 63 штаттык кызматкер жана 80дөн ашуун сүт жеткирүүчү.",
      "about.p3": "Сүт Чүй өрөөнүнүн Московский жана Панфилов райондорунун фермерлеринен сатылып алынат. Биз өсүмдүк майларсыз иштейбиз — табигый коровь сүтү жана убакыт сынагынан өткөн рецептуралар гана.",
      "about.numTitle": "Завод сандарда",
      "about.n1": "негизделген жыл", "about.n2": "тонна сүт/сутка", "about.n3": "сыр түрү", "about.n4": "кызматкер",
      "about.certTitle": "Сертификаттар жана сыйлыктар",
      "about.cert1t": "ISO 22000:2018", "about.cert1d": "Тамак-аш коопсуздугу системасы, SGS органы. 2027-жылдын 27-майына чейин.",
      "about.cert2t": "Халал", "about.cert2d": "«Халал индустриясын өнүктүрүү борборунун» сертификаты, TM «Темен Суу».",
      "about.cert3t": "HACCP", "about.cert3d": "Тобокелдиктерди талдоо жана критикалык чекиттерди көзөмөлдөө системасы.",
      "about.cert4t": "КР Ардак грамотасы", "about.cert4d": "Кыргыз Республикасынын Президентинин Жарлыгы, 2017-жыл 31-август.",
      "about.partTitle": "Бизге ишенишет",
      "about.partSub": "Өнөктөштөрдүн арасында — Кыргызстандын, Казакстандын жана Россиянын кондитердик, билим берүү жана соода компаниялары.",

      "cont.title": "Байланыш", "cont.sub": "Дүң жеткирүү, кызматташуу жана буйрутмалар — биз ар дайым байланыштабыз.",
      "cont.addr": "Дарек", "cont.addrval": "Кыргызстан, Чүй облусу, Московский району, Темен-Суу айылы, Сырзаводская көч., 3",
      "cont.phone": "Кабылдама", "cont.acc": "Бухгалтерия", "cont.sales": "Сатуу бөлүмү", "cont.email": "Электрондук почта",
      "cont.formTitle": "Бизге жазыңыз",
      "cont.fName": "Атыңыз", "cont.fContact": "Телефон же e-mail", "cont.fMsg": "Билдирүү",
      "cont.fSend": "Арыз жөнөтүү", "cont.fNote": "«Жөнөтүү» баскычын басып, кайрылууга жооп берүү үчүн маалыматты иштетүүгө макул болосуз.",
      "cont.fOk": "Рахмат! Арыз жөнөтүлдү — биз сиз менен байланышабыз.",
      "cont.fErr": "Жөнөтүлгөн жок. Бизге түз жазыңыз: zaoursus2003@gmail.com",

      "news.title": "Жаңылыктар жана макалалар",
      "news.sub": "Заводдун жашоосу, өнүмдөрүбүз жана сыр жөнүндө пайдалуу маалымат.",

      "foot.tagline": "1940-жылдан бери Чүй өрөөнүнүн табигый сыры, майы жана сүтү.",
      "foot.nav": "Навигация", "foot.products": "Өнүмдөр", "foot.contacts": "Байланыш",
      "foot.rights": "«Урсус» ЖАК. Бардык укуктар корголгон.",
      "foot.madein": "Кыргызстанда жасалган 🇰🇬"
    },

    en: {
      "nav.home": "Home", "nav.catalog": "Catalog", "nav.about": "About",
      "nav.news": "News", "nav.contact": "Contact", "nav.order": "Wholesale order",

      "cta.catalog": "View catalog", "cta.wholesale": "Wholesale orders",
      "cta.contact": "Get in touch", "cta.more": "Read more", "cta.all": "Full catalog →",

      "home.badge": "🐻‍❄️ Factory founded in 1940",
      "home.title": 'Natural cheese <span class="hl">from the Chui Valley</span>',
      "home.lead": "JSC URSUS is one of Kyrgyzstan's largest dairy plants. Cheese, butter and milk from natural cow's milk, with no vegetable fats. ISO 22000, Halal and HACCP certified.",
      "home.s1n": "1940", "home.s1l": "factory founded",
      "home.s2n": "60", "home.s2l": "tonnes of milk/day",
      "home.s3n": "13+", "home.s3l": "cheese varieties",
      "home.s4n": "63", "home.s4l": "employees",
      "home.chip1": "No vegetable fats", "home.chip1s": "all natural",
      "home.chip2": "Halal certified", "home.chip2s": "TM “Temen Suu”",
      "home.trust": "Supplying Kyrgyzstan · Kazakhstan · Russia · EAEU standards",

      "home.feat.eyebrow": "Why URSUS",
      "home.feat.title": "Quality in every pack",
      "feat.1t": "No vegetable fats", "feat.1d": "Only natural cow's milk, nothing else.",
      "feat.2t": "Clean, eco raw milk", "feat.2d": "Milk from Moskovsky & Panfilov district farms.",
      "feat.3t": "ISO 22000 & HACCP", "feat.3d": "International food-safety management systems.",
      "feat.4t": "Halal certified", "feat.4d": "Certified products under TM “Temen Suu”.",

      "home.prod.eyebrow": "Catalog", "home.prod.title": "Popular products",
      "home.prod.sub": "More than thirteen hard-cheese varieties, plus butter, milk and cream.",

      "home.about.eyebrow": "About",
      "home.about.title": "Cheese with history since 1940",
      "home.about.p": "The plant in Temen-Suu has run since 1940, and JSC URSUS has grown the business since 1999. Today we process up to 60 tonnes of milk a day and supply Kyrgyzstan, Kazakhstan and Russia.",
      "home.about.li1": "Honorary Diploma of the Kyrgyz Republic (2017)",
      "home.about.li2": "Exports across the EAEU",
      "home.about.li3": "More than 80 milk suppliers",

      "home.cta.title": "We work with wholesale & retail chains",
      "home.cta.sub": "Direct-from-factory supply and tailored terms for partners. Tell us about your order and we'll call you back.",

      "cat.title": "Product catalog",
      "cat.sub": "Natural hard cheeses, creamery butter, milk and cream. Fat and shelf life are indicative; exact specs come from the sales department.",
      "cat.f.all": "All", "cat.f.cheese": "Cheese", "cat.f.butter": "Butter", "cat.f.dairy": "Milk & cream",
      "cat.fat": "fat", "cat.shelf": "shelf", "cat.days": "d",
      "cat.note": "Wholesale pricing — please ask the sales department. Custom packing available.",

      "about.title": "About the URSUS factory",
      "about.sub": "A cheese factory in Temen-Suu village, Moskovsky District, Chui Region, Kyrgyzstan.",
      "about.h1": "Heritage since 1940",
      "about.p1": "Cheesemaking in Temen-Suu was established back in 1940 — recalled by the line “Factory founded in 1940” on every pack. On this foundation, in 1999, the closed joint-stock company URSUS grew, named after the polar bear (Latin <i>Ursus</i>) that became the brand's symbol.",
      "about.p2": "Today URSUS is one of the largest dairy enterprises in Kyrgyzstan. We process up to 60 tonnes of milk a day and make more than thirteen hard-cheese varieties, plus butter, drinking milk and cream. The team is 63 staff and more than 80 milk suppliers.",
      "about.p3": "Milk is sourced from farmers in the Moskovsky and Panfilov districts of the Chui Valley. We work with no vegetable fats — only natural cow's milk and time-tested recipes.",
      "about.numTitle": "The factory in numbers",
      "about.n1": "year founded", "about.n2": "tonnes milk/day", "about.n3": "cheese varieties", "about.n4": "employees",
      "about.certTitle": "Certificates & awards",
      "about.cert1t": "ISO 22000:2018", "about.cert1d": "Food-safety management system, by SGS. Valid until 27 May 2027.",
      "about.cert2t": "Halal", "about.cert2d": "Certified by the Center for Halal Industry Development, TM “Temen Suu”.",
      "about.cert3t": "HACCP", "about.cert3d": "Hazard analysis and critical control point system in place.",
      "about.cert4t": "Honorary Diploma", "about.cert4d": "By decree of the President of the Kyrgyz Republic, 31 August 2017.",
      "about.partTitle": "Trusted by",
      "about.partSub": "Partners include confectionery, education and retail companies in Kyrgyzstan, Kazakhstan and Russia.",

      "cont.title": "Contact", "cont.sub": "Wholesale supply, partnerships and orders — we're always in touch.",
      "cont.addr": "Address", "cont.addrval": "3 Syrzavodskaya St, Temen-Suu, Moskovsky District, Chui Region, Kyrgyzstan",
      "cont.phone": "Reception", "cont.acc": "Accounting", "cont.sales": "Sales department", "cont.email": "Email",
      "cont.formTitle": "Send us a message",
      "cont.fName": "Your name", "cont.fContact": "Phone or e-mail", "cont.fMsg": "Message",
      "cont.fSend": "Send request", "cont.fNote": "By clicking “Send” you agree to your data being processed to reply to your enquiry.",
      "cont.fOk": "Thank you! Your request was sent — we'll be in touch.",
      "cont.fErr": "Couldn't send. Please email us directly at zaoursus2003@gmail.com",

      "news.title": "News & articles",
      "news.sub": "Life at the factory, our products and useful things about cheese.",

      "foot.tagline": "Natural cheese, butter and milk from the Chui Valley since 1940.",
      "foot.nav": "Navigation", "foot.products": "Products", "foot.contacts": "Contact",
      "foot.rights": "JSC URSUS. All rights reserved.",
      "foot.madein": "Made in Kyrgyzstan 🇰🇬"
    }
  };

  const LANGS = ["ru", "ky", "en"];
  let lang = localStorage.getItem("ursus_lang");
  if (!LANGS.includes(lang)) lang = "ru";
  let filter = "all";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function t(key) { return (I18N[lang] && I18N[lang][key] != null) ? I18N[lang][key] : (I18N.ru[key] || ""); }

  function applyI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const v = I18N[lang][el.getAttribute("data-i18n")];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const v = I18N[lang][el.getAttribute("data-i18n-ph")];
      if (v != null) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("#langs button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
  }

  /* ---------------- Catalog rendering ---------------- */
  function badgeHtml(p) {
    if (!p.badge || !window.BADGES[p.badge]) return "";
    const cls = p.badge === "smoked" || p.badge === "premium" || p.badge === "signature" || p.badge === "hit" ? "hot" : "";
    return `<span class="tag ${cls}">${window.BADGES[p.badge][lang]}</span>`;
  }
  function cardHtml(p, i) {
    const cls = p.imgCover ? "" : "cut";
    const pills = [];
    if (p.fat) pills.push(`<span class="pill gold">${t("cat.fat")} ${p.fat}</span>`);
    if (p.shelf) pills.push(`<span class="pill">${t("cat.shelf")} ${p.shelf} ${t("cat.days")}</span>`);
    return `
      <article class="card reveal" style="transition-delay:${Math.min(i * 45, 300)}ms">
        <div class="ph">
          <img src="images/${p.img}" class="${cls}" alt="${p.name[lang]}" loading="lazy" width="600" height="450" />
          ${badgeHtml(p)}
        </div>
        <div class="body">
          <h3>${p.name[lang]}</h3>
          <p class="desc">${p.desc[lang]}</p>
          <div class="meta">${pills.join("")}</div>
        </div>
      </article>`;
  }
  function renderGrid(targetId, list) {
    const box = document.getElementById(targetId);
    if (!box) return;
    box.innerHTML = list.map((p, i) => cardHtml(p, i)).join("");
    observeReveals();
  }
  function renderFilters() {
    const box = document.getElementById("filters");
    if (!box) return;
    const items = [["all", "cat.f.all"], ["cheese", "cat.f.cheese"], ["butter", "cat.f.butter"], ["dairy", "cat.f.dairy"]];
    box.innerHTML = items.map(([k, tk]) => `<button data-f="${k}" class="${filter === k ? "active" : ""}">${t(tk)}</button>`).join("");
    box.querySelectorAll("button").forEach(b => b.onclick = () => { filter = b.dataset.f; renderFilters(); renderCatalog(); });
  }
  function renderCatalog() {
    if (!window.PRODUCTS) return;
    if (document.getElementById("grid")) renderGrid("grid", window.PRODUCTS.filter(p => filter === "all" || p.cat === filter));
    const feat = document.getElementById("featuredGrid");
    if (feat) {
      const ids = ["gollandsky-sliv", "temensuysky", "kostromskoy", "kolbasny", "butter", "milk"];
      renderGrid("featuredGrid", ids.map(id => window.PRODUCTS.find(p => p.id === id)).filter(Boolean));
    }
  }

  /* ---------------- Language switch ---------------- */
  function setLang(l) {
    if (!LANGS.includes(l)) return;
    lang = l; localStorage.setItem("ursus_lang", l);
    applyI18n(); renderFilters(); renderCatalog();
  }

  /* ---------------- Reveal on scroll ---------------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  function observeReveals() { document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el)); }

  /* ---------------- Count-up ---------------- */
  function countUp() {
    document.querySelectorAll("[data-count]").forEach(el => {
      if (el.dataset.done) return;
      const m = el.textContent.trim().match(/^(\d+)(\D*)$/);
      if (!m) return;
      el.dataset.done = "1";
      const end = +m[1], suf = m[2];
      if (reduce) { el.textContent = end + suf; return; }
      const dur = 1200; let start = null;
      function step(ts) {
        if (start == null) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { countUp(); countObserver.unobserve(e.target); } });
  }, { threshold: 0.4 });

  /* ---------------- Header + mobile menu ---------------- */
  function initChrome() {
    const header = document.getElementById("header");
    addEventListener("scroll", () => { if (header) header.classList.toggle("scrolled", scrollY > 12); }, { passive: true });
    const burger = document.getElementById("burger"), links = document.getElementById("navlinks");
    if (burger && links) {
      burger.onclick = () => links.classList.toggle("open");
      links.querySelectorAll("a").forEach(a => a.onclick = () => links.classList.remove("open"));
    }
    document.querySelectorAll("#langs button").forEach(b => b.onclick = () => setLang(b.dataset.lang));
    const y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------------- Init ---------------- */
  function init() {
    initChrome();
    applyI18n();
    renderFilters();
    renderCatalog();
    observeReveals();
    document.querySelectorAll("[data-count]").forEach(el => countObserver.observe(el));
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.URSUS = { setLang, t: t };
})();
