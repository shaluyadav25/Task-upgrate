# upgrate Infotech — Homepage

> **Awwwards-grade, premium React homepage for [upgrate Infotech](https://upgrate.in/)**, an IT and digital marketing company based in Lucknow, India. Built with clean React 19, modular plain CSS, custom hooks, and zero heavy animation bloat.

---

## ✦ Key Highlights & Design Direction

- **Warm Gallery Aesthetic & Premium Background System**:
  - **Full-Screen Hero Background (`100svh`)**: Looping cinematic MP4 + WebM video with dark gradient overlay, film grain, and soft vignette. Includes lazy initialization, battery-saving viewport pause (`IntersectionObserver`), and a graceful poster fallback with a slow CSS Ken Burns zoom animation for data-saver mode, reduced-motion preferences, or loading failures.
  - **Services Section**: Soft light background with a subtle CSS dotted grid pattern (`radial-gradient`) and two floating blurred gradient orbs (Electric Indigo & Lime).
  - **Stats & Manifesto Section**: Full-width dark WebP image with dynamic parallax scroll effect, ambient glow, and high-contrast counters.
  - **CTA Section**: Pure CSS animated mesh gradient (Electric Indigo, Violet, Lime) using hardware-accelerated keyframe animation.
  - **Footer**: Rich dark background with faint world map and Lucknow network-lines SVG pattern at 5% opacity.
- **Micro-Interactions**:
  - CSS-only noise grain texture overlay.
  - Ambient cursor glow that follows the mouse on desktop (disabled on touch devices).
  - Magnetic buttons with forward-sliding arrow animations on hover.
  - Interactive bento grid with smooth hover color morphing (Indigo/Lime).
  - Parallax floating cards collage with live CRM pipeline and performance chart.
  - Rotating circular text badge (`We code · We design · We market ·`).
  - Interactive values accordion with expanded principles.
  - Auto-playing client testimonial quote carousel with hover pause and keyboard controls.
  - Top scroll progress bar & smooth floating scroll-to-top button.
- **Accessible & Responsive**: Full keyboard navigation, semantic HTML with single `h1`, ARIA attributes, mobile drawer menu, and complete respect for `prefers-reduced-motion`.

---

## 🛠 Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Pure Modular CSS with CSS Variables, Flexbox, and CSS Grid (Zero Tailwind, zero heavy UI dependencies)
- **Typography**: Google Fonts — *Bricolage Grotesque* (Headings), *DM Sans* (Body), and *JetBrains Mono* (Technical indices & tags)
- **Custom Hooks**:
  - `useInView`: Efficient viewport intersection detection via `IntersectionObserver`
  - `useCountUp`: Smooth `requestAnimationFrame` ease-out number animation
  - `useMousePosition`: Normalized pointer coordinates with touch-screen detection

---

## 📁 Project Architecture

```
task-upgrate/
├── index.html                  # SEO metadata, Open Graph, Favicon SVG, Google Fonts
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                # React root mount
│   ├── index.css               # Imports global stylesheet
│   ├── App.jsx                 # App root orchestrating all 11 sections
│   ├── styles/
│   │   ├── variables.css       # Design tokens (:root colors, fluid type clamp, spacing)
│   │   └── global.css          # CSS reset, tactile grain overlay, utility classes
│   ├── hooks/
│   │   ├── useInView.js        # IntersectionObserver hook
│   │   ├── useCountUp.js       # RAF ease-out counter hook
│   │   └── useMousePosition.js # Pointer tracking with touch detection
│   ├── data/
│   │   ├── navData.js          # Navigation links, mega-menu, phone & WhatsApp data
│   │   ├── servicesData.js     # 8 Bento grid services & marquee ticker items
│   │   ├── statsData.js        # Manifesto statement & 4 animated counters
│   │   ├── whyChooseData.js    # 6 Differentiators with metrics
│   │   ├── processData.js      # Discover → Design → Develop → Deliver phases
│   │   ├── valuesData.js       # 6 Core values with operating principles
│   │   ├── testimonialsData.js # 5 Verified client review records
│   │   └── footerData.js       # Contact info, social links, quick links
│   └── components/
│       ├── ui/
│       │   ├── Button.jsx          # Magnetic button with sliding arrow
│       │   ├── Button.css
│       │   ├── SectionHeading.jsx  # Editorial number badge & kicker heading
│       │   ├── SectionHeading.css
│       │   ├── Card.jsx            # Bento card wrapper with 28px radius
│       │   ├── Card.css
│       │   ├── CursorGlow.jsx      # Desktop ambient cursor follower
│       │   └── CursorGlow.css
│       ├── ScrollProgress.jsx  # Top fixed scroll progress bar
│       ├── ScrollProgress.css
│       ├── ScrollToTop.jsx     # Floating return-to-top trigger
│       ├── ScrollToTop.css
│       ├── Navbar.jsx          # Floating glass pill navbar + mega dropdown + mobile menu
│       ├── Navbar.css
│       ├── Hero.jsx            # Hero headline, SVG underline, floating cards collage
│       ├── Hero.css
│       ├── Marquee.jsx         # Infinite horizontal ticker
│       ├── Marquee.css
│       ├── Services.jsx        # Numbered 8-card Bento grid with hover themes
│       ├── Services.css
│       ├── Stats.jsx           # Dark inverted manifesto with count-up metrics
│       ├── Stats.css
│       ├── WhyChoose.jsx       # Sticky left heading + stacked right cards
│       ├── WhyChoose.css
│       ├── Process.jsx         # 4-stage sprint timeline with scroll progress bar
│       ├── Process.css
│       ├── Values.jsx          # Interactive values accordion list
│       ├── Values.css
│       ├── Testimonials.jsx    # Large quote carousel with autoplay & pause
│       ├── Testimonials.css
│       ├── CTA.jsx             # Electric Indigo CTA with Lime & WhatsApp buttons
│       ├── CTA.css
│       ├── Footer.jsx          # Complete contact info, socials & giant wordmark
│       └── Footer.css
```

---

## 🚀 Setup & Run Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to explore the homepage.

### 3. Run Production Build
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

### 5. Run ESLint Code Quality Verification
```bash
npm run lint
```

---

## 🏢 Contact Information

- **Company**: upgrate Infotech
- **Website**: [https://upgrate.in/](https://upgrate.in/)
- **Phone Primary**: [+91-7705888867](tel:+917705888867)
- **Phone Secondary**: [+91-9506688867](tel:+919506688867)
- **WhatsApp**: [https://wa.me/917705888867](https://wa.me/917705888867)
- **Email**: [info@upgrate.in](mailto:info@upgrate.in)
- **Headquarters**: Shushant Golf City, Shaheed Path, Lucknow, Uttar Pradesh - 226030, India
"# Task-upgrate" 
