# NeuralFlow — AI Data Automation Platform

> Frontend Battle Round 1 Submission — Built in 4 hours

![NeuralFlow](https://img.shields.io/badge/NeuralFlow-AI%20Platform-FFC801?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v3-06B6D4?style=for-the-badge&logo=tailwindcss)

##  Live Demo
**[https://frontend-hackathon-alpha.vercel.app](https://frontend-hackathon-alpha.vercel.app)**

---

##  Overview

NeuralFlow is a premium, high-converting, fully responsive landing page for an AI-driven data automation platform. Built as a submission for Frontend Battle Round 1, this project demonstrates architectural integrity, engineering speed, motion choreography, and SEO hygiene under a strict 4-hour countdown.

---

## Features Implemented

###  Feature 1 — Matrix-Driven Pricing Engine (40 pts)
- Monthly / Annual billing toggle with 20% annual discount
- Multi-currency switcher: USD ($), INR (₹), EUR (€)
- Prices calculated dynamically using a multi-dimensional configuration matrix
- **Zero hardcoded UI values** — all prices derived from `pricingMatrix.js`
- State strictly isolated inside `<Pricing />` — no global re-renders on toggle/switch

###  Feature 2 — Bento-to-Accordion with Context Persistence (10 pts)
- Desktop: Varied Bento Grid layout with tall, wide, and normal cards
- Mobile: Touch-optimized Accordion list
- **Context Persistence:** Active hover index on desktop automatically transfers to open Accordion panel on mobile viewport resize
- Zero external UI or animation libraries — built from scratch

###  SEO & Semantic HTML (30 pts)
- Fully semantic markup: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- Complete meta tags: title, description, keywords, author, robots
- Open Graph tags for social sharing
- Twitter Card meta tags
- Canonical URL
- Crawlable text nodes throughout

###  UI/UX & Motion (30 pts)
- Micro-interactions: 150–200ms ease-out (hover states, toggles)
- Layout reflows: 300–400ms ease-in-out (accordion open/close)
- Page loader with spinning animation — completes under 500ms
- Smooth page fade-in after loader
- All animations via native CSS Transitions — no runtime animation engines
- Hardware-accelerated transforms throughout

---

##  Asset Compliance

| Asset | Status |
|---|---|
| Color Palette (all 6 hex codes) |  Used throughout |
| JetBrains Mono (headers/mono) |  Applied |
| Inter (body/UI text) |  Applied |
| SVG Pack (14 icons) |  Used in Hero + Features |

---

##  Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 8 | Build tool |
| Tailwind CSS | v3 | Utility styling |
| CSS Variables | — | Design tokens |
| Native CSS Transitions | — | All animations |
| Vercel | — | Deployment |

---

##  Banned Libraries — Confirmed Not Used
-  Framer Motion
-  Shadcn UI
-  Radix UI
-  HeadlessUI
-  Any runtime CSS-in-JS animation engine

---

##  Project Structure
src/

├── assets/

│   └── svgs/          # All 14 provided SVG icons

├── components/

│   ├── Loader.jsx      # Entry animation (< 500ms)

│   ├── Navbar.jsx      # Fixed nav, mobile hamburger

│   ├── Hero.jsx        # Hero with dashboard mockup

│   ├── Features.jsx    # Bento Grid + Accordion (Feature 2)

│   ├── Pricing.jsx     # Dynamic pricing engine (Feature 1)

│   ├── SocialProof.jsx # Stats, companies, testimonials

│   ├── FAQ.jsx         # Accordion FAQ section

│   ├── CTA.jsx         # Call to action section

│   └── Footer.jsx      # Site footer

├── data/

│   └── pricingMatrix.js # Pricing config object

├── App.jsx

├── main.jsx

└── index.css           # Fonts, CSS variables, Tailwind

---

##  Color Palette

| Name | Hex | Usage |
|---|---|---|
| Arctic Powder | `#F1F6F4` | Primary text |
| Mystic Mint | `#D9E8E2` | Secondary text |
| Forsythia | `#FFC801` | Primary accent |
| Deep Saffron | `#FF9932` | Secondary accent |
| Nocturnal Expedition | `#114C5A` | Section backgrounds |
| Oceanic Noir | `#172B36` | Base background |

---

##  Performance

- Initial loader completes in < 500ms
- No layout thrashing on currency/billing toggle
- State updates isolated to targeted DOM text nodes
- Hardware-accelerated CSS transforms only
- No Time to Interactive (TTI) blocking

---

##  Running Locally

```bash
# Clone the repository
git clone https://github.com/mittalmadhav1212/frontend-hackathon.git

# Navigate into project
cd frontend-hackathon

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

##  Submission Details

| Item | Link |
|---|---|
| Live Deployment | [https://frontend-hackathon-alpha.vercel.app](https://frontend-hackathon-alpha.vercel.app) |
| GitHub Repository | [https://github.com/mittalmadhav1212/frontend-hackathon](https://github.com/mittalmadhav1212/frontend-hackathon) |

---

##  Built By

**Madhav Mittal**
Frontend Battle — Round 1
26th June 2026
