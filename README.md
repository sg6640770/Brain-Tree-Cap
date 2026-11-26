# BrainTree Capital — Marketing Site

Marketing site for BrainTree Capital (braintreecap.com): professionally managed global investment portfolios (UCITS ETFs) for Indian residents, NRIs and foreign investors.

## Tech Stack

- React 19 + Vite 8
- Tailwind CSS 3
- Framer Motion (scroll/reveal animations)
- Three.js (interactive globe)
- React Router 7

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (hot reload)
npm run dev

# 3. Open the local URL shown in the terminal
#    (usually http://localhost:5173)
```

## Build for Production

```bash
npm run build     # outputs to ./out
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  content/siteContent.js     # All copy, nav, data (single source of truth)
  lib/animation.js           # Shared Framer Motion variants + viewport settings
  lib/motion-helpers.jsx     # Reveal, StaggerContainer, CountUp components
  components/
    layout/                  # Navbar (scroll-spy), SiteFooter, AnnouncementBar
    home/                    # Hero, sections, FinalCTA
    portfolio/               # Phone mockup, PyramidLayersView
    globe/                   # Three.js globe with gold routes from India
    common/                  # Buttons, BrandLogo, SectionHeader
  pages/                     # Home, Contact, AllWeather
```
