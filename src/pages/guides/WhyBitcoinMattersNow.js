import React, { useState } from 'react';
import GuideLayout from '../../components/Guides/GuideLayout';

const WhyBitcoinMattersNow = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  
  const inflationData = {
    2020: { housing: '+16%', groceries: '+2%', wages: '+3%' },
    2021: { housing: '+19%', groceries: '+6%', wages: '+4%' },
    2022: { housing: '+18%', groceries: '+11%', wages: '+5%' },
    2023: { housing: '+7%', groceries: '+5%', wages: '+4%' },
    2024: { housing: '+5%', groceries: '+2%', wages: '+3%' }
  };

  return (
    <GuideLayout 
      title="Why Bitcoin Matters Now"
      description="Understanding Bitcoin's relevance in today's economic reality"
      readTime="7 min"
    >
      <div className="space-y-8">
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
          <p className="text-orange-300">
            Your purchasing power is being quietly eroded every day. Bitcoin isn't just an investment - it's a lifeboat in an ocean of monetary manipulation. Here's why Bitcoin matters more today than ever before.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Hidden Tax You're Already Paying</h2>
          <p className="text-gray-300 mb-4">
            While politicians debate tax rates, there's a hidden tax you're paying right now that no one talks about: <strong>inflation</strong>. It's the cruelest tax because it hits the poor hardest while the wealthy get richer.
          </p>

          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-red-400 mb-4">The Real Inflation Story (2020-2024)</h3>
            
            <div className="mb-4">
              <label className="block text-white font-medium mb-2">Select Year:</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
              >
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
              </select>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 border border-gray-700 rounded p-3">
                <h4 className="text-white font-bold">Housing Costs</h4>
                <div className="text-2xl font-bold text-red-400">{inflationData[selectedYear].housing}</div>
                <p className="text-gray-400 text-xs">Your biggest expense</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded p-3">
                <h4 className="text-white font-bold">Grocery Bills</h4>
                <div className="text-2xl font-bold text-red-400">{inflationData[selectedYear].groceries}</div>
                <p className="text-gray-400 text-xs">Food price increases</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded p-3">
                <h4 className="text-white font-bold">Wage Growth</h4>
                <div className="text-2xl font-bold text-green-400">{inflationData[selectedYear].wages}</div>
                <p className="text-gray-400 text-xs">Your income growth</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded">
              <p className="text-yellow-300 text-sm">
                <strong>Notice the pattern?</strong> Your essential costs are rising faster than your income. This isn't an accident - it's the result of monetary policy that prioritizes asset prices over your purchasing power.
              </p>
            </div>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">What This Means for You</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">📉</span>
                <div>
                  <strong className="text-white">Your savings lose value:</strong>
                  <p className="text-gray-300 text-sm">Money in the bank earns 0.5% while inflation runs 3-8%</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">🏠</span>
                <div>
                  <strong className="text-white">Homeownership becomes impossible:</strong>
                  <p className="text-gray-300 text-sm">House prices rise faster than you can save for a down payment</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">⏰</span>
                <div>
                  <strong className="text-white">Time works against you:</strong>
                  <p className="text-gray-300 text-sm">Every year you wait, everything gets more expensive relative to your income</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">See It In Action</h2>
          <p className="text-gray-300 mb-4">
            Numbers tell one story, but this 30-second video shows the emotional reality of what inflation means for your generation:
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 mb-6">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                src="https://www.youtube.com/embed/oO7WYrekjKk"
                title="The Reality of Inflation - Coinbase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 md:h-80 rounded-lg"
              ></iframe>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded p-3">
              <p className="text-orange-300 text-sm">
                <strong>This isn't just about numbers.</strong> This is about your ability to afford a home, start a family, 
                and build the life your parents had. The question isn't whether inflation is real - it's what you're going to do about it.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Great Wealth Transfer</h2>
          <p className="text-gray-300 mb-4">
            We're living through the largest wealth transfer in human history. Understanding how it works is the first step to protecting yourself.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">💸 How You're Getting Poorer</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Wage stagnation:</strong> Real wages haven't grown since the 1970s</li>
                <li>• <strong>Asset inflation:</strong> Stocks, real estate rise faster than income</li>
                <li>• <strong>Debt dependency:</strong> Forced to borrow for basic needs</li>
                <li>• <strong>Savings punishment:</strong> Interest rates below inflation</li>
                <li>• <strong>Currency debasement:</strong> Money printing devalues your labor</li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">💰 How the Wealthy Get Richer</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Asset ownership:</strong> Own stocks, real estate, businesses</li>
                <li>• <strong>Cheap leverage:</strong> Borrow against assets at low rates</li>
                <li>• <strong>First access:</strong> Get new money before inflation hits</li>
                <li>• <strong>Tax advantages:</strong> Capital gains taxed less than wages</li>
                <li>• <strong>Inflation hedge:</strong> Assets protect against currency debasement</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
            <h3 className="text-lg font-bold text-orange-400 mb-2">🎯 The Cantillon Effect in Action</h3>
            <p className="text-gray-300 text-sm mb-3">
              When central banks create new money, it doesn't reach everyone at the same time. Those who get it first (banks, government, large corporations) can spend it before prices rise. By the time it reaches you, everything costs more.
            </p>
            <div className="bg-gray-800/50 border border-gray-700 rounded p-3">
              <p className="text-yellow-300 text-sm">
                <strong>Example:</strong> Government creates $1 trillion → Banks buy assets → Asset prices rise → You pay higher rent/house prices with the same salary. You get the inflation, they get the assets.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Why Traditional "Advice" Doesn't Work Anymore</h2>
          <p className="text-gray-300 mb-4">
            The old rules of personal finance were written for a different monetary system. Here's why they're failing you:
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">💳 "Just Save Money"</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>The Problem:</strong> Savings accounts pay 0.5% while inflation runs 3-8%</div>
                <div><strong>The Math:</strong> You lose 2-7% purchasing power annually</div>
                <div><strong>The Reality:</strong> Saving money = guaranteed poverty</div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">📈 "Just Buy Index Funds"</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>The Problem:</strong> Stock valuations at historic highs, low future returns expected</div>
                <div><strong>The Math:</strong> P/E ratios suggest 2-4% real returns for next decade</div>
                <div><strong>The Reality:</strong> May not beat inflation consistently</div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">🏠 "Real Estate is Safe"</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>The Problem:</strong> House prices 7x median income vs historical 3x</div>
                <div><strong>The Math:</strong> Need $150k+ income for median home in most cities</div>
                <div><strong>The Reality:</strong> Priced out of the market entirely</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
            <p className="text-yellow-300 text-sm">
              <strong>The Truth:</strong> Traditional advice worked when the dollar was backed by gold and debt levels were reasonable. In today's fiat system, you need to think differently about money and wealth preservation.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Bitcoin: Your Financial Life Raft</h2>
          <p className="text-gray-300 mb-4">
            Bitcoin isn't just another investment - it's a completely different monetary system designed to protect you from the wealth transfer happening right now.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-blue-400 mb-4">Bitcoin vs Housing: The Real Story</h3>
            <p className="text-gray-300 text-sm mb-4">
              While houses became unaffordable in dollar terms, something amazing happened when measured in Bitcoin:
            </p>
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                src="https://www.youtube.com/embed/IlsIYfZQ2pk"
                title="Bitcoin vs Housing Price Inflation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 md:h-80 rounded-lg"
              ></iframe>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
              <p className="text-green-300 text-sm">
                <strong>This is the power of sound money.</strong> While dollars lost purchasing power, Bitcoin gained it. 
                Houses didn't get more expensive - dollars got weaker. Bitcoin holders could afford more housing, not less.
              </p>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-green-400 mb-4">How Bitcoin Protects You</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">🛡️</span>
                <div>
                  <strong className="text-white">Fixed Supply Protection:</strong>
                  <p className="text-gray-300 text-sm">Only 21 million Bitcoin will ever exist - no one can print more to dilute your share</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">🌍</span>
                <div>
                  <strong className="text-white">Global Access:</strong>
                  <p className="text-gray-300 text-sm">Works anywhere in the world, no bank required, no one can freeze your account</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">⚡</span>
                <div>
                  <strong className="text-white">Democratic Money:</strong>
                  <p className="text-gray-300 text-sm">Everyone gets access to the same monetary system, no preferential treatment</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">🕰️</span>
                <div>
                  <strong className="text-white">Store of Value:</strong>
                  <p className="text-gray-300 text-sm">Designed to preserve purchasing power over time, not lose it</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Bitcoin vs Inflation: The Numbers</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-orange-400 font-bold mb-2">Traditional Savings (2020-2024)</h4>
                <div className="text-gray-300 text-sm space-y-1">
                  <div>• Savings account: 0.5% annual return</div>
                  <div>• Cumulative inflation: ~25%</div>
                  <div>• Real purchasing power: <span className="text-red-400 font-bold">-24.5%</span></div>
                  <div>• $10,000 → <span className="text-red-400">$7,550 buying power</span></div>
                </div>
              </div>
              <div>
                <h4 className="text-green-400 font-bold mb-2">Bitcoin Holders (2020-2024)</h4>
                <div className="text-gray-300 text-sm space-y-1">
                  <div>• Bitcoin: ~400% total return</div>
                  <div>• Cumulative inflation: ~25%</div>
                  <div>• Real purchasing power: <span className="text-green-400 font-bold">+375%</span></div>
                  <div>• $10,000 → <span className="text-green-400">$50,000 buying power</span></div>
                </div>
              </div>
            </div>
            <p className="text-yellow-300 text-sm mt-4">
              <strong>Note:</strong> Past performance doesn't guarantee future results, but Bitcoin's track record of preserving purchasing power over 4-year cycles is remarkable.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Generational Divide</h2>
          <p className="text-gray-300 mb-4">
            Your parents could buy a house on one income and retire with a pension. That world is gone. Here's what changed and why Bitcoin matters for your generation:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">📅 Your Parents' Generation (1970s-1990s)</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Houses:</strong> 3x median income</li>
                <li>• <strong>College:</strong> Could work part-time to pay tuition</li>
                <li>• <strong>Savings:</strong> CDs paid 5-15% interest</li>
                <li>• <strong>Jobs:</strong> Company pensions and benefits</li>
                <li>• <strong>Money:</strong> Backed by gold until 1971</li>
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">📱 Your Generation (2000s-2020s)</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Houses:</strong> 7x median income</li>
                <li>• <strong>College:</strong> $100k+ in student debt</li>
                <li>• <strong>Savings:</strong> 0.5% in savings accounts</li>
                <li>• <strong>Jobs:</strong> Gig economy, no pension</li>
                <li>• <strong>Money:</strong> Pure fiat, infinite printing</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-bold text-orange-400 mb-2">🎯 Why This Happened</h3>
            <p className="text-gray-300 text-sm mb-3">
              In 1971, President Nixon removed the dollar from the gold standard. This allowed unlimited money printing, which benefits asset owners (older generations) at the expense of wage earners (younger generations).
            </p>
            <div className="bg-gray-800/50 border border-gray-700 rounded p-3">
              <p className="text-yellow-300 text-sm">
                <strong>The Result:</strong> A monetary system that systematically transfers wealth from the young to the old, from the poor to the rich, from savers to debtors.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Real Stories: How Bitcoin Changes Lives</h2>
          <p className="text-gray-300 mb-4">
            These aren't get-rich-quick stories. They're examples of people who recognized the monetary reality and acted accordingly:
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">👨‍🎓 The Teacher (started 2020)</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>Situation:</strong> $40k teacher salary, couldn't afford house down payment</div>
                <div><strong>Action:</strong> DCA'd $200/month into Bitcoin instead of savings account</div>
                <div><strong>Result:</strong> Saved enough for house down payment by 2024</div>
                <div><strong>Lesson:</strong> Bitcoin as forced savings that keeps pace with asset inflation</div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">👩‍⚕️ The Nurse (started 2019)</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>Situation:</strong> Immigrated to US, couldn't access traditional investments</div>
                <div><strong>Action:</strong> Bought Bitcoin with overtime pay</div>
                <div><strong>Result:</strong> Preserved wealth despite currency volatility in home country</div>
                <div><strong>Lesson:</strong> Bitcoin as borderless, permissionless wealth preservation</div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">👨‍💻 The Developer (started 2021)</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>Situation:</strong> Good income but worried about inflation</div>
                <div><strong>Action:</strong> Converted 25% of savings to Bitcoin</div>
                <div><strong>Result:</strong> Maintained purchasing power during high inflation period</div>
                <div><strong>Lesson:</strong> Bitcoin as inflation hedge for high earners</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Cost of Waiting</h2>
          <p className="text-gray-300 mb-4">
            The biggest risk isn't Bitcoin's volatility - it's the certainty of continued purchasing power erosion if you do nothing.
          </p>

          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-red-400 mb-4">What Happens If You Wait</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">📉</span>
                <div>
                  <strong className="text-white">Your savings continue losing value:</strong>
                  <p className="text-gray-300 text-sm">3-8% annually to inflation, guaranteed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">🏠</span>
                <div>
                  <strong className="text-white">Asset prices keep rising:</strong>
                  <p className="text-gray-300 text-sm">Houses, stocks become even more expensive</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">⏰</span>
                <div>
                  <strong className="text-white">Time works against you:</strong>
                  <p className="text-gray-300 text-sm">Every year makes it harder to catch up</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">🎯</span>
                <div>
                  <strong className="text-white">Bitcoin becomes more expensive:</strong>
                  <p className="text-gray-300 text-sm">As adoption grows, price typically increases over 4-year cycles</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-bold text-green-400 mb-2">🚀 What Happens If You Act</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Inflation protection:</strong> Bitcoin has outpaced inflation over every 4-year period</li>
              <li>• <strong>Optionality:</strong> Gives you choices your savings account can't</li>
              <li>• <strong>Learning:</strong> Understanding Bitcoin teaches you about money and economics</li>
              <li>• <strong>Peace of mind:</strong> You're taking action instead of hoping things improve</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Your Next Steps</h2>
          <p className="text-gray-300 mb-4">
            Understanding the problem is the first step. Taking action is what separates those who preserve their wealth from those who lose it.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">1️⃣</span>
              <div>
                <strong className="text-white">Start small and learn</strong>
                <p className="text-gray-300 text-sm">Begin with $25-100 to understand how Bitcoin works</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">2️⃣</span>
              <div>
                <strong className="text-white">Set up Dollar Cost Averaging</strong>
                <p className="text-gray-300 text-sm">Automate weekly purchases to remove emotion and timing stress</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">3️⃣</span>
              <div>
                <strong className="text-white">Learn proper security</strong>
                <p className="text-gray-300 text-sm">Understand wallets, private keys, and self-custody</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">4️⃣</span>
              <div>
                <strong className="text-white">Think long-term</strong>
                <p className="text-gray-300 text-sm">Bitcoin is a 4+ year strategy, not a get-rich-quick scheme</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mt-6">
            <p className="text-orange-300 text-sm">
              <strong>Remember:</strong> You don't need to buy a whole Bitcoin. You can start with any amount. The important thing is to start learning and taking action while you still can.
            </p>
          </div>
        </section>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
          <h3 className="text-lg font-bold text-white mb-2">This is Your Generation's Fighting Chance</h3>
          <p className="text-gray-300 text-sm">
            Bitcoin isn't just about technology or investment returns. It's about opting out of a monetary system that systematically transfers wealth from your generation to asset owners. The question isn't whether you can afford to buy Bitcoin - it's whether you can afford not to. Your future self is counting on the decisions you make today.
          </p>
        </div>
      </div>
    </GuideLayout>
  );
};

export default WhyBitcoinMattersNow;