# Bitcoin Housing Comparison Feature Proposal

## Overview
Add a Bitcoin comparison table to the Museum Time Machine Calculator to demonstrate how Bitcoin purchasing power for housing has improved over time, contrasting with USD devaluation.

## Concept
Show users that while USD purchasing power for housing has declined, Bitcoin purchasing power for housing has dramatically increased, demonstrating Bitcoin's effectiveness as a store of value against real estate inflation.

## Implementation Plan

### 1. Data Requirements
- Historical Bitcoin prices for key years (2013, 2017, 2020, 2021, 2024)
- Use existing median house price data from calculator
- Calculate BTC required to buy median house for each year

### 2. Visual Design
Add a third comparison section to calculator:
```
[USD 2020] [USD 2024] [BTC Comparison]
```

### 3. Display Format
**Bitcoin Housing Affordability Table:**
- **2017:** 15.2 BTC → 1 house ($17K BTC, $250K house)
- **2020:** 16.8 BTC → 1 house ($20K BTC, $337K house)  
- **2024:** 6.1 BTC → 1 house ($69K BTC, $423K house)

### 4. Key Insights to Highlight
- "Housing became 25% more expensive in USD (2020-2024)"
- "Housing became 64% CHEAPER in Bitcoin (2020-2024)"
- "While USD lost purchasing power, Bitcoin gained purchasing power"

### 5. Data Sources
- **Bitcoin prices:** CoinGecko API or static historical data
- **Housing prices:** Already implemented in calculator
- **Calculation:** House Price ÷ Bitcoin Price = BTC Required

### 6. User Experience
- Toggle button: "Show Bitcoin Comparison"
- Animated counters showing BTC amounts
- Clear messaging about inverse correlation
- Educational tooltip explaining why this happens

### 7. Educational Value
Demonstrates:
- Bitcoin as hedge against real estate inflation
- Inverse relationship between USD debasement and BTC appreciation
- Practical purchasing power preservation
- Why "sound money" matters for major purchases

### 8. Technical Implementation
```javascript
const bitcoinPrices = {
  2017: 17000,
  2020: 20000, 
  2024: 69000
};

const calculateBitcoinHousing = (year) => {
  return medianHousePrice[year] / bitcoinPrices[year];
};
```

### 9. Future Enhancements
- Include other assets (gold, S&P 500, wages)
- Interactive slider for custom Bitcoin amounts
- "What if" scenarios for different investment timeframes
- Export comparison charts

## Priority: Future Enhancement
This feature will powerfully demonstrate Bitcoin's value proposition but should be implemented after current calculator improvements are complete.

## Success Metrics
- Users understand Bitcoin's purchasing power preservation
- Increased engagement with calculator
- Clear demonstration of monetary debasement vs sound money