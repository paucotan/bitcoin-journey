import React, { useState } from 'react';
import GuideLayout from '../../components/Guides/GuideLayout';

const BitcoinFees = () => {
  const [transactionSize, setTransactionSize] = useState(250);
  const [feeRate, setFeeRate] = useState(20);
  
  const calculateFee = () => {
    return Math.round((transactionSize * feeRate) / 100000000 * 100000000) / 100000000;
  };

  const getFeeUSD = () => {
    const btcPrice = 45000; // Approximation for demo
    return (calculateFee() * btcPrice).toFixed(2);
  };

  const feeExamples = [
    { priority: 'Low Priority', satVb: '1-5', time: '2-24 hours', color: 'green', description: 'For non-urgent transactions' },
    { priority: 'Medium Priority', satVb: '10-20', time: '10-60 minutes', color: 'blue', description: 'Standard transactions' },
    { priority: 'High Priority', satVb: '50+', time: '10-20 minutes', color: 'orange', description: 'Urgent transactions' },
    { priority: 'Emergency', satVb: '100+', time: '1-10 minutes', color: 'red', description: 'Critical transactions only' }
  ];

  return (
    <GuideLayout 
      title="Understanding Bitcoin Fees"
      description="Mempool, priority, and fee estimation strategies"
      readTime="6 min"
      learningObjectives={[
        "How Bitcoin transaction fees actually work",
        "What the mempool is and why it matters",
        "How to estimate fees for different priority levels",
        "When to use Lightning vs on-chain transactions",
        "Fee optimization strategies to save money",
        "Tools and resources for monitoring network fees"
      ]}
    >
      <div className="space-y-8">
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <p className="text-blue-300">
            Bitcoin fees aren't fixed - they're determined by network demand and transaction priority. Understanding fees helps you save money and ensure timely transactions.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What Are Bitcoin Fees?</h2>
          <p className="text-gray-300 mb-4">
            Think of Bitcoin fees like shipping costs - you pay more for faster delivery. Here's what makes Bitcoin fees unique:
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">Simple Analogies</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">🚗</span>
                <div>
                  <strong className="text-white">Highway Toll:</strong> <span className="text-gray-300">Pay more during rush hour, less at night</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">📦</span>
                <div>
                  <strong className="text-white">Package Shipping:</strong> <span className="text-gray-300">Heavier packages cost more, regardless of contents</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">🏪</span>
                <div>
                  <strong className="text-white">Auction Bidding:</strong> <span className="text-gray-300">Higher bids get priority processing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-bold text-orange-400 mb-2">Why Fees Exist</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Pay miners:</strong> Incentivize network security and transaction processing</li>
              <li>• <strong>Prevent spam:</strong> Stop people from flooding the network with junk transactions</li>
              <li>• <strong>Allocate space:</strong> Bitcoin blocks have limited space - fees ensure fair distribution</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How Bitcoin Fees Work</h2>
          <p className="text-gray-300 mb-4">
            Unlike traditional payment systems with fixed fees, Bitcoin fees are dynamic and market-based:
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Fee Fundamentals</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">⚖️</span>
                <div>
                  <strong className="text-white">Size-based pricing:</strong> <span className="text-gray-300">Fees depend on transaction size in bytes, not dollar amount</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">🏷️</span>
                <div>
                  <strong className="text-white">Sat/vB rate:</strong> <span className="text-gray-300">Fees are measured in satoshis per virtual byte</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">⏰</span>
                <div>
                  <strong className="text-white">Priority-based:</strong> <span className="text-gray-300">Higher fees get priority for faster confirmation</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">🔄</span>
                <div>
                  <strong className="text-white">Market-driven:</strong> <span className="text-gray-300">Fees fluctuate based on network demand</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Fee Calculator</h2>
          <p className="text-gray-300 mb-4">
            Estimate your transaction fees:
          </p>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-400 mb-4">Transaction Fee Estimator</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Transaction Size (bytes):</label>
                <input
                  type="range"
                  min="150"
                  max="1000"
                  value={transactionSize}
                  onChange={(e) => setTransactionSize(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-gray-300 text-sm mt-1">{transactionSize} bytes</div>
                <div className="text-gray-400 text-xs">
                  Simple: ~250 bytes, Complex: ~500+ bytes
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Fee Rate (sat/vB):</label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={feeRate}
                  onChange={(e) => setFeeRate(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-gray-300 text-sm mt-1">{feeRate} sat/vB</div>
                <div className="text-gray-400 text-xs">
                  Low: 1-5, Medium: 10-20, High: 50+
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-800/50 border border-gray-700 rounded p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">
                  {calculateFee()} BTC
                </div>
                <div className="text-gray-300 text-sm">
                  ≈ ${getFeeUSD()} USD (estimated)
                </div>
                <div className="text-gray-400 text-xs mt-1">
                  Total fee = {transactionSize} bytes × {feeRate} sat/vB = {(transactionSize * feeRate).toLocaleString()} satoshis
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Fee Priority Levels</h2>
          <p className="text-gray-300 mb-4">
            Choose the right fee level based on urgency:
          </p>

          <div className="space-y-4">
            {feeExamples.map((example, index) => (
              <div key={index} className={`bg-${example.color}-500/10 border border-${example.color}-500/20 rounded-lg p-4`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-lg font-bold text-${example.color}-400`}>{example.priority}</h3>
                  <div className="text-right">
                    <div className={`text-${example.color}-400 font-bold`}>{example.satVb} sat/vB</div>
                    <div className="text-gray-400 text-sm">{example.time}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{example.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-bold text-yellow-400 mb-2">💡 Fee Selection Strategy</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Weekend transactions:</strong> Often cheaper due to lower business activity</li>
              <li>• <strong>Plan ahead:</strong> Non-urgent transactions can save 50-80% on fees</li>
              <li>• <strong>Check mempool:</strong> High congestion = higher fees needed</li>
              <li>• <strong>Emergency reserve:</strong> Keep some funds on Lightning for urgent payments</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Understanding the Mempool</h2>
          <p className="text-gray-300 mb-4">
            The mempool is Bitcoin's waiting room - understanding it helps you time transactions:
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">How the Mempool Works</h3>
            <div className="space-y-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded p-3">
                <h4 className="text-blue-400 font-bold mb-1">1. Transaction Broadcast</h4>
                <p className="text-gray-300 text-sm">Your transaction enters the mempool (memory pool) of unconfirmed transactions</p>
              </div>
              
              <div className="bg-purple-500/10 border border-purple-500/20 rounded p-3">
                <h4 className="text-purple-400 font-bold mb-1">2. Fee-Based Queue</h4>
                <p className="text-gray-300 text-sm">Miners prioritize higher-fee transactions for inclusion in blocks</p>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                <h4 className="text-green-400 font-bold mb-1">3. Block Inclusion</h4>
                <p className="text-gray-300 text-sm">Your transaction gets confirmed when a miner includes it in a block</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-bold text-orange-400 mb-2">🚦 Mempool Congestion Signs</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-bold text-sm mb-1">Low Congestion:</h4>
                <ul className="text-gray-300 text-xs space-y-1">
                  <li>• Mempool size: &lt;5 MB</li>
                  <li>• Low priority (&lt;10 sat/vB) confirms quickly</li>
                  <li>• Weekend/overnight periods</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">High Congestion:</h4>
                <ul className="text-gray-300 text-xs space-y-1">
                  <li>• Mempool size: &gt;50 MB</li>
                  <li>• Need 50+ sat/vB for timely confirmation</li>
                  <li>• Bull market periods, exchange outflows</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Fee Optimization Strategies</h2>
          <p className="text-gray-300 mb-4">
            Advanced techniques to minimize fees:
          </p>

          <div className="space-y-4">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">💰 UTXO Management</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Consolidate UTXOs:</strong> Combine small amounts during low-fee periods</li>
                <li>• <strong>Avoid dust:</strong> Very small UTXOs cost more to spend than they're worth</li>
                <li>• <strong>Plan withdrawals:</strong> Fewer, larger withdrawals vs many small ones</li>
                <li>• <strong>Strike's priority feature:</strong> Choose low/medium/high priority when withdrawing to save on fees</li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">🔧 Advanced Features</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Replace-by-Fee (RBF):</strong> Increase fee if transaction is stuck</li>
                <li>• <strong>Child-Pays-for-Parent (CPFP):</strong> Accelerate by spending unconfirmed output</li>
                <li>• <strong>Batching:</strong> Send to multiple recipients in one transaction</li>
              </ul>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-purple-400 mb-2">⏰ Timing Strategies</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Weekend advantage:</strong> 20-50% lower fees on weekends</li>
                <li>• <strong>Time zone awareness:</strong> Lower fees during US/EU night hours</li>
                <li>• <strong>Market cycle timing:</strong> Bear markets = lower fees</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Lightning Network vs On-Chain</h2>
          <p className="text-gray-300 mb-4">
            Understanding when to use each payment method:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">⚡ Lightning Network</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div><strong>Fees:</strong> $0.001 - $0.01 (nearly free)</div>
                <div><strong>Speed:</strong> Instant (sub-second)</div>
                <div><strong>Best for:</strong> Daily payments, tips, small amounts</div>
                <div><strong>Limits:</strong> Channel capacity, online requirement</div>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-orange-400 mb-2">🔗 On-Chain Bitcoin</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div><strong>Fees:</strong> $1 - $50+ (variable)</div>
                <div><strong>Speed:</strong> 10 minutes - hours</div>
                <div><strong>Best for:</strong> Large amounts, final settlement</div>
                <div><strong>Benefits:</strong> Maximum security, permanence</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-bold text-white mb-2">Decision Framework</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <div>• <strong>&lt;$100:</strong> Lightning Network (if available)</div>
              <div>• <strong>$100-$1000:</strong> Consider urgency and fees</div>
              <div>• <strong>&gt;$1000:</strong> On-chain for security</div>
              <div>• <strong>Savings/Long-term:</strong> Always on-chain</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Fee Estimation Tools</h2>
          <p className="text-gray-300 mb-4">
            Essential tools for checking current fee rates:
          </p>

          <div className="space-y-4">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">🔍 Popular Fee Estimators</h3>
              
              <div className="space-y-3">
                <div className="bg-gray-800/50 border border-gray-700 rounded p-3">
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-white">Mempool.space</strong>
                    <span className="text-green-400 text-sm">Most comprehensive</span>
                  </div>
                  <div className="text-gray-300 text-sm">
                    Real-time mempool analysis, fee estimation, transaction tracking
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded p-3">
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-white">BitcoinFees.earn.com</strong>
                    <span className="text-blue-400 text-sm">Simple & clean</span>
                  </div>
                  <div className="text-gray-300 text-sm">
                    Easy-to-read fee recommendations for different confirmation times
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 rounded p-3">
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-white">Wallet Integration</strong>
                    <span className="text-purple-400 text-sm">Most convenient</span>
                  </div>
                  <div className="text-gray-300 text-sm">
                    Most modern wallets include built-in fee estimation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Common Fee Mistakes</h2>
          <p className="text-gray-300 mb-4">
            Avoid these expensive errors:
          </p>

          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">🚨 Expensive Mistakes</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Panic overpaying:</strong> Using emergency fees when not needed</li>
                <li>• <strong>Not checking mempool:</strong> Missing low-fee opportunities</li>
                <li>• <strong>Dust creation:</strong> Creating UTXOs too small to spend profitably</li>
                <li>• <strong>Poor timing:</strong> Transacting during known high-congestion periods</li>
                <li>• <strong>Ignoring Lightning:</strong> Paying high on-chain fees for small amounts</li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">✅ Best Practices</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Plan ahead:</strong> Non-urgent transactions can wait for lower fees</li>
                <li>• <strong>Use Lightning:</strong> For payments under $100</li>
                <li>• <strong>Consolidate wisely:</strong> Combine small UTXOs during low-fee periods</li>
                <li>• <strong>Monitor trends:</strong> Learn your local low-fee times</li>
                <li>• <strong>Emergency fund:</strong> Keep some funds on Lightning for urgent needs</li>
                <li>• <strong>Strike advantage:</strong> Rare priority selection feature lets you optimize fees on withdrawals</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Master the Mempool</h3>
          <p className="text-gray-300 text-sm">
            Bitcoin fees are predictable once you understand the mempool dynamics. By timing your transactions, using the right payment layer (Lightning vs on-chain), and managing your UTXOs, you can dramatically reduce your Bitcoin transaction costs while maintaining the security and sovereignty that makes Bitcoin special.
          </p>
        </div>
      </div>
    </GuideLayout>
  );
};

export default BitcoinFees;