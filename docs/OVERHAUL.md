# Bitcoin Journey - Project Overhaul Tracking

This document tracks the migration from CRA + CDN Tailwind to Vite + proper Tailwind install,
and the cleanup of all dead course/chapter/lesson code.

---

## Phase 1: Create OVERHAUL.md
- [x] Create this tracking document

## Phase 2: Delete Legacy Files & Clean AppRouter
- [x] Delete Dashboard.js, ChapterView.js, LessonView.js
- [x] Delete AppContext.js, mockData.js, App.js.backup, Header.js
- [x] Update AppRouter.js (removed dead routes, added lazy imports, added Suspense, removed AppProvider wrapper)

## Phase 3: Migrate to Vite
- [x] Created vite.config.js
- [x] Created root index.html (moved from public/, removed CDN Tailwind, added module script)
- [x] Updated package.json (replaced react-scripts with vite, updated scripts, removed browserslist, added "type":"module")
- [x] Renamed all src/*.js files to *.jsx (required for Vite's rollup import analysis)
- [x] npm install completed - 1154 CRA packages removed, Vite deps installed
- [x] `npm run build` passes cleanly (71 modules, 13 lazy guide chunks)

## Phase 4: Proper Tailwind Install
- [x] Created tailwind.config.js (with safelist for dynamic colors: green, blue, orange, red)
- [x] Created postcss.config.js
- [x] Created src/index.css with @tailwind directives
- [x] Updated src/index.jsx to import index.css
- [x] Tailwind installed and working in production build (49.5 kB CSS output)

## Phase 5: TypeScript Config
- [x] Created tsconfig.json (allowJs: true, strict: false for incremental migration)
- [x] src/hooks/useReadGuides.ts created as first TypeScript file

## Phase 6: Analytics Fix
- [x] Fixed App.js - changed `@vercel/analytics/next` to `@vercel/analytics/react`

## Phase 7: Remove console.logs
- [x] Removed console.log statements from src/data/historicalData.js (lines 373-381)
- [x] Removed console.error from src/utils/markdownParser.js (line 51), replaced with comment

## Phase 8: Read Tracking Hook
- [x] Created src/hooks/useReadGuides.ts
- [x] Updated GuidesIndex.js: added import, added hook call, added read badge in card header

## Phase 9: Update README.md
- [x] Rewrote README to reflect Vite/React/TypeScript/Tailwind stack and guides-only structure

## Phase 10: Cleanup
- [x] Added build/ and dist/ to .gitignore

---

## Summary

All phases complete. Production build verified clean with `npm run build`.

```bash
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build locally
```
