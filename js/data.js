/**
 * Jennys Nährstoff- & Supplement-Datenbank
 * Mit zwei wählbaren Dosierungs-Modi:
 * 1. "jenny": Jennys persönliche Einnahme (1 Kapsel/Einheit bei allen Produkten, außer Magnesium = 3 Kapseln)
 * 2. "manufacturer": Offizielle Hersteller-Empfehlung laut Packung
 * Fundierte wissenschaftliche Nährstoffprofile nach D-A-CH (DGE/ÖGE/SGE), EFSA & Fachquellen.
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
    badge: '26 Mikronährstoffe + Omega-3',
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
      'vitamin-d3': 15,
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
      'lutein': 800,
      'lycopin': 200
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
      'vitamin-d3': 15,
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
      'lutein': 800,
      'lycopin': 200
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
    timing: 'Morgens / Tagsüber',
    timeGroup: 'morning',
    icon: '🍊',
    badge: '225 mg Depot-Vit. C',
    image: 'assets/products/orthomol_vitc.jpg',
    url: 'https://www.orthomol.com',
    notes: 'Verzögerte Langzeitfreisetzung (Depot-Effekt) für gleichmäßige Vitamin-C-Versorgung über viele Stunden.',
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
    icon: '💧',
    badge: '640 mg Algen-Omega-3',
    image: 'assets/products/sunday_omega3.jpg',
    url: 'https://www.sunday.de/omega-3-komplex-dha-epa-pflanzlich.html',
    notes: '100% vegan aus Schizochytrium-Mikroalgen in natürlicher Triglyceridform mit Bio-Borretsch-, Chia- und Sanddornöl.',
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
    icon: '🌿',
    badge: 'Omega-3 + Polyphenole',
    image: 'assets/products/zinzino_essent.jpg',
    url: 'https://www.zinzino.com/site/de-DE/product/essent-plus-premium/',
    notes: 'Synergie aus reinem Wildfischöl und R.E.V.O.O Olivenöl mit extrem hohem Polyphenol-Gehalt (Hydroxytyrosol) & Vitamin D3.',
    active: true,
    nutrientsJenny: {
      'omega-3': 560,
      'vitamin-d3': 6.7,
      'olivenoel-polyphenole': 9.15
    },
    nutrientsManufacturer: {
      'omega-3': 1120,
      'vitamin-d3': 13.4,
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
    unitsManufacturer: 1,
    timing: 'Morgens mit Fettquelle',
    timeGroup: 'morning',
    icon: '☀️',
    badge: '20.000 IE D3 + 200 µg K2',
    image: 'assets/products/sunday_d3_k2.jpg',
    url: 'https://www.sunday.de/vitamin-d3-k2-20000-ie-mk7-all-trans.html',
    notes: 'Hochdosierte Kapsel mit 20.000 IE D3 (500 µg) und 200 µg K2VITAL®. Jenny nimmt täglich 1 Kapsel (500 µg D3); der Hersteller empfiehlt als Depot 1 Kapsel alle 20 Tage (25 µg D3/Tag).',
    active: true,
    nutrientsJenny: {
      'vitamin-d3': 500,       // 1 Kapsel täglich = 500 µg (20.000 IE)
      'vitamin-k2': 200        // 1 Kapsel täglich = 200 µg K2 MK-7
    },
    nutrientsManufacturer: {
      'vitamin-d3': 25,        // Depot-Intervall: ~25 µg (1.000 IE) täglich
      'vitamin-k2': 10         // Depot-Intervall: ~10 µg K2 täglich
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
    notes: 'Weltweit führender Vollspektrum-Wurzelextrakt (KSM-66®) für Stressbalance, seelische Ausgeglichenheit und gesunden Schlaf.',
    active: true,
    nutrientsJenny: {
      'ashwagandha': 500,
      'withanolide': 25
    },
    nutrientsManufacturer: {
      'ashwagandha': 1000,
      'withanolide': 50
    }
  },
  {
    id: 'sunday-reishi-extrakt',
    name: 'Bio Reishi Extrakt + Pulver (500 mg)',
    brand: 'Sunday Natural',
    dosageJenny: '1 Kapsel täglich',
    dosageManufacturer: '1 Kapsel täglich',
    unitsJenny: 1,
    unitsManufacturer: 1,
    timing: 'Morgens / Abends',
    timeGroup: 'evening',
    icon: '🍄',
    badge: '500 mg Bio-Reishi',
    image: 'assets/products/sunday_reishi.jpg',
    url: 'https://www.sunday.de/reishi-extrakt-pulver-bio-kapseln.html',
    notes: 'König der Vitalpilze (Ganoderma lucidum). Synergie aus 300 mg konzentriertem Heißwasserextrakt und 200 mg Rohkostpulver.',
    active: true,
    nutrientsJenny: {
      'reishi': 500,
      'reishi-polysaccharide': 90
    },
    nutrientsManufacturer: {
      'reishi': 500,
      'reishi-polysaccharide': 90
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
    badge: '500 mg Bio-Chaga',
    image: 'assets/products/sunday_chaga.jpg',
    url: 'https://www.sunday.de/chaga-extrakt-bio-kapseln.html',
    notes: 'Wildsammlung aus subarktischen Birkenwäldern. Reich an bioaktiven Beta-Glucanen und Polyphenolen.',
    active: true,
    nutrientsJenny: {
      'chaga': 500,
      'beta-glucan': 100
    },
    nutrientsManufacturer: {
      'chaga': 500,
      'beta-glucan': 100
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
    url: 'https://sports-health.de/products/magnesium-bisglycinat',
    notes: 'Hochdosiertes, magenschonendes Magnesiumbisglycinat für entspannte Muskeln, Nervenruhe und optimale nächtliche Erholung.',
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
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq-referenzwerte/vitamin-c/',
    learnMoreSource: 'DGE (Deutsche Gesellschaft für Ernährung) – FAQ Vitamin C'
  },
  {
    id: 'vitamin-d3',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin D3',
    subTitle: 'Cholecalciferol (Sonnenhormon)',
    unit: 'µg',
    refVal: 20,
    refText: '20 µg / 800 IE (D-A-CH bei fehlender Eigensynthese)',
    optimalRange: '35 – 75 µg (1.400 – 3.000 IE / Tag für optimalen 25(OH)D-Blutspiegel)',
    efsaUpperLimit: '100 µg / 4.000 IE täglich (EFSA Safe Upper Intake Level)',
    functions: [
      'Reguliert über 1.000 Gene und fungiert biochemisch als steroidales Prohormon',
      'Fördert die intestinale Calcium- und Phosphatresorption zur Knochen- und Zahnmineralisierung',
      'Essenziell für die Aktivierung von T-Lymphozyten und die angeborene sowie erworbene Immunabwehr',
      'Beteiligt an der Synthese von Neurotransmittern (Serotonin, Dopamin) und der psychischen Balance'
    ],
    benefits: 'Vitamin D3 steuert entscheidende Prozesse des Immunsystems, der Stimmung und der Knochengesundheit. In Mitteleuropa reicht die UV-B-Strahlung von Oktober bis April nicht aus, um ausreichend körpereigenes Vitamin D in der Haut zu bilden.',
    deficiencySigns: 'Wintermüdigkeit, gedrückte Stimmungslage, Infektanfälligkeit, Muskelschwäche, Knochenschmerzen und langfristig verringerte Knochendichte (Osteopenie/Osteoporose).',
    intakeTips: 'Vitamin D3 ist fettlöslich. Immer zusammen mit einer Mahlzeit einnehmen, die gesunde Fette enthält (z. B. Avocado, Nüsse oder Omega-3-Öl). Perfekter Partner: Vitamin K2 zur zielgerichteten Calciumeinlagerung.',
    scienceNotes: 'Laut Robert Koch-Institut (RKI) erreichen fast 60% der Erwachsenen in Deutschland im Winter keine optimalen Serumwerte von >50 nmol/l 25(OH)D.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq-referenzwerte/vitamin-d/',
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
    refText: '60 µg (D-A-CH Schätzwert für Frauen)',
    optimalRange: '70 – 150 µg (MK-7 all-trans für maximale Gefäßelastizität)',
    efsaUpperLimit: 'Kein toxisches oberes Limit von der EFSA festgelegt',
    functions: [
      'Aktiviert Osteocalcin, das freies Calcium gezielt in die Knochenmatrix einbindet',
      'Aktiviert das Matrix-Gla-Protein (MGP), welches die gefährliche Verkalkung von Arterien und Weichgewebe hemmt',
      'Kofaktor für die hepatische Synthese von Gerinnungsfaktoren (Faktoren II, VII, IX, X)'
    ],
    benefits: 'Vitamin K2 ist der unverzichtbare Verkehrsleiter für Calcium im Körper: Es stellt sicher, dass Calcium dorthin gelangt, wo es gebraucht wird (Knochen & Zähne), und sich nicht in den Blutgefäßen ablagert.',
    deficiencySigns: 'Verkalkung der Blutgefäße, verminderte Knochendichte, erhöhte Neigung zu Knochenbrüchen und verlängerte Blutungszeit.',
    intakeTips: 'Die Form MK-7 (all-trans) weist eine Halbwertszeit von ca. 72 Stunden im Blut auf (im Vergleich zu nur wenigen Stunden bei Vitamin K1) und ist dadurch kontinuierlich im gesamten Körper bioverfügbar. Fettlöslich!',
    scienceNotes: 'Große klinische Studien (z. B. Rotterdam-Studie) belegen eine signifikante Korrelation zwischen hoher K2-Zufuhr und reduzierter Gefäßsteifigkeit.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/vitamin-k/',
    learnMoreSource: 'DGE Referenzwerte Vitamin K'
  },
  {
    id: 'vitamin-b12',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B12',
    subTitle: 'Cobalamin (Methyl- & Adenosylcobalamin)',
    unit: 'µg',
    refVal: 4.0,
    refText: '4.0 µg (D-A-CH)',
    optimalRange: '6 – 50 µg (Zur sicheren Deckung bei passiver Diffusion)',
    efsaUpperLimit: 'Kein toxisches Limit (Sehr hohes Sicherheitsprofil)',
    functions: [
      'Unerlässlich für die Myelinscheidenbildung und den Schutz des Nervensystems',
      'Kofaktor bei der DNA-Synthese und der Zellteilung aller schnell teilenden Gewebe (insb. rote Blutkörperchen)',
      'Beteiligt am Abbau des potenziell gefäßschädigenden Homocysteins zu Methionin',
      'Unterstützt den mitochondrialen Energiestoffwechsel und reduziert chronische Erschöpfung'
    ],
    benefits: 'Vitamin B12 ist das Kraftwerk für Gehirn, Nerven und Blutbildung. Es sorgt für klare Konzentration, mentale Vitalität und die ständige Erneuerung roter Blutkörperchen.',
    deficiencySigns: 'Chronische Erschöpfung, Konzentrationsstörungen, depressive Verstimmungen, Kribbeln in Händen/Füßen (Parästhesien), Schwindel und makrozytäre Anämie.',
    intakeTips: 'Im Magen bindet B12 an den Intrinsic Factor. Höhere Dosen werden zusätzlich über passive Diffusion im Dünndarm (ca. 1–2% der Dosis) aufgenommen, was die Versorgung auch bei empfindlichem Magen absichert.',
    scienceNotes: 'EFSA bestätigt Health Claims für Energiestoffwechsel, Verringerung von Müdigkeit, Nervenfunktion und normale Bildung roter Blutkörperchen.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq-referenzwerte/vitamin-b12/',
    learnMoreSource: 'DGE (Deutsche Gesellschaft für Ernährung) – FAQ Vitamin B12'
  },
  {
    id: 'vitamin-b9',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B9 (Folsäure / Folat)',
    subTitle: 'Pteroylmonoglutaminsäure / 5-MTHF',
    unit: 'µg',
    refVal: 300,
    refText: '300 µg (D-A-CH) / 550 µg (Kinderwunsch & Schwangerschaft)',
    optimalRange: '400 – 600 µg',
    efsaUpperLimit: '1.000 µg synthetische Folsäure (EFSA Upper Limit)',
    functions: [
      'Zentraler Baustein für die Biosynthese von Purinen und Pyrimidinen (DNA & RNA)',
      'Beteiligt an der normalen Blutbildung und dem mütterlichen Gewebewachstum',
      'Synergist von B6 und B12 bei der Regulierung des Homocysteinspiegels',
      'Unterstützt die normale Funktion der Psyche und des Immunsystems'
    ],
    benefits: 'Folat ist der Schlüssel für gesunde Zellteilung und Neubildung. Besonders für Frauen im gebärfähigen Alter und bei hoher geistiger wie körperlicher Aktivität ist eine optimale Folatversorgung unverzichtbar.',
    deficiencySigns: 'Blässe, Müdigkeit, Reizbarkeit, Konzentrationsschwäche, Schleimhautentzündungen und megaloblastäre Anämie.',
    intakeTips: 'Folate aus der Nahrung sind hitze- und lichtempfindlich. Supplements liefern eine standardisierte, stabile Form, die im Körper rasch zu aktivem Tetrahydrofolat metabolisiert wird.',
    scienceNotes: 'Die DGE empfiehlt allen Frauen, die schwanger werden wollen oder könnten, frühzeitig ein Folatsupplement einzunehmen.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq-referenzwerte/folat/',
    learnMoreSource: 'DGE – FAQ & Referenzwerte Folat'
  },
  {
    id: 'vitamin-b6',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B6',
    subTitle: 'Pyridoxin / Pyridoxal-5-Phosphat (P5P)',
    unit: 'mg',
    refVal: 1.4,
    refText: '1.4 mg (D-A-CH Referenzwert für Frauen)',
    optimalRange: '5.0 – 20.0 mg',
    efsaUpperLimit: '25 mg (EFSA Tolerable Upper Intake Level)',
    functions: [
      'Kofaktor für über 100 enzymatische Reaktionen, vor allem im Aminosäuren- und Proteinstoffwechsel',
      'Beteiligt an der Synthese von Neurotransmittern (Serotonin, Dopamin, GABA, Melatonin)',
      'Reguliert die hormonelle Aktivität und den Glykogenabbau in der Muskulatur',
      'Unterstützt die Cystein-Synthese und die Bildung roter Blutkörperchen'
    ],
    benefits: 'Vitamin B6 ist das Harmonisierungs-Vitamin für den weiblichen Hormonhaushalt und die Nervenstärke. Es sorgt für Ausgeglichenheit im Neurotransmitter-Stoffwechsel.',
    deficiencySigns: 'PMS-Beschwerden, Reizbarkeit, Schlafstörungen, rissige Mundwinkel, Entzündungen der Zunge und periphere Nervenirritationen.',
    intakeTips: 'B-Vitamine wirken als Team (B-Komplex). Die gleichzeitige Einnahme von B1, B2, B6, B9 und B12 erzeugt positive Synergien im Energiestoffwechsel.',
    scienceNotes: 'EFSA bestätigt: Vitamin B6 trägt zur Regulierung der Hormontätigkeit und zur normalen Funktion des Nervensystems bei.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/vitamin-b6/',
    learnMoreSource: 'DGE Referenzwerte Vitamin B6'
  },
  {
    id: 'vitamin-b7',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B7 (Biotin)',
    subTitle: 'D-Biotin (Schönheitsvitamin)',
    unit: 'µg',
    refVal: 40,
    refText: '40 µg (D-A-CH Schätzwert)',
    optimalRange: '100 – 300 µg',
    efsaUpperLimit: 'Kein oberes Limit bekannt (sehr gut verträglich)',
    functions: [
      'Kofaktor für Carboxylasen im Fett-, Kohlenhydrat- und Eiweißstoffwechsel',
      'Fördert die Keratinbildung in Haarwurzeln und Nagelmatrix für Festigkeit und Glanz',
      'Unterstützt die Regeneration und Barrierefunktion der Hautzellen',
      'Beteiligt an der physiologischen Funktion des Nervensystems'
    ],
    benefits: 'Biotin ist der Goldstandard für volles Haar, feste Fingernägel und reine, geschmeidige Haut. Es aktiviert die zelluläre Keratinsynthese von innen heraus.',
    deficiencySigns: 'Haarausfall, brüchige, splitternde Nägel, schuppige Hautausschläge im Gesicht, Muskelschmerzen und Appetitlosigkeit.',
    intakeTips: 'Biotin kann sehr gut zu jeder Tageszeit eingenommen werden. Wichtig: Extrem hohe Dosen (>5 mg) können Labortests (z. B. Schilddrüsenwerte Troponin) stören; bei Dosierungen bis 300 µg ist dies in der Regel unbedenklich.',
    scienceNotes: 'EFSA Health Claim: Biotin trägt zur Erhaltung normaler Haare, normaler Haut und normaler Schleimhäute bei.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/biotin/',
    learnMoreSource: 'DGE Referenzwerte Biotin'
  },
  {
    id: 'vitamin-e',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin E',
    subTitle: 'alpha-Tocopherol & Gemischte Tocopherole',
    unit: 'mg',
    refVal: 12,
    refText: '12 mg alpha-TE (D-A-CH Frauen)',
    optimalRange: '30 – 150 mg',
    efsaUpperLimit: '300 mg alpha-TE (EFSA Upper Limit)',
    functions: [
      'Primärer fettlöslicher Membranschutz: Verhindert die Lipidperoxidation mehrfach ungesättigter Fettsäuren in Zellmembranen',
      'Schützt Zellstrukturen vor oxidativem Stress und freien Radikalen',
      'Unterstützt die Gefäßgesundheit und hemmt entzündliche Kaskaden',
      'Wirkt synergistisch mit Vitamin C (das oxidiertes Vitamin E wieder regeneriert)'
    ],
    benefits: 'Vitamin E ist der zelluläre Schutzschild für die Haut und die Blutgefäße. Es bewahrt die Zellmembranen vor vorzeitiger Alterung durch UV-Strahlung, Umweltgifte und Stress.',
    deficiencySigns: 'Trockene, vorzeitig alternde Haut, Muskelschwäche, Sensibilitätsstörungen und erhöhte Membranfragilität roter Blutkörperchen.',
    intakeTips: 'Als fettlösliches Vitamin stets zusammen mit einer Mahlzeit einnehmen. In Kombination mit Omega-3-Fettsäuren schützt es das Öl vor Oxidation im Körper.',
    scienceNotes: 'EFSA bestätigt: Vitamin E trägt dazu bei, die Zellen vor oxidativem Stress zu schützen.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/vitamin-e/',
    learnMoreSource: 'DGE Referenzwerte Vitamin E'
  },
  {
    id: 'vitamin-a',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin A (inkl. Beta-Carotin)',
    subTitle: 'Retinol & Provitamin A Carotinoide',
    unit: 'µg',
    refVal: 700,
    refText: '700 µg RE (D-A-CH Frauen)',
    optimalRange: '700 – 1.200 µg RE',
    efsaUpperLimit: '3.000 µg RE für vorgeformtes Retinol (EFSA)',
    functions: [
      'Bestandteil des Sehpigments Rhodopsin in den Stäbchenzellen der Netzhaut (Hell-Dunkel-Sehen)',
      'Reguliert die Zelldifferenzierung von Epithel- und Schleimhautgeweben im gesamten Körper',
      'Unterstützt die Immunabwehr an den Grenzflächen (Atemwege, Darm, Haut)',
      'Beteiligt am normalen Eisenstoffwechsel'
    ],
    benefits: 'Vitamin A sorgt für klare Sehkraft, widerstandsfähige Schleimhäute und ein frisches Hautbild durch gezielte Förderung der Zellerneuerung.',
    deficiencySigns: 'Nachtblindheit, trockene Augen (Xerophthalmie), raue, verhornte Haut und erhöhte Infektanfälligkeit der Atemwege.',
    intakeTips: 'Provitamin A (Beta-Carotin) wird vom Körper bedarfsgerecht in aktives Retinol umgewandelt und besitzt eine natürliche Schutzfunktion gegen Überdosierung.',
    scienceNotes: 'EFSA Health Claims: Vitamin A trägt zur Erhaltung normaler Sehkraft, normaler Haut und normaler Funktion des Immunsystems bei.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/vitamin-a/',
    learnMoreSource: 'DGE Referenzwerte Vitamin A'
  },
  {
    id: 'vitamin-b1',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B1 (Thiamin)',
    subTitle: 'Thiaminmononitrat / Thiaminhydrochlorid',
    unit: 'mg',
    refVal: 1.0,
    refText: '1.0 mg (D-A-CH Frauen)',
    optimalRange: '5.0 – 25.0 mg',
    efsaUpperLimit: 'Kein toxisches Limit (sehr hohe therapeutische Breite)',
    functions: [
      'Kofaktor für Thiaminpyrophosphat (TPP) im aeroben Glukosestoffwechsel (Pyruvat-Dehydrogenase)',
      'Unerlässlich für die Energiegewinnung von Herzmuskel- und Nervenzellen',
      'Unterstützt die Reizweiterleitung und die Synthese von Acetylcholin',
      'Trägt zu einer normalen Herzfunktion und psychischen Ausgeglichenheit bei'
    ],
    benefits: 'Vitamin B1 ist die Zündkerze für den Kohlenhydratstoffwechsel. Es wandelt Nährstoffe in nutzbare Energie für Gehirn, Nerven und Muskeln um.',
    deficiencySigns: 'Müdigkeit, Reizbarkeit, Konzentrationsschwäche, Wadenkrämpfe und verminderte Belastbarkeit des Herz-Kreislauf-Systems.',
    intakeTips: 'Wasserlöslich. Kaffee, schwarzer Tee und Alkohol können die Resorption von Thiamin im Darm hemmen; daher mit etwas Abstand einnehmen.',
    scienceNotes: 'EFSA bestätigt: Thiamin trägt zu einem normalen Energiestoffwechsel, einer normalen Herzfunktion und normaler psychischer Funktion bei.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/thiamin/',
    learnMoreSource: 'DGE Referenzwerte Thiamin'
  },
  {
    id: 'vitamin-b2',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B2 (Riboflavin)',
    subTitle: 'Riboflavin & FAD / FMN',
    unit: 'mg',
    refVal: 1.1,
    refText: '1.1 mg (D-A-CH Frauen)',
    optimalRange: '5.0 – 25.0 mg',
    efsaUpperLimit: 'Kein oberes Limit bekannt',
    functions: [
      'Zentraler Baustein der Flavin-Koenzyme (FMN und FAD) in der mitochondrialen Atmungskette',
      'Beteiligt an der Energiegewinnung aus Fetten, Kohlenhydraten und Proteinen',
      'Aktiviert das Glutathion-Reduktase-System zum Schutz vor oxidativem Stress',
      'Erhält die Gesundheit von Haut, Hornhaut des Auges und Nervensystem'
    ],
    benefits: 'Riboflavin ist der Motor der zellulären Atmungskette. Es unterstützt den mitochondrialen Energiefluss und schützt die Zellen vor Überlastung.',
    deficiencySigns: 'Eingerissene Mundwinkel (Rhagaden), brennende, lichtempfindliche Augen, Entzündungen der Mundschleimhaut und Antriebslosigkeit.',
    intakeTips: 'Harmloser Nebeneffekt: Überschüssiges Riboflavin färbt den Urin leuchtend neongelb – ein Zeichen dafür, dass der Körper optimal gesättigt ist.',
    scienceNotes: 'EFSA Health Claim: Riboflavin trägt zur Verringerung von Müdigkeit und zur Erhaltung normaler Sehkraft bei.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/riboflavin/',
    learnMoreSource: 'DGE Referenzwerte Riboflavin'
  },
  {
    id: 'vitamin-b3',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B3 (Niacin)',
    subTitle: 'Nicotinamid (Flush-frei)',
    unit: 'mg',
    refVal: 13,
    refText: '13 mg NE (D-A-CH Frauen)',
    optimalRange: '30 – 60 mg',
    efsaUpperLimit: '900 mg Nicotinamid (EFSA Safe Upper Limit)',
    functions: [
      'Baustein der lebensnotwendigen Koenzyme NAD+ und NADP+ für über 400 Redox-Reaktionen',
      'Essenziell für die zelluläre ATP-Produktion und DNA-Reparaturmechanismen (PARP-Enzyme)',
      'Unterstützt die zelluläre Hautbarriere und die Ceramid-Synthese',
      'Fördert die Regeneration des Nervensystems und reduziert Erschöpfung'
    ],
    benefits: 'Niacin ist der Schlüssel für die zelluläre DNA-Reparatur und den mitochondrialen Energiestoffwechsel. In Form von Nicotinamid ist es absolut magenfreundlich und flush-frei.',
    deficiencySigns: 'Müdigkeit, Schlafprobleme, depressive Verstimmungen, raue, entzündliche Hautveränderungen und Verdauungsstörungen.',
    intakeTips: 'Nicotinamid verursacht im Gegensatz zu freier Nicotinsäure keine gefäßerweiternden Hitzewallungen (Flush) und ist optimal für die tägliche Einnahme.',
    scienceNotes: 'EFSA bestätigt: Niacin trägt zu einem normalen Energiestoffwechsel, zur normalen Funktion des Nervensystems und zur Erhaltung normaler Haut bei.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/niacin/',
    learnMoreSource: 'DGE Referenzwerte Niacin'
  },
  {
    id: 'vitamin-b5',
    category: 'vitamins',
    categoryName: 'Vitamine',
    name: 'Vitamin B5 (Pantothensäure)',
    subTitle: 'Calcium-D-Pantothenat',
    unit: 'mg',
    refVal: 5.0,
    refText: '5.0 mg (D-A-CH Schätzwert)',
    optimalRange: '10 – 25 mg',
    efsaUpperLimit: 'Kein toxisches Limit (sehr hohe Verträglichkeit)',
    functions: [
      'Unverzichtbarer Baustein von Coenzym A (CoA), der Drehscheibe des gesamten Intermediärstoffwechsels',
      'Beteiligt an der Synthese von Steroidhormonen (z. B. Cortisol, Östrogen), Vitamin D und Neurotransmittern',
      'Fördert die Wundheilung und die Epithelisierung der Haut',
      'Unterstützt eine normale geistige Leistungsfähigkeit'
    ],
    benefits: 'Pantothensäure (von griechisch „pantothen“ = überall) hält den Stoffwechsel am Laufen und unterstützt die körpereigene Stressregulation über die Nebennierenrinde.',
    deficiencySigns: 'Erschöpfung, Kopfschmerzen, Schlafstörungen, Taubheitsgefühle oder Brennen in den Füßen („Burning-Feet-Syndrom“).',
    intakeTips: 'Wird im Dünndarm aktiv resorbiert und verteilt sich rasch im gesamten Gewebe. Ideal als Bestandteil eines ausgewogenen Multivitamin-Komplexes.',
    scienceNotes: 'EFSA Health Claim: Pantothensäure trägt zu einer normalen geistigen Leistung und zur normalen Synthese von Steroidhormonen bei.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/pantothensaeure/',
    learnMoreSource: 'DGE Referenzwerte Pantothensäure'
  },

  // ==========================================
  // 2. MINERALSTOFFE
  // ==========================================
  {
    id: 'magnesium',
    category: 'minerals',
    categoryName: 'Mineralstoffe',
    name: 'Magnesium',
    subTitle: 'Bisglycinat (Chelat) & Carbonat',
    unit: 'mg',
    refVal: 300,
    refText: '300 mg (D-A-CH Referenzwert für Frauen)',
    optimalRange: '350 – 550 mg (Erhöhter Bedarf bei Sport, Stress & mentaler Belastung)',
    efsaUpperLimit: '350 mg als isolierte Nahrungsergänzung (EFSA Orientierungswert zur Vermeidung von milden osmotischen Effekten)',
    functions: [
      'Aktiviert über 300 Enzyme im Körper und stabilisiert den energiereichen ATP-Komplex',
      'Natürlicher Gegenspieler von Calcium: Sorgt für Muskelentspannung und verhindert Krämpfe',
      'Reguliert den Einstrom von Natrium und Kalium an den Nervenzellen zur Reizübertragung',
      'Beteiligt am Elektrolyt-Gleichgewicht, der Knochenstruktur und der normalen Proteinsynthese'
    ],
    benefits: 'Magnesium ist das wichtigste Entspannungsmineral für Muskeln, Nerven und erholsamen Tiefschlaf. In Form von Magnesiumbisglycinat ist das Mineral an die Aminosäure Glycin gebunden, was für herausragende Magenverträglichkeit sorgt.',
    deficiencySigns: 'Muskelzucken (z. B. Augenlid), Wadenkrämpfe, innere Unruhe, Einschlafprobleme, Kopfschmerzen, Herzstolpern und Reizbarkeit.',
    intakeTips: 'Magnesiumbisglycinat wird über Aminosäure-Transporter aufgenommen und konkurriert nicht mit anderen Mineralstoffen. Ideal abends vor dem Schlafen einnehmen.',
    scienceNotes: 'EFSA bestätigt 10 Health Claims u. a. für normale Muskelfunktion, normales Nervensystem, Erhaltung von Knochen und Zähnen sowie Verringerung von Müdigkeit.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq-referenzwerte/magnesium/',
    learnMoreSource: 'DGE (Deutsche Gesellschaft für Ernährung) – FAQ Magnesium'
  },

  // ==========================================
  // 3. SPURENELEMENTE
  // ==========================================
  {
    id: 'zink',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Zink',
    subTitle: 'Zinkgluconat / Zinkchelat',
    unit: 'mg',
    refVal: 7.0,
    refText: '7.0 mg (D-A-CH Frauen, mittlere Phytatzufuhr)',
    optimalRange: '10 – 15 mg',
    efsaUpperLimit: '25 mg (EFSA Tolerable Upper Intake Level)',
    functions: [
      'Struktureller und katalytischer Bestandteil von über 300 Enzymen und 2.000 Zinkfinger-Transkriptionsfaktoren',
      'Essenziell für die Zellteilung, DNA-Replikation und Wundheilung',
      'Schlüsselelement für die Reifung und Aktivität von Immunzellen (T-Zellen, Killerzellen)',
      'Reguliert den Testosteron- und Östrogenhaushalt, Fruchtbarkeit und den Säure-Basen-Stoffwechsel'
    ],
    benefits: 'Zink ist der Hauptakteur für reine Haut, kräftige Haare, starke Nägel und ein abwehrbereites Immunsystem. Es fördert die Regeneration von Hautläsionen und bekämpft Entzündungsprozesse.',
    deficiencySigns: 'Weiße Flecken auf den Nägeln, Haarausfall, unreine, schlecht heilende Haut, Infektanfälligkeit, Geschmacks- und Geruchsstörungen.',
    intakeTips: 'Zinkchelate besitzen eine signifikant höhere Bioverfügbarkeit als anorganische Zinkoxide. Nicht gleichzeitig mit extrem hohen Eisendosen oder Phytaten (Vollkorn/Kaffee) einnehmen.',
    scienceNotes: 'EFSA bestätigt 18 zugelassene Health Claims für Zink, darunter Haut, Haare, Nägel, Immunsystem, Fruchtbarkeit und Zellschutz.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq-referenzwerte/zink/',
    learnMoreSource: 'DGE – FAQ & Referenzwerte Zink'
  },
  {
    id: 'eisen',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Eisen',
    subTitle: 'Eisengluconat / Eisenbisglycinat',
    unit: 'mg',
    refVal: 15,
    refText: '15 mg (D-A-CH für Frauen im gebärfähigen Alter)',
    optimalRange: '8 – 15 mg (Bedarfsadaptiert)',
    efsaUpperLimit: '40 mg (EFSA Orientierungswert)',
    functions: [
      'Zentrales Zentralatom im Hämoglobin für den Transport von Sauerstoff von der Lunge zu allen Körperzellen',
      'Bestandteil des Myoglobins zur Sauerstoffspeicherung in der Muskulatur',
      'Beteiligt an der mitochondrialen Atmungskette (Cytochrome) zur Energiegewinnung (ATP)',
      'Kofaktor für die normale kognitive Funktion und das Immunsystem'
    ],
    benefits: 'Eisen liefert jeder einzelnen Zelle den lebensnotwendigen Sauerstoff. Besonders Frauen verlieren durch die Monatsblutung regelmäßig Eisen und profitieren von einer gezielten, magenschonenden Bedarfsdeckung.',
    deficiencySigns: 'Chronische Erschöpfung, Blässe, Schwindel, Kurzatmigkeit bei Belastung, brüchige Nägel, rissige Mundwinkel und Kälteempfindlichkeit.',
    intakeTips: 'Vitamin C steigert die Eisenaufnahme um bis zu 300%. Kaffee, schwarzer/grüner Tee (Tannine) und Milchprodukte (Calcium) hemmen die Resorption – 1 Stunde Abstand halten.',
    scienceNotes: 'Laut WHO ist Eisenmangel der weltweit häufigste Mikronährstoffmangel, insbesondere bei Frauen vor der Menopause.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/eisen/',
    learnMoreSource: 'DGE Referenzwerte Eisen'
  },
  {
    id: 'selen',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Selen',
    subTitle: 'Natriumselenat & Selenmethionin',
    unit: 'µg',
    refVal: 60,
    refText: '60 µg (D-A-CH Schätzwert für Frauen)',
    optimalRange: '50 – 100 µg',
    efsaUpperLimit: '255 µg (EFSA Tolerable Upper Intake Level)',
    functions: [
      'Bestandteil der Glutathionperoxidasen (stärkstes zelleigenes antioxidatives Enzymsystem)',
      'Unverzichtbar für die Deiodasen zur Umwandlung des inaktiven Schilddrüsenhormons T4 in das aktive T3',
      'Schützt die Schilddrüse vor Autoimmunprozessen und oxidativem Stress bei der Hormonsynthese',
      'Trägt zur Erhaltung normaler Haare und Nägel sowie zu einer normalen Spermato- und Oogenese bei'
    ],
    benefits: 'Selen ist der Schutzpatron der Schilddrüse und der zellulären Entgiftung. Da mitteleuropäische Ackerböden selenarm sind, ist eine gezielte Zufuhr für eine ausgeglichene Schilddrüsenfunktion besonders wertvoll.',
    deficiencySigns: 'Schilddrüsenunterfunktion, Müdigkeit, Muskelschwäche, Nagelveränderungen (weiße Flecken/Rillen) und geschwächte Immunabwehr.',
    intakeTips: 'Anorganisches Selenat wird gezielt und bedarfsgerecht in Selenoproteine eingebaut, ohne sich unkontrolliert im Gewebe anzureichern.',
    scienceNotes: 'EFSA bestätigt: Selen trägt zu einer normalen Schilddrüsenfunktion, zur Funktion des Immunsystems und zum Schutz der Zellen vor oxidativem Stress bei.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq-referenzwerte/selen/',
    learnMoreSource: 'DGE (Deutsche Gesellschaft für Ernährung) – FAQ Selen'
  },
  {
    id: 'jod',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Jod',
    subTitle: 'Kaliumjodid',
    unit: 'µg',
    refVal: 150,
    refText: '150 – 200 µg (D-A-CH Referenzwert)',
    optimalRange: '150 – 200 µg',
    efsaUpperLimit: '600 µg (EFSA Upper Limit)',
    functions: [
      'Unverzichtbarer Baustein der Schilddrüsenhormone Thyroxin (T4, enthält 4 Jodatome) und Trijodthyronin (T3)',
      'Steuert den Grundumsatz, die Körpertemperatur, den Fettabbau und die Proteinsynthese',
      'Essenziell für die kognitive Entwicklung, das Nervensystem und den Energiestoffwechsel',
      'Unterstützt die Erhaltung gesunder Haut'
    ],
    benefits: 'Jod ist der Dirigent des gesamten Stoffwechsels. Ohne ausreichend Jod kann die Schilddrüse keine Hormone produzieren, was den Energieverbrauch bremst und zu Trägheit führt.',
    deficiencySigns: 'Kropfbildung (Struma), Kälteempfindlichkeit, Gewichtszunahme trotz unveränderter Ernährung, Konzentrationsstörungen, trockene Haut und Antriebsarmut.',
    intakeTips: 'Deutschland gilt nach wie vor als Jodmangelgebiet. Bei bekannten Schilddrüsenerkrankungen (z. B. Hashimoto-Thyreoiditis oder Schilddrüsenüberfunktion) sollte die Jodzufuhr ärztlich abgestimmt werden.',
    scienceNotes: 'EFSA Health Claims: Jod trägt zu einer normalen Produktion von Schilddrüsenhormonen, einer normalen Schilddrüsenfunktion und kognitiven Funktion bei.',
    learnMoreUrl: 'https://www.dge.de/gesunde-ernaehrung/faq-referenzwerte/jod/',
    learnMoreSource: 'DGE (Deutsche Gesellschaft für Ernährung) – FAQ Jod'
  },
  {
    id: 'kupfer',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Kupfer',
    subTitle: 'Kupfersulfat / Kupferchelat',
    unit: 'mg',
    refVal: 1.0,
    refText: '1.0 mg (D-A-CH Schätzwert)',
    optimalRange: '0.5 – 1.5 mg',
    efsaUpperLimit: '5.0 mg (EFSA Upper Limit)',
    functions: [
      'Bestandteil der Caeruloplasmin-Ferroxidase zur Mobilisierung und zum Transport von gespeichertem Eisen',
      'Kofaktor für die Lysyloxidase zur Quervernetzung von Kollagen und Elastin im Bindegewebe',
      'Beteiligt an der Tyrosinase zur Bildung von Melanin (Haar- und Hautpigmentierung)',
      'Unterstützt die mitochondriale Cytochrom-c-Oxidase bei der ATP-Herstellung'
    ],
    benefits: 'Kupfer sorgt für straffes Bindegewebe, natürliche Pigmentierung von Haut und Haaren sowie eine reibungslose Eisenverwertung im Blut.',
    deficiencySigns: 'Eisenresistente Anämie, Bindegewebsschwäche, Pigmentverlust der Haare, Infektanfälligkeit und neurologische Störungen.',
    intakeTips: 'Zink und Kupfer teilen sich denselben Darmtransporter. Ein physiologisches Zink-Kupfer-Verhältnis (ca. 10:1 bis 15:1) verhindert wechselseitige Resorptionsblockaden.',
    scienceNotes: 'EFSA bestätigt: Kupfer trägt zur Erhaltung von normalem Bindegewebe und normaler Haar- und Hautpigmentierung bei.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/kupfer-mangan-chrom-molybdaen/',
    learnMoreSource: 'DGE Referenzwerte Spurenelemente'
  },
  {
    id: 'mangan',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Mangan',
    subTitle: 'Mangansulfat / Mangangluconat',
    unit: 'mg',
    refVal: 2.0,
    refText: '2.0 – 5.0 mg (D-A-CH Schätzwert)',
    optimalRange: '2.0 – 3.0 mg',
    efsaUpperLimit: '11 mg (EFSA Upper Limit)',
    functions: [
      'Kofaktor der mitochondrialen Superoxiddismutase (MnSOD) zum Schutz vor freien Radikalen',
      'Aktiviert Glykosyltransferasen zur Synthese von Proteoglykanen in Knorpel, Sehnen und Knochen',
      'Beteiligt an der Glukoneogenese (Pyruvat-Carboxylase) und dem Harnstoffzyklus (Arginase)'
    ],
    benefits: 'Mangan ist der stille Architekt stabiler Knochen und geschmeidiger Knorpelstrukturen. Es schützt die Gelenkmatrix vor vorzeitigem Verschleiß.',
    deficiencySigns: 'Gelenkbeschwerden, verlangsamte Knorpelregeneration, Knorpeldystrophie und gestörter Glukosestoffwechsel.',
    intakeTips: 'Wird im Dünndarm resorbiert und vor allem in Knochen, Leber und Nieren gespeichert. Pflanzliche Ernährung liefert natürliche Manganquellen.',
    scienceNotes: 'EFSA bestätigt: Mangan trägt zu einer normalen Bindegewebsbildung und zur Erhaltung normaler Knochen bei.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/kupfer-mangan-chrom-molybdaen/',
    learnMoreSource: 'DGE Referenzwerte Mangan'
  },
  {
    id: 'chrom',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Chrom',
    subTitle: 'Chrom(III)-chlorid / Chrompicolinat',
    unit: 'µg',
    refVal: 40,
    refText: '30 – 100 µg (D-A-CH Schätzwert)',
    optimalRange: '30 – 80 µg',
    efsaUpperLimit: 'Kein UL für dreiwertiges Chrom festgelegt (EFSA bestätigt hohe Sicherheit)',
    functions: [
      'Bestandteil des Glukosetoleranzfaktors (GTF / Chromodulin), der die Bindung von Insulin an Rezeptoren verstärkt',
      'Fördert den Einstrom von Glukose und Aminosäuren in die Muskelzellen',
      'Stabilisiert den Blutzuckerspiegel und beugt abrupten Blutzuckerabfällen vor',
      'Unterstützt den normalen Stoffwechsel von Makronährstoffen (Fette, Eiweiße, Kohlenhydrate)'
    ],
    benefits: 'Chrom ist der natürliche Blutzucker-Regulator. Es dämpft Heißhungerattacken, optimiert die Insulinsensitivität und unterstützt ein konstantes Energieniveau über den ganzen Tag.',
    deficiencySigns: 'Starke Schwankungen des Blutzuckerspiegels, Heißhunger auf Süßes, verminderte Glukosetoleranz und Konzentrationstiefs nach Mahlzeiten.',
    intakeTips: 'Dreiwertiges Chrom (Cr3+) ist die physiologisch wirksame und sichere Form, die in Lebensmitteln und geprüften Nahrungsergänzungsmitteln verwendet wird.',
    scienceNotes: 'EFSA Health Claims: Chrom trägt zur Aufrechterhaltung eines normalen Blutzuckerspiegels und zu einem normalen Stoffwechsel von Makronährstoffen bei.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/kupfer-mangan-chrom-molybdaen/',
    learnMoreSource: 'DGE Referenzwerte Chrom'
  },
  {
    id: 'molybdaen',
    category: 'trace',
    categoryName: 'Spurenelemente',
    name: 'Molybdän',
    subTitle: 'Natriummolybdat',
    unit: 'µg',
    refVal: 60,
    refText: '50 – 100 µg (D-A-CH Schätzwert)',
    optimalRange: '50 – 80 µg',
    efsaUpperLimit: '600 µg (EFSA Upper Limit)',
    functions: [
      'Unverzichtbarer Kofaktor für die Sulfit-Oxidase zur Entgiftung potenziell toxischer Sulfite zu unschädlichem Sulfat',
      'Aktiviert die Xanthin-Oxidase zum Harnsäurestoffwechsel und Purinabbau',
      'Beteiligt an der Aldehyd-Oxidase zur Entgiftung von Fremdstoffen und Alkohol-Metaboliten'
    ],
    benefits: 'Molybdän ist der enzymatische Entgiftungs-Katalysator für schwefelhaltige Aminosäuren (Methionin, Cystein) und schützt vor Sulfit-Überempfindlichkeiten.',
    deficiencySigns: 'Sulfitunverträglichkeit, Kopfschmerzen nach Weingenuss/geschwefelten Lebensmitteln, Herzrasen und Übelkeit.',
    intakeTips: 'Sehr gute intestinale Bioverfügbarkeit in wasserlöslicher Molybdat-Form; bereits Mikrogramm-Mengen genügen für die vollständige Enzymaktivierung.',
    scienceNotes: 'EFSA bestätigt: Molybdän trägt zu einer normalen Verstoffwechselung schwefelhaltiger Aminosäuren bei.',
    learnMoreUrl: 'https://www.dge.de/wissenschaft/referenzwerte/kupfer-mangan-chrom-molybdaen/',
    learnMoreSource: 'DGE Referenzwerte Molybdän'
  },

  // ==========================================
  // 4. FETTSÄUREN & BIOAKTIVE VITALSTOFFE
  // ==========================================
  {
    id: 'omega-3',
    category: 'vital',
    categoryName: 'Fettsäuren & Polyphenole',
    name: 'Omega-3 Fettsäuren (EPA & DHA)',
    subTitle: 'Algen- & Wildfischöl (Native Triglyceridform)',
    unit: 'mg',
    refVal: 250,
    refText: '250 – 500 mg EPA+DHA (EFSA Basiszufuhr)',
    optimalRange: '1.000 – 2.500 mg (Für optimale Entzündungsbalance & Omega-6:3 Ratio)',
    efsaUpperLimit: '5.000 mg EPA+DHA (EFSA bestätigt uneingeschränkte Sicherheit bis 5 g/Tag)',
    functions: [
      'DHA ist integraler Strukturbaustein von Phospholipiden in neuronalen Membranen und der Netzhaut des Auges',
      'EPA dient als Vorläufer für entzündungsauflösende Eicosanoide und spezialisierte Pro-Resolving Mediatoren (SPMs)',
      'Reguliert den Blutdruck, die endotheliale Gefäßfunktion und senkt Serum-Triglyceride',
      'Trägt zu einer normalen Herzfunktion und mentalen Schärfe bei'
    ],
    benefits: 'Omega-3-Fettsäuren sind das Schmiermittel für Gehirn, Herz und Zellmembranen. Sie modulieren den Entzündungsstatus des gesamten Körpers und fördern emotionale Balance und gesunde Gefäße.',
    deficiencySigns: 'Trockene Haut, stumpfes Haar, Gelenksteifigkeit, Konzentrationsschwäche, Stimmungsschwankungen und ein ungünstiges Omega-6:3-Verhältnis (>15:1).',
    intakeTips: 'Immer zu einer fetthaltigen Hauptmahlzeit einnehmen, um die körpereigene Lipaseausschüttung zu maximieren. Triglycerid-Formen (TG) werden bis zu 70% besser resorbiert als synthetische Ethylester.',
    scienceNotes: 'EFSA bestätigt: Eine tägliche Zufuhr von mindestens 250 mg DHA trägt zur Erhaltung einer normalen Gehirnfunktion und Sehkraft bei; 250 mg EPA/DHA unterstützen die normale Herzfunktion.',
    learnMoreUrl: 'https://www.efsa.europa.eu/en/efsajournal/pub/2815',
    learnMoreSource: 'EFSA (European Food Safety Authority) – Scientific Opinion on Omega-3'
  },
  {
    id: 'olivenoel-polyphenole',
    category: 'vital',
    categoryName: 'Fettsäuren & Polyphenole',
    name: 'Olivenöl-Polyphenole (R.E.V.O.O)',
    subTitle: 'Hydroxytyrosol & Oleocanthal aus Frühernte',
    unit: 'mg',
    refVal: 5.0,
    refText: '5.0 mg Hydroxytyrosol & Derivate (EFSA Health Claim Schwelle)',
    optimalRange: '10 – 30 mg',
    efsaUpperLimit: 'Kein toxisches Limit (Bestandteil der traditionellen Mittelmeerdiät)',
    functions: [
      'Extrem potenter Radikalfänger: Schützt LDL-Cholesterin und Blutfette vor atherogener Oxidation',
      'Hemmt die Expression von Adhäsionsmolekülen an der Gefäßwand (Endothelschutz)',
      'Schützt empfindliche Omega-3-Fettsäuren im Blut vor oxidativer Zersetzung (Synergieeffekt)'
    ],
    benefits: 'Polyphenole aus nativen Olivenölen früher Ernte gehören zu den stärksten natürlichen Gefäß- und Zellschutzstoffen der Natur. Sie verhindern, dass Blutfette oxidieren und Gefäßablagerungen bilden.',
    deficiencySigns: 'Erhöhte oxidative Belastung der Gefäße, beschleunigte Gefäßalterung und verminderte Mikrozirkulation.',
    intakeTips: 'Perfekt in Synergie mit Omega-3-Fettsäuren: Die Polyphenole stabilisieren das Omega-3-Öl sowohl in der Kapsel als auch nach der Aufnahme im Blutplasma.',
    scienceNotes: 'EFSA Health Claim: Olivenöl-Polyphenole tragen dazu bei, die Blutfette vor oxidativem Stress zu schützen (bei mind. 5 mg Hydroxytyrosol/Tag).',
    learnMoreUrl: 'https://www.efsa.europa.eu/en/efsajournal/pub/2033',
    learnMoreSource: 'EFSA Journal – Scientific Opinion on Olive Oil Polyphenols'
  },
  {
    id: 'citrus-bioflavonoide',
    category: 'vital',
    categoryName: 'Fettsäuren & Polyphenole',
    name: 'Citrus-Bioflavonoide',
    subTitle: 'Hesperidin, Naringin & Rutin',
    unit: 'mg',
    refVal: 10,
    refText: '10 – 30 mg (Wissenschaftlicher Orientierungswert)',
    optimalRange: '15 – 50 mg',
    efsaUpperLimit: 'Kein toxisches Limit',
    functions: [
      'Verstärkt die biologische Halbwertszeit und Resorption von Vitamin C im Gewebe',
      'Stärkt die Kapillarwände und reguliert die mikrovaskuläre Durchlässigkeit',
      'Neutralisiert freie Radikale und unterstützt die Entzündungshemmung'
    ],
    benefits: 'Bioflavonoide sind die natürlichen Partner von Vitamin C. In der Natur kommen sie stets gemeinsam in Zitrusfrüchten vor und potenzieren die antioxidative Kraft gegenseitig.',
    deficiencySigns: 'Brüchige Kapillaren, Neigung zu blauen Flecken, verlangsamte Erholung des Bindegewebes.',
    intakeTips: 'Am besten immer gemeinsam mit Vitamin C einnehmen (wie im Orthomol Vitamin C depo enthalten).',
    scienceNotes: 'Zahlreiche pharmakologische Studien belegen die gefäßtonisierende und antioxidative Synergie mit Ascorbinsäure.',
    learnMoreUrl: 'https://examine.com/supplements/citrus-bioflavonoids/',
    learnMoreSource: 'Examine.com – Citrus Bioflavonoids Research Database'
  },
  {
    id: 'lutein',
    category: 'vital',
    categoryName: 'Fettsäuren & Polyphenole',
    name: 'Lutein & Lycopin',
    subTitle: 'Bioaktive Schutz-Carotinoide',
    unit: 'µg',
    refVal: 1000,
    refText: '1.000 µg (Ernährungswissenschaftlicher Orientierungswert)',
    optimalRange: '1.000 – 5.000 µg',
    efsaUpperLimit: 'Kein UL festgelegt (hohe Sicherheit)',
    functions: [
      'Lutein reichert sich selektiv in der Macula lutea (gelber Fleck) des Auges an und filtert schädliches blaues Bildschirmlicht',
      'Lycopin ist einer der stärksten Singulett-Sauerstoff-Quencher zum Schutz von Haut und Gewebe vor UV-Schäden',
      'Schützt retinale Pigmentepithelzellen vor oxidativem Zelltod'
    ],
    benefits: 'Lutein und Lycopin sind der natürliche Sonnenbrillen- und UV-Filter des Körpers von innen. Sie schützen die Sehkraft vor Blaulichtbelastung und bewahren die Hautfrische.',
    deficiencySigns: 'Erhöhte Blendempfindlichkeit, müde Augen bei Bildschirmarbeit, schnellere Lichtalterung der Haut.',
    intakeTips: 'Carotinoide sind fettlöslich und werden am besten zusammen mit einer Mahlzeit aufgenommen.',
    scienceNotes: 'Die AREDS2-Studie der US National Institutes of Health (NIH) belegt den entscheidenden Schutz von Lutein für die Makulagesundheit.',
    learnMoreUrl: 'https://examine.com/supplements/lutein/',
    learnMoreSource: 'Examine.com – Lutein & Carotenoids Clinical Evidence'
  },

  // ==========================================
  // 5. ADAPTOGENE & VITALPILZE (BOTANICALS)
  // ==========================================
  {
    id: 'ashwagandha',
    category: 'botanicals',
    categoryName: 'Adaptogene & Vitalpilze',
    name: 'Bio Ashwagandha KSM-66®',
    subTitle: 'Withania somnifera (Indischer Ginseng / Schlafbeere)',
    unit: 'mg',
    refVal: 500,
    refText: '300 – 600 mg (Standardisierte klinische Dosis)',
    optimalRange: '500 – 600 mg (KSM-66® Vollspektrum mit 5% Withanoliden)',
    efsaUpperLimit: 'Bis 1.000 mg in klinischen Studien sicher erprobt',
    functions: [
      'Reguliert die Hypothalamus-Hypophysen-Nebennierenrinden-Achse (HPA-Achse) und senkt erhöhte Serum-Cortisolspiegel',
      'Wirkt als GABA-mimetisches Adaptogen zur Dämpfung von Reizüberflutung und innerer Unruhe',
      'Fördert die Schlafarchitektur (insb. REM- und Tiefschlafphasen) ohne Tagesmüdigkeit',
      'Unterstützt die kognitive Funktion, Gedächtnisleistung und physische Ausdauer'
    ],
    benefits: 'KSM-66® ist der weltweit am besten erforschte Bio-Vollspektrum-Wurzelextrakt aus Ashwagandha. Er bringt das vegetative Nervensystem ins Gleichgewicht, fördert Gelassenheit bei Stress und sorgt für erholsame Nachtruhe.',
    deficiencySigns: 'Chronischer Stress, innere Getriebenheit, Schlafprobleme, Erschöpfungszustände und erhöhte Reizbarkeit.',
    intakeTips: 'Idealerweise nachmittags oder abends mit warmem Wasser, Milch oder Tee einnehmen. Regelmäßige Einnahme über mindestens 4–8 Wochen entfaltet die volle adaptogene Wirkung.',
    scienceNotes: 'Über 24 randomisierte, doppelblinde, placebokontrollierte Studien belegen die Wirksamkeit von KSM-66® bei Stressreduktion, Cortisolsenkung und Schlafqualität.',
    learnMoreUrl: 'https://examine.com/supplements/ashwagandha/',
    learnMoreSource: 'Examine.com – Ashwagandha Scientific Evidence & Human Trials'
  },
  {
    id: 'reishi',
    category: 'botanicals',
    categoryName: 'Adaptogene & Vitalpilze',
    name: 'Bio Reishi (Glänzender Lackporling)',
    subTitle: 'Ganoderma lucidum (König der Vitalpilze)',
    unit: 'mg',
    refVal: 500,
    refText: '500 – 1.500 mg (Traditionelle Mykotherapie-Dosierung)',
    optimalRange: '500 – 1.000 mg (Extrakt mit 30% Polysacchariden + Rohkostpulver)',
    efsaUpperLimit: 'Kein toxisches Limit (traditionelles Tonikum seit über 2.000 Jahren)',
    functions: [
      'Enthält über 400 bioaktive Verbindungen, insbesondere spezifische Triterpene (Ganoderinsäuren) und 1,3/1,6-Beta-D-Glucane',
      'Moduliert das Immunsystem: Dämpft Überreaktionen und stärkt die zelluläre Abwehr',
      'Beruhigt traditionell das „Shen“ (den Geist), harmonisiert das Nervensystem und fördert die Leberregeneration',
      'Unterstützt die endotheliale Gefäßgesundheit und besitzt starke antioxidative Eigenschaften'
    ],
    benefits: 'Reishi wird in der traditionellen asiatischen Naturheilkunde als „Pilz der Unsterblichkeit“ verehrt. Er schenkt innere Zentriertheit, stärkt die Immunresilienz und unterstützt die Leber bei ihren täglichen Entgiftungsaufgaben.',
    deficiencySigns: 'Erhöhte Stressanfälligkeit, unruhiger Schlaf, Immunschwäche und Müdigkeitsgefühle.',
    intakeTips: 'Die Kombination aus Heißwasserextrakt (hohe Polysaccharid-Konzentration) und gemahlenem Vollfruchtkörper (alle hitzeempfindlichen Enzyme & Triterpene) bietet das vollständige Wirkspektrum.',
    scienceNotes: 'Internationale Studien untersuchen intensiv die immunmodulierenden und zellschützenden Mechanismen der Ganoderinsäuren und Beta-Glucane.',
    learnMoreUrl: 'https://examine.com/supplements/reishi/',
    learnMoreSource: 'Examine.com – Reishi Mushroom (Ganoderma lucidum) Evidence'
  },
  {
    id: 'chaga',
    category: 'botanicals',
    categoryName: 'Adaptogene & Vitalpilze',
    name: 'Bio Chaga Extrakt',
    subTitle: 'Inonotus obliquus (Schiefer Schillerporling aus Wildsammlung)',
    unit: 'mg',
    refVal: 500,
    refText: '500 – 1.000 mg (Empfohlene Tagesdosis)',
    optimalRange: '500 – 1.000 mg (Standardisiert auf 20% Beta-Glucane)',
    efsaUpperLimit: 'Kein toxisches Limit',
    functions: [
      'Einer der höchsten gemessenen ORAC-Werte (Oxygen Radical Absorbance Capacity) aller Naturstoffe',
      'Reich an Betulin und Betulinsäure (aufgenommen aus der Birkenrinde während des mehrjährigen Wachstums)',
      'Schützt die Magen-Darm-Schleimhaut und fördert ein gesundes Mikrobiom',
      'Aktiviert zelluläre Makrophagen und unterstützt die körpereigene Immunantwort'
    ],
    benefits: 'Chaga wächst wild an arktischen Birken und bildet unter extremen Witterungsbedingungen eine unvergleichliche Dichte an antioxidativen Melanin-Komplexen und Beta-Glucanen. Er stärkt die Abwehrkräfte und schützt den Magen-Darm-Trakt.',
    deficiencySigns: 'Verminderte zelluläre Abwehrkraft, Magen-Darm-Empfindlichkeit und erhöhte Belastung durch Umweltstressoren.',
    intakeTips: 'Hervorragend morgens oder vormittags zu einer Tasse Tee oder zum Frühstück einzunehmen.',
    scienceNotes: 'Pharmakologische Untersuchungen heben die synergistische Schutzwirkung der Betulinsäure und pilzspezifischen Polyphenole hervor.',
    learnMoreUrl: 'https://examine.com/supplements/chaga/',
    learnMoreSource: 'Examine.com – Chaga Mushroom Research Summary'
  },
  {
    id: 'beta-glucan',
    category: 'botanicals',
    categoryName: 'Adaptogene & Vitalpilze',
    name: 'Pilz-Beta-Glucane',
    subTitle: '1,3 / 1,6-Beta-D-Glucan Polysaccharide',
    unit: 'mg',
    refVal: 100,
    refText: '100 – 300 mg (Immunologischer Richtwert)',
    optimalRange: '100 – 400 mg',
    efsaUpperLimit: 'Kein toxisches oberes Limit',
    functions: [
      'Binden spezifisch an Dectin-1- und CR3-Rezeptoren auf Makrophagen, neutrophilen Granulozyten und natürlichen Killerzellen',
      'Versetzen das angeborene Immunsystem in einen Zustand erhöhter Wachsamkeit („Trained Immunity“)',
      'Unterstützen die physiologische Darmbarriere und wirken als präbiotisches Substrat für nützliche Darmbakterien'
    ],
    benefits: 'Pilz-Beta-Glucane sind das Training für die Immunzellen. Sie aktivieren die zelluläre Erstabwehr im Dünndarm (Peyer-Plaques), ohne das Immunsystem überzusteuern.',
    deficiencySigns: 'Wiederkehrende virale oder bakterielle Infekte, verlangsamte Immunreaktion.',
    intakeTips: 'In Chaga und Reishi natürlicherweise enthalten. Die synergistische Kombination verschiedener Pilz-Polysaccharide verstärkt die Rezeptorbindung.',
    scienceNotes: 'Die EFSA bestätigt spezifische immunologische und cholesterinregulierende Effekte verschiedener Beta-Glucan-Strukturen.',
    learnMoreUrl: 'https://www.efsa.europa.eu/en/efsajournal/pub/1885',
    learnMoreSource: 'EFSA Journal – Scientific Opinion on Beta-Glucans'
  }
];
