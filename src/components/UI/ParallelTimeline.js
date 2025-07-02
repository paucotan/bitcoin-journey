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
    }
  ];

  const cypherpunkEvents = [
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
      year: "1978",
      title: "RSA Algorithm",
      description: "Rivest, Shamir, and Adleman create the first practical public-key cryptosystem.",
      impact: "Enables secure digital signatures and encrypted communications at scale",
      color: "bg-green-600",
      icon: "🔑",
      category: "crypto",
      keyPerson: "Rivest, Shamir & Adleman"
    },
    {
      year: "1985",
      title: "Elliptic Curve Cryptography",
      description: "Neal Koblitz and Victor Miller independently propose using elliptic curves for cryptography.",
      impact: "More efficient cryptography - Bitcoin uses ECDSA for digital signatures",
      color: "bg-teal-500",
      icon: "📈",
      category: "crypto",
      keyPerson: "Koblitz & Miller"
    },
    {
      year: "1989",
      title: "DigiCash",
      description: "David Chaum creates the first digital cash system with cryptographic privacy protection.",
      impact: "First attempt at anonymous digital money - proves digital cash is possible",
      color: "bg-blue-600",
      icon: "💰",
      category: "digital-cash",
      keyPerson: "David Chaum"
    },
    {
      year: "1991",
      title: "PGP Encryption",
      description: "Phil Zimmermann releases Pretty Good Privacy, making strong encryption accessible to everyone.",
      impact: "Democratizes cryptography - 'Crypto is for the people, not just governments'",
      color: "bg-purple-600",
      icon: "🛡️",
      category: "crypto",
      keyPerson: "Phil Zimmermann"
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
      year: "1998",
      title: "Bit Gold Concept",
      description: "Nick Szabo proposes Bit Gold, a decentralized digital currency using proof-of-work.",
      impact: "Bitcoin's direct conceptual predecessor - includes most key ideas",
      color: "bg-yellow-600",
      icon: "🥇",
      category: "digital-cash",
      keyPerson: "Nick Szabo"
    },
    {
      year: "2004",
      title: "RPOW",
      description: "Hal Finney creates Reusable Proofs of Work, the first working proof-of-work currency.",
      impact: "First implementation of transferable proof-of-work - Hal later receives first Bitcoin transaction",
      color: "bg-orange-600",
      icon: "🔄",
      category: "proof-of-work",
      keyPerson: "Hal Finney"
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

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Monetary Destruction Timeline */}
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-red-400 mb-2">💀 Monetary Destruction</h3>
            <p className="text-gray-400 text-sm">How governments systematically destroyed sound money</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500 via-red-500 to-purple-600"></div>
            
            <div className="space-y-6">
              {monetaryEvents.map((event, index) => (
                <div
                  key={`monetary-${index}`}
                  className={`relative pl-20 cursor-pointer transition-all duration-300 ${
                    activeEvent === index && activeTrack === 'monetary' ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => handleEventClick(index, 'monetary')}
                >
                  <div className={`absolute left-6 w-4 h-4 rounded-full ${event.color} border-2 border-gray-900 z-10`}></div>
                  
                  <div className={`bg-gray-800 border-2 rounded-lg p-4 transition-all duration-300 ${
                    activeEvent === index && activeTrack === 'monetary'
                      ? 'border-red-400 shadow-lg shadow-red-500/20'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{event.icon}</span>
                      <div>
                        <div className="text-lg font-bold text-white">{event.year}</div>
                        <div className="text-red-400 font-semibold">{event.title}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-3">{event.description}</p>
                    
                    {activeEvent === index && activeTrack === 'monetary' && (
                      <div className="animate-fade-in space-y-3 mt-3">
                        <div className="bg-red-900/30 border border-red-500 rounded p-3">
                          <div className="text-red-400 font-semibold text-sm mb-1">💀 Impact on You:</div>
                          <div className="text-red-300 text-sm">{event.impact}</div>
                        </div>
                      </div>
                    )}
                    
                    {!(activeEvent === index && activeTrack === 'monetary') && (
                      <div className="text-gray-500 text-xs">Click to see the damage →</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cypherpunk Innovation Timeline */}
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-green-400 mb-2">🚀 Cryptographic Innovation</h3>
            <p className="text-gray-400 text-sm">How cypherpunks built Bitcoin on the shoulders of giants</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-orange-400"></div>
            
            <div className="space-y-6">
              {cypherpunkEvents.map((event, index) => (
                <div
                  key={`crypto-${index}`}
                  className={`relative pl-20 cursor-pointer transition-all duration-300 ${
                    activeEvent === index && activeTrack === 'crypto' ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => handleEventClick(index, 'crypto')}
                >
                  <div className={`absolute left-6 w-4 h-4 rounded-full ${event.color} border-2 border-gray-900 z-10`}></div>
                  
                  <div className={`bg-gray-800 border-2 rounded-lg p-4 transition-all duration-300 ${
                    activeEvent === index && activeTrack === 'crypto'
                      ? 'border-green-400 shadow-lg shadow-green-500/20'
                      : 'border-gray-700 hover:border-gray-600'
                  }`}>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{event.icon}</span>
                      <div>
                        <div className="text-lg font-bold text-white">{event.year}</div>
                        <div className={`font-semibold ${getCategoryColor(event.category)}`}>{event.title}</div>
                        <div className="text-gray-400 text-xs">{event.keyPerson}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-3">{event.description}</p>
                    
                    {activeEvent === index && activeTrack === 'crypto' && (
                      <div className="animate-fade-in space-y-3 mt-3">
                        <div className="bg-green-900/30 border border-green-500 rounded p-3">
                          <div className="text-green-400 font-semibold text-sm mb-1">🚀 Bitcoin Connection:</div>
                          <div className="text-green-300 text-sm">{event.impact}</div>
                        </div>
                      </div>
                    )}
                    
                    {!(activeEvent === index && activeTrack === 'crypto') && (
                      <div className="text-gray-500 text-xs">Click to see Bitcoin connection →</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
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