import { products, categories } from '../data.js';
import { setupScrollReveal } from '../utils.js';

// Lucide SVG icon strings — 24x24, stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
const ICONS = {
  // certifications / standards
  badge:        `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  // shoe upper / leather / material / fabric
  shirt:        `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/></svg>`,
  // lining / layers / midsole
  layers:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 10 6.5v7L12 22 2 15.5v-7z"/><path d="M12 22v-6.5"/><path d="m22 8.5-10 7-10-7"/></svg>`,
  // outsole / sole / grip / traction
  footprints:   `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-2.38C4 11.5 2.97 10.43 3 8c.03-2.54 1.38-5 3.5-5C9 3 9 4.5 9 5s-1 2-1 4 1 4 1 6"/><path d="M4 16v2h1v2h2v-2h4v-2.38"/><path d="M20 8v-2.38C20 3.5 18.62 3 17.5 3 15.38 3 14.03 5.46 14 8c-.03 2.43-1 3.5-1 5.62V16"/><path d="M20 8v2h-1v2h-2v-2h-4V8"/></svg>`,
  // toecap / shield / protection
  shield:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  // footbed / cushion / comfort
  sparkles:     `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/></svg>`,
  // electrical / ESD / static / dielectric
  zap:          `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
  // waterproof / sealed / water-resistant
  dropletOff:   `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 5.15-11.73L12 4 6.85 10.27A7 7 0 0 0 12 22z"/><line x1="2" y1="2" x2="22" y2="22"/></svg>`,
  // chemical / flask / oil / solvent
  flask:        `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 9 4.5 19.5c-.35.6.1 1.5.82 1.5h13.36c.72 0 1.17-.9.82-1.5L14 9"/><path d="M10 3v6"/><path d="M14 3v6"/></svg>`,
  // breathable / ventilation / airflow
  wind:         `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
  // hearing / SNR / NRR / attenuation / dB
  volumeX:      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
  // headband / adjustable
  sliders:      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
  // replaceable / reusable / recycling
  refreshCw:    `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
  // cord / link / connected
  link:         `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  // earplug / insertion / handle
  mousePointer: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 4 7.07 17 2.51-7.39L21 11.07z"/></svg>`,
  // foldable / compact
  minimize:     `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg>`,
  // dispenser / box / bulk pack
  package:      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
  // helmet / hard hat / head protection
  hardHat:      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a8 8 0 0 1 16 0v3"/></svg>`,
  // hi-vis / reflective / warning / visibility
  alertTriangle:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
  // ratchet / adjustment / gear / harness
  settings:     `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  // visor / face shield / eye cover
  eye:          `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  // anti-scratch / anti-reflection
  eyeOff:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/></svg>`,
  // UV / sun protection / solar
  sun:          `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  // glasses / lens / polycarbonate
  glasses:      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M2 15a8.354 8.354 0 0 1 4 0"/><path d="M14 15a8.354 8.354 0 0 1 4 0"/><path d="M10 15a8.354 8.354 0 0 1 4 0"/></svg>`,
  // wrap-around / panoramic / wide field
  maximize:     `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>`,
  // flip-up / lift-front
  flipUp:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>`,
  // tint / shade / gradient lens
  contrast:     `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20z"/></svg>`,
  // cut resistance / scissors
  scissors:     `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
  // glove / hand / palm
  hand:         `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`,
  // grip / texture / friction
  grip:         `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><circle cx="19" cy="5" r="1"/><circle cx="5" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="19" cy="19" r="1"/><circle cx="5" cy="19" r="1"/></svg>`,
  // thermal / heat / temperature
  thermometer:  `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`,
  // cuff / arm length / forearm
  ruler:        `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>`,
  // powder-free / no X / ban
  ban:          `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>`,
  // food / utensils / food-safe
  utensils:     `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
  // coverall / person / body
  person:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v7"/><path d="m8 18 4-4 4 4"/><path d="M8 22h8"/></svg>`,
  // hood / head wrap
  user:         `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>`,
  // zip / fastening / closure
  zipper:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18"/><path d="M3 21h18"/><path d="M12 3v18"/><path d="M3 12h18"/></svg>`,
  // pocket / bag
  pocket:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 3 20 3 20 21 4 21 4 3"/><polyline points="4 9 20 9"/><polyline points="9 21 9 9"/></svg>`,
  // reinforced / stitching / nodes
  network:      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>`,
  // chemical protection / shield-biohazard
  biohazard:    `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="11.9" r="2"/><path d="M6.7 3.4c-.9 2.5.4 5.3 2.9 6.3A5 5 0 0 1 6.7 3.4z"/><path d="m8.8 3a5 5 0 0 1 6.4 0"/><path d="M17.3 3.4a5 5 0 0 1-2.9 6.3 5 5 0 0 1 2.9-6.3z"/><path d="M6.7 20.6a5 5 0 0 1 2.9-6.3 5 5 0 0 1-2.9 6.3z"/><path d="M8.8 21a5 5 0 0 1-3.4-6.1"/><path d="M17.3 20.6a5 5 0 0 1-6.4 0"/><path d="M15.2 14.3a5 5 0 0 1 2.9 6.3"/><path d="M18.6 14.9A5 5 0 0 1 15.2 21"/></svg>`,
  // auto-darkening / contrast / filter
  // welding processes / flame / arc
  flame:        `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  // anchorage / anchor
  anchor:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`,
  // rope / webbing / lanyard
  ropeIcon:     `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12c0 4.4 3.6 8 8 8"/><path d="M20 12c0-4.4-3.6-8-8-8"/><path d="M12 4c-1.3 3-2 6.5-2 9 0 3.5 1 6 2 6s2-2.5 2-6c0-2.5-.7-6-2-9z"/></svg>`,
  // buckle / strap / adjust
  // carabiner / lock
  lock:         `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  // weight / load rating
  weight:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/></svg>`,
  // rescue / emergency / kit
  medkit:       `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M9 12h6"/><path d="M12 9v6"/></svg>`,
  // universal fit / all people
  users:        `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  // descender / figure-eight / rope access
  infinity:     `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4z"/><path d="M12 12c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z"/></svg>`,
  // fall arrest / falling
  arrowDown:    `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>`,
  // connector / plug / termination
  plug:         `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8H6a2 2 0 0 0-2 2v3a6 6 0 0 0 12 0v-3a2 2 0 0 0-2-2Z"/></svg>`,
  // lightweight / feather
  feather:      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>`,
  // comfort / ergonomic / all-day
  heart:        `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  // colors / palette
  palette:      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  // compatible / check / universal
  checkCircle:  `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  // brim / umbrella / rain
  umbrella:     `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/></svg>`,
  // default / generic dot
  dot:          `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/></svg>`,
};

const getFeatureIcon = (text) => {
  const t = text.toLowerCase();

  // ── Certifications / Standards / Norms ──
  if (t.includes('norms:') || t.includes('astm') || t.includes('en iso') || t.includes('certif') || t.includes('compliant') || t.match(/\ben \d/)) return ICONS.badge;

  // ── Shoe upper / leather / textile material ──
  if (t.startsWith('upper:') || t.includes('leather') || t.includes('nubuck') || t.includes('microfiber') || t.includes('knitted recycled') || t.includes('polyester and cotton') || t.includes('suede') || t.includes('cowhide') || t.includes('canvas')) return ICONS.shirt;

  // ── Lining ──
  if (t.startsWith('lining:') || t.includes('mesh lining') || t.includes('fur lining') || t.includes('flocked') || t.includes('acrylic lining') || t.includes('cotton flock') || t.includes('aramid-polyester lining')) return ICONS.layers;

  // ── Midsole / anti-perforation ──
  if (t.startsWith('midsole:') || t.includes('anti puncture') || t.includes('steel midsole') || t.includes('anti-perforation')) return ICONS.layers;

  // ── Outsole / slip resistance / sole ──
  if (t.startsWith('outsole:') || t.includes('slip-resistant') || t.includes('src slip') || t.includes('sra slip') || t.includes('pu/pu') || t.includes('pu outsole') || t.includes('rubber outsole') || t.includes('phylon/rubber')) return ICONS.footprints;

  // ── Toecap ──
  if (t.startsWith('toecap:') || t.includes('steel toecap') || t.includes('composite toecap') || t.includes('nano carbon') || t.includes('toecap')) return ICONS.shield;

  // ── Footbed / insole / cushion / shock absorb ──
  if (t.startsWith('footbed:') || t.includes('footbed') || t.includes('insole') || t.includes('energy-absorbing heel') || t.includes('shock-absorb') || t.includes('sj foam') || t.includes('sj eco')) return ICONS.sparkles;

  // ── Electrical / ESD / static / dielectric ──
  if (t.includes('esd') || t.includes('anti-static') || t.includes('antistatic') || t.includes('electrical hazard') || t.includes('dielectric')) return ICONS.zap;

  // ── Waterproof / water-resistant / sealed seams ──
  if (t.includes('waterproof') || t.includes('water-resistant') || t.includes('sealed seam') || t.includes('taped seam') || t.includes('liquid proof') || t.includes('total waterproof')) return ICONS.dropletOff;

  // ── Chemical / solvent / oil / acid ──
  if (t.includes('chemical') || t.includes('solvent') || t.includes('acid') || t.includes('alkali') || t.includes('oil resistant') || t.includes('fuel') || t.includes('grease')) return ICONS.flask;

  // ── Breathable / ventilation / airflow / mesh ──
  if (t.includes('breathable') || t.includes('ventilat') || t.includes('air flow') || (t.includes('mesh') && !t.includes('lining'))) return ICONS.wind;

  // ── Hearing / SNR / NRR / attenuation / dB ──
  if (t.includes('snr') || t.includes('nrr') || t.includes('attenuat') || t.includes(' db') || t.includes('noise reduction') || t.includes('hearing protection')) return ICONS.volumeX;

  // ── Headband / adjustable / tiltable ──
  if (t.includes('headband') || t.includes('tiltable') || t.includes('adjustable headband') || t.includes('ratchet') || t.includes('adjustable harness') || t.includes('six-point suspension')) return ICONS.sliders;

  // ── Replaceable / reusable / hygiene kit ──
  if (t.includes('replaceable') || t.includes('replacement cushion') || t.includes('hygiene kit') || t.includes('washable') || t.includes('reusable')) return ICONS.refreshCw;

  // ── Cord / link ──
  if (t.includes('pvc cord') || t.includes(' cord') || t.includes('chin strap') || t.includes('four-point')) return ICONS.link;

  // ── Earplug insertion / firm handle / flange ──
  if (t.includes('earplug') || t.includes('3 flange') || t.includes('insertion') || t.includes('firm handle')) return ICONS.mousePointer;

  // ── Foldable / compact ──
  if (t.includes('foldable') || t.includes('fold') || t.includes('compact storage')) return ICONS.minimize;

  // ── Dispenser / bulk box / wall-mount ──
  if (t.includes('dispenser') || t.includes('wall-mount') || t.includes('500 pairs') || t.includes('box of') || t.includes('pack of') || t.includes('sold in')) return ICONS.package;

  // ── Helmet-mounted / mounts on quartz ──
  if (t.includes('quartz') || t.includes('mounts on') || t.includes('designed for quartz') || t.includes('safety helmet') || t.includes('bump cap') || t.includes('abs shell') || t.includes('polypropylene') || t.includes('hdpe') || t.includes('thermoplastic shell')) return ICONS.hardHat;

  // ── Hi-vis / reflective / fluorescent ──
  if (t.includes('hi-vis') || t.includes('high-vis') || t.includes('fluorescent') || t.includes('reflective') || t.includes('retro-reflect') || t.includes('en iso 20471')) return ICONS.alertTriangle;

  // ── Helmet adjustment / ratchet / harness / suspension ──
  if (t.includes('ratchet') || t.includes('harness system') || t.includes('suspension') || t.includes('adjustable harness')) return ICONS.settings;

  // ── Visor / face shield ──
  if (t.includes('visor') || t.includes('face shield') || t.includes('face visor') || t.includes('polycarbonate visor') || t.includes('mesh face')) return ICONS.eye;

  // ── Brim / rain / sun deflect ──
  if (t.includes('brim') || t.includes('rain deflect')) return ICONS.umbrella;

  // ── Anti-scratch / anti-reflection / anti-fog coatings ──
  if (t.includes('anti-scratch') || t.includes('anti-reflection') || t.includes('anti-fog') || t.includes(' as coat') || t.includes(' ab coat') || t.includes(' am coat') || t.includes(' ar coat')) return ICONS.eyeOff;

  // ── UV / sun protection ──
  if (t.includes('uv400') || t.includes('uv protect') || t.includes('uv filter') || t.includes('sun protect')) return ICONS.sun;

  // ── Lenses / polycarbonate / glasses ──
  if ((t.includes('polycarbonate') && t.includes('lens')) || t.includes('lens') || t.includes('over-glass') || t.includes('surlunette') || t.includes('corrective')) return ICONS.glasses;

  // ── Panoramic / wrap-around / peripheral ──
  if (t.includes('wrap-around') || t.includes('wraparound') || t.includes('panoramic') || t.includes('lateral shield') || t.includes('peripheral')) return ICONS.maximize;

  // ── Flip-up / lift-front ──
  if (t.includes('flip-up') || t.includes('lift-front') || t.includes('lift-up')) return ICONS.flipUp;

  // ── Temple / nose piece / adjustable tilt ──
  if (t.includes('temple') || t.includes('nose piece') || t.includes('nose bridge') || t.includes('adjustable tilt') || t.includes('soft flat')) return ICONS.sliders;

  // ── Tint / shade / gradient ──
  if (t.includes('smoke tint') || t.includes('gradient') || t.includes('tint') || t.includes('shade')) return ICONS.contrast;

  // ── Cut resistance ──
  if (t.includes('cut resist') || t.includes('softnocut') || t.includes('econocut')) return ICONS.scissors;

  // ── Glove / palm coating / hand ──
  if ((t.includes('nitrile') || t.includes('latex') || t.includes('pu coat')) && (t.includes('coat') || t.includes('palm'))) return ICONS.hand;

  // ── Gauge / knitted construction ──
  if (t.includes('gauge') || t.includes('knitted')) return ICONS.grip;

  // ── Tactile / dexterity / precision ──
  if (t.includes('tactile') || t.includes('dexterity') || t.includes('precision') || t.includes('assembly')) return ICONS.mousePointer;

  // ── Cuff / gauntlet / forearm length ──
  if (t.includes('cuff') || t.includes('gauntlet') || t.includes('forearm') || t.includes('arm protection') || t.match(/\d+\s*cm length/)) return ICONS.ruler;

  // ── Grip / textured surface ──
  if (t.includes('grip') || t.includes('textured') || t.includes('traction')) return ICONS.grip;

  // ── Heat resistant / thermal / radiant / aluminised ──
  if (t.includes('heat-resistant') || t.includes('thermal protect') || t.includes('radiant heat') || t.includes('aluminised') || t.includes('furnace')) return ICONS.thermometer;

  // ── Kevlar / aramid / para-aramid ──
  if (t.includes('kevlar') || t.includes('para-aramid') || t.includes('aramid')) return ICONS.network;

  // ── Powder-free / silicone-free / latex-free ──
  if (t.includes('powder-free') || t.includes('latex-free') || t.includes('silicone free')) return ICONS.ban;

  // ── Food safe / food contact ──
  if (t.includes('food contact') || t.includes('food handling') || t.includes('food industry')) return ICONS.utensils;

  // ── Coverall / overall / disposable ──
  if (t.includes('coverall') || t.includes('overall') || t.includes('disposable')) return ICONS.person;

  // ── Hood / face opening ──
  if (t.includes('hood') || t.includes('elasticated face opening')) return ICONS.user;

  // ── Zipper / closure / hook & loop ──
  if (t.includes('zipper') || t.includes('zip fastening') || t.includes('hook & loop')) return ICONS.zipper;

  // ── Pockets ──
  if (t.includes('pocket') || t.includes('tool-staging')) return ICONS.pocket;

  // ── Reinforced / stitching ──
  if (t.includes('reinforced') || t.includes('stitching')) return ICONS.network;

  // ── Cotton / polyester / g/m² ──
  if (t.includes('cotton') || t.includes('polyester') || t.includes('g/m²') || t.includes('canvas fabric')) return ICONS.shirt;

  // ── Apron / wipeable / easy-clean ──
  if (t.includes('apron') || t.includes('wipeable') || t.includes('easy-clean')) return ICONS.ban;

  // ── Type 3/4/5/6 chemical protection / biological ──
  if (t.includes('type 5') || t.includes('type 6') || t.includes('type 3') || t.includes('type 4') || t.includes('dry particle') || t.includes('limited liquid') || t.includes('biological')) return ICONS.biohazard;

  // ── Auto-darkening / darkening filter / contrast ──
  if (t.includes('auto-darkening') || t.includes('darkening filter') || t.includes('active filter') || t.includes('passive filter') || t.includes('passive lens') || (t.includes('shade') && t.includes('filter'))) return ICONS.contrast;

  // ── Solar / battery backup ──
  if (t.includes('solar') || t.includes('battery backup')) return ICONS.sun;

  // ── Sensitivity / delay control / welding controls ──
  if (t.includes('sensitivity') || t.includes('delay control')) return ICONS.sliders;

  // ── Welding process / arc / MIG / TIG ──
  if (t.includes('mig') || t.includes('tig') || t.includes('mma') || t.includes('arc') || t.includes('welding process') || t.includes('brazing')) return ICONS.flame;

  // ── Anchorage point / anchor ──
  if (t.includes('anchorage point') || t.includes('anchorage line') || t.includes('anchor')) return ICONS.anchor;

  // ── Lanyard / energy absorber ──
  if (t.includes('lanyard') || t.includes('energy absorber') || t.includes('energy-absorb')) return ICONS.link;

  // ── Webbing / rope / braided ──
  if (t.includes('polyester webbing') || t.includes('high-tenacity') || t.includes('braided rope') || t.includes('webbing') || t.includes('lifeline')) return ICONS.ropeIcon;

  // ── Buckle / strap ──
  if (t.includes('buckle') || t.includes('leg strap') || t.includes('shoulder strap') || t.includes('chest strap')) return ICONS.sliders;

  // ── Arrest force / load rating / static load ──
  if (t.includes('arrest force') || t.includes('6kn') || t.includes('load rating') || t.includes('static load')) return ICONS.weight;

  // ── Karabiner / carabiner / lock gate ──
  if (t.includes('karabiner') || t.includes('carabiner') || t.includes('auto-locking gate') || t.includes('fall arrester') || t.includes('automatic lock') || t.includes('locks instantly')) return ICONS.lock;

  // ── Galvanized / corrosion resistant ──
  if (t.includes('corrosion') || t.includes('galvanized')) return ICONS.shield;

  // ── Rescue / evacuation / emergency ──
  if (t.includes('rescue') || t.includes('evacuation') || t.includes('emergency') || t.includes('quick donning')) return ICONS.medkit;

  // ── Universal fit / all sizes ──
  if (t.includes('universal fit') || t.includes('all size')) return ICONS.users;

  // ── Descender / figure-of-eight / rope access ──
  if (t.includes('figure-of-eight') || t.includes('figure of eight') || t.includes('descender') || t.includes('rope access')) return ICONS.infinity;

  // ── Fall arrest / fall protection ──
  if (t.includes('fall arrest') || t.includes('fall protect') || t.includes('vertical lifeline')) return ICONS.arrowDown;

  // ── Connector / termination / plug ──
  if (t.includes('termination') || t.includes('connector')) return ICONS.plug;

  // ── Lightweight / featherweight / aluminum ──
  if (t.includes('lightweight') || t.includes('featherweight') || (t.includes('lightweight') && t.includes('aluminum'))) return ICONS.feather;

  // ── Comfort / ergonomic / all-day ──
  if (t.includes('comfort') || t.includes('ergonomic') || t.includes('all-day')) return ICONS.heart;

  // ── Colors / multiple colors ──
  if (t.includes('multiple color') || (t.includes('available in') && t.includes('color'))) return ICONS.palette;

  // ── Compatible / universal / check ──
  if (t.includes('universal') || t.includes('compatible') || t.includes('suitable for')) return ICONS.checkCircle;

  return ICONS.dot;
};

export const ProductDetail = {
  render: (id) => {
    const p = products.find(x => x.id === parseInt(id));
    if (!p) {
      return `
        <section class="py-28 min-h-screen pt-32 text-center flex flex-col items-center justify-center gap-4">
          <div class="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center mb-2">
            <i class="fa-solid fa-box-open text-brand text-3xl"></i>
          </div>
          <h2 class="font-display font-800 text-4xl mb-2">Product Not Found</h2>
          <p class="text-ink-3 font-body">This product doesn't exist or may have been removed.</p>
          <a href="#/products" class="btn-primary mt-4">Browse All Products</a>
        </section>
      `;
    }

    const catObj = categories.find(c => c.id === p.cat);
    const catLabel = catObj ? catObj.label : 'General';
    const hasBenefits = p.benefits && p.benefits.length > 0;
    const hasCerts = p.certifications && p.certifications.length > 0;

    // Determine which tabs to show
    const tabs = [];
    if (hasBenefits) tabs.push({ id: 'benefits', label: 'Key Benefits', icon: 'fa-star' });
    tabs.push({ id: 'specs', label: 'Specifications', icon: 'fa-list-check' });
    if (hasCerts) tabs.push({ id: 'certs', label: 'Certifications', icon: 'fa-award' });

    const firstTab = tabs[0]?.id || 'specs';

    // ── Colors & Sizes ──
    // Use product data if available, otherwise fall back to placeholder
    const colors = p.colors && p.colors.length > 0 ? p.colors : [
      { name: 'Black',      hex: '#1a1a1a', img: null },
      { name: 'White',      hex: '#f5f5f5', img: null },
      { name: 'Safety Red', hex: '#e03131', img: null },
      { name: 'Hi-Vis Yellow', hex: '#f5c800', img: null },
    ];
    const sizes = p.sizes && p.sizes.length > 0 ? p.sizes : [
      'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'
    ];
    const hasVariants = colors.length > 0 || sizes.length > 0;

    // Related products — same category, exclude current
    const related = products.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);

    return `
    <div id="product-detail-container" class="bg-surface overflow-hidden">

      <!-- ══ HERO BANNER ══ -->
      <div class="bg-gradient-to-br from-brand-light via-surface to-surface-2 border-b border-brand-muted/20">
        <div class="max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-6">
          <!-- Breadcrumb -->
          <nav class="flex text-xs text-ink-3 font-body mb-6">
            <ol class="flex items-center flex-wrap gap-y-1 gap-x-2">
              <li><a href="#/" class="hover:text-brand transition-colors">Home</a></li>
              <li><i class="fa-solid fa-chevron-right text-[9px] opacity-30"></i></li>
              <li><a href="#/products" class="hover:text-brand transition-colors">Products</a></li>
              <li><i class="fa-solid fa-chevron-right text-[9px] opacity-30"></i></li>
              <li><a href="#/products?filter=${p.cat}" class="hover:text-brand transition-colors">${catLabel}</a></li>
              <li><i class="fa-solid fa-chevron-right text-[9px] opacity-30"></i></li>
              <li class="text-brand font-700 truncate max-w-[160px]">${p.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- ══ MAIN CONTENT ══ -->
      <div class="max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-20
                  pb-32"><!-- extra bottom padding so sticky CTA doesn't overlap content -->

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">

          <!-- ── LEFT: IMAGE ── -->
          <div class="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div class="reveal relative group">
              <!-- Ambient glow -->
              <div class="absolute -inset-6 bg-brand/8 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

              <!-- Image card -->
              <div class="relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.07)] border border-brand-muted/15 aspect-square flex items-center justify-center p-8">
                <img src="${p.img}" alt="${p.name}"
                     onerror="this.src='https://images.unsplash.com/photo-1584467735815-f778f274e296?w=600&q=80'; this.classList.add('opacity-30')"
                     class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700">

                <!-- Tag pills on image -->
                <div class="absolute top-5 left-5 flex flex-col gap-2">
                  ${p.tags.slice(0, 2).map(t => `
                    <span class="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-sm text-ink font-display font-800 text-[10px] tracking-widest uppercase shadow-lg border border-white/40">
                      ${t}
                    </span>
                  `).join('')}
                </div>

                <!-- Brand watermark -->
                <div class="absolute bottom-5 right-5 opacity-30">
                  <span class="font-display font-900 text-xs text-ink uppercase tracking-widest">${p.brand}</span>
                </div>
              </div>
            </div>

            <!-- Certification strip -->
            <div class="reveal mt-5 flex flex-wrap items-center justify-center gap-y-3 gap-x-4 sm:gap-6 bg-white rounded-2xl px-4 sm:px-6 py-4 border border-brand-muted/15 shadow-sm">
              <div class="flex items-center gap-2 text-ink-3">
                <i class="fa-solid fa-shield-halved text-brand text-sm"></i>
                <span class="font-body text-xs font-600">100% Authentic</span>
              </div>
              <div class="hidden sm:block w-px h-4 bg-brand-muted"></div>
              <div class="flex items-center gap-2 text-ink-3">
                <i class="fa-solid fa-certificate text-brand text-sm"></i>
                <span class="font-body text-xs font-600">CE & OSHC Certified</span>
              </div>
              <div class="hidden sm:block w-px h-4 bg-brand-muted"></div>
              <div class="flex items-center gap-2 text-ink-3">
                <i class="fa-solid fa-truck-fast text-brand text-sm"></i>
                <span class="font-body text-xs font-600">Nationwide Delivery</span>
              </div>
            </div>
          </div>

          <!-- ── RIGHT: CONTENT ── -->
          <div class="lg:col-span-7 space-y-8">

            <!-- ── HEADER ── -->
            <div class="reveal-right space-y-4">
              <div class="flex items-center gap-3 flex-wrap">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 text-brand font-display font-800 text-[10px] tracking-[0.18em] uppercase">
                  <span class="w-1.5 h-1.5 rounded-full bg-brand"></span>${p.brand}
                </span>
                <span class="px-3 py-1 rounded-full bg-surface-2 text-ink-3 font-display font-700 text-[10px] tracking-widest uppercase border border-brand-muted/20">
                  ${catLabel}
                </span>
                <span class="px-3 py-1 rounded-full bg-surface-2 text-ink-3 font-display font-700 text-[10px] tracking-widest uppercase border border-brand-muted/20">
                  Ref: #${p.id}
                </span>
              </div>
              <h1 class="font-display font-900 text-4xl md:text-5xl xl:text-6xl text-ink leading-[1.05] tracking-tight">${p.name}</h1>
              <p class="font-body text-ink-3 text-base lg:text-lg leading-relaxed">${p.desc}</p>
            </div>

            <!-- ── INLINE CTA ── -->
            <div class="reveal-right delay-75">
              <div class="bg-surface-2 border border-brand-muted/15 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm">
                <div>
                  <h4 class="font-display font-800 text-ink text-lg md:text-xl">Interested in this product?</h4>
                  <p class="font-body text-sm text-ink-3 mt-1 leading-relaxed">Our team is ready to answer questions or provide an instant quote.</p>
                </div>
                <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
                  <a href="#/contact"
                     class="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display font-700 text-sm text-brand bg-brand/10 hover:bg-brand/20 active:scale-95 transition-all w-full sm:w-auto text-center shrink-0 border border-brand/20">
                    <i class="fa-regular fa-paper-plane text-sm"></i> Request Quote
                  </a>
                  <a href="https://www.facebook.com/messages/t/61554434231420/" target="_blank"
                     class="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display font-700 text-sm text-white bg-[#00B2FF] hover:bg-[#009EE6] active:scale-95 transition-all shadow-md hover:shadow-lg w-full sm:w-auto text-center shrink-0">
                    <i class="fa-brands fa-facebook-messenger text-sm"></i> Chat on Messenger
                  </a>
                </div>
              </div>
            </div>

            <!-- ── COLORS & SIZES ── -->
            ${hasVariants ? `
            <div class="reveal-right delay-75 space-y-5">

              <!-- Colors -->
              ${colors.length > 0 ? `
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="font-display font-800 text-xs text-ink uppercase tracking-widest">Color</span>
                  <span id="pd-color-label" class="font-body text-xs text-brand font-600 transition-all duration-200">${colors[0].name}</span>
                </div>
                <div class="flex items-center gap-2.5 flex-wrap" id="pd-color-swatches">
                  ${colors.map((c, i) => `
                    <button
                      data-color-index="${i}"
                      data-color-name="${c.name}"
                      data-color-img="${c.img || ''}"
                      title="${c.name}"
                      aria-label="Select color: ${c.name}"
                      class="pd-color-swatch relative w-8 h-8 rounded-full transition-all duration-200 focus:outline-none
                             ${i === 0 ? 'ring-2 ring-offset-2 ring-brand scale-110' : 'ring-1 ring-ink/10 hover:scale-110 hover:ring-brand/40'}"
                      style="background-color: ${c.hex};"
                    >
                      <!-- White border for very light colors so they're visible -->
                      ${c.hex === '#f5f5f5' || c.hex === '#ffffff' || c.hex === '#fff'
                        ? `<span class="absolute inset-0 rounded-full border border-ink/10"></span>`
                        : ''}
                    </button>
                  `).join('')}
                </div>
              </div>
              ` : ''}

              <!-- Sizes (display only) -->
              ${sizes.length > 0 ? `
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="font-display font-800 text-xs text-ink uppercase tracking-widest">Available Sizes</span>
                  <span class="px-2 py-0.5 rounded-full bg-surface-2 text-ink-3 font-body text-[10px] border border-brand-muted/20">Display only</span>
                </div>
                <!-- Horizontal scroll row — no pointer events on pills -->
                <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1">
                  ${sizes.map(s => `
                    <span class="flex-shrink-0 px-4 py-2 rounded-xl bg-white border border-brand-muted/15
                                 font-display font-700 text-xs text-ink-2 shadow-sm
                                 select-none cursor-default">
                      ${s}
                    </span>
                  `).join('')}
                </div>
              </div>
              ` : ''}

            </div>
            ` : ''}

            <!-- ── TABBED SECTION: Benefits / Specs / Certifications ── -->
            <div class="reveal-right delay-100">

              <!-- Tab Nav -->
              <div class="flex gap-1 bg-surface-2 border border-brand-muted/15 rounded-2xl p-1 mb-6" role="tablist" id="pd-tab-nav">
                ${tabs.map((tab, i) => `
                  <button
                    role="tab"
                    data-tab="${tab.id}"
                    aria-selected="${tab.id === firstTab}"
                    class="pd-tab flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-display font-700 text-xs tracking-wide transition-all duration-200
                      ${tab.id === firstTab
                        ? 'bg-white text-ink shadow-sm border border-brand-muted/10'
                        : 'text-ink-3 hover:text-ink'
                      }"
                  >
                    <i class="fa-solid ${tab.icon} text-[11px] ${tab.id === firstTab ? 'text-brand' : ''}"></i>
                    <span class="hidden sm:inline">${tab.label}</span>
                  </button>
                `).join('')}
              </div>

              <!-- Tab Panels -->
              <div id="pd-tab-panels">

                <!-- BENEFITS PANEL -->
                ${hasBenefits ? `
                <div id="pd-panel-benefits" role="tabpanel" class="pd-panel ${firstTab === 'benefits' ? '' : 'hidden'}">
                  <div class="${p.benefits[0].desc ? 'grid grid-cols-1 sm:grid-cols-2 gap-4' : 'grid grid-cols-2 sm:grid-cols-3 gap-3'}">
                    ${p.benefits.map((b, i) => b.desc ? `
                      <div class="group bg-white border border-brand-muted/15 rounded-2xl px-5 py-5 shadow-sm hover:border-brand/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style="transition-delay:${i * 60}ms">
                        <div class="flex items-center gap-3 mb-3">
                          <div class="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-300">
                            <i class="fa-solid ${b.icon} text-brand text-base group-hover:text-white transition-colors duration-300"></i>
                          </div>
                          <h4 class="font-display font-800 text-sm text-ink">${b.label}</h4>
                        </div>
                        <p class="font-body text-xs text-ink-3 leading-relaxed">${b.desc}</p>
                      </div>
                    ` : `
                      <div class="group flex items-center gap-3 bg-white border border-brand-muted/15 rounded-2xl px-4 py-3.5 shadow-sm hover:border-brand/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300" style="transition-delay:${i * 40}ms">
                        <div class="w-9 h-9 rounded-xl bg-brand/8 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-300">
                          <i class="fa-solid ${b.icon} text-brand text-sm group-hover:text-white transition-colors duration-300"></i>
                        </div>
                        <span class="font-body font-600 text-xs text-ink leading-tight">${b.label}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
                ` : ''}

                <!-- SPECS PANEL -->
                <div id="pd-panel-specs" role="tabpanel" class="pd-panel ${firstTab === 'specs' ? '' : 'hidden'}">
                  <div class="bg-white rounded-[2rem] border border-brand-muted/15 shadow-sm overflow-hidden">
                    <ul class="divide-y divide-brand-muted/10">
                      ${p.features.map((f, i) => {
                        const icon = getFeatureIcon(f);
                        return `
                        <li class="group flex items-center gap-4 px-6 py-4 hover:bg-brand/3 transition-colors duration-200">
                          <div class="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center flex-shrink-0 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                            ${icon}
                          </div>
                          <p class="font-body text-sm text-ink-2 leading-relaxed font-500">${f}</p>
                          <div class="ml-auto w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-brand"><polyline points="20 6 9 17 4 12"/></svg>
                          </div>
                        </li>`;
                      }).join('')}
                    </ul>
                  </div>
                </div>

                <!-- CERTIFICATIONS PANEL -->
                ${hasCerts ? `
                <div id="pd-panel-certs" role="tabpanel" class="pd-panel ${firstTab === 'certs' ? '' : 'hidden'}">
                  <div class="bg-white rounded-2xl border border-brand-muted/15 shadow-sm overflow-hidden">
                    <ul class="divide-y divide-brand-muted/10">
                      ${p.certifications.map(c => `
                        <li class="group flex items-center gap-4 px-5 py-4 hover:bg-brand/3 transition-colors duration-200">
                          <div class="w-10 h-10 rounded-xl bg-surface-2 border border-brand-muted/15 flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:border-brand transition-all duration-300">
                            <i class="fa-solid fa-shield-halved text-brand group-hover:text-white transition-colors duration-300"></i>
                          </div>
                          <div class="flex-1 min-w-0">
                            <h4 class="font-display font-800 text-sm text-ink">${c.name}</h4>
                            <p class="font-body text-[11px] text-ink-3 mt-0.5">${c.details}</p>
                          </div>
                          <div class="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                            <i class="fa-solid fa-check text-brand text-[9px]"></i>
                          </div>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>
                ` : ''}

              </div>
            </div>
            <!-- end tabbed section -->

          </div>
          <!-- end right content -->
        </div>

        <!-- ══ RELATED PRODUCTS ══ -->
        ${related.length > 0 ? `
        <div class="mt-24 pt-12 border-t border-brand-muted/20">
          <div class="flex items-center justify-between mb-10 gap-4 flex-wrap">
            <div class="space-y-1">
              <div class="section-pill"><span class="dot"></span>More Like This</div>
              <h2 class="font-display font-800 text-3xl text-ink mt-3">Related <span class="text-brand">${catLabel}</span></h2>
            </div>
            <a href="#/products?filter=${p.cat}" class="btn-outline text-sm">View All</a>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-${Math.min(related.length, 4)} gap-4 lg:gap-6">
            ${related.map((r, i) => `
              <a href="#/product/${r.id}" class="reveal group block bg-white rounded-[1.5rem] p-4 border border-brand-muted/10 shadow-sm hover:shadow-xl hover:border-brand/20 hover:-translate-y-1.5 transition-all duration-400" style="transition-delay:${i * 80}ms">
                <div class="aspect-square rounded-2xl overflow-hidden bg-surface mb-4">
                  <img src="${r.img}" alt="${r.name}"
                       onerror="this.src='https://images.unsplash.com/photo-1584467735815-f778f274e296?w=400&q=60'; this.classList.add('opacity-30')"
                       class="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 p-2">
                </div>
                <div class="space-y-1">
                  <p class="text-[10px] font-display font-800 text-brand uppercase tracking-tighter">${r.brand}</p>
                  <h4 class="font-display font-800 text-sm text-ink group-hover:text-brand transition-colors leading-snug line-clamp-2">${r.name}</h4>
                  <div class="flex flex-wrap gap-1 pt-1">
                    ${r.tags.slice(0, 2).map(t => `<span class="text-[9px] px-2 py-0.5 rounded-full bg-surface-2 text-ink-3 font-600">${t}</span>`).join('')}
                  </div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
        ` : ''}

      </div>
      <!-- end main content -->

    </div>

    <!-- End Main Content Area -->
    `;
  },

  init: () => {
    setupScrollReveal();
    window.scrollTo({ top: 0, behavior: 'instant' });

    // ── Color swatch selection ──
    const swatchContainer = document.getElementById('pd-color-swatches');
    const colorLabel      = document.getElementById('pd-color-label');
    const productImg      = document.querySelector('#product-detail-container img[alt]');

    if (swatchContainer) {
      swatchContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.pd-color-swatch');
        if (!btn) return;

        const name = btn.dataset.colorName;
        const img  = btn.dataset.colorImg;

        // Update label
        if (colorLabel) colorLabel.textContent = name;

        // Update active swatch ring
        swatchContainer.querySelectorAll('.pd-color-swatch').forEach(s => {
          const isActive = s === btn;
          s.classList.toggle('ring-2',        isActive);
          s.classList.toggle('ring-offset-2', isActive);
          s.classList.toggle('ring-brand',    isActive);
          s.classList.toggle('scale-110',     isActive);
          s.classList.toggle('ring-1',        !isActive);
          s.classList.toggle('ring-ink/10',   !isActive);
        });

        // Swap product image if a color-specific image URL exists
        if (img && productImg) {
          productImg.style.opacity = '0';
          productImg.style.transition = 'opacity 200ms ease';
          setTimeout(() => {
            productImg.src = img;
            productImg.style.opacity = '1';
          }, 200);
        }
      });
    }

    // ── Tab switching ──
    const tabNav = document.getElementById('pd-tab-nav');
    const panels = document.querySelectorAll('.pd-panel');

    if (tabNav) {
      tabNav.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-tab]');
        if (!btn) return;

        const target = btn.dataset.tab;

        // Update button styles
        tabNav.querySelectorAll('.pd-tab').forEach(t => {
          const isActive = t.dataset.tab === target;
          t.setAttribute('aria-selected', isActive);
          t.classList.toggle('bg-white', isActive);
          t.classList.toggle('text-ink', isActive);
          t.classList.toggle('shadow-sm', isActive);
          t.classList.toggle('border', isActive);
          t.classList.toggle('border-brand-muted/10', isActive);
          t.classList.toggle('text-ink-3', !isActive);

          // Icon color
          const icon = t.querySelector('i');
          if (icon) {
            icon.classList.toggle('text-brand', isActive);
          }
        });

        // Show/hide panels with a quick fade
        panels.forEach(panel => {
          const isTarget = panel.id === `pd-panel-${target}`;

          if (isTarget) {
            panel.classList.remove('hidden');
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(6px)';
            // Trigger reflow for transition
            panel.getBoundingClientRect();
            panel.style.transition = 'opacity 200ms ease, transform 200ms ease';
            panel.style.opacity = '1';
            panel.style.transform = 'translateY(0)';
          } else {
            panel.classList.add('hidden');
            panel.style.transition = '';
          }
        });
      });
    }

    // Clean initialized scripts if needed
  }
};