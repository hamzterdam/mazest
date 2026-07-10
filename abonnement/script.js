const PAYMENT_LINKS = {
  monthly3: "https://buy.stripe.com/28E14mfy5fyV6br7ea08g01",
  monthly7: "https://buy.stripe.com/bJeeVc1Hf86t1Vb0PM08g02",
  monthly15: "https://buy.stripe.com/dRmbJ05XvaeB0R7gOK08g03",
  annual30: "https://buy.stripe.com/bJebJ0dpX4Uh1Vbbuq08g04",
  annual70: "https://buy.stripe.com/28E7sK2LjgCZarH56208g05",
  annual150: "https://buy.stripe.com/dRmbJ0fy59ax2ZfdCy08g06",
  oneTime: "https://donate.stripe.com/9B65kCgC92M99nD9mi08g07"
};

const STRIPE_LOCALES = {
  en: "en",
  fr: "fr",
  de: "de",
  tr: "tr",
  za: "en",
  ku: "en"
};

const copy = {
  en: {
    navHome: "Home",
    navMagazine: "Magazine",
    navTranslator: "Translator",
    navContact: "Contact",
    heroEyebrow: "Support Ma'z Êst",
    heroTitle: "Subscribe and help keep Zazakî alive online.",
    heroText: "Your support helps us publish Ma'z Êst Magazine, build Zazakî learning tools, document Kurdish languages and keep resources accessible to everyone.",
    heroCta: "Choose a plan",
    heroGift: "Give once",
    impactLabel: "Recommended",
    monthShort: "month",
    impactText: "A realistic monthly amount for readers who want to support regular publications and digital tools.",
    plansEyebrow: "Subscription system",
    plansTitle: "Choose monthly or annual support",
    plansText: "These amounts are designed to stay accessible while giving Ma'z Êst stable support.",
    monthly: "Monthly",
    annual: "Annual",
    oneTimeEyebrow: "One-time payment",
    oneTimeTitle: "Choose your own amount",
    oneTimeText: "If you prefer not to subscribe, you can make a one-time contribution. Suggested minimum: 5 €.",
    amountLabel: "Amount in euros",
    supportOnce: "Support once",
    paymentNote: "Payment links are prepared for Stripe or PayPal. Until they are connected, the button opens an email request.",
    useEyebrow: "What your support funds",
    use1Title: "Magazine and articles",
    use1Text: "Editing, publishing and archiving Ma'z Êst issues and cultural articles.",
    use2Title: "Zazakî tools",
    use2Text: "Translator data, Bimus learning resources and digital language materials.",
    use3Title: "Documentation",
    use3Text: "Research, dictionaries, oral material and endangered-language documentation.",
    footerText: "Thank you for supporting language, culture and memory.",
    choose: "Choose this plan",
    perMonth: "/ month",
    perYear: "/ year",
    plans: {
      monthly: [
        ["Friend", 3, "monthly3", ["Accessible support", "Helps keep resources online", "Supporter updates"]],
        ["Supporter", 7, "monthly7", ["Recommended amount", "Supports magazine and tools", "Supporter updates"], true],
        ["Patron", 15, "monthly15", ["Strong monthly support", "Helps fund new resources", "Supporter updates"]]
      ],
      annual: [
        ["Friend", 30, "annual30", ["Simple annual support", "Helps keep resources online", "Supporter updates"]],
        ["Supporter", 70, "annual70", ["Recommended annual support", "Supports magazine and tools", "Supporter updates"], true],
        ["Patron", 150, "annual150", ["Strong annual support", "Helps fund new resources", "Supporter updates"]]
      ]
    }
  },
  tr: {
    navHome: "Ana sayfa",
    navMagazine: "Dergi",
    navTranslator: "Çeviri",
    navContact: "İletişim",
    heroEyebrow: "Ma'z Êst'i destekle",
    heroTitle: "Abone ol ve Zazakî'nin dijital alanda yaşamasına destek ver.",
    heroText: "Desteğiniz Ma'z Êst dergisini yayımlamamıza, Zazakî öğrenme araçları geliştirmemize, Kürt dillerini belgelememize ve kaynakları herkese açık tutmamıza yardımcı olur.",
    heroCta: "Paket seç",
    heroGift: "Tek seferlik destek",
    impactLabel: "Önerilen",
    monthShort: "ay",
    impactText: "Düzenli yayınları ve dijital araçları desteklemek isteyen okurlar için gerçekçi bir aylık tutar.",
    plansEyebrow: "Abonelik sistemi",
    plansTitle: "Aylık veya yıllık destek seç",
    plansText: "Bu tutarlar erişilebilir kalmak ve Ma'z Êst'e düzenli destek sağlamak için önerildi.",
    monthly: "Aylık",
    annual: "Yıllık",
    oneTimeEyebrow: "Tek seferlik ödeme",
    oneTimeTitle: "Kendi tutarını seç",
    oneTimeText: "Abone olmak istemiyorsan tek seferlik katkı yapabilirsin. Önerilen minimum: 5 €.",
    amountLabel: "Euro olarak tutar",
    supportOnce: "Tek sefer destekle",
    paymentNote: "Stripe veya PayPal bağlantıları için hazırlandı. Bağlantılar eklenene kadar buton e-posta talebi açar.",
    useEyebrow: "Desteğiniz neleri finanse eder",
    use1Title: "Dergi ve yazılar",
    use1Text: "Ma'z Êst sayılarının ve kültürel yazıların hazırlanması, yayını ve arşivlenmesi.",
    use2Title: "Zazakî araçları",
    use2Text: "Çeviri verileri, Bimus öğrenme kaynakları ve dijital dil materyalleri.",
    use3Title: "Belgeleme",
    use3Text: "Araştırma, sözlükler, sözlü materyaller ve tehlikedeki dil dokümantasyonu.",
    footerText: "Dili, kültürü ve hafızayı desteklediğiniz için teşekkür ederiz.",
    choose: "Bu paketi seç",
    perMonth: "/ ay",
    perYear: "/ yıl",
    plans: {
      monthly: [
        ["Dost", 3, "monthly3", ["Erişilebilir destek", "Kaynakların çevrimiçi kalmasına yardım eder", "Destekçi güncellemeleri"]],
        ["Destekçi", 7, "monthly7", ["Önerilen tutar", "Dergi ve araçları destekler", "Destekçi güncellemeleri"], true],
        ["Koruyucu", 15, "monthly15", ["Güçlü aylık destek", "Yeni kaynakların hazırlanmasına yardım eder", "Destekçi güncellemeleri"]]
      ],
      annual: [
        ["Dost", 30, "annual30", ["Basit yıllık destek", "Kaynakların çevrimiçi kalmasına yardım eder", "Destekçi güncellemeleri"]],
        ["Destekçi", 70, "annual70", ["Önerilen yıllık destek", "Dergi ve araçları destekler", "Destekçi güncellemeleri"], true],
        ["Koruyucu", 150, "annual150", ["Güçlü yıllık destek", "Yeni kaynakların hazırlanmasına yardım eder", "Destekçi güncellemeleri"]]
      ]
    }
  },
  za: {
    navHome: "Keye",
    navMagazine: "Kovar",
    navTranslator: "Çarnayış",
    navContact: "Têkilî",
    heroEyebrow: "Ma'z Êst rê piştî bıde",
    heroTitle: "Abone bıbe û Zazakî dijîtal de zindî bımanê.",
    heroText: "Piştîdayışê to kovarê Ma'z Êst, amrazê fêrbiyayîşê Zazakî, belgekerdışê zonê kurdî û çıme yê vekerdî rê hetkarî kena.",
    heroCta: "Plan bıweçîne",
    heroGift: "Yew rey bıde",
    impactLabel: "Pêşniyar",
    monthShort: "aşme",
    impactText: "Seba wendoxan ke wazên weşan û amrazê dijîtal rê piştî bıdan, meblağê aşmeyî rast o.",
    plansEyebrow: "Sîstemê abonemanî",
    plansTitle: "Piştîdayışê aşmeyî yan serranî bıweçîne",
    plansText: "In meblağî seba erişnayîşê hêsan û piştîdayışê domdar ameyî pêşniyarkerdış.",
    monthly: "Aşmeyî",
    annual: "Serranî",
    oneTimeEyebrow: "Pardayışê yew reyî",
    oneTimeTitle: "Meblağê xo bıweçîne",
    oneTimeText: "Eger abone nêwazên, ti eşkenê yew rey piştî bıde. Minimumê pêşniyarî: 5 €.",
    amountLabel: "Meblağ bi euro",
    supportOnce: "Yew rey piştî bıde",
    paymentNote: "Linkê Stripe yan PayPal rê amade yo. Heta linkî nêbenê, buton e-posta vekeno.",
    useEyebrow: "Piştîdayışê to çi rê şino",
    use1Title: "Kovar û nuşteyî",
    use1Text: "Amadekerdiş, weşanayîş û arşîvkerdişê kovar û nuşteyan.",
    use2Title: "Amrazê Zazakî",
    use2Text: "Daneyê çarnayışî, çımeyê Bimus û materyalê dijîtal ê zonî.",
    use3Title: "Belgekerdış",
    use3Text: "Lêkolîn, ferheng, materyalê fekî û belgekerdışê zonê xeter de.",
    footerText: "Seba zon, kultur û bîr piştî dayışê to rê sipas.",
    choose: "En planî bıweçîne",
    perMonth: "/ aşme",
    perYear: "/ serre",
    plans: {
      monthly: [
        ["Dost", 3, "monthly3", ["Piştîdayışê hêsan", "Çımeyî online de manenê", "Agahîyê piştîdayoxî"]],
        ["Piştîdayox", 7, "monthly7", ["Meblağê pêşniyarî", "Kovar û amrazî piştî dano", "Agahîyê piştîdayoxî"], true],
        ["Parastox", 15, "monthly15", ["Piştîdayışê aşmeyî zexm", "Çımeyê neweyî rê hetkarî kena", "Agahîyê piştîdayoxî"]]
      ],
      annual: [
        ["Dost", 30, "annual30", ["Piştîdayışê serranî", "Çımeyî online de manenê", "Agahîyê piştîdayoxî"]],
        ["Piştîdayox", 70, "annual70", ["Piştîdayışê serranî pêşniyarî", "Kovar û amrazî piştî dano", "Agahîyê piştîdayoxî"], true],
        ["Parastox", 150, "annual150", ["Piştîdayışê serranî zexm", "Çımeyê neweyî rê hetkarî kena", "Agahîyê piştîdayoxî"]]
      ]
    }
  },
  ku: {
    navHome: "Destpêk",
    navMagazine: "Kovar",
    navTranslator: "Werger",
    navContact: "Têkilî",
    heroEyebrow: "Piştgiriya Ma'z Êst",
    heroTitle: "Abone bibin û alîkarî bikin Zazakî li dijîtalê zindî bimîne.",
    heroText: "Piştgiriya we alîkarî dike em Kovara Ma'z Êst biweşînin, amûrên fêrbûna Zazakî çêbikin, zimanên Kurdî belge bikin û çavkaniyan vekirî bihêlin.",
    heroCta: "Planek hilbijêre",
    heroGift: "Carekê bide",
    impactLabel: "Pêşniyar",
    monthShort: "meh",
    impactText: "Meblağeke mehane ya maqûl ji bo xwendevanên ku dixwazin weşan û amûrên dijîtal piştgirî bikin.",
    plansEyebrow: "Pergala abonementê",
    plansTitle: "Piştgiriya mehane an salane hilbijêre",
    plansText: "Ev meblağ ji bo gihîştinê hêsan û piştgiriya domdar hatine pêşniyarkirin.",
    monthly: "Mehane",
    annual: "Salane",
    oneTimeEyebrow: "Dayîna yek-carî",
    oneTimeTitle: "Meblağa xwe hilbijêre",
    oneTimeText: "Heke tu naxwazî abone bibî, dikarî carekê piştgirî bidî. Kêmtirîn pêşniyar: 5 €.",
    amountLabel: "Meblağ bi euro",
    supportOnce: "Carekê piştgirî bike",
    paymentNote: "Girêdanên Stripe an PayPal amade ne. Heya ku girêdan neyên girêdan, bişkok daxwaza e-nameyê vedike.",
    useEyebrow: "Piştgiriya te çi fînanse dike",
    use1Title: "Kovar û gotar",
    use1Text: "Amadekirin, weşandin û arşîvkirina hejmarên Ma'z Êst û gotarên çandî.",
    use2Title: "Amûrên Zazakî",
    use2Text: "Daneyên wergerê, çavkaniyên Bimus û materyalên zimanî yên dijîtal.",
    use3Title: "Belgekirin",
    use3Text: "Lêkolîn, ferheng, materyalên devkî û belgekirina zimanên di xetereyê de.",
    footerText: "Spas ji bo piştgiriya ziman, çand û bîrê.",
    choose: "Vî planî hilbijêre",
    perMonth: "/ meh",
    perYear: "/ sal",
    plans: {
      monthly: [
        ["Heval", 3, "monthly3", ["Piştgiriya hêsan", "Çavkanî li ser malperê dimînin", "Nûçeyên piştgirî"]],
        ["Piştgir", 7, "monthly7", ["Meblağa pêşniyarî", "Kovar û amûran piştgirî dike", "Nûçeyên piştgirî"], true],
        ["Parêzvan", 15, "monthly15", ["Piştgiriya mehane ya xurt", "Alîkarî ji bo çavkaniyên nû", "Nûçeyên piştgirî"]]
      ],
      annual: [
        ["Heval", 30, "annual30", ["Piştgiriya salane", "Çavkanî li ser malperê dimînin", "Nûçeyên piştgirî"]],
        ["Piştgir", 70, "annual70", ["Piştgiriya salane ya pêşniyarî", "Kovar û amûran piştgirî dike", "Nûçeyên piştgirî"], true],
        ["Parêzvan", 150, "annual150", ["Piştgiriya salane ya xurt", "Alîkarî ji bo çavkaniyên nû", "Nûçeyên piştgirî"]]
      ]
    }
  }
};

copy.fr = {
  ...copy.en,
  navHome: "Accueil",
  navMagazine: "Magazine",
  navTranslator: "Traducteur",
  navContact: "Contact",
  heroEyebrow: "Soutenir Ma'z Êst",
  heroTitle: "Abonnez-vous et aidez à garder le Zazakî vivant en ligne.",
  heroText: "Votre soutien nous aide à publier le magazine Ma'z Êst, créer des outils d'apprentissage du Zazakî, documenter les langues kurdes et garder les ressources accessibles à tous.",
  heroCta: "Choisir une formule",
  heroGift: "Donner une fois",
  impactLabel: "Recommandé",
  monthShort: "mois",
  impactText: "Un montant mensuel réaliste pour soutenir les publications régulières et les outils numériques.",
  plansEyebrow: "Système d'abonnement",
  plansTitle: "Choisissez un soutien mensuel ou annuel",
  plansText: "Ces montants restent accessibles tout en donnant à Ma'z Êst un soutien stable.",
  monthly: "Mensuel",
  annual: "Annuel",
  oneTimeEyebrow: "Paiement unique",
  oneTimeTitle: "Choisissez votre montant",
  oneTimeText: "Si vous préférez ne pas vous abonner, vous pouvez faire une contribution unique. Minimum suggéré : 5 €.",
  amountLabel: "Montant en euros",
  supportOnce: "Soutenir une fois",
  paymentNote: "Paiement sécurisé via Stripe.",
  useEyebrow: "Ce que votre soutien finance",
  use1Title: "Magazine et articles",
  use1Text: "Édition, publication et archivage des numéros Ma'z Êst et des articles culturels.",
  use2Title: "Outils Zazakî",
  use2Text: "Données du traducteur, ressources Bimus et supports linguistiques numériques.",
  use3Title: "Documentation",
  use3Text: "Recherche, dictionnaires, matériaux oraux et documentation des langues menacées.",
  footerText: "Merci de soutenir la langue, la culture et la mémoire.",
  choose: "Choisir cette formule",
  perMonth: "/ mois",
  perYear: "/ an",
  plans: {
    monthly: [
      ["Ami", 3, "monthly3", ["Soutien accessible", "Aide à maintenir les ressources en ligne", "Actualités des soutiens"]],
      ["Soutien", 7, "monthly7", ["Montant recommandé", "Soutient le magazine et les outils", "Actualités des soutiens"], true],
      ["Mécène", 15, "monthly15", ["Soutien mensuel fort", "Aide à financer de nouvelles ressources", "Actualités des soutiens"]]
    ],
    annual: [
      ["Ami", 30, "annual30", ["Soutien annuel simple", "Aide à maintenir les ressources en ligne", "Actualités des soutiens"]],
      ["Soutien", 70, "annual70", ["Soutien annuel recommandé", "Soutient le magazine et les outils", "Actualités des soutiens"], true],
      ["Mécène", 150, "annual150", ["Soutien annuel fort", "Aide à financer de nouvelles ressources", "Actualités des soutiens"]]
    ]
  }
};

copy.de = {
  ...copy.en,
  navHome: "Startseite",
  navMagazine: "Magazin",
  navTranslator: "Übersetzer",
  navContact: "Kontakt",
  heroEyebrow: "Ma'z Êst unterstützen",
  heroTitle: "Abonnieren Sie und helfen Sie, Zazakî online lebendig zu halten.",
  heroText: "Ihre Unterstützung hilft uns, das Ma'z Êst Magazin zu veröffentlichen, Zazakî-Lernwerkzeuge zu entwickeln, kurdische Sprachen zu dokumentieren und Ressourcen zugänglich zu halten.",
  heroCta: "Plan wählen",
  heroGift: "Einmal spenden",
  impactLabel: "Empfohlen",
  monthShort: "Monat",
  impactText: "Ein realistischer monatlicher Betrag für Leser, die regelmäßige Publikationen und digitale Werkzeuge unterstützen möchten.",
  plansEyebrow: "Abonnementsystem",
  plansTitle: "Wählen Sie monatliche oder jährliche Unterstützung",
  plansText: "Diese Beträge bleiben zugänglich und geben Ma'z Êst zugleich stabile Unterstützung.",
  monthly: "Monatlich",
  annual: "Jährlich",
  oneTimeEyebrow: "Einmalzahlung",
  oneTimeTitle: "Eigenen Betrag wählen",
  oneTimeText: "Wenn Sie kein Abo möchten, können Sie einmalig beitragen. Empfohlenes Minimum: 5 €.",
  amountLabel: "Betrag in Euro",
  supportOnce: "Einmal unterstützen",
  paymentNote: "Sichere Zahlung über Stripe.",
  useEyebrow: "Was Ihre Unterstützung finanziert",
  use1Title: "Magazin und Artikel",
  use1Text: "Redaktion, Veröffentlichung und Archivierung von Ma'z Êst-Ausgaben und Kulturartikeln.",
  use2Title: "Zazakî-Werkzeuge",
  use2Text: "Übersetzerdaten, Bimus-Lernressourcen und digitale Sprachmaterialien.",
  use3Title: "Dokumentation",
  use3Text: "Forschung, Wörterbücher, mündliches Material und Dokumentation gefährdeter Sprachen.",
  footerText: "Danke für Ihre Unterstützung von Sprache, Kultur und Erinnerung.",
  choose: "Diesen Plan wählen",
  perMonth: "/ Monat",
  perYear: "/ Jahr",
  plans: {
    monthly: [
      ["Freund", 3, "monthly3", ["Zugängliche Unterstützung", "Hilft, Ressourcen online zu halten", "Updates für Unterstützer"]],
      ["Unterstützer", 7, "monthly7", ["Empfohlener Betrag", "Unterstützt Magazin und Werkzeuge", "Updates für Unterstützer"], true],
      ["Förderer", 15, "monthly15", ["Starke monatliche Unterstützung", "Hilft, neue Ressourcen zu finanzieren", "Updates für Unterstützer"]]
    ],
    annual: [
      ["Freund", 30, "annual30", ["Einfache jährliche Unterstützung", "Hilft, Ressourcen online zu halten", "Updates für Unterstützer"]],
      ["Unterstützer", 70, "annual70", ["Empfohlene jährliche Unterstützung", "Unterstützt Magazin und Werkzeuge", "Updates für Unterstützer"], true],
      ["Förderer", 150, "annual150", ["Starke jährliche Unterstützung", "Hilft, neue Ressourcen zu finanzieren", "Updates für Unterstützer"]]
    ]
  }
};

const buttons = document.querySelectorAll("[data-lang]");
const billingButtons = document.querySelectorAll("[data-billing]");
const planGrid = document.querySelector("[data-plan-grid]");
const customAmountForm = document.querySelector(".custom-amount-form");
function detectPreferredLanguage() {
  const supported = ["en", "fr", "de", "tr", "ku", "za"];
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language || "en"];
  for (const locale of languages) {
    const normalized = locale.toLowerCase().replace("_", "-");
    const language = normalized.split("-")[0];
    const region = normalized.split("-")[1];
    if (normalized === "zza" || normalized.startsWith("zza-")) return "za";
    if (supported.includes(language)) return language;
    if (region === "fr") return "fr";
    if (region === "de") return "de";
    if (region === "tr") return "tr";
    if (region === "gb" || region === "us") return "en";
  }
  return "en";
}

function getInitialLanguage() {
  return localStorage.getItem("mazest-subscribe-language") || detectPreferredLanguage();
}

let currentLang = getInitialLanguage();
let currentBilling = "monthly";

function text(key) {
  return copy[currentLang][key] || copy.en[key] || "";
}

function setLanguage(lang, persist = true) {
  currentLang = copy[lang] ? lang : "en";
  document.documentElement.lang = currentLang === "za" ? "zza" : currentLang;
  document.querySelectorAll("[data-copy]").forEach((node) => {
    const value = text(node.dataset.copy);
    if (value) node.textContent = value;
  });
  buttons.forEach((button) => button.classList.toggle("active", button.dataset.lang === currentLang));
  if (persist) localStorage.setItem("mazest-subscribe-language", currentLang);
  renderPlans();
}

function requestLink(planKey, amount, label) {
  const link = PAYMENT_LINKS[planKey];
  if (link) {
    const url = new URL(link);
    url.searchParams.set("locale", STRIPE_LOCALES[currentLang] || "auto");
    return url.toString();
  }
  const subject = encodeURIComponent(`Ma'z Êst subscription - ${label}`);
  const body = encodeURIComponent(`Hello,\n\nI would like to support Ma'z Êst with this option:\n${label} - ${amount} €.\n\nPlease send me the payment link.\n`);
  return `mailto:mazestfr@gmail.com?subject=${subject}&body=${body}`;
}

function renderPlans() {
  const plans = copy[currentLang].plans[currentBilling];
  const suffix = currentBilling === "monthly" ? text("perMonth") : text("perYear");
  planGrid.innerHTML = plans.map(([name, price, key, benefits, recommended]) => `
    <article class="plan-card ${recommended ? "recommended" : ""}">
      <h3>${name}</h3>
      <div class="plan-price">${price} € <span>${suffix}</span></div>
      <ul>${benefits.map((item) => `<li>${item}</li>`).join("")}</ul>
      <a class="button ${recommended ? "primary" : "secondary"}" href="${requestLink(key, price, `${name} ${suffix}`)}">${text("choose")}</a>
    </article>
  `).join("");
}

buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang, true)));
billingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentBilling = button.dataset.billing;
    billingButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderPlans();
  });
});

customAmountForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const amount = Math.max(5, Number(new FormData(customAmountForm).get("amount")) || 5);
  window.location.href = requestLink("oneTime", amount, `One-time support ${amount} €`);
});

setLanguage(currentLang, Boolean(localStorage.getItem("mazest-subscribe-language")));
