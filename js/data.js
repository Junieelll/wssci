export const svgs = {
  shoes: `<i class="fa-solid fa-shoe-prints text-3xl"></i>`,
  head: `<i class="fa-solid fa-hard-hat text-3xl"></i>`,
  eye: `<i class="fa-solid fa-glasses text-3xl"></i>`,
  gloves: `<i class="fa-solid fa-mitten text-3xl"></i>`,
  body: `<i class="fa-solid fa-user-shield text-3xl"></i>`,
  hearing: `<i class="fa-solid fa-headphones text-3xl"></i>`,
  welding: `<i class="fa-solid fa-mask text-3xl"></i>`,
  fall: `<i class="fa-solid fa-link text-3xl"></i>`,
  vest: `<i class="fa-solid fa-vest text-3xl"></i>`,
};

export const categories = [
  { id:'shoes', label:'Safety Shoes', icon:svgs.shoes, desc:'Slip-resistant, impact-proof industrial footwear equipped with advanced shock absorption and S3-rated protection.', color:'#27C291' },
  { id:'head', label:'Skull Protection', icon:svgs.head, desc:'High-density thermoplastic hard hats engineered to dissipate extreme kinetic energy from overhead impacts.', color:'#FFCC00' },
  { id:'eye', label:'Eye Protection', icon:svgs.eye, desc:'Anti-scratch, anti-fog polycarbonate eyewear and face shields providing panoramic visibility and UV resistance.', color:'#27C291' },
  {id:"vest", label:"Safety Vest", icon:svgs.vest, desc:"High-visibility vests with reflective strips for enhanced worker safety in low-light conditions.", color : "#FFCC00"},
  { id:'gloves', label:'Gloves', icon:svgs.gloves, desc:'Precision tactile gloves offering Level F cut resistance, robust chemical defense, and superior ergonomic dexterity.', color:'#27C291' },
  { id:'body', label:'Body Protection', icon:svgs.body, desc:'Microporous coveralls, thermal FR gear, and chemical suits certified to shield against hazardous particulate and splash.', color:'#1a9e76' },
  { id:'hearing', label:'Hearing Protection', icon:svgs.hearing, desc:'High-attenuation ear muffs and ergonomic earplugs designed to isolate and dampen sustained industrial decibel extremes.', color:'#27C291' },
  { id:'welding', label:'Welding', icon:svgs.welding, desc:'Auto-darkening active filters, split-leather aprons, and thermal barriers for optimal arc flash and spatter defense.', color:'#1a9e76' },
  { id:'fall', label:'Fall Protection', icon:svgs.fall, desc:'Multi-point full-body harnesses, energy-absorbing lanyards, and carabiners engineered for extreme vertical securement.', color:'#FFCC00' },
  
];

export const products = [

  // ── SAFETY SHOES — Safety Jogger (SJPH Exclusive) ──
  {
    id: 13,
    cat: 'shoes',
    name: 'MANILABOY S3',
    brand: 'Safety Jogger',
    tags: ['S3', 'SR', 'FO'],
    desc: 'SJPH Exclusive Item. Premium safety shoe featuring a Barton Action Leather upper and Recycled Mesh lining. Equipped with a robust Steel midsole and PU/PU outsole. Provides unparalleled protection with a Steel toecap and supreme comfort via the SJ Foam footbed. Rated S3 / SR, SC, LG, CI, FO.',
    features: ['Upper: Barton Action Leather', 'Lining: Recycled Mesh', 'Midsole: Steel', 'Outsole: PU/PU', 'Toecap: Steel', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022+A1:2024'],
    img: 'assets/products/shoes/manilaboy_s3.png'
  },
  {
    id: 14,
    cat: 'shoes',
    name: 'BESTBOY MF EH',
    brand: 'Safety Jogger',
    tags: ['SB', 'EH', 'WPA'],
    desc: 'SJPH Exclusive Item. Electrical hazard protection shoe with Barton Action Leather upper and Recycled Mesh lining. Features an Anti Puncture Textile midsole and BASF PU/BASF PU outsole for advanced shock absorption. Fitted with a Composite toecap. Rated SB / PS, SR, SC, WPA, LG, E, CI, FO.',
    features: ['Upper: Barton Action Leather', 'Lining: Recycled Mesh', 'Midsole: Anti Puncture Textile', 'Outsole: BASF PU/BASF PU', 'Toecap: Composite', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022+A1:2024'],
    img: 'assets/products/shoes/bestboy_mf_eh.png'
  },
  {
    id: 15,
    cat: 'shoes',
    name: 'MONTIS S3S',
    brand: 'Safety Jogger',
    tags: ['S3S', 'ESD', 'CI'],
    desc: 'SJPH Exclusive Item. Dark grey/silver safety shoe with Nubuck Action Leather upper and breathable Mesh lining. Anti Puncture Textile midsole and PU/PU outsole. Composite toecap. Rated S3S / SR, SC, LG, ESD, CI, FO.',
    features: ['Upper: Nubuck Action Leather', 'Lining: Mesh', 'Midsole: Anti Puncture Textile', 'Outsole: PU/PU', 'Toecap: Composite', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022'],
    img: 'assets/products/shoes/montis_s3s.png'
  },
  {
    id: 16,
    cat: 'shoes',
    name: 'SAFETYBOY 2',
    brand: 'Safety Jogger',
    tags: ['S1P', 'SR', 'FO'],
    desc: 'SJPH Exclusive Item. Mid-cut safety boot with Barton Action Leather upper and Mesh lining. Steel midsole and PU outsole. Steel toecap with SJ Eco footbed. Rated S1 P / SR, FO.',
    features: ['Upper: Barton Action Leather', 'Lining: Mesh', 'Midsole: Steel', 'Outsole: PU', 'Toecap: Steel', 'Footbed: SJ Eco', 'Norms: ASTM F2413:2018, EN ISO 20345:2022'],
    img: 'assets/products/shoes/safetyboy2.png'
  },
  {
    id: 17,
    cat: 'shoes',
    name: 'MODULO S1PS LOW PERF',
    brand: 'Safety Jogger',
    tags: ['S1PS', 'ESD', 'NANO CARBON'],
    desc: 'SJPH Exclusive Item. High-performance low-cut shoe with Microfiber upper, Mesh lining, and Anti Puncture Textile midsole. BASF PU/BASF PU outsole with ultra-light Nano Carbon toecap. Rated S1 PS / SR, SC, ESD, FO.',
    features: ['Upper: Microfiber', 'Lining: Mesh', 'Midsole: Anti Puncture Textile', 'Outsole: BASF PU/BASF PU', 'Toecap: Nano Carbon', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022+A1:2024'],
    img: 'assets/products/shoes/modulo_s1ps_low_perf.png'
  },
  {
    id: 18,
    cat: 'shoes',
    name: 'ECOCADOR S1P ESD',
    brand: 'Safety Jogger',
    tags: ['S1P', 'ESD', 'ECO'],
    desc: 'SJPH Exclusive Item. Eco-conscious safety shoe with Knitted Recycled Textile upper and Recycled Mesh lining. Steel midsole and PU/PU outsole. Steel toecap. Rated S1 P / SR, ESD, FO.',
    features: ['Upper: Knitted Recycled Textile', 'Lining: Recycled Mesh', 'Midsole: Steel', 'Outsole: PU/PU', 'Toecap: Steel', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022'],
    img: 'assets/products/shoes/ecocador_s1p_esd.png'
  },
  {
    id: 19,
    cat: 'shoes',
    name: 'ECOLOBI S1P LOW TLS',
    brand: 'Safety Jogger',
    tags: ['S3S', 'ESD', 'TLS'],
    desc: 'SJPH Exclusive Item. Low-cut shoe with TLS (Twist Lock System) closure. Nubuck Action Leather upper, Mesh lining, Anti Puncture Textile midsole, and Phylon/Rubber (NBR) outsole. Composite toecap. Rated S3S / SR, SC, LG, ESD, CI, FO.',
    features: ['Upper: Nubuck Action Leather', 'Lining: Mesh', 'Midsole: Anti Puncture Textile', 'Outsole: Phylon/Rubber (NBR)', 'Toecap: Composite', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022'],
    img: 'assets/products/shoes/ecolobi_s1p_low_tls.png'
  },
  {
    id: 20,
    cat: 'shoes',
    name: 'MANILARUN S3',
    brand: 'Safety Jogger',
    tags: ['S3', 'SR', 'FO'],
    desc: 'SJPH Exclusive Item. Low-cut runner safety shoe with Barton Action Leather upper and Recycled Mesh lining. Steel midsole and PU/PU outsole. Steel toecap with SJ Foam footbed. Rated S3 / SR, SC, LG, CI, FO.',
    features: ['Upper: Barton Action Leather', 'Lining: Recycled Mesh', 'Midsole: Steel', 'Outsole: PU/PU', 'Toecap: Steel', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022+A1:2024'],
    img: 'assets/products/shoes/manilarun_s3.png'
  },
  {
    id: 21,
    cat: 'shoes',
    name: 'BESTRUN MF EH',
    brand: 'Safety Jogger',
    tags: ['SB', 'EH', 'WPA'],
    desc: 'SJPH Exclusive Item. Electrical hazard low-cut shoe with Barton Action Leather upper and Recycled Mesh lining. Anti Puncture Textile midsole and BASF PU/BASF PU outsole. Composite toecap. Rated SB / PS, SR, SC, WPA, LG, E, CI, FO.',
    features: ['Upper: Barton Action Leather', 'Lining: Recycled Mesh', 'Midsole: Anti Puncture Textile', 'Outsole: BASF PU/BASF PU', 'Toecap: Composite', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022+A1:2024'],
    img: 'assets/products/shoes/bestrun_mf_eh.png'
  },
  {
    id: 22,
    cat: 'shoes',
    name: 'VALLIS S3S',
    brand: 'Safety Jogger',
    tags: ['S3S', 'ESD', 'CI'],
    desc: 'SJPH Exclusive Item. Low-profile shoe with Nubuck Action Leather upper and Mesh lining. Anti Puncture Textile midsole and PU/PU outsole. Composite toecap. Rated S3S / SR, SC, LG, ESD, CI, FO.',
    features: ['Upper: Nubuck Action Leather', 'Lining: Mesh', 'Midsole: Anti Puncture Textile', 'Outsole: PU/PU', 'Toecap: Composite', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022'],
    img: 'assets/products/shoes/vallis_s3s.png'
  },
  {
    id: 23,
    cat: 'shoes',
    name: 'SAFETYRUN 2',
    brand: 'Safety Jogger',
    tags: ['S1P', 'SR', 'FO'],
    desc: 'SJPH Exclusive Item. Agile low-cut runner with Barton Action Leather upper and Mesh lining. Steel midsole, PU outsole, and Steel toecap. Rated S1 P / SR, FO.',
    features: ['Upper: Barton Action Leather', 'Lining: Mesh', 'Midsole: Steel', 'Outsole: PU', 'Toecap: Steel', 'Footbed: SJ Eco', 'Norms: ASTM F2413:2018, EN ISO 20345:2022'],
    img: 'assets/products/shoes/safetyrun2.png'
  },
  // ── SAFETY SHOES — DeltaPlus ──
  {
    id: 100,
    cat: 'shoes',
    name: 'JUMPER3 S1P SRC',
    brand: 'DeltaPlus',
    tags: ['S1P', 'SRC', 'Split Leather'],
    desc: 'Pigmented split leather safety shoe with S1P SRC rating. Designed for general industrial and manufacturing environments requiring basic impact and slip resistance.',
    features: ['Pigmented split leather upper', 'S1P safety rating', 'SRC slip resistance', 'Steel toecap', 'Anti-perforation midsole', 'Energy-absorbing heel'],
    img: 'assets/products/shoes/jumper3_s1p_src.png'
  },
  {
    id: 101,
    cat: 'shoes',
    name: 'MIAMI S2 SRC',
    brand: 'DeltaPlus',
    tags: ['S2', 'SRC', 'Microfibre'],
    desc: 'White microfibre low-cut safety shoe with S2 SRC rating. Ideal for food industry, pharmaceuticals, and clean manufacturing environments.',
    features: ['Microfibre upper — easy to clean', 'S2 safety rating', 'SRC slip resistance', 'Steel toecap', 'Water-resistant properties', 'Lightweight design'],
    img: 'assets/products/shoes/miami_s2_src.png'
  },
  {
    id: 102,
    cat: 'shoes',
    name: 'SUMMER S1P SRC',
    brand: 'DeltaPlus',
    tags: ['S1P', 'SRC', 'Polyester/Cotton'],
    desc: 'Breathable polyester and cotton safety shoe with S1P SRC rating. Designed for warm environments where ventilation and comfort are essential without compromising protection.',
    features: ['Polyester and cotton upper', 'S1P safety rating', 'SRC slip resistance', 'Composite toecap', 'Anti-perforation midsole', 'Breathable mesh lining'],
    img: 'assets/products/shoes/summer_s1p_src.png'
  },
  {
    id: 103,
    cat: 'shoes',
    name: 'SIMBA S3 SRC',
    brand: 'DeltaPlus',
    tags: ['S3', 'SRC', 'Buffalo Leather'],
    desc: 'Pigmented split buffalo leather high-cut safety boot with S3 SRC rating. Built for heavy construction, mining, and outdoor industrial applications requiring maximum protection.',
    features: ['Pigmented split buffalo leather upper', 'S3 safety rating', 'SRC slip resistance', 'Steel toecap', 'Anti-perforation steel midsole', 'Water-resistant (WR) construction'],
    img: 'assets/products/shoes/simba_s3_src.png'
  },
  {
    id: 104,
    cat: 'shoes',
    name: 'ESKIMO SBHPS',
    brand: 'DeltaPlus',
    tags: ['Winter', 'SB', 'Fur Lined'],
    desc: 'Winter safety boots with fur lining. Provides warmth and protection in cold outdoor environments such as logistics, construction, and outdoor maintenance.',
    features: ['Warm fur inner lining', 'SB safety rating', 'Cold insulation protection', 'Slip-resistant outsole', 'High-cut ankle support', 'Waterproof outer construction'],
    img: 'assets/products/shoes/eskimo_sbhps.png'
  },
  {
    id: 105,
    cat: 'shoes',
    name: 'TW402 S3 SRC',
    brand: 'DeltaPlus',
    tags: ['S3', 'SRC', 'Full Grain Leather'],
    desc: 'Full grain leather high-cut safety boot with S3 SRC rating. Premium construction for demanding construction and industrial environments requiring durability and all-day comfort.',
    features: ['Full grain leather upper', 'S3 safety rating', 'SRC slip resistance', 'Steel toecap', 'Anti-perforation midsole', 'Shock-absorbing heel cushion'],
    img: 'assets/products/shoes/tw402_s3_src.png'
  },
  {
    id: 106,
    cat: 'shoes',
    name: 'AMAZONE S5 SRA',
    brand: 'DeltaPlus',
    tags: ['S5', 'SRA', 'PVC/Nitrile'],
    desc: 'Full PVC/nitrile outsole safety rubber boot with S5 SRA rating. Designed for wet, muddy, and chemically challenging environments such as agriculture, food processing, and outdoor construction.',
    features: ['PVC/nitrile outsole construction', 'S5 safety rating', 'SRA slip resistance', 'Steel toecap', 'Chemical and oil resistant', 'Full waterproof protection'],
    img: 'assets/products/shoes/amazone_s5_sra.png'
  },
  {
    id: 107,
    cat: 'shoes',
    name: 'COMO S1P SRC',
    brand: 'DeltaPlus',
    tags: ['S1P', 'SRC', 'Suede/Mesh'],
    desc: 'Low-cut safety shoe combining suede and mesh polyester upper with S1P SRC rating. Sporty, lightweight design suitable for logistics, automotive, and light manufacturing.',
    features: ['Suede and mesh polyester upper', 'S1P safety rating', 'SRC slip resistance', 'Composite toecap', 'Anti-perforation midsole', 'Breathable and lightweight'],
    img: 'assets/products/shoes/como_s1p_src.png'
  },

  // ── SKULL PROTECTION (DeltaPlus) ──
  {
    id: 200,
    cat: 'head',
    name: 'AIR COLTAN',
    brand: 'DeltaPlus',
    tags: ['Bump Cap', 'Ventilated', 'Polyester'],
    desc: 'Ventilated bump cap in polyester. Designed for environments with low overhead hazards where a full safety helmet is impractical. Offers lightweight head protection with maximum comfort.',
    features: ['Ventilated polyester shell', 'Bump cap for low-risk environments', 'Lightweight and breathable', 'Baseball cap style', 'Washable fabric cover', 'Internal ABS protective insert'],
    img: 'assets/products/head/air_coltan.png'
  },
  {
    id: 201,
    cat: 'head',
    name: 'DIAMOND V',
    brand: 'DeltaPlus',
    tags: ['ABS', 'EN397', 'Baseball Cap Style'],
    desc: 'ABS safety helmet with "baseball cap" shape. Combines the familiar profile of a baseball cap with certified industrial head protection. Ideal for construction, public works, and maintenance.',
    features: ['ABS thermoplastic shell', '"Baseball cap" silhouette', 'EN 397 certified', 'Adjustable internal harness', 'Lightweight construction', 'Available in multiple colors'],
    img: 'assets/products/head/diamond_v.png'
  },
  {
    id: 202,
    cat: 'head',
    name: 'ZIRCON 1',
    brand: 'DeltaPlus',
    tags: ['Polyethylene', 'EN397', 'Classic'],
    desc: 'Polyethylene safety helmet providing reliable impact protection for standard industrial environments. Classic design with adjustable ratchet suspension for a secure, comfortable fit.',
    features: ['High-density polyethylene (HDPE) shell', 'EN 397 certified', 'Ratchet adjustment system', 'Six-point textile suspension', 'Integrated sweatband', 'Brim for sun and rain deflection'],
    img: 'assets/products/head/zircon1.png'
  },
  {
    id: 203,
    cat: 'head',
    name: 'GRANITE WIND',
    brand: 'DeltaPlus',
    tags: ['ABS', 'Ventilated', 'Mountain Style'],
    desc: 'Ventilated ABS safety helmet in mountain helmet style. Designed for forestry, rope access, and outdoor industrial work requiring certified head protection with enhanced ventilation and chin strap.',
    features: ['ABS shell — mountain helmet profile', 'Large ventilation ports', 'Four-point chin strap', 'Compatible with hearing and eye protection accessories', 'Ratchet adjustment system', 'EN 397 certified'],
    img: 'assets/products/head/granite_wind.png'
  },
  {
    id: 204,
    cat: 'head',
    name: 'FORESTIER 3',
    brand: 'DeltaPlus',
    tags: ['Forestry', 'Integrated Visor', 'Zircon Based'],
    desc: 'Foresters type safety helmet consisting of Zircon safety helmet. Features an integrated mesh face shield and ear defender attachment points for full head and face protection in forestry operations.',
    features: ['Based on Zircon polyethylene shell', 'Integrated mesh face visor', 'Ear defender attachment slots', 'EN 397 certified', 'Adjustable harness system', 'Designed for chainsaw and forestry work'],
    img: 'assets/products/head/forestier_3.png'
  },
  {
    id: 205,
    cat: 'head',
    name: 'ONYX2 BLANC',
    brand: 'DeltaPlus',
    tags: ['ABS', 'Retractable Visor', 'Dual Shell'],
    desc: 'Dual-shell ABS safety helmet with retractable visor. The integrated polycarbonate visor retracts when not needed, providing versatile protection on construction and industrial sites.',
    features: ['Dual ABS shell construction', 'Retractable polycarbonate visor', 'EN 397 and EN 166 certified', 'Ratchet adjustment harness', 'Ventilation system'],
    img: 'assets/products/head/onyx2_blanc.png'
  },
  {
    id: 206,
    cat: 'head',
    name: 'WINTER CAP',
    brand: 'DeltaPlus',
    tags: ['Polyester Lining', 'Cold Protection', 'Helmet Liner'],
    desc: 'Polyester lining for safety helmets. Provides thermal insulation inside the helmet during cold weather operations without compromising the helmet\'s protective performance.',
    features: ['Polyester fleece material', 'Fits inside standard safety helmets', 'Ear coverage panels', 'Thermal insulation for cold environments', 'Washable construction', 'Universal fit design'],
    img: 'assets/products/head/winter_cap.png'
  },
  {
    id: 207,
    cat: 'head',
    name: 'QUARTZ I',
    brand: 'DeltaPlus',
    tags: ['Polypropylene', 'EN397', 'Lightweight'],
    desc: 'Polypropylene safety helmet offering lightweight certified head protection for general industrial, construction, and maintenance applications.',
    features: ['Polypropylene thermoplastic shell', 'EN 397 certified', 'Lightweight design for all-day comfort', 'Adjustable textile suspension', 'Integrated sweatband', 'Available in multiple colors including blue'],
    img: 'assets/products/head/quartz_i.png'
  },

  // ── EYE PROTECTION (DeltaPlus) ──
  {
    id: 300,
    cat: 'eye',
    name: 'BRAVA2 CLEAR',
    brand: 'DeltaPlus',
    tags: ['AS', 'UV400', 'EN166'],
    desc: 'Polycarbonate safety glasses with AS (anti-scratch) coating and UV400 filter. Classic clear lens design with adjustable nylon temples for a secure, comfortable fit in general industrial tasks.',
    features: ['Polycarbonate single lens', 'Anti-scratch (AS) coating', 'UV400 protection', 'Length-adjustable temple arms', 'Integrated side shielding', 'EN 166 certified'],
    img: 'assets/products/eye/brava2_clear.png'
  },
  {
    id: 301,
    cat: 'eye',
    name: 'ASO2 CLEAR',
    brand: 'DeltaPlus',
    tags: ['AB', 'AR', 'Polycarbonate'],
    desc: 'Polycarbonate safety glasses with AB (anti-scratch) and AR (anti-reflection) coatings. Sporty wraparound design with soft flexible TPE nose piece and panoramic lens for maximum field of vision.',
    features: ['Polycarbonate panoramic lens', 'Anti-scratch (AB) coating', 'Anti-reflection (AR) coating', 'Soft flexible TPE nose piece', 'Curved wraparound design', 'EN 166 certified'],
    img: 'assets/products/eye/aso2_clear.png'
  },
  {
    id: 302,
    cat: 'eye',
    name: 'KILIMANDJARO CLEAR',
    brand: 'DeltaPlus',
    tags: ['AS', 'UV400', 'Wrap-Around'],
    desc: 'Polycarbonate safety glasses with AS (anti-scratch) coating and UV400 filter. Classic wrap-around design providing comprehensive frontal and lateral protection. Featherweight frame (~25g).',
    features: ['Polycarbonate lens with AS coating', 'UV400 total protection', 'Wrap-around lateral shielding', 'Lightweight frame (~25g)', 'Adjustable tilt temples', 'EN 166 certified'],
    img: 'assets/products/eye/kilimandjaro_clear.png'
  },
  {
    id: 303,
    cat: 'eye',
    name: 'VULCANO2 CLEAR',
    brand: 'DeltaPlus',
    tags: ['AM', 'AS', 'UV400'],
    desc: 'Polycarbonate safety glasses with AM (anti-scratch), AS coatings, and UV400 protection. Multi-length adjustable temples and tiltable lens for a fully customized secure fit.',
    features: ['Polycarbonate lens', 'AM and AS dual coatings', 'UV400 filter', 'Multi-length temple adjustment', 'Tilt-adjustable lens', 'EN 166 certified'],
    img: 'assets/products/eye/vulcano2_clear.png'
  },
  {
    id: 304,
    cat: 'eye',
    name: 'GALERAS CLEAR',
    brand: 'DeltaPlus',
    tags: ['PVC Goggles', 'Chemical Splash', 'Indirect Ventilation'],
    desc: 'PVC safety goggles with polycarbonate lenses and indirect ventilation. Protects against liquid splashes, dust, and large particles. Soft PVC frame provides a comfortable face seal.',
    features: ['Soft PVC frame for face conformity', 'Polycarbonate high-impact lens', 'Indirect ventilation ports', 'Wide elasticated headband', 'Protects against chemical splash and dust', 'EN 166 certified'],
    img: 'assets/products/eye/galeras_clear.png'
  },
  {
    id: 305,
    cat: 'eye',
    name: 'FUJI2 GRADIENT',
    brand: 'DeltaPlus',
    tags: ['AS', 'UV400', 'Gradient Tint'],
    desc: 'Polycarbonate safety glasses with AS coating and gradient lens tint. Suitable for transitioning between indoor and outdoor environments with integrated ventilation bridge.',
    features: ['Polycarbonate gradient lens', 'Anti-scratch (AS) coating', 'UV400 filter', 'Integrated ventilation bridge', 'Soft flat-profile temples', 'EN 166 certified'],
    img: 'assets/products/eye/fuji2_gradient.png'
  },
  {
    id: 306,
    cat: 'eye',
    name: 'HEKLA2',
    brand: 'DeltaPlus',
    tags: ['Rimless', 'Ultralight', 'Over-Glasses'],
    desc: 'Rimless safety glasses (surlunettes HEKLA2) for an unobstructed field of vision. Can be worn over prescription eyeglasses. Ultralight design eliminates pressure points on nose and temples.',
    features: ['Minimalist rimless construction', 'Can be worn over corrective glasses', 'Wide peripheral field of view', 'Featherweight ~22g chassis', 'Anti-slip comfort tips', 'EN 166 certified'],
    img: 'assets/products/eye/hekla2.png'
  },
  {
    id: 307,
    cat: 'eye',
    name: 'IRAYA SMOKE',
    brand: 'DeltaPlus',
    tags: ['Smoke Tint', 'UV400', 'Matt Finish'],
    desc: 'Polycarbonate frame safety glasses with smoke tint lens and matt finish. Optimized for outdoor use in bright sunlight, providing glare reduction and UV400 protection.',
    features: ['Polycarbonate smoke tint lens', 'Matt finish frame', 'UV400 sun protection', 'High-comfort TPE nose bridge', 'Aerodynamic temple design', 'EN 166 certified'],
    img: 'assets/products/eye/iraya_smoke.png'
  },
  {
    id: 308,
    cat: 'eye',
    name: 'TOBA 3 T5',
    brand: 'DeltaPlus',
    tags: ['Shade 5', 'Flip-Up', 'Welding Goggles'],
    desc: 'Flip-up welder\'s goggles with shade 5 filter lenses. The lift-up front design allows the user to inspect work without removing the goggles. Suitable for gas welding and brazing.',
    features: ['Shade 5 dark filter lenses', 'Flip-up lift-front for visual checks', 'Indirect ventilation system', 'Soft face-forming seal', 'Adjustable elasticated headband', 'EN 166 / EN 175 certified'],
    img: 'assets/products/eye/toba_3_t5.png'
  },

  // ── GLOVES (DeltaPlus) ──
  {
    id: 400,
    cat: 'gloves',
    name: 'VENICUT41GN',
    brand: 'DeltaPlus',
    tags: ['Cut Resistant', 'Nitrile Coated', 'Gauge 15'],
    desc: 'SOFTnocut knitted glove with nitrile-coating palm and reinforcement, gauge 15. SOFTnocut fiber provides excellent cut resistance with lightweight dexterity for oily and greasy environments.',
    benefits: [
      { icon: 'fa-hands-bubbles', label: 'Hygiene', desc: 'Reduces perspiration thanks to its excellent breathability. Nitrile means no risk of allergies for users' },
      { icon: 'fa-chart-line', label: 'Performance', desc: 'Lightweight for optimal dexterity. Nitrile coating gives excellent grip in oily/greasy environments. SOFTnocut fiber provides excellent cut resistance' }
    ],
    certifications: [
      { name: 'EN 388', details: 'Mechanical Risks Protection' },
      { name: 'ANSI/ISEA 105-2024', details: 'Hand Protection Standard' }
    ],
    features: ['SOFTnocut fiber for cut resistance', 'Nitrile foam-coated palm for grip', 'Gauge 15 knitted construction', 'Long cuff (100mm) for wrist protection', 'Available in sizes 7-11', 'Suitable for construction, automotive, and mining'],
    img: 'assets/products/gloves/venicut41gn.png'
  },
  {
    id: 401,
    cat: 'gloves',
    name: 'DUOCOLOR VE330',
    brand: 'DeltaPlus',
    tags: ['Latex', 'Household', 'Flocked Dipped'],
    desc: 'Tight, powder-free latex glove with a double-coated, grip-textured finish and internal flocking for superior comfort. This 300mm forearm-length, dual-color glove features a 0.60mm thickness, providing robust yet flexible protection for cleaning, food handling, and industrial tasks.',
    benefits: [
      { icon: 'fa-shield-halved', label: 'Durability', desc: 'High-quality coating extends the life of the glove and provides excellent protection for the hand' },
      { icon: 'fa-chart-line', label: 'Performance', desc: 'Lightweight for optimal dexterity' }
    ],
    certifications: [
      { name: 'EN 388', details: '1 0 1 0 X' },
      { name: 'EN ISO 374-1', details: 'Type A AKLMNPT' },
      { name: 'EN ISO 374-5', details: 'Micro-organisms Protection' },
      { name: 'Food Contact', details: 'Suitable for food handling' }
    ],
    features: ['Double-coated natural latex construction', 'Grip-textured pattern for superior grip', 'Inner flocked finish for comfort', '0.60mm thickness and 300mm length', 'Blue-Yellow dual-color design', 'Powder-free unsupported design'],
    img: 'assets/products/gloves/duocolor_ve330.png'
  },
  {
    id: 402,
    cat: 'gloves',
    name: 'VENICUTB03',
    brand: 'DeltaPlus',
    tags: ['Cut Resistant', 'Nitrile Coated', 'Gauge 13'],
    desc: 'Knitted ECONOCUT® glove with nitrile coated palm, gauge 13 — x3 pairs pack. Budget-friendly cut-resistant glove for general industrial handling and construction work.',
    certifications: [
      { name: 'EN 388', details: 'Mechanical Risks Protection' }
    ],
    features: ['ECONOCUT® fiber for cut protection', 'Nitrile-coated palm for grip', 'Gauge 13 knitted construction', 'Sold in packs of 3 pairs', 'Lightweight and breathable', 'Suitable for light industry and maintenance'],
    img: 'assets/products/gloves/venicutb03.png'
  },
  {
    id: 403,
    cat: 'gloves',
    name: 'CA615K',
    brand: 'DeltaPlus',
    tags: ['Cowhide Leather', 'Kevlar® Sewn', 'Welder\'s Glove'],
    desc: 'Cowhide split leather welder\'s glove with Kevlar® sewn seams. Premium split leather construction for welding, grinding, and high-heat industrial applications with extended gauntlet cuff.',
    certifications: [
      { name: 'EN 388', details: 'Mechanical Risks Protection' },
      { name: 'EN 407', details: 'Thermal Risks Protection' }
    ],
    features: ['Premium cowhide split leather', 'Kevlar® sewn seams for durability', 'Heat-resistant construction', 'Extended gauntlet cuff', 'Full leather palm and back protection', 'Suitable for welding, grinding, and foundry work'],
    img: 'assets/products/gloves/ca615k.png'
  },
  {
    id: 404,
    cat: 'gloves',
    name: 'TERK400',
    brand: 'DeltaPlus',
    tags: ['Kevlar® Preox', 'Extreme Heat', 'Welder\'s Glove'],
    desc: 'High-performance cow split leather welding glove featuring an aluminised back and a 200mm aluminised cuff for maximum radiant heat protection. Designed for heavy-duty welding, this 400mm long glove is reinforced with para-aramid stitching and a heat-resistant aramid-polyester lining, providing superior elbow-level coverage for extreme industrial environments.',
    benefits: [
      { icon: 'fa-fire-flame-curved', label: 'Radiant Heat Shield', desc: 'Aluminised back and cuff reflect extreme radiant heat for maximum protection during welding' },
      { icon: 'fa-shield-halved', label: 'High Durability', desc: 'Premium split leather construction with para-aramid stitching ensures long-lasting mechanical resistance' }
    ],
    certifications: [
      { name: 'EN 388', details: '3 2 3 4 X' },
      { name: 'EN 407', details: '4 1 2 4 4 4' },
      { name: 'EN 12477', details: 'Type A Welder Protective' }
    ],
    features: ['Premium cow split leather construction', 'Aluminised back for radiant heat reflection', 'Heat-resistant aramid-polyester lining', 'Para-aramid stitching for enhanced durability', '400mm total length with 200mm aluminised cuff', 'Elbow-level arm protection'],
    img: 'assets/products/gloves/terk400.png'
  },
  {
    id: 405,
    cat: 'gloves',
    name: 'TER300',
    brand: 'DeltaPlus',
    tags: ['Heat Resistant', '40cm', 'Cowhide'],
    desc: 'Heat-resistant cowhide welder\'s glove, 40cm length. Provides thermal protection and abrasion resistance for welding, handling hot materials, and furnace operations.',
    certifications: [
      { name: 'EN 407', details: 'Thermal Risks Protection' },
      { name: 'EN 388', details: 'Mechanical Risks Protection' }
    ],
    features: ['Cowhide leather construction', '40cm length for forearm coverage', 'Thermal protection rating', 'Abrasion and tear resistant', 'Extended gauntlet cuff design', 'Suitable for welding and hot material handling'],
    img: 'assets/products/gloves/ter300.png'
  },
  {
    id: 406,
    cat: 'gloves',
    name: 'NITREX VE801',
    brand: 'DeltaPlus',
    tags: ['Nitrile', 'Chemical Resistant', '33cm'],
    desc: 'Cotton flock nitrile glove, 33cm length. Heavy-duty chemical-resistant glove with cotton flock lining for comfort during extended use in chemical handling and industrial cleaning.',
    certifications: [
      { name: 'EN 388', details: 'Mechanical Risks Protection' },
      { name: 'EN 374', details: 'Chemical Protection' }
    ],
    features: ['Full nitrile construction', 'Cotton flock lining for comfort', '33cm length for forearm protection', 'Chemical and solvent resistant', 'Textured grip surface', 'Suitable for chemical industry and cleaning'],
    img: 'assets/products/gloves/nitrex_ve801.png'
  },
  {
    id: 407,
    cat: 'gloves',
    name: 'PETRO VE766',
    brand: 'DeltaPlus',
    tags: ['Double PVC/Nitrile', 'Chemical', 'Acrylic Lining'],
    desc: 'Double PVC/nitrile coating on acrylic lining glove, gauge 10. Extended-length chemical protection glove for petrochemical, oil & gas, and heavy chemical handling applications.',
    certifications: [
      { name: 'EN 388', details: 'Mechanical Risks Protection' },
      { name: 'EN 374', details: 'Chemical Protection' }
    ],
    features: ['Double PVC/nitrile coating', 'Acrylic lining — gauge 10', 'Chemical and oil resistant', 'Textured finish for grip in wet conditions', 'Suitable for petrochemical and oil & gas', 'Resistant to acids, alkalis, and solvents'],
    img: 'assets/products/gloves/petro_ve766.png'
  },
  {
    id: 408,
    cat: 'gloves',
    name: 'VE702GR',
    brand: 'DeltaPlus',
    tags: ['Polyamide', 'PU Coating', 'Precision'],
    desc: 'Knitted polyamide glove with PU coating on palm. Excellent tactile sensitivity and dexterity for precision assembly, electronics, and light manufacturing tasks.',
    features: ['Knitted polyamide shell', 'PU coating on palm for grip', 'Excellent tactile sensitivity', 'Lightweight and breathable construction', 'Seamless knit design', 'Suitable for precision assembly and electronics'],
    img: 'assets/products/gloves/ve702gr.png'
  },
  {
    id: 409,
    cat: 'gloves',
    name: 'VE730',
    brand: 'DeltaPlus',
    tags: ['Polyester', 'Latex Coating', 'General Purpose'],
    desc: 'Polyester glove with latex coating. Versatile general-purpose work glove offering good grip and abrasion resistance for construction, gardening, and general handling tasks.',
    features: ['Polyester knitted shell', 'Latex palm coating for grip', 'Good abrasion resistance', 'Breathable back of hand', 'Comfortable snug fit', 'General purpose industrial and construction use'],
    img: 'assets/products/gloves/ve730.png'
  },

  // ── BODY PROTECTION (DeltaPlus) ──
  {
    id: 500,
    cat: 'body',
    name: 'EN400LV',
    brand: 'DeltaPlus',
    tags: ['Rain Suit', 'PVC Coated', 'Hi-Vis'],
    desc: 'PVC coated polyester high visibility rain suit. Full-body waterproof protection with high-visibility fluorescent fabric and reflective bands for workers in foul weather and low-light conditions.',
    features: ['Polyester with PVC coating', 'High-visibility fluorescent yellow fabric', 'Reflective bands on jacket and trousers', 'Sealed seams for leak prevention', 'Zip fastening with storm flap', 'Jacket and trousers set'],
    img: 'assets/products/body/en400lv.png'
  },
  {
    id: 501,
    cat: 'body',
    name: 'EASYVIEW',
    brand: 'DeltaPlus',
    tags: ['Hi-Vis', 'PU Coated', 'Oxford Polyester Parka'],
    desc: 'HV PU coated Oxford polyester high-visibility parka. Class 3 certified for outdoor workers requiring waterproof protection combined with high-visibility reflective strips.',
    features: ['HV PU-coated Oxford polyester construction', 'Class 3 EN ISO 20471 high-visibility', 'Retro-reflective tape strips', 'Waterproof seams', 'Multiple pockets for tool storage', 'Concealed fixed hood with drawstring'],
    img: 'assets/products/body/easyview.png'
  },
  {
    id: 502,
    cat: 'body',
    name: 'MA400',
    brand: 'DeltaPlus',
    tags: ['Raincoat', 'PVC Coated', 'Long Style'],
    desc: 'PVC coated polyester rain coat in long style. Extended coverage and waterproof defense. Lightweight and flexible for comfort during active industrial duties in wet conditions.',
    features: ['PVC-coated polyester material', 'Full-length rain protection', 'Integrated hood design', 'Ventilated back flap', 'Elasticated inner cuffs', 'Sealed waterproof seams'],
    img: 'assets/products/body/ma400.png'
  },
  {
    id: 503,
    cat: 'body',
    name: 'PALIGHVCO',
    brand: 'DeltaPlus',
    tags: ['100% Cotton', 'Hi-Vis', 'Overall'],
    desc: 'Overall with reflector in 100% cotton, 200 g/m². High visibility blue or orange. Features retro-reflective bands for superior visual presence in daylight and night conditions.',
    features: ['100% cotton 200 g/m² fabric', 'EN ISO 20471 high-visibility', 'Reflective bands on arms and legs', 'Multiple tool-staging pockets', 'Reinforced stitching', 'Available in blue or orange'],
    img: 'assets/products/body/palighvco.png'
  },
  {
    id: 504,
    cat: 'body',
    name: 'M5VE3',
    brand: 'DeltaPlus',
    tags: ['60% Cotton', '40% Polyester', '270g/m²'],
    desc: 'MACH SPIRIT working jacket in 60% cotton / 40% polyester blend, 270 g/m². Professional workwear jacket designed for durability and skin-friendly comfort across industrial, automotive, and maintenance environments.',
    features: ['60% cotton / 40% polyester blend', '270 g/m² canvas fabric weight', 'Reinforced elbows and shoulders', 'Multiple functional pockets', 'Adjustable cuffs', 'Suitable for automotive, maintenance, and manufacturing'],
    img: 'assets/products/body/m5ve3.png'
  },
  {
    id: 505,
    cat: 'body',
    name: 'DT117',
    brand: 'DeltaPlus',
    tags: ['Type 5B/6B', 'Disposable', 'Anti-Static'],
    desc: 'DELTATEK 5000 disposable overalls with hood. Type 5B/6B, anti-static, dry particle resistant chemical protective coveralls. Silicone free and latex free.',
    benefits: [
      { icon: 'fa-shield-halved', label: 'Chemical Protection', desc: 'Type 5B/6B rated protection against dry particles and limited liquid splash' },
      { icon: 'fa-bolt', label: 'Anti-Static', desc: 'EN 1149-5 certified anti-static properties for hazardous environments' }
    ],
    certifications: [
      { name: 'EN ISO 13982-1', details: 'Type 5 Dry Particle Protection' },
      { name: 'EN 13034', details: 'Type 6 Limited Liquid Splash' },
      { name: 'EN 14126', details: 'Biological Hazards Protection' },
      { name: 'EN 1149-5', details: 'Anti-Static Properties' },
      { name: 'EN 1073-2', details: 'Radioactive Contamination' }
    ],
    features: ['Fixed hood with elasticated face opening', 'Double zipper with flap and hook & loop closure', 'Waterproof zipper construction', 'Ribbed cuffs for secure fit', '63 g/m² — lightweight and breathable', 'Silicone free and latex free'],
    img: 'assets/products/body/dt117.png'
  },
  {
    id: 506,
    cat: 'body',
    name: 'DT300 DELTACHEM',
    brand: 'DeltaPlus',
    tags: ['Type 3B/4B', 'Chemical', 'Taped Seams'],
    desc: 'DELTACHEM disposable overalls with hood. Type 3B/4B, anti-static, waterproof, chemical protective coveralls with taped seams. Silicone free, latex free, with total waterproofing.',
    benefits: [
      { icon: 'fa-droplet', label: 'Waterproof', desc: 'Type 3B rated total waterproofing with taped seams for maximum liquid protection' },
      { icon: 'fa-bolt', label: 'Anti-Static', desc: 'EN 1149-5 certified anti-static for explosive atmosphere environments' }
    ],
    certifications: [
      { name: 'EN 14605', details: 'Type 3B/4B Liquid Tight' },
      { name: 'EN ISO 13982-1', details: 'Type 5 Dry Particle Protection' },
      { name: 'EN 13034', details: 'Type 6 Limited Splash' },
      { name: 'EN 14126', details: 'Biological Hazards' },
      { name: 'EN 1149-5', details: 'Anti-Static Properties' },
      { name: 'EN ISO 13688', details: 'General Requirements' }
    ],
    features: ['Taped seams for waterproof integrity', 'Fixed hood with zipper, double flap, and hook & loop', 'Double elastane thumb inner wrist', '82 g/m² total weight', 'Silicone free, latex free, total waterproofing', 'Suitable for chemical industry, mining, and petrochemical sectors'],
    img: 'assets/products/body/dt300_deltachem.png'
  },
  {
    id: 507,
    cat: 'body',
    name: 'TABALPV',
    brand: 'DeltaPlus',
    tags: ['100% PVC', 'Apron', 'Waterproof'],
    desc: '100% PVC apron for chemical and liquid splash protection. Designed for food industry, chemical processing, and cleaning applications where upper body protection from splashes is required.',
    features: ['Heavy-duty 100% PVC construction', 'Adjustable neck and waist ties', 'Easy-clean wipeable surface', 'Resistance to grease, oils, and mild chemicals', 'Standard length for torso and leg protection', 'Suitable for food industry and chemical processing'],
    img: 'assets/products/body/tabalpv.png'
  },

  // ── HEARING PROTECTION (DeltaPlus) ──
  {
    id: 600,
    cat: 'hearing',
    name: 'INTERLAGOS LIGHT',
    brand: 'DeltaPlus',
    tags: ['NRR 26dB', 'Lightweight', 'Tiltable'],
    desc: 'Ear defenders with ABS and synthetic foam cups. Lightweight tiltable headband design for prolonged use in moderate noise environments including public works, light industry, maintenance, and automotive sectors.',
    benefits: [
      { icon: 'fa-recycle', label: 'Sustainability', desc: 'Replacement cushions available to extend life of the product' },
      { icon: 'fa-hands-bubbles', label: 'Hygiene', desc: 'Washable reusable for weeks without losing attenuation' }
    ],
    certifications: [
      { name: 'CE', details: 'European Conformity' },
      { name: 'EN 352-1', details: 'Ear Muffs Standard' },
      { name: 'ANSI S3.19', details: 'NRR 26 dB' },
      { name: 'UL-AR EN352-1', details: 'Underwriters Laboratories Certified' }
    ],
    features: ['Lightweight tiltable headband', 'NRR 26dB noise reduction rating', 'ABS cup construction with synthetic foam cushions', 'Replacement cushions available', 'Compliant with EN 352-1, ANSI S3.19 & UL-AR EN352-1'],
    img: 'assets/products/hearing/interlagos_light.png'
  },
  {
    id: 601,
    cat: 'hearing',
    name: 'MAGNY HELMET 2',
    brand: 'DeltaPlus',
    tags: ['SNR 30dB', 'Helmet Mounted', 'Quartz'],
    desc: 'Ear defenders suitable for safety helmet Quartz. Mounts directly onto the Quartz helmet series, providing SNR 30dB protection without a separate headband for construction and industrial use.',
    benefits: [
      { icon: 'fa-cloud', label: 'Comfort', desc: 'Double headband for greater flexibility and comfort' },
      { icon: 'fa-chart-line', label: 'Performance', desc: 'High-performance multi-hull attenuation technology' },
      { icon: 'fa-hands-bubbles', label: 'Hygiene', desc: 'Washable reusable for weeks without losing attenuation' }
    ],
    certifications: [
      { name: 'CE', details: 'European Conformity' },
      { name: 'EN 352-3', details: 'SNR 30 dB · Helmet Mounted Ear Muffs' },
      { name: 'ANSI S3.19', details: 'Hearing Protection Standard' }
    ],
    features: ['Designed for Quartz safety helmet series', 'SNR 30dB sound attenuation', 'Double headband for flexibility', 'High-performance multi-hull attenuation', 'Washable and reusable cushions', 'Compliant with EN 352-3 & ANSI S3.19'],
    img: 'assets/products/hearing/magny_helmet_2.png'
  },
  {
    id: 602,
    cat: 'hearing',
    name: 'INTERLAGOS FOLDABLE',
    brand: 'DeltaPlus',
    tags: ['SNR 30dB', 'Foldable', 'ABS'],
    desc: 'Foldable ear defender with double plastic headband. Folds for compact storage. Ideal for public works, building, light industry, maintenance, automotive, and petrochemical sectors.',
    benefits: [
      { icon: 'fa-compress', label: 'Compact', desc: 'Foldable headband for less space and easier storage' },
      { icon: 'fa-recycle', label: 'Sustainability', desc: 'Replacement cushions available to extend life of the product' },
      { icon: 'fa-hands-bubbles', label: 'Hygiene', desc: 'Replaceable cushions — perfect hygiene kit solution' }
    ],
    certifications: [
      { name: 'CE', details: 'European Conformity' },
      { name: 'EN 352-1', details: 'SNR 30 dB · Ear Muffs Standard' },
      { name: 'ANSI S3.19', details: 'NRR 25 dB' }
    ],
    features: ['Foldable headband for compact storage', 'SNR 30dB noise attenuation', 'ABS cup construction', 'Soft PU foam cushion pads', 'Double plastic (POM) adjustable headband', 'Replaceable hygiene kit cushions', 'Compliant with EN 352-1 & ANSI S3.19'],
    img: 'assets/products/hearing/interlagos_foldable.png'
  },
  {
    id: 603,
    cat: 'hearing',
    name: 'SUZUKA 2',
    brand: 'DeltaPlus',
    tags: ['NRR 21dB', 'Helmet Mounted', 'Hi-Vis'],
    desc: 'Ear defenders suitable for safety helmet Quartz. Available in black and fluorescent yellow. Suitable for agriculture, public works, building, mining, petrochemical, forestry, and power energy sectors.',
    certifications: [
      { name: 'CE', details: 'European Conformity' },
      { name: 'EN 352-3', details: 'Helmet Mounted Ear Muffs' },
      { name: 'ANSI S3.19', details: 'NRR 21 dB' }
    ],
    features: ['Designed for Quartz safety helmet family', 'NRR 21dB noise reduction', 'Available in black and fluorescent yellow', 'Suitable for agriculture, mining, forestry, and construction', 'Compliant with EN 352-3 & ANSI S3.19'],
    img: 'assets/products/hearing/suzuka_2.png'
  },
  {
    id: 604,
    cat: 'hearing',
    name: 'CONICFIR050',
    brand: 'DeltaPlus',
    tags: ['SNR 34dB', 'Corded', 'Thermoplastic'],
    desc: 'Thermoplastic reusable earplugs with cord, box of 50 pairs. Built-in firm handle for correct insertion. For daily industrial use in manufacturing, food services, automotive, transportation, and storage sectors.',
    benefits: [
      { icon: 'fa-hand-pointer', label: 'Easy to Use', desc: 'Built-in firm handle directs insertion angle for better fit' },
      { icon: 'fa-cloud', label: 'Comfort', desc: 'Contoured 3 flange polymer design provides all-day comfort' },
      { icon: 'fa-chart-line', label: 'Performance', desc: 'Ultra-soft polymer for superior SNR 34dB attenuation' },
      { icon: 'fa-hands-bubbles', label: 'Hygiene', desc: 'Firm handle allows hygienic insertion without touching the plug body' }
    ],
    certifications: [
      { name: 'CE', details: 'European Conformity' },
      { name: 'EN 352-2', details: 'SNR 34 dB · H 33 · M 32 · L 31 · ø 8-12 mm' },
      { name: 'ANSI S3.19', details: 'NRR 26 dB' }
    ],
    features: ['Thermoplastic with built-in firm handle', 'SNR 34dB attenuation', 'Contoured 3 flange polymer design', 'PVC cord to prevent loss', 'Box of 50 pairs', 'Compliant with EN 352-2 & ANSI S3.19'],
    img: 'assets/products/hearing/conicfir050.png'
  },
  {
    id: 605,
    cat: 'hearing',
    name: 'SPA 3',
    brand: 'DeltaPlus',
    tags: ['SNR 23dB', 'Low Pressure', 'Ergonomic'],
    desc: 'Ear defenders with low pressure pads. Minimal clamping force design for all-day comfort. Suitable for public works, building, light industry, maintenance, automotive, and petrochemical sectors.',
    benefits: [
      { icon: 'fa-cloud', label: 'Comfort', desc: 'Low pressure pads minimize clamping force for all-day wear' },
      { icon: 'fa-sliders', label: 'Adjustability', desc: 'Adjustable headband ensures a secure personalized fit' }
    ],
    certifications: [
      { name: 'CE', details: 'European Conformity' },
      { name: 'EN 352-1', details: 'SNR 23 dB · Ear Muffs Standard' },
      { name: 'UL-AR EN352-1', details: 'Underwriters Laboratories Certified' }
    ],
    features: ['SNR 23dB noise attenuation', 'Low pressure pad design', 'Adjustable headband', 'Suitable for prolonged industrial wear', 'Compliant with EN 352-1 & UL-AR EN352-1'],
    img: 'assets/products/hearing/spa_3.png'
  },
  {
    id: 606,
    cat: 'hearing',
    name: 'CONICFIT100',
    brand: 'DeltaPlus',
    tags: ['Reusable', 'Silicone', 'PVC Cord'],
    desc: 'Reusable silicone earplugs with PVC cord, box of 100 pairs. For daily use in public works, events, light industry, maintenance, automotive, public services, transportation, and storage.',
    benefits: [
      { icon: 'fa-hand-pointer', label: 'Easy to Use', desc: 'Built-in firm handle for correct angle of insertion' },
      { icon: 'fa-cloud', label: 'Comfort', desc: 'Contoured 3 flange polymer design provides all-day comfort' },
      { icon: 'fa-chart-line', label: 'Performance', desc: 'Ultra-soft polymer for superior attenuation' }
    ],
    certifications: [
      { name: 'CE', details: 'European Conformity' },
      { name: 'EN 352-2', details: 'Ear Plugs Standard' },
      { name: 'ANSI S3.19', details: 'Hearing Protection Standard' }
    ],
    features: ['Reusable soft silicone construction', 'Contoured 3 flange design', 'PVC cord to prevent misplacement', 'Box of 100 pairs', 'Compliant with EN 352-2 & ANSI S3.19'],
    img: 'assets/products/hearing/conicfit100.png'
  },
  {
    id: 607,
    cat: 'hearing',
    name: 'CONIC DISPLAY',
    brand: 'DeltaPlus',
    tags: ['Dispenser', '500 Pairs', 'CONIC500'],
    desc: 'Earplugs dispenser with 500 pairs of CONIC500 disposable earplugs. For high-traffic workplaces where multiple workers need quick access to hearing protection.',
    certifications: [
      { name: 'CE', details: 'European Conformity' },
      { name: 'EN 352-2', details: 'Ear Plugs Standard' },
      { name: 'ANSI S3.19', details: 'Hearing Protection Standard' }
    ],
    features: ['Wall-mountable dispenser unit', '500 pairs of CONIC500 disposable earplugs', 'Smooth surface foam for comfort', 'Low pressure design', 'Ideal for transportation and storage sectors', 'Compliant with EN 352-2 & ANSI S3.19'],
    img: 'assets/products/hearing/conic_display.png'
  },

  // ── WELDING (DeltaPlus) ──
  {
    id: 700,
    cat: 'welding',
    name: 'BARRIER 2',
    brand: 'DeltaPlus',
    tags: ['Auto-Darkening', 'Electric Arc', 'Shade 9-13'],
    desc: 'Helmet for electric arc welding with auto-darkening filter. Rapid sensor-based switching protects against intense arc flashes. Adjustable shade 9-13 with sensitivity and delay controls.',
    features: ['Auto-darkening active filter', 'Adjustable shade 9-13', 'Solar-powered with battery backup', 'Sensitivity and delay control knobs', 'Suitable for MIG, MAG, TIG, MMA welding', 'EN 175 certified'],
    img: 'assets/products/welding/barrier_2.png'
  },
  {
    id: 701,
    cat: 'welding',
    name: 'CASOUD 3',
    brand: 'DeltaPlus',
    tags: ['Welding Hood', 'Polypropylene'],
    desc: 'Welding hood in durable polypropylene with flip-up lift-front design. Provides head and face protection during arc welding with a standard passive lens filter.',
    features: ['Durable heat-resistant polypropylene shell', 'Flip-up lift-front design', 'Passive filter lens', 'Impact-resistant construction', 'Adjustable headgear', 'EN 175 certified'],
    img: 'assets/products/welding/casoud_3.png'
  },
  {
    id: 702,
    cat: 'welding',
    name: 'CASOUD2HE',
    brand: 'DeltaPlus',
    tags: ['Integrated', 'Flip-Up Screen', 'Safety Helmet'],
    desc: 'Welding shield for safety helmet with flip-up screen. Attaches to the Quartz safety helmet family to provide integrated head and welding face protection on multi-hazard sites.',
    features: ['Mounts on Quartz safety helmet series', 'Flip-up welding shield front', 'High-impact head protection retained', 'Easy-lift mechanism', 'Passive filter lens', 'EN 166 / EN 175 certified'],
    img: 'assets/products/welding/casoud2he.png'
  },
  {
    id: 703,
    cat: 'welding',
    name: 'SCREEN',
    brand: 'DeltaPlus',
    tags: ['DIN 9-13', 'Electric Arc', 'MIG/MAG/TIG'],
    desc: 'Helmet for electric arc welding with fixed passive lens filter, DIN 9-13. Suitable for MIG-MAG and TIG welding processes. Simple, robust construction for everyday welding operations.',
    features: ['Fixed passive lens filter (DIN 9-13)', 'Suitable for MIG, MAG, TIG, and MMA', 'Lightweight shell construction', 'Adjustable headgear band', 'Wide viewing area', 'EN 175 certified'],
    img: 'assets/products/welding/screen.png'
  },

  // ── FALL PROTECTION (DeltaPlus) ──
  {
    id: 800,
    cat: 'fall',
    name: 'ELARA282',
    brand: 'DeltaPlus',
    tags: ['EN361', '2-Point', 'Energy Absorber'],
    desc: 'Harness with 2 anchorage points + double webbing energy absorber, 2m. Complete fall arrest system for high-altitude industrial maintenance and construction.',
    features: ['2 anchorage points (back and sternal)', 'Double webbing energy absorber lanyard (2m)', 'Polyester webbing construction', 'Adjustable buckles for secure fit', 'Reduces arrest force below 6kN', 'EN 361 / EN 355 certified'],
    img: 'assets/products/fall/elara282.png'
  },
  {
    id: 801,
    cat: 'fall',
    name: 'HAR22H',
    brand: 'DeltaPlus',
    tags: ['EN361', 'H-Style', 'D-Ring + Sternal'],
    desc: 'Harness with H style with 2 anchorage points — D-ring (dorsal) and sternal. Designed for work at height requiring reliable fall arrest with ergonomic H-bar chest connection.',
    features: ['H-style load distribution design', 'Dorsal D-ring anchorage point', 'Sternal anchorage point', 'Adjustable shoulder and leg straps', 'Steel hardware components', 'EN 361 certified'],
    img: 'assets/products/fall/har22h.png'
  },
  {
    id: 802,
    cat: 'fall',
    name: 'HAR42EL',
    brand: 'DeltaPlus',
    tags: ['EN361', '4-Point', 'Dielectric'],
    desc: 'Harness with belt, 4 anchorage points E — dielectric. Full-body fall arrest harness with 4 anchor points and dielectric properties for use near electrical hazards.',
    features: ['4 anchorage points for versatile attachment', 'Dielectric — safe near electrical hazards', 'Integrated positioning belt', 'Adjustable shoulder, chest, and leg straps', 'Lightweight ergonomic design', 'EN 361 / EN 358 certified'],
    img: 'assets/products/fall/har42el.png'
  },
  {
    id: 803,
    cat: 'fall',
    name: 'TC022',
    brand: 'DeltaPlus',
    tags: ['Evacuation', 'All-Size', 'Rescue Triangle'],
    desc: 'Evacuation triangle — all size in one. Emergency rescue and evacuation device designed to fit all body sizes for rapid extraction in confined spaces and emergency descent.',
    features: ['Universal fit — all size in one', 'Emergency evacuation and rescue', 'High-tenacity polyester webbing', 'Quick donning design', 'Compatible with standard connectors', 'EN 1498 certified'],
    img: 'assets/products/fall/tc022.png'
  },
  {
    id: 804,
    cat: 'fall',
    name: 'AM002',
    brand: 'DeltaPlus',
    tags: ['Karabiner', 'Steel', '17mm Gate'],
    desc: 'Galvanized steel karabiner — opening 17mm. Reliable connector for fall arrest systems, work positioning, and anchorage setups in construction and industrial environments.',
    features: ['Galvanized steel construction', '17mm gate opening', 'Auto-locking gate mechanism', 'High static load rating', 'Corrosion-resistant finish', 'EN 362 certified'],
    img: 'assets/products/fall/am002.png'
  },
  {
    id: 805,
    cat: 'fall',
    name: 'AN30010',
    brand: 'DeltaPlus',
    tags: ['Anchorage Line', '10m', 'Braided Rope'],
    desc: '10 metre anchorage line. Braided rope anchorage line for vertical lifeline systems and temporary anchorage setups on construction and industrial sites.',
    features: ['10m braided rope construction', 'High-tenacity polyester fibers', 'Suitable for vertical lifeline systems', 'Compatible with fall arresters', 'Termination connectors at each end', 'EN 795 compatible'],
    img: 'assets/products/fall/an30010.png'
  },
  {
    id: 806,
    cat: 'fall',
    name: 'TC044',
    brand: 'DeltaPlus',
    tags: ['Figure Eight', 'Descender', 'Large Aluminum'],
    desc: 'Large figure of eight descender in aluminum. Used for rope access, rescue, and controlled descent operations. Large-loop design for smooth rope management and controlled lowering.',
    features: ['Large figure-of-eight design', 'Lightweight aluminum construction', 'Suitable for rope access and rescue', 'Smooth rope braking control', 'Compatible with standard ropes', 'EN 341 compatible'],
    img: 'assets/products/fall/tc044.png'
  },
  {
    id: 807,
    cat: 'fall',
    name: 'ASDRISS2 AN068',
    brand: 'DeltaPlus',
    tags: ['Fall Arrester', 'Braided Rope', 'Aluminum 10.5mm'],
    desc: 'Braided rope fall arrester on rope — aluminum 10.5mm. Guided type automatic fall arrester that locks instantly on a fall, for use on braided rope anchorage lines.',
    features: ['Aluminum body construction', 'Designed for 10.5mm braided rope', 'Automatic locking on fall detection', 'Manual release after arrest', 'Compact and lightweight', 'EN 353-2 certified'],
    img: 'assets/products/fall/asdriss2_an068.png'
  }

];

export const marqueeItems = categories.map(c => c.label);