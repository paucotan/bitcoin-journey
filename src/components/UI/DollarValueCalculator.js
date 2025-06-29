import React, { useState, useEffect } from 'react';

const DollarValueCalculator = () => {
  const [inputAmount, setInputAmount] = useState(100);
  const [inputYear, setInputYear] = useState(1913);
  const [currentValue, setCurrentValue] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculationDirection, setCalculationDirection] = useState('past-to-present'); // 'past-to-present' or 'present-to-past'

  // Data sources
  const SOURCES = {
    CPI_DATA: {
      source: "U.S. Bureau of Labor Statistics, Consumer Price Index",
      url: "https://www.bls.gov/cpi/"
    },
    HISTORICAL_PRICES: {
      source: "U.S. Bureau of Labor Statistics Historical Data, University of Missouri Library Archives",
      urls: [
        "https://www.bls.gov/opub/mlr/2014/article/one-hundred-years-of-price-change-the-consumer-price-index-and-the-american-inflation-experience.htm",
        "https://libraryguides.missouri.edu/pricesandwages"
      ]
    }
  };

  // Real historical CPI data from Bureau of Labor Statistics
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
    2024: { cpi: 321.5 }
  };

  // Historical prices for context (museum-style data)
  const historicalPrices = {
    1913: {
      car: { price: 500, item: "Ford Model T", description: "A complete automobile" },
      medianHouse: { price: 3500, item: "Typical home price", description: "Typical U.S. home (est.)" },
      coffee: { price: 0.05, item: "Cup of coffee", description: "At a restaurant" },
      bread: { price: 0.04, item: "Loaf of bread", description: "Fresh from bakery" },
      milk: { price: 0.35, item: "Gallon of milk", description: "Farm fresh" },
      gas: { price: 0.10, item: "Gallon of gasoline", description: "At filling station" }
    },
    1971: {
      car: { price: 3500, item: "Average new car", description: "Mid-size sedan" },
      medianHouse: { price: 17000, item: "Median home price", description: "Median U.S. home" },
      coffee: { price: 0.25, item: "Cup of coffee", description: "At diner" },
      bread: { price: 0.25, item: "Loaf of bread", description: "Store bought" },
      milk: { price: 1.15, item: "Gallon of milk", description: "At grocery store" },
      gas: { price: 0.36, item: "Gallon of gasoline", description: "Regular unleaded" }
    },
    2020: {
      car: { price: 32000, item: "Average new car", description: "Mid-size sedan" },
      medianHouse: { price: 336900, item: "Median home price", description: "Median U.S. home" },
      coffee: { price: 4.50, item: "Cup of coffee", description: "At coffee shop" },
      bread: { price: 3.00, item: "Loaf of bread", description: "Store bought" },
      milk: { price: 4.00, item: "Gallon of milk", description: "At grocery store" },
      gas: { price: 2.60, item: "Gallon of gasoline", description: "Regular unleaded" }
    },
    2024: {
      car: { price: 35000, item: "Average new car", description: "Mid-size sedan" },
      medianHouse: { price: 422800, item: "Median home price", description: "Median U.S. home" },
      coffee: { price: 5.00, item: "Cup of coffee", description: "At coffee shop" },
      bread: { price: 3.50, item: "Loaf of bread", description: "Store bought" },
      milk: { price: 4.50, item: "Gallon of milk", description: "At grocery store" },
      gas: { price: 3.50, item: "Gallon of gasoline", description: "Regular unleaded" }
    }
  };

  // Format numbers with commas for readability
  const formatPrice = (price) => {
    return price.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  };

  const calculatePurchasingPower = (amount, fromYear, toYear = 2024) => {
    const baseYear = historicalData[fromYear];
    const targetYear = historicalData[toYear];
    
    if (!baseYear || !targetYear) return 0;
    
    // Calculate using CPI (Consumer Price Index)
    // Formula: (amount × target_CPI) / base_CPI
    const adjustedValue = (amount * targetYear.cpi) / baseYear.cpi;
    return adjustedValue;
  };

  const calculateBidirectional = () => {
    if (calculationDirection === 'past-to-present') {
      // Original: Past year to 2024
      return calculatePurchasingPower(inputAmount, inputYear, 2024);
    } else {
      // Reverse: 2024 to past year
      return calculatePurchasingPower(inputAmount, 2024, inputYear);
    }
  };

  const findWhatYouCouldBuy = (amount, year) => {
    const yearData = historicalPrices[year];
    if (!yearData || amount <= 0) return [];

    return Object.entries(yearData).map(([key, item]) => {
      const exactQuantity = amount / item.price;
      const wholeQuantity = Math.floor(exactQuantity);
      
      // For expensive items like houses/cars, show fractions if less than 1
      const isExpensive = item.price > 1000;
      const displayQuantity = isExpensive && wholeQuantity === 0 && exactQuantity > 0.001 
        ? exactQuantity 
        : wholeQuantity;
        
      return {
        ...item,
        quantity: wholeQuantity,
        displayQuantity: displayQuantity,
        exactQuantity: exactQuantity,
        category: key,
        isFractional: isExpensive && wholeQuantity === 0 && exactQuantity > 0.001
      };
    }).filter(item => item.quantity > 0 || item.isFractional);
  };

  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      const calculatedValue = calculateBidirectional();
      setCurrentValue(calculatedValue);
      setIsCalculating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [inputAmount, inputYear, calculationDirection]);

  // Dynamic data based on calculation direction
  const getDisplayData = () => {
    if (calculationDirection === 'past-to-present') {
      // Past to Present: Show purchasing power loss due to inflation
      const percentChange = ((currentValue - inputAmount) / inputAmount * 100);
      return {
        fromItems: findWhatYouCouldBuy(inputAmount, inputYear),
        toItems: findWhatYouCouldBuy(currentValue, 2024),
        fromYear: inputYear,
        toYear: 2024,
        percentageChange: Math.abs(percentChange).toFixed(1),
        isLoss: currentValue < inputAmount,
        isNominalGain: currentValue > inputAmount // Nominal dollar gain but purchasing power perspective
      };
    } else {
      // Present to Past: Show what today's money was worth historically
      const percentChange = ((inputAmount - currentValue) / currentValue * 100);
      return {
        fromItems: findWhatYouCouldBuy(inputAmount, 2024),
        toItems: findWhatYouCouldBuy(currentValue, inputYear),
        fromYear: 2024,
        toYear: inputYear,
        percentageChange: Math.abs(percentChange).toFixed(1),
        isLoss: inputAmount > currentValue,
        isNominalGain: false
      };
    }
  };

  const displayData = getDisplayData();

  return (
    <div className="bg-black rounded-xl p-8 border border-orange-500">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-orange-400 mb-2">
          💰 Museum Time Machine Calculator
        </h3>
        <p className="text-gray-300">
          {calculationDirection === 'past-to-present' 
            ? "See how much purchasing power your money has lost since any year"
            : "See what today's money would be worth in historical terms"
          }
        </p>
        
        {/* Direction Toggle */}
        <div className="mt-4 flex justify-center">
          <div className="bg-gray-800 rounded-lg p-1 flex">
            <button
              onClick={() => setCalculationDirection('past-to-present')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                calculationDirection === 'past-to-present'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              📈 Past → Present
            </button>
            <button
              onClick={() => setCalculationDirection('present-to-past')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                calculationDirection === 'present-to-past'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              📉 Present → Past
            </button>
          </div>
        </div>
      </div>

      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <div>
            <label className="block text-white font-semibold mb-2">
              Dollar Amount
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">$</span>
              <input
                type="number"
                value={inputAmount}
                onChange={(e) => setInputAmount(Number(e.target.value) || 0)}
                onFocus={(e) => e.target.select()}
                className="w-full pl-8 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white text-lg focus:border-orange-500 focus:outline-none"
                min="0"
                max="1000000"
                placeholder="Enter amount"
              />
            </div>
            
            {/* Quick Amount Buttons */}
            <div className="mt-3">
              <div className="text-sm text-gray-400 mb-2">Quick amounts:</div>
              <div className="flex flex-wrap gap-2">
                {[10, 100, 10000, 100000, 1000000].map(amount => (
                  <button
                    key={amount}
                    onClick={() => setInputAmount(amount)}
                    className={`px-3 py-1 rounded-md text-sm transition-colors ${
                      inputAmount === amount 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    ${amount >= 1000000 ? `${amount/1000000}M` : amount >= 1000 ? `${amount/1000}k` : amount}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              {calculationDirection === 'past-to-present' ? 'From Year' : 'To Year'}
            </label>
            <select
              value={inputYear}
              onChange={(e) => setInputYear(Number(e.target.value))}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white text-lg focus:border-orange-500 focus:outline-none"
            >
              {Object.keys(historicalData).map(year => (
                <option key={year} value={year}>
                  {year} {year === 1913 && "(Fed Created)"} {year === 1971 && "(Nixon Shock)"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="bg-red-900/20 border border-red-500 rounded-lg p-6">
          <div className="text-center">
            <div className="text-gray-300 text-sm mb-2">
              {calculationDirection === 'past-to-present' 
                ? `Your $${inputAmount.toLocaleString()} from ${inputYear} is worth:`
                : `Your $${inputAmount.toLocaleString()} today would be worth:`
              }
            </div>
            <div className="text-4xl font-bold text-red-400 mb-2">
              {isCalculating ? (
                <span className="animate-pulse">Calculating...</span>
              ) : (
                `$${currentValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`
              )}
            </div>
            <div className="text-gray-300 text-sm mb-4">
              {calculationDirection === 'past-to-present' 
                ? 'in 2024 dollars'
                : `in ${inputYear} dollars`
              }
            </div>
            
            <div className={`${
              calculationDirection === 'past-to-present' 
                ? (displayData.isNominalGain ? 'bg-orange-500/20' : 'bg-red-500/20')
                : (displayData.isLoss ? 'bg-red-500/20' : 'bg-green-500/20')
            } rounded-lg p-3`}>
              <div className={`${
                calculationDirection === 'past-to-present' 
                  ? (displayData.isNominalGain ? 'text-orange-300' : 'text-red-300')
                  : (displayData.isLoss ? 'text-red-300' : 'text-green-300')
              } text-lg font-semibold`}>
                {displayData.percentageChange}%
                {calculationDirection === 'past-to-present' 
                  ? (displayData.isNominalGain 
                      ? ' nominal increase (inflation effect)'
                      : ' of purchasing power LOST')
                  : (displayData.isLoss 
                      ? ' less purchasing power historically' 
                      : ' more purchasing power historically')
                }
              </div>
              <div className={`${
                calculationDirection === 'past-to-present' 
                  ? (displayData.isNominalGain ? 'text-orange-200' : 'text-red-200')
                  : (displayData.isLoss ? 'text-red-200' : 'text-green-200')
              } text-sm`}>
                {calculationDirection === 'past-to-present' 
                  ? 'due to monetary debasement since ' + inputYear
                  : 'compared to today\'s purchasing power'
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Context - What Your Money Could Buy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* What you could buy FROM */}
        <div className="bg-green-900/20 border border-green-500 rounded-lg p-6">
          <h4 className="text-xl font-bold text-green-400 mb-4 text-center">
            What ${inputAmount.toLocaleString()} could buy in {displayData.fromYear}
          </h4>
          <div className="space-y-3">
            {displayData.fromItems.slice(0, 6).map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <div className="text-green-300 font-medium">{item.item}</div>
                  <div className="text-green-200 text-sm">{item.description}</div>
                  <div className="text-green-400 text-xs">
                    ${formatPrice(item.price)} each
                  </div>
                </div>
                <div className="text-green-400 font-bold">
                  {item.isFractional 
                    ? `${(item.exactQuantity * 100).toFixed(1)}%`
                    : `${item.quantity}x`
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What you can buy TO */}
        <div className="bg-red-900/20 border border-red-500 rounded-lg p-6">
          <h4 className="text-xl font-bold text-red-400 mb-4 text-center">
            What ${currentValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} can buy in {displayData.toYear}
          </h4>
          <div className="space-y-3">
            {displayData.toItems.length > 0 ? (
              displayData.toItems.slice(0, 6).map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <div className="text-red-300 font-medium">{item.item}</div>
                    <div className="text-red-200 text-sm">{item.description}</div>
                    <div className="text-red-400 text-xs">
                      ${formatPrice(item.price)} each
                    </div>
                  </div>
                  <div className="text-red-400 font-bold">
                    {item.isFractional 
                      ? `${(item.exactQuantity * 100).toFixed(1)}%`
                      : `${item.quantity}x`
                    }
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-red-300 py-8">
                <div className="text-4xl mb-2">😢</div>
                <div>Not enough to buy anything substantial</div>
                <div className="text-sm text-red-400 mt-2">
                  Value has been completely devalued
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Key Insight */}
      <div className="mt-8 p-4 bg-orange-900/20 border border-orange-400 rounded-lg">
        <p className="text-orange-300 text-center">
          <span className="font-bold">💡 Museum Insight:</span> {' '}
          {calculationDirection === 'past-to-present' 
            ? (displayData.isNominalGain
                ? `While $${inputAmount.toLocaleString()} from ${inputYear} nominally became $${currentValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} today (${displayData.percentageChange}% increase), this is just inflation. In terms of what you can actually buy, the purchasing power impact varies by item.`
                : `Your $${inputAmount.toLocaleString()} from ${inputYear} lost ${displayData.percentageChange}% of its purchasing power. ${inputYear < 1971 ? 'This wealth destruction began when Nixon ended the gold standard in 1971.' : 'The Federal Reserve has systematically debased your money since then.'}`)
            : `Today's $${inputAmount.toLocaleString()} would have equivalent purchasing power to $${currentValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})} in ${inputYear}. This shows how much ${displayData.isLoss ? 'weaker money is today due to inflation' : 'stronger money is today'}.`
          }
        </p>
      </div>

      {/* Data Source */}
      <div className="mt-4 p-3 bg-gray-800/50 border border-gray-600 rounded-lg">
        <div className="text-gray-400 text-xs">
          📊 <span className="font-medium text-white">Data Sources & Methodology:</span>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <div className="font-medium text-green-400">Purchasing Power:</div>
              <div className="text-gray-300">{SOURCES.CPI_DATA.source}</div>
            </div>
            <div>
              <div className="font-medium text-orange-400">Historical Prices:</div>
              <div className="text-gray-300">{SOURCES.HISTORICAL_PRICES.source}</div>
            </div>
          </div>
          <div className="mt-2 pt-2 border-t border-gray-700">
            <div className="text-yellow-400 font-medium">Formula:</div>
            <div className="text-gray-300">Adjusted Value = (Amount × Current_CPI) / Historical_CPI</div>
            <div className="text-gray-400 text-xs mt-1">
              Example: $100 in 1959 = ($100 × 321.5) / 29.1 = $1,106
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 justify-center">
          <a href={SOURCES.CPI_DATA.url} target="_blank" rel="noopener noreferrer" 
             className="text-blue-400 hover:text-blue-300 text-xs underline">
            BLS CPI Data
          </a>
          <a href="https://www.bls.gov/data/inflation_calculator.htm" target="_blank" rel="noopener noreferrer" 
             className="text-blue-400 hover:text-blue-300 text-xs underline">
            BLS Calculator
          </a>
          {SOURCES.HISTORICAL_PRICES.urls.map((url, i) => (
            <a key={i} href={url} target="_blank" rel="noopener noreferrer" 
               className="text-blue-400 hover:text-blue-300 text-xs underline">
              Source {i + 1}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DollarValueCalculator;