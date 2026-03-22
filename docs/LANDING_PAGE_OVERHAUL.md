# Landing Page Overhaul — Phase 1a: Content & Copy

## Execution Sequence

Before any copy is written, two gates must be cleared in order:

**Step 0 — Fact-check gate** *(research agent)*
Extract every factual claim from Landing.jsx and verify against current sources. No copy changes until each claim has a verdict: ✅ still accurate / ⚠️ needs updating / ❌ wrong. Results saved to `docs/FACT_CHECK.md`.

**Step 1 — Resolve open questions** *(owner decision)*
Work through the 5 open questions at the bottom of this document before touching any file. Decisions made here govern the copy direction.

**Step 2 — Execute copy changes** *(developer)*
Section by section, using verified data from Step 0 and confirmed direction from Step 1.

---

## Context

The landing page revamp is happening because the site's creative brief establishes a single guiding principle — curiosity over conviction — and the current landing page violates it in almost every section. The brief describes Bitcoin Journey as "an educational museum for people who have never been taught monetary history." The emotional arc the site must deliver is: **awake → understand → hopeful → agency**. The landing page is supposed to be the entry to a museum. Right now it is a recruitment poster.

The brief is explicit that the site's tone should be "morally serious but never hectoring, evidence-based rather than ideological." The curator review identifies the landing page as the strongest single piece of content on the site — and still finds it drifting into sermon mode at its most important moments: the hero, the flip card reveals, and the "Moral Case" section. The opportunity is not to rebuild from scratch but to redirect what is already a structurally sound page. The problem → cause → evidence → solution arc is correct. The headlines, flip card copy, and CTA framing need to be aligned with the museum register the brief requires.

---

## Current State Assessment

The landing page is doing two things at once and they are working against each other. The structural argument is sound: there was a before-1971 world, something changed, here is the evidence, here is the alternative. That is good museum design. But the voice layered over that structure is activist, not curator.

**Where it is a sermon when it should be a museum:**

- **Hero headline:** "They Stole Your Generation's Future" opens with a verdict and an accusation before the reader has been shown anything. "Stole" asserts intent. A skeptical reader will disengage here — not because the economic argument is wrong, but because the framing announces a side before making a case.

- **Hero pre-label:** "THE 1971 DECISION THAT BROKE YOUR FUTURE" — "broke" is a verdict. A question would be stronger and truer to the museum model.

- **Hero stat copy:** "This isn't inflation — it's systematic wealth transfer." This is asserted on arrival, before the charts. Conclusions belong after evidence.

- **Flip card 1 back (87% card):** "Money printing is like alcoholism: good at first, progressively worse, until the pain forces change. The Big Print is coming." Overwrought metaphor + prophecy. Neither belongs on a museum exhibit.

- **Flip card 3 back (1971 card):** "Bitcoin offers escape from the corrupt system through math, not violence." "Corrupt" does heavy ideological lifting with no argumentation behind it.

- **Charts section headline:** "Here's Exactly How They Did It" — "they" and "did it" presuppose conspiracy. The chart itself makes the argument. The headline should let it.

- **Post-chart copy:** "This isn't market forces — this is engineered wealth transfer." Stated before the reader has drawn their own conclusion.

- **"The Moral Case for Bitcoin" section:** Six comparison cards framed as "The Broken System" vs. "Bitcoin's Solution." Binary and prosecutorial. The section title signals advocacy, not education.

- **Final CTA:** "Your generation's fighting chance" positions Bitcoin as a weapon in a conflict the reader is assumed to have already enlisted in.

**What is working and should be preserved:**
- The 1971 specificity (name, date, mechanism)
- The beer analogy itself — keep every word, adjust only the payoff framing
- The Weimar photograph and its caption (already updated — keep verbatim)
- The "Museum Tour Complete. Your Mission Begins." framing in the final CTA
- The charts and interactive calculator — excellent evidential work
- The parallel timeline section — close to right, minor adjustments only

---

## Guiding Principles for the Rewrite

These five rules apply to every line of copy on the landing page.

**1. Lead with a question, not a verdict.**
Every section that currently opens with a conclusion should open with a question or observation that creates curiosity. "They stole your future" is a verdict. "Why does your parents' house cost 16 times what it did in 1971?" is a question. One closes the reader's mind. The other opens it.

**2. Name the mechanism, not the villain.**
The site's strength is its specificity — 1971, Nixon, the gold standard, the money supply chart. When copy shifts from naming mechanisms to naming villains, it loses that distinction. The mechanism is damning enough. Let it speak.

**3. Evidence before conclusion, always.**
The landing page has excellent evidence. In several places, conclusions are stated before the evidence is presented. Reorder wherever this happens. The reader should feel that they are drawing the conclusion, not being told it.

**4. The museum is not neutral — but it is honest about its perspective.**
"Curiosity over conviction" does not mean the site has no point of view. It has a clear one. But there is a difference between a museum exhibit that shows you the evidence and says "here is what this appears to mean" and a pamphlet that tells you what to think before showing you anything. The tone should be: "We find this important and we think you will too, once you've seen what we've seen."

**5. Hope is the destination, not anger.**
The brief's emotional arc ends at "hopeful → agency." Anger produces urgency; hope produces investment. The reader who leaves hopeful will tell their friends, return to the guides, and care about what the site is trying to do. Frame the Bitcoin reveal as something that exists — a thing someone built — rather than as a weapon against something bad.

---

## Section-by-Section Plan

### Section 1: Hero

**What it currently does:** Opens with "THE 1971 DECISION THAT BROKE YOUR FUTURE," then "They Stole Your Generation's Future," the house price comparison, and three flip cards. Flip card backs use the addiction metaphor, predict "The Big Print is coming," and describe Bitcoin as "escape from the corrupt system."

**What it should do instead:** Create the disorientation that sends a curious reader downward. The reader should finish the hero section with one feeling: "Something happened and I want to understand what it was." Surprise is the gateway to curiosity.

**Specific copy direction:**
- Replace pre-headline label with something that names the mystery: e.g. *"Something changed in 1971. Nobody taught you about it."* or simply *"August 15, 1971."*
- Replace "They Stole Your Generation's Future" with a question or observation. Options: *"Your parents could buy a house on one income. What happened?"* or *"Something broke in 1971. Here's the evidence."* The word "Stole" implies intent that the evidence does not demonstrate — the evidence shows a mechanism, not a theft.
- Keep the house price comparison verbatim ($25,000 → $400,000). Remove only the interpretive line that follows: "This isn't inflation — it's systematic wealth transfer." Let the reader feel the gap before being told what it means.
- Flip card 1 back: Remove the addiction/alcoholism metaphor and "The Big Print is coming" entirely. Replace with: *"In 1971, the US dollar was backed by gold. After 1971, it was backed by trust — and the supply could be expanded at will. The beer analogy below explains what that means."*
- Flip card 2 back: Remove "This isn't natural price discovery. It's systematic currency debasement." Replace with: *"When more dollars exist, each dollar buys less. That's not opinion — it's arithmetic."*
- Flip card 3 back: Remove "Bitcoin offers escape from the corrupt system through math, not violence." Replace with something that creates curiosity rather than a sales pitch: *"In 1971, Nixon ended the gold standard. Fifty years later, an anonymous programmer wrote the code to make that impossible for any currency again. That story is below."*
- Change "Click the cards above to discover the **solution**" → "...discover the **story**."

**Keep or cut:** Keep structure. Revise all headline and flip card copy.

---

### Section 2: Beer Analogy

**What it currently does:** Introduces the watered-down beer metaphor, defines sound money vs. fiat via flip cards, closes with "They'd been adding water for years, but 1971 was when they threw away all restraints. Now they could add unlimited water."

**What it should do instead:** This is the closest thing to a perfect museum exhibit on the page. Almost everything stays. The analogy itself is genuinely illuminating. The only adjustment needed is the closing line.

**Specific copy direction:**
- Keep the section header "Think of Money Like Beer."
- Keep all analogy paragraphs verbatim — this is the best copy on the page.
- Fiat flip card: change "manipulated by politicians" → "controlled by central banks and governments, and can be expanded by policy decision." "Manipulated" is loaded; "controlled" is accurate.
- Closing line: Replace "They'd been adding water for years, but 1971 was when they threw away all restraints. Now they could add unlimited water." with: *"For decades the water was added slowly. After 1971, there was no longer any rule about how much could be added. The chart below shows what happened next."*

**Keep or cut:** Keep everything. Minimal adjustments only.

---

### Section 3: Evidence / Charts

**What it currently does:** Opens with "Here's Exactly How They Did It," the Weimar photograph, the money supply chart, and closes with "This isn't market forces — this is engineered wealth transfer."

**What it should do instead:** Let the chart land. The copy around it is currently pulling in the same direction as the chart rather than letting it breathe. When you tell someone what conclusion to draw before they have looked at the evidence, you rob them of the moment of discovery.

**Specific copy direction:**
- Replace "Here's Exactly How They Did It" with: *"The Federal Reserve's Own Data"* or *"What Happened After 1971."*
- The explanatory paragraph: keep "official Federal Reserve data" and the 1971 mechanism. Remove "systematic debasement of your purchasing power" (conclusion before evidence). Replace with neutral description: *"...showing how the US money supply changed after Nixon ended the dollar's link to gold in 1971, and what happened to purchasing power in the same period."*
- After the chart: keep "See the perfect correlation?" Replace "This isn't market forces — this is engineered wealth transfer." with: *"What you call this depends on your starting point. What isn't in dispute is the data: money supply up 70x, dollar purchasing power down 91%, in the same period."* This is actually a stronger rhetorical move — it sounds more credible, and a skeptical reader will lean in rather than out.
- Keep the Weimar caption verbatim.

**Keep or cut:** Keep section. Adjust header and two interpretive lines.

---

### Section 4: Societal Decline Charts

**What it currently does:** Chart carousel showing housing costs vs. income divergence. Description: "Housing became unaffordable for an entire generation."

**Specific copy direction:**
- Replace description "Housing became unaffordable for an entire generation" (a conclusion) with the data: *"Home values rose 6x faster than wages between 1965 and 2021."*
- Any section-level header using adversarial framing should become: *"The Divergence: What the Data Shows Since 1971."*
- Check `SocietalDeclineCharts.jsx` for any other verdict-first copy and apply the same principle.

**Keep or cut:** Keep section and all charts. Adjust labels only.

---

### Section 5: Parallel Timeline

**What it currently does:** Header "The Parallel Genesis of Bitcoin." Subtext: "While governments destroyed sound money, cypherpunks built the alternative."

**Specific copy direction:**
- Replace "destroyed" with something more precise: *"While governments moved further from fixed-supply money, a parallel movement was building a different kind of system."* Or: *"As one monetary experiment unfolded, another was beginning in the margins."*
- Keep section title "The Parallel Genesis of Bitcoin."

**Keep or cut:** Keep. One line change.

---

### Section 6: Bitcoin's Moral Code

**What it currently does:** Six comparison cards: "The Broken System (Fiat Currency Problems)" vs. "Bitcoin's Solution (Sound Money Principles)." Section title: "The Moral Case for Bitcoin." Opens with Jack Mallers quote. Closes with "Bitcoin is a peaceful revolution through mathematics."

**What it should do instead:** Reframe as a properties comparison, not a prosecution. A museum presents evidence and allows the visitor to form their own moral response.

**Specific copy direction:**
- Rename section from "The Moral Case for Bitcoin" to *"Two Systems, Different Rules"* or *"How the Systems Compare."*
- Remove the Jack Mallers quote ("Bitcoin is more powerful than war...") from the section header. Replace with a framing sentence: *"Every monetary system has rules. Here is what the rules of each system actually are."*
- Rename card headers from "The Broken System / Fiat Currency Problems" → *"How fiat money works"* and *"How Bitcoin works."* Let the reader evaluate which rules they prefer.
- Relabel the six category titles: "Theft by Inflation" → *"Inflation and Purchasing Power"*; "Manipulation & Lies" → *"Monetary Transparency"*; "War & Conflict Financing" → *"War Finance and Sound Money."*
- Closing copy: Remove "You don't need protests. You don't need war. You don't need permission from politicians." Replace with: *"For the first time in history, anyone with internet access can hold money that no government can print more of. That is new. That is worth understanding."*
- Keep "a peaceful revolution through mathematics" framing — it is consistent with the brief.

**Keep or cut:** Keep section structure and all six topics. Revise title, quote, card labels, and closing copy.

---

### Section 7: Bitcoin vs Altcoins

Not fully reviewed for this plan. General direction: frame as "here are Bitcoin's design choices and why they were made" rather than "here is why everything else is bad." Any headers using the word "scam" should be replaced with precise analytical language. Check for specific named altcoin claims — if present, flag for legal review before publication.

**Keep or cut:** Keep. Full text review required before copy changes.

---

### Section 8: Practical Guidance

**What it currently does:** Opens with "Ready to Take Action?" and "You understand why Bitcoin matters. Now learn how to safely get started."

**Specific copy direction:**
- Replace "Ready to Take Action?" with: *"Where to go from here"* or *"The next step, when you're ready."*
- Replace "You understand why Bitcoin matters. Now learn how to safely get started." with: *"The guides below are the practical side of this museum. They exist for when you're ready to move from understanding to doing."*
- Consider adding a secondary pathway for readers not ready to buy: *"Not ready to act yet? Start with the deeper context."* linking to Why Bitcoin Matters Now or What Is Bitcoin.

**Keep or cut:** Keep. Adjust header and intro paragraph.

---

### Section 9: Book Carousel

Frame any introductory text as: *"Want to go deeper? These are the books that shaped the ideas on this site."*

**Keep or cut:** Keep.

---

### Section 10: Final CTA

**What it currently does:** "Museum Tour Complete. Your Mission Begins." → "You've seen the evidence. You understand the crisis. Now you have the tools to choose ethical money." Button: "Start Your Bitcoin Journey." Sub-label: "Free guides. Practical steps. Your generation's fighting chance."

**Specific copy direction:**
- Keep "Museum Tour Complete. Your Mission Begins." verbatim — one of the best lines on the page.
- Replace body copy: *"You've seen the evidence. You understand what changed in 1971 and why. The guides below are the practical next step."*
- Keep "Start Your Bitcoin Journey" button.
- Replace sub-label "Your generation's fighting chance." with: *"Free guides. Practical steps. No prior knowledge required."* Or, in the museum spirit: *"Open to all. Admission free."*

**Keep or cut:** Keep. Adjust two lines.

---

## New Narrative Arc

After the rewrite, the page should feel like this:

- **Hero (Awake):** Specific, surprising. The reader encounters 1971 as a mystery, not an indictment. They scroll down wanting to understand.
- **Beer Analogy (Understand — first contact):** Clean, vivid, warm. "Oh. That's actually simple." The reader feels mildly clever for understanding it.
- **Charts (Understand — evidence):** The Federal Reserve's own data confirms the analogy. The "oh" moment — intellectual satisfaction. The Weimar photograph gives it human weight.
- **Societal Decline (Understand — wider context):** The housing divergence is not isolated. "And in this room..."
- **Timeline (Hopeful — first signal):** The page pivots. Someone saw this and decided to build something different. The first sign of hope.
- **Bitcoin Properties (Hopeful — understanding the alternative):** The reader learns what the alternative system's rules are. Informational, not evangelical. They draw their own conclusions.
- **Bitcoin vs Altcoins (Understand — discernment):** A tool for thinking, not a verdict.
- **Practical Guidance (Agency — invitation):** Warm and unhurried. "When you're ready, here is the first step."
- **Final CTA (Agency — the exit):** The "Museum Tour Complete" framing lands with satisfaction, not pressure. They click because they are ready.

---

## What's Out of Scope (Phase 1b)

Not touched in this phase:
- Chart restructuring or data visualization design
- Flip card animation behavior
- `DollarValueCalculator` layout or input design
- `BookCarousel` visual design or ordering
- `BitcoinVsAltcoins` comparison table structure
- Color scheme, typography, spacing, background gradients
- `ProgressSidebar` component
- Imagery (Weimar photograph, backgrounds, emoji decorations)
- `AnimatedCounter` component behavior
- Navigation, routing, footer

---

## Open Questions

Require owner input before work begins:

1. **Hero headline strategy.** Three directions: (a) question — *"Your parents could buy a house on one income. What happened?"*, (b) date/event frame — *"August 15, 1971. Nobody taught you what happened that day."*, (c) softer observation — *"Something changed in 1971. Here's the evidence."* Owner should choose direction.

2. **"Moral Case" section rename.** If preserving the word "moral" is important, consider: *"Why the Rules of Money Are a Moral Question"* rather than dropping the word entirely.

3. **Altcoin comparison copy.** `BitcoinVsAltcoins.jsx` needs full text review. If specific named altcoins are called fraudulent, flag for legal review before publishing. Owner also wants to **emphasise the Bitcoin vs altcoins distinction more clearly** — so this section has two simultaneous goals: museum tone (less aggressive) AND sharper differentiation of what makes Bitcoin unique. Both need to be served.

4. **"Coming soon" guides in Practical Guidance.** If still unpublished at revamp time, replace placeholder cards with existing guides or set a publishing date. Indefinite "coming soon" placeholders erode trust.

5. **Secondary reader pathway.** Which guide should the secondary link in Practical Guidance point to for readers not ready to act: *Why Bitcoin Matters Now*, *What Is Bitcoin*, or a not-yet-written monetary history guide?

---

## Critical Files for Implementation

- `src/pages/Landing.jsx` — primary file; hero, beer analogy, charts, timeline intro, practical guidance, final CTA
- `src/components/UI/BitcoinMoralCode.jsx` — highest priority component; section title, quote, all six card labels, closing copy
- `src/components/UI/SocietalDeclineCharts.jsx` — chart description labels and section copy
- `src/components/UI/BitcoinVsAltcoins.jsx` — not yet fully reviewed; must be read before changes; potential credibility/legal risk
