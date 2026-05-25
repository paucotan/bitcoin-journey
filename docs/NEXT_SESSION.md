# Next Session

## DollarValueCalculator Rebuild

**File:** `src/components/UI/DollarValueCalculator.jsx`

**Problem:** Bloated — direction toggle, Bitcoin housing section, collapsible data sources, quick amount buttons, two "what you could buy" panels with mixed units (% vs x). Confusing to read, doesn't land the core insight clearly.

**Reference:** https://www.in2013dollars.com/us/inflation/1913?amount=100
Lead with one big result sentence. Clean stats panel. Simple.

**What to keep:**
- CPI calculation logic (it's correct: `amount × target_CPI / base_CPI`)
- `historicalData` CPI values
- `historicalPrices` object (needed for comparison)
- The visual identity (dark theme, orange accents)

**What to remove:**
- Direction toggle (Past→Present / Present→Past) — keep Past→Present only
- Bitcoin Housing Comparison section
- Collapsible Data Sources section
- Quick amount buttons ($10, $100, $10k...)
- The two large "what you could buy" panels

**What to rebuild:**
1. Big headline result: `"$100 in 1913 → $3,247 today"`
2. Clean stats row: cumulative change %, average annual inflation rate, CPI then vs now
3. Single focused comparison — just house + coffee — framed as one sentence, e.g.:
   *"In 1913, $100 bought 2.9% of a house. Today's equivalent ($3,247) buys 0.8% of one."*
4. Year selector (keep the dropdown with Fed/Nixon annotations)
5. Amount input (keep, no quick buttons)

**Tone:** museum register — let the numbers speak, don't editorialize in the UI.
