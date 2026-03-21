import React, { useState, useEffect } from 'react';

const SocietalDeclineCharts = () => {
  const [activeChart, setActiveChart] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Swipe functionality
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeChart < chartData.length - 1) {
      setActiveChart(activeChart + 1);
    }
    if (isRightSwipe && activeChart > 0) {
      setActiveChart(activeChart - 1);
    }
  };

  const nextChart = () => {
    if (activeChart < chartData.length - 1) {
      setActiveChart(activeChart + 1);
    }
  };

  const prevChart = () => {
    if (activeChart > 0) {
      setActiveChart(activeChart - 1);
    }
  };

  const chartData = [
    {
      title: "HOME VALUE CHANGE VS. INCOME CHANGE",
      subtitle: "(1965-2021)",
      description: "Housing became unaffordable for an entire generation",
      data: {
        homeValue: [
          { year: 1965, value: 0 },
          { year: 1971, value: 15 },
          { year: 1980, value: 25 },
          { year: 1990, value: 40 },
          { year: 2000, value: 60 },
          { year: 2010, value: 85 },
          { year: 2021, value: 120 }
        ],
        income: [
          { year: 1965, value: 0 },
          { year: 1971, value: 8 },
          { year: 1980, value: 10 },
          { year: 1990, value: 12 },
          { year: 2000, value: 15 },
          { year: 2010, value: 18 },
          { year: 2021, value: 20 }
        ]
      },
      colors: { homeValue: '#ef4444', income: '#f97316' },
      source: "U.S. Census Bureau, Bureau of Labor Statistics"
    },
    {
      title: "WORKER PAY VS. PRODUCTIVITY",
      subtitle: "Since the 1970s",
      description: "The great wage theft began when money became fake",
      data: {
        productivity: [
          { year: 1949, value: 100 },
          { year: 1971, value: 180 },
          { year: 1990, value: 280 },
          { year: 2021, value: 400 }
        ],
        wages: [
          { year: 1949, value: 100 },
          { year: 1971, value: 160 },
          { year: 1990, value: 180 },
          { year: 2021, value: 220 }
        ]
      },
      colors: { productivity: '#ffffff', wages: '#ef4444' },
      source: "Economic Policy Institute, Bureau of Labor Statistics"
    },
    {
      title: "CHILDHOOD OBESITY TRENDS",
      subtitle: "Ages 2-19 Years (1963-2016)",
      description: "Industrial food replaced real food after 1971",
      data: {
        ages2to5: [
          { year: 1963, value: 4 },
          { year: 1971, value: 5 },
          { year: 1980, value: 7 },
          { year: 1990, value: 10 },
          { year: 2000, value: 14 },
          { year: 2016, value: 14 }
        ],
        ages6to11: [
          { year: 1963, value: 4 },
          { year: 1971, value: 5 },
          { year: 1980, value: 7 },
          { year: 1990, value: 11 },
          { year: 2000, value: 16 },
          { year: 2016, value: 18 }
        ],
        ages12to19: [
          { year: 1963, value: 5 },
          { year: 1971, value: 6 },
          { year: 1980, value: 8 },
          { year: 1990, value: 11 },
          { year: 2000, value: 16 },
          { year: 2016, value: 21 }
        ]
      },
      colors: { ages2to5: '#22c55e', ages6to11: '#f97316', ages12to19: '#ef4444' },
      source: "CDC National Health and Nutrition Examination Survey"
    },
    {
      title: "FAMILIES IN POVERTY BY STRUCTURE",
      subtitle: "(1959-2012)",
      description: "Family breakdown accelerated after sound money ended",
      data: {
        marriedCouple: [
          { year: 1960, value: 1800 },
          { year: 1971, value: 1600 },
          { year: 1980, value: 1500 },
          { year: 1990, value: 1800 },
          { year: 2000, value: 1600 },
          { year: 2012, value: 1800 }
        ],
        singleParent: [
          { year: 1960, value: 1200 },
          { year: 1971, value: 1400 },
          { year: 1980, value: 2200 },
          { year: 1990, value: 3500 },
          { year: 2000, value: 4200 },
          { year: 2012, value: 4800 }
        ]
      },
      colors: { marriedCouple: '#ffffff', singleParent: '#ef4444' },
      source: "U.S. Census Bureau Current Population Survey"
    }
  ];

  const Chart = ({ data, title, subtitle, description, colors, source, index }) => {
    const maxValue = Math.max(...Object.values(data).flat().map(d => d.value));
    const chartWidth = 800;
    const chartHeight = 400;
    const padding = 60;

    const xScale = (year) => padding + ((year - 1949) / (2021 - 1949)) * (chartWidth - 2 * padding);
    const yScale = (value) => chartHeight - padding - ((value / maxValue) * (chartHeight - 2 * padding));

    const createPath = (points) => {
      return points.reduce((path, point, index) => {
        const x = xScale(point.year);
        const y = yScale(point.value);
        return path + (index === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`);
      }, '');
    };

    return (
      <div className={`bg-black rounded-lg p-8 transition-all duration-500 ${
        activeChart === index ? 'ring-2 ring-orange-500' : ''
      }`}>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-lg text-gray-300 mb-4">{subtitle}</p>
          <p className="text-orange-400 italic">{description}</p>
        </div>

        <div className="relative">
          <svg 
            width="100%" 
            height={chartHeight} 
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="overflow-visible"
          >
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map(percent => (
              <line
                key={percent}
                x1={padding}
                y1={yScale(maxValue * percent / 100)}
                x2={chartWidth - padding}
                y2={yScale(maxValue * percent / 100)}
                stroke="#374151"
                strokeWidth="1"
                opacity="0.3"
              />
            ))}

            {/* 1971 Nixon Shock line */}
            <line
              x1={xScale(1971)}
              y1={padding}
              x2={xScale(1971)}
              y2={chartHeight - padding}
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.8"
            />
            <text
              x={xScale(1971)}
              y={padding - 10}
              fill="#ef4444"
              fontSize="12"
              textAnchor="middle"
              className="font-semibold"
            >
              1971
            </text>

            {/* Data lines */}
            {Object.entries(data).map(([key, points]) => (
              <g key={key}>
                <path
                  d={createPath(points)}
                  stroke={colors[key]}
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: animationComplete ? 'none' : '1000',
                    strokeDashoffset: animationComplete ? '0' : '1000',
                    transition: 'stroke-dashoffset 2s ease-in-out'
                  }}
                />
                {/* Data points */}
                {points.map((point, i) => (
                  <circle
                    key={i}
                    cx={xScale(point.year)}
                    cy={yScale(point.value)}
                    r="4"
                    fill={colors[key]}
                    opacity={animationComplete ? 1 : 0}
                    style={{
                      transition: `opacity 0.5s ease-in-out ${i * 0.1}s`
                    }}
                  />
                ))}
              </g>
            ))}

            {/* Y-axis labels */}
            {[0, 25, 50, 75, 100].map(percent => (
              <text
                key={percent}
                x={padding - 10}
                y={yScale(maxValue * percent / 100) + 4}
                fill="#9ca3af"
                fontSize="12"
                textAnchor="end"
              >
                {Math.round(maxValue * percent / 100)}
              </text>
            ))}

            {/* X-axis labels */}
            {[1960, 1980, 2000, 2020].map(year => (
              <text
                key={year}
                x={xScale(year)}
                y={chartHeight - padding + 20}
                fill="#9ca3af"
                fontSize="12"
                textAnchor="middle"
              >
                {year}
              </text>
            ))}
          </svg>

          {/* Legend */}
          <div className="flex justify-center mt-6 space-x-8">
            {Object.entries(colors).map(([key, color]) => (
              <div key={key} className="flex items-center">
                <div 
                  className="w-4 h-1 mr-2 rounded"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm text-gray-300 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Source */}
        <div className="mt-6 text-xs text-gray-500 text-center">
          Source: {source}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Gallery Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            The Great Divergence
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            How 1971 broke America: A data exhibition
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Chart Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-4">
              {chartData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveChart(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    activeChart === index ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <div className="text-gray-400 text-xs md:hidden">
              ← Swipe to navigate →
            </div>
          </div>
        </div>

        {/* Active Chart with Swipe */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevChart}
            disabled={activeChart === 0}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 border border-gray-600 flex items-center justify-center transition-colors ${
              activeChart === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/70 hover:border-orange-500'
            }`}
          >
            <span className="text-white text-xl">‹</span>
          </button>
          
          <button
            onClick={nextChart}
            disabled={activeChart === chartData.length - 1}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 border border-gray-600 flex items-center justify-center transition-colors ${
              activeChart === chartData.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-black/70 hover:border-orange-500'
            }`}
          >
            <span className="text-white text-xl">›</span>
          </button>

          {/* Swipeable Chart Container */}
          <div 
            className="grid grid-cols-1 gap-8 touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <Chart
              {...chartData[activeChart]}
              index={activeChart}
            />
          </div>
        </div>

        {/* Chart Grid Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {chartData.map((chart, index) => (
            <button
              key={index}
              onClick={() => setActiveChart(index)}
              className={`p-4 rounded-lg border transition-all ${
                activeChart === index 
                  ? 'border-orange-500 bg-orange-500/10' 
                  : 'border-gray-700 bg-gray-800 hover:border-gray-600'
              }`}
            >
              <h4 className="text-sm font-semibold text-white mb-2">
                {chart.title}
              </h4>
              <p className="text-xs text-gray-400">
                {chart.description}
              </p>
            </button>
          ))}
        </div>

        {/* Exhibition Message */}
        <div className="text-center mt-16">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              This Was Not An Accident
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Every chart tells the same story: <strong>1971</strong> was the year America's leaders chose 
              to sacrifice your generation's future for short-term power. They knew this system would 
              "hollow out the middle class," "devastate our culture," and "steal from the youth."
            </p>
            <p className="text-orange-400 mt-4 font-semibold">
              But there's a peaceful way out...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocietalDeclineCharts;