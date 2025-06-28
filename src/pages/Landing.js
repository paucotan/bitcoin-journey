import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MoneySupplyChart from '../components/UI/MoneySupplyChart';
import MonetaryTimeline from '../components/UI/MonetaryTimeline';

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
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Your <span className="text-green-400">$100</span> from 1913<br />
              is worth <span className="text-red-500">
                <AnimatedCounter start={100} end={3} duration={3000} prefix="$" suffix=".87" />
              </span> today.
            </h1>
            
            {showShock && (
              <div className="animate-fade-in">
                <p className="text-2xl md:text-3xl text-red-300 mb-4 font-bold">
                  The government didn't tell you this.
                </p>
                <div className="text-6xl mb-6">💀</div>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  <span className="text-red-400 font-bold">96% of your money's value</span> has been 
                  systematically stolen through inflation. Every dollar you own is under attack.
                </p>
              </div>
            )}
          </div>

          {/* Purchasing Power Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-green-900/30 border border-green-500 rounded-xl p-6">
              <div className="text-green-400 font-bold text-lg mb-2">1913</div>
              <div className="text-white text-2xl mb-2">$100 could buy:</div>
              <ul className="text-green-300 space-y-1">
                <li>🏠 Down payment on a house</li>
                <li>🚗 A brand new car</li>
                <li>🥖 2,500 loaves of bread</li>
                <li>☕ 5,000 cups of coffee</li>
              </ul>
            </div>
            
            <div className="bg-red-900/30 border border-red-500 rounded-xl p-6">
              <div className="text-red-400 font-bold text-lg mb-2">2024</div>
              <div className="text-white text-2xl mb-2">$100 can buy:</div>
              <ul className="text-red-300 space-y-1">
                <li>🏠 0.001% of a house</li>
                <li>🚗 A car tire (maybe)</li>
                <li>🥖 25 loaves of bread</li>
                <li>☕ 20 cups of coffee</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/dashboard"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Learn The Truth
            </Link>
            <button className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black font-bold py-4 px-8 rounded-2xl text-lg transition-all">
              See The Evidence
            </button>
          </div>

          {/* Shocking Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400">96%</div>
              <div className="text-red-200 text-sm">Value Destroyed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400">111</div>
              <div className="text-orange-200 text-sm">Years of Theft</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">$8T</div>
              <div className="text-yellow-200 text-sm">Printed Since 2020</div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-9xl absolute top-10 left-10 animate-float text-red-500">💸</div>
          <div className="text-6xl absolute bottom-20 right-20 animate-float-delayed text-orange-500">🔥</div>
          <div className="text-8xl absolute top-1/2 left-1/4 animate-bounce-gentle text-yellow-500">⚠️</div>
        </div>
      </div>

      {/* Who's Responsible Section */}
      <div className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-400 mb-4">
            Who Did This To You?
          </h2>
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            The Federal Reserve. Central banks. Politicians. They created a system designed to transfer 
            your wealth to them. <span className="text-red-400 font-bold">It's not a bug, it's a feature.</span>
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-red-900/20 border border-red-500 rounded-xl">
              <div className="text-5xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold text-red-400 mb-4">The Federal Reserve</h3>
              <p className="text-gray-300">
                A private bank with the power to print money. Created in 1913, the same year your dollar 
                started its death spiral. <span className="text-red-400">Coincidence?</span>
              </p>
            </div>

            <div className="text-center p-6 bg-orange-900/20 border border-orange-500 rounded-xl">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-orange-400 mb-4">The Government</h3>
              <p className="text-gray-300">
                They spend money they don't have, then print more to pay the bills. 
                <span className="text-orange-400">You pay the price</span> through hidden inflation taxes.
              </p>
            </div>

            <div className="text-center p-6 bg-yellow-900/20 border border-yellow-500 rounded-xl">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">The Illusion</h3>
              <p className="text-gray-300">
                They tell you inflation is "healthy" at 2%. But 2% every year means 
                <span className="text-yellow-400">your money loses half its value every 35 years.</span>
              </p>
            </div>
          </div>
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
          
          <MoneySupplyChart />
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-300 mb-4">
              Notice the <span className="text-red-400 font-bold">vertical cliff</span> starting in 2020? 
              That's when they gave up all pretense and just started printing money like there's no tomorrow.
            </p>
            <p className="text-yellow-400 font-bold text-xl">
              Your savings account didn't stand a chance.
            </p>
          </div>
        </div>
      </div>

      {/* Historical Timeline Section */}
      <div className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-orange-400 mb-4">
              How We Got Here
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              This didn't happen overnight. It's been a <span className="text-red-400 font-bold">111-year plan</span> to steal your wealth.
            </p>
          </div>
          
          <MonetaryTimeline />
        </div>
      </div>

      {/* Bitcoin Solution Section */}
      <div className="bg-gradient-to-br from-orange-900 via-yellow-900 to-orange-800 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-8xl mb-8">₿</div>
          <h2 className="text-4xl font-bold text-white mb-6">
            But There's Hope...
          </h2>
          <p className="text-2xl text-orange-200 mb-12 max-w-4xl mx-auto">
            Bitcoin was created as a direct response to the 2008 financial crisis. 
            <span className="text-yellow-400 font-bold"> It's the first money in human history 
            that cannot be debased by governments.</span>
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-orange-800/30 border border-orange-400 rounded-xl p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-orange-200 mb-2">Fixed Supply</h3>
              <p className="text-orange-100">Only 21 million Bitcoin will ever exist. No one can print more.</p>
            </div>

            <div className="bg-yellow-800/30 border border-yellow-400 rounded-xl p-6">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-yellow-200 mb-2">Decentralized</h3>
              <p className="text-yellow-100">No government, bank, or corporation controls Bitcoin.</p>
            </div>

            <div className="bg-orange-700/30 border border-orange-300 rounded-xl p-6">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-orange-200 mb-2">Sound Money</h3>
              <p className="text-orange-100">Store your wealth in something they can't print away.</p>
            </div>
          </div>

          <p className="text-xl text-white mb-8">
            Learn the truth about money. Understand how you've been robbed. 
            <br /><span className="text-yellow-400 font-bold">Discover why Bitcoin might be your escape route.</span>
          </p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Stop Being Robbed.
          </h2>
          <p className="text-2xl text-white/90 mb-8">
            Every day you wait, more of your wealth evaporates. 
            <br />The time to learn is <span className="font-bold">NOW.</span>
          </p>
          
          <div className="space-y-4">
            <Link
              to="/dashboard"
              className="inline-block bg-white text-red-600 hover:bg-red-50 font-bold py-6 px-12 rounded-2xl text-2xl transition-all transform hover:scale-105 shadow-xl"
            >
              START THE REVOLUTION →
            </Link>
            <div className="text-white/80 text-sm">
              ⚡ Free • No signup required • Learn the truth in 20 minutes
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