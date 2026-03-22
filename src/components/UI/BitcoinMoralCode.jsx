import React, { useState, useEffect } from 'react';

const BitcoinMoralCode = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('moral-code-section');
    if (element) {
      observer.observe(element);
    }

    // Fallback: Show cards after 2 seconds if intersection observer hasn't triggered
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [isVisible]);

  const comparisons = [
    {
      title: "Inflation and Purchasing Power",
      fiatProblem: "Governments print money, stealing your purchasing power silently",
      fiatIcon: "💸",
      fiatExample: "$8 trillion printed in 2020 alone - your savings lost 15% value",
      bitcoinSolution: "Fixed supply of 21 million, divisible to 8 decimal places - everyone can participate while your value stays protected",
      bitcoinIcon: "🛡️",
      bitcoinExample: "Each Bitcoin = 100,000,000 satoshis. Plenty for global adoption while maintaining scarcity"
    },
    {
      title: "Financial Censorship",
      fiatProblem: "Banks and governments can freeze accounts and block transactions",
      fiatIcon: "🏛️",
      fiatExample: "Canadian truckers' accounts frozen, WikiLeaks payment blockades",
      bitcoinSolution: "Permissionless money - no one can stop your transactions",
      bitcoinIcon: "🌐",
      bitcoinExample: "24/7 global transactions with no gatekeepers or permissions needed"
    },
    {
      title: "Confiscation Risk",
      fiatProblem: "Governments can seize assets through laws, taxes, or executive orders",
      fiatIcon: "⚖️",
      fiatExample: "Bank bail-ins, gold confiscation, emergency asset seizures",
      bitcoinSolution: "Self-custody protected by cryptography - truly own your wealth",
      bitcoinIcon: "🔐",
      bitcoinExample: "Your private keys = your Bitcoin. Mathematically impossible to seize"
    },
    {
      title: "Exclusion & Barriers",
      fiatProblem: "2 billion people excluded from banking, high fees for remittances",
      fiatIcon: "🚫",
      fiatExample: "10-15% fees to send money home, weeks for international transfers",
      bitcoinSolution: "Anyone with internet access can participate in the global economy",
      bitcoinIcon: "🌍",
      bitcoinExample: "Send Bitcoin anywhere in minutes for pennies, no bank account needed"
    },
    {
      title: "Monetary Transparency",
      fiatProblem: "Opaque monetary policy, hidden bailouts, false economic data",
      fiatIcon: <img src="/assets/annuit-coeptis.jpg" alt="Manipulation & Lies" className="w-8 h-8 rounded-full bg-gray-800 p-0.5" style={{objectFit: 'cover'}} />,
      fiatExample: "Secret Federal Reserve meetings, undisclosed bank bailouts, inflation lies",
      bitcoinSolution: "Transparent, verifiable, mathematical monetary policy",
      bitcoinIcon: "✅",
      bitcoinExample: "Every transaction public, supply schedule coded and immutable"
    },
    {
      title: "War Finance and Sound Money",
      fiatProblem: "Governments print money to fund wars without public consent or taxation",
      fiatIcon: "⚔️",
      fiatExample: "WWI, WWII, Vietnam, Iraq - all funded by monetary expansion, not votes",
      bitcoinSolution: "Wars become financially impossible without voluntary funding",
      bitcoinIcon: "🕊️",
      bitcoinExample: "No central authority can print Bitcoin to fund conflicts - requires real economic sacrifice"
    }
  ];

  return (
    <div id="moral-code-section" className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Two Systems, <span className="text-orange-400">Different Rules</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Every monetary system has rules. Here is what the rules of each system actually are.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="space-y-8">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Comparison Title */}
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {comparison.title}
                </h3>
                <div className="w-16 h-0.5 bg-orange-500 mx-auto"></div>
              </div>

              {/* Side-by-Side Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {/* Fiat Problem Card */}
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-xl p-6 hover:border-red-400/50 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{comparison.fiatIcon}</div>
                    <div>
                      <h4 className="text-red-400 font-bold text-lg">How fiat money works</h4>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-white text-base leading-relaxed">
                      {comparison.fiatProblem}
                    </p>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                      <p className="text-red-200 text-sm">
                        <span className="font-semibold">Example:</span> {comparison.fiatExample}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bitcoin Solution Card */}
                <div className="bg-gradient-to-br from-green-900/20 to-orange-900/20 border border-orange-500/30 rounded-xl p-6 hover:border-orange-400/50 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{comparison.bitcoinIcon}</div>
                    <div>
                      <h4 className="text-orange-400 font-bold text-lg">How Bitcoin works</h4>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-white text-base leading-relaxed">
                      {comparison.bitcoinSolution}
                    </p>
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                      <p className="text-orange-200 text-sm">
                        <span className="font-semibold">How:</span> {comparison.bitcoinExample}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                <span className="text-orange-500">₿</span> Something New
              </h3>
            </div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              For the first time in history, anyone with internet access can hold money that no government can print more of. That is new. That is worth understanding.
            </p>
            <p className="text-base md:text-lg text-orange-400 italic font-medium">
              Bitcoin is a peaceful revolution through mathematics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinMoralCode;
