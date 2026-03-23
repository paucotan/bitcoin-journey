# Bitcoin Journey — Claude Instructions

## Project overview

Educational Bitcoin site for the quietly curious skeptic. Stack: Vite + React 18 + TypeScript (allowJs) + Tailwind CSS + React Router v7. Deployed on Vercel from `main` branch. Repo: github.com/paucotan/bitcoin-journey.

Local dev: `npm run dev` → http://localhost:5173/

## Key documents — read before making content or copy decisions

- **`docs/CREATIVE_BRIEF.md`** — north star document. Defines the target reader, emotional arc (awake → understand → hopeful → agency), tone, guide tiers, and the guiding principle: *curiosity over conviction*. Read this before touching any copy.
- **`docs/CURATOR_REVIEW.md`** — guide-by-guide critique from the museum curator perspective. Read before editing any guide or landing page section.
- **`docs/LANDING_PAGE_OVERHAUL.md`** — full plan for the landing page content revamp (Phase 1a). Contains section-by-section direction, guiding principles, and open questions. Read before editing `Landing.jsx` or its component files.
- **`docs/UI_AUDIT.md`** — visual UI/UX audit of the landing page (conducted 2026-03-22). Prioritised list of 8 issues across hero, section transitions, guide cards, calculator, charts, and more. Reference for Phase 1b work.

## Tone rules (summary — full detail in CREATIVE_BRIEF.md)

1. Lead with a question, not a verdict
2. Name the mechanism, not the villain
3. Evidence before conclusion, always
4. Museum register: honest about its perspective, not a recruitment poster
5. Hope is the destination, not anger

## Phase status

- **Phase 1a** (landing page copy revamp): complete — committed
- **Phase 1b** (landing page UI/visual): next
- **Phase 2** (guide section revamp): after 1b

## Critical source files

- `src/pages/Landing.jsx` — landing page
- `src/components/UI/BitcoinMoralCode.jsx` — "Two Systems, Different Rules" section
- `src/components/UI/SocietalDeclineCharts.jsx` — data exhibition section
- `src/components/UI/BitcoinVsAltcoins.jsx` — needs full text review before any edits (credibility/legal risk if named altcoins called fraudulent)
- `src/pages/guides/` — all guide components (Phase 2)

## Slash commands

- `/curator` — museum curator agent; reads CREATIVE_BRIEF.md + CURATOR_REVIEW.md automatically; can interview, review specific guides, or critique copy; does NOT write code
- `/webdev` — UI/UX web developer agent; reads CREATIVE_BRIEF.md + docs/ automatically; can visually audit the live site in Chrome (port 5173), screenshot pages, propose UI improvements; does NOT write code or make content decisions

## Guide tiers (from CREATIVE_BRIEF.md)

- **Permanent Collection** (core): What Is Bitcoin, Why Bitcoin Matters Now, Time Preference — plus recommended new guide: What Is Money?
- **Gift Shop** (practical): First Wallet, Hardware Wallets, DCA, Send/Receive, Common Mistakes, Security Checklist
- **Reference**: Bitcoin Fees, Bitcoin Mining, Bitcoin Success Stories
