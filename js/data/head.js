import { getBenefits, getCerts } from '../data.js';

export const products = [
  {
    id: 200,
    cat: 'head',
    name: 'AIR COLTAN',
    brand: 'DeltaPlus',
    tags: ['Bump Cap', 'Ventilated', 'Textile'],
    desc: 'Ventilated protective cap for maximum comfort, available in 3 visor lengths',
    features: ['Cap Material : Textile', 'Head Measurement : 55-62', 'Shell Material : Polyethylene', 'Shell Liner : EVA', 'Adjustment : Clamp Bracket', 'Weight : 176 g'],
    img: 'assets/products/skull/air-coltan/thumbnail.png',
    images: ['assets/products/skull/air-coltan/gray-yellow/1.png', 'assets/products/skull/air-coltan/gray-yellow/2.png', 'assets/products/skull/air-coltan/gray-yellow/3.png', 'assets/products/skull/air-coltan/gray-yellow/4.png'],
    sizes: ['Adjustable- long peak'],
    colors: [
      { name: 'Gray-Yellow', hex: 'linear-gradient(225deg, #4b5563 50%, #eab308 50%)', img: 'assets/products/skull/air-coltan/gray-yellow/11.png', images: ['assets/products/skull/air-coltan/gray-yellow/1.png', 'assets/products/skull/air-coltan/gray-yellow/2.png', 'assets/products/skull/air-coltan/gray-yellow/3.png', 'assets/products/skull/air-coltan/gray-yellow/4.png'], sizes: ['Adjustable- long peak', 'Adjustable- micro peak'] },
      { name: 'Black-Red', hex: 'linear-gradient(225deg, #1a1a1a 50%, #dc2626 50%)', img: 'assets/products/skull/air-coltan/black-red/1.png', images: ['assets/products/skull/air-coltan/black-red/1.png', 'assets/products/skull/air-coltan/black-red/2.png', 'assets/products/skull/air-coltan/black-red/3.png'], sizes: ['Adjustable- long peak', 'Adjustable- micro peak', 'Adjustable- short peak'] },
      { name: 'Navy Blue-Orange', hex: 'linear-gradient(225deg, #0d276eff 50%, #f97316 50%)', img: 'assets/products/skull/air-coltan/navy blue-orange/1.png', images: ['assets/products/skull/air-coltan/navy blue-orange/1.png', 'assets/products/skull/air-coltan/navy blue-orange/2.png'], sizes: ['Adjustable- long peak', 'Adjustable- short peak'] },
      { name: 'Fluorescent Yellow-Gray', hex: 'linear-gradient(225deg, #fef08a 50%, #9ca3af 50%)', img: 'assets/products/skull/air-coltan/fluorescent yellow-gray/1.png', images: ['assets/products/skull/air-coltan/fluorescent yellow-gray/1.png'], sizes: ['Adjustable- long peak'] }
    ]
  },
  {
    id: 201,
    cat: 'head',
    name: 'DIAMOND V',
    brand: 'DeltaPlus',
    tags: ['ABS', 'EN397', 'Baseball Cap Style'],
    desc: 'Safety helmet featuring a sporty design for upright and inverted wear for maximum versatility',
    features: ['ABS thermoplastic shell', '"Baseball cap" silhouette', 'EN 397 certified', 'Adjustable internal harness', 'Lightweight construction', 'Available in multiple colors'],
    benefits: getBenefits('headComfort', 'headHygiene', 'headPerformance', 'headDurability', 'headEaseOfUse'),
    img: 'assets/products/skull/diamond-v/thumbnail.png',
    images: ['assets/products/skull/diamond-v/gray-yellow/1.png'],
    sizes: ['Adjustable'],
    colors: [
      { name: 'Gray-Yellow', hex: 'linear-gradient(225deg, #4b5563 50%, #eab308 50%)', img: 'assets/products/skull/diamond-v/gray-yellow/1.png', images: ['assets/products/skull/diamond-v/gray-yellow/1.png'], sizes: ['Adjustable'] },
      { name: 'Green', hex: '#198754', img: 'assets/products/skull/diamond-v/green/1.png', images: ['assets/products/skull/diamond-v/green/1.png'], sizes: ['Adjustable'] },
      { name: 'Red', hex: '#dc3545', img: 'assets/products/skull/diamond-v/red/1.png', images: ['assets/products/skull/diamond-v/red/1.png'], sizes: ['Adjustable'] },
      { name: 'Yellow', hex: '#ffc107', img: 'assets/products/skull/diamond-v/yellow/1.png', images: ['assets/products/skull/diamond-v/yellow/1.png'], sizes: ['Adjustable'] },
      { name: 'Black', hex: '#1a1a1a', img: 'assets/products/skull/diamond-v/black/1.png', images: ['assets/products/skull/diamond-v/black/1.png'], sizes: ['Adjustable'] },
      { name: 'Blue', hex: '#0d6efd', img: 'assets/products/skull/diamond-v/blue/1.png', images: ['assets/products/skull/diamond-v/blue/1.png'], sizes: ['Adjustable'] },
      { name: 'Orange', hex: '#fd7e14', img: 'assets/products/skull/diamond-v/orange/1.png', images: ['assets/products/skull/diamond-v/orange/1.png'], sizes: ['Adjustable'] },
      { name: 'White', hex: '#ffffff', img: 'assets/products/skull/diamond-v/white/1.png', images: ['assets/products/skull/diamond-v/white/1.png'], sizes: ['Adjustable'] }
    ]
  },
  {
    id: 202,
    cat: 'head',
    name: 'ZIRCON 1',
    brand: 'DeltaPlus',
    tags: ['HDPE', 'EN397', 'Manual Adjustment'],
    desc: 'Safety helmet with manual adjustment. Electrically insulated safety helmet with adjustable strap, providing reliable impact protection for standard industrial environments.',
    features: ['High-density polyethylene (HDPE) / Polypropylene shell', 'PE (Polyethylene) polymer harness with 8 suspension points', 'Slide-Lock adjustment system', 'Electrical insulation (EN 50365)', 'Head measurement: 53-63 cm', 'Lightweight construction (330g)'],
    benefits: getBenefits('zirconComfort', 'zirconHygiene', 'headPerformance', 'headDurability'),
    certifications: getCerts('en397', 'en50365', 'ulArIram3620'),
    img: 'assets/products/skull/zircon-1/thumbnail.png',
    images: ['assets/products/skull/zircon-1/green/1.png'],
    sizes: ['Adjustable'],
    colors: [
      { name: 'Green', hex: '#198754', img: 'assets/products/skull/zircon-1/green/1.png', images: ['assets/products/skull/zircon-1/green/1.png'], sizes: ['Adjustable'] },
      { name: 'Orange', hex: '#fd7e14', img: 'assets/products/skull/zircon-1/orange/1.png', images: ['assets/products/skull/zircon-1/orange/1.png'], sizes: ['Adjustable'] },
      { name: 'Blue', hex: '#0d6efd', img: 'assets/products/skull/zircon-1/blue/1.png', images: ['assets/products/skull/zircon-1/blue/1.png'], sizes: ['Adjustable'] },
      { name: 'Gray', hex: '#6c757d', img: 'assets/products/skull/zircon-1/gray/1.png', images: ['assets/products/skull/zircon-1/gray/1.png'], sizes: ['Adjustable'] },
      { name: 'Yellow', hex: '#ffc107', img: 'assets/products/skull/zircon-1/yellow/1.png', images: ['assets/products/skull/zircon-1/yellow/1.png'], sizes: ['Adjustable'] },
      { name: 'White', hex: '#ffffff', img: 'assets/products/skull/zircon-1/white/1.png', images: ['assets/products/skull/zircon-1/white/1.png'], sizes: ['Adjustable'] },
      { name: 'Red', hex: '#dc3545', img: 'assets/products/skull/zircon-1/red/1.png', images: ['assets/products/skull/zircon-1/red/1.png'], sizes: ['Adjustable'] }
    ]
  },
  {
    id: 203,
    cat: 'head',
    name: 'GRANITE WIND',
    brand: 'DeltaPlus',
    tags: ['ABS', 'Ventilated', 'Mountain Style'],
    desc: 'Safety helmet for work at height, ventilated, made from ABS, equipped with a 3-point chinstrap',
    features: ['Shell material : ABS - Vented', 'Head Measurement : 53-63 cm', 'D Rotor Ratchet - Rotor adjustment', 'Textile : PA (Polyamide) - 8 points', 'Chin Strap Material : Textile - 3 Point Chin Strap', 'Comfort Headband : EVA Foam', 'Weight : 368 g', 'Face shield - Accessory added to order'],
    benefits: getBenefits('graniteComfort', 'graniteHygiene', 'headPerformance', 'headDurability'),
    img: 'assets/products/skull/granite-wind/thumbnail.png',
    images: ['assets/products/skull/granite-wind/white/1.png', 'assets/products/skull/granite-wind/white/2.png', 'assets/products/skull/granite-wind/white/3.png'],
    sizes: ['Adjustable'],
    colors: [
      { name: 'White', hex: '#ffffff', img: 'assets/products/skull/granite-wind/white/1.png', images: ['assets/products/skull/granite-wind/white/1.png', 'assets/products/skull/granite-wind/white/2.png', 'assets/products/skull/granite-wind/white/3.png'], sizes: ['Adjustable'] },
      { name: 'Orange', hex: '#fd7e14', img: 'assets/products/skull/granite-wind/orange/1.png', images: ['assets/products/skull/granite-wind/orange/1.png'], sizes: ['Adjustable'] },
      { name: 'Blue', hex: '#0d6efd', img: 'assets/products/skull/granite-wind/blue/1.png', images: ['assets/products/skull/granite-wind/blue/1.png'], sizes: ['Adjustable'] },
      { name: 'Red', hex: '#dc3545', img: 'assets/products/skull/granite-wind/red/1.png', images: ['assets/products/skull/granite-wind/red/1.png'], sizes: ['Adjustable'] },
      { name: 'Yellow', hex: '#ffc107', img: 'assets/products/skull/granite-wind/yellow/1.png', images: ['assets/products/skull/granite-wind/yellow/1.png'], sizes: ['Adjustable'] }
    ]
  },
  {
    id: 204,
    cat: 'head',
    name: 'FORESTIER 3',
    brand: 'DeltaPlus',
    tags: ['Forestry', 'Integrated Visor', 'Zircon Based'],
    desc: 'Safety helmet ideal for clearing applications due to its protective gauze visor and soundproof shells.',
    features: [
      'Type of product : Forest helmet kit',
      'Kit includes : 1x Zircon 1 helmet, 1x Suzuka 2 earmuffs, 1x Visorholder, 1x Visorg mesh visor',
      'Shell material : HDPE - Polypropylene / Non vented',
      'Suspension points : 8 points textile harness',
      'Adjustment : Slide-Lock system',
      'Head measurement : 53-63 cm',
      'Comfort headband : Polyester',
      'Weight : 762 g',
      'Mounting notch : Yes (for earmuffs fixation)',
      'Integrated option : Integrated mesh visor',
      'Temperature resistance : -10°C to +50°C',
      'Lifespan : 60 months from manufacturing / 36 months from first use'
    ],
    benefits: getBenefits('forestierComfort', 'forestierCompatibility', 'forestierHygiene', 'headPerformance', 'headDurability'),
    certifications: getCerts('ce', 'en397Forestier', 'en50365Forestier', 'en3523Forestier', 'en1731', 'en166'),
    img: 'assets/products/skull/forestier-3/thumbnail.png',
    sizes: ['Adjustable'],
    colors: [
      { name: 'Orange', hex: '#fd7e14', img: 'assets/products/skull/forestier-3/orange/1.png' }
    ]
  },
  {
    id: 205,
    cat: 'head',
    name: 'ONYX2 BLANC',
    brand: 'DeltaPlus',
    tags: ['ABS', 'Retractable Visor', 'Dual Shell'],
    desc: 'Dual-shell ABS safety helmet with retractable visor. The integrated polycarbonate visor retracts when not needed, providing versatile protection on construction and industrial sites.',
    features: ['Dual ABS shell construction', 'Retractable polycarbonate visor', 'EN 397 and EN 166 certified', 'Ratchet adjustment harness', 'Ventilation system'],
    img: 'assets/products/skull/onyx2-blanc/thumbnail.png',
    images: ['assets/products/skull/onyx2-blanc/white/1.png', 'assets/products/skull/onyx2-blanc/white/2.png', 'assets/products/skull/onyx2-blanc/white/3.png', 'assets/products/skull/onyx2-blanc/white/4.png', 'assets/products/skull/onyx2-blanc/white/5.png'],
    sizes: ['Adjustable'],
    colors: [
      { name: 'White', hex: '#ffffff', img: 'assets/products/skull/onyx2-blanc/1.png', images: ['assets/products/skull/onyx2-blanc/white/1.png', 'assets/products/skull/onyx2-blanc/white/2.png', 'assets/products/skull/onyx2-blanc/white/3.png', 'assets/products/skull/onyx2-blanc/white/4.png', 'assets/products/skull/onyx2-blanc/white/5.png'] }
    ]
  },
  {
    id: 206,
    cat: 'head',
    name: 'WINTER CAP',
    brand: 'DeltaPlus',
    tags: ['Polyester Lining', 'Cold Protection', 'Helmet Liner'],
    desc: 'Polyester lining for safety helmets. Provides thermal insulation inside the helmet during cold weather operations without compromising the helmet\'s protective performance.',
    features: ['Polyester fleece material', 'Fits inside standard safety helmets', 'Ear coverage panels', 'Thermal insulation for cold environments', 'Washable construction', 'Universal fit design'],
    img: 'assets/products/skull/winter-cap/thumbnail.png',
    images: ['assets/products/skull/winter-cap/black/1.png', 'assets/products/skull/winter-cap/black/2.png'],
    sizes: ['Adjustable'],
    colors: [
      { name: 'Black', hex: '#000', img: 'assets/products/skull/winter-cap/black/1.png', images: ['assets/products/skull/winter-cap/black/1.png', 'assets/products/skull/winter-cap/black/2.png'], sizes: ['Adjustable'] }
    ]
  },
  {
    id: 207,
    cat: 'head',
    name: 'QUARTZ I',
    brand: 'DeltaPlus',
    tags: ['Polypropylene', 'EN397', 'Lightweight'],
    desc: 'Polypropylene safety helmet offering lightweight certified head protection for general industrial, construction, and maintenance applications.',
    features: ['Polypropylene thermoplastic shell', 'EN 397 certified', 'Lightweight design for all-day comfort', 'Adjustable textile suspension', 'Integrated sweatband', 'Available in multiple colors including blue'],
    img: 'assets/products/skull/quartz-1/thumbnail.png',
    images: ['assets/products/skull/quartz-1/white/1.png'],
    sizes: ['Adjustable'],
    colors: [
      { name: 'White', hex: '#ffffff', img: 'assets/products/skull/quartz-1/white/1.png', sizes: ['Adjustable'] },
      { name: 'Blue', hex: '#0d6efd', img: 'assets/products/skull/quartz-1/blue/1.png', sizes: ['Adjustable'] },
      { name: 'Yellow', hex: '#ffc107', img: 'assets/products/skull/quartz-1/yellow/1.png', sizes: ['Adjustable'] }
    ]
  }
];
