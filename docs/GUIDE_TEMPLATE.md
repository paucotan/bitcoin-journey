# Guide Style Template
**For use when editing any guide in Phase 2.**
Read CREATIVE_BRIEF.md and CURATOR_REVIEW.md before applying this template.

---

## The Core Problem with the Current Guides

The landing page earns attention with story, evidence, and human stakes. The guides spend that attention on definitions. A reader who just felt something on the landing page clicks into a guide and hits a bullet list. The emotional momentum dies.

The fix is not a redesign. It's a different opening strategy, applied consistently.

---

## The Opening Formula

Every guide must open with **3 elements in this order**:

### 1. The Curiosity Gap (1–3 sentences)
Open with something surprising, specific, or counterintuitive. A fact, a moment in time, a question, a cost. Do NOT open with a definition. Do NOT open with "X is Y."

> **Wrong:** "Dollar Cost Averaging is an investment strategy where you buy a fixed dollar amount of Bitcoin at regular intervals."
>
> **Right:** "In November 2021, Bitcoin hit $69,000. Thousands of people put their life savings in that week. By June 2022, the price was $18,000. Most of them sold, locking in the loss. The investors who simply bought the same small amount every week — through the peak, through the crash, through the recovery — came out ahead. That strategy is called Dollar Cost Averaging."

The curiosity gap does not need to be long. It needs to make the reader want the next sentence.

### 2. The Personal Stake (1 sentence)
Connect the topic to the reader's situation before asking them to learn anything technical. Why does this matter *to them*, right now?

> **Wrong:** "Bitcoin fees are determined by network demand and measured in satoshis per virtual byte."
>
> **Right:** "I paid $22 to move $150 worth of Bitcoin once, because I didn't understand how fees worked. Here's what I wish I'd known."

### 3. The Promise (1 sentence)
Tell the reader what they will be able to do or understand by the end. Concrete, not vague.

> **Wrong:** "This guide covers everything you need to know about Bitcoin wallets."
>
> **Right:** "By the end of this guide, you'll know exactly which type of wallet to start with and how to make your first $25 purchase without losing it."

---

## Voice Rules

### Use first-person where experience is authentic
The HardwareWallets guide is the model. "After 6 months keeping Bitcoin on exchanges, I finally took the leap to self-custody." That voice is trustworthy because it signals real experience.

Apply first-person to:
- The opening (the personal stake sentence above)
- Moments of genuine recommendation ("I use X because...")
- Emotional checkpoints ("The moment I saw my balance in my own wallet...")

Do NOT use first-person for:
- Technical explanations you are not the author of
- Historical facts
- Claims that require sourcing

### Bullet lists are for reference, not for narrative
If a section can be told as a paragraph, tell it as a paragraph. Reserve bullet lists for:
- Checklists the reader will literally follow
- Comparison tables
- Step-by-step instructions with discrete actions

The "Revolutionary Properties" section in WhatIsBitcoin is a list of four items that each deserve a sentence of explanation. They get one line each. That's where guides lose the reader.

### Evidence before conclusion, always
State the fact. Then state what it means. Never state the conclusion first and then justify it.

> **Wrong:** "Saving money is irrational under fiat because inflation erodes purchasing power."
>
> **Right:** "$10,000 left in a savings account in 2020 had the purchasing power of roughly $8,400 by 2024, after inflation. The account balance didn't change. The money did."

---

## Section Order (Standard Guide)

1. **Opening** — curiosity gap + personal stake + promise (see above)
2. **The Human Story** — why this topic exists, grounded in a real moment or real stakes. For Bitcoin guides, this is usually 2008, or a specific documented case, or the reader's own situation.
3. **The Core Explanation** — what the thing actually is. Earn the right to be technical by establishing human stakes first.
4. **The Practical Part** — what the reader actually does. Step-by-step where relevant. Specific, not generic.
5. **The Honest Part** — what this doesn't solve, what to watch out for, where the counterarguments live. One short section that acknowledges complexity builds more trust than ten sections that don't.
6. **The Close** — one concrete next action. Not a list of next steps. One thing.

Not every guide needs all six sections. Reference guides (Fees, Mining) can skip The Human Story and go straight to The Core Explanation — but they still need The Opening.

---

## Tone Reminders

- **Curious, not recruiting.** Present the case. Let the reader decide. "Here's what the data shows" beats "this will change your life."
- **Morally serious, not angry.** The site can name a problem without naming a villain.
- **Hopeful, not urgent.** Urgency feels like pressure. Hope feels like invitation.
- **Specific, not vague.** "$10,000 in 2020 = $8,400 in purchasing power by 2024" beats "inflation erodes savings." Numbers, names, dates.

---

## What to Remove When Editing

- Fictional "success stories" presented as real people (Sarah the teacher, Miguel the nurse, Alex the developer). Either cut or reframe explicitly as illustrative composites.
- Hardcoded price figures in calculators without a disclaimer that they are illustrative.
- Bullet list items that are not actionable (e.g., "Be cautious of man-in-the-middle attacks").
- Phrases that overreach: "Bitcoin always rebounds stronger," "saving money is irrational," "Bear markets create generational wealth." Replace with historical observation + appropriate uncertainty.
- Dead links or outdated tools (BitcoinFees.earn.com).

---

## Before / After: WhatIsBitcoin.jsx

This is a worked example. Use it as the reference for what "applying the template" looks like in practice.

---

### BEFORE — Current opening

```
Bitcoin is the world's first truly scarce digital money. Unlike every currency in human history,
no one can create more Bitcoin beyond the 21 million limit. This changes everything.
```

**Why it fails:** Opens with the conclusion. Assumes the reader already cares about monetary scarcity. Gives them no reason to keep reading if they don't.

---

### AFTER — Revised opening (template applied)

```
In September 2008, Lehman Brothers collapsed. The US government spent $700 billion of taxpayer
money bailing out the banks that caused the crisis. Regular people lost their homes.

Two months later, an anonymous programmer called Satoshi Nakamoto published a nine-page document
describing a different kind of money — one that no government could print, no bank could freeze,
and no bailout could dilute. In the very first block of that system, Satoshi embedded a newspaper
headline: "Chancellor on brink of second bailout for banks."

That was not an accident. It was a mission statement.

This guide explains what Bitcoin is, why it was built, and why the answer to those two questions
is the same thing.
```

**Why it works:**
- Opens with a specific moment in time (2008, Lehman) — not a definition
- Establishes human stakes (homes lost, taxpayer bailouts) before any technical content
- The Satoshi headline does double duty: it's historically accurate AND emotionally resonant
- The promise ("explains what Bitcoin is, why it was built") is concrete and earned

---

### BEFORE — "Revolutionary Properties" section

```
The Revolutionary Properties
• Peer-to-peer: Send money directly without banks or intermediaries
• Decentralized: No single point of control or failure
• Scarce: Only 21 million Bitcoin will ever exist
• Censorship-resistant: No one can freeze or confiscate properly secured Bitcoin
```

**Why it fails:** Four important ideas, each reduced to a single line. "No single point of control or failure" means nothing to someone who has never thought about what a single point of control does to them. The list format signals that these are inventory items, not ideas worth understanding.

---

### AFTER — Same content, template applied

```
Most people have never thought about what it means for money to have a single point of control.
Here's what it means in practice: in 2022, Canadian authorities froze the bank accounts of
truckers who participated in protests — without a court order, in 48 hours. In 2013, Cyprus
seized up to 47.5% of bank deposits over €100,000 to fund a government bailout.

Bitcoin was built to make that impossible. Not through policy or law — through mathematics.

There is no Bitcoin headquarters to call. No CEO to pressure. No server to shut down. The network
runs on thousands of computers in dozens of countries simultaneously. To change the rules, you
would need to convince the majority of that network to agree — and they are not a company, a
government, or a group with a shared interest in changing them.

This is what "decentralized" actually means. Not a feature. A consequence of design.
```

**Why it works:**
- Opens with a concrete, real example of what centralized money control looks like (Canada 2022, Cyprus 2013 — both documented)
- "Not through policy or law — through mathematics" is the kind of line that makes a reader pause
- Explains decentralization as a *consequence* rather than a *feature* — this is more honest and more persuasive

---

## Applying This Template to Other Guides

Work through guides in this order (highest impact first):

1. **WhatIsBitcoin.jsx** — worked example above; needs opening + Revolutionary Properties rewrite
2. **BitcoinSuccessStories.jsx** — fictional archetypes need reframing or replacement
3. **WhyBitcoinMattersNow.jsx** — fictional characters also appear here; "saving money = guaranteed poverty" line needs softening
4. **DollarCostAveraging.jsx** — opening rewrite (use the before/after from CURATOR_REVIEW.md Rec 2)
5. **SendReceiveBitcoin.jsx** — add personal stake opening; connect irreversibility to the philosophy
6. **SecurityChecklist.jsx** — explain *why* Bitcoin security is categorically different before the checklist
7. **BitcoinFees.jsx** — start with the beginner's surprise ("Why did I pay $8 to send $50?"); fix hardcoded price
8. **BitcoinMining.jsx** — explain *why* energy = trust before explaining *what* miners do; fix hardcoded price
9. **FirstWallet.jsx** — add emotional stakes at the moment of action; consider a step-by-step walkthrough
10. **HardwareWallets.jsx** — already strongest; trim competitor comparison section that undercuts first-person voice
11. **BitcoinCommonMistakes.jsx** — soften "Bitcoin always rebounds stronger" claim
12. **TimePreference.jsx** — "Civilizational Impact" section needs prose, not bullets; soften "saving is irrational"
