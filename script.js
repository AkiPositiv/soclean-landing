const translations = {
  ru: {
    nav: { services: 'Услуги', pricing: 'Цены', guarantees: 'Гарантии', reviews: 'Отзывы', contact: 'Контакты' },
    hero: {
      kicker: 'Премиум клининг',
      title: 'Безупречная чистота для вашего дома и бизнеса',
      subtitle: 'Профессиональная уборка квартир, офисов и объектов после ремонта в Ташкенте — быстро, аккуратно и с гарантией результата.',
      ctaPrimary: 'Узнать стоимость',
      ctaSecondary: 'Заказать звонок',
      stat1: '8+ лет опыта',
      stat1Label: 'клининговый сервис',
      stat2: '15 000+ уборок',
      stat2Label: 'выполнено',
      stat3: '98% повторных заказов',
      stat3Label: 'клиентов возвращаются',
      visualText: 'Чистота, которая ощущается сразу: порядок в каждой детали.'
    },
    trust: [
      { title: 'Заявки 24/7', text: 'Принимаем заказы в любое время суток' },
      { title: 'Выезд за 2 часа', text: 'Оперативно приезжаем на объект' },
      { title: 'Страхование', text: 'Ответственность перед клиентом застрахована' },
      { title: 'Гарантия 100%', text: 'Переделаем бесплатно, если что-то не так' }
    ],
    services: {
      title: 'Что мы делаем',
      subtitle: 'Полный спектр услуг для дома, офиса и коммерческих помещений.'
    },
    cards: [
      { title: 'Уборка квартир', text: 'Поддерживающая и генеральная уборка с вниманием к деталям.' },
      { title: 'Уборка офисов', text: 'Регулярный клининг для рабочих пространств и переговорных.' },
      { title: 'После ремонта', text: 'Удаление пыли, строймусора и следов ремонта.' },
      { title: 'Мытьё окон', text: 'Чистые окна, рамы и подоконники без разводов.' },
      { title: 'Химчистка', text: 'Мягкая мебель, ковры и текстиль на дому и в офисе.' },
      { title: 'Эко-уход', text: 'Безопасные средства для детей, животных и аллергиков.' }
    ],
    process: {
      title: 'Как мы работаем',
      subtitle: 'Простой и понятный путь к чистому пространству.'
    },
    steps: [
      { title: 'Заявка', text: 'Оставляете запрос на сайте или по телефону.' },
      { title: 'Расчёт', text: 'Подбираем объём работ и подскажем стоимость.' },
      { title: 'Уборка', text: 'Команда выезжает в удобное для вас время.' },
      { title: 'Приёмка', text: 'Проверяем результат и передаём объект в идеальном состоянии.' }
    ],
    about: {
      kicker: 'О компании',
      title: 'Soclean — команда, которой доверяют интерьеры Ташкента',
      text: 'Работаем в Ташкенте с 2016 года. Используем гипоаллергенную профессиональную химию и собственные стандарты контроля качества на каждом объекте.',
      stats: [
        { value: '8 лет', label: 'на рынке' },
        { value: '15 000+', label: 'уборок выполнено' },
        { value: '40+', label: 'клинеров в штате' }
      ]
    },
    pricing: {
      title: 'Тарифы',
      subtitle: 'Выберите формат уборки под ваш объект и бюджет.'
    },
    plans: [
      { tag: 'Стандарт', price: 'от 250 000 сум', title: 'Поддерживающая уборка', text: 'Подходит для регулярного ухода за квартирой или офисом.' },
      { tag: 'Комфорт', price: 'от 450 000 сум', title: 'Генеральная уборка', text: 'Глубокая чистка всех зон, включая кухни и санузлы.' },
      { tag: 'Премиум', price: 'от 750 000 сум', title: 'После ремонта', text: 'Полный цикл: пыль, мусор, финальная полировка поверхностей.' }
    ],
    guarantees: {
      title: 'Гарантии и доверие',
      subtitle: 'Работаем открыто: то, что обещаем — подтверждаем на деле.'
    },
    guaranteeItems: [
      { title: 'Гарантия результата', text: 'Если что-то не понравится — переделаем бесплатно в течение 24 часов.' },
      { title: 'Проверенный персонал', text: 'Клинеры работают в штате, а не по подряду, все проходят собеседование.' },
      { title: 'Безопасная химия', text: 'Сертифицированные гипоаллергенные средства для дома, где есть дети и животные.' },
      { title: 'Страхование объекта', text: 'Ответственность перед клиентом застрахована на каждый выезд.' }
    ],
    gallery: {
      title: 'Наши работы',
      subtitle: 'Реальные объекты до и после уборки — фото скоро добавим.'
    },
    galleryItems: [
      { before: 'Кухня — до уборки', after: 'Кухня — после уборки', label: 'Кухня' },
      { before: 'Гостиная — до генеральной', after: 'Гостиная — после генеральной', label: 'Гостиная' },
      { before: 'Офис — до клининга', after: 'Офис — после клининга', label: 'Офис' }
    ],
    reviews: {
      title: 'Отзывы клиентов',
      subtitle: 'Нам доверяют за аккуратность, скорость и спокойный сервис.'
    },
    testimonials: [
      { quote: 'Всё сделали идеально, даже после ремонта. Очень приятно, когда реально заботятся о деталях.', author: 'Анна К. · Чиланзар' },
      { quote: 'Регулярная уборка уже полгода — всегда вовремя и без лишних вопросов.', author: 'Дилноза Р. · Юнусабад' },
      { quote: 'Спасибо за химчистку дивана — как новый. Рекомендую всем.', author: 'Марина Л. · Мирзо-Улугбек' }
    ],
    area: {
      title: 'Зона обслуживания',
      subtitle: 'Работаем по всему Ташкенту — выберите свой район.',
      note: 'Не нашли свой район? Уточните по телефону — выезжаем и за город.'
    },
    areaList: ['Чиланзар', 'Юнусабад', 'Мирзо-Улугбек', 'Шайхантахур', 'Яккасарай', 'Сергели', 'Яшнабад', 'Бектемир', 'Учтепа', 'Алмазар', 'Мирабад', 'Янгихаят'],
    faq: {
      title: 'Частые вопросы',
      subtitle: 'Если коротко — мы берём на себя всё, что связано с чистотой.'
    },
    faqs: [
      { q: 'Нужно ли быть дома во время уборки?', a: 'Нет, можно оставить ключи или организовать доступ через консьержа.' },
      { q: 'Как быстро вы можете выехать?', a: 'Обычно в течение 24 часов, а в срочных случаях — в день обращения.' },
      { q: 'Используете ли вы безопасную химию?', a: 'Да, только гипоаллергенные и профессиональные средства.' },
      { q: 'Можно ли оплатить картой или через Payme/Click?', a: 'Да, принимаем наличные, банковские переводы и оплату через Payme и Click.' },
      { q: 'Работаете ли в выходные и праздники?', a: 'Да, без выходных, с 8:00 до 22:00, включая праздники.' }
    ],
    contact: {
      title: 'Свяжитесь с нами',
      subtitle: 'Выберите удобный способ связи — ответим быстро.',
      hours: 'Ежедневно, 8:00–22:00 · Работаем по всему Ташкенту',
      channelPhone: 'Телефон'
    },
    mobileCta: { call: 'Позвонить', whatsapp: 'WhatsApp' },
    footer: '© 2026 Soclean · Ташкент · +998 90 123 45 67'
  },
  uz: {
    nav: { services: 'Xizmatlar', pricing: 'Narxlar', guarantees: 'Kafolatlar', reviews: 'Sharhlar', contact: 'Bog\'lanish' },
    hero: {
      kicker: 'Premium klining',
      title: 'Uy va biznesingiz uchun mukammal tozalik',
      subtitle: 'Toshkentda kvartira, ofis va ta\'mirlashdan keyingi ob\'yektlarni professional tozalash — tez, puxta va natija kafolatlanadi.',
      ctaPrimary: 'Narxni bilish',
      ctaSecondary: 'Qo\'ng\'iroq buyurtma',
      stat1: '8+ yil tajriba',
      stat1Label: 'klining xizmati',
      stat2: '15 000+ ta tozalash',
      stat2Label: 'bajarildi',
      stat3: '98% takror buyurtmalar',
      stat3Label: 'mijozlar qaytadi',
      visualText: 'Darhol seziladigan tozalik: har bir detalda tartib.'
    },
    trust: [
      { title: '24/7 ariza qabul', text: 'Kunning istalgan vaqtida buyurtma qabul qilamiz' },
      { title: '2 soatda yetib borish', text: 'Ob\'ektga tezkor yetib boramiz' },
      { title: 'Sug\'urta', text: 'Mijoz oldidagi javobgarlik sug\'urtalangan' },
      { title: '100% kafolat', text: 'Agar biror narsa yoqmasa — bepul qayta bajaramiz' }
    ],
    services: {
      title: 'Biz nima qilamiz',
      subtitle: 'Uy, ofis va tijorat binolari uchun to\'liq xizmatlar to\'plami.'
    },
    cards: [
      { title: 'Kvartira tozalash', text: 'Doimiy va keng qamrovli tozalash, detallarni hisobga olgan holda.' },
      { title: 'Ofis tozalash', text: 'Ish maydonlari va suhbat xonalari uchun muntazam klining.' },
      { title: 'Ta\'mirlashdan keyin', text: 'Chang, qurilish chiqindilari va ta\'mirlash izlarini olib tashlash.' },
      { title: 'Derazalarni yuvish', text: 'Ko\'rinishsiz, shaffof derazalar va romlar.' },
      { title: 'Kimyoviy tozalash', text: 'Mebel, gilam va matolarni uyda va ofisda tozalash.' },
      { title: 'Ekologik xizmat', text: 'Bolalar, hayvonlar va allergiya bor kishilar uchun xavfsiz vositalar.' }
    ],
    process: {
      title: 'Biz qanday ishlaymiz',
      subtitle: 'Toza makonga yetib borish uchun oddiy va tushunarli yo\'l.'
    },
    steps: [
      { title: 'Ariza', text: 'Sayt yoki telefon orqali so\'rov qoldirasiz.' },
      { title: 'Hisob-kitob', text: 'Ish hajmini aniqlab, narxni aytamiz.' },
      { title: 'Tozalash', text: 'Jamoa siz uchun qulay vaqtda keladi.' },
      { title: 'Qabul qilish', text: 'Natijani tekshiramiz va ob\'yektni mukammal holatda topshiramiz.' }
    ],
    about: {
      kicker: 'Kompaniya haqida',
      title: 'Soclean — Toshkent interyerlariga ishonilgan jamoa',
      text: 'Toshkentda 2016-yildan beri ishlaymiz. Gipoallergen professional kimyoviy vositalar va har bir ob\'ektda sifat nazorati standartlaridan foydalanamiz.',
      stats: [
        { value: '8 yil', label: 'bozorda' },
        { value: '15 000+', label: 'tozalash bajarildi' },
        { value: '40+', label: 'shtatdagi klinerlar' }
      ]
    },
    pricing: {
      title: 'Tariflar',
      subtitle: 'Ob\'yekt va byudjetingizga mos tozalash formatini tanlang.'
    },
    plans: [
      { tag: 'Standart', price: '250 000 so\'mdan', title: 'Doimiy tozalash', text: 'Kvartira yoki ofisni muntazam parvarish qilish uchun.' },
      { tag: 'Komfort', price: '450 000 so\'mdan', title: 'Keng qamrovli tozalash', text: 'Oshxona va hammom kabi barcha zonalarni chuqur tozalash.' },
      { tag: 'Premium', price: '750 000 so\'mdan', title: 'Ta\'mirlashdan keyin', text: 'To\'liq sikl: chang, chiqindilar va sirtlarni yakuniy parlatish.' }
    ],
    guarantees: {
      title: 'Kafolat va ishonch',
      subtitle: 'Ochiq ishlaymiz: va\'da qilganimizni amalda tasdiqlaymiz.'
    },
    guaranteeItems: [
      { title: 'Natija kafolati', text: 'Agar biror narsa yoqmasa — 24 soat ichida bepul qayta bajaramiz.' },
      { title: 'Tekshirilgan xodimlar', text: 'Klinerlar shtatda ishlaydi, hammasi suhbat orqali tanlanadi.' },
      { title: 'Xavfsiz kimyo', text: 'Bolalar va uy hayvonlari bo\'lgan uylar uchun sertifikatlangan gipoallergen vositalar.' },
      { title: 'Ob\'ekt sug\'urtasi', text: 'Har bir chiqish uchun mijoz oldidagi javobgarlik sug\'urtalangan.' }
    ],
    gallery: {
      title: 'Bizning ishlarimiz',
      subtitle: 'Tozalashdan oldin va keyingi real ob\'yektlar — fotolarni tez orada qo\'shamiz.'
    },
    galleryItems: [
      { before: 'Oshxona — tozalashdan oldin', after: 'Oshxona — tozalashdan keyin', label: 'Oshxona' },
      { before: 'Mehmonxona — keng qamrovlidan oldin', after: 'Mehmonxona — keng qamrovlidan keyin', label: 'Mehmonxona' },
      { before: 'Ofis — klining oldidan', after: 'Ofis — kliningdan keyin', label: 'Ofis' }
    ],
    reviews: {
      title: 'Mijozlar sharhlari',
      subtitle: 'Bizni puxta ishlash, tezkor xizmat va tinchlikli servis uchun ishonch bildiradilar.'
    },
    testimonials: [
      { quote: 'Hammasi mukammal bajarildi, hatto ta\'mirlashdan keyin ham. Detallarga haqiqatan ham e\'tibor berish yoqdi.', author: 'Anna K. · Chilonzor' },
      { quote: 'Doimiy tozalashni olti oy davomida ishlatamiz — har doim o\'z vaqtida va hech qanday qo\'shimcha savollarsiz.', author: 'Dilnoza R. · Yunusobod' },
      { quote: 'Divanni kimyoviy tozalashga rahmat — xuddi yangi. Hamma uchun tavsiya qilaman.', author: 'Marina L. · Mirzo Ulug\'bek' }
    ],
    area: {
      title: 'Xizmat ko\'rsatish hududi',
      subtitle: 'Butun Toshkent bo\'ylab ishlaymiz — o\'z tumaningizni tanlang.',
      note: 'Tumaningizni topa olmadingizmi? Telefon orqali aniqlashtiring — shahar tashqarisiga ham chiqamiz.'
    },
    areaList: ['Chilonzor', 'Yunusobod', 'Mirzo Ulug\'bek', 'Shayxontohur', 'Yakkasaroy', 'Sergeli', 'Yashnobod', 'Bektemir', 'Uchtepa', 'Olmazor', 'Mirobod', 'Yangihayot'],
    faq: {
      title: 'Tez-tez so\'raladigan savollar',
      subtitle: 'Qisqacha aytganda, biz tozalik bilan bog\'liq hamma narsani o\'z zimmasiga olamiz.'
    },
    faqs: [
      { q: 'Tozalash vaqtida uyda bo\'lishim kerakmi?', a: 'Yo\'q, kalitlarni qoldirishingiz yoki kon\'yerja orqali kirishni tashkil qilishingiz mumkin.' },
      { q: 'Qanchalik tez kelishingiz mumkin?', a: 'Odatda 24 soat ichida, tezkor holatlarda esa shu kunning o\'zida.' },
      { q: 'Xavfsiz kimyoviy vositalar ishlatasizmi?', a: 'Ha, faqat allergiya va bolalar uchun xavfsiz professional vositalar.' },
      { q: 'Karta yoki Payme/Click orqali to\'lash mumkinmi?', a: 'Ha, naqd pul, bank o\'tkazmalari va Payme, Click orqali to\'lovlarni qabul qilamiz.' },
      { q: 'Dam olish va bayram kunlari ishlaysizmi?', a: 'Ha, dam olish kunlarisiz, 8:00 dan 22:00 gacha, bayramlarda ham ishlaymiz.' }
    ],
    contact: {
      title: 'Biz bilan bog\'laning',
      subtitle: 'Qulay aloqa usulini tanlang — tezda javob beramiz.',
      hours: 'Har kuni, 8:00–22:00 · Butun Toshkent bo\'ylab ishlaymiz',
      channelPhone: 'Telefon'
    },
    mobileCta: { call: 'Qo\'ng\'iroq qilish', whatsapp: 'WhatsApp' },
    footer: '© 2026 Soclean · Toshkent · +998 90 123 45 67'
  }
};

let currentLang = localStorage.getItem('site-lang') || 'uz';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site-lang', lang);
  document.documentElement.lang = lang === 'uz' ? 'uz' : 'ru';
  document.title = lang === 'uz' ? 'Soclean — Toshkentda zamonaviy klining' : 'Soclean — современный клининг в Ташкенте';

  const data = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = key.split('.').reduce((acc, part) => acc && acc[part], data);
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = key.split('.').reduce((acc, part) => acc && acc[part], data);
    if (typeof value === 'string') el.setAttribute('placeholder', value);
  });

  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.querySelectorAll('[data-i18n-nav]').forEach((link) => {
    const key = link.getAttribute('data-i18n-nav');
    link.textContent = data.nav[key];
  });
}

function initTheme() {
  const toggle = document.querySelector('.theme-toggle');
  const saved = localStorage.getItem('site-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  toggle?.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('site-theme', next);
  });
}

function initMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => nav?.classList.toggle('open'));
  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

function initHeaderScroll() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;
  const onScroll = () => topbar.classList.toggle('is-scrolled', window.scrollY > 20);
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function animateCount(el) {
  const text = el.textContent;
  const match = text.match(/\d[\d\s]*/);
  if (!match) return;
  const raw = match[0];
  const trimmed = raw.trim();
  const target = parseInt(trimmed.replace(/\s/g, ''), 10);
  if (Number.isNaN(target)) return;
  const prefix = text.slice(0, match.index);
  const trailingSpace = raw.slice(trimmed.length);
  const suffix = trailingSpace + text.slice(match.index + raw.length);
  const duration = 1100;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    el.textContent = prefix + current.toLocaleString('ru-RU') + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = text;
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const items = document.querySelectorAll('.stat strong, .about-stat strong');
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  items.forEach((el) => io.observe(el));
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.08}s`;
    io.observe(el);
  });
}

document.querySelectorAll('.lang-toggle').forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
});

initTheme();
initMenu();
initReveal();
initHeaderScroll();
initCounters();
setLanguage(currentLang);
