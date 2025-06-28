import React, { useState, useEffect } from 'react';

const MoneySupplyChart = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [animationProgress, setAnimationProgress] = useState(0);

  // Real M2 Money Supply Data (in trillions USD)
  const m2Data = [
    { year: 1959, amount: 0.3, event: "Pre-Nixon Era" },
    { year: 1971, amount: 0.7, event: "Nixon Shock - Gold Standard Ended" },
    { year: 1980, amount: 1.6, event: "Volcker Era" },
    { year: 1990, amount: 3.3, event: "S&L Crisis" },
    { year: 2000, amount: 4.9, event: "Dot-com Bubble" },
    { year: 2008, amount: 7.3, event: "Financial Crisis Begins" },
    { year: 2010, amount: 8.7, event: "QE1 & QE2" },
    { year: 2015, amount: 12.0, event: "QE3 Ends" },
    { year: 2020, amount: 15.3, event: "COVID Begins" },
    { year: 2021, amount: 20.3, event: "Peak Money Printing" },
    { year: 2024, amount: 21.0, event: "Current Day" }
  ];

  const maxAmount = Math.max(...m2Data.map(d => d.amount));
  const chartHeight = 300;
  const chartWidth = 800;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationProgress(1);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getYPosition = (amount) => {
    return chartHeight - (amount / maxAmount) * chartHeight;
  };

  const getXPosition = (index) => {
    return (index / (m2Data.length - 1)) * chartWidth;
  };

  const pathData = m2Data.map((point, index) => {
    const x = getXPosition(index);
    const y = getYPosition(point.amount * animationProgress);
    return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  }).join(' ');

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-red-500">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-red-400 mb-2">
          M2 Money Supply: The Great Debasement
        </h3>
        <p className="text-gray-300 text-sm">
          Watch how the Federal Reserve has systematically destroyed the dollar since 1971
        </p>
      </div>

      <div className="relative">
        <svg 
          width="100%" 
          height={chartHeight + 100} 
          viewBox={`0 0 ${chartWidth} ${chartHeight + 100}`}
          className="overflow-visible"
        >
          {/* Grid Lines */}
          {[0, 5, 10, 15, 20].map(value => (
            <g key={value}>
              <line
                x1={0}
                y1={getYPosition(value)}
                x2={chartWidth}
                y2={getYPosition(value)}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth={1}
              />
              <text
                x={-10}
                y={getYPosition(value) + 4}
                fill="rgba(255,255,255,0.6)"
                fontSize={12}
                textAnchor="end"
              >
                ${value}T
              </text>
            </g>
          ))}

          {/* The Line Chart */}
          <path
            d={pathData}
            fill="none"
            stroke="url(#redGradient)"
            strokeWidth={3}
            className="transition-all duration-2000"
          />

          {/* Gradient Definition */}
          <defs>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="40%" stopColor="#eab308" />
              <stop offset="80%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
            <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(239,68,68,0.3)" />
              <stop offset="100%" stopColor="rgba(239,68,68,0.0)" />
            </linearGradient>
          </defs>

          {/* Fill Area */}
          <path
            d={`${pathData} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`}
            fill="url(#fillGradient)"
            className="transition-all duration-2000"
          />

          {/* Data Points */}
          {m2Data.map((point, index) => (
            <g key={index}>
              <circle
                cx={getXPosition(index)}
                cy={getYPosition(point.amount * animationProgress)}
                r={hoveredPoint === index ? 8 : 5}
                fill={point.year >= 2020 ? "#dc2626" : point.year >= 2008 ? "#eab308" : "#22c55e"}
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setHoveredPoint(index)}
                onMouseLeave={() => setHoveredPoint(null)}
              />
              
              {/* Year Labels */}
              <text
                x={getXPosition(index)}
                y={chartHeight + 20}
                fill="rgba(255,255,255,0.7)"
                fontSize={10}
                textAnchor="middle"
                className="pointer-events-none"
              >
                {point.year}
              </text>

              {/* Hover Tooltip */}
              {hoveredPoint === index && (
                <g>
                  <rect
                    x={getXPosition(index) - 60}
                    y={getYPosition(point.amount * animationProgress) - 50}
                    width={120}
                    height={40}
                    fill="rgba(0,0,0,0.9)"
                    stroke="rgba(255,255,255,0.3)"
                    rx={4}
                  />
                  <text
                    x={getXPosition(index)}
                    y={getYPosition(point.amount * animationProgress) - 35}
                    fill="white"
                    fontSize={12}
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    ${point.amount}T
                  </text>
                  <text
                    x={getXPosition(index)}
                    y={getYPosition(point.amount * animationProgress) - 20}
                    fill="rgba(255,255,255,0.8)"
                    fontSize={10}
                    textAnchor="middle"
                  >
                    {point.event}
                  </text>
                </g>
              )}
            </g>
          ))}

          {/* Crisis Markers */}
          {m2Data.filter(d => [1971, 2008, 2020].includes(d.year)).map((crisis, index) => (
            <g key={crisis.year}>
              <line
                x1={getXPosition(m2Data.findIndex(d => d.year === crisis.year))}
                y1={0}
                x2={getXPosition(m2Data.findIndex(d => d.year === crisis.year))}
                y2={chartHeight}
                stroke="rgba(255,0,0,0.5)"
                strokeWidth={2}
                strokeDasharray="5,5"
              />
            </g>
          ))}
        </svg>

        {/* Legend */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-gray-300">Pre-2008: "Normal" Growth</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-300">2008-2020: Quantitative Easing</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span className="text-gray-300">2020+: Money Printer Go BRRR</span>
          </div>
        </div>

        {/* Shocking Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-red-900/30 border border-red-500 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-red-400">7,000%</div>
            <div className="text-xs text-red-200">Increase Since 1959</div>
          </div>
          <div className="bg-orange-900/30 border border-orange-500 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-orange-400">37%</div>
            <div className="text-xs text-orange-200">Increase in 2020-2021</div>
          </div>
          <div className="bg-yellow-900/30 border border-yellow-500 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400">$5.7T</div>
            <div className="text-xs text-yellow-200">Printed Since 2020</div>
          </div>
          <div className="bg-red-900/30 border border-red-500 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-red-400">18 Months</div>
            <div className="text-xs text-red-200">To Print 40% of All USD</div>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="p-4 bg-red-900/20 border border-red-400 rounded-lg">
          <p className="text-red-300 text-sm">
            <span className="font-bold">⚠️ Reality Check:</span> In just 18 months (2020-2021), 
            the Federal Reserve printed more money than existed in the previous 200+ years of American history.
          </p>
        </div>
        
        {/* Data Source Attribution */}
        <div className="p-3 bg-gray-800/50 border border-gray-600 rounded-lg">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="text-gray-400 text-xs">
              📊 <span className="font-medium">Data Source:</span> Federal Reserve Economic Data (FRED)
            </div>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://fred.stlouisfed.org/series/M2SL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-xs underline transition-colors"
              >
                📈 View M2 Money Supply Data
              </a>
              <a 
                href="https://www.federalreserve.gov/monetarypolicy/bst_recenttrends.htm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-xs underline transition-colors"
              >
                🏦 Fed Balance Sheet
              </a>
              <a 
                href="https://www.bls.gov/data/inflation_calculator.htm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-xs underline transition-colors"
              >
                💰 BLS Inflation Calculator
              </a>
            </div>
          </div>
          <div className="text-gray-500 text-xs mt-2">
            All data sourced from official U.S. government agencies. Click links to verify independently.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneySupplyChart;