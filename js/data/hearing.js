import { getBenefits, getCerts } from '../data.js';

export const products = [
  {
    id: 600,
    cat: 'hearing',
    name: 'INTERLAGOS LIGHT',
    brand: 'DeltaPlus',
    tags: ['NRR 26dB', 'Lightweight', 'Tiltable'],
    desc: 'Ear defenders with ABS and synthetic foam cups. Lightweight tiltable headband design for prolonged use in moderate noise environments including public works, light industry, maintenance, and automotive sectors.',
    benefits: getBenefits('sustainability', 'hygiene1'),
    certifications: getCerts('ce', 'en3521', 'ansiS319', 'ulArEn3521'),
    features: ['Lightweight tiltable headband', 'NRR 26dB noise reduction rating', 'ABS cup construction with synthetic foam cushions', 'Replacement cushions available', 'Compliant with EN 352-1, ANSI S3.19 & UL-AR EN352-1'],
    img: 'assets/products/hearing/interlagos-light/thumbnail.png',
    images: ['assets/products/hearing/interlagos-light/gray/1.png'],
    colors: [
      { name: 'Gray', hex: '#4b5563', images: ['assets/products/hearing/interlagos-light/gray/1.png'] }
    ]
  },
  {
    id: 601,
    cat: 'hearing',
    name: 'MAGNY HELMET 2',
    brand: 'DeltaPlus',
    tags: ['SNR 30dB', 'Helmet Mounted', 'Quartz'],
    desc: 'Ear defenders suitable for safety helmet Quartz. Mounts directly onto the Quartz helmet series, providing SNR 30dB protection without a separate headband for construction and industrial use.',
    benefits: getBenefits('comfort', 'performance2', 'hygiene1'),
    certifications: getCerts('ce', 'en3523', 'ansiS3191'),
    features: ['Designed for Quartz safety helmet series', 'SNR 30dB sound attenuation', 'Double headband for flexibility', 'High-performance multi-hull attenuation', 'Washable and reusable cushions', 'Compliant with EN 352-3 & ANSI S3.19'],
    img: 'assets/products/hearing/magny-helmet-2/thumbnail.png',
    images: ['assets/products/hearing/magny-helmet-2/black/1.png', 'assets/products/hearing/magny-helmet-2/black/2.png'],
    colors: [
      { name: 'Black', hex: '#000', images: ['assets/products/hearing/magny-helmet-2/black/1.png', 'assets/products/hearing/magny-helmet-2/black/2.png'] }
    ]
  },
  {
    id: 602,
    cat: 'hearing',
    name: 'INTERLAGOS FOLDABLE',
    brand: 'DeltaPlus',
    tags: ['SNR 30dB', 'Foldable', 'ABS'],
    desc: 'Foldable ear defender with double plastic headband. Folds for compact storage. Ideal for public works, building, light industry, maintenance, automotive, and petrochemical sectors.',
    benefits: getBenefits('compact', 'sustainability', 'hygiene2'),
    certifications: getCerts('ce', 'en35211', 'ansiS3192'),
    features: ['Foldable headband for compact storage', 'SNR 30dB noise attenuation', 'ABS cup construction', 'Soft PU foam cushion pads', 'Double plastic (POM) adjustable headband', 'Replaceable hygiene kit cushions', 'Compliant with EN 352-1 & ANSI S3.19'],
    img: 'assets/products/hearing/interlagos-foldable/thumbnail.png',
    images: ['assets/products/hearing/interlagos-foldable/gray/1.png', 'assets/products/hearing/interlagos-foldable/gray/2.png', 'assets/products/hearing/interlagos-foldable/gray/3.png'],
    colors: [
      { name: 'Gray', hex: '#4b5563', images: ['assets/products/hearing/interlagos-foldable/gray/1.png', 'assets/products/hearing/interlagos-foldable/gray/2.png', 'assets/products/hearing/interlagos-foldable/gray/3.png'] }
    ]
  },
  {
    id: 603,
    cat: 'hearing',
    name: 'SUZUKA 2',
    brand: 'DeltaPlus',
    tags: ['NRR 21dB', 'Helmet Mounted', 'Hi-Vis'],
    desc: 'Ear defenders suitable for safety helmet Quartz. Available in black and fluorescent yellow. Suitable for agriculture, public works, building, mining, petrochemical, forestry, and power energy sectors.',
    certifications: getCerts('ce', 'en35231', 'ansiS3193'),
    features: ['Designed for Quartz safety helmet family', 'NRR 21dB noise reduction', 'Available in black and fluorescent yellow', 'Suitable for agriculture, mining, forestry, and construction', 'Compliant with EN 352-3 & ANSI S3.19'],
    img: 'assets/products/hearing/suzuka-2/thumbnail.png',
    images: ['assets/products/hearing/suzuka-2/hivis-yellow/1.png'],
    colors: [
      { name: 'Hi Vis Yellow', hex: '#d7ea08ff', images: ['assets/products/hearing/suzuka-2/hivis-yellow/1.png'] },
      { name: 'Black', hex: '#000', images: ['assets/products/hearing/suzuka-2/black/1.png'] }
    ]
  },
  {
    id: 604,
    cat: 'hearing',
    name: 'CONICFIR050',
    brand: 'DeltaPlus',
    tags: ['SNR 34dB', 'Corded', 'Thermoplastic'],
    desc: 'Thermoplastic reusable earplugs with cord, box of 50 pairs. Built-in firm handle for correct insertion. For daily industrial use in manufacturing, food services, automotive, transportation, and storage sectors.',
    benefits: getBenefits('easyToUse', 'comfort1', 'performance3', 'hygiene3'),
    certifications: getCerts('ce', 'en3522', 'ansiS319'),
    features: ['Thermoplastic with built-in firm handle', 'SNR 34dB attenuation', 'Contoured 3 flange polymer design', 'PVC cord to prevent loss', 'Box of 50 pairs', 'Compliant with EN 352-2 & ANSI S3.19'],
    img: 'assets/products/hearing/conicfir050/thumbnail.png',
    images: ['assets/products/hearing/conicfir050/gray/1.png'],
    colors: [
      { name: 'Gray', hex: '#4b5563', images: ['assets/products/hearing/conicfir050/gray/1.png'] }
    ]
  },
  {
    id: 605,
    cat: 'hearing',
    name: 'SPA 3',
    brand: 'DeltaPlus',
    tags: ['SNR 23dB', 'Low Pressure', 'Ergonomic'],
    desc: 'Ear defenders with low pressure pads. Minimal clamping force design for all-day comfort. Suitable for public works, building, light industry, maintenance, automotive, and petrochemical sectors.',
    benefits: getBenefits('comfort2', 'adjustability'),
    certifications: getCerts('ce', 'en35212', 'ulArEn3521'),
    features: ['SNR 23dB noise attenuation', 'Low pressure pad design', 'Adjustable headband', 'Suitable for prolonged industrial wear', 'Compliant with EN 352-1 & UL-AR EN352-1'],
    img: 'assets/products/hearing/spa-3/thumbnail.png',
    images: ['assets/products/hearing/spa-3/blue-black/1.png'],
    colors: [
      { name: 'Blue-Black', hex: 'linear-gradient(225deg, #1051b3ff 50%, #000 50%)', images: ['assets/products/hearing/spa-3/blue-black/1.png'] }
    ]
  },
  {
    id: 606,
    cat: 'hearing',
    name: 'CONICFIT100',
    brand: 'DeltaPlus',
    tags: ['Reusable', 'Silicone', 'PVC Cord'],
    desc: 'Reusable silicone earplugs with PVC cord, box of 100 pairs. For daily use in public works, events, light industry, maintenance, automotive, public services, transportation, and storage.',
    benefits: getBenefits('easyToUse1', 'comfort1', 'performance4'),
    certifications: getCerts('ce', 'en35221', 'ansiS3191'),
    features: ['Reusable soft silicone construction', 'Contoured 3 flange design', 'PVC cord to prevent misplacement', 'Box of 100 pairs', 'Compliant with EN 352-2 & ANSI S3.19'],
    img: 'assets/products/hearing/conicfit100/thumbnail.png',
    images: ['assets/products/hearing/conicfit100/orange/1.png'],
    colors: [
      { name: 'Orange', hex: '#da6709ff', images: ['assets/products/hearing/conicfit100/orange/1.png'] }
    ]
  },
  {
    id: 607,
    cat: 'hearing',
    name: 'CONIC DISPLAY',
    brand: 'DeltaPlus',
    tags: ['Dispenser', '500 Pairs', 'CONIC500'],
    desc: 'Earplugs dispenser with 500 pairs of CONIC500 disposable earplugs. For high-traffic workplaces where multiple workers need quick access to hearing protection.',
    certifications: getCerts('ce', 'en35221', 'ansiS3191'),
    features: ['Wall-mountable dispenser unit', '500 pairs of CONIC500 disposable earplugs', 'Smooth surface foam for comfort', 'Low pressure design', 'Ideal for transportation and storage sectors', 'Compliant with EN 352-2 & ANSI S3.19'],
    img: 'assets/products/hearing/conic-display/thumbnail.png',
    images: ['assets/products/hearing/conic-display/1.png']
  }
];
