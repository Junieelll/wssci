/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: '#27C291',
        'brand-dark': '#1a9e76',
        'brand-light': '#e6faf4',
        'brand-muted': '#b3edd9',
        ink: '#0a1a14',
        'ink-2': '#1c2e26',
        'ink-3': '#3a5248',
        surface: '#f7fdfb',
        'surface-2': '#eef9f5',
        'surface-warm': '#faf9f2',
        'caution': '#FFCC00',
        'caution-light': '#fff9e6',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
