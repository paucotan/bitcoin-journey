import React, { useState, useEffect } from 'react';

const BitcoinMoralCode = () => {
  const [activeCodeIndex, setActiveCodeIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('moral-code-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const moralCodes = [
    {
      principle: "You shall not steal",
      description: "No confiscation of wealth through inflation",
      icon: "🛡️",
      details: "Bitcoin's fixed supply means no government can print money to fund wars or bailouts at your expense.",
      contrast: "Fiat: $8 trillion printed in 2020 alone"
    },
    {
      principle: "You shall not inflate",
      description: "21 million Bitcoin. Forever.",
      icon: "📈",
      details: "Mathematical scarcity replaces political promises. No central banker can create Bitcoin out of thin air.",
      contrast: "Fiat: Money supply increased 40% since 2020"
    },
    {
      principle: "You shall not censor",
      description: "Permissionless transactions for everyone",
      icon: "🌐",
      details: "No government can freeze your Bitcoin or block your transactions. True financial sovereignty.",
      contrast: "Fiat: Bank accounts frozen, payments blocked"
    },
    {
      principle: "You shall not confiscate",
      description: "Property rights protected by cryptography",
      icon: "🔐",
      details: "Your private keys, your Bitcoin. No amount of violence can break mathematical security.",
      contrast: "Fiat: Government seizure, bail-ins, capital controls"
    },
    {
      principle: "You shall not counterfeit",
      description: "Every Bitcoin is cryptographically verified",
      icon: "✅",
      details: "Impossible to create fake Bitcoin. The network validates every transaction through proof of work.",
      contrast: "Fiat: Unlimited counterfeiting by central banks"
    }
  ];

  return (
    <div id="moral-code-section" className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Bitcoin's Moral Code
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Moral code before computer code
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <blockquote className="text-2xl text-orange-400 italic max-w-4xl mx-auto">
            "Bitcoin is more powerful than war, it's more powerful than government because of math."
            <footer className="text-lg text-gray-400 mt-2 not-italic">- Jack Mallers</footer>
          </blockquote>
        </div>

        {/* Interactive Moral Code Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Principle List */}
          <div className="space-y-4">
            {moralCodes.map((code, index) => (
              <div
                key={index}
                onClick={() => setActiveCodeIndex(index)}
                className={`p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                  activeCodeIndex === index
                    ? 'border-orange-500 bg-orange-500/10 transform scale-105'
                    : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{code.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {code.principle}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {code.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Active Principle Details */}
          <div className="bg-black rounded-lg p-8 border border-gray-700">
            <div className="text-center mb-6">
              <span className="text-6xl mb-4 block">
                {moralCodes[activeCodeIndex].icon}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                {moralCodes[activeCodeIndex].principle}
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Bitcoin Way:</h4>
                <p className="text-gray-300">
                  {moralCodes[activeCodeIndex].details}
                </p>
              </div>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <h4 className="text-red-400 font-semibold mb-2">Fiat Way:</h4>
                <p className="text-gray-300">
                  {moralCodes[activeCodeIndex].contrast}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Peaceful Revolution Message */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              A Peaceful Revolution
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              You don't need protests. You don't need war. You don't need permission from politicians. 
              You can achieve change peacefully through math by choosing Bitcoin.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-2">🧮</div>
                <h4 className="text-white font-semibold">Math, Not Violence</h4>
                <p className="text-gray-400 text-sm">Cryptography secures your wealth</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⚖️</div>
                <h4 className="text-white font-semibold">Equality for All</h4>
                <p className="text-gray-400 text-sm">Same rules, same opportunities</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🕊️</div>
                <h4 className="text-white font-semibold">Peaceful Transition</h4>
                <p className="text-gray-400 text-sm">Opt out, don't fight</p>
              </div>
            </div>
          </div>
        </div>

        {/* Generation Call to Action */}
        <div className="text-center">
          <div className="bg-black border border-orange-500/30 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">
              Your Generation's Fighting Chance
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              This is not just an investment. This is a revolution. This is your chance to choose 
              ethical money and reclaim your financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg">
                Choose Ethical Money
              </button>
              <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg">
                Choose Freedom
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Not having to waste human life to defend monetized wealth is worth every watt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinMoralCode;