import React, { useState } from 'react';
import GuideLayout from '../../components/Guides/GuideLayout';

const DollarCostAveraging = () => {
  const [dcaAmount, setDcaAmount] = useState(100);
  const [dcaFrequency, setDcaFrequency] = useState('weekly');
  
  const calculateAnnualDCA = () => {
    const frequencies = {
      daily: 365,
      weekly: 52,
      'bi-weekly': 26,
      monthly: 12
    };
    return dcaAmount * (frequencies[dcaFrequency] || 52);
  };

  return (
    <GuideLayout 
      title="Dollar Cost Averaging Bitcoin"
      description="Smart buying strategy with automation and psychology"
      readTime="8 min"
    >
      <div className="space-y-8">
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
          <p className="text-green-300">
            Dollar Cost Averaging (DCA) is the simplest, most effective way to invest in Bitcoin long-term. Instead of trying to time the market, you buy a fixed amount regularly, regardless of price.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What is Dollar Cost Averaging?</h2>
          <p className="text-gray-300 mb-4">
            DCA is an investment strategy where you buy a fixed dollar amount of Bitcoin at regular intervals - daily, weekly, or monthly - regardless of the current price.
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">How DCA Works</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">📅</span>
                <div>
                  <strong className="text-white">Set Schedule:</strong> <span className="text-gray-300">Choose when to buy (weekly, monthly, etc.)</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">💰</span>
                <div>
                  <strong className="text-white">Fixed Amount:</strong> <span className="text-gray-300">Decide how much to invest each time</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">🤖</span>
                <div>
                  <strong className="text-white">Automate:</strong> <span className="text-gray-300">Set up recurring purchases to remove emotion</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">📈</span>
                <div>
                  <strong className="text-white">Stay Consistent:</strong> <span className="text-gray-300">Continue buying regardless of price movements</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">DCA Strategy Calculator</h2>
          <p className="text-gray-300 mb-4">
            Plan your DCA strategy with this calculator:
          </p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-400 mb-4">Your DCA Plan</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Amount per purchase:</label>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <input
                    type="number"
                    value={dcaAmount}
                    onChange={(e) => setDcaAmount(Number(e.target.value))}
                    className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white flex-1"
                    min="1"
                    max="10000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Frequency:</label>
                <select
                  value={dcaFrequency}
                  onChange={(e) => setDcaFrequency(e.target.value)}
                  className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white w-full"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="bi-weekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>

            <div className="mt-6 bg-gray-800/50 border border-gray-700 rounded p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">
                  ${calculateAnnualDCA().toLocaleString()} / year
                </div>
                <div className="text-gray-300 text-sm">
                  You'll invest ${dcaAmount} {dcaFrequency} = ${calculateAnnualDCA().toLocaleString()} annually
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-400 text-sm">
                💡 Start with an amount you're comfortable losing and can sustain long-term
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Why DCA Works: The Psychology</h2>
          <p className="text-gray-300 mb-4">
            DCA isn't just about numbers - it's about human psychology and removing emotion from investing:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">😰 Emotional Investing Problems</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>FOMO:</strong> Buying high during bull runs</li>
                <li>• <strong>Fear:</strong> Selling low during crashes</li>
                <li>• <strong>Analysis paralysis:</strong> Waiting for the "perfect" time</li>
                <li>• <strong>Timing stress:</strong> Constantly watching charts</li>
                <li>• <strong>Regret:</strong> "I should have bought yesterday"</li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">😌 DCA Psychological Benefits</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Removes timing stress:</strong> No need to predict prices</li>
                <li>• <strong>Builds discipline:</strong> Consistent investing habits</li>
                <li>• <strong>Reduces regret:</strong> You're always buying</li>
                <li>• <strong>Creates calm:</strong> Less emotional decision-making</li>
                <li>• <strong>Builds confidence:</strong> Through consistent action</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">DCA vs Lump Sum: When to Use Each</h2>
          <p className="text-gray-300 mb-4">
            Understanding when to use DCA versus lump sum investing:
          </p>

          <div className="space-y-4">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">🎯 Use DCA When:</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• You're new to Bitcoin and learning</li>
                <li>• You have regular income to invest</li>
                <li>• Bitcoin feels volatile or risky to you</li>
                <li>• You want to build investing discipline</li>
                <li>• You're investing for 4+ years</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-purple-400 mb-2">⚡ Consider Lump Sum When:</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• You have a large windfall to invest</li>
                <li>• You're convinced Bitcoin is undervalued</li>
                <li>• You're experienced and comfortable with volatility</li>
                <li>• You want maximum potential returns</li>
                <li>• Market conditions seem especially favorable</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mt-4">
            <p className="text-orange-300 text-sm">
              <strong>Best approach:</strong> Many investors use a hybrid strategy - DCA with regular income, plus occasional lump sums during major dips.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Choosing Your DCA Frequency</h2>
          <p className="text-gray-300 mb-4">
            Different frequencies have different trade-offs:
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-green-400">Daily DCA</h3>
                <span className="text-green-400 text-sm">Best volatility smoothing</span>
              </div>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>Pros:</strong> Maximum volatility smoothing, builds strong habits</div>
                <div><strong>Cons:</strong> Higher transaction fees, more complex to manage</div>
                <div><strong>Best for:</strong> Large investors who want maximum smoothing</div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-blue-400">Weekly DCA</h3>
                <span className="text-blue-400 text-sm">Sweet spot for most people</span>
              </div>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>Pros:</strong> Good volatility smoothing, manageable frequency</div>
                <div><strong>Cons:</strong> Slightly less smoothing than daily</div>
                <div><strong>Best for:</strong> Most investors, balances benefits and simplicity</div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-purple-400">Monthly DCA</h3>
                <span className="text-purple-400 text-sm">Simplest approach</span>
              </div>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>Pros:</strong> Simple to manage, aligns with salary</div>
                <div><strong>Cons:</strong> Less volatility smoothing, more timing risk</div>
                <div><strong>Best for:</strong> Beginners, those who prefer simplicity</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Recommended DCA Platform</h2>
          <p className="text-gray-300 mb-4">
            Choose platforms that make DCA easy and affordable:
          </p>

          <div className="space-y-4">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">🏆 Strike - Top Choice</h3>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded p-4">
                <div className="flex justify-between items-start mb-3">
                  <strong className="text-white text-lg">Strike</strong>
                  <span className="text-green-400 text-sm font-bold">Zero fees after 1 week!</span>
                </div>
                <div className="text-gray-300 text-sm space-y-2">
                  <div><strong>Why Strike:</strong> Completely free recurring Bitcoin purchases after your first week</div>
                  <div><strong>Features:</strong> Lightning Network integration, global reach, clean interface</div>
                  <div><strong>Best for:</strong> Everyone - the fee savings make it the obvious choice</div>
                  <div><strong>Bonus:</strong> Built-in Lightning wallet for instant, cheap transactions</div>
                </div>
              </div>
              
              <div className="mt-4 bg-orange-500/10 border border-orange-500/20 rounded p-3">
                <p className="text-orange-300 text-sm">
                  <strong>Pro tip:</strong> Start with Strike for your DCA strategy. Zero fees means more of your money goes into Bitcoin, not platform fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">DCA During Different Market Conditions</h2>
          <p className="text-gray-300 mb-4">
            How to think about DCA in bull and bear markets:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">📈 Bull Market DCA</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div><strong>Challenge:</strong> Buying at increasingly higher prices</div>
                <div><strong>Psychology:</strong> "Should I stop buying since it's expensive?"</div>
                <div><strong>Strategy:</strong> Stay disciplined - bull markets can last years</div>
                <div><strong>Reminder:</strong> You're building a long-term position</div>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">📉 Bear Market DCA</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div><strong>Opportunity:</strong> Accumulating more Bitcoin per purchase</div>
                <div><strong>Psychology:</strong> "Should I stop since it keeps falling?"</div>
                <div><strong>Strategy:</strong> This is when DCA shines most</div>
                <div><strong>Reminder:</strong> Bear markets create generational wealth</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-bold text-blue-400 mb-2">🎯 Advanced DCA Techniques</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Value Averaging:</strong> Buy more when price drops, less when it rises</li>
              <li>• <strong>Graduated DCA:</strong> Increase amounts over time as income grows</li>
              <li>• <strong>Dip Buying:</strong> Save extra cash for major drops (&gt;20%)</li>
              <li>• <strong>Profit Taking:</strong> Occasionally take some profits during euphoria</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Setting Up Your First DCA</h2>
          <p className="text-gray-300 mb-4">
            Step-by-step guide to start DCA-ing today:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">1️⃣</span>
              <div>
                <strong className="text-white">Choose your amount</strong>
                <p className="text-gray-300 text-sm">Start with 1-5% of your income. You can always increase later.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">2️⃣</span>
              <div>
                <strong className="text-white">Pick your frequency</strong>
                <p className="text-gray-300 text-sm">Weekly is usually the sweet spot for most people.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">3️⃣</span>
              <div>
                <strong className="text-white">Choose your platform</strong>
                <p className="text-gray-300 text-sm">Strike offers zero fees on recurring purchases after your first week.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">4️⃣</span>
              <div>
                <strong className="text-white">Set up automation</strong>
                <p className="text-gray-300 text-sm">Enable recurring purchases to remove the emotion.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">5️⃣</span>
              <div>
                <strong className="text-white">Stay consistent</strong>
                <p className="text-gray-300 text-sm">The key is discipline - keep buying regardless of price.</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mt-6">
            <h3 className="text-lg font-bold text-orange-400 mb-2">🎯 DCA Success Tips</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Start small:</strong> Better to start with $25/week than wait for "perfect" amount</li>
              <li>• <strong>Automate everything:</strong> Remove the temptation to skip purchases</li>
              <li>• <strong>Don't watch charts:</strong> Set it and forget it</li>
              <li>• <strong>Keep emergency fund:</strong> Don't DCA money you might need</li>
              <li>• <strong>Think long-term:</strong> DCA works best over 4+ years</li>
            </ul>
          </div>
        </section>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Time in Market &gt; Timing the Market</h3>
          <p className="text-gray-300 text-sm">
            DCA is the antidote to trying to time Bitcoin's volatile price movements. By consistently investing over time, you smooth out volatility and build a substantial Bitcoin position without the stress of perfect timing. Most successful Bitcoin investors use some form of DCA strategy.
          </p>
        </div>
      </div>
    </GuideLayout>
  );
};

export default DollarCostAveraging;