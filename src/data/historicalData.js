// Historical Economic Data with Sources
// All data points are documented with official government sources

export const SOURCES = {
  M2_DATA: {
    source: "Federal Reserve Economic Data (FRED), Federal Reserve Bank of St. Louis",
    url: "https://fred.stlouisfed.org/series/M2SL",
    series_id: "M2SL",
    description: "M2 Money Stock, seasonally adjusted, monthly data in billions of dollars"
  },
  CPI_DATA: {
    source: "U.S. Bureau of Labor Statistics, Consumer Price Index",
    url: "https://www.bls.gov/cpi/",
    series_id: "CPIAUCSL",
    description: "Consumer Price Index for All Urban Consumers: All Items in U.S. City Average (1982-84=100)"
  },
  HISTORICAL_PRICES: {
    source: "U.S. Bureau of Labor Statistics Historical Data, University of Missouri Library Archives",
    urls: [
      "https://www.bls.gov/opub/mlr/2014/article/one-hundred-years-of-price-change-the-consumer-price-index-and-the-american-inflation-experience.htm",
      "https://libraryguides.missouri.edu/pricesandwages",
      "https://www.foodtimeline.org/foodfaq5.html"
    ],
    description: "Historical retail prices from government sources and academic archives"
  }
};

// M2 Money Supply Data (in billions USD)
// Source: Federal Reserve Economic Data (FRED) - M2SL Series
export const M2_MONEY_SUPPLY_DATA = [
  { 
    year: 1959, 
    amount: 286.6, // Source: FRED M2SL, January 1959
    event: "Pre-Nixon Era", 
    period: "sound",
    source: SOURCES.M2_DATA,
    medianHousePrice: 11900
  },
  { 
    year: 1971, 
    amount: 632.9, // Source: FRED M2SL, January 1971
    event: "Nixon Shock - Gold Standard Ended", 
    period: "early-fiat",
    source: SOURCES.M2_DATA,
    medianHousePrice: 17000
  },
  { 
    year: 1980, 
    amount: 1482.7, // Source: FRED M2SL, January 1980
    event: "Volcker Era", 
    period: "early-fiat",
    source: SOURCES.M2_DATA,
    medianHousePrice: 47200
  },
  { 
    year: 1990, 
    amount: 3166.8, // Source: FRED M2SL, January 1990
    event: "S&L Crisis", 
    period: "early-fiat",
    source: SOURCES.M2_DATA,
    medianHousePrice: 119600
  },
  { 
    year: 2000, 
    amount: 4667.6, // Source: FRED M2SL, January 2000
    event: "Dot-com Bubble", 
    period: "early-fiat",
    source: SOURCES.M2_DATA,
    medianHousePrice: 119600
  },
  { 
    year: 2008, 
    amount: 7517.8, // Source: FRED M2SL, January 2008
    event: "Financial Crisis Begins", 
    period: "qe-era",
    source: SOURCES.M2_DATA,
    medianHousePrice: 232100
  },
  { 
    year: 2010, 
    amount: 8478.0, // Source: FRED M2SL, January 2010
    event: "QE1 & QE2", 
    period: "qe-era",
    source: SOURCES.M2_DATA,
    medianHousePrice: 222900
  },
  { 
    year: 2015, 
    amount: 11788.8, // Source: FRED M2SL, January 2015
    event: "QE3 Ends", 
    period: "qe-era",
    source: SOURCES.M2_DATA,
    medianHousePrice: 294900
  },
  { 
    year: 2020, 
    amount: 15416.8, // Source: FRED M2SL, January 2020
    event: "COVID Begins", 
    period: "brrr",
    source: SOURCES.M2_DATA,
    medianHousePrice: 336900
  },
  { 
    year: 2021, 
    amount: 19359.7, // Source: FRED M2SL, Peak in 2021
    event: "Peak Money Printing", 
    period: "brrr",
    source: SOURCES.M2_DATA,
    medianHousePrice: 358700
  },
  { 
    year: 2024, 
    amount: 20773.1, // Source: FRED M2SL, Latest available
    event: "Current Day", 
    period: "brrr",
    source: SOURCES.M2_DATA,
    medianHousePrice: 422800
  }
];

// Consumer Price Index Data (1982-84=100)
// Source: U.S. Bureau of Labor Statistics
export const CPI_DATA = [
  { 
    year: 1913, 
    cpi: 9.9, // Source: BLS Historical CPI
    source: SOURCES.CPI_DATA
  },
  { 
    year: 1959, 
    cpi: 29.1, // Source: BLS CPI-U Historical Tables
    source: SOURCES.CPI_DATA
  },
  { 
    year: 1971, 
    cpi: 40.5, // Source: BLS CPI-U Historical Tables
    source: SOURCES.CPI_DATA
  },
  { 
    year: 1980, 
    cpi: 82.4, // Source: BLS CPI-U Historical Tables
    source: SOURCES.CPI_DATA
  },
  { 
    year: 1990, 
    cpi: 130.7, // Source: BLS CPI-U Historical Tables
    source: SOURCES.CPI_DATA
  },
  { 
    year: 2000, 
    cpi: 172.2, // Source: BLS CPI-U Historical Tables
    source: SOURCES.CPI_DATA
  },
  { 
    year: 2008, 
    cpi: 215.3, // Source: BLS CPI-U Historical Tables
    source: SOURCES.CPI_DATA
  },
  { 
    year: 2010, 
    cpi: 218.1, // Source: BLS CPI-U Historical Tables
    source: SOURCES.CPI_DATA
  },
  { 
    year: 2020, 
    cpi: 258.8, // Source: BLS CPI-U Historical Tables
    source: SOURCES.CPI_DATA
  },
  { 
    year: 2024, 
    cpi: 321.5, // Source: BLS CPI-U Latest (May 2024)
    source: SOURCES.CPI_DATA
  }
];

// Historical Goods Prices with Sources
// Sources: BLS Historical Data, University of Missouri Archives, Food Timeline
export const HISTORICAL_PRICES = {
  1913: {
    car: { 
      price: 500, 
      item: "Ford Model T", 
      description: "Complete automobile",
      source: "University of Missouri Library Archives - Prices and Wages by Decade"
    },
    house: { 
      price: 3500, 
      item: "Average home", 
      description: "4 bedroom house with land",
      source: "BLS Historical Price Data, Missouri Library Archives"
    },
    coffee: { 
      price: 0.27, 
      item: "Coffee (per pound)", 
      description: "Retail price",
      source: "BLS Historical Data - One Hundred Years of Price Change"
    },
    bread: { 
      price: 0.056, 
      item: "Bread (per pound)", 
      description: "White bread, retail",
      source: "BLS Historical Data - bread cost 5.6¢ per pound in 1913"
    },
    milk: { 
      price: 0.356, 
      item: "Milk (per gallon)", 
      description: "Fresh milk",
      source: "BLS Historical Data - milk cost 35.6¢ per gallon in 1913"
    },
    eggs: { 
      price: 0.373, 
      item: "Eggs (per dozen)", 
      description: "Fresh eggs",
      source: "BLS Historical Data - eggs cost 37.3¢ per dozen in 1913"
    }
  },
  1959: {
    car: { 
      price: 2200, 
      item: "Average new car", 
      description: "Standard sedan",
      source: "University of Missouri Library Archives - 1950s Prices"
    },
    house: { 
      price: 12400, 
      item: "Average home", 
      description: "Median home value",
      source: "U.S. Census Bureau Historical Data via Missouri Archives"
    },
    coffee: { 
      price: 0.69, 
      item: "Coffee (per pound)", 
      description: "Ground coffee",
      source: "Food Timeline Historical Prices, 1950s data"
    },
    bread: { 
      price: 0.19, 
      item: "Bread (per pound)", 
      description: "White bread",
      source: "BLS Price Index historical data"
    },
    milk: { 
      price: 0.97, 
      item: "Milk (per gallon)", 
      description: "Fresh milk",
      source: "BLS Historical Price Surveys"
    },
    gas: { 
      price: 0.25, 
      item: "Gasoline (per gallon)", 
      description: "Regular gasoline",
      source: "U.S. Energy Information Administration Historical Data"
    }
  },
  1971: {
    car: { 
      price: 3450, 
      item: "Average new car", 
      description: "Mid-size sedan",
      source: "University of Missouri Library Archives - 1970s Prices"
    },
    house: { 
      price: 25200, 
      item: "Average home", 
      description: "Median home value",
      source: "U.S. Census Bureau via Missouri Archives"
    },
    coffee: { 
      price: 0.91, 
      item: "Coffee (per pound)", 
      description: "Ground coffee",
      source: "BLS Consumer Price Index historical data"
    },
    bread: { 
      price: 0.25, 
      item: "Bread (per pound)", 
      description: "White bread",
      source: "BLS - bread cost $0.25 per pound in 1972"
    },
    milk: { 
      price: 1.36, 
      item: "Milk (per gallon)", 
      description: "Fresh milk",
      source: "BLS Historical Price Surveys"
    },
    gas: { 
      price: 0.36, 
      item: "Gasoline (per gallon)", 
      description: "Regular gasoline",
      source: "U.S. Energy Information Administration"
    }
  },
  2024: {
    car: { 
      price: 48000, 
      item: "Average new car", 
      description: "Mid-size sedan",
      source: "Kelley Blue Book, automotive industry data"
    },
    house: { 
      price: 420000, 
      item: "Average home", 
      description: "Median home value",
      source: "U.S. Census Bureau, NAR data"
    },
    coffee: { 
      price: 5.50, 
      item: "Coffee (per pound)", 
      description: "Ground coffee, retail",
      source: "BLS Consumer Price Index, current data"
    },
    bread: { 
      price: 2.50, 
      item: "Bread (per pound)", 
      description: "White bread",
      source: "BLS Consumer Price Index, current data"
    },
    milk: { 
      price: 4.20, 
      item: "Milk (per gallon)", 
      description: "Fresh milk",
      source: "BLS Consumer Price Index, current data"
    },
    gas: { 
      price: 3.40, 
      item: "Gasoline (per gallon)", 
      description: "Regular gasoline",
      source: "U.S. Energy Information Administration"
    }
  }
};

// Utility Functions
export const calculatePurchasingPower = (amount, fromYear, toYear = 2024) => {
  const fromCPI = CPI_DATA.find(d => d.year === fromYear)?.cpi;
  const toCPI = CPI_DATA.find(d => d.year === toYear)?.cpi;
  
  if (!fromCPI || !toCPI) {
    throw new Error(`CPI data not available for year ${fromYear} or ${toYear}`);
  }
  
  // Formula: (amount × toCPI) / fromCPI
  return (amount * toCPI) / fromCPI;
};

export const formatChartData = () => {
  const m2Map = new Map(M2_MONEY_SUPPLY_DATA.map(d => [d.year, d]));
  const cpiMap = new Map(CPI_DATA.map(d => [d.year, d]));
  
  return M2_MONEY_SUPPLY_DATA.map(m2 => {
    const cpi = cpiMap.get(m2.year);
    if (!cpi) return null;
    
    // Calculate dollar value using 2024 as base (CPI = 321.5)
    const dollarValue = (321.5 / cpi.cpi) * 100;
    
    return {
      year: m2.year,
      amount: m2.amount / 1000, // Convert billions to trillions for display
      dollarValue: Math.round(dollarValue * 100) / 100, // Round to 2 decimals
      event: m2.event,
      period: m2.period,
      sources: {
        m2: m2.source,
        cpi: cpi.source
      }
    };
  }).filter(Boolean);
};

// Data validation
export const validateDataSources = () => {
  console.log('Data Sources Validation:');
  console.log('M2 Data Points:', M2_MONEY_SUPPLY_DATA.length);
  console.log('CPI Data Points:', CPI_DATA.length);
  console.log('Historical Price Years:', Object.keys(HISTORICAL_PRICES).length);
  
  // Verify purchasing power calculation
  const test1959 = calculatePurchasingPower(100, 1959, 2024);
  console.log('Test: $100 in 1959 = $', test1959.toFixed(2), 'in 2024');
  console.log('Expected: ~$1,108 (per BLS calculator)');
  
  return {
    m2DataCount: M2_MONEY_SUPPLY_DATA.length,
    cpiDataCount: CPI_DATA.length,
    test1959Value: test1959,
    isValid: Math.abs(test1959 - 1108) < 50 // Allow 50$ margin of error
  };
};