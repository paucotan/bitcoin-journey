---
description: Start dev server, open in Chrome, screenshot & debug key pages
allowed-tools: Bash(npm:*), Bash(lsof:*), Bash(kill:*), mcp__claude-in-chrome__tabs_context_mcp, mcp__claude-in-chrome__tabs_create_mcp, mcp__claude-in-chrome__navigate, mcp__claude-in-chrome__read_page, mcp__claude-in-chrome__read_console_messages, mcp__claude-in-chrome__gif_creator, mcp__claude-in-chrome__javascript_tool, mcp__claude-in-chrome__find, mcp__claude-in-chrome__computer
---

You are running a visual preview and debug session for the Bitcoin Journey site.

## Step 1 — Ensure dev server is running

Check if Vite is already running on port 5173:
`!lsof -ti:5173`

- If a process is found: server is already running, skip starting it.
- If nothing is found: start it with `npm run dev` in the background from the project root `/Users/ocean/code/paucotan/archive/personal_projects/bitcoin-journey`. Wait ~3 seconds for it to boot before proceeding.

## Step 2 — Open Chrome and get a tab

Use `mcp__claude-in-chrome__tabs_context_mcp` to see open tabs. Create a new tab with `mcp__claude-in-chrome__tabs_create_mcp`.

## Step 3 — Visit and screenshot these pages in order

For each page:
1. Navigate using `mcp__claude-in-chrome__navigate`
2. Wait for the page to settle (use `mcp__claude-in-chrome__read_page` to confirm content loaded)
3. Check console with `mcp__claude-in-chrome__read_console_messages` — note any errors or warnings
4. Take a screenshot using `mcp__claude-in-chrome__computer` (action: screenshot)

Pages to visit:
- `http://localhost:5173/` — Landing page
- `http://localhost:5173/guides` — Guides index (check guide cards, read badges)
- `http://localhost:5173/guides/first-wallet` — A guide page (check layout, typography, Tailwind styles)
- `http://localhost:5173/guides/bitcoin-fees` — Another guide (has dynamic color classes — verify they render)

## Step 4 — Record a GIF of the guides flow (optional but great for sharing)

Use `mcp__claude-in-chrome__gif_creator` to capture navigating from Landing → Guides → one guide page. Name it `bitcoin-journey-preview.gif`.

## Step 5 — Analyze and report

After visiting all pages, report:

**Visual check:**
- Do Tailwind styles render correctly? (dark backgrounds, orange accents, correct typography)
- Are guide cards showing properly in GuidesIndex?
- Does the read badge system appear to work?
- Any layout breaks or unstyled content (flash of unstyled content = CDN Tailwind still loading)?

**Console check:**
- List any errors or warnings found
- Note if any are from Google Translate (expected/ignorable) vs real app errors

**Performance observation:**
- Do guide pages load as separate chunks? (lazy loading working)

## Step 6 — Fix any issues found

If you find broken styles, console errors, or rendering problems:
1. Identify the root cause by reading the relevant source files
2. Fix directly (Edit/Write tools)
3. The dev server hot-reloads — navigate back to the affected page in Chrome to verify the fix
4. Repeat until clean

## Step 7 — Final summary

Report:
- ✅ Pages that look correct
- ⚠️ Any issues found and whether they were fixed
- 🐛 Any remaining issues that need attention
- Screenshot paths or GIF path if recorded
