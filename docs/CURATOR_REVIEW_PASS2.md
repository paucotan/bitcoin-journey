# Curator Review — Pass 2
**Date:** 2026-04-04
**Context:** Review of Phase 2 edits. All 10 guides have been touched. This pass logs remaining issues per guide.

---

## Summary of What Was Fixed (Phase 2 session)

- `docs/GUIDE_TEMPLATE.md` — new style guide created with before/after examples
- `WhatIsBitcoin.jsx` — full rewrite of opening + Revolutionary Properties + 21M section + How It Works + new "What It Doesn't Solve" section + Times front page image added
- `BitcoinSuccessStories.jsx` — fictional archetypes prominently labelled as composites; business section clarified
- `WhyBitcoinMattersNow.jsx` — opening rewritten; "saving = guaranteed poverty" → evidence-based number; P/E claim softened; fictional stories labelled; "Life Raft" headline softened
- `DollarCostAveraging.jsx` — opening rewritten with the Nov 2021/June 2022 narrative; "Bear markets create generational wealth" → qualified historical observation
- `SendReceiveBitcoin.jsx` — opening rewritten with personal stake; irreversibility connected to censorship-resistance philosophy
- `SecurityChecklist.jsx` — opening rewritten explaining why Bitcoin security is categorically different; two non-actionable checklist items replaced with one actionable one
- `BitcoinFees.jsx` — opening rewritten ("I paid $22..."); hardcoded $45k price updated to $100k illustrative; dead BitcoinFees.earn.com link removed
- `BitcoinMining.jsx` — opening rewritten ("Right now, as you read this..."); energy=trust framing added; nonce technical inaccuracy fixed; hardcoded $43k price updated to $100k
- `BitcoinCommonMistakes.jsx` — "Bitcoin always rebounds stronger" → qualified historical observation
- `TimePreference.jsx` — "saving becomes irrational" → evidence-based framing; Civilizational Impact section expanded to prose (Gothic cathedrals example)
- `FirstWallet.jsx` — opening rewritten with custody framing; tax disclaimer added
- `HardwareWallets.jsx` — competitor comparison section replaced with honest first-person note

---

## Remaining Issues by Guide

---

### WhatIsBitcoin.jsx
**Status: Strong. Minor remaining.**
- The double-spend problem is still not addressed — the curator's original note stands: "A reader who leaves without understanding the double-spend problem doesn't really understand what Bitcoin solved." Consider one paragraph in the "How It Works" section: why can't you just copy a Bitcoin file?
- The Bitcoin vs Altcoins section (Proof of Work vs Proof of Stake) is broadly accurate but reads slightly adversarial. Low priority.

---

### WhyBitcoinMattersNow.jsx
**Status: Mostly fixed. One issue remains.**
- "The Cost of Waiting" section still contains: *"The biggest risk isn't Bitcoin's volatility - it's the certainty of continued purchasing power erosion if you do nothing."* This is too absolute — doing nothing (e.g., holding index funds) is not the same as guaranteed erosion. Soften to: "One risk worth naming is continued purchasing power erosion in cash savings — but doing nothing means different things depending on what you already hold."
- The Bitcoin vs Inflation numbers (2020-2024: +400% Bitcoin vs -24.5% savings) remain in the guide. These are real figures but presenting them side by side without volatility context is doing persuasion, not education. Consider adding a one-line caveat that includes a bear market year (e.g., 2022) in the comparison.

---

### BitcoinSuccessStories.jsx
**Status: Credibility fixed. Structural question remains.**
- The individual composites (Sarah, Miguel, Alex, Linda) are now clearly labelled, which is the main fix. However, the section still takes up the majority of the guide. A future revision could replace 2-3 composites with properly cited paraphrases from Gladstein's documented cases, which would be stronger and more honest.
- The two unnamed business cases (coffee shop, real estate developer) are still presented without explicit composite labelling in their individual cards — they only have the section-level note. Consider adding "(Illustrative)" to each card subtitle.

---

### DollarCostAveraging.jsx
**Status: Good. One remaining issue.**
- The psychological challenge of DCA during a prolonged bear market is still not addressed. The guide now acknowledges the 2022 crash in the opening but doesn't speak to the emotional experience of watching your account fall for 18 months while continuing to buy. One honest paragraph here would make the guide more persuasive, not less. The template's "Honest Part" applies here.
- Strike is still mentioned twice as the only platform. Readers on other exchanges (Kraken, Coinbase, River) are given no useful information. Consider one sentence acknowledging this.

---

### SendReceiveBitcoin.jsx
**Status: Good opening. Troubleshooting section still weak.**
- The troubleshooting section is still too generic: "Transaction failed — Cause: Insufficient balance, invalid address, or wallet error. Solution: Check your balance, verify the address format, restart wallet." This covers three different problems with one vague solution. If this section stays, split each cause into its own entry with a specific action.
- The "easier than you think" framing has been removed from the opening — good. Check that it doesn't reappear elsewhere in the guide.

---

### SecurityChecklist.jsx
**Status: Strong opening fix. One checklist item still abstract.**
- "Verify SSL certificates for Bitcoin services" has been replaced with the bookmarked URLs guidance — good.
- Review the remaining checklist for any other items that are awareness rather than action (e.g., "be aware of phishing attempts" — what specifically should the reader do?).
- The progressive implementation (Week 1 / Week 2 / Week 3) is a strength — preserve it.

---

### BitcoinFees.jsx
**Status: Good. Calculator disclaimer could be stronger.**
- The hardcoded price is now $100k with a comment in the code. Consider surfacing this to the user in the UI: a small note under the calculator result that says "Using $100,000 as an illustrative BTC price. Check current price at mempool.space for accurate estimates."
- The emotional hook (personal $22 fee story) is now in place — good.

---

### BitcoinMining.jsx
**Status: Good. Network hashrate is still hardcoded.**
- `const networkHashRate = 600000000;` — this is the same problem as the BTC price. The network hashrate changes constantly and 600 EH/s (which is what this represents in TH/s) is likely out of date. Add a comment and consider surfacing an illustrative disclaimer to users in the calculator.
- The opening ("Right now, as you read this...") is the best opening this guide has had — preserve it.

---

### BitcoinCommonMistakes.jsx
**Status: Minimal fix only. Larger structural issues remain.**
- The scam coverage still skews toward obvious scams. More insidious scams (altcoin promoters, "Bitcoin coaching" services) still not covered.
- The tabbed structure means readers may never see the most important content. The investment mistakes tab arguably deserves to be surfaced first or as default. Consider changing `useState('Security')` default to `'Investment'` if investment mistakes are most consequential for most readers.
- The "Cost" labels are effective — preserve them.

---

### TimePreference.jsx
**Status: Good. Calculator disclaimer still needed.**
- The savings calculator default of 45% Bitcoin annual return is still present. The guide has a small disclaimer but the issue is bigger — the calculator is doing persuasion, not education. Consider either: (a) showing a range of scenarios including negative years, or (b) adding an explicit label: "Illustrative — past returns do not predict future performance. Bitcoin's worst 4-year period still produced positive returns, but individual years can be -80%."
- The Civilizational Impact section is now prose — good. The Gothic cathedrals example is the strongest passage added this session.

---

### FirstWallet.jsx
**Status: Good. Step-by-step walkthrough still missing.**
- The curator's biggest missed opportunity here was the absence of a concrete step-by-step walkthrough of making a first purchase. The guide still delegates this to Strike's own documentation. Even 5-6 numbered steps with descriptions ("Open Strike → tap Buy → enter $25 → confirm") would own the moment of maximum beginner anxiety.
- The tax note has been added — good.
- "You're not just setting up a wallet. You're taking your first step toward financial sovereignty" still appears at the bottom. The instinct is right but it arrives after the content has earned it — keep it.

---

### HardwareWallets.jsx
**Status: Strong. One remaining consideration.**
- The competitor section has been replaced — good. The guide is now tighter and the first-person credibility is intact.
- The Estate Planning section is still 6 bullets with minimal space. The curator's original note stands: this is one of the most anxiety-inducing aspects of self-custody ("What happens to my Bitcoin if I die?") and deserves more than a footnote. Future guide or expanded section.
- The USB-C cable comment is still in the "Daily Usage Reality" section. It's minor but still slightly out of register. Consider removing.

---

## Priority Order for Next Session

1. **WhatIsBitcoin.jsx** — add double-spend paragraph to "How It Works"
2. **BitcoinCommonMistakes.jsx** — change default tab to Investment; add insidious scam coverage
3. **WhyBitcoinMattersNow.jsx** — soften "Cost of Waiting"; add bear market year to Bitcoin vs Inflation comparison
4. **DollarCostAveraging.jsx** — add honest bear market psychology paragraph; mention platform alternatives
5. **BitcoinFees.jsx** — surface calculator price disclaimer to UI
6. **BitcoinMining.jsx** — surface hashrate disclaimer to UI
7. **TimePreference.jsx** — improve calculator disclaimer
8. **FirstWallet.jsx** — add step-by-step first purchase walkthrough
9. **BitcoinSuccessStories.jsx** — add "(Illustrative)" to individual business card subtitles; consider Gladstein citations for 1-2 composites
10. **SendReceiveBitcoin.jsx** — fix troubleshooting section specificity
11. **HardwareWallets.jsx** — remove USB-C comment; expand Estate Planning

---

## Platform Replacement (Strike → Shakepay / Kraken)

Strike is unavailable in Canada (where the author now lives). Replace across all guides:
- **Shakepay** — Canada-first beginner pick. Referral: https://shakepay.me/r/37LS65K ($20 each)
- **Kraken** — Global/international option. Referral: https://invite.kraken.com/JDNW/lzrhg3qf
- **Strike** — Mention as US-only option, not primary recommendation

Files needing changes (in priority order):
1. `FirstWallet.jsx` — structural rewrite, entire section built around Strike
2. `DollarCostAveraging.jsx` — "Top Choice" card
3. `BitcoinFees.jsx` — 2 light mentions of "Strike's priority feature"
4. `SendReceiveBitcoin.jsx` — 2 light mentions
5. `HardwareWallets.jsx` — opening "started with Strike" (first-person)
6. `BitcoinSuccessStories.jsx` — one composite story detail
7. `GuidesIndex.jsx` — "Strike vs Other Platforms" coming-soon title → rename to something generic

---

## Low Priority / Consistency

- **Key Takeaway section order** — The Key Takeaway block should appear *before* the Read Next section in all guides. Fixed in WhatIsMoney.jsx (2026-04-04). Not specified in GUIDE_TEMPLATE.md — not worth a dedicated pass, but apply opportunistically when editing any guide.
