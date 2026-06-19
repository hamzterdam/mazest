const pageCopy = {
  nav: {
    en: { home: "Home", about: "About Us", work: "Our Work", publications: "Publications", magazine: "Magazine", articles: "Articles", resources: "Resources", reports: "Reports", contact: "Contact" },
    ku: { home: "Destpêk", about: "Derbarê me", work: "Karê me", publications: "Weşan", magazine: "Kovar", articles: "Gotar", resources: "Çavkanî", reports: "Rapor", contact: "Têkilî" },
    za: { home: "Keye", about: "Derheqê Ma de", work: "Karê Ma", publications: "Weşanê Ma", magazine: "Kovar", articles: "Nuşteyî", resources: "Çımeyî", reports: "Raporî", contact: "Têkilî" }
  },
  common: {
    en: { search: "Search", apply: "Apply Filters", viewAll: "View all", email: "Enter your email", subscribe: "Subscribe", privacy: "We respect your privacy.", footer: "A language is not just words. It is memory, culture, identity and future." },
    ku: { search: "Lê bigere", apply: "Parzûnan bikar bîne", viewAll: "Hemû bibîne", email: "E-nameya xwe binivîse", subscribe: "Abone bibin", privacy: "Em rêzê li taybetiya we digirin.", footer: "Ziman tenê peyv nîne. Ew bîr, çand, nasname û pêşeroj e." },
    za: { search: "Cı geyre", apply: "Fîltreyan bişuxulne", viewAll: "Hemey bıvêne", email: "Adresa e-posteyî", subscribe: "Abone bıbe", privacy: "Ma taybetîya şima rê hurmet kenê.", footer: "Kovarê Ma’z Êst semedê zengînê Zazakî/Kirdkî." }
  },
  research: {
    hero: "url('assets/hero-mountains.png')",
    en: {
      title: "Research",
      crumb: "Home > Research",
      intro: "Advancing knowledge, preserving heritage, and supporting the vitality of Kurdish languages, with special focus on Zazaki, one of the world's endangered languages.",
      stats: [["50+", "Research Projects"], ["30+", "Researchers & Collaborators"], ["100+", "Publications"], ["10+", "Countries of Fieldwork"]],
      sideTitle: "Explore Research",
      side: ["All Projects", "Language Documentation", "Linguistics & Grammar", "Education & Literacy", "Culture & Oral Heritage", "Sociolinguistics", "Digital Humanities"],
      featuredTitle: "Featured Research Projects",
      cards: [
        ["Language Documentation", "Zazaki Grammar Project", "A comprehensive descriptive grammar of Zazaki documenting phonology, morphology and syntax.", "Zazaki (Dimli)", "2021 - Ongoing", "assets/research-desk.png"],
        ["Dialect Survey", "Zazaki Dialect Atlas", "Mapping dialectal variation and linguistic features across Zazaki-speaking regions.", "Turkey, Iran, Iraq", "2022 - Ongoing", "assets/hero-mountains.png"],
        ["Oral Heritage", "Folklore and Oral Traditions", "Collecting and analyzing oral narratives, proverbs, songs and customs of Zazaki communities.", "Zazaki Regions", "2019 - Ongoing", "assets/research-desk.png"],
        ["Education & Literacy", "Zazaki in Education", "Developing curricula and resources to promote mother-tongue education and literacy in Zazaki.", "Pilot Programs", "2020 - Ongoing", "assets/cultural-writer.png"]
      ],
      approach: [["Methodology", "Rigorous academic methods in linguistics, anthropology and digital humanities guide our research.", "assets/hero-mountains.png"], ["Archives", "We preserve rare manuscripts, recordings and historical materials for future generations.", "assets/research-desk.png"], ["Fieldwork", "Our teams work closely with communities to document language use and cultural practices.", "assets/cultural-writer.png"]],
      quote: "Research is the bridge between our past and our future; it keeps our language alive and our identity strong."
    },
    ku: {
      title: "Lêkolîn",
      crumb: "Destpêk > Lêkolîn",
      intro: "Em zanînê pêş dixin, mîratê diparêzin û jiyana zimanên Kurdî xurt dikin, bi girîngiya taybet li ser Zazakî ku yek ji zimanên di xetereyê de ye.",
      stats: [["50+", "Projeyên lêkolînê"], ["30+", "Lêkolîner û hevkar"], ["100+", "Weşan"], ["10+", "Welatên xebata meydanê"]],
      sideTitle: "Lêkolînê bigere",
      side: ["Hemû proje", "Belgekirina ziman", "Zimannasî û rêziman", "Perwerde û xwendin", "Çand û mîrata devkî", "Civaknasîya zimanî", "Humanîstîka dîjîtal"],
      featuredTitle: "Projeyên lêkolînê yên bijartî",
      cards: [
        ["Belgekirina ziman", "Projeya rêzimana Zazakî", "Rêzimana berfireh a Zazakî ku dengnasî, peyvsazî û hevoksaziyê belge dike.", "Zazakî (Dimilî)", "2021 - Didome", "assets/research-desk.png"],
        ["Lêkolîna devokan", "Atlasa devokên Zazakî", "Nexşekirina cudahiya devokan û taybetmendiyên zimanî li herêmên Zazakîaxêv.", "Tirkiye, Îran, Iraq", "2022 - Didome", "assets/hero-mountains.png"],
        ["Mîrata devkî", "Folklor û kevneşopiyên devkî", "Berhevkirin û vekolîna çîrok, gotinên pêşiyan, stran û adetên civakên Zazakî.", "Herêmên Zazakî", "2019 - Didome", "assets/research-desk.png"],
        ["Perwerde û xwendin", "Zazakî di perwerdeyê de", "Çêkirina bername û çavkaniyan ji bo perwerdeya zimanê dayikê û xwendina Zazakî.", "Bernameyên pîlot", "2020 - Didome", "assets/cultural-writer.png"]
      ],
      approach: [["Rêbaz", "Rêbazên akademîk ên zimannasî, antropolojî û humanîstîka dîjîtal xebata me rêber dikin.", "assets/hero-mountains.png"], ["Arşîv", "Em destnivîs, dengtomar û belgeyên dîrokî ji bo nifşên bê diparêzin.", "assets/research-desk.png"], ["Xebata meydanê", "Tîmên me bi civakan re ji nêz ve dixebitin da bikaranîna ziman û pratîkên çandî belge bikin.", "assets/cultural-writer.png"]],
      quote: "Lêkolîn pirek e di navbera rabirdû û pêşeroja me de; zimanê me zindî û nasnameya me xurt dihêle."
    }
  },
  reports: {
    hero: "url('assets/research-desk.png')",
    en: {
      title: "Reports",
      crumb: "Home > Reports",
      intro: "Evidence-based research and field studies on Kurdish languages, dialects and communities. Our reports inform policy, support revitalization and guide future action.",
      featuredLabel: "Featured external report",
      featuredTitle: "Children's Access to Zazaki",
      featuredText: "A concrete language-rights report on Zazaki access, education barriers, media needs and the importance of teaching materials for children.",
      featuredLink: "https://minorityrights.org/app/uploads/2024/04/childrens-access-to-zazaki-en.pdf",
      featuredAction: "Open MRGI report",
      featuredMeta: ["2024", "PDF report", "English"],
      summaryTitle: "Executive Summary",
      summaryText: "This section now separates Ma'z Êst work from verified external references: UNESCO frameworks, legal texts, Zazaki documentation, Kurdish NLP papers and language-rights reporting.",
      cardsTitle: "Browse Reports",
      cards: [
        ["UNESCO", "Framework", "Language Vitality and Endangerment", "Methodological reference for transmission, domains of use, education materials, policy and documentation quality.", "assets/unesco.png", "https://unesdoc.unesco.org/ark:/48223/pf0000183699", "Open UNESCO record"],
        ["2022-2032", "Action Plan", "International Decade of Indigenous Languages", "Global UNESCO/UN action plan centered on revitalization, education, digital inclusion and language rights.", "assets/research-desk.png", "https://unesdoc.unesco.org/ark:/48223/pf0000379857", "Open UNESCO record"],
        ["2024", "Rights report", "Children's Access to Zazaki", "Report useful for the education and language-rights pages, especially legal status, media and learning-material gaps.", "assets/zaza-map.svg", "https://minorityrights.org/app/uploads/2024/04/childrens-access-to-zazaki-en.pdf", "Open report"],
        ["1992", "Legal text", "European Charter for Regional or Minority Languages", "Council of Europe treaty covering education, justice, administration, media, culture and cross-border exchanges.", "assets/research-desk.png", "https://www.coe.int/en/web/conventions/full-list?module=treaty-detail&treatynum=148", "Open treaty"],
        ["2020", "NLP paper", "Towards Kurdish Machine Translation", "Open ACL paper describing Kurdish as a low-resource setting for computational language technology.", "assets/hero-mountains.png", "assets/resources/kurdish-machine-translation-acl-2020.pdf", "Open local PDF"],
        ["2023", "Corpus paper", "Introducing Laki Kurdish", "Open ACL paper connected to Kurdish language resources, corpora and documentation gaps.", "assets/cultural-writer.png", "assets/resources/kurdish-laki-corpus-acl-2023.pdf", "Open local PDF"]
      ],
      topics: [["Linguistic Documentation", "10"], ["Endangered Dialects", "8"], ["Language in Education", "4"], ["Policy & Advocacy", "3"], ["Sociolinguistic Studies", "5"], ["Community Research", "6"]]
    },
    ku: {
      title: "Rapor",
      crumb: "Destpêk > Rapor",
      intro: "Lêkolîn û xebatên meydanê yên li ser ziman, devok û civakên Kurdî. Raporên me siyasetan agahdar dikin, vejandina ziman piştgirî dikin û rêyên bê nîşan didin.",
      featuredLabel: "Rapora derveyî ya bijartî",
      featuredTitle: "Gihiştina zarokan bi Zazakî",
      featuredText: "Raporeke zehf bikêrhatî li ser gihiştina Zazakî, astengiyên perwerdeyê, medyayê û hewcedariya materyalên fêrbûnê.",
      featuredLink: "https://minorityrights.org/app/uploads/2024/04/childrens-access-to-zazaki-en.pdf",
      featuredAction: "Rapora MRGI veke",
      featuredMeta: ["2024", "PDF report", "English"],
      summaryTitle: "Kurteya rêveberiyê",
      summaryText: "Ev beş niha xebata Ma'z Êst ji referansên rast cuda dike: çarçoveyên UNESCO, tekstên mafî, belgekirina Zazakî, gotarên NLP yên Kurdî û raporên mafên zimanî.",
      cardsTitle: "Raporan bigere",
      cards: [
        ["UNESCO", "Çarçove", "Language Vitality and Endangerment", "Referanseke rêbazî ji bo veguhestin, qada bikaranînê, materyal, siyaset û kalîteya belgekirinê.", "assets/unesco.png", "https://unesdoc.unesco.org/ark:/48223/pf0000183699", "Qeyda UNESCO veke"],
        ["2022-2032", "Plana çalakiyê", "International Decade of Indigenous Languages", "Plana çalakiya UNESCO/UN li ser vejandin, perwerde, tevlêbûna dîjîtal û mafên zimanî.", "assets/research-desk.png", "https://unesdoc.unesco.org/ark:/48223/pf0000379857", "Qeyda UNESCO veke"],
        ["2024", "Rapora mafan", "Children's Access to Zazaki", "Ji bo rûpelên perwerde û mafên zimanî bikêrhatî ye: statû, medya û kêmasiya materyalan.", "assets/zaza-map.svg", "https://minorityrights.org/app/uploads/2024/04/childrens-access-to-zazaki-en.pdf", "Raporê veke"],
        ["1992", "Teksta qanûnî", "European Charter for Regional or Minority Languages", "Peymana Konseya Ewropayê li ser perwerde, dad, rêvebirin, medya, çand û têkiliyên der-sînorî.", "assets/research-desk.png", "https://www.coe.int/en/web/conventions/full-list?module=treaty-detail&treatynum=148", "Peymanê veke"],
        ["2020", "Gotara NLP", "Towards Kurdish Machine Translation", "Gotara vekirî ya ACL ku Kurdî wek rewşeke low-resource di teknolojiyê de rave dike.", "assets/hero-mountains.png", "assets/resources/kurdish-machine-translation-acl-2020.pdf", "PDFa herêmî veke"],
        ["2023", "Gotara korpusê", "Introducing Laki Kurdish", "Gotara ACL li ser çavkaniyên Kurdî, korpus û kêmasiyên belgekirinê.", "assets/cultural-writer.png", "assets/resources/kurdish-laki-corpus-acl-2023.pdf", "PDFa herêmî veke"]
      ],
      topics: [["Belgekirina zimanî", "10"], ["Devokên di xetereyê de", "8"], ["Ziman di perwerdeyê de", "4"], ["Siyaset û parêzvanî", "3"], ["Lêkolînên civak-zimanî", "5"], ["Lêkolîna civakî", "6"]]
    }
  },
  publications: {
    hero: "url('assets/magazine/mazest-homare-8-cover.jpeg')",
    en: {
      title: "Publications",
      crumb: "Home > Publications",
      intro: "Read Ma'z Êst magazine issues dedicated to Zazaca language, culture, history, science and contemporary Kurdish topics.",
      categories: ["All Publications", "Magazine Issues", "Zazaca", "Research", "Culture", "PDF", "Archive"],
      featuredTitle: "Kovara Ma'z Êst",
      books: [
        ["Magazine", "Ma'z Êst Homarê 9", "Upcoming Zazaca magazine issue from Ma'z Êst", "Yakında", "Yakında", "assets/magazine/mazest-homare-9-cover.jpeg", "", ""],
        ["Magazine", "Ma'z Êst Homarê 8", "Zazaca magazine issue, prepared by Ma'z Êst Çalışma Grubu", "France, 2023 · 44 pages", "PDF INDIR", "assets/magazine/mazest-homare-8-thumb.jpeg", "https://mazest.com/wp-content/uploads/2023/05/mazest-8-2023FINALE-2.pdf", "https://mazest.com/maz-est-homare-8/"],
        ["Magazine", "Ma'z Êst Homarê 7", "Zazaca magazine issue, prepared by Ma'z Êst Çalışma Grubu", "France, 2022 · 40 pages", "PDF INDIR", "assets/magazine/mazest-homare-7-thumb.jpeg", "https://mazest.com/wp-content/uploads/2023/05/MAZEST-NUMERO-2022-4.pdf", "https://mazest.com/maz-est-homare-7/"],
        ["Magazine", "Ma'z Êst Homarê 6", "Zazaca magazine issue, prepared by Ma'z Êst Çalışma Grubu", "France, 2022 · 44 pages", "PDF INDIR", "assets/magazine/mazest-homare-6-thumb.jpeg", "https://mazest.com/wp-content/uploads/2023/05/mazest-homare-6-2_removed-1.pdf", "https://mazest.com/maz-est-homare-6/"],
        ["Magazine", "Ma'z Êst Homarê 5", "Zazaca magazine issue listed in the Ma'z Êst archive", "PDF not available yet", "Yakında", "assets/magazine/mazest-homare-5-cover.jpeg", "", ""],
        ["Magazine", "Ma'z Êst Homarê 4", "Zazaca magazine issue listed in the Ma'z Êst archive", "PDF not available yet", "Yakında", "assets/magazine/mazest-homare-4-cover.jpeg", "", ""],
        ["Magazine", "Ma'z Êst Homarê 3", "Zazaca magazine issue listed in the Ma'z Êst archive", "PDF not available yet", "Yakında", "assets/magazine/mazest-homare-3-cover.jpeg", "", ""],
        ["Magazine", "Ma'z Êst Homarê 2", "Zazaca magazine issue listed in the Ma'z Êst archive", "PDF not available yet", "Yakında", "assets/magazine/mazest-homare-2-cover.jpeg", "", ""],
        ["Magazine", "Ma'z Êst Homarê 1", "Zazaca magazine issue listed in the Ma'z Êst archive", "PDF not available yet", "Yakında", "assets/magazine/mazest-homare-1-cover.jpeg", "", ""]
      ],
      benefits: [["Zazaca Language", "Issues are centered on Zazaca language, culture and public life."], ["Digital PDF", "Readers can open and download the available PDF issues."], ["Ma'z Êst Archive", "These cards use the magazine covers and PDF links from mazest.com."], ["Community Memory", "The publication archive supports language visibility and cultural continuity."]]
    },
    ku: {
      title: "Weşan",
      crumb: "Destpêk > Weşan",
      intro: "Hejmarên kovara Ma'z Êst li ser zimanê Zazakî, çand, dîrok, zanist û mijarên Kurdî.",
      categories: ["Hemû weşan", "Hejmarên kovarê", "Zazakî", "Lêkolîn", "Çand", "PDF", "Arşîv"],
      featuredTitle: "Kovara Ma'z Êst",
      books: [
        ["Kovar", "Ma'z Êst Homarê 9", "Hejmareke Zazaca ya Ma'z Êst", "Yakında", "Yakında", "assets/magazine/mazest-homare-9-cover.jpeg", "", ""],
        ["Kovar", "Ma'z Êst Homarê 8", "Hejmareke Zazaca, amadekirina Ma'z Êst Çalışma Grubu", "Fransa, 2023 · 44 rûpel", "PDF INDIR", "assets/magazine/mazest-homare-8-thumb.jpeg", "https://mazest.com/wp-content/uploads/2023/05/mazest-8-2023FINALE-2.pdf", "https://mazest.com/maz-est-homare-8/"],
        ["Kovar", "Ma'z Êst Homarê 7", "Hejmareke Zazaca, amadekirina Ma'z Êst Çalışma Grubu", "Fransa, 2022 · 40 rûpel", "PDF INDIR", "assets/magazine/mazest-homare-7-thumb.jpeg", "https://mazest.com/wp-content/uploads/2023/05/MAZEST-NUMERO-2022-4.pdf", "https://mazest.com/maz-est-homare-7/"],
        ["Kovar", "Ma'z Êst Homarê 6", "Hejmareke Zazaca, amadekirina Ma'z Êst Çalışma Grubu", "Fransa, 2022 · 44 rûpel", "PDF INDIR", "assets/magazine/mazest-homare-6-thumb.jpeg", "https://mazest.com/wp-content/uploads/2023/05/mazest-homare-6-2_removed-1.pdf", "https://mazest.com/maz-est-homare-6/"],
        ["Kovar", "Ma'z Êst Homarê 5", "Hejmareke Zazaca ya arşîva Ma'z Êst", "PDF niha tune", "Yakında", "assets/magazine/mazest-homare-5-cover.jpeg", "", ""],
        ["Kovar", "Ma'z Êst Homarê 4", "Hejmareke Zazaca ya arşîva Ma'z Êst", "PDF niha tune", "Yakında", "assets/magazine/mazest-homare-4-cover.jpeg", "", ""],
        ["Kovar", "Ma'z Êst Homarê 3", "Hejmareke Zazaca ya arşîva Ma'z Êst", "PDF niha tune", "Yakında", "assets/magazine/mazest-homare-3-cover.jpeg", "", ""],
        ["Kovar", "Ma'z Êst Homarê 2", "Hejmareke Zazaca ya arşîva Ma'z Êst", "PDF niha tune", "Yakında", "assets/magazine/mazest-homare-2-cover.jpeg", "", ""],
        ["Kovar", "Ma'z Êst Homarê 1", "Hejmareke Zazaca ya arşîva Ma'z Êst", "PDF niha tune", "Yakında", "assets/magazine/mazest-homare-1-cover.jpeg", "", ""]
      ],
      benefits: [["Zimanê Zazakî", "Hejmar li ser ziman, çand û jiyana giştî ya Zazakî ne."], ["PDFa dîjîtal", "Xwendevan dikarin hejmarên PDF vebikin û daxînin."], ["Arşîva Ma'z Êst", "Ev kart ji wêne û girêdanên PDF yên mazest.com tên."], ["Bîra civakî", "Arşîva weşanan piştgirî dide xuya-bûna ziman û berdewamiya çandî."]]
    },
    za: {
      title: "Nuşteyî",
      crumb: "Keye > Nuşteyî",
      intro: "Kovarê Ma’z Êst semedê zengînê Zazakî/Kirdkî Kovarê Ma’z Êst weşanonê xwe di vengdarîyê wahar vîcyayîş ziwan kena o herkês dehwêt kena.",
      categories: ["Weşanê Ma", "Kovar", "Zazakî", "Nuşteyî", "Raporî", "PDF", "Çımeyî"],
      featuredTitle: "Kovarê Ma’z Êst",
      books: [
        ["Kovar", "Ma'z Êst Homarê 9", "Kovarê Ma’z Êst homarê 9", "Yakında", "Yakında", "assets/magazine/mazest-homare-9-cover.jpeg", "", ""],
        ["Kovar", "Ma'z Êst Homarê 8", "Kovarê Ma’z Êst homarê 8", "Fransa, 2023 · 44", "PDF INDIR", "assets/magazine/mazest-homare-8-thumb.jpeg", "https://mazest.com/wp-content/uploads/2023/05/mazest-8-2023FINALE-2.pdf", "https://mazest.com/maz-est-homare-8/"],
        ["Kovar", "Ma'z Êst Homarê 7", "Kovarê Ma’z Êst homarê 7", "Fransa, 2022 · 40", "PDF INDIR", "assets/magazine/mazest-homare-7-thumb.jpeg", "https://mazest.com/wp-content/uploads/2023/05/MAZEST-NUMERO-2022-4.pdf", "https://mazest.com/maz-est-homare-7/"],
        ["Kovar", "Ma'z Êst Homarê 6", "Kovarê Ma’z Êst homarê 6", "Fransa, 2022 · 44", "PDF INDIR", "assets/magazine/mazest-homare-6-thumb.jpeg", "https://mazest.com/wp-content/uploads/2023/05/mazest-homare-6-2_removed-1.pdf", "https://mazest.com/maz-est-homare-6/"],
        ["Kovar", "Ma'z Êst Homarê 5", "Kovarê Ma’z Êst homarê 5", "Yakında", "Yakında", "assets/magazine/mazest-homare-5-cover.jpeg", "", ""],
        ["Kovar", "Ma'z Êst Homarê 4", "Kovarê Ma’z Êst homarê 4", "Yakında", "Yakında", "assets/magazine/mazest-homare-4-cover.jpeg", "", ""],
        ["Kovar", "Ma'z Êst Homarê 3", "Kovarê Ma’z Êst homarê 3", "Yakında", "Yakında", "assets/magazine/mazest-homare-3-cover.jpeg", "", ""],
        ["Kovar", "Ma'z Êst Homarê 2", "Kovarê Ma’z Êst homarê 2", "Yakında", "Yakında", "assets/magazine/mazest-homare-2-cover.jpeg", "", ""],
        ["Kovar", "Ma'z Êst Homarê 1", "Kovarê Ma’z Êst homarê 1", "Yakında", "Yakında", "assets/magazine/mazest-homare-1-cover.jpeg", "", ""]
      ],
      benefits: [["Kovarê Ma’z Êst", "Kovarê Ma’z Êst semedê zengînê Zazakî/Kirdkî."], ["PDF", "PDF INDIR"], ["Ma'z Êst", "Ma'z Êst Çalışma Grubu"], ["Zazakî", "Zazaca"]]
    }
  },
  magazine: {
    hero: "url('assets/cultural-writer.png')",
    en: {
      title: "Magazine",
      crumb: "Home > Magazine",
      intro: "Ma'z Êst Magazine is a platform for rigorous analysis, cultural reflection and informed dialogue on Kurdish identity, language, history and contemporary issues.",
      recentTitle: "Recent Issues",
      issues: [
        ["Issue 2", "Jon COVID-19", "assets/magazine/mazest-magazine-covid.png"],
        ["Special Issue", "Nîo Çînîe Bîayîş", "assets/magazine/mazest-magazine-biyayis.png"],
        ["Issue 1", "Rûêc Zûwonday Gerdûn", "assets/magazine/mazest-magazine-ruec.png"],
        ["Issue 7", "Omarê 7", "assets/magazine/mazest-magazine-candle.png"]
      ],
      columns: [["Interviews", ["In Conversation with Falah Mustafa", "Defending Language, Defending Life", "History as Responsibility"]], ["Essays", ["The Idea of Kurdistan in the Modern Era", "Oral Traditions and the Archive", "Beyond Borders: Rethinking Kurdish Solidarity"]], ["Cultural Commentary", ["Music as Memory, Music as Resistance", "Cinema and the Kurdish Gaze", "Books in Review"]]],
      newsletterTitle: "Subscribe to Ma'z Êst Magazine",
      newsletterText: "Stay informed with new issues, exclusive content and invitations to special events."
    },
    ku: {
      title: "Kovar",
      crumb: "Destpêk > Kovar",
      intro: "Kovara Ma'z Êst qadeke analîza kûr, ramana çandî û gotûbêja agahdar e li ser nasname, ziman, dîrok û pirsgirêkên nûjen ên Kurdî.",
      recentTitle: "Hejmarên dawî",
      issues: [
        ["Hejmar 2", "Jon COVID-19", "assets/magazine/mazest-magazine-covid.png"],
        ["Hejmareke taybet", "Nîo Çînîe Bîayîş", "assets/magazine/mazest-magazine-biyayis.png"],
        ["Hejmar 1", "Rûêc Zûwonday Gerdûn", "assets/magazine/mazest-magazine-ruec.png"],
        ["Hejmar 7", "Omarê 7", "assets/magazine/mazest-magazine-candle.png"]
      ],
      columns: [["Hevpeyvîn", ["Bi Falah Mustafa re axaftin", "Parastina ziman, parastina jiyanê", "Dîrok wek berpirsiyarî"]], ["Gotar", ["Ramanê Kurdistanê di serdema nûjen de", "Kevneşopiyên devkî û arşîv", "Derbasî sînor: hevsolidariya Kurdî"]], ["Şîroveya çandî", ["Muzîk wek bîr û berxwedan", "Sînema û nihêrîna Kurdî", "Pirtûk di nirxandinê de"]]],
      newsletterTitle: "Aboneyê Kovara Ma'z Êst bibin",
      newsletterText: "Bi hejmarên nû, naveroka taybet û vexwendinên bûyeran agahdar bimînin."
    }
  },
  articles: {
    hero: "url('assets/hero-mountains.png')",
    en: {
      title: "Articles",
      crumb: "Home > Articles",
      intro: "Scholarly articles, research and essays on the Kurdish language, Zazaki, identity, culture and society.",
      featured: "Zazakî: The Soulful Cry of a Disappearing Language",
      featuredText: "A Ma'z Êst article on the urgency of preserving Zazaki and the cultural memory carried by an endangered language.",
      featuredImage: "assets/articles/zazaki-dialects-map.gif",
      featuredLink: "https://mazest.com/zazaki-the-soulful-cry-of-a-disappearing-language/",
      newsletter: "Stay informed",
      categories: ["All Articles", "Language", "Identity", "Zazaki", "Politics", "Culture", "Science", "Magazine"],
      cards: [
        ["About", "Who is Ma'z Êst?", "An introductory article presenting the Ma'z Êst collective, its mission and its work around Zazaki language and culture.", "July 25, 2023", "assets/mazest-about.jpeg", "https://mazest.com/who-is-maz-est/"],
        ["Politics", "Macro And Micro Nationalism", "A reflection on political identity, nationalism and the tensions that shape Kurdish and Zaza public discourse.", "June 3, 2023", "assets/articles/macro-micro-nationalism.jpeg", "https://mazest.com/macro-and-micro-nationalism/"],
        ["Language", "Zazakî: The Soulful Cry of a Disappearing Language", "A language-focused article on Zazaki's endangered status and the need for documentation and transmission.", "June 2, 2023", "assets/articles/zazaki-dialects-map.gif", "https://mazest.com/zazaki-the-soulful-cry-of-a-disappearing-language/"],
        ["Culture", "The Sea Does Not Get Dirty With Saliva", "An essay carried by a proverb-like image, reflecting on dignity, speech and social memory.", "June 2, 2023", "assets/articles/sea-saliva.jpeg", "https://mazest.com/the-sea-does-not-get-dirty-with-saliva/"],
        ["Magazine", "Ma'z Êst Magazine", "An article introducing the magazine project and the cultural motivation behind Ma'z Êst's publication work.", "May 30, 2023", "assets/articles/mazest-magazine-source.jpeg", "https://mazest.com/maz-est-magazine/"],
        ["Science", "NASA Görüntüleri Paylaştı: Mars'taki Kapının Gizemi", "A Turkish Ma'z Êst article about NASA imagery and the public fascination around the so-called door on Mars.", "May 29, 2023", "assets/articles/nasa-mars-door.jpeg", "https://mazest.com/nasa-goruntuleri-paylasti-bilim-dunyasi-sasirdi-marstaki-kapinin-gizemi/"],
        ["Culture", "Betrayal and Trap", "A cultural and literary piece from Ma'z Êst's early article archive.", "May 30, 2023", "assets/articles/betrayal-trap.jpeg", "https://mazest.com/betrayal-and-trap/"]
      ],
      quote: "Our language is our existence."
    },
    ku: {
      title: "Gotar",
      crumb: "Destpêk > Gotar",
      intro: "Gotarên akademîk, lêkolîn û nivîsar li ser zimanê Kurdî, Zazakî, nasname, çand û civakê.",
      featured: "Makro o Mikro Netewperestî",
      featuredText: "Nivîseke Zazakî ya Ma'z Êst li ser netewperestî, civak û gotûbêja siyasî.",
      featuredImage: "assets/articles/macro-micro-nationalism.jpeg",
      featuredLink: "https://mazest.com/makro-o-mikro-netewperesti/",
      newsletter: "Agahdar bimînin",
      categories: ["Hemû gotar", "Zazakî", "Ziman", "Çand", "Sîyaset", "Zanist", "Kovar", "Welat"],
      cards: [
        ["Zazakî", "Ya Êşqê Ti Ya Karmîka Nîo Letê Gion Ti Ya?", "Nivîseke Zazakî li ser êşq, têkilî û ramana ruhî di arşîva Ma'z Êst de.", "24 Hezîran 2023", "assets/articles/karmic-love.webp", "https://mazest.com/ya-esqe-ti-ya-karmika-nio-lete-gion-ti-ya/"],
        ["Sîyaset", "Makro o Mikro Netewperestî", "Gotarek Zazakî li ser netewperestî, civak û gotûbêja siyasî.", "3 Hezîran 2023", "assets/articles/macro-micro-nationalism.jpeg", "https://mazest.com/makro-o-mikro-netewperesti/"],
        ["Ziman", "Dengiz pê Çiil Layşin niben", "Nivîsek bi zimanê Zazakî/Kirmanckî, bi temaya gotin, rûmet û têgihiştina civakî.", "2 Hezîran 2023", "assets/articles/sea-saliva.jpeg", "https://mazest.com/dengiz-pe-ciil-laysin-niben/"],
        ["Çand", "Xap o Dom", "Nivîs û berhema çandî ya Zazakî ji arşîva Ma'z Êst.", "28 Gulan 2023", "assets/articles/xap-dom.jpeg", "https://mazest.com/xap-o-dom/"],
        ["Kovar", "Kovarê Ma'z Êst", "Nivîsa danasîna kovara Ma'z Êst û xebata wê ya çandî.", "28 Gulan 2023", "assets/articles/kovare-mazest.jpeg", "https://mazest.com/elementor-1317/"],
        ["Zanist", "NASA Görüntüleri Paylaştı: Mars'taki Kapının Gizemi", "Gotareke Ma'z Êst bi Tirkî li ser wêneyên NASA û mereqa derbarê deriyê Marsê de.", "29 Gulan 2023", "assets/articles/nasa-mars-door.jpeg", "https://mazest.com/nasa-goruntuleri-paylasti-bilim-dunyasi-sasirdi-marstaki-kapinin-gizemi/"],
        ["Welat Ra", "Şerêf Xêsîyêt Gowderî", "Gotarek Zazakî ji kategoriya Welat Ra, li ser kesayetî û bîra civakî.", "29 Gulan 2023", "assets/articles/seref-xesiyet.jpeg", "https://mazest.com/seref-xesiyet-gowderi/"]
      ],
      quote: "Zimanê me hebûna me ye."
    }
  },
  resources: {
    hero: "url('assets/research-desk.png')",
    en: {
      title: "Resources",
      crumb: "Home > Resources",
      intro: "A documentary gateway for learners, researchers and communities working with Zazaki, Kurdish language heritage, digital archives and linguistic rights.",
      sections: [
        ["Zazaca Çeviri Beta", "A public Turkish to Zazakî rule-based translator prototype with phrase matching, grammar patterns, alternatives and community feedback.", "translator.html", "Open translator"],
        ["UNESCO & Endangered Languages", "UNESCO and UN frameworks on language vitality, revitalization, digital inclusion and education during the 2022-2032 decade.", "reports.html", "Open reports"],
        ["Zazakî / Zaza Documentation", "Classification, ISO code, Glottolog entry, Vate materials, grammar, dictionaries and cautious endangered-language notes.", "digital-publications.html", "Open documentation"],
        ["Kurdish Language Research", "Kurmanji, Sorani, Zazakî, Gorani/Hawrami, corpora, NLP, orthography, standardization and low-resource language technology.", "reports.html", "Browse research"],
        ["Digital Archives & Oral Heritage", "Models for songs, tales, proverbs, interviews, manuscripts, audio/video deposits and archive metadata.", "archive.html", "Open archive guide"],
        ["Language Rights", "Legal and policy references on minority languages, education, media, culture, administration and cross-border exchange.", "linguistic-rights.html", "Read rights guide"]
      ],
      referencesTitle: "Selected External References",
      references: [
        ["UNESCO World Atlas of Languages", "International tool for language diversity and endangered-language context.", "https://en.wal.unesco.org/"],
        ["UNESCO Language Vitality Framework", "Methodological reference for assessing language endangerment and documentation.", "https://unesdoc.unesco.org/ark:/48223/pf0000183699"],
        ["International Decade of Indigenous Languages", "UNESCO/UN action plan for 2022-2032 revitalization and inclusion.", "https://unesdoc.unesco.org/ark:/48223/pf0000379857"],
        ["Glottolog - Zaza", "Academic classification entry with glottocode zaza1246.", "https://glottolog.org/resource/languoid/id/zaza1246"],
        ["ISO 639-3 - zza", "Language code reference for Zaza / Dimli / Kirdki / Kirmanjki.", "https://iso639-3.sil.org/code/zza"],
        ["Kurdish Digital Library", "Institut Kurde de Paris", "https://bnk.institutkurde.org/"],
        ["Kurdish Digital Archive", "University of Exeter", "https://dame.exeter.ac.uk/en/kurdish-digital-archive/"],
        ["Zaza Text Corpus", "Kırmancki corpus and annotations", "https://ilyasarslan62.github.io/zazatextcorpus/"],
        ["Bimus", "Ma'z Êst learning app", "https://play.google.com/store/apps/details?hl=en&id=com.bimus.app"],
        ["Language Documentation & Conservation", "Open-access peer-reviewed journal for language documentation and conservation.", "https://nflrc.hawaii.edu/ldc/"]
      ]
    },
    ku: {
      title: "Çavkanî",
      crumb: "Destpêk > Çavkanî",
      intro: "Deriyekî belgeyî ji bo fêrker, lêkolîner û civakan ku bi Zazakî, mîrata zimanî ya Kurdî, arşîvên dîjîtal û mafên zimanî re dixebitin.",
      sections: [
        ["Wergerê Zazakî Beta", "Prototîpa wergera Tirkî ber bi Zazakî bi hevok, modelên rêzimanê, alternatîf û feedbacka civakî.", "translator.html", "Wergerê veke"],
        ["UNESCO û zimanên di xetereyê de", "Çarçoveyên UNESCO/UN li ser jiyana ziman, vejandin, tevlêbûna dîjîtal û perwerdeya di dehsala 2022-2032 de.", "reports.html", "Raporan veke"],
        ["Belgekirina Zazakî / Zaza", "Dabeşkirin, koda ISO, qeyda Glottolog, materyalên Vate, rêziman, ferheng û têbîniyên hişyar.", "digital-publications.html", "Belgekirinê veke"],
        ["Lêkolîna zimanê Kurdî", "Kurmanjî, Soranî, Zazakî, Goranî/Hewramî, korpus, NLP, rastnivîs, standardkirin û teknolociya low-resource.", "reports.html", "Lêkolînê bibîne"],
        ["Arşîvên dîjîtal û mîrata devkî", "Modelên ji bo stran, çîrok, gotinên pêşiyan, hevpeyvîn, destnivîs, deng/video û metadata.", "archive.html", "Rêbera arşîvê veke"],
        ["Mafên zimanî", "Referansên qanûnî û siyasî li ser zimanên hindikahî, perwerde, medya, çand, rêvebirin û têkiliyên der-sînorî.", "linguistic-rights.html", "Rêbera mafan bixwîne"]
      ],
      referencesTitle: "Referansên derveyî yên bijartî",
      references: [
        ["UNESCO World Atlas of Languages", "Amûra navneteweyî ji bo cihêrengiya ziman û rewşa zimanên di xetereyê de.", "https://en.wal.unesco.org/"],
        ["Çarçoveya jiyana ziman a UNESCO", "Referansa rêbazî ji bo nirxandina xetera ziman û belgekirinê.", "https://unesdoc.unesco.org/ark:/48223/pf0000183699"],
        ["Dehsala Navneteweyî ya Zimanên Xwecihî", "Plana çalakiya UNESCO/UN ji bo vejandin û tevlêbûnê 2022-2032.", "https://unesdoc.unesco.org/ark:/48223/pf0000379857"],
        ["Glottolog - Zaza", "Qeyda akademîk bi glottocode zaza1246.", "https://glottolog.org/resource/languoid/id/zaza1246"],
        ["ISO 639-3 - zza", "Referansa koda zimanî ji bo Zaza / Dimli / Kirdki / Kirmanjki.", "https://iso639-3.sil.org/code/zza"],
        ["Pirtûkxaneya Dîjîtal a Kurdî", "Enstîtuya Kurdî ya Parîsê", "https://bnk.institutkurde.org/"],
        ["Arşîva Dîjîtal a Kurdî", "Zanîngeha Exeter", "https://dame.exeter.ac.uk/en/kurdish-digital-archive/"],
        ["Korpusa Nivîsên Zazakî", "Korpusa Kırmanckî û annotation", "https://ilyasarslan62.github.io/zazatextcorpus/"],
        ["Bimus", "Sepana fêrbûnê ya Ma'z Êst", "https://play.google.com/store/apps/details?hl=en&id=com.bimus.app"],
        ["Language Documentation & Conservation", "Kovareke open-access û peer-reviewed ji bo belgekirin û parastina ziman.", "https://nflrc.hawaii.edu/ldc/"]
      ]
    }
  },
  teaching: {
    hero: "url('assets/mazest-about.jpeg')",
    en: {
      title: "Teaching & Learning",
      crumb: "Home > Resources > Teaching",
      intro: "Learning materials should support home transmission, classroom use, independent study and mother-tongue education, with real references instead of placeholder courses.",
      sections: [
        ["Beginner Zazaki", "Alphabet, pronunciation, greetings, everyday phrases and short reading exercises for new learners.", "#", "View beginner path"],
        ["Family Transmission", "Activities for parents and children: naming objects at home, oral stories, songs and memory prompts.", "#", "Open family pack"],
        ["Bimus App", "A Ma'z Êst digital learning tool that can sit beside printable worksheets and community classes.", "https://play.google.com/store/apps/details?hl=en&id=com.bimus.app", "Open app listing"],
        ["Zazaki in Education", "The MRGI report gives a concrete basis for children's media, standardization and learning-material needs.", "https://minorityrights.org/app/uploads/2024/04/childrens-access-to-zazaki-en.pdf", "Open report"],
        ["Grammar & Orthography", "Vate-related materials are relevant for Kirmancki/Zazaki orthography, literature, folklore and standardization history.", "assets/resources/vate-article-index-1-30.pdf", "Open Vate index"]
      ],
      referencesTitle: "Why This Matters",
      references: [
        ["UNESCO mother-tongue education", "Mother-language-based multilingual education supports inclusion and learning.", "https://www.unesco.org/en/articles/why-mother-language-based-education-essential"],
        ["UNESCO Decade 2022-2032", "The Indigenous Languages decade links revitalization with education, digital inclusion and language rights.", "https://www.unesco.org/en/decades/indigenous-languages"],
        ["MRGI", "Children's access to Zazaki highlights the need for media, standardization and learning materials.", "https://minorityrights.org/app/uploads/2024/04/childrens-access-to-zazaki-en.pdf"],
        ["Bimus", "A concrete digital learning tool associated with Ma'z Êst.", "https://play.google.com/store/apps/details?hl=en&id=com.bimus.app"]
      ]
    },
    ku: {
      title: "Perwerde û Fêrbûn",
      crumb: "Destpêk > Çavkanî > Perwerde",
      intro: "Materyalên fêrbûnê divê veguhestina malbatê, dersxane, xwendina kesane û perwerdeya zimanê dayikê piştgirî bikin, ne tenê lîsteyeke vala bin.",
      sections: [
        ["Zazakî ji destpêkê", "Alfabe, deng, silav, hevokên rojane û xwendinên kurt ji bo fêrkerên nû.", "#", "Rêya destpêkê bibîne"],
        ["Veguhestina malbatê", "Çalakiyên dêûbavan û zarokan: navên malê, çîrokên devkî, stran û bîranîn.", "#", "Pakêta malbatê veke"],
        ["Sepana Bimus", "Amûreke dîjîtal a Ma'z Êst ku dikare bi pelên çapkirî û dersên civakî re were bikaranîn.", "https://play.google.com/store/apps/details?hl=en&id=com.bimus.app", "Lîsteya sepanê veke"],
        ["Zazakî di perwerdeyê de", "Rapora MRGI bingehek rast dide ji bo medya, standardkirin û materyalên zarokan.", "https://minorityrights.org/app/uploads/2024/04/childrens-access-to-zazaki-en.pdf", "Raporê veke"],
        ["Rêziman û rastnivîs", "Materyalên girêdayî Vate ji bo rastnivîsa Kirmanckî/Zazakî, wêje, folklor û standardkirinê girîng in.", "assets/resources/vate-article-index-1-30.pdf", "Indexa Vate veke"]
      ],
      referencesTitle: "Çima girîng e",
      references: [
        ["Perwerdeya zimanê dayikê ya UNESCO", "Perwerdeya pirzimanî ya zimanê dayikê tevlêbûn û fêrbûnê xurt dike.", "https://www.unesco.org/en/articles/why-mother-language-based-education-essential"],
        ["Dehsala UNESCO 2022-2032", "Dehsala Zimanên Xwecihî vejandinê bi perwerde, tevlêbûna dîjîtal û mafên zimanî ve girê dide.", "https://www.unesco.org/en/decades/indigenous-languages"],
        ["MRGI", "Gihiştina zarokan bi Zazakî hewcedariya medyayê, standardkirinê û materyalan nîşan dide.", "https://minorityrights.org/app/uploads/2024/04/childrens-access-to-zazaki-en.pdf"],
        ["Bimus", "Amûrekî dîjîtal ê fêrbûnê yê girêdayî Ma'z Êst.", "https://play.google.com/store/apps/details?hl=en&id=com.bimus.app"]
      ]
    }
  },
  digital: {
    hero: "url('assets/magazine/mazest-magazine-covid.png')",
    en: {
      title: "Digital Publications",
      crumb: "Home > Resources > Digital Publications",
      intro: "A place for Ma'z Êst magazine issues, digital-first tools, Zazaki documentation, Kurdish NLP papers and selected external corpora.",
      sections: [
        ["Magazine PDFs", "Issue records should include cover, year, page count, language, table of contents and PDF status.", "magazine.html", "Browse magazine"],
        ["Bimus App", "A Ma'z Êst digital learning app for Kurdish varieties and cultural transmission.", "https://play.google.com/store/apps/details?hl=en&id=com.bimus.app", "Open app listing"],
        ["Zaza Text Corpus", "A searchable, annotated Kırmancki corpus useful for research and digital humanities.", "https://ilyasarslan62.github.io/zazatextcorpus/", "View corpus"],
        ["Glottolog: Zaza", "Technical language entry for Zaza with glottocode zaza1246 and ISO reference.", "https://glottolog.org/resource/languoid/id/zaza1246", "Open Glottolog"],
        ["Kurdish NLP Papers", "Open ACL papers on Kurdish machine translation, corpora and low-resource language technology.", "assets/resources/kurdish-machine-translation-acl-2020.pdf", "Open local PDF"],
        ["Metadata Standards", "Each digital item should show source, language, format, date, PDF status and citation.", "assets/resources/olac-metadata-set-controlled-vocabularies.pdf", "Open OLAC PDF"]
      ],
      referencesTitle: "Digital Collections",
      references: [
        ["BNK", "Catalogued Kurdish periodicals and digitized documents.", "https://bnk.institutkurde.org/"],
        ["Exeter Archive", "Collaborative Kurdish digital archive and linked collections.", "https://dame.exeter.ac.uk/en/kurdish-digital-archive/"],
        ["Zaza Text Corpus", "Research corpus with search and annotations.", "https://ilyasarslan62.github.io/zazatextcorpus/"],
        ["ISO 639-3 zza", "Reference code for Zaza / Dimli / Kirdki / Kirmanjki.", "https://iso639-3.sil.org/code/zza"],
        ["ACL Anthology Kurdish MT", "Local PDF saved from ACL Anthology for the site archive.", "assets/resources/kurdish-machine-translation-acl-2020.pdf"],
        ["ACL Anthology Laki Kurdish", "Local PDF saved from ACL Anthology for the site archive.", "assets/resources/kurdish-laki-corpus-acl-2023.pdf"]
      ]
    },
    ku: {
      title: "Weşanên Dîjîtal",
      crumb: "Destpêk > Çavkanî > Weşanên dîjîtal",
      intro: "Cihê hejmarên kovara Ma'z Êst, amûrên dîjîtal, belgekirina Zazakî, gotarên NLP yên Kurdî û korpusên derveyî yên bijartî.",
      sections: [
        ["PDFên kovarê", "Her hejmar divê berg, sal, hejmarê rûpelan, ziman, somarî û rewşa PDF nîşan bide.", "magazine.html", "Kovarê bibîne"],
        ["Sepana Bimus", "Sepana fêrbûnê ya Ma'z Êst ji bo cureyên Kurdî û veguhestina çandî.", "https://play.google.com/store/apps/details?hl=en&id=com.bimus.app", "Lîsteya sepanê veke"],
        ["Korpusa Zazakî", "Korpuseke Kırmanckî ya lêgerînbar û annotationkirî ji bo lêkolînê.", "https://ilyasarslan62.github.io/zazatextcorpus/", "Korpusê bibîne"],
        ["Glottolog: Zaza", "Qeyda teknîkî ya Zaza bi glottocode zaza1246 û referansa ISO.", "https://glottolog.org/resource/languoid/id/zaza1246", "Glottolog veke"],
        ["Gotarên NLP yên Kurdî", "Gotarên vekirî yên ACL li ser wergera maşînî, korpus û teknolociya low-resource.", "assets/resources/kurdish-machine-translation-acl-2020.pdf", "PDFa herêmî veke"],
        ["Pîvanên metadata", "Her item divê çavkanî, ziman, format, dîrok, PDF û citation nîşan bide.", "assets/resources/olac-metadata-set-controlled-vocabularies.pdf", "PDFa OLAC veke"]
      ],
      referencesTitle: "Komên dîjîtal",
      references: [
        ["BNK", "Kovar û belgeyên Kurdî yên katalogkirî û dîjîtalkirî.", "https://bnk.institutkurde.org/"],
        ["Arşîva Exeter", "Arşîva dîjîtal a Kurdî û koleksiyonên girêdayî.", "https://dame.exeter.ac.uk/en/kurdish-digital-archive/"],
        ["Korpusa Zazakî", "Korpuseke lêkolînê bi lêgerîn û annotation.", "https://ilyasarslan62.github.io/zazatextcorpus/"],
        ["ISO 639-3 zza", "Referansa koda Zaza / Dimli / Kirdki / Kirmanjki.", "https://iso639-3.sil.org/code/zza"],
        ["ACL Anthology Kurdish MT", "PDFa herêmî ji ACL Anthology hatiye hilanîn.", "assets/resources/kurdish-machine-translation-acl-2020.pdf"],
        ["ACL Anthology Laki Kurdish", "PDFa herêmî ji ACL Anthology hatiye hilanîn.", "assets/resources/kurdish-laki-corpus-acl-2023.pdf"]
      ]
    }
  },
  archive: {
    hero: "url('assets/research-desk.png')",
    en: {
      title: "Archive Guide",
      crumb: "Home > Resources > Archive",
      intro: "The archive page works as a guide to real repositories and as a model for future Ma'z Êst oral-history deposits.",
      sections: [
        ["Kurdish Digital Library", "More than a simple link: useful for periodicals, monographs, magazine records and PDFs.", "https://bnk.institutkurde.org/", "Open BNK"],
        ["Kurdish Digital Archive", "A collaborative digital archive connecting Kurdish resources and partner collections.", "https://dame.exeter.ac.uk/en/kurdish-digital-archive/", "Open archive"],
        ["Jaba Collection", "Manuscripts and copies connected to Kurdish classical literature, folklore and oral culture.", "https://www.artuklu.edu.tr/en/yasayan-diller-enstitusu/news/jaba-collection-introduced-at-press-launch", "View collection"],
        ["ELAR Model", "Endangered-language archives can hold audio, video, transcriptions, translations, dictionaries and pedagogical materials.", "https://www.elararchive.org/", "Open ELAR"],
        ["PARADISEC Model", "A practical reference for preserving audio, video, texts and field metadata from language documentation projects.", "https://www.paradisec.org.au/", "Open PARADISEC"],
        ["OLAC Metadata", "Metadata vocabularies help make language resources findable by language, format, creator, date and access level.", "assets/resources/olac-metadata-set-controlled-vocabularies.pdf", "Open local PDF"]
      ],
      referencesTitle: "Suggested Archive Metadata",
      references: [
        ["Fields", "Institution, resource type, languages, period, access status and external URL.", "#"],
        ["Oral heritage", "Songs, tales, proverbs, elder interviews, field notes and consent forms should be catalogued together.", "#"],
        ["Use", "Distinguish downloadable files from metadata-only records.", "#"],
        ["Citation", "Every item should have a stable citation or source record.", "#"],
        ["OLAC", "Open Language Archives Community metadata paper saved locally.", "assets/resources/olac-metadata-set-controlled-vocabularies.pdf"]
      ]
    },
    ku: {
      title: "Rêbera Arşîvê",
      crumb: "Destpêk > Çavkanî > Arşîv",
      intro: "Rûpela arşîvê wek rêberek ji bo depoyên rast û wek modela depoya pêşerojê ya bîra devkî ya Ma'z Êst dixebite.",
      sections: [
        ["Pirtûkxaneya Dîjîtal a Kurdî", "Ji bo kovar, monografî, qeydên hejmaran û PDFan çavkaniyek girîng e.", "https://bnk.institutkurde.org/", "BNK veke"],
        ["Arşîva Dîjîtal a Kurdî", "Arşîveke hevkarî ku çavkaniyên Kurdî û koleksiyonên hevkar girê dide.", "https://dame.exeter.ac.uk/en/kurdish-digital-archive/", "Arşîvê veke"],
        ["Koleksiyona Jaba", "Destnivîs û kopî yên girêdayî wêjeya klasîk, folklor û çanda devkî ya Kurdî.", "https://www.artuklu.edu.tr/en/yasayan-diller-enstitusu/news/jaba-collection-introduced-at-press-launch", "Koleksiyonê bibîne"],
        ["Modela ELAR", "Arşîvên zimanên di xetereyê de dikarin deng, video, transkripsiyon, werger, ferheng û materyalên dersê bihêlin.", "https://www.elararchive.org/", "ELAR veke"],
        ["Modela PARADISEC", "Referanseke pratîk ji bo parastina deng, video, tekst û metadata ya projeyên belgekirina ziman.", "https://www.paradisec.org.au/", "PARADISEC veke"],
        ["Metadata ya OLAC", "Peyvên metadata alîkar in ku çavkanî bi ziman, format, afirîner, dîrok û rewşa gihiştinê were dîtin.", "assets/resources/olac-metadata-set-controlled-vocabularies.pdf", "PDFa herêmî veke"]
      ],
      referencesTitle: "Metadata ya arşîvê",
      references: [
        ["Qad", "Sazî, cureya çavkanî, ziman, serdem, rewşa gihiştinê û URL.", "#"],
        ["Mîrata devkî", "Stran, çîrok, gotinên pêşiyan, hevpeyvînên kal û pîran, notên meydanê û erêkirin divê bi hev re katalog bibin.", "#"],
        ["Bikaranîn", "Pelên daxistinbar ji qeyda metadata tenê cuda bike.", "#"],
        ["Citation", "Her item divê citation an jî qeyda çavkanî ya sabît hebe.", "#"],
        ["OLAC", "Gotara metadata ya Open Language Archives Community herêmî hatiye hilanîn.", "assets/resources/olac-metadata-set-controlled-vocabularies.pdf"]
      ]
    }
  },
  rights: {
    hero: "url('assets/zaza-map.svg')",
    en: {
      title: "Linguistic Rights",
      crumb: "Home > Resources > Linguistic Rights",
      intro: "A reference page for language vitality, minority-language education, cultural diversity and the legal-political context around Zazaki and Kurdish transmission.",
      sections: [
        ["Language Vitality", "UNESCO's language-vitality approach helps explain why transmission, education, media and documentation matter.", "https://unesdoc.unesco.org/ark:/48223/pf0000183699", "Open UNESCO reference"],
        ["European Charter", "The Charter protects regional/minority languages through education, justice, administration, media, culture and cross-border exchange.", "https://www.coe.int/en/web/conventions/full-list?module=treaty-detail&treatynum=148", "Open treaty"],
        ["UN Minority Declaration", "The UN declaration is a core reference for national, ethnic, religious and linguistic minority rights.", "assets/resources/un-minority-rights-declaration.pdf", "Open local PDF"],
        ["OHCHR Language Rights", "OHCHR guidance connects language rights with identity, participation, public life and access to services.", "assets/resources/ohchr-language-rights-linguistic-minorities.pdf", "Open local PDF"],
        ["Education Access", "Reports on Zazaki access underline legal status, standardization, children's media and teaching materials.", "https://minorityrights.org/app/uploads/2024/04/childrens-access-to-zazaki-en.pdf", "Open MRGI report"],
        ["Reuters Education Brief", "A cautious news-reference card for Kurdish language education access in Turkey; link out instead of copying the article.", "https://www.reuters.com/world/middle-east/kurdish-pupils-denied-language-lessons-turkey-amid-wider-curbs-families-say-2024-12-04/", "Open Reuters"]
      ],
      referencesTitle: "Editorial Note",
      references: [
        ["Classification", "Zazaki/Kirmancki is discussed in scholarship as a Northwestern Iranian language with complex identity relations.", "https://www.iranicaonline.org/articles/dimli/"],
        ["UNESCO wording", "Use cautious wording: listed in UNESCO-related endangered-language resources as vulnerable, then verify the exact fiche before publication.", "https://en.wal.unesco.org/"],
        ["Cultural diversity", "UNESCO's cultural-diversity work is relevant for language, culture and participation claims.", "https://www.unesco.org/en/cultural-diversity"],
        ["Care", "The site should avoid oversimplifying the relation between language classification and Kurdish identity.", "#"],
        ["Precision", "Use dated, sourced claims when mentioning UNESCO or endangered-language status.", "#"]
      ]
    },
    ku: {
      title: "Mafên Zimanî",
      crumb: "Destpêk > Çavkanî > Mafên zimanî",
      intro: "Rûpeleke referansî ji bo jiyana ziman, perwerdeya zimanên hindikahî, cihêrengiya çandî û çarçoveya qanûnî-siyasî ya veguhestina Zazakî û Kurdî.",
      sections: [
        ["Jiyana ziman", "Rêbaza UNESCO alîkar e ku girîngiya veguhestin, perwerde, medya û belgekirin were ravekirin.", "https://unesdoc.unesco.org/ark:/48223/pf0000183699", "Referansa UNESCO veke"],
        ["Chartera Ewropayê", "Charter zimanên herêmî/hindikahî bi perwerde, dad, rêvebirin, medya, çand û têkiliyên der-sînorî diparêze.", "https://www.coe.int/en/web/conventions/full-list?module=treaty-detail&treatynum=148", "Peymanê veke"],
        ["Daxuyaniya UN ya hindikahiyan", "Daxuyaniya UN referanseke bingehîn e ji bo mafên hindikahiyên neteweyî, etnîk, olî û zimanî.", "assets/resources/un-minority-rights-declaration.pdf", "PDFa herêmî veke"],
        ["Mafên zimanî yên OHCHR", "Rêberiya OHCHR mafên zimanî bi nasname, beşdarbûn, jiyana giştî û gihiştina xizmetan ve girê dide.", "assets/resources/ohchr-language-rights-linguistic-minorities.pdf", "PDFa herêmî veke"],
        ["Gihiştina perwerdeyê", "Raporên Zazakî li ser statûya qanûnî, standardkirin, medyaya zarokan û materyalên dersê diaxivin.", "https://minorityrights.org/app/uploads/2024/04/childrens-access-to-zazaki-en.pdf", "Rapora MRGI veke"],
        ["Kurtenivîsa Reuters", "Karta nûçeyî ya hişyar ji bo gihiştina dersên Kurdî li Tirkiyeyê; naverok nayê kopîkirin.", "https://www.reuters.com/world/middle-east/kurdish-pupils-denied-language-lessons-turkey-amid-wider-curbs-families-say-2024-12-04/", "Reuters veke"]
      ],
      referencesTitle: "Têbîniya edîtorî",
      references: [
        ["Dabeşkirin", "Zazakî/Kirmanckî di lêkolînê de wek zimanekî Îranî yê bakur-rojavayî bi têkiliyên nasnameyî yên tevlihev tê gotin.", "https://www.iranicaonline.org/articles/dimli/"],
        ["Gotina UNESCO", "Bi hişyarî binivîse: di çavkaniyên girêdayî UNESCO de wek vulnerable hatiye lîstekirin; berî weşanê ficha rast were kontrolkirin.", "https://en.wal.unesco.org/"],
        ["Cihêrengiya çandî", "Xebata UNESCO ya cihêrengiya çandî ji bo daxuyaniyên ziman, çand û beşdarbûnê girîng e.", "https://www.unesco.org/en/cultural-diversity"],
        ["Hişyarî", "Divê têkiliya di navbera dabeşkirina zimanî û nasnameya Kurdî de zêde sade neyê kirin.", "#"],
        ["Rastbûn", "Dema UNESCO an rewşa zimanê di xetereyê de tê gotin, divê dîrok û çavkanî hebe.", "#"]
      ]
    }
  }
};

const zaShortIntro = "Ma'z Êst seba parastış û pêşveberdışê Zazakî, zonê kurdî, lêkolîn, belgekerdış û agahdarkerdiş xebat kena.";
const zaShortText = "Seba parastış û pêşveberdışê Zazakî û mirasê zonî.";
const zaOpen = "Bıvêne";
const zaPdf = "PDF bıvêne";

pageCopy.research.za = {
  title: "Lêkolîn",
  crumb: "Keye > Lêkolîn",
  intro: zaShortIntro,
  stats: [["50+", "Projeyê lêkolîn"], ["30+", "Lêkolîner û hetkar"], ["100+", "Weşanê Ma"], ["10+", "Welatî"]],
  sideTitle: "Lêkolîn",
  side: ["Hemey proje", "Belgekerdışê zonî", "Gramêr", "Perwerde", "Kultur û miras", "Civak û zon", "Dijîtal"],
  featuredTitle: "Projeyê lêkolînî",
  cards: [
    ["Belgekerdış", "Projeya gramêrê Zazakî", zaShortText, "Zazakî (Dimilî)", "2021 -", "assets/research-desk.png"],
    ["Lehçe", "Atlasa lehçeyê Zazakî", zaShortText, "Herêmê Zazakî", "2022 -", "assets/hero-mountains.png"],
    ["Miras", "Folklor û çîrokê devkî", zaShortText, "Zazakî", "2019 -", "assets/research-desk.png"],
    ["Perwerde", "Zazakî di perwerde de", zaShortText, "Programî", "2020 -", "assets/cultural-writer.png"]
  ],
  approach: [["Rêbaz", "Lêkolîn, belgekerdış û şîroveya akademîk.", "assets/hero-mountains.png"], ["Arşîv", "Destnivîs, veng, video û belgeyê dîrokî.", "assets/research-desk.png"], ["Meydan", "Xebat bi civak û qiseykerdoxan de.", "assets/cultural-writer.png"]],
  quote: "Zonê ma, bîra ma û nasnameyê ma yo."
};

pageCopy.reports.za = {
  title: "Raporî",
  crumb: "Keye > Raporî",
  intro: "Raporî û lêkolîn derheqê zonê kurdî, Zazakî, perwerde û mafê zonî de.",
  featuredLabel: "Rapora bijartî",
  featuredTitle: "Children's Access to Zazaki",
  featuredText: "Rapora derheqê gihîştışê zarokan bi Zazakî, perwerde, medya û materyalê fêrbiyayîşî de.",
  featuredLink: "https://minorityrights.org/app/uploads/2024/04/childrens-access-to-zazaki-en.pdf",
  featuredAction: zaPdf,
  featuredMeta: ["2024", "PDF", "English"],
  summaryTitle: "Kurte",
  summaryText: "Çımeyî derheqê UNESCO, mafê zonî, belgekerdışê Zazakî û teknolojîya zonî de.",
  cardsTitle: "Raporî",
  cards: [
    ["UNESCO", "Çarçowe", "Language Vitality and Endangerment", "Çıme derheqê xeterê zonî û belgekerdışî de.", "assets/unesco.png", "https://unesdoc.unesco.org/ark:/48223/pf0000183699", zaOpen],
    ["2022-2032", "Plan", "International Decade of Indigenous Languages", "Planê UNESCO/UN seba vejîyayîşê zonan.", "assets/research-desk.png", "https://unesdoc.unesco.org/ark:/48223/pf0000379857", zaOpen],
    ["2024", "Rapor", "Children's Access to Zazaki", "Rapor derheqê Zazakî, zarokî û perwerde de.", "assets/zaza-map.svg", "https://minorityrights.org/app/uploads/2024/04/childrens-access-to-zazaki-en.pdf", zaPdf],
    ["1992", "Maf", "European Charter for Regional or Minority Languages", "Peyman derheqê mafê zonan de.", "assets/research-desk.png", "https://www.coe.int/en/web/conventions/full-list?module=treaty-detail&treatynum=148", zaOpen],
    ["2020", "NLP", "Towards Kurdish Machine Translation", "Nuşte derheqê teknolojîya zonê kurdî de.", "assets/hero-mountains.png", "assets/resources/kurdish-machine-translation-acl-2020.pdf", zaPdf],
    ["2023", "Corpus", "Introducing Laki Kurdish", "Nuşte derheqê korpus û belgekerdışî de.", "assets/cultural-writer.png", "assets/resources/kurdish-laki-corpus-acl-2023.pdf", zaPdf]
  ],
  topics: [["Belgekerdışê zonî", "10"], ["Lehçeyê xeter de", "8"], ["Perwerde", "4"], ["Mafê zonî", "3"], ["Civak û zon", "5"], ["Lêkolînê civakî", "6"]]
};

pageCopy.magazine.za = {
  title: "Kovar",
  crumb: "Keye > Kovar",
  intro: "Kovarê Ma’z Êst semedê zengînê Zazakî/Kirdkî.",
  recentTitle: "Homarê peyên",
  issues: [["Homar 2", "Jon COVID-19", "assets/magazine/mazest-magazine-covid.png"], ["Homarê taybet", "Nîo Çînîe Bîayîş", "assets/magazine/mazest-magazine-biyayis.png"], ["Homar 1", "Rûêc Zûwonday Gerdûn", "assets/magazine/mazest-magazine-ruec.png"], ["Homar 7", "Omarê 7", "assets/magazine/mazest-magazine-candle.png"]],
  columns: [["Hevpeyvîn", ["Falah Mustafa", "Parastışê zonî", "Dîrok û berpirsîyarî"]], ["Nuşteyî", ["Kurdistan", "Mirasê devkî û arşîv", "Solidarîya kurdî"]], ["Kultur", ["Muzîk û bîr", "Sînema", "Kitabî"]]],
  newsletterTitle: "Abone bıbe",
  newsletterText: "Seba homarê neweyî û agahîyan."
};

pageCopy.articles.za = {
  title: "Nuşteyî",
  crumb: "Keye > Nuşteyî",
  intro: "Nuşteyî derheqê Zazakî, zonê kurdî, nasname, kultur û civak de.",
  featured: "Makro o Mikro Netewperestî",
  featuredText: "Nuşteya Zazakî ya Ma'z Êst derheqê civak û siyaset de.",
  featuredImage: "assets/articles/macro-micro-nationalism.jpeg",
  featuredLink: "https://mazest.com/makro-o-mikro-netewperesti/",
  newsletter: "Agahdar bımane",
  categories: ["Hemey nuşteyî", "Zazakî", "Zon", "Kultur", "Siyaset", "Zanist", "Kovar", "Welat"],
  cards: [
    ["Zazakî", "Ya Êşqê Ti Ya Karmîka Nîo Letê Gion Ti Ya?", "Nuşteya Zazakî ji arşîva Ma'z Êst.", "24 Hezîran 2023", "assets/articles/karmic-love.webp", "https://mazest.com/ya-esqe-ti-ya-karmika-nio-lete-gion-ti-ya/"],
    ["Siyaset", "Makro o Mikro Netewperestî", "Nuşteya Zazakî derheqê neteweperestî de.", "3 Hezîran 2023", "assets/articles/macro-micro-nationalism.jpeg", "https://mazest.com/makro-o-mikro-netewperesti/"],
    ["Zon", "Dengiz pê Çiil Layşin niben", "Nuşteya Zazakî derheqê qisey û rûmet de.", "2 Hezîran 2023", "assets/articles/sea-saliva.jpeg", "https://mazest.com/dengiz-pe-ciil-laysin-niben/"],
    ["Kultur", "Xap o Dom", "Nuşteya kulturî ya Zazakî.", "28 Gulan 2023", "assets/articles/xap-dom.jpeg", "https://mazest.com/xap-o-dom/"],
    ["Kovar", "Kovarê Ma'z Êst", "Nuşteya danasnayîşê kovarî.", "28 Gulan 2023", "assets/articles/kovare-mazest.jpeg", "https://mazest.com/elementor-1317/"],
    ["Zanist", "NASA Görüntüleri Paylaştı", "Nuşteya Ma'z Êst bi Tirkî.", "29 Gulan 2023", "assets/articles/nasa-mars-door.jpeg", "https://mazest.com/nasa-goruntuleri-paylasti-bilim-dunyasi-sasirdi-marstaki-kapinin-gizemi/"],
    ["Welat Ra", "Şerêf Xêsîyêt Gowderî", "Nuşteya Zazakî ji arşîvê Ma'z Êst.", "29 Gulan 2023", "assets/articles/seref-xesiyet.jpeg", "https://mazest.com/seref-xesiyet-gowderi/"]
  ],
  quote: "Zonê ma hebûna ma yo."
};

const zaReferencePages = {
  resources: ["Çımeyî", "Keye > Çımeyî", "Çımeyî seba fêrker, lêkolîner û civakan.", [["Çarnayışê Zazakî Beta", "Çarnayışê Tirkî ra Zazakî.", "translator.html", zaOpen], ["UNESCO û zonê xeter de", "Çımeyê UNESCO/UN derheqê zonî de.", "reports.html", zaOpen], ["Belgekerdışê Zazakî", "ISO, Glottolog, Vate, ferheng û gramêr.", "digital-publications.html", zaOpen], ["Lêkolînê zonê kurdî", "Kurdî, Zazakî, korpus û teknolojîya zonî.", "reports.html", zaOpen], ["Arşîvê dijîtal", "Stran, çîrok, veng, video û metadata.", "archive.html", zaOpen], ["Mafê zonî", "Perwerde, medya, kultur û mafê zonî.", "linguistic-rights.html", zaOpen]]],
  teaching: ["Perwerde û fêrbiyayîş", "Keye > Çımeyî > Perwerde", "Materyalê fêrbiyayîşî seba malbat, wendekar û mamostayan.", [["Zazakî seba destpêk", "Alfabe, silav û hevokê rojane.", "#", zaOpen], ["Malbat", "Çalakî seba dê-baw û zarokan.", "#", zaOpen], ["Bimus", "Amrazê dijîtal ê Ma'z Êst.", "https://play.google.com/store/apps/details?hl=en&id=com.bimus.app", zaOpen], ["Zazakî di perwerde de", "Rapora derheqê zarok û Zazakî de.", "https://minorityrights.org/app/uploads/2024/04/childrens-access-to-zazaki-en.pdf", zaPdf], ["Gramêr û rastnuştış", "Materyalê Vate û Zazakî.", "assets/resources/vate-article-index-1-30.pdf", zaPdf]]],
  digital: ["Weşanê dijîtal", "Keye > Çımeyî > Weşanê dijîtal", "Kovar, amrazê dijîtal, korpus û belgekerdışê Zazakî.", [["PDFê kovarî", "Homar, berg, sal û PDF.", "magazine.html", zaOpen], ["Bimus", "Sepana fêrbiyayîşî ya Ma'z Êst.", "https://play.google.com/store/apps/details?hl=en&id=com.bimus.app", zaOpen], ["Zaza Text Corpus", "Korpusê Kırmanckî/Zazakî.", "https://ilyasarslan62.github.io/zazatextcorpus/", zaOpen], ["Glottolog: Zaza", "Qeyda teknîkî ya Zaza.", "https://glottolog.org/resource/languoid/id/zaza1246", zaOpen], ["Kurdish NLP Papers", "Nuşteyê teknolojîya zonî.", "assets/resources/kurdish-machine-translation-acl-2020.pdf", zaPdf], ["Metadata", "Çıme, zon, format, tarîx û PDF.", "assets/resources/olac-metadata-set-controlled-vocabularies.pdf", zaPdf]]],
  archive: ["Rêberê arşîvî", "Keye > Çımeyî > Arşîv", "Rêber seba arşîv, belge û mîrasê devkî.", [["Kurdish Digital Library", "Kovar, kitab û belgeyê dijîtal.", "https://bnk.institutkurde.org/", zaOpen], ["Kurdish Digital Archive", "Arşîvê dijîtal ê kurdî.", "https://dame.exeter.ac.uk/en/kurdish-digital-archive/", zaOpen], ["Jaba Collection", "Destnivîs û kulturê devkî.", "https://www.artuklu.edu.tr/en/yasayan-diller-enstitusu/news/jaba-collection-introduced-at-press-launch", zaOpen], ["ELAR", "Deng, video, transkripsiyon û ferheng.", "https://www.elararchive.org/", zaOpen], ["PARADISEC", "Model seba parastışê metadata.", "https://www.paradisec.org.au/", zaOpen], ["OLAC Metadata", "Metadata seba çımeyê zonî.", "assets/resources/olac-metadata-set-controlled-vocabularies.pdf", zaPdf]]],
  rights: ["Mafê zonî", "Keye > Çımeyî > Mafê zonî", "Çımeyî derheqê mafê zonî, perwerde û kultur de.", [["Language Vitality", "UNESCO derheqê jiyanê zonî de.", "https://unesdoc.unesco.org/ark:/48223/pf0000183699", zaOpen], ["European Charter", "Peyman derheqê zonê herêmî û kêmîneyî de.", "https://www.coe.int/en/web/conventions/full-list?module=treaty-detail&treatynum=148", zaOpen], ["UN Minority Declaration", "Çıme derheqê mafê kêmîneyan de.", "assets/resources/un-minority-rights-declaration.pdf", zaPdf], ["OHCHR Language Rights", "Mafê zonî û nasname.", "assets/resources/ohchr-language-rights-linguistic-minorities.pdf", zaPdf], ["Education Access", "Rapora derheqê Zazakî û zarokan de.", "https://minorityrights.org/app/uploads/2024/04/childrens-access-to-zazaki-en.pdf", zaPdf], ["Reuters Education Brief", "Çıme derheqê perwerdeya kurdî de.", "https://www.reuters.com/world/middle-east/kurdish-pupils-denied-language-lessons-turkey-amid-wider-curbs-families-say-2024-12-04/", zaOpen]]]
};

Object.entries(zaReferencePages).forEach(([key, [title, crumb, intro, sections]]) => {
  pageCopy[key].za = {
    title,
    crumb,
    intro,
    sections,
    referencesTitle: "Çımeyê bijartî",
    references: (pageCopy[key].en.references || []).map(([name, text, href]) => [name, text.includes("http") ? text : "Çıme û belge seba lêkolînê.", href])
  };
});

const page = document.body.dataset.page;
const langButtons = document.querySelectorAll("[data-lang]");
const menuButton = document.querySelector(".nav-toggle");
const nav = document.querySelector(".main-nav");

function t(lang, key) {
  return { ...(pageCopy[key]?.en || {}), ...(pageCopy[key]?.[lang] || {}) };
}

function setActiveNav() {
  const resourcePages = new Set(["resources", "teaching", "digital", "archive", "rights"]);
  document.querySelectorAll(".main-nav a").forEach((link) => {
    const isActive = link.dataset.page === page || (link.dataset.page === "resources" && resourcePages.has(page));
    link.classList.toggle("active-link", isActive);
  });
}

function navHtml(lang) {
  const n = t(lang, "nav");
  return [
    ["index.html", "home", n.home],
    ["index.html#about", "about", n.about],
    ["research.html", "research", n.work],
    ["publications.html", "publications", n.publications],
    ["magazine.html", "magazine", n.magazine],
    ["articles.html", "articles", n.articles],
    ["resources.html", "resources", n.resources],
    ["reports.html", "reports", n.reports],
    ["abonnement/", "subscribe", lang === "ku" ? "Abone bibin" : lang === "za" ? "Abone bıbe" : "Subscribe"],
    ["index.html#contact", "contact", n.contact]
  ].map(([href, key, label]) => `<a href="${href}" data-page="${key}">${label}</a>`).join("");
}

function renderHeader(lang) {
  document.querySelector(".main-nav").innerHTML = navHtml(lang);
  setActiveNav();
}

function renderToolbar(lang, type = "full") {
  const c = t(lang, "common");
  const labels = {
    years: lang === "ku" ? "Hemû sal" : lang === "za" ? "Hemey serrî" : "All Years",
    topics: lang === "ku" ? "Hemû mijar" : lang === "za" ? "Hemey mijarî" : "All Topics",
    regions: lang === "ku" ? "Hemû herêm" : lang === "za" ? "Hemey herêmî" : "All Regions"
  };
  if (type === "none") return "";
  return `<div class="toolbar">
    <input class="search-field" placeholder="${c.search}..." />
    <select class="field"><option>${labels.years}</option><option>2025</option><option>2024</option><option>2023</option></select>
    <select class="field"><option>${labels.topics}</option></select>
    <select class="field"><option>${labels.regions}</option></select>
    <button class="button primary">${c.apply}</button>
  </div>`;
}

function pageHero(data) {
  document.querySelector(".page-header").style.setProperty("--page-hero-image", data.hero);
  return `<p class="breadcrumb">${data.crumb}</p><h1 class="page-title">${data.title}</h1><p class="page-copy">${data.intro}</p>`;
}

function card(item) {
  return `<article class="content-card">
    <div class="card-image" style="--img:url('${item[5]}')"></div>
    <div class="card-body">
      <span class="card-kicker">${item[0]}</span>
      <h3>${item[1]}</h3>
      <p>${item[2]}</p>
      <div class="card-meta"><span>${item[3]}</span><span>${item[4]}</span></div>
    </div>
  </article>`;
}

function externalAttrs(href) {
  return href && href.startsWith("http") ? 'target="_blank" rel="noopener"' : "";
}

function reportCard(item, lang) {
  const [year, type, title, description, image, href, action] = item;
  const hasLink = href && href !== "#";
  const tag = hasLink ? "a" : "article";
  return `<${tag} class="content-card" ${hasLink ? `href="${href}" ${externalAttrs(href)}` : ""}>
    <div class="card-image" style="--img:url('${image}')"></div>
    <div class="card-body">
      <span class="card-kicker">${year} · ${type}</span>
      <h3>${title}</h3>
      <p>${description}</p>
      ${hasLink ? `<span class="section-link">${action || (lang === "ku" ? "Veke" : lang === "za" ? "Bıvêne" : "Open resource")} →</span>` : ""}
    </div>
  </${tag}>`;
}

function articleCard(item) {
  return `<a class="content-card article-card" href="${item[5]}" ${externalAttrs(item[5])}>
    <div class="card-image" style="--img:url('${item[4]}')"></div>
    <div class="card-body">
      <span class="card-kicker">${item[0]}</span>
      <h3>${item[1]}</h3>
      <p>${item[2]}</p>
      <div class="card-meta"><span>${item[3]}</span><span>mazest.com</span></div>
    </div>
  </a>`;
}

function renderResearch(data, lang) {
  return `${renderToolbar(lang, "none")}
    <div class="page-layout research-layout">
      <aside class="side-panel"><div class="side-card"><h3>${data.sideTitle}</h3><ul class="topic-list">${data.side.map((x) => `<li><span>${x}</span></li>`).join("")}</ul><button class="button primary" style="width:100%;margin-top:22px">${t(lang, "common").apply}</button></div></aside>
      <div class="content-stack">
        <div class="metric-strip">${data.stats.map((s) => `<article><strong>${s[0]}</strong><span>${s[1]}</span></article>`).join("")}</div>
        <section class="section-block"><div class="section-head"><h2>${data.featuredTitle}</h2><span class="section-link">${t(lang, "common").viewAll} →</span></div><div class="card-grid">${data.cards.map(card).join("")}</div></section>
        <section class="approach-grid">${data.approach.map((a) => `<article class="wide-tile" style="--img:url('${a[2]}')"><h3>${a[0]}</h3><p>${a[1]}</p></article>`).join("")}</section>
        <section class="quote-band"><p>${data.quote}</p></section>
      </div>
    </div>`;
}

function renderReports(data, lang) {
  const featuredHref = data.featuredLink || "reports.html";
  return `${renderToolbar(lang)}
    <div class="page-layout">
      <div class="content-stack">
        <section class="featured panel">
          <div class="feature-image" style="--img:url('assets/rapport.webp')"></div>
          <div><span class="feature-kicker">${data.featuredLabel}</span><h2>${data.featuredTitle}</h2><p>${data.featuredText}</p><div class="feature-meta"><span>${data.featuredMeta?.[0] || "2025"}</span><span>${data.featuredMeta?.[1] || "PDF / web"}</span><span>${data.featuredMeta?.[2] || (lang === "ku" ? "Kurdî" : "English")}</span></div><br><a class="button primary" href="${featuredHref}" ${externalAttrs(featuredHref)}>${data.featuredAction || (lang === "ku" ? "Raporê veke" : "Open report")}</a></div>
          <aside class="summary-box"><h3>${data.summaryTitle}</h3><p>${data.summaryText}</p><a class="section-link" href="${featuredHref}" ${externalAttrs(featuredHref)}>${lang === "ku" ? "Kurteyê bixwîne" : lang === "za" ? "Kurteyê bıvêne" : "Read full summary"} →</a></aside>
        </section>
        <section><div class="section-head"><h2>${data.cardsTitle}</h2><span>${data.cards.length}</span></div><div class="card-grid">${data.cards.map((item) => reportCard(item, lang)).join("")}</div></section>
      </div>
      <aside class="side-panel"><div class="side-card"><h3>${lang === "ku" ? "Rapor bi mijarê" : lang === "za" ? "Raporî bi mijarî" : "Reports by Topic"}</h3><ul class="topic-list">${data.topics.map((x) => `<li><span>${x[0]}</span><strong>${x[1]}</strong></li>`).join("")}</ul></div><div class="side-card"><h3>${lang === "ku" ? "Cureyên raporan" : lang === "za" ? "Cureyê raporî" : "Report Types"}</h3><p>${lang === "za" ? "Raporî · Xebatê meydanî · Mijarê mafî · Kurteyî" : "Research Reports · Field Studies · Policy Papers · Annual Reports · Executive Briefs"}</p></div></aside>
    </div>`;
}

function renderPublications(data, lang) {
  return `<div class="category-nav">${data.categories.map((c, i) => `<button class="${i === 0 ? "active" : ""}">${c}</button>`).join("")}</div>
    <div class="toolbar"><select class="field"><option>${lang === "ku" ? "Hemû ziman" : lang === "za" ? "Hemey zonî" : "All Languages"}</option></select><select class="field"><option>${lang === "ku" ? "Hemû mijar" : lang === "za" ? "Hemey mijarî" : "All Topics"}</option></select><input class="search-field" placeholder="${t(lang, "common").search}..." /><button class="button primary">${t(lang, "common").search}</button></div>
    <section><div class="section-head"><h2>${data.featuredTitle}</h2><span class="section-link">${t(lang, "common").viewAll} →</span></div><div class="card-grid six">${data.books.map((b, i) => {
      const cover = b[5] || "";
      const pdf = b[6] || "";
      const pageLink = b[7] || "";
      const coverTag = pdf
        ? `<a class="book-cover ${cover ? "photo cover-contain" : ""}" href="${pdf}" ${externalAttrs(pdf)} style="${cover ? `--img:url('${cover}')` : ""}" aria-label="${b[1]} PDF">${cover ? "" : b[4]}</a>`
        : `<div class="book-cover ${cover ? "photo cover-contain" : ""} unavailable-cover" style="${cover ? `--img:url('${cover}')` : ""}" aria-label="${b[1]}">${cover ? "" : b[4]}</div>`;
      const pdfAction = pdf
        ? `<a class="section-link" href="${pdf}" ${externalAttrs(pdf)}>${b[4]} →</a>`
        : `<span class="section-link muted">${b[4]}</span>`;
      const pageAction = pageLink
        ? `<a class="section-link muted" href="${pageLink}" ${externalAttrs(pageLink)}>${lang === "ku" ? "Rûpel" : lang === "za" ? "Rûpel" : "Issue page"} →</a>`
        : "";
      return `<article class="content-card publication-card">
        ${coverTag}
        <div class="card-body">
          <span class="card-kicker">${b[0]}</span>
          <h3>${b[1]}</h3>
          <p>${b[2]}<br>${b[3]}</p>
          <div class="publication-actions">
            ${pdfAction}
            ${pageAction}
          </div>
        </div>
      </article>`;
    }).join("")}</div></section>
    <section class="approach-grid panel" style="padding:24px">${data.benefits.map((b) => `<article><h3>${b[0]}</h3><p>${b[1]}</p></article>`).join("")}</section>`;
}

function renderMagazine(data, lang) {
  return `<section><div class="section-head"><h2>${data.recentTitle}</h2><a class="section-link" href="magazine.html">${t(lang, "common").viewAll} →</a></div><div class="issue-row">${data.issues.map((i) => `<article class="content-card issue-card"><div class="issue-thumb cover-contain" style="--img:url('${i[2]}')"></div><div><span class="mini-meta">${i[0]}</span><h3>${i[1]}</h3><a class="section-link" href="${i[2]}" target="_blank" rel="noopener">${lang === "ku" ? "Bixwîne" : lang === "za" ? "Bıvêne" : "Read Issue"} →</a></div></article>`).join("")}</div></section>
    <section class="mini-columns">${data.columns.map((col) => `<div><div class="section-head"><h2>${col[0]}</h2><span class="section-link">${t(lang, "common").viewAll} →</span></div><div class="mini-list">${col[1].map((x, i) => `<article class="mini-row"><div class="mini-image" style="--img:url('${i === 0 ? "assets/cultural-writer.png" : "assets/research-desk.png"}')"></div><h3>${x}</h3></article>`).join("")}</div></div>`).join("")}</section>
    <section class="newsletter-card"><span class="line-icon">✉</span><div><h2>${data.newsletterTitle}</h2><p>${data.newsletterText}</p></div><form><input placeholder="${t(lang, "common").email}" /><button class="button">${t(lang, "common").subscribe}</button></form></section>`;
}

function renderArticles(data, lang) {
  return `<div class="page-layout">
    <div class="content-stack">
      <section class="featured panel" style="grid-template-columns:1fr 340px;background:linear-gradient(90deg,rgba(8,31,24,.92),rgba(8,31,24,.42)),url('${data.featuredImage}') center/cover;color:#fff8e9">
        <div><span class="feature-kicker">${lang === "ku" ? "Gotara bijartî" : lang === "za" ? "Nuşteya bijartî" : "Featured Article"}</span><h2>${data.featured}</h2><p>${data.featuredText}</p><div class="feature-meta" style="color:#f1dfbf"><span>Ma'z Êst</span><span>mazest.com</span></div><br><a class="button secondary" href="${data.featuredLink}" target="_blank" rel="noopener">${lang === "ku" ? "Li mazest.com bixwîne" : lang === "za" ? "Li mazest.com bıvêne" : "Read on mazest.com"}</a></div>
      </section>
      <div class="tabs">${data.categories.map((c, i) => `<button class="${i === 0 ? "active" : ""}">${c}</button>`).join("")}</div>
      <div class="card-grid">${data.cards.map(articleCard).join("")}</div>
      <div class="quote-band"><p>${data.quote}</p></div>
    </div>
    <aside class="side-panel"><div class="side-card"><h3>${data.newsletter}</h3><p>${lang === "ku" ? "Ji gotar, lêkolîn û weşanên nû agahdar bibin." : lang === "za" ? "Seba nuşteyî, lêkolîn û weşanê neweyî agahdar bımane." : "Subscribe and receive the latest articles, research and publications."}</p><input class="field" placeholder="${t(lang, "common").email}" /><br><br><button class="button primary" style="width:100%">${t(lang, "common").subscribe}</button><p>${t(lang, "common").privacy}</p></div></aside>
  </div>`;
}

function renderReferencePage(data, lang) {
  const cardTag = (item) => {
    const hasLink = item[2] && item[2] !== "#";
    const attrs = hasLink ? `href="${item[2]}" ${externalAttrs(item[2])}` : "";
    const tag = hasLink ? "a" : "article";
    return `<${tag} class="content-card" ${attrs}>
      <div class="card-body">
        <span class="card-kicker">${lang === "ku" ? "Çavkanî" : lang === "za" ? "Çımeyî" : "Resource"}</span>
        <h3>${item[0]}</h3>
        <p>${item[1]}</p>
        ${hasLink ? `<span class="section-link">${item[3]} →</span>` : ""}
      </div>
    </${tag}>`;
  };
  const refTag = (item) => {
    const hasLink = item[2] && item[2] !== "#";
    const attrs = hasLink ? `href="${item[2]}" ${externalAttrs(item[2])}` : "";
    const tag = hasLink ? "a" : "span";
    return `<${tag} ${attrs}><strong>${item[0]}</strong><br><span>${item[1]}</span></${tag}>`;
  };
  return `<div class="page-layout no-sidebar">
    <div class="content-stack">
      <section class="card-grid">${data.sections.map(cardTag).join("")}</section>
      <section class="panel" style="padding:28px">
        <div class="section-head"><h2>${data.referencesTitle}</h2></div>
        <div class="resource-list">${data.references.map(refTag).join("")}</div>
      </section>
    </div>
  </div>`;
}

function renderPage(lang) {
  const data = pageCopy[page][lang] || pageCopy[page].en;
  renderHeader(lang);
  document.querySelector(".page-header").innerHTML = pageHero({ ...data, hero: pageCopy[page].hero });
  const shell = document.querySelector(".page-shell");
  if (page === "research") shell.innerHTML = renderResearch(data, lang);
  if (page === "reports") shell.innerHTML = renderReports(data, lang);
  if (page === "publications") shell.innerHTML = renderPublications(data, lang);
  if (page === "magazine") shell.innerHTML = renderMagazine(data, lang);
  if (page === "articles") shell.innerHTML = renderArticles(data, lang);
  if (["resources", "teaching", "digital", "archive", "rights"].includes(page)) shell.innerHTML = renderReferencePage(data, lang);
  document.querySelector(".quote-footer blockquote").textContent = t(lang, "common").footer;
  document.documentElement.lang = lang === "za" ? "zza" : lang;
  langButtons.forEach((button) => button.classList.toggle("active", button.dataset.lang === lang));
  localStorage.setItem("mazest-language", lang);
}

langButtons.forEach((button) => button.addEventListener("click", () => renderPage(button.dataset.lang)));

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", () => {
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
});

document.addEventListener("submit", (event) => {
  event.preventDefault();
});

renderPage(localStorage.getItem("mazest-language") || "en");
