import React, { useState } from 'react';

const MonetaryTimeline = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  const timelineEvents = [
    {
      year: "1913",
      title: "Federal Reserve Created",
      description: "The Federal Reserve Act creates a central banking system, ending the gold standard era. Government can now print money beyond gold reserves.",
      impact: "Dollar loses 96% of purchasing power from 1913 to today",
      color: "bg-yellow-500",
      icon: "🏦",
      source: "https://www.federalreserve.gov/aboutthefed/section2a.htm"
    },
    {
      year: "1933",
      title: "Executive Order 6102: Gold Confiscation",
      description: "FDR outlaws private gold ownership, forcing citizens to sell gold at $20.67/oz. Government immediately devalues dollar by 69%.",
      impact: "Gold revalued to $35/oz the next year — massive wealth transfer from citizens to government",
      color: "bg-orange-500",
      icon: "🚫",
      source: "https://www.presidency.ucsb.edu/documents/executive-order-6102-forbidding-the-hoarding-gold-coin-gold-bullion-and-gold-certificates"
    },
    {
      year: "1944",
      title: "Bretton Woods Agreement",
      description: "Global monetary system established with USD as world reserve currency, backed by gold at $35/oz. Other currencies pegged to dollar.",
      impact: "Dollar becomes foundation of global trade, but money printing continues behind the scenes",
      color: "bg-blue-500",
      icon: "🌍",
      source: "https://www.state.gov/milestones/1937-1945/bretton-woods"
    },
    {
      year: "1971",
      title: "Nixon Shock",
      description: "Nixon ends gold convertibility. The last link between money and real value is severed.",
      impact: "Dollar becomes pure fiat currency - backed by nothing but promises",
      color: "bg-red-500",
      icon: "💥",
      source: "https://www.presidency.ucsb.edu/documents/address-the-nation-outlining-new-economic-policy-the-challenge-peace"
    },
    {
      year: "2008",
      title: "Financial Crisis",
      description: "Banks collapse under toxic debt. Instead of letting them fail, the Fed steps in with historic bailouts.",
      impact: "Quantitative Easing begins—unlimited money printing goes brrrrrr",
      color: "bg-purple-500",
      icon: "📉",
      source: "https://www.federalreserve.gov/monetarypolicy/files/FOMC20081216meeting.pdf"
    },
    {
      year: "2009",
      title: "Bitcoin Created",
      description: "Satoshi Nakamoto publishes the Bitcoin whitepaper in the shadow of the financial crisis—a decentralized digital currency.",
      impact: "The first fixed-supply, uncensorable alternative to fiat is born.",
      color: "bg-green-500",
      icon: "₿",
      source: "https://bitcoin.org/bitcoin.pdf"
    },
    {
      year: "2020",
      title: "COVID Money Printing",
      description: "Under cover of pandemic, the Fed prints 40% of all dollars ever created in just 18 months.",
      impact: "Worst inflation in 40 years - your groceries, rent, everything skyrockets",
      color: "bg-red-600",
      icon: "🖨️",
      source: "https://fred.stlouisfed.org/series/M2SL"
    }
  ];

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-orange-500">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-orange-400 mb-2">
          Timeline of Monetary Destruction
        </h3>
        <p className="text-gray-300 text-sm">
          Click on each event to see how your money was systematically devalued
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-red-500 to-green-500"></div>

        {/* Timeline Events */}
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              className={`relative pl-20 cursor-pointer transition-all duration-300 ${
                activeEvent === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveEvent(activeEvent === index ? null : index)}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-6 w-4 h-4 rounded-full ${event.color} border-2 border-gray-900 z-10`}></div>

              {/* Event Card */}
              <div className={`bg-gray-800 border-2 rounded-lg p-4 transition-all duration-300 transform ${
                activeEvent === index
                  ? `border-${event.color.split('-')[1]}-400 shadow-xl shadow-${event.color.split('-')[1]}-500/30 translate-y-[-2px] shadow-[0_8px_30px_rgba(0,0,0,0.12),0_0_20px_${event.color.split('-')[1] === 'yellow' ? 'rgba(234,179,8,0.2)' : event.color.split('-')[1] === 'orange' ? 'rgba(249,115,22,0.2)' : event.color.split('-')[1] === 'blue' ? 'rgba(59,130,246,0.2)' : event.color.split('-')[1] === 'red' ? 'rgba(239,68,68,0.2)' : event.color.split('-')[1] === 'purple' ? 'rgba(147,51,234,0.2)' : 'rgba(34,197,94,0.2)'}]`
                  : 'border-gray-700 hover:border-gray-600 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/40 hover:translate-y-[-6px] hover:scale-[1.02]'
              }`}>
                <div className="flex items-center space-x-3 mb-2">
                  <span className={`text-2xl ${event.icon === '₿' ? 'text-orange-400' : ''}`}>{event.icon}</span>
                  <div>
                    <div className="text-lg font-bold text-white">{event.year}</div>
                    <div className={`text-${event.color.split('-')[1]}-400 font-semibold`}>{event.title}</div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-3">{event.description}</p>

                {activeEvent === index && (
                  <div className="animate-fade-in space-y-3 mt-3">
                    <div className="bg-red-900/30 border border-red-500 rounded p-3">
                      <div className="text-red-400 font-semibold text-sm mb-1">💀 Impact on You:</div>
                      <div className="text-red-300 text-sm">{event.impact}</div>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-600 rounded p-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-xs">📄 Official Source:</span>
                        <a
                          href={event.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-xs underline transition-colors"
                        >
                          Verify This Event →
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {activeEvent !== index && (
                  <div className="text-gray-500 text-xs">Click to see the damage →</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-8 p-4 bg-red-900/20 border border-red-400 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-red-400">111 Years</div>
            <div className="text-xs text-red-200">Of Fed Control</div>
          </div>
          <div>
            <div className="text-xl font-bold text-orange-400">53 Years</div>
            <div className="text-xs text-orange-200">Since Gold Standard</div>
          </div>
          <div>
            <div className="text-xl font-bold text-yellow-400">111 Years</div>
            <div className="text-xs text-yellow-200">Of Money Printing</div>
          </div>
          <div>
            <div className="text-xl font-bold text-green-400">15 Years</div>
            <div className="text-xs text-green-200">Of Bitcoin Alternative</div>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="text-center">
          <p className="text-gray-300 text-sm">
            Notice how Bitcoin was created <span className="text-green-400 font-bold">right after</span> the 2008 crisis?
            <br />
            <span className="text-yellow-400">It's not a coincidence.</span>
          </p>
        </div>

        {/* Sources Footer */}
        <div className="p-3 bg-gray-800/30 border border-gray-700 rounded-lg">
          <div className="text-center">
            <div className="text-gray-400 text-xs mb-2">
              📚 <span className="font-medium">All events sourced from official government records</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <a href="https://www.federalreserve.gov" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                Federal Reserve
              </a>
              <a href="https://www.treasury.gov" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                U.S. Treasury
              </a>
              <a href="https://www.nixonlibrary.gov" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                Nixon Presidential Library
              </a>
              <a href="https://bitcoin.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                Bitcoin.org
              </a>
            </div>
            <div className="text-gray-500 text-xs mt-1">
              Click any timeline event to view official documentation
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MonetaryTimeline;
