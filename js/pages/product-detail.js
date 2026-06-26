import { categories, idToCat } from '../data.js';
import { setupScrollReveal } from '../utils.js';

// Lucide SVG icon strings — 24x24, stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
const ICONS = {
  // certifications / standards
  badge: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  shirt: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/></svg>`,
  layers: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 10 6.5v7L12 22 2 15.5v-7z"/><path d="M12 22v-6.5"/><path d="m22 8.5-10 7-10-7"/></svg>`,
  footprints: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-2.38C4 11.5 2.97 10.43 3 8c.03-2.54 1.38-5 3.5-5C9 3 9 4.5 9 5s-1 2-1 4 1 4 1 6"/><path d="M4 16v2h1v2h2v-2h4v-2.38"/><path d="M20 8v-2.38C20 3.5 18.62 3 17.5 3 15.38 3 14.03 5.46 14 8c-.03 2.43-1 3.5-1 5.62V16"/><path d="M20 8v2h-1v2h-2v-2h-4V8"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M3 5h4"/><path d="M19 17v4"/><path d="M17 19h4"/></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
  dropletOff: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 5.15-11.73L12 4 6.85 10.27A7 7 0 0 0 12 22z"/><line x1="2" y1="2" x2="22" y2="22"/></svg>`,
  flask: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 9 4.5 19.5c-.35.6.1 1.5.82 1.5h13.36c.72 0 1.17-.9.82-1.5L14 9"/><path d="M10 3v6"/><path d="M14 3v6"/></svg>`,
  wind: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
  volumeX: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,
  sliders: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
  refreshCw: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
  link: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  mousePointer: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 4 7.07 17 2.51-7.39L21 11.07z"/></svg>`,
  minimize: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="M21 8h-3a2 2 0 0 1-2-2V3"/><path d="M3 16h3a2 2 0 0 1 2 2v3"/><path d="M16 21v-3a2 2 0 0 1 2-2h3"/></svg>`,
  package: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
  hardHat: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a8 8 0 0 1 16 0v3"/></svg>`,
  alertTriangle: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
  settings: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  glasses: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M2 15a8.354 8.354 0 0 1 4 0"/><path d="M14 15a8.354 8.354 0 0 1 4 0"/><path d="M10 15a8.354 8.354 0 0 1 4 0"/></svg>`,
  maximize: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>`,
  flipUp: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>`,
  contrast: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20z"/></svg>`,
  scissors: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`,
  hand: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`,
  grip: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><circle cx="19" cy="5" r="1"/><circle cx="5" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="19" cy="19" r="1"/><circle cx="5" cy="19" r="1"/></svg>`,
  thermometer: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`,
  ruler: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>`,
  ban: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>`,
  utensils: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
  person: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v7"/><path d="m8 18 4-4 4 4"/><path d="M8 22h8"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>`,
  zipper: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18"/><path d="M3 21h18"/><path d="M12 3v18"/><path d="M3 12h18"/></svg>`,
  pocket: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 3 20 3 20 21 4 21 4 3"/><polyline points="4 9 20 9"/><polyline points="9 21 9 9"/></svg>`,
  network: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>`,
  biohazard: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="11.9" r="2"/><path d="M6.7 3.4c-.9 2.5.4 5.3 2.9 6.3A5 5 0 0 1 6.7 3.4z"/><path d="m8.8 3a5 5 0 0 1 6.4 0"/><path d="M17.3 3.4a5 5 0 0 1-2.9 6.3 5 5 0 0 1 2.9-6.3z"/><path d="M6.7 20.6a5 5 0 0 1 2.9-6.3 5 5 0 0 1-2.9 6.3z"/><path d="M8.8 21a5 5 0 0 1-3.4-6.1"/><path d="M17.3 20.6a5 5 0 0 1-6.4 0"/><path d="M15.2 14.3a5 5 0 0 1 2.9 6.3"/><path d="M18.6 14.9A5 5 0 0 1 15.2 21"/></svg>`,
  flame: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  anchor: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg>`,
  ropeIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12c0 4.4 3.6 8 8 8"/><path d="M20 12c0-4.4-3.6-8-8-8"/><path d="M12 4c-1.3 3-2 6.5-2 9 0 3.5 1 6 2 6s2-2.5 2-6c0-2.5-.7-6-2-9z"/></svg>`,
  lock: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  weight: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/></svg>`,
  medkit: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"/><path d="M9 12h6"/><path d="M12 9v6"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  infinity: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4z"/><path d="M12 12c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z"/></svg>`,
  arrowDown: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>`,
  plug: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8H6a2 2 0 0 0-2 2v3a6 6 0 0 0 12 0v-3a2 2 0 0 0-2-2Z"/></svg>`,
  feather: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  palette: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  umbrella: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/></svg>`,
  dot: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/></svg>`,
};

const getFeatureIcon = (text) => {
  const t = text.toLowerCase();
  if (t.includes('norms:') || t.includes('astm') || t.includes('en iso') || t.includes('certif') || t.includes('compliant') || t.match(/\ben \d/)) return ICONS.badge;
  if (t.startsWith('upper:') || t.includes('leather') || t.includes('nubuck') || t.includes('microfiber') || t.includes('knitted recycled') || t.includes('polyester and cotton') || t.includes('suede') || t.includes('cowhide') || t.includes('canvas')) return ICONS.shirt;
  if (t.startsWith('lining:') || t.includes('mesh lining') || t.includes('fur lining') || t.includes('flocked') || t.includes('acrylic lining') || t.includes('cotton flock') || t.includes('aramid-polyester lining')) return ICONS.layers;
  if (t.startsWith('midsole:') || t.includes('anti puncture') || t.includes('steel midsole') || t.includes('anti-perforation')) return ICONS.layers;
  if (t.startsWith('outsole:') || t.includes('slip-resistant') || t.includes('src slip') || t.includes('sra slip') || t.includes('pu/pu') || t.includes('pu outsole') || t.includes('rubber outsole') || t.includes('phylon/rubber')) return ICONS.footprints;
  if (t.startsWith('toecap:') || t.includes('steel toecap') || t.includes('composite toecap') || t.includes('nano carbon') || t.includes('toecap')) return ICONS.shield;
  if (t.startsWith('footbed:') || t.includes('footbed') || t.includes('insole') || t.includes('energy-absorbing heel') || t.includes('shock-absorb') || t.includes('sj foam') || t.includes('sj eco')) return ICONS.sparkles;
  if (t.includes('esd') || t.includes('anti-static') || t.includes('antistatic') || t.includes('electrical hazard') || t.includes('dielectric')) return ICONS.zap;
  if (t.includes('waterproof') || t.includes('water-resistant') || t.includes('sealed seam') || t.includes('taped seam') || t.includes('liquid proof') || t.includes('total waterproof')) return ICONS.dropletOff;
  if (t.includes('chemical') || t.includes('solvent') || t.includes('acid') || t.includes('alkali') || t.includes('oil resistant') || t.includes('fuel') || t.includes('grease')) return ICONS.flask;
  if (t.includes('breathable') || t.includes('ventilat') || t.includes('air flow') || (t.includes('mesh') && !t.includes('lining'))) return ICONS.wind;
  if (t.includes('snr') || t.includes('nrr') || t.includes('attenuat') || t.includes(' db') || t.includes('noise reduction') || t.includes('hearing protection')) return ICONS.volumeX;
  if (t.includes('headband') || t.includes('tiltable') || t.includes('adjustable headband') || t.includes('ratchet') || t.includes('adjustable harness') || t.includes('six-point suspension')) return ICONS.sliders;
  if (t.includes('replaceable') || t.includes('replacement cushion') || t.includes('hygiene kit') || t.includes('washable') || t.includes('reusable')) return ICONS.refreshCw;
  if (t.includes('pvc cord') || t.includes(' cord') || t.includes('chin strap') || t.includes('four-point')) return ICONS.link;
  if (t.includes('earplug') || t.includes('3 flange') || t.includes('insertion') || t.includes('firm handle')) return ICONS.mousePointer;
  if (t.includes('foldable') || t.includes('fold') || t.includes('compact storage')) return ICONS.minimize;
  if (t.includes('dispenser') || t.includes('wall-mount') || t.includes('500 pairs') || t.includes('box of') || t.includes('pack of') || t.includes('sold in')) return ICONS.package;
  if (t.includes('quartz') || t.includes('mounts on') || t.includes('designed for quartz') || t.includes('safety helmet') || t.includes('bump cap') || t.includes('abs shell') || t.includes('polypropylene') || t.includes('hdpe') || t.includes('thermoplastic shell')) return ICONS.hardHat;
  if (t.includes('hi-vis') || t.includes('high-vis') || t.includes('fluorescent') || t.includes('reflective') || t.includes('retro-reflect') || t.includes('en iso 20471')) return ICONS.alertTriangle;
  if (t.includes('ratchet') || t.includes('harness system') || t.includes('suspension') || t.includes('adjustable harness')) return ICONS.settings;
  if (t.includes('visor') || t.includes('face shield') || t.includes('face visor') || t.includes('polycarbonate visor') || t.includes('mesh face')) return ICONS.eye;
  if (t.includes('brim') || t.includes('rain deflect')) return ICONS.umbrella;
  if (t.includes('anti-scratch') || t.includes('anti-reflection') || t.includes('anti-fog') || t.includes(' as coat') || t.includes(' ab coat') || t.includes(' am coat') || t.includes(' ar coat')) return ICONS.eyeOff;
  if (t.includes('uv400') || t.includes('uv protect') || t.includes('uv filter') || t.includes('sun protect')) return ICONS.sun;
  if ((t.includes('polycarbonate') && t.includes('lens')) || t.includes('lens') || t.includes('over-glass') || t.includes('surlunette') || t.includes('corrective')) return ICONS.glasses;
  if (t.includes('wrap-around') || t.includes('wraparound') || t.includes('panoramic') || t.includes('lateral shield') || t.includes('peripheral')) return ICONS.maximize;
  if (t.includes('flip-up') || t.includes('lift-front') || t.includes('lift-up')) return ICONS.flipUp;
  if (t.includes('temple') || t.includes('nose piece') || t.includes('nose bridge') || t.includes('adjustable tilt') || t.includes('soft flat')) return ICONS.sliders;
  if (t.includes('smoke tint') || t.includes('gradient') || t.includes('tint') || t.includes('shade')) return ICONS.contrast;
  if (t.includes('cut resist') || t.includes('softnocut') || t.includes('econocut')) return ICONS.scissors;
  if ((t.includes('nitrile') || t.includes('latex') || t.includes('pu coat')) && (t.includes('coat') || t.includes('palm'))) return ICONS.hand;
  if (t.includes('gauge') || t.includes('knitted')) return ICONS.grip;
  if (t.includes('tactile') || t.includes('dexterity') || t.includes('precision') || t.includes('assembly')) return ICONS.mousePointer;
  if (t.includes('cuff') || t.includes('gauntlet') || t.includes('forearm') || t.includes('arm protection') || t.match(/\d+\s*cm length/)) return ICONS.ruler;
  if (t.includes('grip') || t.includes('textured') || t.includes('traction')) return ICONS.grip;
  if (t.includes('heat-resistant') || t.includes('thermal protect') || t.includes('radiant heat') || t.includes('aluminised') || t.includes('furnace')) return ICONS.thermometer;
  if (t.includes('kevlar') || t.includes('para-aramid') || t.includes('aramid')) return ICONS.network;
  if (t.includes('powder-free') || t.includes('latex-free') || t.includes('silicone free')) return ICONS.ban;
  if (t.includes('food contact') || t.includes('food handling') || t.includes('food industry')) return ICONS.utensils;
  if (t.includes('coverall') || t.includes('overall') || t.includes('disposable')) return ICONS.person;
  if (t.includes('hood') || t.includes('elasticated face opening')) return ICONS.user;
  if (t.includes('zipper') || t.includes('zip fastening') || t.includes('hook & loop')) return ICONS.zipper;
  if (t.includes('pocket') || t.includes('tool-staging')) return ICONS.pocket;
  if (t.includes('reinforced') || t.includes('stitching')) return ICONS.network;
  if (t.includes('cotton') || t.includes('polyester') || t.includes('g/m²') || t.includes('canvas fabric')) return ICONS.shirt;
  if (t.includes('apron') || t.includes('wipeable') || t.includes('easy-clean')) return ICONS.ban;
  if (t.includes('type 5') || t.includes('type 6') || t.includes('type 3') || t.includes('type 4') || t.includes('dry particle') || t.includes('limited liquid') || t.includes('biological')) return ICONS.biohazard;
  if (t.includes('auto-darkening') || t.includes('darkening filter') || t.includes('active filter') || t.includes('passive filter') || t.includes('passive lens') || (t.includes('shade') && t.includes('filter'))) return ICONS.contrast;
  if (t.includes('solar') || t.includes('battery backup')) return ICONS.sun;
  if (t.includes('sensitivity') || t.includes('delay control')) return ICONS.sliders;
  if (t.includes('mig') || t.includes('tig') || t.includes('mma') || t.includes('arc') || t.includes('welding process') || t.includes('brazing')) return ICONS.flame;
  if (t.includes('anchorage point') || t.includes('anchorage line') || t.includes('anchor')) return ICONS.anchor;
  if (t.includes('lanyard') || t.includes('energy absorber') || t.includes('energy-absorb')) return ICONS.link;
  if (t.includes('polyester webbing') || t.includes('high-tenacity') || t.includes('braided rope') || t.includes('webbing') || t.includes('lifeline')) return ICONS.ropeIcon;
  if (t.includes('buckle') || t.includes('leg strap') || t.includes('shoulder strap') || t.includes('chest strap')) return ICONS.sliders;
  if (t.includes('arrest force') || t.includes('6kn') || t.includes('load rating') || t.includes('static load')) return ICONS.weight;
  if (t.includes('karabiner') || t.includes('carabiner') || t.includes('auto-locking gate') || t.includes('fall arrester') || t.includes('automatic lock') || t.includes('locks instantly')) return ICONS.lock;
  if (t.includes('corrosion') || t.includes('galvanized')) return ICONS.shield;
  if (t.includes('rescue') || t.includes('evacuation') || t.includes('emergency') || t.includes('quick donning')) return ICONS.medkit;
  if (t.includes('universal fit') || t.includes('all size')) return ICONS.users;
  if (t.includes('figure-of-eight') || t.includes('figure of eight') || t.includes('descender') || t.includes('rope access')) return ICONS.infinity;
  if (t.includes('fall arrest') || t.includes('fall protect') || t.includes('vertical lifeline')) return ICONS.arrowDown;
  if (t.includes('termination') || t.includes('connector')) return ICONS.plug;
  if (t.includes('lightweight') || t.includes('featherweight') || (t.includes('lightweight') && t.includes('aluminum'))) return ICONS.feather;
  if (t.includes('comfort') || t.includes('ergonomic') || t.includes('all-day')) return ICONS.heart;
  if (t.includes('multiple color') || (t.includes('available in') && t.includes('color'))) return ICONS.palette;
  if (t.includes('universal') || t.includes('compatible') || t.includes('suitable for')) return ICONS.checkCircle;
  return ICONS.dot;
};

// ── Image Lightbox / Zoom Modal ──
function initLightbox(images, startIndex = 0) {
  // Remove existing modal if any
  document.getElementById('pd-lightbox')?.remove();

  let currentIndex = startIndex;
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let lastTranslateX = 0;
  let lastTranslateY = 0;

  // Pinch-to-zoom state
  let lastPinchDist = null;

  const modal = document.createElement('div');
  modal.id = 'pd-lightbox';
  modal.className = 'fixed inset-0 z-[999] flex flex-col bg-black/95 backdrop-blur-sm';
  modal.style.cssText = 'opacity:0; transition: opacity 200ms ease; height: 100dvh;';

  modal.innerHTML = `
    <!-- Top bar -->
    <div class="flex items-center justify-between px-4 py-3 z-10 shrink-0">
      <span id="lb-counter" class="text-white/50 font-display font-700 text-xs tracking-widest"></span>
      <div class="flex items-center gap-2">
        <button id="lb-zoom-out" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" title="Zoom out">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
        </button>
        <span id="lb-zoom-label" class="text-white/50 font-display font-700 text-xs w-10 text-center">100%</span>
        <button id="lb-zoom-in" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" title="Zoom in">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/></svg>
        </button>
        <button id="lb-reset" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" title="Reset zoom">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
        </button>
        <button id="lb-close" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors ml-1" title="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    </div>

    <!-- Image area -->
    <div id="lb-img-area" class="relative overflow-hidden flex items-center justify-center" style="cursor: grab; flex: 1 1 0; min-height: 0;">
      <img id="lb-img" src="" alt="" class="object-contain select-none pointer-events-none"
           style="max-width: 88vw; max-height: 60vh; width: auto; height: auto; transform-origin: center center; transition: transform 100ms ease; will-change: transform;">
    </div>

    <!-- Prev / Next arrows -->
    <button id="lb-prev" class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10 ${images.length <= 1 ? 'hidden' : ''}">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>
    </button>
    <button id="lb-next" class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10 ${images.length <= 1 ? 'hidden' : ''}">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
    </button>

    <!-- Thumbnail strip -->
    ${images.length > 1 ? `
    <div class="shrink-0 px-4 py-3 flex gap-2 justify-center overflow-x-auto scrollbar-hide" id="lb-thumbs">
      ${images.map((src, i) => `
        <button data-lb-thumb="${i}" class="lb-thumb w-12 h-12 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${i === startIndex ? 'border-white scale-105' : 'border-white/20 opacity-50 hover:opacity-80'}">
          <img src="${src}" class="w-full h-full object-contain bg-white/5 p-1" alt="">
        </button>
      `).join('')}
    </div>
    ` : ''}
  `;

  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';

  // Calculate available image height after top bar + thumb strip
  const updateImgMaxHeight = () => {
    const topBar = modal.querySelector('.flex.items-center.justify-between');
    const thumbStrip = modal.querySelector('#lb-thumbs');
    const topH = topBar ? topBar.offsetHeight : 52;
    const thumbH = thumbStrip ? thumbStrip.offsetHeight : 0;
    const available = window.innerHeight - topH - thumbH - 16; // 16px breathing room
    img.style.maxHeight = Math.min(available, window.innerHeight * 0.75) + 'px';
  };

  // Animate in
  requestAnimationFrame(() => {
    modal.style.opacity = '1';
    updateImgMaxHeight();
  });

  const img = modal.querySelector('#lb-img');
  const imgArea = modal.querySelector('#lb-img-area');
  const zoomLabel = modal.querySelector('#lb-zoom-label');
  const counter = modal.querySelector('#lb-counter');

  const applyTransform = (animated = false) => {
    img.style.transition = animated ? 'transform 200ms ease' : 'transform 100ms ease';
    img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    zoomLabel.textContent = Math.round(scale * 100) + '%';
  };

  const resetZoom = (animated = true) => {
    scale = 1; translateX = 0; translateY = 0;
    lastTranslateX = 0; lastTranslateY = 0;
    applyTransform(animated);
    imgArea.style.cursor = 'grab';
  };

  const loadImage = (index) => {
    currentIndex = index;
    img.style.opacity = '0';
    img.style.transition = 'opacity 150ms ease';
    resetZoom(false);
    setTimeout(() => {
      img.src = images[index];
      img.style.opacity = '1';
    }, 150);
    counter.textContent = images.length > 1 ? `${index + 1} / ${images.length}` : '';
    // Update thumb highlights
    modal.querySelectorAll('.lb-thumb').forEach((t, i) => {
      t.classList.toggle('border-white', i === index);
      t.classList.toggle('scale-105', i === index);
      t.classList.toggle('border-white/20', i !== index);
      t.classList.toggle('opacity-50', i !== index);
    });
  };

  const close = () => {
    modal.style.opacity = '0';
    document.body.style.overflow = '';
    setTimeout(() => modal.remove(), 200);
  };

  loadImage(currentIndex);

  // Controls
  modal.querySelector('#lb-close').onclick = close;
  modal.querySelector('#lb-zoom-in').onclick = () => { scale = Math.min(scale + 0.5, 5); applyTransform(true); imgArea.style.cursor = scale > 1 ? 'move' : 'grab'; };
  modal.querySelector('#lb-zoom-out').onclick = () => { scale = Math.max(scale - 0.5, 1); if (scale === 1) resetZoom(); else applyTransform(true); };
  modal.querySelector('#lb-reset').onclick = () => resetZoom(true);
  modal.querySelector('#lb-prev')?.addEventListener('click', () => loadImage((currentIndex - 1 + images.length) % images.length));
  modal.querySelector('#lb-next')?.addEventListener('click', () => loadImage((currentIndex + 1) % images.length));
  modal.querySelectorAll('[data-lb-thumb]').forEach(btn => {
    btn.onclick = () => loadImage(parseInt(btn.dataset.lbThumb));
  });

  // Scroll to zoom (desktop)
  imgArea.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    scale = Math.min(Math.max(scale + delta, 1), 5);
    if (scale === 1) resetZoom();
    else applyTransform(false);
    imgArea.style.cursor = scale > 1 ? 'move' : 'grab';
  }, { passive: false });

  // Drag to pan (when zoomed)
  imgArea.addEventListener('mousedown', (e) => {
    if (scale <= 1) return;
    isDragging = true;
    dragStartX = e.clientX - lastTranslateX;
    dragStartY = e.clientY - lastTranslateY;
    imgArea.style.cursor = 'grabbing';
  });
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    translateX = e.clientX - dragStartX;
    translateY = e.clientY - dragStartY;
    applyTransform(false);
  });
  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    lastTranslateX = translateX;
    lastTranslateY = translateY;
    imgArea.style.cursor = scale > 1 ? 'move' : 'grab';
  });

  // Touch: pinch-to-zoom + drag
  imgArea.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      lastPinchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    } else if (e.touches.length === 1 && scale > 1) {
      isDragging = true;
      dragStartX = e.touches[0].clientX - lastTranslateX;
      dragStartY = e.touches[0].clientY - lastTranslateY;
    }
  }, { passive: true });

  imgArea.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2 && lastPinchDist !== null) {
      e.preventDefault();
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const delta = dist / lastPinchDist;
      scale = Math.min(Math.max(scale * delta, 1), 5);
      lastPinchDist = dist;
      applyTransform(false);
    } else if (e.touches.length === 1 && isDragging) {
      translateX = e.touches[0].clientX - dragStartX;
      translateY = e.touches[0].clientY - dragStartY;
      applyTransform(false);
    }
  }, { passive: false });

  imgArea.addEventListener('touchend', (e) => {
    if (e.touches.length < 2) lastPinchDist = null;
    if (e.touches.length === 0) {
      isDragging = false;
      lastTranslateX = translateX;
      lastTranslateY = translateY;
      if (scale <= 1) resetZoom();
    }
  }, { passive: true });

  // Keyboard
  const onKey = (e) => {
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') loadImage((currentIndex + 1) % images.length);
    if (e.key === 'ArrowLeft') loadImage((currentIndex - 1 + images.length) % images.length);
    if (e.key === '+') { scale = Math.min(scale + 0.5, 5); applyTransform(true); }
    if (e.key === '-') { scale = Math.max(scale - 0.5, 1); if (scale === 1) resetZoom(); else applyTransform(true); }
  };
  window.addEventListener('keydown', onKey);
  modal.addEventListener('remove', () => window.removeEventListener('keydown', onKey));

  // Click backdrop (the modal root only, not the image area or any controls) to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });
}

export const ProductDetail = {
  render: (id) => {
    return `
      <section id="pd-loading" class="py-28 min-h-screen pt-32 text-center flex flex-col items-center justify-center gap-4 bg-surface-warm">
        <div class="w-16 h-16 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
        <p class="text-ink-3 font-display font-800 text-lg mt-2">Loading product details...</p>
      </section>
    `;
  },

  renderFull: (p, related) => {
    const catObj = categories.find(c => c.id === p.cat);
    const catLabel = catObj ? catObj.label : 'General';
    const hasBenefits = p.benefits && p.benefits.length > 0;
    const hasCerts = p.certs && p.certs.length > 0;

    const colors = p.colors && p.colors.length > 0 ? p.colors : [];
    const sizes = p.sizes && p.sizes.length > 0 ? p.sizes : [];
    const initialSizes = (colors.length > 0 && colors[0].sizes && colors[0].sizes.length > 0) ? colors[0].sizes : sizes;
    const hasVariants = colors.length > 0 || initialSizes.length > 0;

    document.title = p.name + " - " + catLabel;

    return `
    <div id="product-detail-container" class="bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-20 pb-32">

        <nav class="flex text-xs text-ink-3 pt-10 font-body mb-6">
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

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">

          <!-- ── LEFT: IMAGE ── -->
          <div class="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div class="reveal relative group">
              <div class="absolute -inset-6 bg-brand/8 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

              <!-- Image card — click to open lightbox -->
              <div class="relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.07)] border border-brand-muted/15 aspect-square flex items-center justify-center p-8 cursor-zoom-in"
                   id="pd-image-card">
                <img id="pd-main-img" src="${(p.images && p.images.length > 0) ? p.images[0] : p.img}" alt="${p.name}"
                     width="500" height="500" fetchpriority="high"
                     onerror="this.src='https://images.unsplash.com/photo-1584467735815-f778f274e296?w=600&q=80'; this.classList.add('opacity-30')"
                     class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-none">

                <!-- Zoom hint badge -->
                <div class="absolute bottom-4 right-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-black/30 backdrop-blur-sm text-white text-[10px] font-display font-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/></svg>
                  Zoom
                </div>

                <div class="absolute top-5 left-5 flex flex-col gap-2">
                  ${p.tags.slice(0, 2).map(t => `
                    <span class="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-sm text-ink font-display font-800 text-[10px] tracking-widest uppercase shadow-lg border border-white/40">${t}</span>
                  `).join('')}
                </div>
                <div class="absolute bottom-5 right-5">
                  <span class="font-display font-900 text-xs text-caution uppercase tracking-widest">${p.brand}</span>
                </div>
              </div>

              <!-- Thumbnails -->
              <div id="pd-thumbnails" class="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                ${(p.images && p.images.length > 1) ? p.images.map((imgUrl, i) => `
                  <button
                    data-img-url="${imgUrl}"
                    data-img-index="${i}"
                    class="pd-thumb-btn relative w-16 h-16 rounded-xl overflow-hidden border-2 ${i === 0 ? 'border-brand' : 'border-transparent'} hover:border-brand/50 transition-colors shrink-0 bg-white shadow-sm flex items-center justify-center p-2"
                  >
                    <img src="${imgUrl}" alt="${p.name} thumbnail" class="w-full h-full object-contain" width="64" height="64" loading="lazy" decoding="async">
                  </button>
                `).join('') : ''}
              </div>
            </div>

            ${hasVariants ? `
            <div class="reveal mt-4 space-y-5 lg:hidden">
              ${colors.length > 0 ? `
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="font-display font-800 text-xs text-ink uppercase tracking-widest">Color</span>
                  <span id="pd-color-label-mobile" class="font-body text-xs text-brand font-600 transition-all duration-200">${colors[0].name}</span>
                </div>
                <div class="flex items-center gap-2.5 flex-wrap" id="pd-color-swatches-mobile">
                  ${colors.map((c, i) => `
                    <button data-color-index="${i}" data-color-name="${c.name}" data-color-img="${c.img || ''}" data-color-images="${c.images ? c.images.join(',') : ''}" data-color-sizes="${c.sizes ? c.sizes.join('|') : ''}" title="${c.name}" aria-label="Select color: ${c.name}"
                      class="pd-color-swatch relative w-8 h-8 rounded-full transition-all duration-200 focus:outline-none ${i === 0 ? 'ring-2 ring-offset-2 ring-brand scale-110' : 'ring-1 ring-ink/10 hover:scale-110 hover:ring-brand/40'}"
                      style="background: ${c.hex};">
                      ${c.hex === '#f5f5f5' || c.hex === '#ffffff' || c.hex === '#fff' ? `<span class="absolute inset-0 rounded-full border border-ink/10"></span>` : ''}
                    </button>
                  `).join('')}
                </div>
              </div>
              ` : ''}
              <div id="pd-sizes-container-mobile" class="${initialSizes.length > 0 ? '' : 'hidden'}">
                <div class="flex items-center gap-2 mb-3">
                  <span class="font-display font-800 text-xs text-ink uppercase tracking-widest">Available Sizes</span>
                </div>
                <div id="pd-sizes-list-mobile" class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1">
                  ${initialSizes.map(s => `<span class="flex-shrink-0 px-4 py-2 rounded-xl bg-white border border-brand-muted/15 font-display font-700 text-xs text-ink-2 shadow-sm select-none cursor-default">${s}</span>`).join('')}
                </div>
              </div>
            </div>
            ` : ''}

            <div class="reveal mt-5 flex flex-wrap items-center justify-center gap-y-3 gap-x-4 sm:gap-6 bg-white rounded-2xl px-4 sm:px-6 py-4 border border-brand-muted/15 shadow-sm">
              <div class="flex items-center gap-2 text-ink-3">
                <i class="fa-solid fa-circle-check text-brand text-sm"></i>
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

            <div class="reveal-right space-y-4">
              <div class="flex items-center gap-3 flex-wrap">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 text-brand font-display font-800 text-[10px] tracking-[0.18em] uppercase">
                  <span class="w-1.5 h-1.5 rounded-full bg-brand"></span>${p.brand}
                </span>
                <span class="px-3 py-1 rounded-full bg-surface-2 text-ink-3 font-display font-700 text-[10px] tracking-widest uppercase border border-brand-muted/20">${catLabel}</span>
                <span class="px-3 py-1 rounded-full bg-surface-2 text-ink-3 font-display font-700 text-[10px] tracking-widest uppercase border border-brand-muted/20">Ref: #${p.id}</span>
              </div>
              <h1 class="font-display font-bold text-3xl md:text-3xl xl:text-5xl text-ink leading-[1.05] tracking-tight">${p.name}</h1>
              <p class="font-body text-ink-3 text-sm lg:text-base leading-relaxed">${p.desc}</p>
            </div>

            <div class="reveal-right delay-75">
              <div class="bg-surface-2 border border-brand-muted/15 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-sm">
                <div>
                  <h4 class="font-display font-semibold text-ink text-sm md:text-base">Interested in this product?</h4>
                  <p class="font-body text-sm text-ink-3 mt-1 leading-relaxed">Our team is ready to answer questions or provide an instant quote.</p>
                </div>
                <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
                  <a href="#/contact" class="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display font-700 text-[13px] text-brand bg-brand/10 hover:bg-brand/20 active:scale-95 transition-all w-full sm:w-auto text-center shrink-0 border border-brand/20">
                    <i class="fa-regular fa-paper-plane text-sm"></i> Request Quote
                  </a>
                  <a href="https://www.facebook.com/messages/t/61554434231420/" target="_blank" class="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display font-700 text-[13px] text-white bg-[#00B2FF] hover:bg-[#009EE6] active:scale-95 transition-all shadow-md hover:shadow-lg w-full sm:w-auto text-center shrink-0">
                    <i class="fa-brands fa-facebook-messenger text-sm"></i> Chat on Messenger
                  </a>
                </div>
              </div>
            </div>

            ${hasVariants ? `
            <div class="reveal-right delay-75 space-y-5 hidden lg:block">
              ${colors.length > 0 ? `
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="font-display font-800 text-xs text-ink uppercase tracking-widest">Color</span>
                  <span id="pd-color-label" class="font-body text-xs text-brand font-600 transition-all duration-200">${colors[0].name}</span>
                </div>
                <div class="flex items-center gap-2.5 flex-wrap" id="pd-color-swatches">
                  ${colors.map((c, i) => `
                    <button data-color-index="${i}" data-color-name="${c.name}" data-color-img="${c.img || ''}" data-color-images="${c.images ? c.images.join(',') : ''}" data-color-sizes="${c.sizes ? c.sizes.join('|') : ''}" title="${c.name}" aria-label="Select color: ${c.name}"
                      class="pd-color-swatch relative w-8 h-8 rounded-full transition-all duration-200 focus:outline-none ${i === 0 ? 'ring-2 ring-offset-2 ring-brand scale-110' : 'ring-1 ring-ink/10 hover:scale-110 hover:ring-brand/40'}"
                      style="background: ${c.hex};">
                      ${c.hex === '#f5f5f5' || c.hex === '#ffffff' || c.hex === '#fff' ? `<span class="absolute inset-0 rounded-full border border-ink/10"></span>` : ''}
                    </button>
                  `).join('')}
                </div>
              </div>
              ` : ''}
              <div id="pd-sizes-container" class="${initialSizes.length > 0 ? '' : 'hidden'}">
                <div class="flex items-center gap-2 mb-3">
                  <span class="font-display font-800 text-xs text-ink uppercase tracking-widest">Available Sizes</span>
                </div>
                <div id="pd-sizes-list" class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1">
                  ${initialSizes.map(s => `<span class="flex-shrink-0 px-4 py-2 rounded-xl bg-white border border-brand-muted/15 font-display font-700 text-xs text-ink-2 shadow-sm select-none cursor-default">${s}</span>`).join('')}
                </div>
              </div>
            </div>
            ` : ''}

            <div class="reveal-right delay-100 divide-y divide-brand-muted/20" id="pd-info-sections">

              ${hasBenefits ? `
              <div class="pd-accordion-section py-4" data-section="benefits">
                <button class="pd-accordion-trigger w-full flex items-center justify-between gap-3 text-left py-2 hover:text-brand transition-colors duration-200 group" aria-expanded="true">
                  <div class="flex items-center gap-3">
                    <span class="text-brand flex items-center"><i class="fa-solid fa-star text-sm"></i></span>
                    <span class="font-display font-800 text-sm text-ink group-hover:text-brand transition-colors">Key Benefits</span>
                  </div>
                  <div class="w-6 h-6 flex items-center justify-center">
                    <svg class="pd-accordion-chevron w-3.5 h-3.5 text-ink-3 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </button>
                <div class="pd-accordion-content overflow-hidden transition-all duration-400 ease-out" style="max-height: 2000px; opacity: 1;">
                  <div class="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                    ${p.benefits.map((b, i) => b.desc ? `
                      <div class="flex items-start gap-2.5">
                        <span class="text-brand/70 mt-0.5"><i class="fa-solid ${b.icon} text-xs"></i></span>
                        <div>
                          <h4 class="font-display font-700 text-xs text-ink leading-tight">${b.label}</h4>
                          <p class="font-body text-[11px] text-ink-3 leading-relaxed mt-0.5">${b.desc}</p>
                        </div>
                      </div>
                    ` : `
                      <div class="flex items-center gap-2.5">
                        <span class="text-brand/70"><i class="fa-solid ${b.icon} text-xs"></i></span>
                        <span class="font-body font-600 text-xs text-ink leading-tight">${b.label}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
              ` : ''}

              <div class="pd-accordion-section py-4" data-section="specs">
                <button class="pd-accordion-trigger w-full flex items-center justify-between gap-3 text-left py-2 hover:text-brand transition-colors duration-200 group" aria-expanded="true">
                  <div class="flex items-center gap-3">
                    <span class="text-brand flex items-center"><i class="fa-solid fa-list-check text-sm"></i></span>
                    <span class="font-display font-800 text-sm text-ink group-hover:text-brand transition-colors">Specifications</span>
                  </div>
                  <div class="w-6 h-6 flex items-center justify-center">
                    <svg class="pd-accordion-chevron w-3.5 h-3.5 text-ink-3 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </button>
                <div class="pd-accordion-content overflow-hidden transition-all duration-400 ease-out" style="max-height: 2000px; opacity: 1;">
                  <div class="pt-3">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      ${p.features.map((f, i) => {
                        const icon = getFeatureIcon(f);
                        return `
                        <div class="flex items-center gap-2.5 py-1">
                          <span class="text-brand/80 w-4 h-4 flex items-center justify-center flex-shrink-0">${icon}</span>
                          <span class="font-body text-xs text-ink-2 leading-tight min-w-0">${f}</span>
                        </div>`;
                      }).join('')}
                    </div>
                  </div>
                </div>
              </div>

              ${hasCerts ? `
              <div class="pd-accordion-section py-4" data-section="certs">
                <button class="pd-accordion-trigger w-full flex items-center justify-between gap-3 text-left py-2 hover:text-brand transition-colors duration-200 group" aria-expanded="true">
                  <div class="flex items-center gap-3">
                    <span class="text-brand flex items-center"><i class="fa-solid fa-award text-sm"></i></span>
                    <span class="font-display font-800 text-sm text-ink group-hover:text-brand transition-colors">Certifications</span>
                  </div>
                  <div class="w-6 h-6 flex items-center justify-center">
                    <svg class="pd-accordion-chevron w-3.5 h-3.5 text-ink-3 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </button>
                <div class="pd-accordion-content overflow-hidden transition-all duration-400 ease-out" style="max-height: 2000px; opacity: 1;">
                  <div class="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    ${p.certs.map(c => `
                      <div class="flex items-start gap-2.5">
                        <span class="text-brand/80 mt-0.5 flex-shrink-0"><i class="fa-solid fa-shield-halved text-xs"></i></span>
                        <div class="min-w-0">
                          <span class="font-display font-700 text-xs text-ink leading-tight block">${c.name}</span>
                          <span class="font-body text-[10px] text-ink-3 leading-tight block mt-0.5">${c.details}</span>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
              ` : ''}

            </div>
          </div>
        </div>

        ${related.length > 0 ? `
        <div class="mt-24 pt-12 border-t border-brand-muted/20">
          <div class="flex items-center justify-between mb-10 gap-4 flex-wrap">
            <div class="space-y-1">
              <div class="section-pill"><span class="dot"></span>More Like This</div>
              <h2 class="font-display font-800 text-3xl text-ink mt-3">Related <span class="text-brand">${catLabel}</span></h2>
            </div>
            <a href="#/products?filter=${p.cat}" class="btn-outline text-sm">View All</a>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            ${related.map((r, i) => `
              <a href="#/product/${r.id}" class="reveal group block bg-white rounded-[1.5rem] p-4 border border-brand-muted/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-xl hover:border-brand/20 hover:-translate-y-1.5 transition-all duration-400" style="transition-delay:${i * 80}ms">
                <div class="aspect-square rounded-2xl overflow-hidden bg-white mb-4">
                  <img src="${r.img}" alt="${r.name}"
                       width="200" height="200" loading="lazy" decoding="async"
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
    </div>
    `;
  },

  init: async (id) => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const cat = idToCat[id];
    const container = document.getElementById('app-container');

    if (!cat) {
      if (container) {
        container.innerHTML = `
          <section class="py-28 min-h-screen pt-32 text-center flex flex-col items-center justify-center gap-4 bg-surface-warm">
            <div class="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center mb-2">
              <i class="fa-solid fa-box-open text-brand text-3xl"></i>
            </div>
            <h2 class="font-display font-800 text-4xl mb-2">Product Not Found</h2>
            <p class="text-ink-3 font-body">This product doesn't exist or may have been removed.</p>
            <a href="#/products" class="btn-primary mt-4">Browse All Products</a>
          </section>
        `;
      }
      return;
    }

    let p = null;
    let related = [];
    try {
      const mod = await import(`../data/${cat}.js`);
      p = mod.products.find(x => x.id === parseInt(id));
      related = mod.products.filter(x => x.cat === cat && x.id !== p.id).slice(0, 4);
    } catch (err) {
      console.error('Failed to load category products', err);
    }

    if (!p) {
      if (container) {
        container.innerHTML = `
          <section class="py-28 min-h-screen pt-32 text-center flex flex-col items-center justify-center gap-4 bg-surface-warm">
            <div class="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center mb-2">
              <i class="fa-solid fa-box-open text-brand text-3xl"></i>
            </div>
            <h2 class="font-display font-800 text-4xl mb-2">Product Not Found</h2>
            <p class="text-ink-3 font-body">This product doesn't exist or may have been removed.</p>
            <a href="#/products" class="btn-primary mt-4">Browse All Products</a>
          </section>
        `;
      }
      return;
    }

    if (container) {
      container.innerHTML = ProductDetail.renderFull(p, related);
      setupScrollReveal(); 
      if (window.lucide) window.lucide.createIcons();
    }

    // ── Preload all color images so swatch clicks feel instant ──
    if (p.colors && p.colors.length > 0) {
      p.colors.forEach(c => {
        const urls = c.images && c.images.length > 0 ? c.images : (c.img ? [c.img] : []);
        urls.forEach(url => {
          const preloadImg = new Image();
          preloadImg.src = url;
        });
      });
    }



    // Track which thumbnail index is active — used by the lightbox
    let activeImageIndex = 0;

    const getProductImages = () => {
      const thumbs = document.querySelectorAll('.pd-thumb-btn');
      if (thumbs.length > 0) return Array.from(thumbs).map(t => t.dataset.imgUrl);
      const mainImg = document.getElementById('pd-main-img');
      return mainImg ? [mainImg.src] : [];
    };

    // Open lightbox on main image click — always at the currently active index
    const imageCard = document.getElementById('pd-image-card');
    if (imageCard) {
      imageCard.addEventListener('click', () => {
        initLightbox(getProductImages(), activeImageIndex);
      });
    }

    // ── Color swatch selection ──
    const swatchContainer = document.getElementById('pd-color-swatches');
    const colorLabel = document.getElementById('pd-color-label');
    const productImg = document.getElementById('pd-main-img');
    const thumbnailsCont = document.getElementById('pd-thumbnails');

    if (swatchContainer) {
      swatchContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.pd-color-swatch');
        if (!btn) return;

        const name = btn.dataset.colorName;
        const img = btn.dataset.colorImg;
        const imagesStr = btn.dataset.colorImages;
        const images = imagesStr ? imagesStr.split(',') : [];
        const sizesStr = btn.dataset.colorSizes;
        const colorSizes = sizesStr ? sizesStr.split('|') : [];

        if (colorLabel) colorLabel.textContent = name;
        activeImageIndex = 0; // reset — new color = new image set

        swatchContainer.querySelectorAll('.pd-color-swatch').forEach(s => {
          const isActive = s === btn;
          s.classList.toggle('ring-2', isActive);
          s.classList.toggle('ring-offset-2', isActive);
          s.classList.toggle('ring-brand', isActive);
          s.classList.toggle('scale-110', isActive);
          s.classList.toggle('ring-1', !isActive);
          s.classList.toggle('ring-ink/10', !isActive);
        });

        const targetImg = images.length > 0 ? images[0] : img;
        if (targetImg && productImg) {
          productImg.style.transition = 'none';
          productImg.src = targetImg;
        }

        if (thumbnailsCont) {
          if (images.length > 1) {
            thumbnailsCont.innerHTML = images.map((imgUrl, i) => `
              <button data-img-url="${imgUrl}" data-img-index="${i}"
                class="pd-thumb-btn relative w-16 h-16 rounded-xl overflow-hidden border-2 ${i === 0 ? 'border-brand' : 'border-transparent'} hover:border-brand/50 transition-colors shrink-0 bg-white shadow-sm flex items-center justify-center p-2">
                <img src="${imgUrl}" alt="${name} thumbnail" class="w-full h-full object-contain" width="64" height="64" loading="lazy" decoding="async">
              </button>
            `).join('');
          } else {
            thumbnailsCont.innerHTML = '';
          }
        }

        const sizesCont = document.getElementById('pd-sizes-container');
        const sizesList = document.getElementById('pd-sizes-list');
        if (sizesCont && sizesList) {
          if (colorSizes.length > 0) {
            sizesCont.classList.remove('hidden');
            sizesList.innerHTML = colorSizes.map(s => `
              <span class="flex-shrink-0 px-4 py-2 rounded-xl bg-white border border-brand-muted/15 font-display font-700 text-xs text-ink-2 shadow-sm select-none cursor-default">${s}</span>
            `).join('');
          } else {
            sizesCont.classList.add('hidden');
          }
        }

        // Sync mobile sizes
        const sizesContMobile = document.getElementById('pd-sizes-container-mobile');
        const sizesListMobile = document.getElementById('pd-sizes-list-mobile');
        if (sizesContMobile && sizesListMobile) {
          if (colorSizes.length > 0) {
            sizesContMobile.classList.remove('hidden');
            sizesListMobile.innerHTML = colorSizes.map(s => `
              <span class="flex-shrink-0 px-4 py-2 rounded-xl bg-white border border-brand-muted/15 font-display font-700 text-xs text-ink-2 shadow-sm select-none cursor-default">${s}</span>
            `).join('');
          } else {
            sizesContMobile.classList.add('hidden');
          }
        }
      });
    }

    // ── Mobile color swatch selection ──
    const swatchContainerMobile = document.getElementById('pd-color-swatches-mobile');
    const colorLabelMobile = document.getElementById('pd-color-label-mobile');

    if (swatchContainerMobile) {
      swatchContainerMobile.addEventListener('click', (e) => {
        const btn = e.target.closest('.pd-color-swatch');
        if (!btn) return;

        const index = btn.dataset.colorIndex;

        // Sync ring states on mobile swatches
        swatchContainerMobile.querySelectorAll('.pd-color-swatch').forEach(s => {
          const isActive = s === btn;
          s.classList.toggle('ring-2', isActive);
          s.classList.toggle('ring-offset-2', isActive);
          s.classList.toggle('ring-brand', isActive);
          s.classList.toggle('scale-110', isActive);
          s.classList.toggle('ring-1', !isActive);
          s.classList.toggle('ring-ink/10', !isActive);
        });

        // Update mobile color label
        if (colorLabelMobile) colorLabelMobile.textContent = btn.dataset.colorName;

        // Delegate all image/size logic to the desktop swatch click
        const desktopSwatch = swatchContainer?.querySelector(`[data-color-index="${index}"]`);
        if (desktopSwatch) {
          desktopSwatch.click();
        } else {
          // Fallback: no desktop swatch visible — run logic directly
          const name = btn.dataset.colorName;
          const img = btn.dataset.colorImg;
          const imagesStr = btn.dataset.colorImages;
          const images = imagesStr ? imagesStr.split(',') : [];
          const sizesStr = btn.dataset.colorSizes;
          const colorSizes = sizesStr ? sizesStr.split('|') : [];

          activeImageIndex = 0;
          const targetImg = images.length > 0 ? images[0] : img;
          if (targetImg && productImg) {
            productImg.style.transition = 'none';
            productImg.src = targetImg;
          }

          if (thumbnailsCont) {
            if (images.length > 1) {
              thumbnailsCont.innerHTML = images.map((imgUrl, i) => `
                <button data-img-url="${imgUrl}" data-img-index="${i}"
                  class="pd-thumb-btn relative w-16 h-16 rounded-xl overflow-hidden border-2 ${i === 0 ? 'border-brand' : 'border-transparent'} hover:border-brand/50 transition-colors shrink-0 bg-white shadow-sm flex items-center justify-center p-2">
                  <img src="${imgUrl}" alt="${name} thumbnail" class="w-full h-full object-contain" width="64" height="64" loading="lazy" decoding="async">
                </button>
              `).join('');
            } else {
              thumbnailsCont.innerHTML = '';
            }
          }

          const sizesContMobile = document.getElementById('pd-sizes-container-mobile');
          const sizesListMobile = document.getElementById('pd-sizes-list-mobile');
          const sizesCont = document.getElementById('pd-sizes-container');
          const sizesList = document.getElementById('pd-sizes-list');
          [{ c: sizesCont, l: sizesList }, { c: sizesContMobile, l: sizesListMobile }].forEach(({ c, l }) => {
            if (!c || !l) return;
            if (colorSizes.length > 0) {
              c.classList.remove('hidden');
              l.innerHTML = colorSizes.map(s => `
                <span class="flex-shrink-0 px-4 py-2 rounded-xl bg-white border border-brand-muted/15 font-display font-700 text-xs text-ink-2 shadow-sm select-none cursor-default">${s}</span>
              `).join('');
            } else {
              c.classList.add('hidden');
            }
          });
        }
      });
    }

    // Thumbnail click — update main image and track active index for lightbox
    if (thumbnailsCont) {
      thumbnailsCont.addEventListener('click', (e) => {
        const btn = e.target.closest('.pd-thumb-btn');
        if (!btn) return;

        const imgUrl = btn.dataset.imgUrl;
        activeImageIndex = parseInt(btn.dataset.imgIndex ?? 0);

        thumbnailsCont.querySelectorAll('.pd-thumb-btn').forEach(b => {
          b.classList.toggle('border-brand', b === btn);
          b.classList.toggle('border-transparent', b !== btn);
        });

        if (imgUrl && productImg) {
          productImg.style.transition = 'none';
          productImg.src = imgUrl;
        }
      });
    }

    // ── Accordion toggle ──
    const infoSections = document.getElementById('pd-info-sections');
    if (infoSections) {
      infoSections.addEventListener('click', (e) => {
        const trigger = e.target.closest('.pd-accordion-trigger');
        if (!trigger) return;

        const section = trigger.closest('.pd-accordion-section');
        const content = section.querySelector('.pd-accordion-content');
        const chevron = trigger.querySelector('.pd-accordion-chevron');
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.getBoundingClientRect();
          content.style.maxHeight = '0px';
          content.style.opacity = '0';
          chevron.style.transform = 'rotate(-90deg)';
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.opacity = '1';
          chevron.style.transform = 'rotate(0deg)';
          trigger.setAttribute('aria-expanded', 'true');
          const onEnd = () => {
            if (trigger.getAttribute('aria-expanded') === 'true') content.style.maxHeight = '2000px';
            content.removeEventListener('transitionend', onEnd);
          };
          content.addEventListener('transitionend', onEnd);
        }
      });
    }
  }
};
