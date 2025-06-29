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
      house: { price: 3500, item: "Average home", description: "4 bedroom house with land" },
      coffee: { price: 0.05, item: "Cup of coffee", description: "At a restaurant" },
      bread: { price: 0.04, item: "Loaf of bread", description: "Fresh from bakery" },
      milk: { price: 0.35, item: "Gallon of milk", description: "Farm fresh" },
      gas: { price: 0.10, item: "Gallon of gasoline", description: "At filling station" }
    },
    1971: {
      car: { price: 3500, item: "Average new car", description: "Mid-size sedan" },
      house: { price: 25000, item: "Average home", description: "3 bedroom suburban home" },
      coffee: { price: 0.25, item: "Cup of coffee", description: "At diner" },
      bread: { price: 0.25, item: "Loaf of bread", description: "Store bought" },
      milk: { price: 1.15, item: "Gallon of milk", description: "At grocery store" },
      gas: { price: 0.36, item: "Gallon of gasoline", description: "Regular unleaded" }
    },
    2024: {
      car: { price: 35000, item: "Average new car", description: "Mid-size sedan" },
      house: { price: 400000, item: "Average home", description: "3 bedroom suburban home" },
      coffee: { price: 5.00, item: "Cup of coffee", description: "At coffee shop" },
      bread: { price: 3.50, item: "Loaf of bread", description: "Store bought" },
      milk: { price: 4.50, item: "Gallon of milk", description: "At grocery store" },
      gas: { price: 3.50, item: "Gallon of gasoline", description: "Regular unleaded" }
    }
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
    if (!yearData) return [];

    return Object.entries(yearData).map(([key, item]) => ({
      ...item,
      quantity: Math.floor(amount / item.price),
      category: key
    })).filter(item => item.quantity > 0);
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
      return {
        fromItems: findWhatYouCouldBuy(inputAmount, inputYear),
        toItems: findWhatYouCouldBuy(currentValue, 2024),
        fromYear: inputYear,
        toYear: 2024,
        percentageChange: ((currentValue - inputAmount) / inputAmount * 100).toFixed(1),
        isLoss: currentValue < inputAmount
      };
    } else {
      return {
        fromItems: findWhatYouCouldBuy(inputAmount, 2024),
        toItems: findWhatYouCouldBuy(currentValue, inputYear),
        fromYear: 2024,
        toYear: inputYear,
        percentageChange: ((currentValue - inputAmount) / inputAmount * 100).toFixed(1),
        isLoss: currentValue < inputAmount
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
                onChange={(e) => setInputAmount(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white text-lg focus:border-orange-500 focus:outline-none"
                min="1"
                max="1000000"
              />
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
                ? `Your $${inputAmount} from ${inputYear} is worth:`
                : `Your $${inputAmount} today would be worth:`
              }
            </div>
            <div className="text-4xl font-bold text-red-400 mb-2">
              {isCalculating ? (
                <span className="animate-pulse">Calculating...</span>
              ) : (
                `$${currentValue.toFixed(2)}`
              )}
            </div>
            <div className="text-gray-300 text-sm mb-4">
              {calculationDirection === 'past-to-present' 
                ? 'in 2024 dollars'
                : `in ${inputYear} dollars`
              }
            </div>
            
            <div className="bg-red-500/20 rounded-lg p-3">
              <div className="text-red-300 text-lg font-semibold">
                {Math.abs(displayData.percentageChange)}% 
                {displayData.isLoss ? ' of value LOST' : ' of value GAINED'}
              </div>
              <div className="text-red-200 text-sm">
                {calculationDirection === 'past-to-present' 
                  ? 'to monetary debasement'
                  : 'showing historical purchasing power'
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
            What ${inputAmount} could buy in {displayData.fromYear}
          </h4>
          <div className="space-y-3">
            {displayData.fromItems.slice(0, 4).map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <div className="text-green-300 font-medium">{item.item}</div>
                  <div className="text-green-200 text-sm">{item.description}</div>
                </div>
                <div className="text-green-400 font-bold">
                  {item.quantity}x
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What you can buy TO */}
        <div className="bg-red-900/20 border border-red-500 rounded-lg p-6">
          <h4 className="text-xl font-bold text-red-400 mb-4 text-center">
            What ${currentValue.toFixed(2)} can buy in {displayData.toYear}
          </h4>
          <div className="space-y-3">
            {displayData.toItems.length > 0 ? (
              displayData.toItems.slice(0, 4).map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <div className="text-red-300 font-medium">{item.item}</div>
                    <div className="text-red-200 text-sm">{item.description}</div>
                  </div>
                  <div className="text-red-400 font-bold">
                    {item.quantity}x
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
            ? (inputYear < 1971 
                ? `This wealth destruction began when Nixon ended the gold standard in 1971. Your money lost ${Math.abs(displayData.percentageChange)}% of its value through systematic monetary debasement.`
                : `Since ${inputYear}, the Federal Reserve has printed away ${Math.abs(displayData.percentageChange)}% of your money's value. This is not inflation - this is theft.`)
            : `In ${inputYear} terms, today's $${inputAmount} would have had ${Math.abs(displayData.percentageChange)}% ${displayData.isLoss ? 'less' : 'more'} purchasing power. This shows the true scale of monetary debasement since then.`
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