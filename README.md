# Hilink UI

A modern travel and outdoor adventure landing page built with Next.js and Tailwind CSS. Designed as a clean, responsive UI template for travel web applications.

## Preview

The landing page includes the following sections:

- **Hero** -- Headline with star ratings, CTA buttons, and a location info card
- **Camp** -- Horizontally scrollable camp site cards with background images and avatar groups
- **Guide** -- Trail navigation showcase with a floating destination progress card
- **Features** -- Grid layout highlighting offline maps, scheduling, AR trails, and new destinations
- **Get App** -- Download call-to-action with App Store and Google Play buttons
- **Footer** -- Site links, contact info, and social media icons

## Tech Stack

| Layer   | Technology        |
| ------- | ----------------- |
| Framework | Next.js 15      |
| UI        | React 19        |
| Styling   | Tailwind CSS 3  |
| Language  | JavaScript (JSX) |

## Project Structure

```
hilink-ui/
  app/
    favicon.ico
    globals.css          # Tailwind directives and custom utility classes
    layout.js            # Root layout with Navbar and Footer
    page.js              # Home page composing all sections
  components/
    Button.jsx           # Reusable button with icon support
    Camp.jsx             # Camp sites section with horizontal scroll
    Features.jsx         # Feature grid with icons
    Footer.jsx           # Footer with links, contact, and socials
    GetApp.jsx           # App download CTA section
    Guide.jsx            # Trail guide section with progress card
    Hero.jsx             # Hero section with CTA and location card
    Navbar.jsx           # Navigation bar with responsive menu
  constant/
    index.js             # All static data (nav links, features, footer, socials)
  public/
    hilink-logo.svg      # Brand logo
    icons/               # SVG icons (UI, social, platform)
    images/              # PNG images (backgrounds, avatars, photos)
  tailwind.config.mjs    # Custom colors, backgrounds, breakpoints
  postcss.config.mjs     # PostCSS configuration
  next.config.mjs        # Next.js configuration
  package.json
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
git clone <repository-url>
cd hilink-ui
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Customization

All static text content is centralized in `constant/index.js`. Update the following exports to match your brand:

- `NAV_LINKS` -- Navigation menu items
- `FEATURES` -- Feature section titles, icons, and descriptions
- `FOOTER_LINKS` -- Footer link columns
- `FOOTER_CONTACT_INFO` -- Phone and email
- `SOCIALS` -- Social media icon paths

Background images and color themes are configured in `tailwind.config.mjs` under the `extend` section.

## Available Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start development server       |
| `npm run build` | Create production build         |
| `npm start`     | Serve production build          |
| `npm run lint`  | Run ESLint checks               |

## License

This project is open source and available under the [MIT License](LICENSE).
