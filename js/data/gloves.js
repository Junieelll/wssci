import { getBenefits, getCerts } from '../data.js';

export const products = [
  {
    id: 400,
    cat: 'gloves',
    name: 'VENICUT41GN',
    brand: 'DeltaPlus',
    tags: ["Cut Resistant","Nitrile Coated","Gauge 15"],
    desc: 'SOFTnocut knitted glove with nitrile-coating palm and reinforcement, gauge 15. SOFTnocut fiber provides excellent cut resistance with lightweight dexterity for oily and greasy environments.',
    features: ["SOFTnocut fiber for cut resistance","Nitrile foam-coated palm for grip","Gauge 15 knitted construction","Long cuff (100mm) for wrist protection","Available in sizes 7-11","Suitable for construction, automotive, and mining"],
    benefits: getBenefits('hygiene', 'performance'),
    certs: [],
    img: 'assets/products/gloves/venicut-41gn/thumbnail.png'
  },
  {
    id: 401,
    cat: 'gloves',
    name: 'DUOCOLOR VE330',
    brand: 'DeltaPlus',
    tags: ["Latex","Household","Flocked Dipped"],
    desc: 'Tight, powder-free latex glove with a double-coated, grip-textured finish and internal flocking for superior comfort. This 300mm forearm-length, dual-color glove features a 0.60mm thickness, providing robust yet flexible protection for cleaning, food handling, and industrial tasks.',
    features: ["Double-coated natural latex construction","Grip-textured pattern for superior grip","Inner flocked finish for comfort","0.60mm thickness and 300mm length","Blue-Yellow dual-color design","Powder-free unsupported design"],
    benefits: getBenefits('durability', 'performance1'),
    certs: [],
    img: 'assets/products/gloves/duocolor-ve330/thumbnail.png'
  },
  {
    id: 402,
    cat: 'gloves',
    name: 'VENICUTB03',
    brand: 'DeltaPlus',
    tags: ["Cut Resistant","Nitrile Coated","Gauge 13"],
    desc: 'Knitted ECONOCUT® glove with nitrile coated palm, gauge 13 — x3 pairs pack. Budget-friendly cut-resistant glove for general industrial handling and construction work.',
    features: ["ECONOCUT® fiber for cut protection","Nitrile-coated palm for grip","Gauge 13 knitted construction","Sold in packs of 3 pairs","Lightweight and breathable","Suitable for light industry and maintenance"],
    benefits: [],
    certs: [],
    img: 'assets/products/gloves/venicutb03/thumbnail.png'
  },
  {
    id: 403,
    cat: 'gloves',
    name: 'CA615K',
    brand: 'DeltaPlus',
    tags: ["Cowhide Leather","Kevlar® Sewn","Welder's Glove"],
    desc: 'Cowhide split leather welder\'s glove with Kevlar® sewn seams. Premium split leather construction for welding, grinding, and high-heat industrial applications with extended gauntlet cuff.',
    features: ["Premium cowhide split leather","Kevlar® sewn seams for durability","Heat-resistant construction","Extended gauntlet cuff","Full leather palm and back protection","Suitable for welding, grinding, and foundry work"],
    benefits: [],
    certs: [],
    img: 'assets/products/gloves/ca615k/thumbnail.png'
  },
  {
    id: 404,
    cat: 'gloves',
    name: 'TERK400',
    brand: 'DeltaPlus',
    tags: ["Kevlar® Preox","Extreme Heat","Welder's Glove"],
    desc: 'High-performance cow split leather welding glove featuring an aluminised back and a 200mm aluminised cuff for maximum radiant heat protection. Designed for heavy-duty welding, this 400mm long glove is reinforced with para-aramid stitching and a heat-resistant aramid-polyester lining, providing superior elbow-level coverage for extreme industrial environments.',
    features: ["Premium cow split leather construction","Aluminised back for radiant heat reflection","Heat-resistant aramid-polyester lining","Para-aramid stitching for enhanced durability","400mm total length with 200mm aluminised cuff","Elbow-level arm protection"],
    benefits: getBenefits('radiantHeatShield', 'highDurability'),
    certs: [],
    img: 'assets/products/gloves/ter400/thumbnail.png'
  },
  {
    id: 405,
    cat: 'gloves',
    name: 'TER300',
    brand: 'DeltaPlus',
    tags: ["Heat Resistant","40cm","Cowhide"],
    desc: 'Heat-resistant cowhide welder\'s glove, 40cm length. Provides thermal protection and abrasion resistance for welding, handling hot materials, and furnace operations.',
    features: ["Cowhide leather construction","40cm length for forearm coverage","Thermal protection rating","Abrasion and tear resistant","Extended gauntlet cuff design","Suitable for welding and hot material handling"],
    benefits: [],
    certs: [],
    img: 'assets/products/gloves/ter300/thumbnail.png'
  },
  {
    id: 406,
    cat: 'gloves',
    name: 'NITREX VE801',
    brand: 'DeltaPlus',
    tags: ["Nitrile","Chemical Resistant","33cm"],
    desc: 'Cotton flock nitrile glove, 33cm length. Heavy-duty chemical-resistant glove with cotton flock lining for comfort during extended use in chemical handling and industrial cleaning.',
    features: ["Full nitrile construction","Cotton flock lining for comfort","33cm length for forearm protection","Chemical and solvent resistant","Textured grip surface","Suitable for chemical industry and cleaning"],
    benefits: [],
    certs: [],
    img: 'assets/products/gloves/nitrex-ve801/thumbnail.png'
  },
  {
    id: 407,
    cat: 'gloves',
    name: 'PETRO VE766',
    brand: 'DeltaPlus',
    tags: ["Double PVC/Nitrile","Chemical","Acrylic Lining"],
    desc: 'Double PVC/nitrile coating on acrylic lining glove, gauge 10. Extended-length chemical protection glove for petrochemical, oil & gas, and heavy chemical handling applications.',
    features: ["Double PVC/nitrile coating","Acrylic lining — gauge 10","Chemical and oil resistant","Textured finish for grip in wet conditions","Suitable for petrochemical and oil & gas","Resistant to acids, alkalis, and solvents"],
    benefits: [],
    certs: [],
    img: 'assets/products/gloves/petro-ve766/thumbnail.png'
  },
  {
    id: 408,
    cat: 'gloves',
    name: 'VE702GR',
    brand: 'DeltaPlus',
    tags: ["Polyamide","PU Coating","Precision"],
    desc: 'Knitted polyamide glove with PU coating on palm. Excellent tactile sensitivity and dexterity for precision assembly, electronics, and light manufacturing tasks.',
    features: ["Knitted polyamide shell","PU coating on palm for grip","Excellent tactile sensitivity","Lightweight and breathable construction","Seamless knit design","Suitable for precision assembly and electronics"],
    benefits: [],
    certs: [],
    img: 'assets/products/gloves/ve702gr/thumbnail.png'
  },
  {
    id: 409,
    cat: 'gloves',
    name: 'VE730',
    brand: 'DeltaPlus',
    tags: ["Polyester","Latex Coating","General Purpose"],
    desc: 'Polyester glove with latex coating. Versatile general-purpose work glove offering good grip and abrasion resistance for construction, gardening, and general handling tasks.',
    features: ["Polyester knitted shell","Latex palm coating for grip","Good abrasion resistance","Breathable back of hand","Comfortable snug fit","General purpose industrial and construction use"],
    benefits: [],
    certs: [],
    img: 'assets/products/gloves/ve730/thumbnail.png'
  }
];
