import React, { useState } from 'react';

const BitcoinVsAltcoins = () => {
  const [flippedCards, setFlippedCards] = useState({
    energy: false,
    security: false,
    launch: false,
    reality: false
  });

  const toggleCard = (cardKey) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }));
  };

  const comparisonCards = [
    {
      key: 'power',
      step: '1',
      frontTitle: 'A Living Digital Organism',
      frontEmoji: '🌳',
      frontDescription: 'How can software be alive?',
      frontTheme: 'bg-orange-600/30 border-orange-400',
      backTitle: 'Digital Life That Breathes and Grows',
      backEmoji: '₿',
      backContent: () => (
        <>
          <span className="text-orange-400 font-semibold">Bitcoin</span> is a living digital organism that performs more calculations every second than every human who ever lived could do in their entire lifetimes. Like any living thing, it breathes energy, grows stronger over time, and evolves to survive attacks. It's digital life anchored to physical reality.
        </>
      ),
      backTheme: 'bg-orange-500/20 border-orange-400'
    },
    {
      key: 'immutable',
      step: '2', 
      frontTitle: 'Bitcoin\'s Genetic Code',
      frontEmoji: '🧬',
      frontDescription: 'Can digital DNA be modified?',
      frontTheme: 'bg-gray-600/30 border-gray-400',
      backTitle: 'Immutable DNA vs Genetic Engineering',
      backEmoji: '₿',
      backContent: () => (
        <>
          Like DNA, <span className="text-orange-400 font-semibold">Bitcoin</span>'s genetic code resists mutation. This living organism requires overwhelming consensus to evolve. Meanwhile, Ethereum gets genetically modified in labs: reversing transactions, changing consensus mechanisms, adjusting monetary policy. <span className="text-orange-400 font-semibold">Bitcoin</span> evolved naturally and maintains its original DNA.
        </>
      ),
      backTheme: 'bg-orange-500/20 border-orange-400'
    },
    {
      key: 'launch',
      step: '3',
      frontTitle: 'Natural Birth vs Lab Creation',
      frontEmoji: '🌱',
      frontDescription: 'How do digital life forms emerge?',
      frontTheme: 'bg-blue-600/30 border-blue-400',
      backTitle: 'Wild Evolution vs Artificial Creation',
      backEmoji: '₿',
      backContent: () => (
        <>
          <span className="text-orange-400 font-semibold">Bitcoin</span> was born to escape fiat thinking entirely - no founders, no company, no central authority. Satoshi released it into the wild and disappeared, letting it evolve organically. Other crypto projects copy fiat structures: VC funding, corporate foundations, changeable rules. They're digital fiat seeking regulatory approval. <span className="text-orange-400 font-semibold">Bitcoin</span> chose mathematical sovereignty.
        </>
      ),
      backTheme: 'bg-orange-500/20 border-orange-400'
    },
    {
      key: 'physics',
      step: '4',
      frontTitle: 'Digital Life Rooted in Reality',
      frontEmoji: '⚡',
      frontDescription: 'How does digital life connect to the physical world?',
      frontTheme: 'bg-purple-600/30 border-purple-400',
      backTitle: 'The Only Life Form Bridging Both Worlds',
      backEmoji: '₿',
      backContent: () => (
        <>
          <span className="text-orange-400 font-semibold">Bitcoin</span> is the only digital life form rooted in physical reality. It consumes real energy to survive, like any living organism. Each <span className="text-orange-400 font-semibold">Bitcoin</span> represents actual thermodynamic work. Other crypto projects exist only in simulated environments, disconnected from natural laws. <span className="text-orange-400 font-semibold">Bitcoin</span> is digital life that obeys physics.
        </>
      ),
      backTheme: 'bg-orange-500/20 border-orange-400'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl">₿</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What Makes Bitcoin Special?
            </h2>
            <span className="text-5xl">⚡</span>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Understanding why Bitcoin is different from everything else.
          </p>
          <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400/30 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-white font-medium">
              Bitcoin is backed by thermodynamics. Everything else is backed by promises.
            </p>
          </div>
        </div>

        {/* Guided Tour Steps */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">👆</span>
            <p className="text-lg text-orange-400 font-semibold">
              Click each card to learn the truth
            </p>
            <span className="text-2xl">👆</span>
          </div>
          <div className="flex justify-center gap-4">
            {comparisonCards.map((card, index) => (
              <div
                key={card.key}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all ${
                  flippedCards[card.key] 
                    ? 'bg-orange-500 border-orange-400 text-white' 
                    : 'bg-gray-800 border-gray-600 text-gray-400'
                }`}
              >
                {card.step}
              </div>
            ))}
          </div>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {comparisonCards.map((card) => (
            <div key={card.key} className="relative h-64">
              <div 
                className={`w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  flippedCards[card.key] ? 'rotate-y-180' : ''
                }`}
                onClick={() => toggleCard(card.key)}
              >
                {/* Front of Card */}
                <div className={`absolute inset-0 ${card.frontTheme} rounded-xl p-6 backface-hidden border-2 hover:scale-105 transition-transform`}>
                  <div className="flex flex-col items-center text-center h-full justify-between">
                    <div className="text-6xl mb-4">{card.frontEmoji}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {card.frontTitle}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {card.frontDescription}
                      </p>
                    </div>
                    <button className="text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors">
                      Discover Why →
                    </button>
                  </div>
                </div>

                {/* Back of Card */}
                <div className={`absolute inset-0 ${card.backTheme} rounded-xl p-6 backface-hidden rotate-y-180 border-2`}>
                  <div className="flex flex-col h-full">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2 text-orange-400">{card.backEmoji}</div>
                      <h3 className="text-lg font-bold text-orange-400 mb-3">
                        {card.backTitle}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {typeof card.backContent === 'function' ? card.backContent() : card.backContent}
                      </p>
                    </div>
                    <button className="text-orange-400 hover:text-orange-300 text-sm font-semibold mt-4 transition-colors">
                      ← Back to Overview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border-2 border-orange-500 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">₿</span>
              <h3 className="text-2xl font-bold text-orange-400">
                Now You Understand
              </h3>
              <span className="text-4xl">₿</span>
            </div>
            <p className="text-white text-lg mb-6 leading-relaxed">
              <span className="text-orange-400 font-semibold">Bitcoin</span> isn't "crypto." It's the first living digital organism - 
              a new form of life that evolved to survive in both digital and physical worlds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg flex items-center gap-2">
                <span className="text-xl">₿</span>
                Choose Digital Life
                <span className="text-xl">₿</span>
              </button>
              <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg">
                Learn More About <span className="font-bold">Bitcoin</span>
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Based on Jack Mallers' "There Is No Second Best" talk
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default BitcoinVsAltcoins;