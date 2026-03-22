import React, { useState } from 'react';
import GuideLayout from '../../components/Guides/GuideLayout';

const BitcoinMining = () => {
  const [calculatorInputs, setCalculatorInputs] = useState({
    hashRate: 100,
    powerConsumption: 3000,
    electricityCost: 0.12,
    btcPrice: 43000
  });

  const calculateProfitability = () => {
    const btcPrice = calculatorInputs.btcPrice;
    const networkHashRate = 600000000; // Example in TH/s
    const blockReward = 3.125; // Current reward after 2024 halving
    const dailyBlocks = 144; // 24 hours / 10 minutes
    
    const userShare = calculatorInputs.hashRate / networkHashRate;
    const dailyBtc = userShare * blockReward * dailyBlocks;
    const dailyRevenue = dailyBtc * btcPrice;
    const dailyPowerCost = (calculatorInputs.powerConsumption / 1000) * 24 * calculatorInputs.electricityCost;
    const dailyProfit = dailyRevenue - dailyPowerCost;
    
    return {
      dailyBtc: dailyBtc.toFixed(8),
      dailyRevenue: dailyRevenue.toFixed(2),
      dailyPowerCost: dailyPowerCost.toFixed(2),
      dailyProfit: dailyProfit.toFixed(2)
    };
  };

  const profitability = calculateProfitability();

  return (
    <GuideLayout 
      title="Bitcoin Mining Explained"
      description="Understanding how Bitcoin mining secures the network and creates new Bitcoin"
      readTime="11 min"
      learningObjectives={[
        "What Bitcoin mining actually does for network security",
        "How Proof-of-Work consensus mechanism works",
        "Evolution from CPU to GPU to ASIC mining",
        "Mining economics and profitability factors",
        "Energy consumption facts vs environmental myths",
        "How mining affects your transaction fees and timing"
      ]}
    >
      <div className="space-y-8">
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
          <p className="text-orange-300">
            Every Bitcoin transaction you make is secured by thousands of computers around the world competing to solve mathematical puzzles. This process, called mining, is the foundation of Bitcoin's security and how new Bitcoin enters circulation.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What is Bitcoin Mining?</h2>
          <p className="text-gray-300 mb-4">
            Bitcoin mining isn't about digging for digital gold - it's about <strong className="text-orange-400">securing the network</strong> and validating transactions. Think of miners as digital security guards who verify every transaction and compete to create new blocks.
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">What Miners Actually Do</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">🔍</span>
                <div>
                  <strong className="text-white">Verify transactions:</strong> <span className="text-gray-300">Check that Bitcoin transfers are valid and not double-spent</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">🧩</span>
                <div>
                  <strong className="text-white">Solve puzzles:</strong> <span className="text-gray-300">Compete to find the correct nonce for the next block</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">📦</span>
                <div>
                  <strong className="text-white">Create blocks:</strong> <span className="text-gray-300">Package transactions into blocks every ~10 minutes</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">💰</span>
                <div>
                  <strong className="text-white">Earn rewards:</strong> <span className="text-gray-300">Receive new Bitcoin + transaction fees for successful blocks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Proof-of-Work: The Security Foundation</h2>
          <p className="text-gray-300 mb-4">
            Bitcoin uses <strong className="text-orange-400">Proof-of-Work</strong> to secure the network. This means miners must expend real energy to participate, making attacks extremely expensive.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
            <h3 className="text-lg font-bold text-blue-400 mb-2">How Proof-of-Work Works</h3>
            <ol className="text-gray-300 space-y-2">
              <li>1. Miners collect pending transactions from the mempool</li>
              <li>2. They create a block with these transactions</li>
              <li>3. They try billions of different nonces (random numbers)</li>
              <li>4. The first to find a hash below the target wins</li>
              <li>5. Other miners verify the solution and accept the block</li>
            </ol>
          </div>

          <p className="text-gray-300">
            This process requires significant computational power and electricity, but that's the point - it makes the network incredibly secure. To attack Bitcoin, you'd need to control 51% of the network's computing power, which would cost billions of dollars.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Mining Hardware Evolution</h2>
          <p className="text-gray-300 mb-4">
            Bitcoin mining has evolved from hobby activity to industrial-scale operations as the hardware became more specialized.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">2009-2010</h3>
              <p className="text-sm text-gray-300 mb-2"><strong>CPU Mining</strong></p>
              <p className="text-xs text-gray-400">Anyone could mine Bitcoin using their computer's processor. Satoshi mined the first blocks this way.</p>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">2010-2012</h3>
              <p className="text-sm text-gray-300 mb-2"><strong>GPU Mining</strong></p>
              <p className="text-xs text-gray-400">Graphics cards proved much more efficient, leading to the first mining farms.</p>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-purple-400 mb-2">2012-2013</h3>
              <p className="text-sm text-gray-300 mb-2"><strong>FPGA Mining</strong></p>
              <p className="text-xs text-gray-400">Field-programmable gate arrays offered better efficiency than GPUs.</p>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-orange-400 mb-2">2013-Present</h3>
              <p className="text-sm text-gray-300 mb-2"><strong>ASIC Mining</strong></p>
              <p className="text-xs text-gray-400">Application-specific integrated circuits built solely for Bitcoin mining.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Mining Economics & Profitability</h2>
          <p className="text-gray-300 mb-4">
            Mining profitability depends on several factors. Use this calculator to understand the economics:
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Mining Profitability Calculator</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Hash Rate (TH/s)</label>
                <input
                  type="number"
                  value={calculatorInputs.hashRate}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, hashRate: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Power Consumption (W)</label>
                <input
                  type="number"
                  value={calculatorInputs.powerConsumption}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, powerConsumption: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Electricity Cost ($/kWh)</label>
                <input
                  type="number"
                  step="0.01"
                  value={calculatorInputs.electricityCost}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, electricityCost: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Bitcoin Price ($)</label>
                <input
                  type="number"
                  value={calculatorInputs.btcPrice}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, btcPrice: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 mt-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                <p className="text-sm text-blue-400">Daily BTC</p>
                <p className="text-lg font-bold text-white">{profitability.dailyBtc}</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                <p className="text-sm text-green-400">Daily Revenue</p>
                <p className="text-lg font-bold text-white">${profitability.dailyRevenue}</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-sm text-red-400">Daily Power Cost</p>
                <p className="text-lg font-bold text-white">${profitability.dailyPowerCost}</p>
              </div>
              <div className={`${parseFloat(profitability.dailyProfit) > 0 ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'} rounded-lg p-3`}>
                <p className={`text-sm ${parseFloat(profitability.dailyProfit) > 0 ? 'text-green-400' : 'text-red-400'}`}>Daily Profit</p>
                <p className="text-lg font-bold text-white">${profitability.dailyProfit}</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 mt-3">
              * This is a simplified calculation for educational purposes. Real mining involves additional costs like hardware depreciation, cooling, and maintenance.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Mining Pools vs Solo Mining</h2>
          <p className="text-gray-300 mb-4">
            Individual miners rarely find blocks alone due to the massive competition. Most join mining pools for steady income.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">Mining Pools</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Steady income:</strong> Regular payouts based on contribution</li>
                <li>• <strong>Lower variance:</strong> More predictable earnings</li>
                <li>• <strong>Pool fees:</strong> Typically 1-3% of rewards</li>
                <li>• <strong>Easier setup:</strong> Less technical knowledge required</li>
              </ul>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-orange-400 mb-2">Solo Mining</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Full rewards:</strong> Keep entire block reward when you win</li>
                <li>• <strong>High variance:</strong> Might not find blocks for months</li>
                <li>• <strong>No pool fees:</strong> Keep 100% of rewards</li>
                <li>• <strong>Technical setup:</strong> Requires running full node</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Energy Consumption: Facts vs Fiction</h2>
          <p className="text-gray-300 mb-4">
            Bitcoin mining's energy use is often misunderstood. Let's examine the facts and put it in perspective.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-bold text-blue-400 mb-2">Real-World Success Stories</h3>
            <p className="text-gray-300 mb-3">
              Countries and organizations worldwide are using Bitcoin mining to monetize renewable energy and create sustainable revenue streams:
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <strong className="text-white">Bhutan:</strong> <a href="https://www.aljazeera.com/economy/2025/4/14/bitcoin-king-why-is-bhutan-betting-on-crypto" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">Mining Bitcoin with hydroelectric power</a> as a sovereign wealth strategy</li>
              <li>• <strong className="text-white">El Salvador:</strong> Using volcanic geothermal energy to power Bitcoin mining operations</li>
              <li>• <strong className="text-white">Norway:</strong> Leveraging excess hydroelectric capacity for sustainable mining</li>
              <li>• <strong className="text-white">Texas:</strong> Providing grid stability services while mining with renewable energy</li>
            </ul>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-4">
            <h3 className="text-lg font-bold text-blue-400 mb-2">Energy Consumption in Context</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Bitcoin Network:</span>
                <span className="text-orange-400">~150 TWh/year</span>
              </div>
              <div className="flex justify-between">
                <span>Traditional Banking:</span>
                <span className="text-gray-400">~260 TWh/year</span>
              </div>
              <div className="flex justify-between">
                <span>Global Data Centers:</span>
                <span className="text-gray-400">~200 TWh/year</span>
              </div>
              <div className="flex justify-between">
                <span>Gaming Industry:</span>
                <span className="text-gray-400">~75 TWh/year</span>
              </div>
              <div className="flex justify-between">
                <span>Christmas Lights (US):</span>
                <span className="text-gray-400">~6.6 TWh/year</span>
              </div>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <h3 className="text-lg font-bold text-green-400 mb-2">Sustainability Initiatives</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>59% renewable energy:</strong> Bitcoin Mining Council 2023 report</li>
              <li>• <strong>Stranded energy:</strong> Mining utilizes otherwise wasted energy</li>
              <li>• <strong>Grid stabilization:</strong> Flexible demand helps balance renewable grids</li>
              <li>• <strong>Heat recovery:</strong> Mining heat used for buildings, greenhouses</li>
              <li>• <strong>Climate action:</strong> <a href="https://batcoinz.com/why-climate-action-doesnt-just-benefit-from-bitcoin-mining-it-requires-it/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">Bitcoin mining accelerates renewable energy adoption</a></li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How Mining Affects You as a Bitcoin User</h2>
          <p className="text-gray-300 mb-4">
            Understanding mining helps you make better decisions about transaction fees and timing.
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">Practical Implications</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">⚡</span>
                <div>
                  <strong className="text-white">Transaction fees:</strong> <span className="text-gray-300">Higher fees = faster confirmation during busy periods</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">🔒</span>
                <div>
                  <strong className="text-white">Security:</strong> <span className="text-gray-300">More miners = more secure network for your transactions</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">⏱️</span>
                <div>
                  <strong className="text-white">Confirmation times:</strong> <span className="text-gray-300">Difficulty adjusts to maintain ~10 minute blocks</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">📊</span>
                <div>
                  <strong className="text-white">Network health:</strong> <span className="text-gray-300">Monitor hashrate and <a href="https://mempool.space/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">mempool</a> for optimal timing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Future of Bitcoin Mining</h2>
          <p className="text-gray-300 mb-4">
            Mining continues to evolve with new technologies and business models emerging globally.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Technology Trends</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• More efficient ASIC chips</li>
                <li>• Immersion cooling systems</li>
                <li>• Renewable energy integration</li>
                <li>• Heat recovery innovations</li>
              </ul>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Industry Evolution</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Public mining companies</li>
                <li>• Institutional investment</li>
                <li>• Regulatory clarity</li>
                <li>• ESG compliance focus</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Recommended Reading</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/3 p-6">
                <img
                  src="https://store.bitcoinmagazine.com/cdn/shop/files/2.8.24BCMA_V2_Revision.jpg?v=1707413613"
                  alt="Bitcoin Miner's Almanac by Robert Warren"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Bitcoin Miner's Almanac</h3>
                <p className="text-orange-400 font-medium mb-3">by Robert Warren</p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Where code meets business - the ultimate introduction to Bitcoin mining industry. This comprehensive guide covers everything from the technical fundamentals to building and operating mining businesses.
                </p>
                <a
                  href="https://www.amazon.com/Bitcoin-Miners-Almanac-Business-Everything/dp/B0D6QZ2QK2"
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
          <h2 className="text-2xl font-bold text-white mb-4">Key Takeaways</h2>
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
            <ul className="text-gray-300 space-y-2">
              <li>• Mining secures Bitcoin by making attacks extremely expensive</li>
              <li>• Proof-of-Work consensus ensures network decentralization</li>
              <li>• Energy consumption enables Bitcoin's unique security properties</li>
              <li>• Mining economics self-regulate through difficulty adjustments</li>
              <li>• Understanding mining helps optimize your transaction timing and fees</li>
              <li>• Bitcoin mining accelerates renewable energy adoption globally</li>
            </ul>
          </div>
        </section>
      </div>
    </GuideLayout>
  );
};

export default BitcoinMining;