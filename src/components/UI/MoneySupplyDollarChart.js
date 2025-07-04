import React, { useState, useEffect } from 'react';
import { SOURCES } from '../../data/historicalData';

const MoneySupplyDollarChart = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [showDataSources, setShowDataSources] = useState(false);

  const m2Data = [
    { year: 1959, amount: 0.287, dollarValue: 100.00, event: "Pre-Nixon Era", period: "sound", medianHousePrice: 11900 },
    { year: 1971, amount: 0.633, dollarValue: 71.84, event: "Nixon Shock - Gold Standard Ended", period: "early-fiat", medianHousePrice: 17000 },
    { year: 1980, amount: 1.483, dollarValue: 35.32, event: "Volcker Era", period: "early-fiat", medianHousePrice: 47200 },
    { year: 1990, amount: 3.167, dollarValue: 22.26, event: "S&L Crisis", period: "early-fiat", medianHousePrice: 119600 },
    { year: 2000, amount: 4.668, dollarValue: 16.90, event: "Dot-com Bubble", period: "early-fiat", medianHousePrice: 119600 },
    { year: 2008, amount: 7.518, dollarValue: 13.52, event: "Financial Crisis Begins", period: "qe-era", medianHousePrice: 232100 },
    { year: 2010, amount: 8.478, dollarValue: 13.34, event: "QE1 & QE2", period: "qe-era", medianHousePrice: 222900 },
    { year: 2015, amount: 11.789, dollarValue: 12.20, event: "QE3 Ends", period: "qe-era", medianHousePrice: 294900 },
    { year: 2020, amount: 15.417, dollarValue: 11.24, event: "COVID Begins", period: "brrr", medianHousePrice: 336900 },
    { year: 2021, amount: 19.360, dollarValue: 9.95, event: "Peak Money Printing", period: "brrr", medianHousePrice: 358700 },
    { year: 2024, amount: 20.773, dollarValue: 9.05, event: "Current Day", period: "brrr", medianHousePrice: 422800 }
  ];

  const maxM2 = Math.max(...m2Data.map(d => d.amount));
  const maxDollar = 100;
  const maxHousePrice = Math.max(...m2Data.map(d => d.medianHousePrice));
  const chartHeight = 300;
  const chartWidth = 350;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationProgress(1);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getXPosition = (index) => {
    return (index / (m2Data.length - 1)) * chartWidth;
  };

  const getYPosition = (value, max, invert = false) => {
    const normalized = value / max;
    return chartHeight - (normalized * chartHeight);
  };

  const createPath = (data, getValue, max, invert = false) => {
    return data.map((point, index) => {
      const x = getXPosition(index);
      const y = getYPosition(getValue(point) * animationProgress, max, invert);
      return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    }).join(' ');
  };

  const m2Path = createPath(m2Data, (p) => p.amount, maxM2);
  const dollarPath = createPath(m2Data, (p) => p.dollarValue, maxDollar, true);
  const housePricePath = createPath(m2Data, (p) => p.medianHousePrice, maxHousePrice);

  const Chart = ({ title, legend, children }) => (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
      <div className="text-center mb-4">
        <h4 className="text-xl font-bold text-white">{title}</h4>
        {legend && <div className="text-xs text-gray-400 mt-1">{legend}</div>}
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );

  const renderYAxis = (max, suffix = '', position = 'left') => {
    const labels = [0, 25, 50, 75, 100];
    return labels.map(percent => {
      const value = max * percent / 100;
      const displayValue = suffix === '$' ? value.toFixed(0) : (value / (suffix === 'T' ? 1 : 1000)).toFixed(0);
      return (
        <g key={percent}>
          <text
            x={position === 'left' ? -10 : chartWidth + 10}
            y={getYPosition(value, max) + 4}
            fill="rgba(255,255,255,0.6)"
            fontSize={10}
            textAnchor={position === 'left' ? 'end' : 'start'}
          >
            {suffix === '$' ? `$${displayValue}` : `$${displayValue}${suffix}`}
          </text>
        </g>
      );
    });
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-red-500">
      <div className="mb-6 text-center">
        <h3 className="text-3xl font-bold text-red-400 mb-2">
          The Perfect Correlation
        </h3>
        <p className="text-gray-300">
          Expand money supply → Dollar loses purchasing power
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart title="M2 Supply vs. House Price" legend="🔴 M2 Money Supply  🔵 House Price">
          <svg 
            width="100%" 
            height={chartHeight + 80} 
            viewBox={`0 0 ${chartWidth} ${chartHeight + 80}`}
            className="overflow-visible"
          >
            {renderYAxis(maxM2, 'T')}
            {renderYAxis(maxHousePrice, 'k', 'right')}
            <path d={m2Path} fill="none" stroke="url(#gradientLine)" strokeWidth={4} />
            <path d={housePricePath} fill="none" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5,5" />
            {m2Data.map((point, index) => (
              <g key={index}>
                <circle 
                  cx={getXPosition(index)} 
                  cy={getYPosition(point.amount, maxM2)} 
                  r={hoveredPoint === index ? 8 : 5} 
                  fill="#ef4444" 
                  className="transition-all duration-200 cursor-pointer"
                  onMouseEnter={() => setHoveredPoint(index)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                <circle 
                  cx={getXPosition(index)} 
                  cy={getYPosition(point.medianHousePrice, maxHousePrice)} 
                  r={hoveredPoint === index ? 8 : 5} 
                  fill="#3b82f6" 
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

                {/* Hover Tooltip for M2 */}
                {hoveredPoint === index && (
                  <g>
                    <rect
                      x={getXPosition(index) - 80}
                      y={getYPosition(point.amount, maxM2) - 70}
                      width={160}
                      height={60}
                      fill="rgba(0,0,0,0.9)"
                      stroke="rgba(255,255,255,0.3)"
                      rx={4}
                    />
                    <text
                      x={getXPosition(index)}
                      y={getYPosition(point.amount, maxM2) - 50}
                      fill="#ef4444"
                      fontSize={12}
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      M2: ${point.amount}T
                    </text>
                    <text
                      x={getXPosition(index)}
                      y={getYPosition(point.amount, maxM2) - 35}
                      fill="#3b82f6"
                      fontSize={12}
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      House: ${(point.medianHousePrice/1000).toFixed(0)}k
                    </text>
                    <text
                      x={getXPosition(index)}
                      y={getYPosition(point.amount, maxM2) - 20}
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
             <defs>
              <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="30%" stopColor="#f59e0b" />
                <stop offset="70%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              <linearGradient id="dollarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="18%" stopColor="#22c55e" />
                <stop offset="18.1%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>
          </svg>
        </Chart>
        
        <Chart title="Dollar Purchasing Power" legend="🟢 Purchasing Power">
           <svg 
            width="100%" 
            height={chartHeight + 80} 
            viewBox={`0 0 ${chartWidth} ${chartHeight + 80}`}
            className="overflow-visible"
          >
            {renderYAxis(maxDollar, '$')}
            <path d={dollarPath} fill="none" stroke="url(#dollarGradient)" strokeWidth={4} />
            {m2Data.map((point, index) => (
              <g key={index}>
                <circle 
                  cx={getXPosition(index)} 
                  cy={getYPosition(point.dollarValue, maxDollar, true)} 
                  r={hoveredPoint === index ? 8 : 5} 
                  fill={point.year < 1971 ? '#22c55e' : '#ef4444'} 
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

                {/* Hover Tooltip for Dollar Value */}
                {hoveredPoint === index && (
                  <g>
                    <rect
                      x={getXPosition(index) - 70}
                      y={getYPosition(point.dollarValue, maxDollar, true) - 60}
                      width={140}
                      height={50}
                      fill="rgba(0,0,0,0.9)"
                      stroke="rgba(255,255,255,0.3)"
                      rx={4}
                    />
                    <text
                      x={getXPosition(index)}
                      y={getYPosition(point.dollarValue, maxDollar, true) - 40}
                      fill={point.year < 1971 ? '#22c55e' : '#ef4444'}
                      fontSize={12}
                      textAnchor="middle"
                      fontWeight="bold"
                    >
                      ${point.dollarValue.toFixed(2)}
                    </text>
                    <text
                      x={getXPosition(index)}
                      y={getYPosition(point.dollarValue, maxDollar, true) - 25}
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
            <line x1={0} y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
          </svg>
        </Chart>
      </div>


      <div className="mt-6 text-center">
        <div className="bg-gray-800/30 rounded-lg p-4 max-w-4xl mx-auto">
          <div className="text-orange-400 font-bold text-sm mb-2">💡 The 1971 Turning Point</div>
          <div className="text-white text-sm leading-relaxed">
            M2 expanded <span className="text-red-400 font-bold">7,357%</span> since 1959, while $100 lost <span className="text-red-400 font-bold">90.95%</span> of its purchasing power (now worth $9.05)
          </div>
          <div className="text-gray-400 text-xs mt-3 border-t border-gray-700 pt-2">
            Sources: Federal Reserve M2SL, BLS CPI • Note: Median house prices nominal, not inflation-adjusted
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button 
          onClick={() => setShowDataSources(!showDataSources)}
          className="w-full p-3 bg-gray-800/30 border border-gray-600 rounded-lg hover:bg-gray-800/50 transition-colors text-left"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-xs">
              📊 <span className="font-medium text-white">Data Sources & Methodology</span>
            </span>
            <span className={`text-gray-400 text-xs transition-transform ${showDataSources ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </div>
        </button>
        
        {showDataSources && (
          <div className="mt-2 p-3 bg-gray-800/50 border border-gray-600 rounded-lg space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div>
                <div className="font-medium text-green-400 mb-1">M2 Money Supply:</div>
                <div className="text-gray-300 mb-1">{SOURCES.M2_DATA.source}</div>
                <div className="text-gray-400">Series: {SOURCES.M2_DATA.series_id}</div>
              </div>
              <div>
                <div className="font-medium text-orange-400 mb-1">Purchasing Power:</div>
                <div className="text-gray-300 mb-1">{SOURCES.CPI_DATA.source}</div>
                <div className="text-gray-400">Series: {SOURCES.CPI_DATA.series_id}</div>
              </div>
            </div>
            <div className="pt-2 border-t border-gray-700">
              <div className="text-gray-400 text-xs">
                <span className="font-medium text-yellow-400">Calculation:</span> Dollar purchasing power = (2024_CPI / Historical_CPI) × 100
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <a 
                href={SOURCES.M2_DATA.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-xs underline transition-colors"
              >
                📈 FRED M2 Data
              </a>
              <a 
                href={SOURCES.CPI_DATA.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-xs underline transition-colors"
              >
                💰 BLS CPI Data
              </a>
              <a 
                href="https://www.bls.gov/data/inflation_calculator.htm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-xs underline transition-colors"
              >
                🧮 BLS Calculator
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoneySupplyDollarChart;
