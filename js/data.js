export const svgs = {
  shoes: `<i class="fa-solid fa-shoe-prints text-3xl"></i>`,
  head: `<i class="fa-solid fa-hard-hat text-3xl"></i>`,
  eye: `<i class="fa-solid fa-glasses text-3xl"></i>`,
  vest: `<i class="fa-solid fa-vest text-3xl"></i>`,
  gloves: `<i class="fa-solid fa-mitten text-3xl"></i>`,
  body: `<i class="fa-solid fa-user-shield text-3xl"></i>`,
  hearing: `<i class="fa-solid fa-headphones text-3xl"></i>`,
  welding: `<i class="fa-solid fa-mask text-3xl"></i>`,
  fall: `<i class="fa-solid fa-link text-3xl"></i>`,
};

export const categories = [
  { id:'shoes', label:'Safety Shoes', icon:svgs.shoes, desc:'Slip-resistant, impact-proof industrial footwear equipped with advanced shock absorption and S3-rated protection.', color:'#27C291' },
  { id:'head', label:'Skull Protection', icon:svgs.head, desc:'High-density thermoplastic hard hats engineered to dissipate extreme kinetic energy from overhead impacts.', color:'#1a9e76' },
  { id:'eye', label:'Eye Protection', icon:svgs.eye, desc:'Anti-scratch, anti-fog polycarbonate eyewear and face shields providing panoramic visibility and UV resistance.', color:'#27C291' },
  { id:'vest', label:'Safety Vest', icon:svgs.vest, desc:'Class 2/3 high-visibility workwear with retro-reflective taping and breathable mesh designed for 24-hour presence.', color:'#1a9e76' },
  { id:'gloves', label:'Gloves', icon:svgs.gloves, desc:'Precision tactile gloves offering Level F cut resistance, robust chemical defense, and superior ergonomic dexterity.', color:'#27C291' },
  { id:'body', label:'Body Protection', icon:svgs.body, desc:'Microporous coveralls, thermal FR gear, and chemical suits certified to shield against hazardous particulate and splash.', color:'#1a9e76' },
  { id:'hearing', label:'Hearing Protection', icon:svgs.hearing, desc:'High-attenuation ear muffs and ergonomic earplugs designed to isolate and dampen sustained industrial decibel extremes.', color:'#27C291' },
  { id:'welding', label:'Welding', icon:svgs.welding, desc:'Auto-darkening active filters, split-leather aprons, and thermal barriers for optimal arc flash and spatter defense.', color:'#1a9e76' },
  { id:'fall', label:'Fall Protection', icon:svgs.fall, desc:'Multi-point full-body harnesses, energy-absorbing lanyards, and carabiners engineered for extreme vertical securement.', color:'#27C291' }
];

export const products = [
  { 
    id:1, 
    cat:'shoes', 
    name:'X1100N S3 WR Safety Boot', 
    brand:'Safety Jogger', 
    tags:['S3', 'SRC', 'WR'], 
    desc:'Engineered for extreme outdoor conditions, the X1100N features a water-resistant leather upper combined with a dual-density PU/PU outsole for unparalleled SRC slip resistance. The composite toe cap (200J) and SJ Flex anti-puncture midsole provide comprehensive protection without the weight of steel. An ergonomic breathable mesh lining and shock-absorbing heel ensure maximum anatomical comfort during prolonged industrial shifts.', 
    features:['Composite toe cap (200J) inside','Puncture resistant SJ Flex midsole','Water-resistant treated heavy leather upper','Slip resistant SRC dual-density outsole', 'Antistatic and oil/fuel resistant properties'], 
    img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80' 
  },
  { 
    id:2, 
    cat:'head', 
    name:'Frontliner V-Guard Pro', 
    brand:'Frontliner', 
    tags:['EN397', 'UV-Resistant'], 
    desc:'High-density polypropylene UV-resistant safety helmet constructed strictly for heavy-duty construction site deployment. Features an advanced ROTOR® adjustment mechanism allowing rapid one-handed tightening from 53 to 63 cm without removing the helmet. The internal polyamide harness utilizes 3 textile bands with 8 primary fixing points to ensure optimal kinetic load distribution. Certified for electrical insulation up to 1000 VAC.', 
    features:['High-density PP shell with UV fortification','ROTOR® micro-adjustment mechanism','8-point load-dispersing textile suspension','Electrical insulation rating: 1000V', 'Integrated moisture-wicking frontal sweatband'], 
    img:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' 
  },
  { 
    id:3, 
    cat:'eye', 
    name:'Vision Guard Anti-Scratch Spec', 
    brand:'Safety Jogger', 
    tags:['EN166', 'Anti-Scratch (K)'], 
    desc:'Ultra-lightweight panoramic polycarbonate spectacles offering an unimpeded 180-degree field of vision. The single-piece rimless lens provides superior ballistic protection against high-speed flying particles. Both inner and outer surfaces are coated with advanced anti-scratch (K) and permanent anti-fog (N) treatments to maintain profound optical clarity in extreme, humid conditions. Features pliable TPR temple arms.', 
    features:['Panoramic single-lens wraparound blueprint','Anti-Fog (N) & extreme Anti-Scratch (K) dual coatings','Soft TPR pressure-free nose element','UV400 total optical filtration technology','Featherweight 26-gram structural threshold'], 
    img:'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80' 
  },
  { 
    id:4, 
    cat:'vest', 
    name:'LumiShield Class 2 Hi-Vis Mesh', 
    brand:'Frontliner', 
    tags:['EN ISO 20471', 'Class 2'], 
    desc:'Precision-engineered high-visibility safety vest maximizing visual presence in active traffic and heavy machinery zones. Fabricated from 120gsm fluorescent polyester mesh, delivering maximal breathability in tropical heat while retaining tensile durability. Employs 50mm premium cross-reflective micro-prismatic tape stitched across the torso and shoulders to guarantee 360-degree reflectivity under strict Class 2 standards.', 
    features:['Class 2 certified reflective luminosity','50mm industrial-grade micro-prismatic tape','Ultra-breathable 120gsm polyester mesh composition','Heavy-duty reinforced zipper fastening mechanism', 'Multiple utility staging pockets for tools'], 
    img:'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80' 
  },
  { 
    id:5, 
    cat:'gloves', 
    name:'Shieldflex Level F Cut Glove', 
    brand:'Safety Jogger', 
    tags:['EN388:2016', 'Level F Cut'], 
    desc:'A masterclass in tactile defense. The Shieldflex utilized an ultra-high molecular weight polyethylene (UHMWPE) shell heavily infused with steel macro-fibers to achieve the absolute maximum ISO 13997 Level F cut resistance. The textured sandy nitrile palm coating delivers exceptional mechanical grip in both dry and heavily oiled condition, while maintaining profound flexibility for intricate metallic handling operations.', 
    features:['Maximum ISO Cut Resistance Level F rating','Sandy nitrile palm matrix for superior oil adhesion','Seamless 13-gauge HPPE/Steel hybrid liner','Touchscreen conductive capacitive fingertips','Reinforced crotch zone between thumb and index'], 
    img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' 
  },
  { 
    id:6, 
    cat:'fall', 
    name:'HAR12 Multipurpose Fall Arrest', 
    brand:'Frontliner', 
    tags:['EN361', '2-Point Anchorage'], 
    desc:'Professional grade suspension and fall arrest harness engineered with high-tenacity 45mm polyester structural webbing. Equipped with 2 crucial fall arrest anchorage points: 1 forged dorsal steel D-ring and 1 sternal point via double loop joining. Features 5 distinct adjustment plates across the chest and thighs for precise ergonomic securement. Substantially reduces and redistributes anatomical shock transfer during a descent halt event.', 
    features:['2 dynamic fall arrest anchor points (Back/Chest)','5-point fully adjustable buckle matrix','High-strength 45mm tear-resistant webbing','Distinct color-coded leg straps for rapid donning','Supports extreme user load capacities up to 140kg'], 
    img:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' 
  },
  { 
    id:7, 
    cat:'body', 
    name:'BioChem Type 5/6 Microporous Suit', 
    brand:'Safety Jogger', 
    tags:['EN13982', 'Type 5/6'], 
    desc:'High-performance disposable protective coverall designed to shield personnel from hazardous solid particulates (Type 5) and light liquid chemical splashes (Type 6). Manufactured using advanced laminating microporous material, providing exceptional fluid resistance while permitting internal moisture vapor transmission. Designed with fully sealed external seams, elasticated wrists/ankles, and a fitted 3-piece ergonomic hood.', 
    features:['Type 5/6 particulate and liquid splash certification','Breathable microporous film lamination technology','Heat-sealed taped seams blocking microscopic agents','2-way front zipper with resealable storm flap','Elasticated anatomical 3-piece hood structure'], 
    img:'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80' 
  },
  { 
    id:8, 
    cat:'hearing', 
    name:'AeroSonic Pro Muffs 33dB', 
    brand:'Frontliner', 
    tags:['EN352-1', 'SNR 33dB'], 
    desc:'Industrial-grade passive over-head ear defenders engineered to isolate inner ears against sustained, hazardous decibel extremes in heavy manufacturing sites. Features a dual-cup acoustic structure filled with high-density noise abating foam, yielding an impressive Single Number Rating (SNR) of 33dB. Features a completely adjustable, dielectric stainless-steel headband wire encased in soft PVC to ensure reliable, continuous comfort.', 
    features:['Massive SNR 33dB acoustic attenuation capability','Dual-density sound dissipating foam inserts','Pliable oversized liquid-filled ear cushions','Dielectric, non-conductive internal headband frame','Telescopic height adjustment for universal fitting'], 
    img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80' 
  },
  { 
    id:9, 
    cat:'welding', 
    name:'ArcShield Auto-Darkening Helmet', 
    brand:'Safety Jogger', 
    tags:['EN175', 'Optical 1/1/1/2'], 
    desc:'State-of-the-art auto-darkening welding helmet powered by a dual solar-cell and lithium-ion hybrid system. Grants instantaneous ocular shielding (reaction time less than 1/25,000s) from aggressive welding arc flashes. Boasts a massive viewing area of 100x60mm with 4 independent optical sensors. Features fully adjustable variable shade from DIN 9 to 13, including specialized sensitivity and delay threshold controls, plus a dedicated continuous grinding mode.', 
    features:['4 independent high-speed arc optical sensors','1/25,000s lightning-fast lens transition speed','DIN 9-13 seamless variable shade configuration','Dual power: Solar panel + replaceable CR2450 battery','Premium 1/1/1/2 optical clarity classification'], 
    img:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' 
  },
  { 
    id:10, 
    cat:'gloves', 
    name:'NitriGuard Heavy Chemical Glove', 
    brand:'Frontliner', 
    tags:['EN374', 'AJKLPT'], 
    desc:'Definitive extended-cuff heavy nitrile gauntlet constructed expressly for rigorous petroleum, acidic, and solvent handling protocols. Operates with a formidable 0.45mm thickness, successfully preventing micro-deterioration or permeability from caustic bases. Integrates an embossed diamond flock-lined interior that actively drastically reduces hand fatigue while channeling perspiration, coupled with aggressive reverse-lozenge palm grooving for maximum grip in absolute liquid saturation.', 
    features:['AJKLPT certified complex chemical resilience','Extended 33cm gauntlet guarding lower forearm','Aggressive raised diamond external palm grip','Anti-microbial internal cotton-flock lining','0.45mm enhanced puncture-defiant thickness'], 
    img:'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&q=80' 
  },
  { 
    id:11, 
    cat:'shoes', 
    name:'Bestboy S3 Leather Work Boot', 
    brand:'Safety Jogger', 
    tags:['S3', 'SRC'], 
    desc:'The undisputed flagship of classic mid-cut industrial safety footwear. The Bestboy features a virtually impenetrable thick-grade split leather upper with robust stitching patterns for long-term construction abuse. Armed with a 200J raw steel toe cap and a solid steel zero-penetration midsole to block severe underfoot hazards. The rugged PU/PU dual layer injection-molded sole delivers profound oil, acid, and mechanical slip resistance (SRC level).', 
    features:['Heavy-duty 200J steel toe impact mechanism','Solid steel anti-penetration bottom plate','Water resistant (WRU) split leather exterior','Dual-density injected PU shock-absorbent outsole','Complies precisely with ASTM F2413:2018 standards'], 
    img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80' 
  },
  { 
    id:12, 
    cat:'head', 
    name:'Climax Mountaineering Helmet', 
    brand:'Frontliner', 
    tags:['EN12492', 'Ventilated'], 
    desc:'Purpose-built, low-profile safety helmet originally engineered for technical rope access and high-altitude rigging operations, matching stringent EN12492 mountaineering specifications. Characterized by a lightweight ABS composition utilizing a high-density expandable polystyrene (EPS) inner shock-absorbing lining. Outfitted with an integrated 4-point chin strap that strictly breaks at 50daN, preventing accidental strangulation while ensuring the helmet will not dislodge during a freefall.', 
    features:['Ventilated ABS dome for extreme altitude heat dissipation','High-density EPS localized inner shock-absorption core','4-point crossing chinstrap with quick-release lock','Four headlamp mounting clips symmetrically positioned','Dial-based precision inner circumference tensioner'], 
    img:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' 
  },
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
    desc: 'SJPH Exclusive Item. Electrical hazard protection shoe engineered with a Barton Action Leather upper and Recycled Mesh lining. Features an Anti Puncture Textile midsole and BASF PU/BASF PU outsole for advanced shock absorption. Fitted with a Composite toecap. Rated SB / PS, SR, SC, WPA, LG, E, CI, FO.', 
    features: ['Upper: Barton Action Leather', 'Lining: Recycled Mesh', 'Midsole: Anti Puncture Textile', 'Outsole: BASF PU/BASF PU', 'Toecap: Composite', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022+A1:2024'], 
    img: 'assets/products/shoes/bestboy_mf_eh.png' 
  },
  { 
    id: 15, 
    cat: 'shoes', 
    name: 'MONTIS S3S', 
    brand: 'Safety Jogger', 
    tags: ['S3S', 'ESD', 'CI'], 
    desc: 'SJPH Exclusive Item. Distinctive dark grey/silver safety shoe featuring a Nubuck Action Leather upper and breathable Mesh lining. Secures the underfoot with an Anti Puncture Textile midsole and PU/PU outsole. Defended by a Composite toecap. Rated S3S / SR, SC, LG, ESD, CI, FO.', 
    features: ['Upper: Nubuck Action Leather', 'Lining: Mesh', 'Midsole: Anti Puncture Textile', 'Outsole: PU/PU', 'Toecap: Composite', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022'], 
    img: 'assets/products/shoes/montis_s3s.png' 
  },
  { 
    id: 16, 
    cat: 'shoes', 
    name: 'SAFETYBOY2', 
    brand: 'Safety Jogger', 
    tags: ['S1P', 'SR', 'FO'], 
    desc: 'SJPH Exclusive Item. Reliable mid-cut safety boot crafted with a Barton Action Leather upper and Mesh lining. Utilizes a heavy-duty Steel midsole and PU outsole for core protection. Protected by a Steel toecap and supported by an SJ Eco footbed. Rated S1 P / SR, FO.', 
    features: ['Upper: Barton Action Leather', 'Lining: Mesh', 'Midsole: Steel', 'Outsole: PU', 'Toecap: Steel', 'Footbed: SJ Eco', 'Norms: ASTM F2413:2018, EN ISO 20345:2022'], 
    img: 'assets/products/shoes/safetyboy2.png' 
  },
  { 
    id: 17, 
    cat: 'shoes', 
    name: 'MODULO S1PS LOW PERF', 
    brand: 'Safety Jogger', 
    tags: ['S1PS', 'ESD', 'NANO CARBON'], 
    desc: 'SJPH Exclusive Item. High-performance low-cut shoe optimized for breathability. Built with a Microfiber upper, Mesh lining, and an Anti Puncture Textile midsole. The BASF PU/BASF PU dual-density outsole provides supreme grip. Features an ultra-light Nano Carbon toecap. Rated S1 PS / SR, SC, ESD, FO.', 
    features: ['Upper: Microfiber', 'Lining: Mesh', 'Midsole: Anti Puncture Textile', 'Outsole: BASF PU/BASF PU', 'Toecap: Nano Carbon', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022+A1:2024, IS 15298 (Part 2): 2016'], 
    img: 'assets/products/shoes/modulo_s1ps_low_perf.png' 
  },
  { 
    id: 18, 
    cat: 'shoes', 
    name: 'ECOCADOR S1P ESD', 
    brand: 'Safety Jogger', 
    tags: ['S1P', 'ESD', 'ECO'], 
    desc: 'SJPH Exclusive Item. Eco-conscious safety shoe constructed with a Knitted Recycled Textile upper and Recycled Mesh lining. Employs a robust Steel midsole and PU/PU outsole. Safeguarded by a Steel toecap. Rated S1 P / SR, ESD, FO.', 
    features: ['Upper: Knitted Recycled Textile', 'Lining: Recycled Mesh', 'Midsole: Steel', 'Outsole: PU/PU', 'Toecap: Steel', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022'], 
    img: 'assets/products/shoes/ecocador_s1p_esd.png' 
  },
  { 
    id: 19, 
    cat: 'shoes', 
    name: 'ECOLOBI S1P LOW TLS', 
    brand: 'Safety Jogger', 
    tags: ['S3S', 'ESD', 'TLS'], 
    desc: 'SJPH Exclusive Item. Tactical low-cut shoe with a TLS (Twist Lock System) closure. Features a Nubuck Action Leather upper, Mesh lining, and an Anti Puncture Textile midsole. The Phylon/Rubber (NBR) outsole delivers superior multi-terrain traction. Protected by a Composite toecap. Rated S3S / SR, SC, LG, ESD, CI, FO.', 
    features: ['Upper: Nubuck Action Leather', 'Lining: Mesh', 'Midsole: Anti Puncture Textile', 'Outsole: Phylon/Rubber (NBR)', 'Toecap: Composite', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022'], 
    img: 'assets/products/shoes/ecolobi_s1p_low_tls.png' 
  },
  { 
    id: 20, 
    cat: 'shoes', 
    name: 'MANILARUN S3', 
    brand: 'Safety Jogger', 
    tags: ['S3', 'SR', 'FO'], 
    desc: 'SJPH Exclusive Item. Dynamic low-cut runner safety shoe with a Barton Action Leather upper and Recycled Mesh lining. Fortified by a Steel midsole and PU/PU outsole. Shielded by a Steel toecap with the comfort of an SJ Foam footbed. Rated S3 / SR, SC, LG, CI, FO.', 
    features: ['Upper: Barton Action Leather', 'Lining: Recycled Mesh', 'Midsole: Steel', 'Outsole: PU/PU', 'Toecap: Steel', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022+A1:2024'], 
    img: 'assets/products/shoes/manilarun_s3.png' 
  },
  { 
    id: 21, 
    cat: 'shoes', 
    name: 'BESTRUN MF EH', 
    brand: 'Safety Jogger', 
    tags: ['SB', 'EH', 'WPA'], 
    desc: 'SJPH Exclusive Item. Electrical hazard low-cut variant of the Bestboy series. Integrates a Barton Action Leather upper with Recycled Mesh lining. Employs an Anti Puncture Textile midsole and BASF PU/BASF PU outsole for high-tier resistance. Secured by a Composite toecap. Rated SB / PS, SR, SC, WPA, LG, E, CI, FO.', 
    features: ['Upper: Barton Action Leather', 'Lining: Recycled Mesh', 'Midsole: Anti Puncture Textile', 'Outsole: BASF PU/BASF PU', 'Toecap: Composite', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022+A1:2024'], 
    img: 'assets/products/shoes/bestrun_mf_eh.png' 
  },
  { 
    id: 22, 
    cat: 'shoes', 
    name: 'VALLIS S3S', 
    brand: 'Safety Jogger', 
    tags: ['S3S', 'ESD', 'CI'], 
    desc: 'SJPH Exclusive Item. Premium low-profile shoe with dark grey/silver aesthetics. Utilizes a Nubuck Action Leather upper and Mesh lining. Bottom-up defense provided by an Anti Puncture Textile midsole and PU/PU outsole. Contains a Composite toecap. Rated S3S / SR, SC, LG, ESD, CI, FO.', 
    features: ['Upper: Nubuck Action Leather', 'Lining: Mesh', 'Midsole: Anti Puncture Textile', 'Outsole: PU/PU', 'Toecap: Composite', 'Footbed: SJ Foam', 'Norms: ASTM F2413:2018, EN ISO 20345:2022'], 
    img: 'assets/products/shoes/vallis_s3s.png' 
  },
  { 
    id: 23, 
    cat: 'shoes', 
    name: 'SAFETYRUN2', 
    brand: 'Safety Jogger', 
    tags: ['S1P', 'SR', 'FO'], 
    desc: 'SJPH Exclusive Item. Agile low-cut runner featuring a durable Barton Action Leather upper and Mesh lining. Outfitted with a Steel midsole, solid PU outsole, and a Steel toecap for uncompromising safety. Rated S1 P / SR, FO.', 
    features: ['Upper: Barton Action Leather', 'Lining: Mesh', 'Midsole: Steel', 'Outsole: PU', 'Toecap: Steel', 'Footbed: SJ Eco', 'Norms: ASTM F2413:2018, EN ISO 20345:2022'], 
    img: 'assets/products/shoes/safetyrun2.png' 
  },
  { 
    id: 24, 
    cat: 'body', 
    name: 'EN400LV High-Vis Rain Suit', 
    brand: 'DeltaPlus', 
    tags: ['EN343', 'Hi-Vis'], 
    desc: 'Professional-grade PVC coated polyester rain suit designed for high visibility in foul weather. Features waterproof seams, a fixed hood, and reflective bands for Class 3 visibility. Ideal for outdoor industrial and road work.', 
    features: ['PVC coated polyester composition','High-visibility fluorescent yellow','Waterproof taped seams','Reflective bands for lower and upper body','Zip fastening with storm flap'], 
    img: 'assets/products/body/en400lv.png' 
  },
  { 
    id: 25, 
    cat: 'body', 
    name: 'EASYVIEW HV Parka', 
    brand: 'DeltaPlus', 
    tags: ['EN ISO 20471', 'Class 3'], 
    desc: 'High-visibility PU coated Oxford polyester parka. Provides exceptional thermal insulation and waterproof protection. Equipped with multiple utility pockets and a concealed hood.', 
    features: ['HV PU coated Oxford polyester','Class 3 reflective luminosity','Fixed hood with drawstring','Internal wadding for thermal protection','Multiple secure storage pockets'], 
    img: 'assets/products/body/easyview.png' 
  },
  { 
    id: 26, 
    cat: 'body', 
    name: 'MA400 Rain Coat', 
    brand: 'DeltaPlus', 
    tags: ['EN343'], 
    desc: 'Long-style PVC coated polyester rain coat providing extended coverage and waterproof defense. Lightweight and flexible design for comfort during active industrial duties.', 
    features: ['PVC coated polyester material','Ventilated back flap','Concealed fixed hood','Elasticated inner cuffs','Sealed waterproof seams'], 
    img: 'assets/products/body/ma400.png' 
  },
  { 
    id: 27, 
    cat: 'body', 
    name: 'PALIGHVCO Hi-Vis Overall', 
    brand: 'DeltaPlus', 
    tags: ['EN ISO 20471', '100% Cotton'], 
    desc: 'High-visibility industrial overall crafted from 100% cotton (200g). Features retro-reflective bands for superior visual signature in daylight and night conditions. Breathable and durable.', 
    features: ['100% high-quality cotton fabric','Reflective bands on arms and legs','Multiple tool-staging pockets','Reinforced stitching for durability','Available in high-visibility orange'], 
    img: 'assets/products/body/palighvco.png' 
  },
  { 
    id: 28, 
    cat: 'body', 
    name: 'M5VE3 Mach Spirit Jacket', 
    brand: 'DeltaPlus', 
    tags: ['60% Cotton', '40% Polyester'], 
    desc: 'Technical work jacket from the Mach Spirit series. Balanced 60/40 cotton-polyester blend (270g/m2) offering high tensile strength and skin-friendly comfort. Reinforced areas for extreme wear.', 
    features: ['Mach Spirit technical blueprint','Heavy-duty 270g/m2 canvas','Reinforced elbows and shoulders','Adjustable cuffs with velcro','Multi-chambered utility pockets'], 
    img: 'assets/products/body/m5ve3.png' 
  },
  { 
    id: 29, 
    cat: 'body', 
    name: 'DT117 Hooded Overalls', 
    brand: 'DeltaPlus', 
    tags: ['Type 5', 'Type 6'], 
    desc: 'Professional disposable overalls with integrated 3-panel hood. Designed to protect against hazardous particulates and light liquid splashes. Elasticated closures for secure fit.', 
    features: ['Type 5/6 particulate and splash barrier','Microporous laminate technology','Elasticated hood, wrists and ankles','Self-adhesive storm flap cover','Silicone-free for painting applications'], 
    img: 'assets/products/body/dt117.png' 
  },
  { 
    id: 30, 
    cat: 'body', 
    name: 'DT300 DELTACHEM Overalls', 
    brand: 'DeltaPlus', 
    tags: ['Chemical Protection', 'Type 3/4/5/6'], 
    desc: 'High-performance chemical protection suit. DELTACHEM multi-layer technology provides specialized defense against organic and inorganic chemicals. Suitable for extreme industrial cleaning.', 
    features: ['Advanced DELTACHEM chemical barrier','Type 3/4/5/6 comprehensive protection','Heat-sealed waterproof seams','Double storm flap with adhesive tape','Maximum chemical permeation resistance'], 
    img: 'assets/products/body/dt300_deltachem.png' 
  },
  { 
    id: 31, 
    cat: 'body', 
    name: 'TABALPV PVC Apron', 
    brand: 'DeltaPlus', 
    tags: ['100% PVC', 'Waterproof'], 
    desc: 'Industrial-grade 100% PVC apron providing a robust barrier against liquids and common chemicals. Ideal for food processing, laboratories, and wet industrial environments.', 
    features: ['Heavy-duty 100% PVC composition','Standard length for torso/leg protection','Easy-clean wipeable surface','Strong neck and waist ties','Resistance to grease and oils'], 
    img: 'assets/products/body/tabalpv.png' 
  },
  { 
    id: 32, 
    cat: 'gloves', 
    name: 'Venicut41GN Cut Resistant', 
    brand: 'DeltaPlus', 
    tags: ['Level D Cut', 'Nitrile Coating'], 
    desc: 'High-performance green polyethylene glove with a specialized nitrile coating on palm and fingertips. Delivers Level D cut protection with exceptional mechanical grip in dry and oily conditions.', 
    features: ['Level D Cut Resistance cert (EN388)','Nitrile coating for enhanced abrasion defense','High-performance polyethylene fiber','Lightweight and breathable for all-day use'], 
    img: 'assets/products/gloves/venicut41gn.png' 
  },
  { 
    id: 33, 
    cat: 'gloves', 
    name: 'Duocolor VE330 Neoprene', 
    brand: 'DeltaPlus', 
    tags: ['Chemical Resistant', 'Neoprene'], 
    desc: 'Two-color neoprene glove with internal cotton flock lining. Specifically designed for chemical handling, offering protection against a wide range of oils, acids, and detergents.', 
    features: ['Dual-tone Neoprene construction','Internal cotton flock lining for comfort','Excellent grip in wet environments','High chemical resistance threshold'], 
    img: 'assets/products/gloves/duocolor_ve330.png' 
  },
  { 
    id: 34, 
    cat: 'gloves', 
    name: 'Venicut B03 Precision', 
    brand: 'DeltaPlus', 
    tags: ['Precision Work', 'Cut Resistance'], 
    desc: 'Ultra-lightweight black cut-resistant glove optimized for precision tasks. Maintains tactile sensitivity while providing robust protection against minor sharp edges.', 
    features: ['Lightweight ergonomic design','Strategic cut-resistant fiber blend','Breathable back for thermal regulation','Reinforced fingertips for durability'], 
    img: 'assets/products/gloves/venicutb03.png' 
  },
  { 
    id: 35, 
    cat: 'gloves', 
    name: 'CA615K Heat Resistant', 
    brand: 'DeltaPlus', 
    tags: ['EN407', 'Heat Level 1'], 
    desc: 'Split leather heat-resistant industrial glove with reinforced Kevlar stitching. Designed for heavy-duty metal handling and thermal exposure tasks.', 
    features: ['Superior split leather quality','Kevlar primary seam stitching','Heat resistance up to 100 degrees C','Extended cuff for wrist protection'], 
    img: 'assets/products/gloves/ca615k.png' 
  },
  { 
    id: 36, 
    cat: 'gloves', 
    name: 'Nitrex VE801 Chemical', 
    brand: 'DeltaPlus', 
    tags: ['Nitrile', 'Diamond Grip'], 
    desc: 'Nitrile chemical-resistant glove featuring a unique diamond-textured grip. Provides superior protection against aggressive chemicals, solvents, and fuels with maximum palm traction.', 
    features: ['100% heavy-duty Nitrile composition','Diamond textured grip for wet/oil handling','Cotton flock lining for perspiration control','High puncture and abrasion resistance'], 
    img: 'assets/products/gloves/nitrex_ve801.png' 
  },
  { 
    id: 37, 
    cat: 'gloves', 
    name: 'Petro VE766 Heavy-Duty PVC', 
    brand: 'DeltaPlus', 
    tags: ['PVC', 'Chemical/Fuel Resistant'], 
    desc: 'Blue PVC coated glove with an orange granular finish for high-traction grip. Engineered specifically for the petrochemical industry and handling of heavy fuels and oils.', 
    features: ['Advanced PVC coating technology','Granular finish for maximum fuel grip','Reinforced for rough handling','Internal cotton lining for added comfort'], 
    img: 'assets/products/gloves/petro_ve766.png' 
  },
  { 
    id: 38, 
    cat: 'gloves', 
    name: 'CA615K Welding Pro', 
    brand: 'DeltaPlus', 
    tags: ['EN12471', 'Type A'], 
    desc: 'Highest-grade leather welding glove designed for professional MIG/MAG/TIG operations. Features reinforced seams and heat-barrier lining for maximum operator safety.', 
    features: ['Heat-shielded split leather','Reinforced thermal seams','Extended gauntlet design','Type A professional welding certification'], 
    img: 'assets/products/gloves/ca615k_welding.png' 
  },
  { 
    id: 39, 
    cat: 'gloves', 
    name: 'TERK400 High Temp', 
    brand: 'DeltaPlus', 
    tags: ['400°C Protection', 'Cut Level E'], 
    desc: 'Specialized thermal protection glove capable of withstanding industrial temperatures up to 400°C. Combines extreme heat defense with high cut resistance (Level E).', 
    features: ['Extreme temperature resistance (400°C)','High cut resistance Level E','Strategic heat-barrier layers','Elasticated cuff for secure fit'], 
    img: 'assets/products/gloves/terk400.png' 
  },
  { 
    id: 40, 
    cat: 'gloves', 
    name: 'TER300 Heat Textile', 
    brand: 'DeltaPlus', 
    tags: ['300°C Protection', 'Textile'], 
    desc: 'Lightweight technical textile glove for handling hot objects up to 300°C. Ideal for bakery, glass manufacturing, and laboratory environments.', 
    features: ['Heat resistance up to 300°C','Textile-based flexibility','Lightweight ergonomic fit','Ambidextrous design'], 
    img: 'assets/products/gloves/ter300.png' 
  },
  { 
    id: 41, 
    cat: 'hearing', 
    name: 'Interlagos Light Earmuffs', 
    brand: 'DeltaPlus', 
    tags: ['SNR 28dB', 'Lightweight'], 
    desc: 'Lightweight double-cup earmuffs with a foldable headband. Delivers high attenuation (SNR 28dB) while maintaining a low weight profile for extended comfort.', 
    features: ['SNR 28dB attenuation rating','Dual-cup technology for sound isolation','Padded foldable universal headband','Soft pressure-relief cushions'], 
    img: 'assets/products/hearing/interlagos_light.png' 
  },
  { 
    id: 42, 
    cat: 'hearing', 
    name: 'Magny Helmet 2 Muffs', 
    brand: 'DeltaPlus', 
    tags: ['SNR 30dB', 'Helmet Mounted'], 
    desc: 'Professional helmet-mounted earmuffs providing robust sound dampening (SNR 30dB). Designed to snap securely into standard safety helmet slots.', 
    features: ['Universal helmet mounting clips','SNR 30dB sound dampening capability','Multi-position pivot arms','Durable ABS structural composition'], 
    img: 'assets/products/hearing/magny_helmet_2.png' 
  },
  { 
    id: 43, 
    cat: 'hearing', 
    name: 'Interlagos Foldable Pro', 
    brand: 'DeltaPlus', 
    tags: ['SNR 33dB', 'Foldable'], 
    desc: 'Pro-series foldable earmuffs with extreme attenuation (SNR 33dB). Built for high-noise industrial environments like airports and construction sites.', 
    features: ['Extreme attenuation SNR 33dB','High-performance foldable chassis','Multi-layer sound damping foam','Premium leather-style cushions'], 
    img: 'assets/products/hearing/interlagos_foldable.png' 
  },
  { 
    id: 44, 
    cat: 'hearing', 
    name: 'Suzuka 2 High-Vis Muffs', 
    brand: 'DeltaPlus', 
    tags: ['SNR 27dB', 'High-Vis'], 
    desc: 'High-visibility helmet-mounted muffs with fluorescent cups. Designed for workers needing both hearing protection and visual presence in busy industrial areas.', 
    features: ['Fluorescent cups for high visibility','SNR 27dB sound isolation','Safe and secure attachment system','Adjustable height for custom fit'], 
    img: 'assets/products/hearing/suzuka_2.png' 
  },
  { 
    id: 45, 
    cat: 'hearing', 
    name: 'Conicfir050 Corded plugs', 
    brand: 'DeltaPlus', 
    tags: ['SNR 30dB', 'Reusable'], 
    desc: 'Reusable silicone corded earplugs with a triple-flange design for comfortable acoustic sealing. Washable and durable for daily industrial use.', 
    features: ['Triple-flange silicone design','SNR 30dB attenuation','PVC cord for loss prevention','Hygienic storage box included'], 
    img: 'assets/products/hearing/conicfir050.png' 
  },
  { 
    id: 46, 
    cat: 'hearing', 
    name: 'SPA 3 Earmuffs', 
    brand: 'DeltaPlus', 
    tags: ['SNR 28dB', 'Ergonomic'], 
    desc: 'Ergonomically designed earmuffs with a focus on pressure distribution. Provides SNR 28dB protection with minimal lateral pressure for maximum user compliance.', 
    features: ['Adjustable metallic headband','SNR 28dB attenuation','Low-pressure sealing rings','High-impact ABS construction'], 
    img: 'assets/products/hearing/spa_3.png' 
  },
  { 
    id: 47, 
    cat: 'hearing', 
    name: 'Conicfit100 Foam Plugs', 
    brand: 'DeltaPlus', 
    tags: ['SNR 37dB', 'Disposable'], 
    desc: 'Disposable polyurethane foam earplugs with ultra-slow expansion for a perfect anatomical fit. Highest level of protection (SNR 37dB).', 
    features: ['Slow-recovery PU foam','Extreme protection SNR 37dB','Smooth surface for easy insertion','Neon orange for visual compliance check'], 
    img: 'assets/products/hearing/conicfit100.png' 
  },
  { 
    id: 48, 
    cat: 'hearing', 
    name: 'Conic Display Dispenser', 
    brand: 'DeltaPlus', 
    tags: ['Workplace Safety', 'Dispenser'], 
    desc: 'Professional earplug dispensing station for high-capacity industrial floors. Ensures hygienic Access to hearing protection for all employees.', 
    features: ['Refillable 500-pair capacity','Easy-turn dispensing mechanism','Transparent cylinder for inventory checks','Can be wall-mounted or table-top'], 
    img: 'assets/products/hearing/conic_display.png' 
  },
  { 
    id: 49, 
    cat: 'fall', 
    name: 'Elara282 Fall Arrest Kit', 
    brand: 'DeltaPlus', 
    tags: ['EN361', 'Ready-to-use'], 
    desc: 'Complete ready-to-use fall arrest kit containing a 2-point harness, energy absorber, and two connectors. Essential for high-altitude industrial maintenance.', 
    features: ['2-point safety harness (back/front)','Energy absorber with 2m lanyard','Storage bag included','Certified EN361 safety protection'], 
    img: 'assets/products/fall/elara282.png' 
  },
  { 
    id: 50, 
    cat: 'fall', 
    name: 'HAR22H 2-Point Harness', 
    brand: 'DeltaPlus', 
    tags: ['EN361', 'Adjustable'], 
    desc: 'Professional 2-point fall arrest harness with five adjustable buckles. Designed for all-day comfort and stability during complex rope access tasks.', 
    features: ['Back and front attachment points','Technical padded shoulder straps','Corrosion-resistant steel buckles','Five-point independent adjustment'], 
    img: 'assets/products/fall/har22h.png' 
  },
  { 
    id: 51, 
    cat: 'fall', 
    name: 'HAR42EL Technical Harness', 
    brand: 'DeltaPlus', 
    tags: ['4-Point', 'Lightweight'], 
    desc: 'Advanced 4-point technical harness featuring lightweight aluminum hardware and breathable comfort padding. Ideal for high-mobility industrial climbing.', 
    features: ['4-point secure anchoring','Lightweight aluminum components','Breathable padding on legs/shoulders','Independently adjustable thigh straps'], 
    img: 'assets/products/fall/har42el.png' 
  },
  { 
    id: 52, 
    cat: 'fall', 
    name: 'TC022 Anchorage Strap', 
    brand: 'DeltaPlus', 
    tags: ['Anchorage', 'Heavy-Duty'], 
    desc: 'Heavy-duty polyester anchorage strap for creating temporary secure points on steel girders or concrete pillars.', 
    features: ['High-tenacity polyester webbing','Certified anchorage connector','Durable protective sleeve','Tested to extreme static loads'], 
    img: 'assets/products/fall/tc022.png' 
  },
  { 
    id: 53, 
    cat: 'fall', 
    name: 'AM002 Locking Carabiner', 
    brand: 'DeltaPlus', 
    tags: ['Zinc-Plated', 'Auto-Lock'], 
    desc: 'Automatic-locking zinc-plated steel carabiner. Features a large gate opening for easy connection to large-diameter anchor points.', 
    features: ['Automatic secure locking gate','Zinc-plated anti-corrosion finish','High-strength forged steel','Large gate opening (20mm)'], 
    img: 'assets/products/fall/am002.png' 
  },
  { 
    id: 54, 
    cat: 'fall', 
    name: 'AN30010 Absorber Lanyard', 
    brand: 'DeltaPlus', 
    tags: ['Energy Absorbing', '2m'], 
    desc: 'Energy-absorbing lanyard equipped with two steel connectors. Designed to reduce impact force during a fall to below 6kN.', 
    features: ['High-capacity energy absorber','Includes two AM002 connectors','2-meter total length','UV-resistant polyester webbing'], 
    img: 'assets/products/fall/an30010.png' 
  },
  { 
    id: 55, 
    cat: 'fall', 
    name: 'TC044 Anchorage Device', 
    brand: 'DeltaPlus', 
    tags: ['Temporary', 'Anchorage'], 
    desc: 'Temporary anchorage device for work in construction and telecommunications. Provides a reliable mobile anchor point on various structural surfaces.', 
    features: ['Multi-surface compatibility','Easy-install manual tensioner','Lightweight structural alloy','UV-resistant webbing straps'], 
    img: 'assets/products/fall/tc044.png' 
  },
  { 
    id: 56, 
    cat: 'fall', 
    name: 'Asdriss2 AN068 Arrester', 
    brand: 'DeltaPlus', 
    tags: ['Guided type', 'Fall arrester'], 
    desc: 'Guided type fall arrester on flexible anchorage line. Automatic locking system ensures immediate arrest in the event of an accidental descent.', 
    features: ['Automatic locking mechanism','Works on flexible anchor lines','Compact and lightweight design','Steel structural integrity'], 
    img: 'assets/products/fall/asdriss2_an068.png' 
  },
  { 
    id: 57, 
    cat: 'eye', 
    name: 'Brava 2 Clear Specs', 
    brand: 'DeltaPlus', 
    tags: ['EN166', 'Universal Fit'], 
    desc: 'Classic clear polycarbonate safety glasses with integrated side protection and adjustable nylon temples. Provides basic impact protection for general industrial tasks.', 
    features: ['Durable polycarbonate lens','Length-adjustable temple arms','Integrated side shielding','Anti-scratch factory coating'], 
    img: 'assets/products/eye/brava2_clear.png' 
  },
  { 
    id: 58, 
    cat: 'eye', 
    name: 'ASO 2 Clear Sport', 
    brand: 'DeltaPlus', 
    tags: ['Sporty Design', 'Anti-Fog'], 
    desc: 'Sporty design safety glasses with anti-fog and anti-scratch coating. Offers a seamless panoramic view with high-comfort nose bridges.', 
    features: ['Panoramic polycarbonate lens','Enhanced anti-fog coating','Soft flexible TPE nose piece','Curved design for perfect face fit'], 
    img: 'assets/products/eye/aso2_clear.png' 
  },
  { 
    id: 59, 
    cat: 'eye', 
    name: 'Kilimandjaro Clear Specs', 
    brand: 'DeltaPlus', 
    tags: ['Wrap-Around', 'EN166'], 
    desc: 'Industry standard wrap-around safety glasses. Provides comprehensive side and frontal protection with a lightweight, minimalist frame.', 
    features: ['Classic wrap-around aesthetics','Featherweight design (25g)','Adjustable tilt temples','UV400 protection filter'], 
    img: 'assets/products/eye/kilimandjaro_clear.png' 
  },
  { 
    id: 60, 
    cat: 'eye', 
    name: 'Vulcano 2 High Impact', 
    brand: 'DeltaPlus', 
    tags: ['High-Impact', 'Adjustable'], 
    desc: 'Heavy-duty safety eyewear designed for high-impact environments. Features reinforced frames and temple length adjustment for a custom secure fit.', 
    features: ['Reinforced high-impact lens','Multi-length temple adjustment','Tilt-capable lens system','Extreme durability rating'], 
    img: 'assets/products/eye/vulcano2_clear.png' 
  },
  { 
    id: 61, 
    cat: 'eye', 
    name: 'Galeras Clear Goggles', 
    brand: 'DeltaPlus', 
    tags: ['Indirect Ventilation', 'Chemical Splash'], 
    desc: 'Professional safety goggles with indirect ventilation. Designed to protect against liquid splashes, dust, and large particles while preventing internal fogging.', 
    features: ['Soft PVC frame for face seal','Indirect ventilation ports','Wide elasticated headband','Polycarbonate high-impact lens'], 
    img: 'assets/products/eye/galeras_clear.png' 
  },
  { 
    id: 62, 
    cat: 'eye', 
    name: 'Fuji 2 Gradient Specs', 
    brand: 'DeltaPlus', 
    tags: ['Gradient Tint', 'Bifocal Opt'], 
    desc: 'Dual-purpose safety eyewear with a gradient tint suitable for transition between indoor and outdoor work environments. Offers high aesthetic appeal and safety.', 
    features: ['Transition gradient lens','Soft flat-profile temples','Integrated ventilation bridge','UV400 filter technology'], 
    img: 'assets/products/eye/fuji2_gradient.png' 
  },
  { 
    id: 63, 
    cat: 'eye', 
    name: 'Hekla 2 Rimless', 
    brand: 'DeltaPlus', 
    tags: ['Rimless', 'Ultralight'], 
    desc: 'Modern rimless safety glasses for an unobstructed field of vision. The ultralight design eliminates pressure points on the nose and temples.', 
    features: ['Minimalist rimless construction','Wide peripheral field of view','Featherweight 22g chassis','Anti-slip comfort tips'], 
    img: 'assets/products/eye/hekla2.png' 
  },
  { 
    id: 64, 
    cat: 'eye', 
    name: 'Iraya Smoke Specs', 
    brand: 'DeltaPlus', 
    tags: ['Smoke Tint', 'UV400'], 
    desc: 'Premium smoke-tinted safety glasses optimized for outdoor use in bright sunlight. Provides maximum UV protection and glare reduction.', 
    features: ['Smoke tint for glare reduction','High-comfort TPE nose bridge','Stylish aerodynamic temples','EN172 solar filter cert'], 
    img: 'assets/products/eye/iraya_smoke.png' 
  },
  { 
    id: 65, 
    cat: 'eye', 
    name: 'Toba 3 Welding Goggles', 
    brand: 'DeltaPlus', 
    tags: ['Shade 5', 'Flip-up'], 
    desc: 'Flip-up welding goggles with shade 5 circular lenses. Designed for gas welding and brazing, allowing the user to inspect work without removing the frame.', 
    features: ['Shade 5 dark filter lenses','Liftable front for visual checks','Indirect ventilation system','Soft face-forming seal'], 
    img: 'assets/products/eye/toba_3_t5.png' 
  },
  { 
    id: 66, 
    cat: 'welding', 
    name: 'Barrier 2 Auto-Darkening Hood', 
    brand: 'DeltaPlus', 
    tags: ['Solar Powered', 'Shade 9-13'], 
    desc: 'High-tech auto-darkening welding helmet. Rapid sensor-based switching from light to dark state protects against intense arc flashes. Ergonomically balanced for long welding shifts.', 
    features: ['Auto-darkening active filter','Shade 9-13 adjustable intensity','Solar-powered with battery backup','Sensitivity and delay control knobs'], 
    img: 'assets/products/welding/barrier_2.png' 
  },
  { 
    id: 67, 
    cat: 'welding', 
    name: 'CASOUD 3 Flip Shield', 
    brand: 'DeltaPlus', 
    tags: ['Polypropylene', 'Shade 11'], 
    desc: 'Manual flip-up welding shield crafted from durable polypropylene. Features a standard shade 11 lens for reliable eye protection during stick and TIG welding.', 
    features: ['Durable heat-resistant polypropylene','Flip-up lift-front design','Standard shade 11 filter','Impact-resistant clear inner lens'], 
    img: 'assets/products/welding/casoud_3.png' 
  },
  { 
    id: 68, 
    cat: 'welding', 
    name: 'CASOUD2HE Helmet System', 
    brand: 'DeltaPlus', 
    tags: ['Integrated', 'Head Protection'], 
    desc: 'Integrated safety system combining a industrial safety helmet with a fold-up welding shield. Perfect for manufacturing sites requiring both head and eye safety.', 
    features: ['Seamless helmet/shield integration','High-impact head protection','Easy-lift welding shield front','Breathable suspension system'], 
    img: 'assets/products/welding/casoud2he.png' 
  },
  { 
    id: 69, 
    cat: 'welding', 
    name: 'UV Filter Screen', 
    brand: 'DeltaPlus', 
    tags: ['Transparent', 'UV Filter'], 
    desc: 'Transparent UV-filter welding screen for workshop demarcation. Protects surrounding personnel from harmful UV/IR radiation while maintaining visibility.', 
    features: ['Transparent orange UV filter','Heavy-duty flame-retardant PVC','Reinforced edge eyelets','Strategic light filtration cert'], 
    img: 'assets/products/welding/screen.png' 
  }


];

export const marqueeItems = categories.map(c => c.label);
