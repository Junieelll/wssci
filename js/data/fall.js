import { getBenefits, getCerts } from '../data.js';

export const products = [
  {
    id: 800,
    cat: 'fall',
    name: 'ELARA280V2',
    brand: 'DeltaPlus',
    tags: ['EN361', '2-Point', 'Energy Absorber'],
    desc: 'Harness with 2 anchorage points + double webbing energy absorber, 2m. Complete fall arrest system for high-altitude industrial maintenance and construction.',
    features: ['2 anchorage points (back and sternal)', 'Double webbing energy absorber lanyard (2m)', 'Polyester webbing construction', 'Adjustable buckles for secure fit', 'Reduces arrest force below 6kN', 'EN 361 / EN 355 certified'],
    img: 'assets/products/fall/elara280v2/thumbnail.png',
    images: ['assets/products/fall/elara280v2/orange/1.png', 'assets/products/fall/elara280v2/orange/2.png'],
    colors: [
      { name: 'Orange', hex: '#ec7b1eff', images: ['assets/products/fall/elara280v2/orange/1.png', 'assets/products/fall/elara280v2/orange/2.png'] }
    ],
    sizes: ['SM/MD/LG', 'XL/2X']
  },
  {
    id: 801,
    cat: 'fall',
    name: 'HAR22H',
    brand: 'DeltaPlus',
    tags: ['EN361', 'H-Style', 'D-Ring + Sternal'],
    desc: 'Harness with H style with 2 anchorage points — D-ring (dorsal) and sternal. Designed for work at height requiring reliable fall arrest with ergonomic H-bar chest connection.',
    features: ['H-style load distribution design', 'Dorsal D-ring anchorage point', 'Sternal anchorage point', 'Adjustable shoulder and leg straps', 'Steel hardware components', 'EN 361 certified'],
    img: 'assets/products/fall/har22h/thumbnail.png',
    images: ['assets/products/fall/har22h/1.png'],
    sizes: ['SM/MD/LG', 'XL/2X']
  },
  {
    id: 802,
    cat: 'fall',
    name: 'HAR42EL',
    brand: 'DeltaPlus',
    tags: ['EN361', '4-Point', 'Dielectric'],
    desc: 'Harness with belt, 4 anchorage points E — dielectric. Full-body fall arrest harness with 4 anchor points and dielectric properties for use near electrical hazards.',
    features: ['4 anchorage points for versatile attachment', 'Dielectric — safe near electrical hazards', 'Integrated positioning belt', 'Adjustable shoulder, chest, and leg straps', 'Lightweight ergonomic design', 'EN 361 / EN 358 certified'],
    img: 'assets/products/fall/har42el/thumbnail.png',
    images: ['assets/products/fall/har42el/1.png'],
    sizes: ['SM/MD/LG', 'XL/2X']
  },
  {
    id: 803,
    cat: 'fall',
    name: 'TC022',
    brand: 'DeltaPlus',
    tags: ['Evacuation', 'All-Size', 'Rescue Triangle'],
    desc: 'Evacuation triangle — all size in one. Emergency rescue and evacuation device designed to fit all body sizes for rapid extraction in confined spaces and emergency descent.',
    features: ['Universal fit — all size in one', 'Emergency evacuation and rescue', 'High-tenacity polyester webbing', 'Quick donning design', 'Compatible with standard connectors', 'EN 1498 certified'],
    img: 'assets/products/fall/tc022/thumbnail.png',
    images: ['assets/products/fall/tc022/1.png'],
    sizes: ['One size']
  },
  {
    id: 804,
    cat: 'fall',
    name: 'AM002',
    brand: 'DeltaPlus',
    tags: ['Karabiner', 'Steel', '17mm Gate'],
    desc: 'Galvanized steel karabiner — opening 17mm. Reliable connector for fall arrest systems, work positioning, and anchorage setups in construction and industrial environments.',
    features: ['Galvanized steel construction', '17mm gate opening', 'Auto-locking gate mechanism', 'High static load rating', 'Corrosion-resistant finish', 'EN 362 certified'],
    img: 'assets/products/fall/am002/thumbnail.png',
    images: ['assets/products/fall/am002/1.png']
  },
  {
    id: 805,
    cat: 'fall',
    name: 'AN30010',
    brand: 'DeltaPlus',
    tags: ['Anchorage Line', '10m', 'Braided Rope'],
    desc: '10 metre anchorage line. Braided rope anchorage line for vertical lifeline systems and temporary anchorage setups on construction and industrial sites.',
    features: ['10m braided rope construction', 'High-tenacity polyester fibers', 'Suitable for vertical lifeline systems', 'Compatible with fall arresters', 'Termination connectors at each end', 'EN 795 compatible'],
    img: 'assets/products/fall/an30010/thumbnail.png',
    images: ['assets/products/fall/an30010/1.png', 'assets/products/fall/an30010/2.png', 'assets/products/fall/an30010/3.png']
  }
];
