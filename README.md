# The Bitcoin Journey

An educational Bitcoin resource with 13 practical guides covering everything from your first wallet to advanced topics like mining and time preference.

## Tech Stack

- **Vite** - Build tool and dev server
- **React 18** - UI framework with hooks and lazy loading
- **TypeScript** - Type support (allowJs enabled, .js files work alongside .ts)
- **Tailwind CSS** - Utility-first CSS (proper PostCSS install, no CDN)
- **React Router v7** - Client-side routing with code-split lazy routes
- **Vercel Analytics & Speed Insights** - Production monitoring

## Project Structure

```
src/
  App.js                  # Root component with Analytics
  AppRouter.js            # All routes, lazy-loaded guide pages
  index.js                # Entry point, imports index.css
  index.css               # Tailwind directives
  hooks/
    useReadGuides.ts      # localStorage-backed read tracking
  pages/
    Landing.js
    About.js
    guides/               # 13 guide pages (lazy loaded)
      GuidesIndex.js
      FirstWallet.js
      WhatIsBitcoin.js
      ...
  components/
    Layout/
      TopNavigation.js
  data/
    historicalData.js
  utils/
    markdownParser.js
  assets/
    guides/               # Markdown source files for guides
```

## Available Guides

- Your First Bitcoin Wallet
- What is Bitcoin?
- Why Bitcoin Matters Now
- How to Send & Receive Bitcoin
- Time Preference: Why Sound Money Makes Better People
- Self-Custody: Hardware Wallets
- Bitcoin for Beginners: Common Mistakes
- Bitcoin Security Checklist
- Dollar Cost Averaging Bitcoin
- Bitcoin Success Stories
- Bitcoin Mining Explained
- Understanding Bitcoin Fees
- Bitcoin Mining (technical deep dive)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/paucotan/bitcoin-journey.git
cd bitcoin-journey
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in the browser.

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Deployment

Deployed on Vercel. Push to main branch triggers automatic deployment.

## License

Open source under the [MIT License](LICENSE).
