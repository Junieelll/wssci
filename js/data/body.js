import { getBenefits, getCerts } from '../data.js';

export const products = [
  {
    id: 500,
    cat: 'body',
    name: 'EN400LV',
    brand: 'DeltaPlus',
    tags: ["Rain Suit","PVC Coated","Hi-Vis"],
    desc: 'PVC coated 100% polyester high visibility rain suit. Full-body waterproof protection with fluorescent fabric and reflective bands for workers in foul weather and low-light conditions. Unisex waterproof set with fixed hood, elasticated waist, and 4 exterior pockets.',
    features: ["Canvas — 100% polyester with PVC coating","Fixed hood with shirt collar style","Zipper closure with snap fastener cuffs","Elastic inner wrist and bottom drawstring","Snap fastener trouser bottoms","Waterproof sealed seams","4 exterior pockets (2 flap + 2 hand)","Aeration at back","Unisex waterproof jacket and trousers set"],
    benefits: [],
    certs: [],
    img: 'assets/products/body/en400lv/thumbnail.png'
  },
  {
    id: 501,
    cat: 'body',
    name: 'EASYVIEW',
    brand: 'DeltaPlus',
    tags: ["Hi-Vis","PU Coated","Waterproof Parka"],
    desc: 'High-visibility waterproof parka made from Oxford canvas with 100% polyester and polyurethane coating. Class 3 EN ISO 20471 certified even after 25 washes, with taffeta polyester lining and 160 g/m² fibre filling. Designed for outdoor workers in foul weather and low-light conditions.',
    features: ["Canvas oxford — 100% polyester with PU coating","Taffeta 100% polyester lining with 160 g/m² fibre filling","Fixed retractable hood with low blas collar","Zipper and flap closure with velcro wrist cuffs","2 exterior flap pockets + 1 interior phone pocket","Waterproof sealed seams","High-visibility fluorescent fabric with reflective bands","Unisex high-viz waterproof parka"],
    benefits: getBenefits('sustainability', 'performance'),
    certs: [],
    img: 'assets/products/body/easyview/thumbnail.png'
  },
  {
    id: 502,
    cat: 'body',
    name: 'MA400',
    brand: 'DeltaPlus',
    tags: ["Rain Jacket","PVC Coated","Waterproof"],
    desc: 'PVC coated 100% polyester waterproof raincoat with fixed hood. Unisex raincoat designed for workers exposed to heavy rain, featuring elastic inner wrists, back aeration, and zipper with flap closure for reliable all-weather protection.',
    features: ["Canvas — 100% polyester with PVC coating","Fixed hood with back aeration","Zipper and flap closure","Elastic inner wrist","Waterproof sealed seams","2 exterior flap pockets","Unisex raincoat"],
    benefits: getBenefits('easyviewPerformance'),
    certs: [],
    img: 'assets/products/body/ma400/thumbnail.png'
  },
  {
    id: 503,
    cat: 'body',
    name: 'PALIGHVCO',
    brand: 'DeltaPlus',
    tags: ["100% Cotton","Hi-Vis","Overall"],
    desc: 'Overall with reflector in 100% cotton, 200 g/m². High visibility blue or orange. Features retro-reflective bands for superior visual presence in daylight and night conditions.',
    features: ["100% cotton 200 g/m² fabric","EN ISO 20471 high-visibility","Reflective bands on arms and legs","Multiple tool-staging pockets","Reinforced stitching","Available in blue or orange"],
    benefits: [],
    certs: [],
    img: 'assets/products/body/palighvco/thumbnail.png'
  },
  {
    id: 504,
    cat: 'body',
    name: 'M5VE3',
    brand: 'DeltaPlus',
    tags: ["Work Jacket","Polyester Cotton","Multi-Pocket"],
    desc: 'Unisex work jacket in twill 65% polyester / 35% cotton blend at 245 g/m². Features 7 pockets including a badge-holder, elasticated wrist cuffs, and low blas collar with zipper closure. Compatible with all garments in the M5 range for a complete workwear system.',
    features: ["Twill — 65% polyester / 35% cotton, 245 g/m²","Low blas collar with zipper closure","Elastic lower sleeve with elasticated wrist cuffs","6 exterior pockets (1 zipper, 1 flap, 2 flap gusset, 2 open)","1 interior patch pocket","Badge-holder accessory included","Unisex work jacket"],
    benefits: getBenefits('forestierCompatibility'),
    certs: [],
    img: 'assets/products/body/m5ve3/thumbnail.png'
  },
  {
    id: 505,
    cat: 'body',
    name: 'DT117',
    brand: 'DeltaPlus',
    tags: ["Type 5B/6B","Disposable","Anti-Static"],
    desc: 'DELTATEK 5000 disposable overalls with hood. Type 5B/6B, anti-static, dry particle resistant chemical protective coveralls. Silicone free and latex free.',
    features: ["Fixed hood with elasticated face opening","Double zipper with flap and hook & loop closure","Waterproof zipper construction","Ribbed cuffs for secure fit","63 g/m² — lightweight and breathable","Silicone free and latex free"],
    benefits: getBenefits('chemicalProtection', 'antiStatic'),
    certs: [],
    img: 'assets/products/body/dt117/thumbnail.png'
  }
];
