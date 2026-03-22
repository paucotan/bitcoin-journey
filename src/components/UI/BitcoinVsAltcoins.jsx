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
      frontTitle: 'A Network Built to Last',
      frontEmoji: '🏗️',
      frontDescription: 'How resilient is Bitcoin\'s network?',
      frontTheme: 'bg-orange-600/30 border-orange-400',
      backTitle: 'Resilience Through Scale',
      backEmoji: '₿',
      backContent: () => (
        <>
          <span className="text-orange-400 font-semibold">Bitcoin</span>'s network performs hundreds of quintillions of calculations per second — a scale of distributed computing that makes altering its transaction history computationally infeasible. The network has no single point of failure and no off switch.
        </>
      ),
      backTheme: 'bg-orange-500/20 border-orange-400'
    },
    {
      key: 'immutable',
      step: '2',
      frontTitle: 'Rules That Require Consensus to Change',
      frontEmoji: '📜',
      frontDescription: 'Can Bitcoin\'s rules be changed?',
      frontTheme: 'bg-gray-600/30 border-gray-400',
      backTitle: 'Consensus-Based, Not Authority-Based',
      backEmoji: '₿',
      backContent: () => (
        <>
          <span className="text-orange-400 font-semibold">Bitcoin</span>'s rules cannot be changed by any individual, company, or government. Changes require overwhelming agreement from the entire network — a design closer to a constitutional amendment than a corporate policy update. The supply cap of 21 million has never changed.
        </>
      ),
      backTheme: 'bg-orange-500/20 border-orange-400'
    },
    {
      key: 'launch',
      step: '3',
      frontTitle: 'No CEO, No Company, No Control',
      frontEmoji: '🗽',
      frontDescription: 'Who controls Bitcoin?',
      frontTheme: 'bg-blue-600/30 border-blue-400',
      backTitle: 'Leaderless by Design',
      backEmoji: '₿',
      backContent: () => (
        <>
          <span className="text-orange-400 font-semibold">Bitcoin</span> has no CEO who can be pressured, no company that can be shut down, no headquarters to raid. Its creator disappeared in 2011, leaving it to run itself. It is the only monetary network in history that has operated without a leader or controlling institution.
        </>
      ),
      backTheme: 'bg-orange-500/20 border-orange-400'
    },
    {
      key: 'physics',
      step: '4',
      frontTitle: 'A Real Cost, Written Into the Protocol',
      frontEmoji: '⚡',
      frontDescription: 'What gives Bitcoin its properties?',
      frontTheme: 'bg-purple-600/30 border-purple-400',
      backTitle: 'Production Cost as a Design Property',
      backEmoji: '₿',
      backContent: () => (
        <>
          Every <span className="text-orange-400 font-semibold">Bitcoin</span> in existence was created through a measurable expenditure of real energy — a property written into the protocol that cannot be changed by policy decision. Like gold, its supply cannot be expanded without real-world cost.
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
              Bitcoin is the first money whose rules are enforced by physics, not by institutions.
            </p>
          </div>
        </div>

        {/* Guided Tour Steps */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">👇</span>
            <p className="text-lg text-orange-400 font-semibold">
              Click each card to explore
            </p>
            <span className="text-2xl">👇</span>
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
            <div key={card.key} className="relative h-80 md:h-72">
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
                    <div className="flex-1 overflow-hidden">
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
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

        {/* Quiet pointer to next room */}
        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">
            Want to go deeper on how Bitcoin works?{' '}
            <a href="/guides/what-is-bitcoin" className="text-orange-400 hover:text-orange-300 transition-colors">
              Read the full guide →
            </a>
          </p>
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
