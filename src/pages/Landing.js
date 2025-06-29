import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MoneySupplyDollarChart from '../components/UI/MoneySupplyDollarChart';
import MonetaryTimeline from '../components/UI/MonetaryTimeline';
import SocietalDeclineCharts from '../components/UI/SocietalDeclineCharts';
import BitcoinMoralCode from '../components/UI/BitcoinMoralCode';
import DollarValueCalculator from '../components/UI/DollarValueCalculator';

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

  useEffect(() => {
    const timer = setTimeout(() => setShowShock(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black">
      {/* Generational Wealth Theft Hero */}
      <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
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
                
                {/* Shocking Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                  <div className="bg-red-900/30 border border-red-500 rounded-lg p-6">
                    <div className="text-3xl font-bold text-red-400 mb-2">
                      <AnimatedCounter start={0} end={87} duration={2000} suffix="%" />
                    </div>
                    <div className="text-sm text-red-200">Dollar Value Lost Since 1971</div>
                  </div>
                  <div className="bg-orange-900/30 border border-orange-500 rounded-lg p-6">
                    <div className="text-3xl font-bold text-orange-400 mb-2">
                      <AnimatedCounter start={0} end={16} duration={2000} suffix="x" />
                    </div>
                    <div className="text-sm text-orange-200">House Price Multiplier</div>
                  </div>
                  <div className="bg-yellow-900/30 border border-yellow-500 rounded-lg p-6">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">
                      1971
                    </div>
                    <div className="text-sm text-yellow-200">The Year It All Changed</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center mb-12">
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
      <div className="bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 py-16">
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
            <div className="bg-amber-800/30 border border-amber-400 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🍺</div>
              <div className="text-xl font-bold text-amber-400 mb-2">Pure Beer</div>
              <div className="text-white/80">Strong, valuable, what you paid for</div>
            </div>
            <div className="bg-red-800/30 border border-red-400 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🍺💧</div>
              <div className="text-xl font-bold text-red-400 mb-2">Watered-Down Beer</div>
              <div className="text-white/80">Weak, worthless, a scam</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl text-white font-bold">
              In 1971, they started adding water to your money. 
              <br/>
              <span className="text-red-400">A lot of water.</span>
            </p>
          </div>
        </div>
      </div>

      {/* The Evidence Section - Money Supply Chart */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Here's Exactly How They Did It
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This isn't conspiracy theory. This is <span className="text-red-400 font-bold">official Federal Reserve data</span> showing 
              the systematic debasement of your purchasing power since Nixon's 1971 decision.
            </p>
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
          <DollarValueCalculator />
        </div>
      </div>

      {/* The Great Divergence - Data Exhibition */}
      <SocietalDeclineCharts />

      {/* Historical Timeline Section */}
      <div className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-400 mb-4">
              The Monetary Timeline
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              From gold standard to fake money: <span className="text-red-400 font-bold">The 1971 turning point</span> that broke everything.
            </p>
          </div>
          
          <MonetaryTimeline />
        </div>
      </div>

      {/* Bitcoin's Moral Code - The Solution */}
      <BitcoinMoralCode />

      {/* Final CTA - Exhibition Exit */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Exit the Exhibition.
            <br />Enter the Revolution.
          </h2>
          <p className="text-2xl text-white/90 mb-8">
            You've seen the evidence. You understand the crisis. 
            <br />Now choose <span className="font-bold">ethical money.</span>
          </p>
          
          <div className="space-y-4">
            <Link
              to="/dashboard"
              className="inline-block bg-white text-red-600 hover:bg-red-50 font-bold py-6 px-12 rounded-2xl text-2xl transition-all transform hover:scale-105 shadow-xl"
            >
              BEGIN YOUR JOURNEY →
            </Link>
            <div className="text-white/80 text-sm">
              ⚡ Free • Educational • Your generation's fighting chance
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
  );
};

export default Landing;