const PAYMENT_LINKS = {
  monthly3: "https://buy.stripe.com/28E14mfy5fyV6br7ea08g01",
  monthly7: "https://buy.stripe.com/bJeeVc1Hf86t1Vb0PM08g02",
  monthly15: "https://buy.stripe.com/dRmbJ05XvaeB0R7gOK08g03",
  annual30: "https://buy.stripe.com/bJebJ0dpX4Uh1Vbbuq08g04",
  annual70: "https://buy.stripe.com/28E7sK2LjgCZarH56208g05",
  annual150: "https://buy.stripe.com/dRmbJ0fy59ax2ZfdCy08g06",
  oneTime: "https://donate.stripe.com/9B65kCgC92M99nD9mi08g07"
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

const buttons = document.querySelectorAll("[data-lang]");
const billingButtons = document.querySelectorAll("[data-billing]");
const planGrid = document.querySelector("[data-plan-grid]");
const customAmountForm = document.querySelector(".custom-amount-form");
let currentLang = localStorage.getItem("mazest-subscribe-language") || "en";
let currentBilling = "monthly";

function text(key) {
  return copy[currentLang][key] || copy.en[key] || "";
}

function setLanguage(lang) {
  currentLang = copy[lang] ? lang : "en";
  document.documentElement.lang = currentLang === "za" ? "zza" : currentLang;
  document.querySelectorAll("[data-copy]").forEach((node) => {
    const value = text(node.dataset.copy);
    if (value) node.textContent = value;
  });
  buttons.forEach((button) => button.classList.toggle("active", button.dataset.lang === currentLang));
  localStorage.setItem("mazest-subscribe-language", currentLang);
  renderPlans();
}

function requestLink(planKey, amount, label) {
  const link = PAYMENT_LINKS[planKey];
  if (link) return link;
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

buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
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

setLanguage(currentLang);
