/**
 * Jennys Nährstoffe - Vollständige Supplement- & Nährstoffdatenbank
 * Wissenschaftlich fundiert, 100% verifizierte Referenzen & offizielle Studienlinks
 */

export const JENNY_SUPPLEMENTS = [
  {
    id: 'orthomol-vital-f',
    name: 'Orthomol Vital f (Frauen)',
    brand: 'Orthomol',
    dosageJenny: '1 Fläschchen + 1 Kapsel täglich',
    dosageManufacturer: '1 Fläschchen + 1 Kapsel täglich',
    unitsJenny: 2,
    unitsManufacturer: 2,
    timing: 'Morgens zum Frühstück',
    timeGroup: 'morning',
    icon: '☀️',
    badge: '26 Nährstoffe',
    image: 'assets/products/orthomol_vital.jpg',
    url: 'https://www.orthomol.com/de-de/produkte/orthomol-vital-f',
    notes: 'Komplexformel speziell für Frauen bei Müdigkeit & Belastung. Vor Verzehr gut schütteln. Kapsel mit wertvollen Omega-3-Fettsäuren.',
    active: true,
    nutrientsJenny: {
      'vitamin-c': 530,
      'vitamin-e': 150,
      'vitamin-b1': 25,
      'vitamin-b2': 25,
      'vitamin-b3': 60,
      'vitamin-b5': 18,
      'vitamin-b6': 20,
      'vitamin-b7': 165,
      'vitamin-b9': 400,
      'vitamin-b12': 6,
      'vitamin-a': 450,
      'vitamin-d3': 600, // 15 µg = 600 IE
      'vitamin-k2': 60,
      'magnesium': 150,
      'eisen': 8,
      'zink': 10,
      'selen': 50,
      'jod': 150,
      'kupfer': 0.5,
      'mangan': 2.0,
      'chrom': 30,
      'molybdaen': 60,
      'omega-3': 300,
      'citrus-bioflavonoide': 5,
      'lutein-lycopin': 800
    },
    nutrientsManufacturer: {
      'vitamin-c': 530,
      'vitamin-e': 150,
      'vitamin-b1': 25,
      'vitamin-b2': 25,
      'vitamin-b3': 60,
      'vitamin-b5': 18,
      'vitamin-b6': 20,
      'vitamin-b7': 165,
      'vitamin-b9': 400,
      'vitamin-b12': 6,
      'vitamin-a': 450,
      'vitamin-d3': 600, // 15 µg = 600 IE
      'vitamin-k2': 60,
      'magnesium': 150,
      'eisen': 8,
      'zink': 10,
      'selen': 50,
      'jod': 150,
      'kupfer': 0.5,
      'mangan': 2.0,
      'chrom': 30,
      'molybdaen': 60,
      'omega-3': 300,
      'citrus-bioflavonoide': 5,
      'lutein-lycopin': 800
    }
  },
  {
    id: 'orthomol-vit-c-depo',
    name: 'Orthomol Vitamin C depo',
    brand: 'Orthomol',
    dosageJenny: '1 Tablette täglich',
    dosageManufacturer: '1 Tablette täglich',
    unitsJenny: 1,
    unitsManufacturer: 1,
    timing: 'Morgens / Mittags',
    timeGroup: 'morning',
    icon: '🍊',
    badge: '225 mg Depot-C',
    image: 'assets/products/orthomol_vitc.jpg',
    url: 'https://www.orthomol.com',
    notes: 'Depot-Tablette für kontinuierliche Vitamin-C-Freisetzung über mehrere Stunden + Citrus-Bioflavonoide.',
    active: true,
    nutrientsJenny: {
      'vitamin-c': 225,
      'citrus-bioflavonoide': 10
    },
    nutrientsManufacturer: {
      'vitamin-c': 225,
      'citrus-bioflavonoide': 10
    }
  },
  {
    id: 'sunday-omega3-komplex',
    name: 'Omega 3 Komplex (DHA 400 + EPA 200)',
    brand: 'Sunday Natural',
    dosageJenny: '1 Softgel täglich',
    dosageManufacturer: '1 Softgel täglich',
    unitsJenny: 1,
    unitsManufacturer: 1,
    timing: 'Mittags / Morgens',
    timeGroup: 'noon',
    icon: '🌿',
    badge: '640 mg Omega-3',
    image: 'assets/products/sunday_omega3.jpg',
    url: 'https://www.sunday.de/omega-3-komplex-dha-epa-pflanzlich.html',
    notes: '100% rein pflanzliches Algenöl aus Schizochytrium sp. Reines DHA und EPA im optimalen 2:1-Verhältnis.',
    active: true,
    nutrientsJenny: {
      'omega-3': 640
    },
    nutrientsManufacturer: {
      'omega-3': 640
    }
  },
  {
    id: 'zinzino-essent-plus',
    name: 'Essent+ Premium (BalanceOil+ Softgels)',
    brand: 'Zinzino',
    dosageJenny: '1 Softgel täglich',
    dosageManufacturer: '2 Softgels täglich',
    unitsJenny: 1,
    unitsManufacturer: 2,
    timing: 'Mittags zum Essen',
    timeGroup: 'noon',
    icon: '🫒',
    badge: 'Omega-3 + R.E.V.O.O',
    image: 'assets/products/zinzino_essent.png',
    url: 'https://www.zinzino.com/site/DE/de-DE/products/shop/health-supplements/essent-plus-premium',
    notes: 'Hochkonzentrierte Kombination aus Fischöl-Omega-3 und nativem Olivenöl extra (R.E.V.O.O) mit bioaktiven Polyphenolen.',
    active: true,
    nutrientsJenny: {
      'omega-3': 560,
      'vitamin-d3': 268, // 6.7 µg = 268 IE
      'olivenoel-polyphenole': 9.15
    },
    nutrientsManufacturer: {
      'omega-3': 1120,
      'vitamin-d3': 536, // 13.4 µg = 536 IE
      'olivenoel-polyphenole': 18.3
    }
  },
  {
    id: 'sunday-d3-k2-depot',
    name: 'Vitamin D3 20.000 IE + K2 MK7 All Trans',
    brand: 'Sunday Natural',
    dosageJenny: '1 Kapsel täglich',
    dosageManufacturer: '1 Kapsel alle 20 Tage',
    unitsJenny: 1,
    unitsManufacturer: 0.05,
    timing: 'Morgens mit Fettquelle',
    timeGroup: 'morning',
    icon: '☀️',
    badge: '20.000 IE D3 + K2',
    image: 'assets/products/sunday_d3_k2.jpg',
    url: 'https://www.sunday.de/vitamin-d3-k2-20000-ie-mk7-all-trans.html',
    notes: 'Hochdosierte Kapsel mit 20.000 IE D3 (500 µg) und 200 µg K2VITAL®. Jenny nimmt täglich 1 Kapsel (20.000 IE D3); der Hersteller empfiehlt als Depot 1 Kapsel alle 20 Tage (1.000 IE D3/Tag).',
    active: true,
    nutrientsJenny: {
      'vitamin-d3': 20000,     // 1 Kapsel täglich = 20.000 IE
      'vitamin-k2': 200        // 1 Kapsel täglich = 200 µg K2 MK-7
    },
    nutrientsManufacturer: {
      'vitamin-d3': 1000,      // Depot-Intervall: 1.000 IE täglich
      'vitamin-k2': 10         // Depot-Intervall: 10 µg K2 täglich
    }
  },
  {
    id: 'sunday-ashwagandha-ksm66',
    name: 'Bio Ashwagandha KSM-66® Royal (500 mg)',
    brand: 'Sunday Natural',
    dosageJenny: '1 Kapsel täglich',
    dosageManufacturer: '2 Kapseln täglich',
    unitsJenny: 1,
    unitsManufacturer: 2,
    timing: 'Nachmittags / Abends',
    timeGroup: 'evening',
    icon: '🧘‍♀️',
    badge: '500 mg KSM-66®',
    image: 'assets/products/sunday_ashwagandha.jpg',
    url: 'https://www.sunday.de/ashwagandha-kapseln-ksm-66-bio.html',
    notes: 'Vollspektrum Bio-Wurzelextrakt (KSM-66®) mit 5% Withanoliden. Jenny nimmt 1 Kapsel täglich (500 mg); Hersteller empfiehlt 2 Kapseln (1.000 mg).',
    active: true,
    nutrientsJenny: {
      'ashwagandha-ksm66': 500
    },
    nutrientsManufacturer: {
      'ashwagandha-ksm66': 1000
    }
  },
  {
    id: 'sunday-reishi-extrakt',
    name: 'Bio Reishi Extrakt + Pulver (500 mg)',
    brand: 'Sunday Natural',
    dosageJenny: '1 Kapsel täglich',
    dosageManufacturer: '2 Kapseln täglich',
    unitsJenny: 1,
    unitsManufacturer: 2,
    timing: 'Morgens / Abends',
    timeGroup: 'morning',
    icon: '🍄',
    badge: '500 mg Reishi',
    image: 'assets/products/sunday_reishi.jpg',
    url: 'https://www.sunday.de/reishi-extrakt-pulver-bio-kapseln.html',
    notes: 'Vitalpilz-Kombination aus 300 mg hochkonzentriertem Heißwasserextrakt (30% Polysaccharide) und 200 mg Rohkostpulver.',
    active: true,
    nutrientsJenny: {
      'reishi-extrakt': 500
    },
    nutrientsManufacturer: {
      'reishi-extrakt': 1000
    }
  },
  {
    id: 'sunday-chaga-extrakt',
    name: 'Bio Chaga Extrakt (500 mg)',
    brand: 'Sunday Natural',
    dosageJenny: '1 Kapsel täglich',
    dosageManufacturer: '1 Kapsel täglich',
    unitsJenny: 1,
    unitsManufacturer: 1,
    timing: 'Morgens zum Frühstück',
    timeGroup: 'morning',
    icon: '🌲',
    badge: '500 mg Chaga',
    image: 'assets/products/sunday_chaga.jpg',
    url: 'https://www.sunday.de/chaga-extrakt-bio-kapseln.html',
    notes: 'Bio-Chaga-Extrakt aus nachhaltiger Wildsammlung mit mindestens 20% bioaktiven Pilz-Beta-Glucanen.',
    active: true,
    nutrientsJenny: {
      'chaga-extrakt': 500,
      'pilz-beta-glucane': 100
    },
    nutrientsManufacturer: {
      'chaga-extrakt': 500,
      'pilz-beta-glucane': 100
    }
  },
  {
    id: 'sports-magnesium-bisglycinat',
    name: 'Magnesium Bisglycinat (300 Kapseln)',
    brand: 'Sports & Health',
    dosageJenny: '3 Kapseln täglich',
    dosageManufacturer: '3 Kapseln täglich',
    unitsJenny: 3,
    unitsManufacturer: 3,
    timing: 'Abends vor dem Schlafen',
    timeGroup: 'evening',
    icon: '🌙',
    badge: '400 mg Magnesium',
    image: 'assets/products/sports_magnesium.jpg',
    url: 'https://www.sports-health.de/products/magnesium-bisglycinat',
    notes: 'Reines Magnesiumbisglycinat (Chelatform) mit hoher Bioverfügbarkeit und exzellenter Magenverträglichkeit.',
    active: true,
    nutrientsJenny: {
      'magnesium': 400
    },
    nutrientsManufacturer: {
      'magnesium': 400
    }
  }
];

export const NUTRIENTS_MASTER = [
  // ==========================================
  // 1. VITAMINE
  // ==========================================
  {
    id: 'vitamin-c',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin C',
    subTitle: 'L-Ascorbinsäure & Depot-Freisetzung',
    unit: 'mg',
    refVal: 95,
    refText: '95 mg (D-A-CH Referenzwert für Frauen)',
    optimalRange: '200 – 800 mg (Erhöhter Bedarf bei Stress & Sport)',
    efsaUpperLimit: '1.000 – 2.000 mg (EFSA: Bis 1.000 mg ohne Magen-Darm-Reizung sicher)',
    functions: [
      'Essentieller Kofaktor für die körpereigene Kollagensynthese (Hautelastizität, Knorpel, Blutgefäße & Zahnfleisch)',
      'Hochwirksames wasserlösliches Antioxidans: Schützt Zellen vor oxidativem Stress und regeneriert oxidiertes Vitamin E',
      'Steigert die Aufnahme von pflanzlichem Nichthäm-Eisen im Dünndarm um ein Vielfaches',
      'Unterstützt die normale Funktion des Immunsystems während und nach intensiver körperlicher Belastung'
    ],
    benefits: 'Vitamin C ist der wichtigste Schutzfaktor für strahlende, elastische Haut und ein starkes Immunsystem. Da der menschliche Körper Vitamin C im Gegensatz zu den meisten Tieren nicht selbst synthetisieren kann, ist eine kontinuierliche Zufuhr über den Tag entscheidend.',
    deficiencySigns: 'Müdigkeit, verringerte Infektresistenz, verzögerte Wundheilung, Zahnfleischbluten, Neigung zu blauen Flecken und fahle, trockene Haut.',
    intakeTips: 'Da Vitamin C wasserlöslich ist und überzählige Mengen nach einigen Stunden über die Nieren ausgeschieden werden, ist eine zeitversetzte Freisetzung (Depot-Form) oder Verteilung über den Tag optimal. Zusammen mit Flavonoiden wird die Bioverfügbarkeit erhöht.',
    scienceNotes: 'EFSA bestätigt 15 zugelassene Health Claims u. a. für Immunsystem, Kollagenbildung, Energiestoffwechsel, Nervensystem und Eisenaufnahme.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq/vitamin-c/',
    learnMoreSource: 'DGE (Deutsche Gesellschaft für Ernährung) – FAQ Vitamin C'
  },
  {
    id: 'vitamin-d3',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin D3',
    subTitle: 'Cholecalciferol (Sonnenhormon)',
    unit: 'IE',
    refVal: 800,
    refText: '800 IE / 20 µg (D-A-CH Referenz)',
    optimalRange: '1.400 – 3.000 IE / Tag (35 – 75 µg für optimalen 25(OH)D-Blutspiegel)',
    efsaUpperLimit: '4.000 IE / 100 µg täglich (EFSA Safe Upper Intake Level)',
    functions: [
      'Reguliert über 1.000 Gene und fungiert biochemisch als steroidales Prohormon',
      'Fördert die intestinale Calcium- und Phosphatresorption zur Knochen- und Zahnmineralisierung',
      'Essenziell für die Aktivierung von T-Lymphozyten und die angeborene sowie erworbene Immunabwehr',
      'Beteiligt an der Synthese von Neurotransmittern (Serotonin, Dopamin) und der psychischen Balance'
    ],
    benefits: 'Vitamin D3 steuert entscheidende Prozesse des Immunsystems, der Stimmung und der Knochengesundheit. In Mitteleuropa reicht die UV-B-Strahlung von Oktober bis April nicht aus, um ausreichend körpereigenes Vitamin D in der Haut zu bilden.',
    deficiencySigns: 'Wintermüdigkeit, gedrückte Stimmungslage, Infektanfälligkeit, Muskelschwäche, Knochenschmerzen und langfristig verringerte Knochendichte (Osteopenie/Osteoporose).',
    intakeTips: 'Vitamin D3 ist fettlöslich. Immer zusammen mit einer Mahlzeit einnehmen, die gesunde Fette enthält (z. B. Avocado, Nüsse oder Omega-3-Öl). Perfekter Partner: Vitamin K2 zur zielgerichteten Calciumeinlagerung.',
    scienceNotes: 'Endocrine Society & EFSA: Blutspiegel von 75–125 nmol/l (30–50 ng/ml) 25(OH)D gelten als optimal für Prävention und Knochendichte.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq/vitamin-d/',
    learnMoreSource: 'DGE (Deutsche Gesellschaft für Ernährung) – FAQ Vitamin D'
  },
  {
    id: 'vitamin-k2',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin K (K1 & K2 MK-7)',
    subTitle: 'Phyllochinon & Menachinon-7 (all-trans)',
    unit: 'µg',
    refVal: 60,
    refText: '60 µg (D-A-CH Referenzwert für Frauen)',
    optimalRange: '100 – 200 µg (K2 MK-7 zur maximalen Osteocalcin-Aktivierung)',
    efsaUpperLimit: 'Kein UL festgelegt (von EFSA als sicher und nicht-toxisch eingestuft)',
    functions: [
      'Essentieller Kofaktor der γ-Glutamylcarboxylase zur Aktivierung von Matrix-Gla-Protein (MGP)',
      'Verhindert aktiv arterielle Gefäßverkalkung (vaskuläre Kalzifizierung) durch Bindung freien Calciums',
      'Aktiviert Osteocalcin, welches Calcium zielgerichtet in die Knochenmatrix und Zähne einbaut',
      'Unverzichtbar für die normale hepatische Blutgerinnungskaskade (Faktoren II, VII, IX, X)'
    ],
    benefits: 'Vitamin K2 (speziell als MK-7 all-trans) stellt sicher, dass durch Vitamin D3 aufgenommenes Calcium in die Knochen gelangt und sich nicht schädlich in Gefäßwänden oder Weichgewebe ablagert.',
    deficiencySigns: 'Erhöhte Neigung zu Hämatomen, verlängerte Blutungszeit, abnehmende Knochendichte und vorzeitige Gefäßsteifigkeit.',
    intakeTips: 'Fettlöslich. Die MK-7 All-Trans-Form besitzt mit über 72 Stunden die höchste biologische Halbwertszeit aller K-Vitamine und garantiert stabile Gewebespiegel.',
    scienceNotes: 'Rotterdam-Herzstudie (4.800 Teilnehmer): Hohe Vitamin-K2-Zufuhr reduzierte schwere Aortenverkalkung und kardiovaskuläre Mortalität signifikant um über 50%.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/vitamin-k/',
    learnMoreSource: 'DGE – Wissenschaftliche Referenzwerte Vitamin K'
  },
  {
    id: 'vitamin-b12',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B12',
    subTitle: 'Cobalamin / Methylcobalamin',
    unit: 'µg',
    refVal: 4.0,
    refText: '4,0 µg (D-A-CH Referenzwert für Erwachsene)',
    optimalRange: '5 – 50 µg (Geringe intestinale Resorptionsquote bei passiver Diffusion)',
    efsaUpperLimit: 'Kein UL festgelegt (auch in sehr hohen Dosen physiologisch vollkommen sicher)',
    functions: [
      'Essentiell für die Myelinscheidenbildung und axonale Reizleitung im zentralen & peripheren Nervensystem',
      'Schlüsselenzym der Erythropoese (Bildung reifer roter Blutkörperchen im Knochenmark)',
      'Dient als Kofaktor der Methionin-Synthase zum kardioprotektiven Abbau von toxischem Homocystein',
      'Beteiligt an der mitochondrialen Energiegewinnung über den Citratzyklus (Succinyl-CoA-Synthese)'
    ],
    benefits: 'Vitamin B12 ist der Motor für mentale Klarheit, anhaltende Energie und gesunde Nervenfunktionen. Schützt vor Erschöpfung und kognitiver Abgeschlagenheit.',
    deficiencySigns: 'Chronische Müdigkeit, Antriebslosigkeit, Kribbeln in Händen und Füßen (Parästhesien), Konzentrationsschwäche, Reizbarkeit und megaloblastäre Anämie.',
    intakeTips: 'Die aktive Resorption über den Intrinsic Factor im Magen ist auf ca. 1,5–2 µg pro Dosis limitiert. Höhere Dosen nutzen die passive Diffusion (ca. 1% Resorptionsrate).',
    scienceNotes: 'DGE erhöhte 2019 den Referenzwert von 3,0 auf 4,0 µg, um eine vollständige Sättigung des Transportproteins Holo-Transcobalamin (Holo-TC) zu sichern.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq/vitamin-b12/',
    learnMoreSource: 'DGE – FAQ Vitamin B12'
  },
  {
    id: 'vitamin-b9',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B9 (Folsäure / Folat)',
    subTitle: 'Pteroylmonoglutaminsäure / Folat',
    unit: 'µg',
    refVal: 300,
    refText: '300 µg (D-A-CH Referenzwert für Frauen)',
    optimalRange: '400 – 600 µg (Erhöhter Bedarf bei Zellregeneration & Kinderwunsch)',
    efsaUpperLimit: '1.000 µg täglich für synthetische Folsäure (EFSA Upper Limit)',
    functions: [
      'Unverzichtbarer Überträger von C1-Bausteinen bei der De-novo-Synthese von Purinen und Pyrimidinen (DNA/RNA)',
      'Steuert physiologische Zellteilungs- und Gewebswachstumsprozesse im gesamten Organismus',
      'Zentraler Kofaktor im Homocystein-Stoffwechsel zur Remethylierung von Homocystein zu Methionin',
      'Unterstützt die normale Blutbildung und das mütterliche Gewebswachstum'
    ],
    benefits: 'Folat ist der Schlüsselbaustein für die Zellerneuerung, Blutbildung und gesunde Gefäße. Schützt das Herz-Kreislauf-System durch wirksamen Homocystein-Abbau.',
    deficiencySigns: 'Erhöhte Homocysteinspiegel (Gefäßrisiko), Blutarmut (makrozytäre Anämie), Schleimhautveränderungen, Erschöpfung und Konzentrationsschwäche.',
    intakeTips: 'Wasserlöslich und lichtempfindlich. Zusammen mit Vitamin B12 und B6 synergistisch im Methylierungszyklus.',
    scienceNotes: 'DGE & EFSA empfehlen Frauen im gebärfähigen Alter eine Zufuhr von 400 µg Folat-Äquivalenten zur Prävention von Neuralrohrdefekten.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq/folat/',
    learnMoreSource: 'DGE – FAQ Folat & Folsäure'
  },
  {
    id: 'vitamin-b6',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B6',
    subTitle: 'Pyridoxinhydrochlorid & PLP',
    unit: 'mg',
    refVal: 1.4,
    refText: '1,4 mg (D-A-CH Referenzwert für Frauen)',
    optimalRange: '5 – 25 mg (Erhöhter Bedarf bei proteinreicher Kost & PMS)',
    efsaUpperLimit: '12 mg (neu evaluierter EFSA-Sicherheitsgrenzwert 2023)',
    functions: [
      'Zentraler Kofaktor für über 140 enzymatische Reaktionen im Aminosäure- und Proteinstoffwechsel',
      'Beteiligt an der Biosynthese von Serotonin, Dopamin, GABA, Noradrenalin und Melatonin',
      'Reguliert die hormonelle Aktivität und mildert prämenstruelle Beschwerden (PMS)',
      'Unverzichtbar für den Glykogenabbau in der Leber und die Hämoglobin-Synthese'
    ],
    benefits: 'Vitamin B6 sorgt für stabile Nerven, ausgeglichene Stimmung und optimiert die Hormonbalance bei Frauen. Erleichtert die Eiweißverwertung im Muskelaufbau.',
    deficiencySigns: 'Stimmungsschwankungen, Reizbarkeit, PMS-Symptome, entzündliche Hautveränderungen um Mund und Augen (Cheilosis) und periphere Neuropathien.',
    intakeTips: 'Wasserlöslich. Der Bedarf steigt proportional mit der täglichen Proteinzufuhr.',
    scienceNotes: 'Klinische Studien belegen eine signifikante Linderung von PMS-Symptomen (Brustspannen, Wassereinlagerungen, Launenhaftigkeit) durch moderate B6-Supplementierung.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq/vitamin-b6/',
    learnMoreSource: 'DGE – FAQ Vitamin B6'
  },
  {
    id: 'vitamin-b7',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B7 (Biotin)',
    subTitle: 'D-Biotin (Vitamin H)',
    unit: 'µg',
    refVal: 40,
    refText: '40 µg (D-A-CH Schätzwert für Erwachsene)',
    optimalRange: '100 – 500 µg (Beauty-Dosis für Keratinsynthese)',
    efsaUpperLimit: 'Kein UL festgelegt (auch bei mehreren Milligramm keine toxischen Effekte bekannt)',
    functions: [
      'Prosthetische Gruppe von Carboxylasen im Fettsäure-, Glukose- und Aminosäurestoffwechsel',
      'Stimuliert die Keratinbildung für kräftige Haarstrukturen, reißfeste Nägel und glatte Haut',
      'Erhält die physiologische Schutzbarriere der Epidermis und Schleimhäute',
      'Beteiligt an der epigenetischen Genregulation und Histon-Biotinylierung'
    ],
    benefits: 'Biotin ist das Schönheitsvitamin schlechthin: Es regt die Keratinproduktion an, festigt brüchige Fingernägel und verleiht volles, glänzendes Haar.',
    deficiencySigns: 'Haarausfall (Alopezie), brüchige, splitternde Nägel, schuppige Hautrötungen im Gesicht, Muskelschmerzen und Abgeschlagenheit.',
    intakeTips: 'Wasserlöslich. Kann zu jeder Tageszeit mit oder ohne Mahlzeit eingenommen werden.',
    scienceNotes: 'Dermatologische Studien zeigen nach 3- bis 6-monatiger Biotin-Zufuhr eine bis zu 25%ige Zunahme der Nageldicke und signifikant weniger Haarbruch.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/biotin/',
    learnMoreSource: 'DGE – Wissenschaftliche Referenzwerte Biotin'
  },
  {
    id: 'vitamin-e',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin E',
    subTitle: 'D-alpha-Tocopherol & gemischte Tocopherole',
    unit: 'mg',
    refVal: 12,
    refText: '12 mg Tocopherol-Äquivalent (D-A-CH für Frauen)',
    optimalRange: '30 – 150 mg (Erhöhter zellulärer Schutz bei hoher Zufuhr mehrfach ungesättigter Fettsäuren)',
    efsaUpperLimit: '300 mg täglich (EFSA Upper Limit)',
    functions: [
      'Primäres fettlösliches Kettenabbruch-Antioxidans in allen zellulären Phospholipid-Doppelmembranen',
      'Verhindert die toxische Lipidperoxidation von mehrfach ungesättigten Fettsäuren (Omega-3 EPA/DHA)',
      'Schützt Blutgefäße vor oxidiertem LDL-Cholesterin und wirkt entzündungsmodulierend',
      'Unterstützt die Mikrozirkulation und Hautregeneration nach UV-Belastung'
    ],
    benefits: 'Vitamin E schützt die empfindlichen Omega-3-Fettsäuren und Zellmembranen vor dem Ranzigwerden (Oxidation). Hält die Haut jung und die Gefäße elastisch.',
    deficiencySigns: 'Vorzeitige Hautalterung, Muskelschwäche, erhöhte Erythrozyten-Fragilität (Hämolyse) und neurologische Koordinationsstörungen.',
    intakeTips: 'Fettlöslich. Immer zusammen mit gesunden Fetten und Omega-3 einnehmen, um die Aufnahme zu maximieren und die Fettsäuren direkt im Körper vor Oxidation zu schützen.',
    scienceNotes: 'EFSA bestätigt den Health Claim: „Vitamin E trägt dazu bei, die Zellen vor oxidativem Stress zu schützen.“',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq/vitamin-e/',
    learnMoreSource: 'DGE – FAQ Vitamin E'
  },
  {
    id: 'vitamin-a',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin A (inkl. Beta-Carotin)',
    subTitle: 'Retinol-Äquivalente & Provitamin A',
    unit: 'µg',
    refVal: 700,
    refText: '700 µg RAE (D-A-CH Referenzwert für Frauen)',
    optimalRange: '800 – 1.500 µg RAE (Zellregeneration, Sehkraft & Schleimhäute)',
    efsaUpperLimit: '3.000 µg Retinol täglich (EFSA Upper Limit)',
    functions: [
      'Unverzichtbar für den Sehzyklus in den Stäbchenzellen der Netzhaut (Rhodopsin-Synthese)',
      'Reguliert die epidermale Zelldifferenzierung, Hauterneuerung und Kollagenexpression',
      'Erhält die Integrität und Schutzfunktion aller Schleimhäute (Atemwege, Darm, Urogenitaltrakt)',
      'Moduliert die Differenzierung von Immunzellen (T-Helferzellen, Makrophagen)'
    ],
    benefits: 'Vitamin A sorgt für klare Nachtsicht, widerstandsfähige Schleimhäute und fördert eine feine, ebenmäßige Hauttextur durch aktive Zellerneuerung.',
    deficiencySigns: 'Nachtblindheit, trockene Augen (Xerophthalmie), verhornte Hautstellen, erhöhte Infektanfälligkeit der Atemwege.',
    intakeTips: 'Fettlöslich. Die Kombination aus vorgeformtem Retinol und pflanzlichem Beta-Carotin bietet maximale Sicherheit, da Beta-Carotin bedarfsabhängig umgewandelt wird.',
    scienceNotes: 'DGE-Update 2020: Präzisierte Referenzwerte in Retinol-Aktivitäts-Äquivalenten (RAE), um die Bioverfügbarkeit von Carotinoiden exakt abzubilden.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq/ausgewaehlte-fragen-und-antworten-zu-vitamin-a/',
    learnMoreSource: 'DGE – FAQ Vitamin A & Beta-Carotin'
  },
  {
    id: 'vitamin-b1',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B1 (Thiamin)',
    subTitle: 'Thiaminmononitrat / Thiamindiphosphat (TDP)',
    unit: 'mg',
    refVal: 1.0,
    refText: '1,0 mg (D-A-CH Referenzwert für Frauen)',
    optimalRange: '10 – 50 mg (Erhöhter Bedarf bei geistiger Arbeit & Sport)',
    efsaUpperLimit: 'Kein UL festgelegt (sehr hohe therapeutische Sicherheitsspanne)',
    functions: [
      'Schlüssel-Kofaktor der Pyruvat-Dehydrogenase zur Energiegewinnung aus Kohlenhydraten (ATP)',
      'Essentiell für die Reizweiterleitung und Signalübertragung in Nervenfasern',
      'Unterstützt die normale Herzmuskelfunktion und myokardiale Kontraktilität',
      'Beteiligt an der Synthese des Neurotransmitters Acetylcholin (Gedächtnis & Fokus)'
    ],
    benefits: 'Thiamin ist das Nerven- und Energievitamin. Es wandelt Kohlenhydrate direkt in nutzbare Energie für Gehirn und Muskeln um und beugt mentaler Ermüdung vor.',
    deficiencySigns: 'Chronische Erschöpfung, Konzentrationsschwäche, Reizbarkeit, Muskelschwäche und periphere Nervenentzündungen.',
    intakeTips: 'Wasserlöslich. Am besten morgens einnehmen, um den Energiestoffwechsel für den Tag zu aktivieren.',
    scienceNotes: 'EFSA bestätigt 4 Health Claims u. a. für Herzfunktion, Nervensystem, Energiestoffwechsel und psychische Funktion.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/thiamin/',
    learnMoreSource: 'DGE – Wissenschaftliche Referenzwerte Thiamin'
  },
  {
    id: 'vitamin-b2',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B2 (Riboflavin)',
    subTitle: 'Riboflavin-5-Phosphat (FMN / FAD)',
    unit: 'mg',
    refVal: 1.1,
    refText: '1,1 mg (D-A-CH Referenzwert für Frauen)',
    optimalRange: '10 – 50 mg (Mitochondriale Energie & zellulärer Schutz)',
    efsaUpperLimit: 'Kein UL festgelegt (vollkommen ungiftig; Überschuss färbt den Urin unbedenklich gelb)',
    functions: [
      'Präziser Bestandteil der Flavin-Koenzyme FAD und FMN in der mitochondrialen Atmungskette',
      'Regeneriert das körpereigene Master-Antioxidans Glutathion über die Glutathion-Reduktase',
      'Erhält gesunde Haut, Lippen und Schleimhäute',
      'Aktiviert andere B-Vitamine (Folat, Vitamin B6, Niacin) in ihre bioaktiven Formen'
    ],
    benefits: 'Riboflavin treibt die zelluläre Energieproduktion in den Mitochondrien an und schützt gleichzeitig die Augen und Schleimhäute vor oxidativem Stress.',
    deficiencySigns: 'Eingerissene Mundwinkel (Rhagaden), brennende, lichtempfindliche Augen, entzündete Zunge (Glossitis) und Müdigkeit.',
    intakeTips: 'Wasserlöslich. Eine leuchtend gelbe Urinfärbung ist ein harmloses und natürliches Zeichen aktiver Aufnahme und Ausscheidung.',
    scienceNotes: 'Neurologische Studien belegen eine signifikante Reduktion von Migräneattacken durch hochdosiertes Riboflavin via Optimierung des mitochondrialen Energiestoffwechsels.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/riboflavin/',
    learnMoreSource: 'DGE – Wissenschaftliche Referenzwerte Riboflavin'
  },
  {
    id: 'vitamin-b3',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B3 (Niacin)',
    subTitle: 'Nicotinamid (Flush-freie Form)',
    unit: 'mg',
    refVal: 13,
    refText: '13 mg Niacin-Äquivalent (D-A-CH für Frauen)',
    optimalRange: '30 – 100 mg (Mitochondriale NAD+/NADH-Synthese)',
    efsaUpperLimit: '900 mg für Nicotinamid / 10 mg für freie Nicotinsäure (EFSA Upper Limit)',
    functions: [
      'Zentraler Baustein von NAD+ und NADP+ für über 400 biochemische Redox-Reaktionen',
      'Aktiviert Sirtuine und PARP-Enzyme für zelluläre DNA-Reparatur und Langlebigkeit',
      'Fördert die zelluläre Regeneration der Hautbarriere und die Ceramid-Synthese',
      'Unterstützt die normale Funktion des Nervensystems und die psychische Balance'
    ],
    benefits: 'Niacinamid unterstützt die zelluläre Reparatur, stärkt die Haut von innen und sorgt für eine robuste Energiebereitstellung in allen Organen.',
    deficiencySigns: 'Müdigkeit, Konzentrationsstörungen, depressive Verstimmungen, raue, entzündliche Hautstellen (Pellagra) und Verdauungsbeschwerden.',
    intakeTips: 'Nicotinamid ist die flush-freie Form von Vitamin B3 und verursacht keine Gefäßerweiterung oder Hautrötungen.',
    scienceNotes: 'Aktuelle Altersforschung (u. a. Harvard Medical School) zeigt, dass Niacin-Derivate als NAD+-Präkursoren eine Schlüsselrolle für mitochondriale Vitalität spielen.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/niacin/',
    learnMoreSource: 'DGE – Wissenschaftliche Referenzwerte Niacin'
  },
  {
    id: 'vitamin-b5',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B5 (Pantothensäure)',
    subTitle: 'Calcium-D-Pantothenat',
    unit: 'mg',
    refVal: 5.0,
    refText: '5,0 mg (D-A-CH Schätzwert für Erwachsene)',
    optimalRange: '15 – 100 mg (Nebennieren-Support & geistige Leistungsfähigkeit)',
    efsaUpperLimit: 'Kein UL festgelegt (äußerst sicheres wasserlösliches Vitamin)',
    functions: [
      'Unverzichtbarer Grundbaustein von Coenzym A (CoA) und dem Acyl-Carrier-Protein (ACP)',
      'Ermöglicht die Synthese von Steroidhormonen (Cortisol, Östrogen, Progesteron) in den Nebennieren',
      'Beteiligt an der Synthese des Neurotransmitters Acetylcholin (Aufmerksamkeit & Fokus)',
      'Beschleunigt die Epithelisierung und Wundheilung von Haut und Schleimhäuten'
    ],
    benefits: 'Pantothensäure unterstützt die Stresstoleranz in den Nebennieren, fördert die mentale Konzentration und unterstützt die Wundheilung und Hautregeneration.',
    deficiencySigns: 'Erschöpfung, Schlafstörungen, Kopfschmerzen, Magen-Darm-Probleme und das seltene Burning-Feet-Syndrom.',
    intakeTips: 'Wasserlöslich. Synergistisch mit allen anderen B-Vitaminen des B-Komplexes.',
    scienceNotes: 'EFSA bestätigt zugelassenen Health Claim: „Pantothensäure trägt zu einer normalen geistigen Leistung und zur Verringerung von Müdigkeit bei.“',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/pantothensaeure/',
    learnMoreSource: 'DGE – Wissenschaftliche Referenzwerte Pantothensäure'
  },

  // ==========================================
  // 2. MINERALSTOFFE & SPURENELEMENTE
  // ==========================================
  {
    id: 'magnesium',
    category: 'minerals',
    categoryName: 'Mineralstoffe',
    name: 'Magnesium',
    subTitle: 'Magnesiumbisglycinat & Carbonat',
    unit: 'mg',
    refVal: 300,
    refText: '300 mg (D-A-CH Referenzwert für Frauen)',
    optimalRange: '400 – 600 mg (Muskelentspannung, Schlafqualität & Stressresistenz)',
    efsaUpperLimit: '250 mg aus leicht abführenden Salzen; Bisglycinat hat deutlich höhere Darmtoleranz',
    functions: [
      'Essentieller Kofaktor für über 600 enzymatische Reaktionen, insbesondere die ATP-Synthese (Mg-ATP)',
      'Reguliert den intrazellulären Calciumeinstrom und ermöglicht die physiologische Muskelentspannung',
      'Fördert die Aktivierung des inhibitorischen Neurotransmitters GABA für erholsamen Tiefschlaf',
      'Stabilisiert die neuronale Erregbarkeit und das myokardiale Reizleitungssystem'
    ],
    benefits: 'Magnesium ist Jennys wichtigster Erholungsfaktor: Es entspannt verspannte Muskeln, senkt den Cortisolspiegel am Abend und fördert tiefen, regenerativen Schlaf.',
    deficiencySigns: 'Nächtliche Wadenkrämpfe, Lidzucken, innere Unruhe, Einschlafprobleme, Kopfschmerzen und Reizbarkeit.',
    intakeTips: 'Magnesiumbisglycinat ist an zwei Glycin-Moleküle gebunden. Diese Chelatform wird über Peptidtransporter im Darm aufgenommen, schont die Schleimhäute und wirkt optimal abends vor dem Schlafen.',
    scienceNotes: 'Zahlreiche randomisierte Studien belegen, dass Bisglycinat im Vergleich zu Oxid oder Sulfat die höchste Bioverfügbarkeit ohne gastrointestinale Nebenwirkungen aufweist.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq/ausgewaehlte-fragen-und-antworten-zu-magnesium/',
    learnMoreSource: 'DGE – FAQ Magnesium'
  },
  {
    id: 'zink',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Zink',
    subTitle: 'Zinkgluconat / Zinkchelat',
    unit: 'mg',
    refVal: 7.0,
    refText: '7,0 – 10 mg (D-A-CH Referenzwert für Frauen je nach Phytatzufuhr)',
    optimalRange: '10 – 25 mg (Immunkompetenz, Hautgesundheit & Wundheilung)',
    efsaUpperLimit: '25 mg täglich (EFSA Safe Upper Intake Level)',
    functions: [
      'Katalytisches Zentrum von über 300 Metalloenzymen und Strukturelement von Zinkfingerproteinen',
      'Unverzichtbar für die Proliferation und Aktivierung von natürlichen Killerzellen (NK) und T-Zellen',
      'Steuert die DNA-Synthese, Zellteilung sowie die Wundheilung und Gewebereparatur',
      'Beteiligt an der Synthese und Sekretion von Insulin, Schilddrüsen- und Sexualhormonen'
    ],
    benefits: 'Zink sorgt für reine, entzündungsfreie Haut, kräftiges Haar und bildet das Schutzschild des Immunsystems gegen virale Infekte.',
    deficiencySigns: 'Erhöhte Infektanfälligkeit, verzögerte Wundheilung, brüchige Nägel mit weißen Flecken, Haarausfall, Hautunreinheiten und Geschmacksstörungen.',
    intakeTips: 'Am besten nüchtern oder mit etwas Abstand zu stark phytathaltigen Mahlzeiten (z. B. Vollkorn, Hülsenfrüchte) oder Kaffee einnehmen.',
    scienceNotes: 'Cochrane Systematic Review: Zinkeinnahme innerhalb der ersten 24 Stunden nach Symptombeginn verkürzt Dauer und Schwere von Atemwegsinfekten signifikant.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq/ausgewaehlte-fragen-und-antworten-zu-zink/',
    learnMoreSource: 'DGE – FAQ Zink'
  },
  {
    id: 'eisen',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Eisen',
    subTitle: 'Eisen(II)-gluconat',
    unit: 'mg',
    refVal: 15,
    refText: '15 mg (D-A-CH Referenzwert für prämenopausale Frauen)',
    optimalRange: '10 – 20 mg (Ausgleich monatlicher Menstruationsverluste)',
    efsaUpperLimit: 'EFSA/BfR empfiehlt max. 14 mg/Tag über Nahrungsergänzungsmittel',
    functions: [
      'Zentrales Zentralatom des Hämoglobins zum Transport von Sauerstoff von der Lunge in alle Körperzellen',
      'Bestandteil des Myoglobins zur intramuskulären Sauerstoffspeicherung',
      'Essenzieller Kofaktor von Cytochromen in der mitochondrialen Atmungskette zur ATP-Bildung',
      'Beteiligt an der Synthese von Neurotransmittern (Dopamin, Serotonin) und der kognitiven Leistung'
    ],
    benefits: 'Eisen sichert die optimale Sauerstoffversorgung aller Organe und Muskeln. Schützt vor chronischer Erschöpfung, Blutarmut und Leistungsabfall bei Frauen.',
    deficiencySigns: 'Blässe, ständige Müdigkeit, Kurzatmigkeit bei Belastung, Kälteempfindlichkeit, brüchige Nägel, Haarausfall und Konzentrationsschwäche.',
    intakeTips: 'Eisen immer zusammen mit Vitamin C einnehmen – Vitamin C reduziert dreiwertiges Fe3+ zu gut löslichem Fe2+ und steigert die Aufnahme um ein Vielfaches. Nicht gleichzeitig mit Kaffee oder schwarzem Tee trinken.',
    scienceNotes: 'Prämenopausale Frauen verlieren durch die Menstruation monatlich ca. 15–30 mg Eisen. Orthomol Vital f liefert schonendes Eisengluconat kombiniert mit 530 mg Vitamin C.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq/eisen/',
    learnMoreSource: 'DGE – FAQ Eisen'
  },
  {
    id: 'selen',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Selen',
    subTitle: 'Natriumselenat / Selenmethionin',
    unit: 'µg',
    refVal: 60,
    refText: '60 µg (D-A-CH Schätzwert für Frauen)',
    optimalRange: '70 – 150 µg (Optimal für Schilddrüsen-Dejodasen & Glutathionperoxidase)',
    efsaUpperLimit: '255 – 300 µg täglich (EFSA Upper Limit)',
    functions: [
      'Konstitutiver Bestandteil der 25 humanen Selenoproteine, u. a. der Glutathionperoxidasen (GPx)',
      'Unverzichtbar für die Iodthyronin-Dejodasen zur Aktivierung des Schilddrüsenhormons T4 zum wirksamen T3',
      'Schützt die Schilddrüsenzellen vor aggressiven Wasserstoffperoxid-Radikalen bei der Hormonsynthese',
      'Unterstützt die normale Funktion des Immunsystems und den Erhalt gesunder Nägel und Haare'
    ],
    benefits: 'Selen ist unverzichtbar für eine aktive Schilddrüse und einen gesunden Grundumsatz. Schützt vor oxidativem Zellstress.',
    deficiencySigns: 'Schilddrüsenunterfunktion, Müdigkeit, Muskelschwäche, erhöhte Infektanfälligkeit und weißfleckige Nägel.',
    intakeTips: 'Da mitteleuropäische Ackerböden selenarm sind, ist die Zufuhr über selenhaltige Nahrungsergänzung besonders verlässlich.',
    scienceNotes: 'Zahlreiche Endokrinologie-Studien zeigen, dass eine adäquate Selenversorgung Entzündungsmarker (z. B. TPO-Antikörper) bei Autoimmunthyreoiditis signifikant senkt.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq/selen/',
    learnMoreSource: 'DGE – FAQ Selen'
  },
  {
    id: 'jod',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Jod',
    subTitle: 'Kaliumiodid',
    unit: 'µg',
    refVal: 150,
    refText: '150 – 200 µg (D-A-CH Referenzwert für Erwachsene)',
    optimalRange: '150 – 200 µg (Physiologische Schilddrüsensättigung)',
    efsaUpperLimit: '600 µg täglich (EFSA Safe Upper Intake Level)',
    functions: [
      'Essentieller struktureller Baustein der Schilddrüsenhormone Thyroxin (T4, 4 Jodatome) und Trijodthyronin (T3)',
      'Reguliert den Grundumsatz, die Körpertemperatur, den Fettabbau und den Gesamtenergiehaushalt',
      'Steuert physiologische Wachstums-, Zellteilungs- und Differenzierungsprozesse im Körper',
      'Essenziell für die kognitive Funktion, Gedächtnisleistung und das Nervensystem'
    ],
    benefits: 'Jod sichert die körpereigene Produktion von Schilddrüsenhormonen. Ein optimaler Jodstatus garantiert einen aktiven Stoffwechsel und schützt vor Trägheit.',
    deficiencySigns: 'Kropfbildung (Struma), Antriebslosigkeit, Kälteempfindlichkeit, Gewichtszunahme trotz normaler Ernährung, trockene Haut und Konzentrationsstörungen.',
    intakeTips: 'Deutschland gilt nach wie vor als Jodmangelgebiet. Die Kombination aus 150 µg Jod und 50 µg Selen in Orthomol Vital f ist biochemisch ideal abgestimmt.',
    scienceNotes: 'Das Bundesinstitut für Risikobewertung (BfR) und die WHO empfehlen eine tägliche Zufuhr von 150–200 µg Jod zur Prävention von Schilddrüsendysfunktionen.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq/jod/',
    learnMoreSource: 'DGE – FAQ Jod'
  },
  {
    id: 'kupfer',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Kupfer',
    subTitle: 'Kupfersulfat / Kupfergluconat',
    unit: 'mg',
    refVal: 1.0,
    refText: '1,0 – 1,5 mg (D-A-CH Schätzwert für Erwachsene)',
    optimalRange: '1,0 – 2,0 mg (Erhalt des Zink-Kupfer-Gleichgewichts)',
    efsaUpperLimit: '5,0 mg täglich (neu evaluierter EFSA-Sicherheitsgrenzwert 2023)',
    functions: [
      'Bestandteil der Cytochrom-c-Oxidase zur mitochondrialen ATP-Generierung',
      'Essentieller Kofaktor von Ceruloplasmin und Hephaestin zur Oxidation von Eisen für den Hämoglobintransport',
      'Kofaktor der Lysyloxidase zur Quervernetzung von Kollagen- und Elastinfasern in Haut und Gefäßen',
      'Bestandteil der Superoxiddismutase (Cu/Zn-SOD) zur antioxidativen Zellabwehr'
    ],
    benefits: 'Kupfer sorgt für feste Bindegewebsstrukturen, kräftige Haarpigmentierung und arbeitet Hand in Hand mit Eisen für den optimalen Sauerstofftransport.',
    deficiencySigns: 'Mikrozytäre Anämie (trotz ausreichender Eisenzufuhr), Bindegewebsschwäche, Pigmentverlust der Haare und Neutropenie.',
    intakeTips: 'Wichtig: Bei regelmäßiger Zinkeinnahme muss ausreichend Kupfer zugeführt werden, da Zink die intestinale Kupferresorption kompetitiv hemmen kann.',
    scienceNotes: 'EFSA bestätigt 7 zugelassene Health Claims u. a. für Bindegewebe, Energiestoffwechsel, Nervensystem, Haarpigmentierung und Eisentransport.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/kupfer-mangan-chrom-molybdaen/',
    learnMoreSource: 'DGE – Referenzwerte Spurenelemente'
  },
  {
    id: 'mangan',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Mangan',
    subTitle: 'Mangansulfat',
    unit: 'mg',
    refVal: 2.0,
    refText: '2,0 – 5,0 mg (D-A-CH Schätzwert für Erwachsene)',
    optimalRange: '2,0 – 4,0 mg (Knorpelschutz & antioxidativer Schutz)',
    efsaUpperLimit: '8,0 mg täglich (EFSA Upper Limit)',
    functions: [
      'Prosthetische Gruppe der mitochondrialen Mangan-Superoxiddismutase (Mn-SOD)',
      'Essentieller Kofaktor von Glykosyltransferasen zur Biosynthese von Proteoglykanen in Knorpel und Knochen',
      'Beteiligt an Enzymen der Glukoneogenese (Pyruvat-Carboxylase) und dem Harnstoffzyklus (Arginase)',
      'Trägt zu einer normalen Bindegewebsbildung bei'
    ],
    benefits: 'Mangan schützt die Mitochondrien vor freien Radikalen und ist unverzichtbar für stabile Gelenkknorpel und elastisches Bindegewebe.',
    deficiencySigns: 'Gelenkbeschwerden, verringerte Knochendichte, Störungen im Kohlenhydratstoffwechsel und Hautveränderungen.',
    intakeTips: 'Wird gut über eine ausgewogene Ernährung und abgestimmte Mikronährstoffkomplexe aufgenommen.',
    scienceNotes: 'EFSA Health Claims: Trägt zu einem normalen Energiestoffwechsel, Knochenerhalt, Bindegewebsbildung und Zellschutz bei.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/kupfer-mangan-chrom-molybdaen/',
    learnMoreSource: 'DGE – Referenzwerte Spurenelemente'
  },
  {
    id: 'chrom',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Chrom',
    subTitle: 'Chrom(III)-chlorid',
    unit: 'µg',
    refVal: 30,
    refText: '30 – 100 µg (D-A-CH Schätzwert für Erwachsene)',
    optimalRange: '30 – 100 µg (Stabilisierung der Insulinsensitivität)',
    efsaUpperLimit: 'EFSA stuft dreiwertiges Chrom (Cr III) bis 250 µg/Tag als vollkommen unbedenklich ein',
    functions: [
      'Verstärkt als Bestandteil des Chromodulins (LMWCr) die Signaltransduktion am Insulinrezeptor',
      'Erleichtert die zelluläre Glukoseaufnahme aus dem Blut in Muskel- und Leberzellen',
      'Unterstützt den physiologischen Makronährstoff-Stoffwechsel von Kohlenhydraten, Fetten und Proteinen',
      'Trägt zur Aufrechterhaltung eines normalen Blutzuckerspiegels bei'
    ],
    benefits: 'Chrom stabilisiert den Blutzuckerspiegel nach Mahlzeiten, dämpft Heißhungerattacken auf Süßes und verbessert die Insulinsensitivität.',
    deficiencySigns: 'Blutzuckerschwankungen, Heißhungerattacken, verringerte Glukosetoleranz und Erschöpfung nach kohlenhydratreichen Mahlzeiten.',
    intakeTips: 'Dreiwertiges Chrom(III) ist die sichere, physiologisch aktive Form.',
    scienceNotes: 'EFSA bestätigt 2 Health Claims: Trägt zur Aufrechterhaltung eines normalen Blutzuckerspiegels und zu einem normalen Stoffwechsel von Makronährstoffen bei.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/kupfer-mangan-chrom-molybdaen/',
    learnMoreSource: 'DGE – Referenzwerte Spurenelemente'
  },
  {
    id: 'molybdaen',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Molybdän',
    subTitle: 'Natriummolybdat',
    unit: 'µg',
    refVal: 50,
    refText: '50 – 100 µg (D-A-CH Schätzwert für Erwachsene)',
    optimalRange: '60 – 150 µg (Optimale Sulfit- und Harnsäure-Entgiftung)',
    efsaUpperLimit: '600 µg täglich (EFSA Safe Upper Intake Level)',
    functions: [
      'Essentieller Kofaktor des Molybdän-Pterins (Moco) für die Sulfitoxidase zur Entgiftung von Sulfiten zu Sulfat',
      'Bestandteil der Xanthinoxidase zum Abbau von Purinen zu Harnsäure',
      'Bestandteil der Aldehydoxidase zum enzymatischen Abbau von Umwelttoxinen und Medikamentenmetaboliten',
      'Trägt zu einer normalen Verstoffwechselung schwefelhaltiger Aminosäuren (Methionin, Cystein) bei'
    ],
    benefits: 'Molybdän ist ein unverzichtbares Entgiftungs-Spurenelement. Es baut schädliche Sulfite aus der Nahrung ab und entlastet die Leber.',
    deficiencySigns: 'Sulfitüberempfindlichkeit, Kopfschmerzen nach Weingenuss (Sulfite), Herzrasen und Übelkeit.',
    intakeTips: 'Sehr gut verträglich in geringen Mengen im Mikronährstoffkomplex.',
    scienceNotes: 'EFSA bestätigt den Health Claim: „Molybdän trägt zu einer normalen Verstoffwechselung schwefelhaltiger Aminosäuren bei.“',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/kupfer-mangan-chrom-molybdaen/',
    learnMoreSource: 'DGE – Referenzwerte Spurenelemente'
  },

  // ==========================================
  // 3. OMEGA-3 & VITALSTOFFE
  // ==========================================
  {
    id: 'omega-3',
    category: 'vital',
    categoryName: 'Omega-3 & Vitalstoffe',
    name: 'Omega-3 Fettsäuren (EPA & DHA)',
    subTitle: 'Docosahexaensäure & Eicosapentaensäure (Algenöl + Fischöl)',
    unit: 'mg',
    refVal: 250,
    refText: '250 mg (EFSA Mindestzufuhr für Herzfunktion)',
    optimalRange: '1.000 – 2.000 mg EPA/DHA (Antiinflammatorischer HS-Omega-3-Index > 8%)',
    efsaUpperLimit: '5.000 mg täglich (EFSA: Bis 5 g kombinierte EPA/DHA Zufuhr absolut sicher)',
    functions: [
      'Einbau in zelluläre Membranen: Erhöht Membranfluidität, Signaltransduktion und Rezeptorsensitivität',
      'Substrat für die Bildung antiinflammatorischer Eicosanoide (Serie-3-Prostaglandine, Resolvine, Protectine)',
      'DHA ist der dominante strukturelle Lipidbaustein im Gehirn (Kortex) und den Photorezeptoren der Netzhaut',
      'Senkt erhöhte Triglyceridspiegel im Blut, optimiert den Blutdruck und die Endothelfunktion'
    ],
    benefits: 'Omega-3 ist der stärkste natürliche Entzündungshemmer. Es sorgt für klare Denkleistung, schützt das Herz-Kreislauf-System, schmiert die Gelenke und verleiht geschmeidige Haut.',
    deficiencySigns: 'Trockene Augen, spröde Haut, Konzentrationsstörungen, Antriebslosigkeit, Gelenksteifigkeit und erhöhtes Entzündungsniveau im Körper (stille Entzündungen).',
    intakeTips: 'Immer zu einer fetthaltigen Hauptmahlzeit einnehmen. Jennys Stack kombiniert 640 mg pflanzliches Sunday Algenöl + 560 mg Zinzino Essent+ (mit Polyphenolschutz) + 300 mg Orthomol für eine perfekte Tagesdosis von 1.500 mg EPA/DHA.',
    scienceNotes: 'Zahlreiche Kardiologie- und Neurologie-Studien belegen: Ein HS-Omega-3-Index von 8–11% senkt das Risiko für kardiovaskuläre Ereignisse und kognitiven Abbau signifikant.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/fett-essenzielle-fettsaeuren/',
    learnMoreSource: 'DGE – Wissenschaftliche Referenzwerte essenzielle Fettsäuren'
  },
  {
    id: 'olivenoel-polyphenole',
    category: 'vital',
    categoryName: 'Omega-3 & Vitalstoffe',
    name: 'Olivenöl-Polyphenole (R.E.V.O.O)',
    subTitle: 'Hydroxytyrosol, Tyrosol & Oleocanthal',
    unit: 'mg',
    refVal: 5.0,
    refText: '5,0 mg Hydroxytyrosol & Derivate (EFSA Health Claim)',
    optimalRange: '5,0 – 20 mg (Maximaler Schutz vor Lipidoxidation)',
    efsaUpperLimit: 'Kein toxisches Limit (Bestandteil natürlicher mediterraner Ernährung)',
    functions: [
      'Hochwirksame sekundäre Pflanzenstoffe aus früh geernteten, kaltgepressten Oliven (R.E.V.O.O)',
      'Schützt Blutfette (insbesondere zirkulierendes LDL und Omega-3) vor atherogener Lipidperoxidation',
      'Oleocanthal wirkt als natürlicher COX-Hemmer entzündungsmodulierend ähnlich wie Ibuprofen',
      'Aktiviert endotheliale Stickstoffmonoxid-Synthase (eNOS) für optimale Gefäßerweiterung'
    ],
    benefits: 'Die bioaktiven Olivenöl-Polyphenole im Zinzino Essent+ schützen die empfindlichen Omega-3-Fettsäuren im Blut vor Oxidation und halten Blutgefäße sauber und elastisch.',
    deficiencySigns: 'Erhöhte oxidative Schädigung von Gefäßwänden und LDL-Cholesterin bei polyphenol-armer Ernährung.',
    intakeTips: 'Ideal im Verbund mit Omega-3-Fettsäuren formuliert, da die fettlöslichen Polyphenole die Fettsäuren direkt in den Zellmembranen absichern.',
    scienceNotes: 'EFSA Art. 13(1) Health Claim: „Olivenöl-Polyphenole tragen dazu bei, die Blutfette vor oxidativem Stress zu schützen (bei mind. 5 mg Hydroxytyrosol/Tag).“',
    learnMoreUrl: 'https://pubmed.ncbi.nlm.nih.gov/30678129/',
    learnMoreSource: 'PubMed / NCBI – Olive Oil Polyphenols & Vascular Health Review'
  },
  {
    id: 'citrus-bioflavonoide',
    category: 'vital',
    categoryName: 'Omega-3 & Vitalstoffe',
    name: 'Citrus-Bioflavonoide',
    subTitle: 'Hesperidin, Naringin & Rutin',
    unit: 'mg',
    refVal: 0,
    refText: 'Kein D-A-CH Wert (Sekundärer Pflanzenstoff)',
    optimalRange: '15 – 100 mg (Synergistischer Vitamin-C-Kofaktor)',
    efsaUpperLimit: 'Sehr sicher (Bestandteil von Zitrusfrüchten)',
    functions: [
      'Pflanzliche Polyphenole mit stark ausgeprägter antioxidativer und gefäßprotektiver Wirkung',
      'Hemmen den vorzeitigen oxidativen Abbau von Vitamin C und erhöhen dessen Bioverfügbarkeit um bis zu 35%',
      'Stärken die Kapillarresistenz und verringern die Gefäßdurchlässigkeit (Ödemschutz)',
      'Wirken mild entzündungshemmend und antihistaminisch'
    ],
    benefits: 'Citrus-Bioflavonoide potenzieren die Wirkung von Vitamin C, stabilisieren feine Blutgefäße und schützen das Bindegewebe vor vorzeitigem Abbau.',
    deficiencySigns: 'Keine klassischen Mangelzeichen, jedoch verringerte antioxidative Kapazität und schwächere Vitamin-C-Verwertung.',
    intakeTips: 'Perfekt in Orthomol Vital f (5 mg) und Orthomol Vitamin C depo (10 mg) integriert – exakt so, wie Vitamin C natürlich in der Frucht vorkommt.',
    scienceNotes: 'Pharmakokinetische Studien belegen eine verzögerte Ausscheidung und höhere Gewebekonzentration von Ascorbat in Gegenwart von Citrus-Flavonoiden.',
    learnMoreUrl: 'https://pubmed.ncbi.nlm.nih.gov/32470717/',
    learnMoreSource: 'PubMed / NCBI – Bioflavonoids & Ascorbic Acid Synergism'
  },
  {
    id: 'lutein-lycopin',
    category: 'vital',
    categoryName: 'Omega-3 & Vitalstoffe',
    name: 'Lutein & Lycopin',
    subTitle: 'Carotinoide für Augen & Haut',
    unit: 'µg',
    refVal: 0,
    refText: 'Kein D-A-CH Wert (Sekundäre Pflanzenstoffe)',
    optimalRange: '500 – 5.000 µg (Makulaschutz & Photo-Aging-Prävention)',
    efsaUpperLimit: 'EFSA stuft bis 20 mg/Tag Lutein und 15 mg/Tag Lycopin als unbedenklich ein',
    functions: [
      'Akkumulieren hochspezifisch in der Macula lutea der Netzhaut und filtern schädliches hochenergetisches Blaulicht',
      'Neutralisieren Singulett-Sauerstoff und freie Radikale in den Photorezeptorzellen',
      'Lagern sich in der Dermis ein und dienen als natürlicher innerer UV-Filter gegen lichtbedingte Hautalterung',
      'Unterstützen die vaskuläre Gesundheit und Mikrozirkulation'
    ],
    benefits: 'Lutein und Lycopin wirken wie eine „innere Sonnenbrille“ für die Augen gegen Bildschirm-Blaulicht und schützen die Hautzellen von innen vor Photo-Aging.',
    deficiencySigns: 'Erhöhte Blendempfindlichkeit, schnell ermüdende Augen bei Bildschirmarbeit und höheres Risiko für altersbedingte Makuladegeneration (AMD).',
    intakeTips: 'Fettlöslich. Die Aufnahme wird durch die gleichzeitige Einnahme von Fetten (z. B. den Omega-3-Kapseln in Orthomol Vital f) maximiert.',
    scienceNotes: 'Die großangelegte AREDS-2-Studie des National Eye Institute belegt die fundamentale Schutzfunktion von Lutein für den Erhalt der Sehkraft und Makuladichte.',
    learnMoreUrl: 'https://pubmed.ncbi.nlm.nih.gov/30200508/',
    learnMoreSource: 'PubMed / NCBI – Lutein, Lycopene and Visual Performance'
  },

  // ==========================================
  // 4. ADAPTOGENE & VITALPILZE
  // ==========================================
  {
    id: 'ashwagandha-ksm66',
    category: 'botanicals',
    categoryName: 'Adaptogene & Pilze',
    name: 'Bio Ashwagandha KSM-66®',
    subTitle: 'Withania somnifera (Schlafbeere) Wurzelextrakt',
    unit: 'mg',
    refVal: 0,
    refText: 'Traditionelles ayurvedisches Rasayana (Kein D-A-CH Wert)',
    optimalRange: '300 – 600 mg (KSM-66® Vollspektrumextrakt mit 5% Withanoliden)',
    efsaUpperLimit: 'Bis 1.000 mg in klinischen Humanstudien über Monate sicher und exzellent verträglich',
    functions: [
      'Moduliert die Hypothalamus-Hypophysen-Nebennierenrinden-Achse (HPA-Achse) und senkt chronisch erhöhte Serum-Cortisolspiegel',
      'Agonist an zerebralen GABA-A-Rezeptoren: Fördert emotionale Ausgeglichenheit, Stressabbau und innere Ruhe',
      'Unterstützt die Schlafarchitektur durch Erhöhung des erholsamen Non-REM-Tiefschlafanteils',
      'Fördert kognitive Klarheit, Gedächtnis und mentale Belastbarkeit bei fordernden Lebensphasen'
    ],
    benefits: 'KSM-66® Ashwagandha ist Jennys wirksamstes Adaptogen gegen Stress: Es dämpft innere Unruhe, stabilisiert das Nervensystem und sorgt für tiefen, regenerativen Schlaf.',
    deficiencySigns: 'Chronisches Stressempfinden, Einschlafprobleme, kreisende Gedanken am Abend, Tagesmüdigkeit und vegetative Dysbalance.',
    intakeTips: 'Am besten nachmittags oder abends einnehmen, um den Übergang in die abendliche Entspannungsphase zu erleichtern.',
    scienceNotes: 'Doppelblinde, placebokontrollierte Studien (u. a. Chandrasekhar et al.) belegen eine signifikante Senkung des Serum-Cortisolspiegels um 27,9% sowie eine messbare Reduktion von Stress- und Angstscores nach 60 Tagen KSM-66®.',
    learnMoreUrl: 'https://pubmed.ncbi.nlm.nih.gov/31517876/',
    learnMoreSource: 'PubMed / NCBI – Ashwagandha KSM-66 Stress & Sleep Clinical Trial'
  },
  {
    id: 'reishi-extrakt',
    category: 'botanicals',
    categoryName: 'Adaptogene & Pilze',
    name: 'Bio Reishi (Glänzender Lackporling)',
    subTitle: 'Ganoderma lucidum (Extrakt + Pulver)',
    unit: 'mg',
    refVal: 0,
    refText: 'Traditioneller Vitalpilz der TCM („Pilz der Unsterblichkeit“)',
    optimalRange: '500 – 1.500 mg (30% Polysaccharide & Triterpene)',
    efsaUpperLimit: 'Ausgezeichnetes Sicherheitsprofil in der modernen Mykotherapie',
    functions: [
      'Reich an bioaktiven 1,3-1,6-Beta-D-Glucanen zur Modulation von Makrophagen, dendritischen Zellen und NK-Zellen',
      'Enthält über 100 bioaktive Ganodermsäuren (Triterpene) mit antihistaminischer und leberschützender Wirkung',
      'Fördert die neuronale Beruhigung und harmonisiert das vegetative Nervensystem',
      'Unterstützt die Mikrozirkulation und die zelluläre Sauerstoffaufnahme'
    ],
    benefits: 'Reishi ist der König der Vitalpilze für innere Balance und Langlebigkeit: Er stärkt die körpereigene Immunabwehr, beruhigt das Nervensystem und unterstützt die Leberentgiftung.',
    deficiencySigns: 'Erhöhte Anfälligkeit für Umweltstressoren, Erschöpfungszustände und unruhiger Schlaf.',
    intakeTips: 'Sunday Natural kombiniert 300 mg hochkonzentrierten Extrakt (30% Polysaccharide) mit 200 mg schonend vermahlenem Rohkostpulver für das volle Spektrum an Pilzwirkstoffen.',
    scienceNotes: 'Klinische Übersichtsarbeiten in der Fachzeitschrift Phytomedicine heben die immunmodulatorischen, adaptogenen und kardioprotektiven Eigenschaften der Ganoderma-Triterpene hervor.',
    learnMoreUrl: 'https://pubmed.ncbi.nlm.nih.gov/27010230/',
    learnMoreSource: 'PubMed / NCBI – Ganoderma lucidum (Reishi) Therapeutic Review'
  },
  {
    id: 'chaga-extrakt',
    category: 'botanicals',
    categoryName: 'Adaptogene & Pilze',
    name: 'Bio Chaga Extrakt',
    subTitle: 'Inonotus obliquus (Extrakt aus Birken-Wildsammlung)',
    unit: 'mg',
    refVal: 0,
    refText: 'Nordischer Vitalpilz (Sehr hoher ORAC-Antioxidantienwert)',
    optimalRange: '500 – 1.000 mg (Standardisiert auf mind. 20% Beta-Glucane)',
    efsaUpperLimit: 'Sehr sicher und traditionsreich im skandinavischen und sibirischen Raum',
    functions: [
      'Besitzt einen der höchsten gemessenen ORAC-Werte (Oxygen Radical Absorbance Capacity) aller Naturstoffe',
      'Enthält Betulin und Betulinsäure (vom Wirtsbaum Birke absorbiert) mit entzündungshemmenden Eigenschaften',
      'Unterstützt die Schleimhautgesundheit des gesamten Magen-Darm-Traktes',
      'Aktiviert humorale und zelluläre Immunantworten durch bioaktive Polysaccharide'
    ],
    benefits: 'Chaga liefert maximale antioxidative Zellpower, schützt die Magenschleimhaut und stärkt die Abwehrkräfte bei feucht-kalter Witterung.',
    deficiencySigns: 'Hohe Anfälligkeit für oxidativen Stress, sensible Magen-Darm-Schleimhaut und Infektanfälligkeit.',
    intakeTips: 'Sunday Natural verwendet 100% wilde Birkenchaga aus unberührter arktischer Wildsammlung in Estland – heißwasserextrahiert für maximale Bioverfügbarkeit.',
    scienceNotes: 'Zahlreiche pharmakologische Untersuchungen bestätigen die außergewöhnlich hohe Radikalfängerkapazität von Chaga-Polyphenolen und Melanin-Komplexen.',
    learnMoreUrl: 'https://pubmed.ncbi.nlm.nih.gov/33139440/',
    learnMoreSource: 'PubMed / NCBI – Chaga Mushroom (Inonotus obliquus) Bioactivity'
  },
  {
    id: 'pilz-beta-glucane',
    category: 'botanicals',
    categoryName: 'Adaptogene & Pilze',
    name: 'Pilz-Beta-Glucane',
    subTitle: '1,3-1,6-Beta-D-Glucane (aus Chaga & Reishi)',
    unit: 'mg',
    refVal: 0,
    refText: 'Biologisch aktives Polysaccharid (Kein D-A-CH Wert)',
    optimalRange: '100 – 500 mg (Trainierte Immunkompetenz)',
    efsaUpperLimit: 'Kein UL festgelegt (völlig ungiftige Ballaststoff-Struktur)',
    functions: [
      'Binden hochaffin an Dectin-1- und CR3-Rezeptoren auf Makrophagen und dendritischen Immunzellen im Dünndarm (Peyer-Plaques)',
      'Lösen das Phänomen der „Trainierten Immunität“ (Trained Immunity) aus für schnellere antivirale Reaktionszeiten',
      'Dienen als prebiotisches Substrat für nützliche Darmbakterien (Bildung kurzkettiger Fettsäuren SCFA)',
      'Modulieren überschießende Entzündungsreaktionen'
    ],
    benefits: 'Beta-Glucane „trainieren“ die Immunzellen im Darm für eine wachsame, aber ausgeglichene Immunabwehr gegen Erreger.',
    deficiencySigns: 'Träge Immunantwort und Dysbiose im Darmmikrobiom.',
    intakeTips: 'Natürlicher Bestandteil der Sunday Natural Chaga- und Reishi-Extrakte.',
    scienceNotes: 'Nature Immunology: Beta-Glucane induzieren epigenetische Reprogrammierung in myeloischen Zellen für anhaltenden Infektschutz.',
    learnMoreUrl: 'https://pubmed.ncbi.nlm.nih.gov/31804245/',
    learnMoreSource: 'PubMed / NCBI – Beta-Glucans and Trained Immunity'
  }
];
