import { getBenefits, getCerts } from '../data.js';

export const products = [
  {
    id: 400,
    cat: 'gloves',
    name: 'VENICUT41GN',
    brand: 'DeltaPlus',
    tags: ['Cut Resistant', 'Nitrile Coated', 'Gauge 15'],
    desc: 'SOFTnocut knitted glove with nitrile-coating palm and reinforcement, gauge 15. SOFTnocut fiber provides excellent cut resistance with lightweight dexterity for oily and greasy environments.',
    benefits: getBenefits('hygiene', 'performance'),
    certifications: getCerts('en388', 'ansiIsea1052024'),
    features: ['SOFTnocut fiber for cut resistance', 'Nitrile foam-coated palm for grip', 'Gauge 15 knitted construction', 'Long cuff (100mm) for wrist protection', 'Available in sizes 7-11', 'Suitable for construction, automotive, and mining'],
    img: 'assets/products/gloves/venicut-41gn/thumbnail.png',
    images: ['assets/products/gloves/venicut-41gn/gray/1.png', 'assets/products/gloves/venicut-41gn/gray/2.png', 'assets/products/gloves/venicut-41gn/gray/3.png'],
    colors: [
      { name: 'Gray', hex: '#4b5563', images: ['assets/products/gloves/venicut-41gn/gray/1.png', 'assets/products/gloves/venicut-41gn/gray/2.png', 'assets/products/gloves/venicut-41gn/gray/3.png'] }
    ]
  },
  {
    id: 401,
    cat: 'gloves',
    name: 'DUOCOLOR VE330',
    brand: 'DeltaPlus',
    tags: ['Latex', 'Household', 'Flocked Dipped'],
    desc: 'Tight, powder-free latex glove with a double-coated, grip-textured finish and internal flocking for superior comfort. This 300mm forearm-length, dual-color glove features a 0.60mm thickness, providing robust yet flexible protection for cleaning, food handling, and industrial tasks.',
    benefits: getBenefits('durability', 'performance1'),
    certifications: getCerts('en3881', 'enIso3741', 'enIso3745', 'foodContact'),
    features: ['Double-coated natural latex construction', 'Grip-textured pattern for superior grip', 'Inner flocked finish for comfort', '0.60mm thickness and 300mm length', 'Blue-Yellow dual-color design', 'Powder-free unsupported design'],
    img: 'assets/products/gloves/duocolor-ve330/thumbnail.png',
    images: ['assets/products/gloves/duocolor-ve330/blue-yellow/1.png', 'assets/products/gloves/duocolor-ve330/blue-yellow/2.png'],
    colors: [
      { name: 'Blue-Yellow', hex: 'linear-gradient(225deg, #0d6efd 50%, #eab308 50%)', images: ['assets/products/gloves/duocolor-ve330/blue-yellow/1.png', 'assets/products/gloves/duocolor-ve330/blue-yellow/2.png'], sizes: ['Adjustable'] }
    ]
  },
  {
    id: 402,
    cat: 'gloves',
    name: 'VENICUTB03',
    brand: 'DeltaPlus',
    tags: ['Cut Resistant', 'Nitrile Coated', 'Gauge 13'],
    desc: 'Knitted ECONOCUT® glove with nitrile coated palm, gauge 13 — x3 pairs pack. Budget-friendly cut-resistant glove for general industrial handling and construction work.',
    certifications: getCerts('en388'),
    features: ['ECONOCUT® fiber for cut protection', 'Nitrile-coated palm for grip', 'Gauge 13 knitted construction', 'Sold in packs of 3 pairs', 'Lightweight and breathable', 'Suitable for light industry and maintenance'],
    img: 'assets/products/gloves/venicutb03/thumbnail.png',
    images: ['assets/products/gloves/venicutb03/gray-black/1.png', 'assets/products/gloves/venicutb03/gray-black/2.png'],
    colors: [
      { name: 'Gray-Black', hex: 'linear-gradient(225deg, #4b5563 50%, #000 50%)', images: ['assets/products/gloves/venicutb03/gray-black/1.png', 'assets/products/gloves/venicutb03/gray-black/2.png'] }
    ]
  },
  {
    id: 403,
    cat: 'gloves',
    name: 'CA615K',
    brand: 'DeltaPlus',
    tags: ['Cowhide Leather', 'Kevlar® Sewn', 'Welder\'s Glove'],
    desc: 'Cowhide split leather welder\'s glove with Kevlar® sewn seams. Premium split leather construction for welding, grinding, and high-heat industrial applications with extended gauntlet cuff.',
    certifications: getCerts('en388', 'en407'),
    features: ['Premium cowhide split leather', 'Kevlar® sewn seams for durability', 'Heat-resistant construction', 'Extended gauntlet cuff', 'Full leather palm and back protection', 'Suitable for welding, grinding, and foundry work'],
    img: 'assets/products/gloves/ca615k/thumbnail.png',
    images: ['assets/products/gloves/ca615k/red/1.png', 'assets/products/gloves/ca615k/red/2.png'],
    colors: [
      { name: 'Red', hex: '#dc3545', images: ['assets/products/gloves/ca615k/red/1.png', 'assets/products/gloves/ca615k/red/2.png'] }
    ]
  },
  {
    id: 404,
    cat: 'gloves',
    name: 'TERK400',
    brand: 'DeltaPlus',
    tags: ['Kevlar® Preox', 'Extreme Heat', 'Welder\'s Glove'],
    desc: 'High-performance cow split leather welding glove featuring an aluminised back and a 200mm aluminised cuff for maximum radiant heat protection. Designed for heavy-duty welding, this 400mm long glove is reinforced with para-aramid stitching and a heat-resistant aramid-polyester lining, providing superior elbow-level coverage for extreme industrial environments.',
    benefits: getBenefits('radiantHeatShield', 'highDurability'),
    certifications: getCerts('en3882', 'en4071', 'en12477'),
    features: ['Premium cow split leather construction', 'Aluminised back for radiant heat reflection', 'Heat-resistant aramid-polyester lining', 'Para-aramid stitching for enhanced durability', '400mm total length with 200mm aluminised cuff', 'Elbow-level arm protection'],
    img: 'assets/products/gloves/ter400/thumbnail.png',
    images: ['assets/products/gloves/ter400/gray-orange/1.png', 'assets/products/gloves/ter400/gray-orange/2.png', 'assets/products/gloves/ter400/gray-orange/3.png'],
    colors: [
      { name: 'Gray-Orange', hex: 'linear-gradient(225deg, #4b5563 50%, #fd7e14 50%)', images: ['assets/products/gloves/ter400/gray-orange/1.png', 'assets/products/gloves/ter400/gray-orange/2.png', 'assets/products/gloves/ter400/gray-orange/3.png'] }
    ]
  },
  {
    id: 405,
    cat: 'gloves',
    name: 'TER300',
    brand: 'DeltaPlus',
    tags: ['Heat Resistant', '40cm', 'Cowhide'],
    desc: 'Heat-resistant cowhide welder\'s glove, 40cm length. Provides thermal protection and abrasion resistance for welding, handling hot materials, and furnace operations.',
    certifications: getCerts('en407', 'en388'),
    features: ['Cowhide leather construction', '40cm length for forearm coverage', 'Thermal protection rating', 'Abrasion and tear resistant', 'Extended gauntlet cuff design', 'Suitable for welding and hot material handling'],
    img: 'assets/products/gloves/ter300/thumbnail.png',
    images: ['assets/products/gloves/ter300/blue-orange/1.png', 'assets/products/gloves/ter300/blue-orange/2.png'],
    colors: [
      { name: 'Blue-Orange', hex: 'linear-gradient(225deg, #0d6efd 50%, #fd7e14 50%)', images: ['assets/products/gloves/ter300/blue-orange/1.png', 'assets/products/gloves/ter300/blue-orange/2.png'] }
    ]
  },
  {
    id: 406,
    cat: 'gloves',
    name: 'NITREX VE801',
    brand: 'DeltaPlus',
    tags: ['Nitrile', 'Chemical Resistant', '33cm'],
    desc: 'Cotton flock nitrile glove, 33cm length. Heavy-duty chemical-resistant glove with cotton flock lining for comfort during extended use in chemical handling and industrial cleaning.',
    certifications: getCerts('en388', 'en374'),
    features: ['Full nitrile construction', 'Cotton flock lining for comfort', '33cm length for forearm protection', 'Chemical and solvent resistant', 'Textured grip surface', 'Suitable for chemical industry and cleaning'],
    img: 'assets/products/gloves/nitrex-ve801/thumbnail.png',
    images: ['assets/products/gloves/nitrex-ve801/green/1.png', 'assets/products/gloves/nitrex-ve801/green/2.png', 'assets/products/gloves/nitrex-ve801/green/3.png'],
    colors: [
      { name: 'Green', hex: '#198754', images: ['assets/products/gloves/nitrex-ve801/green/1.png', 'assets/products/gloves/nitrex-ve801/green/2.png', 'assets/products/gloves/nitrex-ve801/green/3.png'] }
    ]
  },
  {
    id: 407,
    cat: 'gloves',
    name: 'PETRO VE766',
    brand: 'DeltaPlus',
    tags: ['Double PVC/Nitrile', 'Chemical', 'Acrylic Lining'],
    desc: 'Double PVC/nitrile coating on acrylic lining glove, gauge 10. Extended-length chemical protection glove for petrochemical, oil & gas, and heavy chemical handling applications.',
    certifications: getCerts('en388', 'en374'),
    features: ['Double PVC/nitrile coating', 'Acrylic lining — gauge 10', 'Chemical and oil resistant', 'Textured finish for grip in wet conditions', 'Suitable for petrochemical and oil & gas', 'Resistant to acids, alkalis, and solvents'],
    img: 'assets/products/gloves/petro-ve766/thumbnail.png',
    images: ['assets/products/gloves/petro-ve766/blue/1.png', 'assets/products/gloves/petro-ve766/blue/2.png', 'assets/products/gloves/petro-ve766/blue/3.png']
  },
  {
    id: 408,
    cat: 'gloves',
    name: 'VE702GR',
    brand: 'DeltaPlus',
    tags: ['Polyamide', 'PU Coating', 'Precision'],
    desc: 'Knitted polyamide glove with PU coating on palm. Excellent tactile sensitivity and dexterity for precision assembly, electronics, and light manufacturing tasks.',
    features: ['Knitted polyamide shell', 'PU coating on palm for grip', 'Excellent tactile sensitivity', 'Lightweight and breathable construction', 'Seamless knit design', 'Suitable for precision assembly and electronics'],
    img: 'assets/products/gloves/ve702gr/thumbnail.png',
    images: ['assets/products/gloves/ve702gr/gray/1.png', 'assets/products/gloves/ve702gr/gray/2.png'],
    colors: [
      { name: 'Gray', hex: '#4b5563', images: ['assets/products/gloves/ve702gr/gray/1.png', 'assets/products/gloves/ve702gr/gray/2.png'] }
    ]
  },
  {
    id: 409,
    cat: 'gloves',
    name: 'VE730',
    brand: 'DeltaPlus',
    tags: ['Polyester', 'Latex Coating', 'General Purpose'],
    desc: 'Polyester glove with latex coating. Versatile general-purpose work glove offering good grip and abrasion resistance for construction, gardening, and general handling tasks.',
    features: ['Polyester knitted shell', 'Latex palm coating for grip', 'Good abrasion resistance', 'Breathable back of hand', 'Comfortable snug fit', 'General purpose industrial and construction use'],
    img: 'assets/products/gloves/ve730/thumbnail.png',
    images: ['assets/products/gloves/ve730/yellow-orange/1.png', 'assets/products/gloves/ve730/yellow-orange/2.png'],
    colors: [
      { name: 'Yellow- Orange', hex: 'linear-gradient(225deg, #eab308 50%, #fd7e14 50%)', images: ['assets/products/gloves/ve730/yellow-orange/1.png', 'assets/products/gloves/ve730/yellow-orange/2.png'] }
    ]
  }
];
