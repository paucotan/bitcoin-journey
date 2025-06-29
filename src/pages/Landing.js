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
      {/* Dramatic Opening */}
      <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
          
          {/* Shocking Revelation */}
          <div className="mb-12">
            <div className="text-red-400 text-lg font-medium mb-4 animate-pulse">
              BREAKING: The Truth They Don't Want You to Know
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="text-red-500 text-9xl block mb-4">1971</span>
              <span className="text-red-400">Everything Broke</span>
            </h1>
            
            {showShock && (
              <div className="animate-fade-in">
                <p className="text-3xl md:text-4xl text-white mb-8 font-bold max-w-2xl mx-auto">
                  Nixon killed sound money.<br/>
                  <span className="text-red-400">Your generation pays the price.</span>
                </p>
              </div>
            )}
          </div>


          <div className="flex justify-center mb-12">
            <button className="text-orange-400 hover:text-orange-300 text-xl font-medium transition-colors animate-pulse">
              ↓ See the evidence ↓
            </button>
          </div>

        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-9xl absolute top-10 left-10 animate-float text-red-500">💸</div>
          <div className="text-6xl absolute bottom-20 right-20 animate-float-delayed text-orange-500">🔥</div>
          <div className="text-8xl absolute top-1/2 left-1/4 animate-bounce-gentle text-yellow-500">⚠️</div>
        </div>
      </div>


      {/* The Evidence Section - Money Supply Chart */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Here's The Proof
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't take our word for it. This is <span className="text-red-400 font-bold">official Federal Reserve data</span> showing 
              how they've systematically destroyed your money since 1971.
            </p>
          </div>
          
          <MoneySupplyDollarChart />
          
          <div className="text-center mt-8 mb-12">
            <p className="text-lg text-gray-300 mb-4">
              See the <span className="text-red-400 font-bold">perfect inverse correlation</span>? 
              The more money they print, the less your dollar is worth.
            </p>
            <p className="text-yellow-400 font-bold text-xl mb-8">
              This is not inflation - this is systematic theft.
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