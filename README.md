# World Safety Supply Center, Inc. (WSSCI)

A modern, high-performance website for **World Safety Supply Center, Inc.** — the Philippines' trusted source for premium CE & OSHC certified Personal Protective Equipment (PPE) powered by DELTAPLU.

🌐 **Live Site**: [https://wssci.vercel.app](https://wssci.vercel.app)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Styling](#styling)
- [Performance Optimizations](#performance-optimizations)
- [Contact](#contact)

---

## 🏢 About

World Safety Supply Center, Inc. (WSSCI) specializes in providing high-quality, certified Personal Protective Equipment (PPE) to businesses and industries across the Philippines. This website serves as the digital storefront and information hub for their products and services.

**Key Products:**
- Safety Shoes
- Head Protection
- Eye Protection
- Body Protection
- Fall Protection

---

## ✨ Features

- **Responsive Design** — Works seamlessly on mobile, tablet, and desktop
- **Fast Performance** — Optimized loading with critical resource preloading
- **Product Catalog** — Browse and filter safety equipment by category
- **Contact Form** — Easy-to-use inquiry system
- **Company Information** — Learn about WSSCI and their mission
- **Social Integration** — Connect via Facebook and email
- **Accessible Navigation** — Mobile-friendly menu with keyboard support
- **Modern UI** — Clean, professional design with smooth interactions

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic markup and structure |
| **JavaScript (ES Modules)** | Dynamic routing and interactivity |
| **Tailwind CSS** | Utility-first styling |
| **Font Awesome** | Icon library |
| **Vercel** | Hosting and deployment |

---

## 📁 Project Structure

```
wssci/
├── index.html              # Main HTML entry point
├── package.json            # Project dependencies
├── package-lock.json       # Locked dependency versions
├── tailwind.config.js      # Tailwind CSS configuration
├── black-logo.svg          # Logo (black variant)
├── white-logo.svg          # Logo (white variant)
├── logo.png                # Logo (PNG format)
├── css/
│   ├── input.css           # Tailwind input styles
│   ├── output.css          # Generated compiled styles
│   ├── fonts.css           # Custom font definitions
│   └── all.min.css         # Font Awesome icons
├── js/
│   ├── app.js              # Main application entry
│   ├── router.js           # Client-side routing logic
│   ├── utils.js            # Utility functions
│   ├── data.js             # Product and content data
│   ├── lucide.min.js       # Lucide icon library
│   └── pages/
│       └── home.js         # Home page component
├── assets/
│   ├── fonts/              # Preloaded custom fonts
│   └── webfonts/           # Font Awesome web fonts
└── .vscode/                # VS Code configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Junieelll/wssci.git
   cd wssci
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build CSS** (if making style changes)
   ```bash
   npm run build:css
   ```

4. **Serve locally** (using a local server)
   ```bash
   npx http-server
   ```
   Then open `http://localhost:8080` in your browser.

---

## 📝 Available Scripts

### `npm run build:css`
Compiles Tailwind CSS and minifies the output stylesheet. Run this whenever you modify the CSS or add new Tailwind utilities.

```bash
npm run build:css
```

### `npm run watch:css`
Watches for CSS changes and automatically recompiles on save. Useful during development.

```bash
npm run watch:css
```

---

## 🎨 Styling

This project uses **Tailwind CSS** for styling with custom configuration:

- **Custom Colors**: Brand colors are defined in `tailwind.config.js`
- **Custom Fonts**: Located in `assets/fonts/` with preloading for performance
- **Responsive Classes**: Mobile-first approach using Tailwind breakpoints (`sm`, `lg`, etc.)
- **Dark Theme**: Dark background with light text for premium feel

### Modifying Styles

1. Edit `css/input.css` to add custom CSS or Tailwind directives
2. Run `npm run build:css` to compile changes
3. The output is saved to `css/output.css`

---

## ⚡ Performance Optimizations

This website implements several performance best practices:

### Resource Preloading
- **Critical fonts** are preloaded to avoid render-blocking
- **ES Module preloads** reduce sequential chaining latency
- **High priority images** use `fetchpriority="high"`

### Code Splitting
- JavaScript modules are split by functionality (router, utils, pages)
- Lazy loading of page components via client-side routing

### CSS Optimization
- Tailwind CSS is minified in production
- Unused styles are purged automatically

### Lazy Asset Loading
- Deferred script loading for non-critical JavaScript
- Optimized image formats and sizes

---

## 🔗 Navigation Routes

The site uses client-side routing with hash-based URLs:

| Route | Page |
|---|---|
| `#/` | Home |
| `#/products` | Product Catalog |
| `#/categories` | Product Categories |
| `#/about` | About Us |
| `#/contact` | Contact Form |

---

## 📞 Contact

**World Safety Supply Center, Inc.**
- 📧 Email: [worldsafetysci@gmail.com](mailto:worldsafetysci@gmail.com)
- 📍 Location: Marilao, Bulacan, Philippines
- 👥 Facebook: [Visit our page](https://www.facebook.com/profile.php?id=61554434231420)

---

## 📄 License

This project is proprietary and owned by World Safety Supply Center, Inc.

---

## 🤝 Contributing

For contributions or bug reports, please contact the development team.

---

**Built with ❤️ for workplace safety.**
