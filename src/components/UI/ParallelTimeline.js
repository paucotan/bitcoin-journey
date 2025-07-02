import React, { useState } from 'react';

const ParallelTimeline = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  const [activeTrack, setActiveTrack] = useState(null);

  const monetaryEvents = [
    {
      year: "1913",
      title: "Federal Reserve Created",
      description: "The Federal Reserve Act creates a central banking system, ending the gold standard era. Government can now print money beyond gold reserves.",
      impact: "Dollar loses 96% of purchasing power from 1913 to today",
      color: "bg-yellow-500",
      icon: "🏦",
      category: "monetary"
    },
    {
      year: "1933",
      title: "Gold Confiscation",
      description: "FDR outlaws private gold ownership, forcing citizens to sell gold at $20.67/oz. Government immediately devalues dollar by 69%.",
      impact: "Gold revalued to $35/oz the next year — massive wealth transfer from citizens to government",
      color: "bg-orange-500",
      icon: "🚫",
      category: "monetary"
    },
    {
      year: "1944",
      title: "Bretton Woods Agreement",
      description: "Global monetary system established with USD as world reserve currency, backed by gold at $35/oz. Other currencies pegged to dollar.",
      impact: "Dollar becomes foundation of global trade, but money printing continues behind the scenes",
      color: "bg-blue-500",
      icon: "🌍",
      category: "monetary"
    },
    {
      year: "1971",
      title: "Nixon Shock",
      description: "Nixon ends gold convertibility. The last link between money and real value is severed.",
      impact: "Dollar becomes pure fiat currency - backed by nothing but promises",
      color: "bg-red-500",
      icon: "💥",
      category: "monetary"
    },
    {
      year: "2008",
      title: "Financial Crisis",
      description: "Banks collapse under toxic debt. Instead of letting them fail, the Fed steps in with historic bailouts.",
      impact: "Quantitative Easing begins—unlimited money printing goes brrrrrr",
      color: "bg-purple-500",
      icon: "📉",
      category: "monetary"
    },
    {
      year: "2020",
      title: "COVID Money Printing",
      description: "Under cover of pandemic, the Fed prints 40% of all dollars ever created in just 18 months.",
      impact: "Worst inflation in 40 years - your groceries, rent, everything skyrockets",
      color: "bg-red-600",
      icon: "🖨️",
      category: "monetary"
    },
    {
      year: "2024",
      title: "Debt Crisis Accelerates",
      description: "US national debt exceeds $34 trillion. Interest payments alone consume 20% of federal budget.",
      impact: "Money printing becomes the only solution - hyperinflation risk increases",
      color: "bg-red-700",
      icon: "📊",
      category: "monetary"
    }
  ];

  const bitcoinEvents = [
    {
      year: "1976",
      title: "Diffie-Hellman Key Exchange", 
      description: "Whitfield Diffie and Martin Hellman publish 'New Directions in Cryptography', introducing public-key cryptography.",
      impact: "Foundation for secure communication without shared secrets - essential for digital currencies",
      color: "bg-green-500",
      icon: "🔐",
      category: "crypto",
      keyPerson: "Diffie & Hellman"
    },
    {
      year: "1992",
      title: "Cypherpunk Mailing List",
      description: "Eric Hughes, Tim May, and John Gilmore start the cypherpunk movement focusing on privacy through cryptography.",
      impact: "Creates the ideological and technical community that will birth Bitcoin",
      color: "bg-indigo-500", 
      icon: "📧",
      category: "movement",
      keyPerson: "Hughes, May & Gilmore"
    },
    {
      year: "1997",
      title: "Hashcash",
      description: "Adam Back creates Hashcash, a proof-of-work system to combat email spam.",
      impact: "Direct precursor to Bitcoin's proof-of-work - solves the double-spending problem",
      color: "bg-pink-500",
      icon: "⚡",
      category: "proof-of-work", 
      keyPerson: "Adam Back"
    },
    {
      year: "2008",
      title: "Bitcoin Whitepaper",
      description: "Satoshi Nakamoto publishes 'Bitcoin: A Peer-to-Peer Electronic Cash System' combining all previous innovations.",
      impact: "Solves the Byzantine Generals Problem - creates the first truly decentralized digital currency",
      color: "bg-orange-400",
      icon: "₿",
      category: "bitcoin",
      keyPerson: "Satoshi Nakamoto"
    },
    {
      year: "2009",
      title: "Genesis Block Mined",
      description: "Satoshi mines the first Bitcoin block with the message: 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'.",
      impact: "Bitcoin network officially launches - first alternative to fiat money is born",
      color: "bg-orange-500",
      icon: "⛏️",
      category: "bitcoin",
      keyPerson: "Satoshi Nakamoto"
    },
    {
      year: "2010", 
      title: "Pizza Day",
      description: "Laszlo Hanyecz buys two pizzas for 10,000 BTC (~$25). The first real-world Bitcoin purchase.",
      impact: "Proves Bitcoin can function as money - establishes first price discovery mechanism",
      color: "bg-yellow-500",
      icon: "🍕",
      category: "bitcoin",
      keyPerson: "Laszlo Hanyecz"
    },
    {
      year: "2017",
      title: "Bitcoin Fork Wars",
      description: "Hard fork creates Bitcoin Cash as debate rages over Bitcoin's scaling approach. Bitcoin's protocol proves antifragile.",
      impact: "Demonstrates Bitcoin's resistance to change and commitment to decentralization over convenience",
      color: "bg-red-500", 
      icon: "⚔️",
      category: "bitcoin",
      keyPerson: "Bitcoin Community"
    },
    {
      year: "2021",
      title: "El Salvador Adoption",
      description: "El Salvador becomes first country to adopt Bitcoin as legal tender. Institutions begin major Bitcoin purchases.",
      impact: "Bitcoin transitions from internet money to sovereign money - institutional adoption accelerates", 
      color: "bg-green-600",
      icon: "🏛️",
      category: "bitcoin",
      keyPerson: "Nayib Bukele"
    }
  ];

  const handleEventClick = (index, track) => {
    if (activeEvent === index && activeTrack === track) {
      setActiveEvent(null);
      setActiveTrack(null);
    } else {
      setActiveEvent(index);
      setActiveTrack(track);
    }
  };

  // Create chronologically aligned timeline
  const createAlignedTimeline = () => {
    const allYears = [...new Set([...monetaryEvents.map(e => parseInt(e.year)), ...bitcoinEvents.map(e => parseInt(e.year))])].sort((a, b) => a - b);
    
    return allYears.map(year => {
      const monetary = monetaryEvents.find(e => parseInt(e.year) === year);
      const bitcoin = bitcoinEvents.find(e => parseInt(e.year) === year);
      return { year, monetary, bitcoin };
    });
  };

  const alignedTimeline = createAlignedTimeline();

  const getCategoryColor = (category) => {
    const colors = {
      'crypto': 'text-green-400',
      'digital-cash': 'text-blue-400',
      'movement': 'text-purple-400',
      'proof-of-work': 'text-pink-400',
      'bitcoin': 'text-orange-400',
      'monetary': 'text-red-400'
    };
    return colors[category] || 'text-gray-400';
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-orange-500">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-orange-400 mb-4">
          The Parallel Genesis of Bitcoin
        </h2>
        <p className="text-gray-300 text-lg mb-2">
          From gold standard to fake money: <span className="text-red-400 font-bold">The 1971 turning point that broke everything.</span>
        </p>
        <p className="text-gray-300 text-sm">
          While governments destroyed sound money, cypherpunks built the alternative.
        </p>
      </div>

      <div className="relative">
        <div className="text-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-bold text-red-400 mb-1">💀 Monetary Destruction</h3>
              <p className="text-gray-400 text-xs">How governments destroyed sound money</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-green-400 mb-1">🚀 Bitcoin Genesis</h3>
              <p className="text-gray-400 text-xs">How cypherpunks built the alternative</p>
            </div>
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-orange-500 to-green-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-8">
            {alignedTimeline.map((row, index) => (
              <div key={row.year} className="relative">
                {/* Year marker */}
                <div className="absolute left-1/2 w-12 h-12 bg-gray-900 border-4 border-orange-500 rounded-full flex items-center justify-center transform -translate-x-1/2 z-20">
                  <span className="text-white font-bold text-sm">{row.year}</span>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {/* Left side - Monetary */}
                  <div className="text-right pr-8">
                    {row.monetary ? (
                      <div
                        className={`cursor-pointer transition-all duration-300 ${
                          activeEvent === `monetary-${index}` ? 'scale-105' : 'hover:scale-102'
                        }`}
                        onClick={() => handleEventClick(`monetary-${index}`, 'monetary')}
                      >
                        <div className={`bg-gray-800 border-2 rounded-lg p-4 transition-all duration-300 ${
                          activeEvent === `monetary-${index}`
                            ? 'border-red-400 shadow-lg shadow-red-500/20'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}>
                          <div className="flex items-center justify-end space-x-3 mb-2">
                            <div className="text-right">
                              <div className="text-red-400 font-semibold">{row.monetary.title}</div>
                            </div>
                            <span className="text-2xl">{row.monetary.icon}</span>
                          </div>
                          
                          <p className="text-gray-300 text-sm mb-3">{row.monetary.description}</p>
                          
                          {activeEvent === `monetary-${index}` && (
                            <div className="animate-fade-in space-y-3 mt-3">
                              <div className="bg-red-900/30 border border-red-500 rounded p-3">
                                <div className="text-red-400 font-semibold text-sm mb-1">💀 Impact on You:</div>
                                <div className="text-red-300 text-sm">{row.monetary.impact}</div>
                              </div>
                            </div>
                          )}
                          
                          {activeEvent !== `monetary-${index}` && (
                            <div className="text-gray-500 text-xs">Click to see the damage →</div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="h-4"></div>
                    )}
                  </div>

                  {/* Right side - Bitcoin */}
                  <div className="text-left pl-8">
                    {row.bitcoin ? (
                      <div
                        className={`cursor-pointer transition-all duration-300 ${
                          activeEvent === `bitcoin-${index}` ? 'scale-105' : 'hover:scale-102'
                        }`}
                        onClick={() => handleEventClick(`bitcoin-${index}`, 'bitcoin')}
                      >
                        <div className={`bg-gray-800 border-2 rounded-lg p-4 transition-all duration-300 ${
                          activeEvent === `bitcoin-${index}`
                            ? 'border-green-400 shadow-lg shadow-green-500/20'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-2xl">{row.bitcoin.icon}</span>
                            <div>
                              <div className={`font-semibold ${getCategoryColor(row.bitcoin.category)}`}>{row.bitcoin.title}</div>
                              <div className="text-gray-400 text-xs">{row.bitcoin.keyPerson}</div>
                            </div>
                          </div>
                          
                          <p className="text-gray-300 text-sm mb-3">{row.bitcoin.description}</p>
                          
                          {activeEvent === `bitcoin-${index}` && (
                            <div className="animate-fade-in space-y-3 mt-3">
                              <div className="bg-green-900/30 border border-green-500 rounded p-3">
                                <div className="text-green-400 font-semibold text-sm mb-1">🚀 Bitcoin Connection:</div>
                                <div className="text-green-300 text-sm">{row.bitcoin.impact}</div>
                              </div>
                            </div>
                          )}
                          
                          {activeEvent !== `bitcoin-${index}` && (
                            <div className="text-gray-500 text-xs">Click to see Bitcoin connection →</div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="h-4"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-orange-500 to-green-500"></div>
          
          <div className="space-y-6">
            {alignedTimeline.map((row, index) => (
              <div key={row.year} className="relative">
                {/* Year marker for mobile */}
                <div className="absolute left-6 w-8 h-8 bg-gray-900 border-2 border-orange-500 rounded-full flex items-center justify-center z-20">
                  <span className="text-white font-bold text-xs">{row.year.toString().slice(-2)}</span>
                </div>

                <div className="pl-16 space-y-4">
                  {/* Monetary event */}
                  {row.monetary && (
                    <div
                      className={`cursor-pointer transition-all duration-300 ${
                        activeEvent === `monetary-${index}` ? 'scale-105' : 'hover:scale-102'
                      }`}
                      onClick={() => handleEventClick(`monetary-${index}`, 'monetary')}
                    >
                      <div className={`bg-gray-800 border-2 rounded-lg p-3 transition-all duration-300 ${
                        activeEvent === `monetary-${index}`
                          ? 'border-red-400 shadow-lg shadow-red-500/20'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-xl">{row.monetary.icon}</span>
                          <div>
                            <div className="text-red-400 font-semibold text-sm">{row.monetary.title}</div>
                            <div className="text-gray-400 text-xs">💀 Monetary Destruction</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-xs mb-2">{row.monetary.description}</p>
                        
                        {activeEvent === `monetary-${index}` && (
                          <div className="animate-fade-in space-y-2 mt-2">
                            <div className="bg-red-900/30 border border-red-500 rounded p-2">
                              <div className="text-red-400 font-semibold text-xs mb-1">💀 Impact:</div>
                              <div className="text-red-300 text-xs">{row.monetary.impact}</div>
                            </div>
                          </div>
                        )}
                        
                        {activeEvent !== `monetary-${index}` && (
                          <div className="text-gray-500 text-xs">Tap to see impact →</div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Bitcoin event */}
                  {row.bitcoin && (
                    <div
                      className={`cursor-pointer transition-all duration-300 ${
                        activeEvent === `bitcoin-${index}` ? 'scale-105' : 'hover:scale-102'
                      } ml-4`}
                      onClick={() => handleEventClick(`bitcoin-${index}`, 'bitcoin')}
                    >
                      <div className={`bg-gray-800 border-2 rounded-lg p-3 transition-all duration-300 ${
                        activeEvent === `bitcoin-${index}`
                          ? 'border-green-400 shadow-lg shadow-green-500/20'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-xl">{row.bitcoin.icon}</span>
                          <div>
                            <div className={`font-semibold text-sm ${getCategoryColor(row.bitcoin.category)}`}>{row.bitcoin.title}</div>
                            <div className="text-gray-400 text-xs">🚀 {row.bitcoin.keyPerson}</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 text-xs mb-2">{row.bitcoin.description}</p>
                        
                        {activeEvent === `bitcoin-${index}` && (
                          <div className="animate-fade-in space-y-2 mt-2">
                            <div className="bg-green-900/30 border border-green-500 rounded p-2">
                              <div className="text-green-400 font-semibold text-xs mb-1">🚀 Connection:</div>
                              <div className="text-green-300 text-xs">{row.bitcoin.impact}</div>
                            </div>
                          </div>
                        )}
                        
                        {activeEvent !== `bitcoin-${index}` && (
                          <div className="text-gray-500 text-xs">Tap to see connection →</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Convergence Point */}
      <div className="mt-12 p-6 bg-gradient-to-r from-red-900/20 via-gray-800/50 to-green-900/20 border-2 border-orange-500 rounded-xl">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-orange-400 mb-2">⚡ The Perfect Storm: 2008-2009</h3>
          <p className="text-gray-300">
            As the financial system collapsed from decades of monetary abuse, 
            <span className="text-green-400 font-bold"> the cypherpunk solution was ready</span>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-900/30 border border-red-400 rounded-lg p-4">
            <div className="text-red-400 font-bold mb-2">💥 The Crisis</div>
            <div className="text-red-200 text-sm">
              Banks collapse, bailouts begin, money printing accelerates. 
              The fiat system shows its true nature.
            </div>
          </div>
          
          <div className="bg-green-900/30 border border-green-400 rounded-lg p-4">
            <div className="text-green-400 font-bold mb-2">₿ The Solution</div>
            <div className="text-green-200 text-sm">
              30+ years of cryptographic innovation culminates in Bitcoin - 
              a system immune to monetary manipulation.
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 p-4 bg-gray-800/50 border border-gray-600 rounded-lg">
        <div className="text-center mb-3">
          <div className="text-gray-300 font-semibold text-sm">🔑 Key Concepts</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-400">Cryptography</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-blue-400">Digital Cash</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <span className="text-pink-400">Proof of Work</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-purple-400">Cypherpunk Movement</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <span className="text-orange-400">Bitcoin</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-red-400">Monetary Destruction</span>
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

export default ParallelTimeline;