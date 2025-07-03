import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MoneySupplyDollarChart from '../components/UI/MoneySupplyDollarChart';
import ParallelTimeline from '../components/UI/ParallelTimeline';
import SocietalDeclineCharts from '../components/UI/SocietalDeclineCharts';
import BitcoinMoralCode from '../components/UI/BitcoinMoralCode';
import BitcoinVsAltcoins from '../components/UI/BitcoinVsAltcoins';
import ProgressSidebar from '../components/UI/ProgressSidebar';
import DollarValueCalculator from '../components/UI/DollarValueCalculator';
import BookCarousel from '../components/UI/BookCarousel';

const AnimatedCounter = ({ start, end, duration, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const Landing = () => {
  const [showShock, setShowShock] = useState(false);
  const [flippedCards, setFlippedCards] = useState({
    pure: false,
    watered: false,
    hero1: false,
    hero2: false,
    hero3: false
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowShock(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx>{`
        .flip-card-container {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.7s ease-in-out;
          will-change: transform;
        }
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
        .flip-card-face {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          transform-style: preserve-3d;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black">
      <ProgressSidebar />
      {/* Generational Wealth Theft Hero */}
      <div id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">

          {/* Compelling Hook */}
          <div className="mb-12">
            <div className="text-orange-400 text-lg font-medium mb-6 tracking-wide">
              THE 1971 DECISION THAT BROKE YOUR FUTURE
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              They Stole Your<br/>
              <span className="text-red-400">Generation's Future</span>
            </h1>

            {showShock && (
              <div className="animate-fade-in space-y-6">
                <p className="text-2xl md:text-3xl text-white mb-8 font-medium max-w-4xl mx-auto leading-relaxed">
                  Your parents could buy a house for <span className="text-green-400 font-bold">$25,000</span>.<br/>
                  The same house costs <span className="text-red-400 font-bold">$400,000</span> today.<br/>
                  <span className="text-yellow-400 font-bold">This isn't inflation—it's systematic wealth transfer.</span>
                </p>

                {/* Shocking Stats Grid - Now with Flip Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                  {/* Card 1: The Big Print Crisis */}
                  <div className="relative h-32 group flip-card-container">
                    <div
                      className={`flip-card-inner cursor-pointer ${flippedCards.hero1 ? 'flipped' : ''}`}
                      onClick={() => setFlippedCards(prev => ({ ...prev, hero1: !prev.hero1 }))}
                    >
                      {/* Front of card */}
                      <div
                        className="flip-card-face bg-red-900/30 border border-red-500 rounded-lg p-4 text-center transition-all duration-300 group-hover:bg-red-900/40 group-hover:border-red-400 group-hover:shadow-lg group-hover:shadow-red-500/20"
                      >
                        <div className="text-3xl font-bold text-red-400 mb-1">
                          <AnimatedCounter start={0} end={87} duration={2000} suffix="%" />
                        </div>
                        <div className="text-sm text-red-200">Dollar Value Lost Since 1971</div>
                        {/* Flip indicator */}
                        <div className="absolute top-2 right-2 text-red-400/60 text-xs group-hover:text-red-300 transition-colors">⟲</div>
                      </div>

                      {/* Back of card */}
                      <div
                        className="flip-card-face flip-card-back bg-red-900/60 border border-red-400 rounded-lg p-2 text-center transition-all duration-300 flex flex-col justify-center group-hover:bg-red-900/70 group-hover:border-red-300 group-hover:shadow-lg group-hover:shadow-red-500/20"
                      >
                        <div className="text-base mb-1">🍺➡️💧</div>
                        <div className="text-xs font-bold text-red-300 mb-1">The Addiction</div>
                        <div className="text-red-100 text-xs leading-tight px-1">
                          Money printing is like alcoholism: good at first, progressively worse, until the pain forces change.
                        </div>
                        <div className="text-red-200 text-xs font-medium">The Big Print is coming.</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Mathematical Certainty */}
                  <div className="relative h-32 group flip-card-container">
                    <div
                      className={`flip-card-inner cursor-pointer ${
                        flippedCards.hero2 ? 'flipped' : ''
                      }`}
                      onClick={() => setFlippedCards(prev => ({ ...prev, hero2: !prev.hero2 }))}
                    >
                      {/* Front of card */}
                      <div
                        className="flip-card-face bg-orange-900/30 border border-orange-500 rounded-lg p-4 text-center transition-all duration-300 group-hover:bg-orange-900/40 group-hover:border-orange-400 group-hover:shadow-lg group-hover:shadow-orange-500/20"
                      >
                        <div className="text-3xl font-bold text-orange-400 mb-1">
                          <AnimatedCounter start={0} end={16} duration={2000} suffix="x" />
                        </div>
                        <div className="text-sm text-orange-200">House Price Increase</div>
                        <div className="text-sm text-orange-200">Since 1971</div>
                        {/* Flip indicator */}
                        <div className="absolute top-2 right-2 text-orange-400/60 text-xs group-hover:text-orange-300 transition-colors">⟲</div>
                      </div>

                      {/* Back of card */}
                      <div
                        className="flip-card-face flip-card-back bg-orange-900/60 border border-orange-400 rounded-lg p-2 text-center transition-all duration-300 flex flex-col justify-center group-hover:bg-orange-900/70 group-hover:border-orange-300 group-hover:shadow-lg group-hover:shadow-orange-500/20"
                      >
                        <div className="text-lg mb-1">💸📈</div>
                        <div className="text-xs font-bold text-orange-300 mb-1">Money Printing Effect</div>
                        <div className="text-orange-100 text-xs leading-tight px-1">
                          From $25,000 in 1971 to $420,000 today. This isn't natural price discovery.
                        </div>
                        <div className="text-orange-200 text-xs font-medium">It's systematic currency debasement.</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: The Peaceful Revolution */}
                  <div className="relative h-32 group flip-card-container">
                    <div
                      className={`flip-card-inner cursor-pointer ${
                        flippedCards.hero3 ? 'flipped' : ''
                      }`}
                      onClick={() => setFlippedCards(prev => ({ ...prev, hero3: !prev.hero3 }))}
                    >
                      {/* Front of card */}
                      <div
                        className="flip-card-face bg-yellow-900/30 border border-yellow-500 rounded-lg p-4 text-center transition-all duration-300 group-hover:bg-yellow-900/40 group-hover:border-yellow-400 group-hover:shadow-lg group-hover:shadow-yellow-500/20"
                      >
                        <div className="text-3xl font-bold text-yellow-400 mb-1">
                          1971
                        </div>
                        <div className="text-sm text-yellow-200">The Year It All Changed</div>
                        {/* Flip indicator */}
                        <div className="absolute top-2 right-2 text-yellow-400/60 text-xs group-hover:text-yellow-300 transition-colors">⟲</div>
                      </div>

                      {/* Back of card */}
                      <div
                        className="flip-card-face flip-card-back bg-yellow-900/60 border border-yellow-400 rounded-lg p-2 text-center transition-all duration-300 flex flex-col justify-center group-hover:bg-yellow-900/70 group-hover:border-yellow-300 group-hover:shadow-lg group-hover:shadow-yellow-500/20"
                      >
                        <div className="text-lg mb-1">🕊️</div>
                        <div className="text-sm font-bold text-yellow-300 mb-1">Opt Out Peacefully</div>
                        <div className="text-yellow-100 text-xs leading-snug px-1">
                          Bitcoin offers escape from the corrupt system through math, not violence.
                        </div>
                        <div className="text-yellow-200 text-xs font-medium mt-1">Own what they cannot print.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center mb-12">
            <div className="text-center mb-6">
              <div className="text-orange-400 text-sm font-medium mb-2">
                💡 Click the cards above to discover the solution
              </div>
            </div>
            <button className="text-orange-400 hover:text-orange-300 text-xl font-medium transition-colors animate-pulse">
              ↓ See how they did it ↓
            </button>
          </div>

        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="text-9xl absolute top-10 left-10 animate-float text-red-500">🏠</div>
          <div className="text-6xl absolute bottom-20 right-20 animate-float-delayed text-orange-500">💸</div>
          <div className="text-8xl absolute top-1/2 left-1/4 animate-bounce-gentle text-yellow-500">⚖️</div>
          <div className="text-7xl absolute top-1/3 right-1/3 animate-float text-green-500">💰</div>
        </div>
      </div>

      {/* Beer Analogy - Simple Explanation */}
      <div id="crisis" className="bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-6xl mb-6">🍺</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Think of Money Like Beer
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Imagine you have a perfect pint of beer. Now someone adds water to it.
              <br/><br/>
              <span className="text-yellow-400 font-bold">Did you get "more beer"?</span> No. You got watered-down beer that tastes awful.
              <br/><br/>
              <span className="text-red-400 font-bold">That's exactly what happens when they print more money.</span>
              <br/>
              Your dollars don't multiply—they get diluted. And just like watered-down beer,
              watered-down money buys you less of what you actually want.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Pure Beer Card */}
            <div className="relative h-48">
              <div
                className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCards.pure ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 w-full h-full bg-amber-800/30 border border-amber-400 rounded-lg p-6 text-center cursor-pointer backface-hidden"
                  onClick={() => setFlippedCards(prev => ({ ...prev, pure: !prev.pure }))}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-4xl mb-4">🍺</div>
                  <div className="text-xl font-bold text-amber-400 mb-2">Pure Beer</div>
                  <div className="text-white/80 mb-4">Strong, valuable, what you paid for</div>
                  <button className="text-amber-400 hover:text-amber-300 text-sm font-medium">
                    Read More →
                  </button>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 w-full h-full bg-amber-800/30 border border-amber-400 rounded-lg p-4 text-center cursor-pointer backface-hidden rotate-y-180"
                  onClick={() => setFlippedCards(prev => ({ ...prev, pure: !prev.pure }))}
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="text-2xl mb-2">💰</div>
                  <div className="text-lg font-bold text-amber-400 mb-2">Sound Money</div>
                  <div className="text-white/90 text-sm leading-relaxed">
                    Money whose value cannot easily be manipulated, like Gold. It ensures value doesn't change dramatically over time, preventing inflation and deflation.
                  </div>
                  <button className="text-amber-400 hover:text-amber-300 text-sm font-medium mt-2">
                    ← Back
                  </button>
                </div>
              </div>
            </div>

            {/* Watered-Down Beer Card */}
            <div className="relative h-48">
              <div
                className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCards.watered ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 w-full h-full bg-red-800/30 border border-red-400 rounded-lg p-6 text-center cursor-pointer backface-hidden"
                  onClick={() => setFlippedCards(prev => ({ ...prev, watered: !prev.watered }))}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-4xl mb-4">🍺💧</div>
                  <div className="text-xl font-bold text-red-400 mb-2">Watered-Down Beer</div>
                  <div className="text-white/80 mb-4">Weak, worthless, a scam</div>
                  <button className="text-red-400 hover:text-red-300 text-sm font-medium">
                    Read More →
                  </button>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 w-full h-full bg-red-800/30 border border-red-400 rounded-lg p-4 text-center cursor-pointer backface-hidden rotate-y-180"
                  onClick={() => setFlippedCards(prev => ({ ...prev, watered: !prev.watered }))}
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div className="text-2xl mb-2">🏛️</div>
                  <div className="text-lg font-bold text-red-400 mb-2">Fiat Currency</div>
                  <div className="text-white/90 text-sm leading-relaxed">
                    Currency manipulated by politicians or central banks through authority decree. Value changes easily through money printing, diluting purchasing power.
                  </div>
                  <button className="text-red-400 hover:text-red-300 text-sm font-medium mt-2">
                    ← Back
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl text-white font-bold">
              They'd been adding water for years, but 1971 was when they threw away all restraints.
              <br/>
              <span className="text-red-400">Now they could add unlimited water.</span>
            </p>
          </div>
        </div>
      </div>

      {/* The Evidence Section - Money Supply Chart */}
      <div id="charts" className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Here's Exactly How They Did It
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This isn't conspiracy theory. This is <span className="text-red-400 font-bold">official Federal Reserve data</span> showing
              the systematic debasement of your purchasing power since Nixon's 1971 decision to unpeg the dollar from gold, making printing money the defacto way to get more dollars out there.
            </p>
            <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 order-2 md:order-1">
                  <img 
                    src="/mickey.GIF" 
                    alt="Mickey Mouse as the Sorcerer's Apprentice drowning in an endless flood of multiplying water buckets, representing how money printing creates an uncontrollable cascade of currency debasement that overwhelms and destroys purchasing power" 
                    className="w-32 h-24 md:w-40 md:h-30 rounded-lg object-cover border border-orange-500/40"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 order-1 md:order-2">
                  <h3 className="text-lg font-bold text-orange-400 mb-3">The Problem:</h3>
                  <p className="text-gray-300 mb-4">
                    By printing money, you're taking away the value of what you already have. The charts below show the amount of money added to the existing supply (diluting the supply) and how that correlates with increasing inflation in housing prices and an inverse correlation to dollar purchasing power.
                  </p>
                  <p className="text-orange-300/80 text-sm italic">
                    Like Mickey's magic water, "creating" more money only drowns us in devaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <MoneySupplyDollarChart />

          <div className="text-center mt-8 mb-12">
            <p className="text-lg text-gray-300 mb-4">
              See the <span className="text-red-400 font-bold">perfect correlation</span>?
              As they expanded the money supply 70x, your dollar lost 91% of its purchasing power.
            </p>
            <p className="text-yellow-400 font-bold text-xl mb-8">
              This isn't market forces - this is engineered wealth transfer.
            </p>
          </div>

          {/* Interactive Calculator */}
          <div id="calculator">
            <DollarValueCalculator />
          </div>
        </div>
      </div>

      {/* The Great Divergence - Data Exhibition */}
      <div id="societal-decline">
        <SocietalDeclineCharts />
      </div>

      {/* Historical Timeline Section */}
      <div id="timeline" className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-400 mb-4">
              The Parallel Genesis of Bitcoin
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              While governments destroyed sound money, <span className="text-green-400 font-bold">cypherpunks built the alternative</span>.
            </p>
          </div>

          <ParallelTimeline />
        </div>
      </div>

      {/* Bitcoin's Moral Code - The Solution */}
      <div id="moral-code-section">
        <BitcoinMoralCode />
      </div>

      {/* Bitcoin vs Altcoins - Why Bitcoin is Unique */}
      <div id="bitcoin-vs-crypto">
        <BitcoinVsAltcoins />
      </div>

      {/* Practical Guidance Section */}
      <div id="practical-guidance" className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Take Action?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              You understand why Bitcoin matters. Now learn how to safely get started with step-by-step practical guides.
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Featured Guide */}
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">💳</span>
                  <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded border border-green-500/30">
                    BEGINNER
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Your First Bitcoin Wallet
                </h3>
                <p className="text-gray-300 mb-4">
                  Learn how to safely store Bitcoin with our recommended app Strike. Includes fee waivers and step-by-step setup.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-orange-400">•</span>
                    Custodial vs non-custodial explained
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-orange-400">•</span>
                    Zero fees on DCA + low fees on regular purchases
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-orange-400">•</span>
                    Dollar cost averaging setup
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-orange-400">•</span>
                    Essential security practices
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="/guides/first-wallet"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Start Here →
                  </a>
                  <span className="text-orange-400 text-sm">8 min read</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-black/50 rounded-lg p-6 border border-gray-700">
                  <div className="text-6xl mb-4">⚡</div>
                  <div className="text-white font-bold mb-2">Strike App</div>
                  <div className="text-gray-400 text-sm mb-4">Our top recommendation</div>
                  <div className="space-y-2 text-xs text-gray-500">
                    <div>✓ Available in 95+ countries</div>
                    <div>✓ Zero fees on DCA purchases</div>
                    <div>✓ Lightning Network built-in</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Guides Preview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 opacity-60">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💰</span>
                <span className="bg-gray-600 text-gray-400 text-xs px-2 py-1 rounded">
                  COMING SOON
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Buying Your First Bitcoin
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Step-by-step guide to making your first Bitcoin purchase safely and avoiding common mistakes.
              </p>
              <div className="text-gray-500 text-xs">
                Exchange safety • Fee comparison • Withdrawal process
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 opacity-60">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚡</span>
                <span className="bg-gray-600 text-gray-400 text-xs px-2 py-1 rounded">
                  COMING SOON
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Lightning Network Basics
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Understanding Bitcoin's instant payment layer and making your first Lightning transaction.
              </p>
              <div className="text-gray-500 text-xs">
                Layer 2 explained • Lightning wallets • First payment
              </div>
            </div>
          </div>

          {/* All Guides CTA */}
          <div className="text-center">
            <a
              href="/guides"
              className="inline-flex items-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              View All Practical Guides
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Further Reading Section */}
      <div id="further-reading">
        <BookCarousel />
      </div>

      {/* Final CTA - Exhibition Exit */}
      <div id="final-cta" className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Museum Tour Complete.
            <br />Your Mission Begins.
          </h2>
          <p className="text-2xl text-white/90 mb-8">
            You've seen the evidence. You understand the crisis.
            <br />Now you have the tools to choose <span className="font-bold">ethical money.</span>
          </p>

          <div className="space-y-4">
            <a
              href="/guides/first-wallet"
              className="inline-block bg-white text-orange-600 font-bold py-6 px-12 rounded-2xl text-2xl shadow-xl hover:bg-gray-100 transition-colors"
            >
              🚀 Start Your Bitcoin Journey
            </a>
            <div className="text-white/80 text-sm">
              ⚡ Free guides • Practical steps • Your generation's fighting chance
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
      `}</style>
    </div>
    </>
  );
};

export default Landing;
