import { getBenefits, getCerts } from '../data.js';

export const products = [
  {
    id: 700,
    cat: 'welding',
    name: 'BARRIER 3',
    brand: 'DeltaPlus',
    tags: ['Auto-Darkening', 'Electric Arc', 'Shade 9-13'],
    desc: 'Helmet for electric arc welding with auto-darkening filter. Rapid sensor-based switching protects against intense arc flashes. Adjustable shade 9-13 with sensitivity and delay controls.',
    features: ['Auto-darkening active filter', 'Adjustable shade 9-13', 'Solar-powered with battery backup', 'Sensitivity and delay control knobs', 'Suitable for MIG, MAG, TIG, MMA welding', 'EN 175 certified'],
    img: 'assets/products/welding/barrier-3/thumbnail.png',
    images: ['assets/products/welding/barrier-3/black-gray/1.png', 'assets/products/welding/barrier-3/black-gray/2.png', 'assets/products/welding/barrier-3/black-gray/3.png', 'assets/products/welding/barrier-3/black-gray/4.png'],
    sizes: ['Adjusttable'],
    colors: [
      { name: 'Black Gray', hex: 'linear-gradient(225deg, #000 50%, #4b5563 50%)', img: 'assets/products/welding/barrier-3/black-gray/1.png', images: ['assets/products/welding/barrier-3/black-gray/1.png', 'assets/products/welding/barrier-3/black-gray/2.png', 'assets/products/welding/barrier-3/black-gray/3.png', 'assets/products/welding/barrier-3/black-gray/4.png'] }
    ]
  },
  {
    id: 701,
    cat: 'welding',
    name: 'CASOUD 3',
    brand: 'DeltaPlus',
    tags: ['Welding Hood', 'Polypropylene'],
    desc: 'Welding hood in durable polypropylene with flip-up lift-front design. Provides head and face protection during arc welding with a standard passive lens filter.',
    features: ['Durable heat-resistant polypropylene shell', 'Flip-up lift-front design', 'Passive filter lens', 'Impact-resistant construction', 'Adjustable headgear', 'EN 175 certified'],
    img: 'assets/products/welding/casoud-3/thumbnail.png',
    images: ['assets/products/welding/casoud-3/black/1.png'],
    sizes: ['Adjustable'],
    colors: [
      { name: 'Black', hex: '#000', img: 'assets/products/welding/casoud-3/black/1.png', sizes: ['Adjustable'] }
    ]
  },
  {
    id: 702,
    cat: 'welding',
    name: 'CASOUD2HE',
    brand: 'DeltaPlus',
    tags: ['Integrated', 'Flip-Up Screen', 'Safety Helmet'],
    desc: 'Welding shield for safety helmet with flip-up screen. Attaches to the Quartz safety helmet family to provide integrated head and welding face protection on multi-hazard sites.',
    features: ['Mounts on Quartz safety helmet series', 'Flip-up welding shield front', 'High-impact head protection retained', 'Easy-lift mechanism', 'Passive filter lens', 'EN 166 / EN 175 certified'],
    img: 'assets/products/welding/casoud2he/thumbnail.png',
    images: ['assets/products/welding/casoud2he/black/1.png', 'assets/products/welding/casoud2he/black/2.png'],
    sizes: ['Adjustable'],
    colors: [
      { name: 'Black', hex: '#000', img: 'assets/products/welding/casoud2he/black/1.png', images: ['assets/products/welding/casoud2he/black/1.png', 'assets/products/welding/casoud2he/black/2.png'], sizes: ['Adjustable'] }
    ]
  },
  {
    id: 703,
    cat: 'welding',
    name: 'SCREEN',
    brand: 'DeltaPlus',
    tags: ['DIN 9-13', 'Electric Arc', 'MIG/MAG/TIG'],
    desc: 'Helmet for electric arc welding with fixed passive lens filter, DIN 9-13. Suitable for MIG-MAG and TIG welding processes. Simple, robust construction for everyday welding operations.',
    features: ['Fixed passive lens filter (DIN 9-13)', 'Suitable for MIG, MAG, TIG, and MMA', 'Lightweight shell construction', 'Adjustable headgear band', 'Wide viewing area', 'EN 175 certified'],
    img: 'assets/products/welding/screen/thumbnail.png',
    images: ['assets/products/welding/screen/black/1.png', 'assets/products/welding/screen/black/2.png', 'assets/products/welding/screen/black/3.png', 'assets/products/welding/screen/black/4.png'],
    colors: [
      { name: 'Black', hex: '#000', img: 'assets/products/welding/screen/black/1.png', images: ['assets/products/welding/screen/black/1.png', 'assets/products/welding/screen/black/2.png', 'assets/products/welding/screen/black/3.png', 'assets/products/welding/screen/black/4.png'] }
    ]
  },
  {
    id: 704,
    cat: 'welding',
    name: 'TOBA 3 T5',
    brand: 'DeltaPlus',
    tags: [],
    desc: 'Welding goggles with clear lens/shade 5 retractable lenses, perfect for occasional welding.',
    features: [],
    img: 'assets/products/welding/toba3-t5/thumbnail.png',
    images: ['assets/products/welding/toba3-t5/red/1.png'],
    colors: [
      { name: 'Red', hex: '#dc3545', img: 'assets/products/welding/toba3-t5/red/1.png', images: ['assets/products/welding/toba3-t5/red/1.png'] }
    ]
  }
];
