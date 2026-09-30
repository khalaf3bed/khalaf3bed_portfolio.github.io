// אתחול אייקונים
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// מילון תרגומים מלא ל-4 השפות כולל טקסט סטטוס כפול (פרילנס / שכיר)
const translations = {
  he: {
    dir: 'rtl',
    toastCopied: 'האימייל הועתק בהצלחה!',
    navWork: 'עבודות',
    navExp: 'ניסיון',
    navSkills: 'כישורים',
    status1: 'זמין לפרויקטים חדשים',
    status2: 'פתוח להצעות עבודה ומשרות',
    heroTitle: 'עבד ח\'לף.',
    heroBio: 'מפתח אתרים ואיש תקשורת שיווקית. משלב בין קוד נקי לחשיבה אסטרטגית ליצירת חוויות דיגיטליות בעלות משמעות וערך.',
    btnContact: 'בוא נדבר',
    btnCopyEmail: 'העתק אימייל',
    mailSubject: 'פנייה מהאתר האישי - עבד ח\'לף',
    sectionWorkTitle: 'פרויקטים נבחרים',
    filterAll: 'הכל',
    filterCode: 'פיתוח וקוד',
    filterMarketing: 'שיווק ואסטרטגיה',
    p1Title: 'אסטרטגיה שיווקית למרכז הספורט',
    p1Desc: 'בניית תוכנית תקשורת שיווקית אסטרטגית רב-ערוצית למרכז הספורט באוניברסיטת חיפה, כולל מחקר קהלים, מיתוג וחיבור בין כושר להצלחה אקדמית.',
    p2Title: 'ChikChak — Resume Builder',
    p2Desc: 'אפליקציית ווב שנבנתה מאפס בשבוע ימים, המאפשרת יצירת קורות חיים מותאמים להייטק במהירות וללא בזבוז זמן.',
    p3Title: 'משחק זיכרון אינטראקטיבי (האקתון)',
    p3Desc: 'פיתוח משחק בצוות במסגרת האקתון, עם מיקוד מיוחד בחוויית משתמש חלקה, ממשק נקי ותנועה זורמת.',
    p4Title: 'אתרי לקוחות מותאמים אישית',
    p4Desc: 'אפיון ובניית אתרים רספונסיביים ומהירים ללקוחות מקומיים עם חוויית גלישה מודרנית.',
    sectionExpTitle: 'ניסיון מקצועי והשכלה',
    exp1Role: 'מפתח וורדפרס (Wordpress Developer)',
    exp1Org: 'המרכז היהודי-ערבי, אוניברסיטת חיפה',
    exp1Desc: 'ניהול תוכן שוטף, ביצוע שדרוגים והבטחת אתרים פעילים, מאובטחים ותקינים ברמה גבוהה.',
    exp2Role: 'מפתח פרונטאנד עצמאי (Freelance Frontend)',
    exp2Org: 'עבודה עם לקוחות ועסקים מקומיים',
    exp2Desc: 'יצירת אתרים מותאמים אישית תוך שימת דגש על עיצוב נקי וביצועים מהירים.',
    exp3Role: 'תואר ראשון בתקשורת (B.A)',
    exp3Org: 'אוניברסיטת חיפה',
    exp4Role: 'Full-Stack Bootcamp (720 שעות)',
    exp4Org: 'Appleseeds Academy',
    exp4Desc: 'הכשרה אינטנסיבית המעודדת למידה עצמאית: JavaScript, React, Node.js, MongoDB, Git ו-REST APIs.',
    sectionSkillsTitle: 'כישורים וארגז כלים',
    skillCatDev: 'פיתוח וטכנולוגיות',
    skillCatMkt: 'שיווק, תוכן ועיצוב',
    langAr: 'ערבית:',
    langArLevel: 'שפת אם (Native)',
    langHe: 'עברית:',
    langHeLevel: 'רמה מתקדמת (Advanced)',
    langEn: 'אנגלית:',
    langEnLevel: 'רמה בינונית (Intermediate)',
    footerTagline: 'מעוצב בפשטות ודיוק.'
  },
  ar: {
    dir: 'rtl',
    toastCopied: 'تم نسخ البريد الإلكتروني بنجاح!',
    navWork: 'الأعمال',
    navExp: 'المسار',
    navSkills: 'المهارات',
    status1: 'متاح لاستقبال مشاريع جديدة',
    status2: 'منفتح على فرص عمل وعروض توظيف',
    heroTitle: 'عبد خلف.',
    heroBio: 'مطور ويب ومتخصص في الاتصال التسويقي. أدمج بين كتابة الكود البرمجي النظيف والتفكير الاستراتيجي لبناء مواقع تفاعلية هادفة وذات قيمة.',
    btnContact: 'تواصل معي',
    btnCopyEmail: 'نسخ الإيميل',
    mailSubject: 'تواصل من الموقع الشخصي - عبد خلف',
    sectionWorkTitle: 'المشاريع المختارة',
    filterAll: 'الكل',
    filterCode: 'برمجة',
    filterMarketing: 'تسويق واستراتيجية',
    p1Title: 'استراتيجية تسويقية لمركز الرياضة',
    p1Desc: 'بناء خطة اتصال تسويقية استراتيجية متكاملة لمركز الرياضة بجامعة حيفا، تتضمن أبحاث الجمهور، تحليل المنافسين، وسرد قصصي يربط الرياضة بالنجاح الأكاديمي.',
    p2Title: 'ChikChak — Resume Builder',
    p2Desc: 'تطبيق ويب تم بناؤه من الصفر خلال أسبوع واحد مخصص لمجال التقنية لتمكين المستخدمين من إعداد سير ذاتية متقنة باحترافية وسرعة.',
    p3Title: 'لعبة ذاكرة تفاعلية (هاكاثون)',
    p3Desc: 'تطوير لعبة تفاعلية جماعية خلال هاكاثون، مع التركيز المكثف على تجربة المستخدم وسلاسة واجهة الاستخدام (UI).',
    p4Title: 'مواقع مخصصة لعملاء ومصالح تجارية',
    p4Desc: 'تصميم وبناء مواقع سريعة التجاوب ومتوافقة مع مختلف الشاشات بالتعاون مع عملاء محليين.',
    sectionExpTitle: 'المسار المهني والأكاديمي',
    exp1Role: 'مطور ووردبريس (Wordpress Developer)',
    exp1Org: 'المركز اليهودي-العربي، جامعة حيفا',
    exp1Desc: 'إدارة المحتوى الرقمي، تحديث وتطوير المواقع لضمان تشغيل عالي الجودة والأداء.',
    exp2Role: 'مطور واجهات مستقل (Freelance Frontend)',
    exp2Org: 'مشاريع وعملاء محليين',
    exp2Desc: 'تطوير مواقع عصرية متجاوبة وسهلة الاستخدام تركز على سرعة التحميل ووضوح المحتوى.',
    exp3Role: 'بكالوريوس في الاتصال والإعلام (B.A)',
    exp3Org: 'جامعة حيفا',
    exp4Role: 'Full-Stack Bootcamp (720 ساعة)',
    exp4Org: 'Appleseeds Academy',
    exp4Desc: 'تدريب مكثف: JavaScript, React, Node.js, MongoDB, Git, و-RESTful APIs.',
    sectionSkillsTitle: 'المهارات والتقنيات',
    skillCatDev: 'التطوير والبرمجة',
    skillCatMkt: 'التسويق والتصميم',
    langAr: 'العربية:',
    langArLevel: 'اللغة الأم (Native)',
    langHe: 'العبرية:',
    langHeLevel: 'مستوى متقدم (Advanced)',
    langEn: 'الإنجليزية:',
    langEnLevel: 'مستوى متوسط (Intermediate)',
    footerTagline: 'مصمم بأسلوب تبسيطي هادئ.'
  },
  en: {
    dir: 'ltr',
    toastCopied: 'Email copied to clipboard!',
    navWork: 'Work',
    navExp: 'Journey',
    navSkills: 'Skills',
    status1: 'Available for new projects',
    status2: 'Open to full-time opportunities',
    heroTitle: 'Abed Khalaf.',
    heroBio: 'Web Developer & Marketing Communication Specialist. Merging clean code with strategic insights to build purposeful digital experiences.',
    btnContact: 'Get in Touch',
    btnCopyEmail: 'Copy Email',
    mailSubject: 'Inquiry from Portfolio - Abed Khalaf',
    sectionWorkTitle: 'Selected Projects',
    filterAll: 'All',
    filterCode: 'Code',
    filterMarketing: 'Marketing & Strategy',
    p1Title: 'Sports Center Marketing Strategy',
    p1Desc: 'Developed a comprehensive marketing communication strategy for Haifa University Sports Center, connecting athletic performance with academic success.',
    p2Title: 'ChikChak — Resume Builder',
    p2Desc: 'A fast, tech-focused resume builder built from scratch in one week using ReactJS to help job seekers create resumes effortlessly.',
    p3Title: 'Interactive Memory Game (Hackathon)',
    p3Desc: 'Collaborative development of an engaging memory game during a high-paced hackathon, centered on intuitive UI/UX design.',
    p4Title: 'Custom Client Websites',
    p4Desc: 'Designed and engineered responsive, high-performance web solutions for businesses and local clients.',
    sectionExpTitle: 'Experience & Education',
    exp1Role: 'WordPress Developer',
    exp1Org: 'Jewish-Arab Center, University of Haifa',
    exp1Desc: 'Overseeing content management, security updates, and performance optimization across multi-stakeholder web platforms.',
    exp2Role: 'Freelance Frontend Developer',
    exp2Org: 'Local Businesses & Independent Clients',
    exp2Desc: 'Built modern, responsive web experiences with strong emphasis on speed, layout clarity, and mobile usability.',
    exp3Role: 'B.A. in Communication',
    exp3Org: 'University of Haifa',
    exp4Role: 'Full-Stack Bootcamp (720 Hours)',
    exp4Org: 'Appleseeds Academy',
    exp4Desc: 'Intensive engineering program covering JavaScript, React, Node.js, MongoDB, Git workflows, and RESTful APIs.',
    sectionSkillsTitle: 'Capabilities & Toolkit',
    skillCatDev: 'Engineering & CMS',
    skillCatMkt: 'Marketing & Design',
    langAr: 'Arabic:',
    langArLevel: 'Native',
    langHe: 'Hebrew:',
    langHeLevel: 'Advanced',
    langEn: 'English:',
    langEnLevel: 'Intermediate',
    footerTagline: 'Crafted with precision & minimalism.'
  },
  es: {
    dir: 'ltr',
    toastCopied: '¡Correo copiado con éxito!',
    navWork: 'Proyectos',
    navExp: 'Experiencia',
    navSkills: 'Habilidades',
    status1: 'Disponible para nuevos proyectos',
    status2: 'Abierto a oportunidades laborales',
    heroTitle: 'Abed Khalaf.',
    heroBio: 'Desarrollador Web y Especialista en Comunicación y Marketing. Combinando código limpio con visión estratégica para crear experiencias digitales de alto impacto.',
    btnContact: 'Contactar',
    btnCopyEmail: 'Copiar Email',
    mailSubject: 'Contacto desde el Portafolio - Abed Khalaf',
    sectionWorkTitle: 'Proyectos Destacados',
    filterAll: 'Todos',
    filterCode: 'Desarrollo',
    filterMarketing: 'Marketing y Estrategia',
    p1Title: 'Estrategia de Marketing - Centro Deportivo',
    p1Desc: 'Desarrollo de un plan de comunicación estratégica multicanal para el Centro Deportivo de la Universidad de Haifa, uniendo el deporte con el éxito académico.',
    p2Title: 'ChikChak — Creador de Currículums',
    p2Desc: 'Aplicación web creada desde cero en una semana con ReactJS, diseñada para crear currículums para el sector tecnológico de forma rápida y sencilla.',
    p3Title: 'Juego de Memoria Interactivo (Hackathon)',
    p3Desc: 'Desarrollo colaborativo durante un hackathon, centrado en una interfaz de usuario fluida y una experiencia visual intuitiva.',
    p4Title: 'Sitios Web a Medida para Clientes',
    p4Desc: 'Diseño y desarrollo de sitios web modernos, rápidos y totalmente adaptables a móviles para empresas y clientes locales.',
    sectionExpTitle: 'Experiencia y Educación',
    exp1Role: 'Desarrollador WordPress',
    exp1Org: 'Centro Judeo-Árabe, Universidad de Haifa',
    exp1Desc: 'Gestión de contenidos, actualizaciones técnicas y mantenimiento de plataformas web de alto rendimiento.',
    exp2Role: 'Desarrollador Frontend Freelance',
    exp2Org: 'Clientes y Empresas Locales',
    exp2Desc: 'Desarrollo de soluciones web a medida con enfoque en velocidad, limpieza visual y facilidad de uso.',
    exp3Role: 'Licenciatura en Comunicación (B.A.)',
    exp3Org: 'Universidad de Haifa',
    exp4Role: 'Bootcamp Full-Stack (720 horas)',
    exp4Org: 'Appleseeds Academy',
    exp4Desc: 'Formación intensiva: JavaScript, React.js, Node.js, HTML, CSS, MongoDB, Git y APIs RESTful.',
    sectionSkillsTitle: 'Habilidades y Tecnologías',
    skillCatDev: 'Desarrollo y CMS',
    skillCatMkt: 'Marketing y Diseño',
    langAr: 'Árabe:',
    langArLevel: 'Nativo',
    langHe: 'Hebreo:',
    langHeLevel: 'Avanzado',
    langEn: 'Inglés:',
    langEnLevel: 'Intermedio',
    footerTagline: 'Diseñado con precisión y minimalismo.'
  }
};

// 1. ניהול מצב יום / לילה (אוטומטי לפי הטלפון + בחירה ידנית)
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function applyTheme(isDark) {
  if (isDark) {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// קביעת מצב בטעינה (שמירה קודמת או הגדרת מכשיר)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme === 'dark');
} else {
  applyTheme(systemPrefersDark.matches);
}

// האזנה לשינוי חי בהגדרות הטלפון/מחשב
systemPrefersDark.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    applyTheme(e.matches);
  }
});

// לחיצה על כפתור החלפת מצב
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isCurrentlyDark = htmlElement.classList.contains('dark');
    const newTheme = isCurrentlyDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme === 'dark');
  });
}

// 2. ניהול והחלפת שפות
function setLanguage(lang) {
  const selected = translations[lang] || translations.he;
  document.documentElement.lang = lang;
  document.documentElement.dir = selected.dir;

  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    if (selected.dir === 'rtl') {
      progressBar.classList.remove('origin-left');
      progressBar.classList.add('origin-right');
    } else {
      progressBar.classList.remove('origin-right');
      progressBar.classList.add('origin-left');
    }
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (selected[key]) {
      el.textContent = selected[key];
    }
  });

  const contactBtn = document.getElementById('contact-action-btn');
  if (contactBtn && selected.mailSubject) {
    contactBtn.href = `mailto:abdallahkf10@gmail.com?subject=${encodeURIComponent(selected.mailSubject)}`;
  }

  localStorage.setItem('preferred_lang', lang);
  const switcher = document.getElementById('lang-switcher');
  if (switcher) switcher.value = lang;

  updateStatusText();
}

const initialLang = localStorage.getItem('preferred_lang') || 'he';
setLanguage(initialLang);

const langSwitcher = document.getElementById('lang-switcher');
if (langSwitcher) {
  langSwitcher.addEventListener('change', (e) => {
    setLanguage(e.target.value);
  });
}

// 3. החלפת טקסט סטטוס זמינות (פרויקטים / שכיר) כל 4 שניות
let currentStatusIndex = 0;
const statusTextEl = document.getElementById('status-badge-text');

function updateStatusText() {
  if (!statusTextEl) return;
  const currentLang = document.documentElement.lang || 'he';
  const langPack = translations[currentLang] || translations.he;
  const statuses = [langPack.status1, langPack.status2];

  statusTextEl.style.opacity = '0';
  setTimeout(() => {
    statusTextEl.textContent = statuses[currentStatusIndex];
    statusTextEl.style.opacity = '1';
  }, 250);
}

setInterval(() => {
  currentStatusIndex = (currentStatusIndex === 0) ? 1 : 0;
  updateStatusText();
}, 4000);

// 4. פס התקדמות קריאה
window.addEventListener('scroll', () => {
  const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = totalScroll > 0 ? (window.scrollY / totalScroll) : 0;
  const pb = document.getElementById('scroll-progress');
  if (pb) pb.style.transform = `scaleX(${progress})`;
});

// 5. תאורת עכבר רכה למחשב
const glow = document.getElementById('ambient-glow');
if (glow && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

// 6. העתקת אימייל עם חלונית Toast
const copyBtn = document.getElementById('copy-email-btn');
const toast = document.getElementById('toast');
if (copyBtn && toast) {
  copyBtn.addEventListener('click', () => {
    const email = copyBtn.getAttribute('data-email');
    navigator.clipboard.writeText(email).then(() => {
      toast.classList.remove('opacity-0', 'translate-y-3', 'pointer-events-none');
      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-3', 'pointer-events-none');
      }, 2200);
    }).catch(() => {
      window.location.href = `mailto:${email}`;
    });
  });
}

// 7. סינון פרויקטים
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('active', 'bg-zinc-900', 'text-white', 'dark:bg-zinc-100', 'dark:text-zinc-900');
      b.classList.add('text-zinc-500');
    });
    btn.classList.add('active', 'bg-zinc-900', 'text-white', 'dark:bg-zinc-100', 'dark:text-zinc-900');
    btn.classList.remove('text-zinc-500');

    const filter = btn.getAttribute('data-filter');
    projectItems.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.style.display = 'flex';
        setTimeout(() => { item.style.opacity = '1'; }, 10);
      } else {
        item.style.opacity = '0';
        setTimeout(() => { item.style.display = 'none'; }, 150);
      }
    });
  });
});
