import { getBenefits, getCerts } from '../data.js';

export const products = [
  {
    id: 200,
    cat: 'head',
    name: 'AIR COLTAN',
    brand: 'DeltaPlus',
    tags: ["Bump Cap","Ventilated","Textile"],
    desc: 'Ventilated protective cap for maximum comfort, available in 3 visor lengths',
    features: ["Cap Material : Textile","Head Measurement : 55-62","Shell Material : Polyethylene","Shell Liner : EVA","Adjustment : Clamp Bracket","Weight : 176 g"],
    benefits: [],
    certs: [],
    img: 'assets/products/skull/air-coltan/thumbnail.png'
  },
  {
    id: 201,
    cat: 'head',
    name: 'DIAMOND V',
    brand: 'DeltaPlus',
    tags: ["ABS","EN397","Baseball Cap Style"],
    desc: 'Safety helmet featuring a sporty design for upright and inverted wear for maximum versatility',
    features: ["ABS thermoplastic shell","\"Baseball cap\" silhouette","EN 397 certified","Adjustable internal harness","Lightweight construction","Available in multiple colors"],
    benefits: getBenefits('headComfort', 'headHygiene', 'headPerformance', 'headDurability', 'headEaseOfUse'),
    certs: [],
    img: 'assets/products/skull/diamond-v/thumbnail.png'
  },
  {
    id: 202,
    cat: 'head',
    name: 'ZIRCON 1',
    brand: 'DeltaPlus',
    tags: ["HDPE","EN397","Manual Adjustment"],
    desc: 'Safety helmet with manual adjustment. Electrically insulated safety helmet with adjustable strap, providing reliable impact protection for standard industrial environments.',
    features: ["High-density polyethylene (HDPE) / Polypropylene shell","PE (Polyethylene) polymer harness with 8 suspension points","Slide-Lock adjustment system","Electrical insulation (EN 50365)","Head measurement: 53-63 cm","Lightweight construction (330g)"],
    benefits: getBenefits('zirconComfort', 'zirconHygiene', 'headPerformance', 'headDurability'),
    certs: [],
    img: 'assets/products/skull/zircon-1/thumbnail.png'
  },
  {
    id: 203,
    cat: 'head',
    name: 'GRANITE WIND',
    brand: 'DeltaPlus',
    tags: ["ABS","Ventilated","Mountain Style"],
    desc: 'Safety helmet for work at height, ventilated, made from ABS, equipped with a 3-point chinstrap',
    features: ["Shell material : ABS - Vented","Head Measurement : 53-63 cm","D Rotor Ratchet - Rotor adjustment","Textile : PA (Polyamide) - 8 points","Chin Strap Material : Textile - 3 Point Chin Strap","Comfort Headband : EVA Foam","Weight : 368 g","Face shield - Accessory added to order"],
    benefits: getBenefits('graniteComfort', 'graniteHygiene', 'headPerformance', 'headDurability'),
    certs: [],
    img: 'assets/products/skull/granite-wind/thumbnail.png'
  },
  {
    id: 204,
    cat: 'head',
    name: 'FORESTIER 3',
    brand: 'DeltaPlus',
    tags: ["Forestry","Integrated Visor","Zircon Based"],
    desc: 'Safety helmet ideal for clearing applications due to its protective gauze visor and soundproof shells.',
    features: ["Type of product : Forest helmet kit","Kit includes : 1x Zircon 1 helmet, 1x Suzuka 2 earmuffs, 1x Visorholder, 1x Visorg mesh visor","Shell material : HDPE - Polypropylene / Non vented","Suspension points : 8 points textile harness","Adjustment : Slide-Lock system","Head measurement : 53-63 cm","Comfort headband : Polyester","Weight : 762 g","Mounting notch : Yes (for earmuffs fixation)","Integrated option : Integrated mesh visor","Temperature resistance : -10°C to +50°C","Lifespan : 60 months from manufacturing / 36 months from first use"],
    benefits: getBenefits('forestierComfort', 'forestierCompatibility', 'forestierHygiene', 'headPerformance', 'headDurability'),
    certs: [],
    img: 'assets/products/skull/forestier-3/thumbnail.png'
  },
  {
    id: 205,
    cat: 'head',
    name: 'ONYX2 BLANC',
    brand: 'DeltaPlus',
    tags: ["ABS","Retractable Visor","Dual Shell"],
    desc: 'Dual-shell ABS safety helmet with retractable visor. The integrated polycarbonate visor retracts when not needed, providing versatile protection on construction and industrial sites.',
    features: ["Dual ABS shell construction","Retractable polycarbonate visor","EN 397 and EN 166 certified","Ratchet adjustment harness","Ventilation system"],
    benefits: [],
    certs: [],
    img: 'assets/products/skull/onyx2-blanc/thumbnail.png'
  },
  {
    id: 206,
    cat: 'head',
    name: 'WINTER CAP',
    brand: 'DeltaPlus',
    tags: ["Polyester Lining","Cold Protection","Helmet Liner"],
    desc: 'Polyester lining for safety helmets. Provides thermal insulation inside the helmet during cold weather operations without compromising the helmet\'s protective performance.',
    features: ["Polyester fleece material","Fits inside standard safety helmets","Ear coverage panels","Thermal insulation for cold environments","Washable construction","Universal fit design"],
    benefits: [],
    certs: [],
    img: 'assets/products/skull/winter-cap/thumbnail.png'
  },
  {
    id: 207,
    cat: 'head',
    name: 'QUARTZ I',
    brand: 'DeltaPlus',
    tags: ["Polypropylene","EN397","Lightweight"],
    desc: 'Polypropylene safety helmet offering lightweight certified head protection for general industrial, construction, and maintenance applications.',
    features: ["Polypropylene thermoplastic shell","EN 397 certified","Lightweight design for all-day comfort","Adjustable textile suspension","Integrated sweatband","Available in multiple colors including blue"],
    benefits: [],
    certs: [],
    img: 'assets/products/skull/quartz-1/thumbnail.png'
  }
];
