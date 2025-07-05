import { useState } from 'react';
import GuideLayout from '../../components/Guides/GuideLayout';

const TimePreference = () => {
  const [savingsCalculator, setSavingsCalculator] = useState({
    monthlyAmount: 500,
    years: 10,
    inflationRate: 3.5,
    bitcoinAnnualReturn: 45 // Conservative historical average
  });

  const calculateSavings = () => {
    const months = savingsCalculator.years * 12;
    const monthlyInflation = savingsCalculator.inflationRate / 100 / 12;
    const monthlyBitcoinReturn = savingsCalculator.bitcoinAnnualReturn / 100 / 12;
    
    // Dollar savings with inflation
    let dollarValue = 0;
    let realValue = 0;
    for (let i = 0; i < months; i++) {
      dollarValue += savingsCalculator.monthlyAmount;
      realValue += savingsCalculator.monthlyAmount / Math.pow(1 + monthlyInflation, i);
    }
    
    // Bitcoin savings with growth
    let bitcoinValue = 0;
    for (let i = 0; i < months; i++) {
      bitcoinValue += savingsCalculator.monthlyAmount * Math.pow(1 + monthlyBitcoinReturn, months - i);
    }
    
    return {
      totalContributed: (savingsCalculator.monthlyAmount * months).toFixed(0),
      dollarNominal: dollarValue.toFixed(0),
      dollarReal: realValue.toFixed(0),
      bitcoinValue: bitcoinValue.toFixed(0),
      purchasingPowerLoss: ((dollarValue - realValue) / dollarValue * 100).toFixed(1)
    };
  };

  const results = calculateSavings();

  return (
    <GuideLayout 
      title="Time Preference: Why Sound Money Makes Better People"
      description="How the type of money we use shapes human behavior and civilization"
      readTime="8 min"
      learningObjectives={[
        "Why patience predicts life success",
        "How fiat money destroys saving incentives",
        "Why Bitcoin rewards delayed gratification",
        "How money shapes entire civilizations",
        "Practical ways to lower your time preference",
        "Why this matters beyond just wealth"
      ]}
    >
      <div className="space-y-8">
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
          <p className="text-orange-300">
            Would you save $1000 or spend it today? Your answer depends more on your money than your character. Here's how the type of money we use shapes human behavior, patience, and ultimately civilization itself.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What is Time Preference?</h2>
          <p className="text-gray-300 mb-4">
            <strong className="text-orange-400">Time preference</strong> is your willingness to delay gratification for future benefit. It's the difference between eating the marshmallow now or waiting 15 minutes for two marshmallows.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
            <h3 className="text-lg font-bold text-blue-400 mb-2">The Famous Marshmallow Experiment</h3>
            <p className="text-gray-300 text-sm mb-2">
              Stanford researchers in 1972 gave 4-year-olds a simple choice: eat one marshmallow now, or wait 15 minutes and get two.
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Only 1/3 of kids managed to wait</li>
              <li>• 14 years later: "waiters" scored 210 points higher on SATs</li>
              <li>• 30+ years later: better careers, health, relationships, lower addiction rates</li>
              <li>• <strong className="text-orange-400">One simple test predicted lifetime success</strong></li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">High Time Preference</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Want immediate gratification</li>
                <li>• Discount future heavily</li>
                <li>• Consume rather than save</li>
                <li>• Short-term thinking dominates</li>
                <li>• "Live for today" mentality</li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">Low Time Preference</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Willing to delay gratification</li>
                <li>• Invest in the future</li>
                <li>• Save and build wealth</li>
                <li>• Long-term planning</li>
                <li>• "Build for tomorrow" mindset</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 mt-4">
            The big question: <strong className="text-orange-400">What makes some people more patient than others?</strong> The answer isn't just individual willpower - it's the money itself.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How Fiat Money Destroys Patience</h2>
          <p className="text-gray-300 mb-4">
            When your money loses value while you wait, <strong className="text-orange-400">saving becomes irrational</strong>. Fiat currency systems actively punish patience and reward immediate spending.
          </p>

          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">The Inflation Trap</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Your $1000 today buys less next year due to inflation</li>
                <li>• Governments devalue currency through money printing</li>
                <li>• Savings accounts pay less than inflation rate</li>
                <li>• <strong>Logical response: spend now before money loses more value</strong></li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">"Spend Now" Culture</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Low interest rates make borrowing cheap</li>
                <li>• Credit cards enable instant gratification</li>
                <li>• Government stimulus encourages consumption</li>
                <li>• Consumer spending treated as economic virtue</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">Real-World Example</h3>
              <p className="text-gray-300 text-sm">
                Your grandparents' generation saved 20%+ of their income during the gold standard era. 
                Today's Americans save less than 5%. <strong className="text-orange-400">Same people, different money, different behavior.</strong>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How Sound Money Rewards Patience</h2>
          <p className="text-gray-300 mb-4">
            When money holds or increases its value over time, <strong className="text-orange-400">saving becomes the rational choice</strong>. Sound money aligns incentives with virtue.
          </p>

          <div className="space-y-4">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">Purchasing Power Preservation</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Your money buys more (or at least the same) in the future</li>
                <li>• No central authority can devalue your savings</li>
                <li>• Time becomes your ally, not your enemy</li>
                <li>• Delayed gratification gets rewarded automatically</li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">The Gold Standard Era (1879-1971)</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Americans saved 20-25% of income regularly</li>
                <li>• Massive infrastructure projects spanning decades</li>
                <li>• Long-term business planning and investment</li>
                <li>• Cultural emphasis on thrift and prudence</li>
              </ul>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-orange-400 mb-2">Bitcoin's Return to Soundness</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Fixed supply of 21 million coins - no inflation</li>
                <li>• HODLing culture celebrates patience and long-term thinking</li>
                <li>• Early adopters rewarded for delayed gratification</li>
                <li>• Digital gold that appreciates over time</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Civilizational Impact</h2>
          <p className="text-gray-300 mb-4">
            This isn't just about individual wealth - <strong className="text-orange-400">money shapes entire civilizations</strong>. The type of money a society uses determines whether it builds cathedrals or strip malls.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Sound Money Societies Build:</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Cathedrals and monuments lasting centuries</li>
                <li>• Educational institutions and libraries</li>
                <li>• Infrastructure for future generations</li>
                <li>• Art and culture that endures</li>
                <li>• Scientific research and innovation</li>
              </ul>
            </div>

            <div className="bg-gray-500/10 border border-gray-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-400 mb-2">Fiat Money Societies Build:</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Strip malls and disposable architecture</li>
                <li>• Short-term profit maximization</li>
                <li>• Planned obsolescence in products</li>
                <li>• Entertainment over education</li>
                <li>• Debt-financed consumption</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-6">
            <h3 className="text-lg font-bold text-blue-400 mb-2">Why This Matters</h3>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Patient capital funds progress.</strong> When people can save effectively, they invest in education, start businesses, fund research, and build for the future. When saving is punished, society becomes short-sighted and consumption-focused.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Compare Your Savings Strategy</h2>
          <p className="text-gray-300 mb-4">
            Use this calculator to see how different money types affect your ability to build wealth over time:
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Time Preference Calculator</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Monthly Savings ($)</label>
                <input
                  type="number"
                  value={savingsCalculator.monthlyAmount}
                  onChange={(e) => setSavingsCalculator({...savingsCalculator, monthlyAmount: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Time Period (years)</label>
                <input
                  type="number"
                  value={savingsCalculator.years}
                  onChange={(e) => setSavingsCalculator({...savingsCalculator, years: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Inflation Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={savingsCalculator.inflationRate}
                  onChange={(e) => setSavingsCalculator({...savingsCalculator, inflationRate: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Bitcoin Annual Return (%)</label>
                <input
                  type="number"
                  value={savingsCalculator.bitcoinAnnualReturn}
                  onChange={(e) => setSavingsCalculator({...savingsCalculator, bitcoinAnnualReturn: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                <p className="text-sm text-blue-400">Total Contributed</p>
                <p className="text-lg font-bold text-white">${results.totalContributed}</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-sm text-red-400">Dollar Savings (Real Value)</p>
                <p className="text-lg font-bold text-white">${results.dollarReal}</p>
                <p className="text-xs text-red-300">-{results.purchasingPowerLoss}% purchasing power</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                <p className="text-sm text-green-400">Bitcoin Savings</p>
                <p className="text-lg font-bold text-white">${results.bitcoinValue}</p>
                <p className="text-xs text-green-300">Rewards patience</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 mt-3">
              * Uses historical averages for illustration. Past performance doesn't guarantee future results.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Further Reading & Deep Dive</h2>
          <p className="text-gray-300 mb-4">
            This concept comes from Austrian economics and was brilliantly explained by economist Saifedean Ammous in his analysis of Bitcoin and sound money.
          </p>
          
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-bold text-white mb-2">Original Deep Dive</h3>
            <p className="text-gray-300 text-sm mb-3">
              For the complete economic theory and detailed analysis, read Saifedean's foundational article on this topic:
            </p>
            <a
              href="https://bitcointimes.io/making-time-preference-low-again/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm"
            >
              <span>📖</span>
              Making Time Preference Low Again
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Recommended Reading</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/3 p-6">
                <img
                  src="https://media.s-bol.com/7zrAyPpjNXor/k3gP6r/550x814.jpg"
                  alt="The Bitcoin Standard by Saifedean Ammous"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold text-white mb-2">The Bitcoin Standard</h3>
                <p className="text-orange-400 font-medium mb-3">by Saifedean Ammous</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  The decentralized alternative to central banking and essential guide to Bitcoin's history, properties, and future. This book explores how sound money shapes civilization and why Bitcoin represents a return to low time preference.
                </p>
                <a
                  href="https://www.amazon.com/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  <span>📚</span>
                  Get on Amazon
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Taking Action: Lowering Your Time Preference</h2>
          <p className="text-gray-300 mb-4">
            Understanding time preference is just the beginning. Here's how to practically lower yours and build a better future:
          </p>

          <div className="space-y-4">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">With Money</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Start dollar-cost averaging into Bitcoin regularly</li>
                <li>• Delete shopping apps and unsubscribe from deal emails</li>
                <li>• Use the 24-hour rule for non-essential purchases</li>
                <li>• Track net worth monthly to see progress</li>
                <li>• Automate savings so you don't have to rely on willpower</li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Beyond Money</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Career:</strong> Invest in skills that compound over time</li>
                <li>• <strong>Health:</strong> Exercise and eat well for long-term benefits</li>
                <li>• <strong>Relationships:</strong> Build deep, lasting connections</li>
                <li>• <strong>Learning:</strong> Read books instead of scrolling social media</li>
                <li>• <strong>Environment:</strong> Surround yourself with patient, long-term thinkers</li>
              </ul>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-orange-400 mb-2">Bitcoin as Training</h3>
              <p className="text-gray-300 text-sm">
                HODLing Bitcoin is like going to the gym for your time preference. Every time you resist selling during volatility, you're building your patience muscle. The Bitcoin community celebrates this virtue - find others who think long-term.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Key Takeaways</h2>
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
            <ul className="text-gray-300 space-y-2">
              <li>• Time preference determines life outcomes more than IQ or luck</li>
              <li>• Fiat money systems punish savers and reward instant gratification</li>
              <li>• Sound money like Bitcoin aligns incentives with patience and virtue</li>
              <li>• This shapes entire civilizations - patient societies build lasting things</li>
              <li>• You can train your time preference through deliberate practice</li>
              <li>• Bitcoin isn't just an investment - it's training for better decision-making</li>
            </ul>
          </div>
        </section>
      </div>
    </GuideLayout>
  );
};

export default TimePreference;