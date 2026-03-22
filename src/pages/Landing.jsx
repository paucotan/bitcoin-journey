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
import Footer from '../components/Layout/Footer';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black pt-16">
      <ProgressSidebar />
      {/* Generational Wealth Theft Hero */}
      <div id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Burning Money Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/050/766/422/small_2x/a-pile-of-burning-money-on-fire-video.jpg')`
          }}
        ></div>
        
        {/* Overlay Gradients for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-red-900/70 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">

          {/* Compelling Hook */}
          <div className="mb-12">
            <div className="text-orange-400 text-lg font-medium mb-6 tracking-wide">
              Something changed in 1971. Nobody taught you about it.
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Your parents could buy a house on one income.<br/>
              <span className="text-orange-300">What happened?</span>
            </h1>

            {showShock && (
              <div className="animate-fade-in space-y-6">
                <p className="text-2xl md:text-3xl text-white mb-8 font-medium max-w-4xl mx-auto leading-relaxed">
                  Your parents could buy a house for <span className="text-green-400 font-bold">$25,000</span>.<br/>
                  The same house costs <span className="text-red-400 font-bold">$400,000</span> today.
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
                        <div className="text-base mb-1">🪙➡️📄</div>
                        <div className="text-xs font-bold text-red-300 mb-1">What Changed in 1971</div>
                        <div className="text-red-100 text-xs leading-tight px-1">
                          Before 1971, the US dollar was backed by gold. After 1971, it was backed by trust — and the supply could be expanded at will.
                        </div>
                        <div className="text-red-200 text-xs font-medium mt-1">The beer analogy below explains what that means.</div>
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
                        <div className="text-xs font-bold text-orange-300 mb-1">Simple Arithmetic</div>
                        <div className="text-orange-100 text-xs leading-tight px-1">
                          From $25,000 in 1971 to $420,000 today. When more dollars exist, each dollar buys less.
                        </div>
                        <div className="text-orange-200 text-xs font-medium mt-1">That's not opinion — it's arithmetic.</div>
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
                        <div className="text-lg mb-1">💻</div>
                        <div className="text-sm font-bold text-yellow-300 mb-1">A Different Kind of System</div>
                        <div className="text-yellow-100 text-xs leading-snug px-1">
                          In 1971, Nixon ended the gold standard. Fifty years later, an anonymous programmer wrote code to make that impossible for any currency again.
                        </div>
                        <div className="text-yellow-200 text-xs font-medium mt-1">That story is below.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center mb-12">
            <div className="text-center mb-12">
              <div className="text-orange-400 text-sm font-medium mb-2">
                💡 Click the cards above to discover the story
              </div>
            </div>
            <button className="text-orange-400 hover:text-orange-300 text-xl font-medium transition-colors animate-pulse">
              ↓ See what happened next ↓
            </button>
          </div>

        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="text-9xl absolute top-10 left-10 animate-float text-red-500">🏠</div>
          <div className="text-6xl absolute bottom-20 right-20 animate-float-delayed text-orange-500">💸</div>
          <div className="text-8xl absolute top-1/2 left-1/4 animate-bounce-gentle text-yellow-500">⚖️</div>
          <div className="text-7xl absolute top-1/3 right-1/3 animate-float text-green-500">💰</div>
          <img src="/assets/annuit-coeptis.jpg" alt="Fiat symbol" className="absolute top-20 right-10 w-24 h-24 animate-float opacity-90 rounded-full bg-gray-800 p-1" style={{objectFit: 'cover'}} />
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
                  <div className="text-white/80 mb-4">Diluted, worth less than you paid for</div>
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
                    Currency controlled by central banks and governments, and can be expanded by policy decision. Value changes easily through money printing, diluting purchasing power.
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
              For decades the water was added slowly. After 1971, there was no longer any rule about how much could be added.
              <br/>
              <span className="text-orange-400">The chart below shows what happened next.</span>
            </p>
          </div>
        </div>
      </div>

      {/* The Evidence Section - Money Supply Chart */}
      <div id="charts" className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Happened After 1971
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This is <span className="text-red-400 font-bold">official Federal Reserve data</span> showing how the US money supply changed after Nixon ended the dollar's link to gold in 1971, and what happened to purchasing power in the same period.
            </p>
            <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 order-2 md:order-1">
                  <img
                    src="/weimar-burning-bills.jpg"
                    alt="A German woman burning worthless banknotes in her stove during the Weimar Republic hyperinflation of 1923, when currency became cheaper to burn than to spend on firewood"
                    className="w-36 h-56 md:w-44 md:h-64 rounded-lg object-cover object-center border border-orange-500/40"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 order-1 md:order-2">
                  <h3 className="text-lg font-bold text-orange-400 mb-3">The Problem:</h3>
                  <p className="text-gray-300 mb-4">
                    Expanding the money supply dilutes the value of every existing unit. The charts below show how the US money supply grew after 1971 — and how purchasing power moved in the opposite direction over the same period.
                  </p>
                  <p className="text-orange-300/80 text-sm italic">
                    When money loses its value, it becomes cheaper to burn than to spend — Weimar Germany, 1923.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <MoneySupplyDollarChart />

          <div className="text-center mt-8 mb-12">
            <p className="text-lg text-gray-300 mb-4">
              See the <span className="text-red-400 font-bold">perfect correlation</span>?
              Money supply up 70x, dollar purchasing power down 91%, in the same period.
            </p>
            <p className="text-gray-300 text-xl mb-8">
              What you call this depends on your starting point. What isn't in dispute is the data.
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
              While governments moved further from fixed-supply money, <span className="text-green-400 font-bold">a parallel movement was building a different kind of system</span>.
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

      {/* Continue the Tour Section */}
      <div id="practical-guidance" className="bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Continue the tour
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Three guides. No prior knowledge required.
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          {/* Three Permanent Collection Guide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* What Is Bitcoin */}
            <a
              href="/guides/what-is-bitcoin"
              className="group bg-gray-800/50 border border-gray-700 hover:border-orange-500/50 rounded-xl p-8 transition-all duration-300 hover:bg-gray-800/80"
            >
              <div className="text-3xl mb-6 text-orange-400">₿</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                What Is Bitcoin?
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                How it's created, stored, and transferred — without the jargon. The mechanics, plainly explained.
              </p>
              <span className="text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors">
                Read →
              </span>
            </a>

            {/* Why Bitcoin Matters Now */}
            <a
              href="/guides/why-bitcoin-matters-now"
              className="group bg-gray-800/50 border border-gray-700 hover:border-orange-500/50 rounded-xl p-8 transition-all duration-300 hover:bg-gray-800/80"
            >
              <div className="text-3xl mb-6">🕰️</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                Why Bitcoin Matters Now
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                The historical and economic case for why this moment is different. Why timing matters.
              </p>
              <span className="text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors">
                Read →
              </span>
            </a>

            {/* Time Preference */}
            <a
              href="/guides/time-preference"
              className="group bg-gray-800/50 border border-gray-700 hover:border-orange-500/50 rounded-xl p-8 transition-all duration-300 hover:bg-gray-800/80"
            >
              <div className="text-3xl mb-6">⏳</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                Time Preference
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                How the money you use shapes the decisions you make. The surprising connection between sound money and long-term thinking.
              </p>
              <span className="text-orange-400 text-sm font-medium group-hover:text-orange-300 transition-colors">
                Read →
              </span>
            </a>
          </div>

          {/* Secondary: Practical Guides */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Ready to act?{' '}
              <a href="/guides" className="text-orange-400 hover:text-orange-300 transition-colors">
                View practical guides →
              </a>
            </p>
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
            You've seen the evidence. You understand what changed in 1971 and why.
            <br />The guides below are the practical next step.
          </p>

          <div className="space-y-4">
            <a
              href="/guides/first-wallet"
              className="inline-block bg-white text-orange-600 font-bold py-6 px-12 rounded-2xl text-2xl shadow-xl hover:bg-gray-100 transition-colors"
            >
              🚀 Start Your Bitcoin Journey
            </a>
            <div className="text-white/80 text-sm">
              ⚡ Free guides • Practical steps • No prior knowledge required
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
    
    {/* Footer */}
    <Footer />
    </>
  );
};

export default Landing;
