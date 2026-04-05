import React, { useState, useEffect } from 'react';

const DollarValueCalculator = () => {
  const [inputAmount, setInputAmount] = useState(100);
  const [inputYear, setInputYear] = useState(1913);
  const [currentValue, setCurrentValue] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  // CPI source: U.S. Bureau of Labor Statistics. TODAY_CPI = Feb 2026 (326.785)
  const TODAY_YEAR = 2026;
  const TODAY_CPI  = 326.785;

  const historicalData = {
    1913: { cpi: 9.9 },
    1959: { cpi: 29.1 },
    1971: { cpi: 40.5 },
    1980: { cpi: 82.4 },
    1990: { cpi: 130.7 },
    2000: { cpi: 172.2 },
    2008: { cpi: 215.3 },
    2010: { cpi: 218.1 },
    2020: { cpi: 258.8 },
    2024: { cpi: 314.2 }, // BLS annual average 2024
    2025: { cpi: 319.8 }  // BLS annual average 2025 (est.)
  };

  // Starting years shown in the dropdown (exclude TODAY_YEAR)
  const startYears = Object.keys(historicalData).map(Number);

  const historicalPrices = {
    1913: { medianHouse: 3500,   coffee: 0.05 },
    1959: { medianHouse: 11800,  coffee: 0.50 },
    1971: { medianHouse: 17000,  coffee: 0.25 },
    1980: { medianHouse: 47200,  coffee: 0.50 },
    1990: { medianHouse: 79100,  coffee: 0.75 },
    2000: { medianHouse: 119600, coffee: 1.00 },
    2008: { medianHouse: 197100, coffee: 1.50 },
    2010: { medianHouse: 221800, coffee: 1.75 },
    2020: { medianHouse: 336900, coffee: 4.50 },
    2024: { medianHouse: 422800, coffee: 5.00 },
    2025: { medianHouse: 428000, coffee: 5.25 },
    2026: { medianHouse: 435000, coffee: 5.50 }
  };

  // What is your past dollar worth in today's purchasing power?
  const calculatePurchasingPower = (amount, fromYear) => {
    const base = historicalData[fromYear];
    if (!base) return 0;
    return (amount * base.cpi) / TODAY_CPI;
  };

  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      setCurrentValue(calculatePurchasingPower(inputAmount, inputYear));
      setIsCalculating(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [inputAmount, inputYear]);

  const formatDollars = (n) =>
    n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const purchasingPowerLost = inputAmount > 0
    ? (((inputAmount - currentValue) / inputAmount) * 100).toFixed(0)
    : 0;

  const years = TODAY_YEAR - inputYear;
  const baseCPI = historicalData[inputYear]?.cpi ?? 1;
  const avgAnnual = years > 0
    ? (((TODAY_CPI / baseCPI) ** (1 / years) - 1) * 100).toFixed(2)
    : '—';

  const fromPrices = historicalPrices[inputYear];
  const toPrices   = historicalPrices[TODAY_YEAR];

  // Same nominal amount both sides — what does $X actually buy in each era?
  const formatHousePct = (pct) => pct < 0.1 ? pct.toFixed(2) : pct.toFixed(1);
  const housePctFrom = fromPrices ? formatHousePct((inputAmount / fromPrices.medianHouse) * 100) : null;
  const housePctTo   = toPrices   ? formatHousePct((inputAmount / toPrices.medianHouse)   * 100) : null;
  const cupsFrom     = fromPrices ? Math.round(inputAmount / fromPrices.coffee) : null;
  const cupsTo       = toPrices   ? Math.round(inputAmount / toPrices.coffee)   : null;

  return (
    <div className="bg-black rounded-xl p-8 border border-orange-500">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-orange-400 mb-1">
          Museum Time Machine Calculator
        </h3>
        <p className="text-gray-400 text-sm">
          What does your money actually buy today?
        </p>
      </div>

      {/* Inputs */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
            Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <input
              type="number"
              value={inputAmount}
              onChange={(e) => setInputAmount(Number(e.target.value) || 0)}
              onFocus={(e) => e.target.select()}
              className="w-full pl-8 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white text-lg focus:border-orange-500 focus:outline-none"
              min="0"
              placeholder="Enter amount"
            />
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">
            Starting year
          </label>
          <select
            value={inputYear}
            onChange={(e) => setInputYear(Number(e.target.value))}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white text-lg focus:border-orange-500 focus:outline-none"
          >
            {startYears.map(year => (
              <option key={year} value={year}>
                {year}{year === 1913 ? ' — Fed created' : year === 1971 ? ' — Nixon Shock' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Headline result */}
      <div className="text-center mb-8">
        {isCalculating ? (
          <div className="text-2xl text-gray-500 animate-pulse">Calculating…</div>
        ) : (
          <>
            <div className="text-3xl sm:text-4xl font-bold leading-tight">
              <span className="text-gray-300">${inputAmount.toLocaleString()} in {inputYear}</span>
              <span className="text-gray-500 mx-3">has lost</span>
              <span className="text-red-400">{purchasingPowerLost}%</span>
              <span className="text-gray-500 ml-3">of its purchasing power</span>
            </div>
            <div className="text-gray-600 text-sm mt-2">
              equivalent to {'$'}{formatDollars(currentValue)} in {inputYear} purchasing power
            </div>
          </>
        )}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="text-center p-4 bg-gray-900 rounded-lg border border-gray-800">
          <div className="text-2xl font-bold text-red-400">-{purchasingPowerLost}%</div>
          <div className="text-gray-500 text-xs mt-1">purchasing power lost</div>
        </div>
        <div className="relative group text-center p-4 bg-gray-900 rounded-lg border border-gray-800 cursor-help">
          <div className="text-2xl font-bold text-orange-400">{avgAnnual}%</div>
          <div className="text-gray-500 text-xs mt-1">avg per year</div>
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-gray-800 border border-gray-600 rounded-lg text-left opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
            <p className="text-gray-300 text-xs">A savings account needs to beat {avgAnnual}%/yr just to break even.</p>
          </div>
        </div>
        <div className="relative group text-center p-4 bg-gray-900 rounded-lg border border-gray-800 cursor-help">
          <div className="text-lg font-bold text-orange-400">
            {baseCPI} → {TODAY_CPI}
          </div>
          <div className="text-gray-500 text-xs mt-1">CPI {inputYear} → {TODAY_YEAR}</div>
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-800 border border-gray-600 rounded-lg text-left opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
            <p className="text-white text-xs font-semibold mb-1">Consumer Price Index</p>
            <p className="text-gray-300 text-xs mb-2">A government measure of average prices across a fixed "basket" of goods — food, housing, transport, and more.</p>
            <p className="text-gray-400 text-xs">Formula: your dollars × (CPI then ÷ CPI now) = today's purchasing power.</p>
          </div>
        </div>
      </div>

      {/* Footnote */}
      <p className="text-gray-600 text-xs text-center mb-6">
        Based on U.S. Bureau of Labor Statistics CPI data. Critics argue CPI understates true inflation by excluding asset prices and adjusting the basket over time — meaning these figures may be conservative.
      </p>

      {/* Focused comparison */}
      {housePctFrom && housePctTo && cupsFrom !== null && cupsTo !== null && (
        <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
          <p className="text-gray-300 text-center leading-relaxed">
            In {inputYear}, ${inputAmount.toLocaleString()} bought{' '}
            <span className="text-white font-semibold">{housePctFrom}% of a house</span>
            {' '}and{' '}
            <span className="text-white font-semibold">{cupsFrom.toLocaleString()} cups of coffee</span>.
            <br />
            That same ${inputAmount.toLocaleString()} today buys{' '}
            <span className="text-red-400 font-semibold">{housePctTo}% of a house</span>
            {' '}and{' '}
            <span className="text-red-400 font-semibold">{cupsTo.toLocaleString()} cups</span>.
          </p>
        </div>
      )}
    </div>
  );
};

export default DollarValueCalculator;
