import React, { useState } from 'react';
import GuideLayout from '../../components/Guides/GuideLayout';

const BitcoinCommonMistakes = () => {
  const [selectedCategory, setSelectedCategory] = useState('security');

  const mistakeCategories = {
    security: 'Security Mistakes',
    investment: 'Investment Mistakes',
    technical: 'Technical Mistakes',
    scams: 'Scams & Red Flags'
  };

  return (
    <GuideLayout 
      title="Bitcoin for Beginners: Common Mistakes"
      description="Learn from others' costly errors to protect your Bitcoin"
      readTime="7 min"
    >
      <div className="space-y-8">
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
          <p className="text-red-300">
            Bitcoin mistakes can be expensive and irreversible. This guide covers the most common (and costly) errors beginners make, so you can avoid them and protect your hard-earned money.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Choose Your Protection</h2>
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {Object.entries(mistakeCategories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === key
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {selectedCategory === 'security' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Security Mistakes That Cost Money</h2>
              <p className="text-gray-300 mb-6">
                These security errors have cost people millions in lost Bitcoin. Learn from their mistakes.
              </p>

              <div className="space-y-6">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">🏦</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Leaving Bitcoin on Exchanges Long-Term</h3>
                      <p className="text-gray-400 text-sm">Cost: Billions lost in exchange hacks</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Mistake</h4>
                      <p className="text-gray-300 text-sm">
                        Buying Bitcoin on Coinbase, Binance, or other exchanges and leaving it there "for convenience." 
                        Treating exchanges like banks for long-term storage.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Why It's Dangerous</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Exchange hacks:</strong> Mt. Gox, FTX, and dozens of others</li>
                        <li>• <strong>Account freezing:</strong> Your access can be blocked anytime</li>
                        <li>• <strong>Not your keys:</strong> Exchange controls your Bitcoin, not you</li>
                        <li>• <strong>Bankruptcy risk:</strong> Exchange goes under, your Bitcoin disappears</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Fix</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Withdraw to your own wallet:</strong> Buy on exchange, immediately withdraw to your personal wallet. 
                          Only keep small amounts on exchanges for active trading.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Real Example</h4>
                      <div className="bg-gray-800/50 border border-gray-700 rounded p-3">
                        <p className="text-yellow-300 text-sm">
                          <strong>FTX Collapse (2022):</strong> Users lost $8+ billion when FTX exchange went bankrupt overnight. 
                          People who withdrew to personal wallets were safe. Those who left funds on exchange lost everything.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">☁️</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Storing Seed Phrases Digitally</h3>
                      <p className="text-gray-400 text-sm">Cost: Hundreds of millions in stolen Bitcoin</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Mistake</h4>
                      <p className="text-gray-300 text-sm">
                        Taking photos of seed phrases, storing them in iCloud/Google Drive, or saving them in password managers, 
                        email drafts, or digital notes.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Why It's Dangerous</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Cloud hacks:</strong> Your cloud storage gets breached</li>
                        <li>• <strong>Device theft:</strong> Someone steals your phone/computer</li>
                        <li>• <strong>Malware:</strong> Viruses search for seed phrases</li>
                        <li>• <strong>Accidental sharing:</strong> Photos auto-sync to family accounts</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Fix</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Physical storage only:</strong> Write seed phrases on paper or metal. Store in secure, 
                          offline locations. Never store digitally, even temporarily.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Real Example</h4>
                      <div className="bg-gray-800/50 border border-gray-700 rounded p-3">
                        <p className="text-yellow-300 text-sm">
                          <strong>iPhone Photo Hack:</strong> User stored seed phrase photo in iCloud. Phone was stolen, 
                          thief accessed iCloud backup, found seed phrase, and stole $50,000 in Bitcoin within hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">🔒</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Not Testing Wallet Recovery</h3>
                      <p className="text-gray-400 text-sm">Cost: Millions in unrecoverable Bitcoin</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Mistake</h4>
                      <p className="text-gray-300 text-sm">
                        Writing down seed phrase but never testing if it actually recovers the wallet. 
                        Assuming the backup works without verification.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Why It's Dangerous</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Writing errors:</strong> Wrong words or incorrect order</li>
                        <li>• <strong>Incomplete backups:</strong> Missing words or passphrases</li>
                        <li>• <strong>Wallet incompatibility:</strong> Seed phrase doesn't work with recovery wallet</li>
                        <li>• <strong>False confidence:</strong> Thinking you're safe when you're not</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Fix</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Test your backup:</strong> After writing down seed phrase, restore wallet on different device 
                          to confirm it works. Do this before sending large amounts.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Safe Testing Process</h4>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded p-3">
                        <ol className="text-blue-300 text-sm space-y-1">
                          <li>1. Send small test amount to wallet ($10-50)</li>
                          <li>2. Delete wallet from device</li>
                          <li>3. Restore wallet using written seed phrase</li>
                          <li>4. Verify you can see the test amount</li>
                          <li>5. Only then send larger amounts</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">🔐</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Using Weak Passwords or No 2FA</h3>
                      <p className="text-gray-400 text-sm">Cost: Millions in account takeovers</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Mistake</h4>
                      <p className="text-gray-300 text-sm">
                        Using simple passwords like "password123" or reusing passwords across multiple sites. 
                        Not enabling two-factor authentication on exchange accounts.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Fix</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <ul className="text-green-300 text-sm space-y-1">
                          <li>• <strong>Unique passwords:</strong> Different password for every account</li>
                          <li>• <strong>Password manager:</strong> Use 1Password, Bitwarden, or similar</li>
                          <li>• <strong>2FA everywhere:</strong> Enable on all Bitcoin-related accounts</li>
                          <li>• <strong>Authenticator apps:</strong> Use Google Authenticator, not SMS</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {selectedCategory === 'investment' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Investment Mistakes That Lose Money</h2>
              <p className="text-gray-300 mb-6">
                Emotional decisions and poor timing have cost Bitcoin investors billions. Learn the psychology.
              </p>

              <div className="space-y-6">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">💸</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Investing More Than You Can Afford to Lose</h3>
                      <p className="text-gray-400 text-sm">Cost: Financial stress and forced selling</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Mistake</h4>
                      <p className="text-gray-300 text-sm">
                        Putting rent money, emergency fund, or borrowed money into Bitcoin. Investing money you need 
                        within the next 2-3 years.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Why It's Dangerous</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Forced selling:</strong> Need money during market crash</li>
                        <li>• <strong>Emotional decisions:</strong> Panic sell at worst times</li>
                        <li>• <strong>Stress and anxiety:</strong> Can't handle normal volatility</li>
                        <li>• <strong>Relationship strain:</strong> Family stress over finances</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Fix</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Safe investment approach:</strong> Keep 3-6 months expenses in cash. Only invest 
                          money you won't need for 4+ years. Start with 1-5% of income.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Safe Investment Framework</h4>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded p-3">
                        <ol className="text-blue-300 text-sm space-y-1">
                          <li>1. Build emergency fund first (3-6 months expenses)</li>
                          <li>2. Pay off high-interest debt (&gt;8%)</li>
                          <li>3. Start with 1-5% of income in Bitcoin</li>
                          <li>4. Increase gradually as you learn and earn more</li>
                          <li>5. Never invest money you need within 4 years</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">📈</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">FOMO Buying During Bull Runs</h3>
                      <p className="text-gray-400 text-sm">Cost: Buying high and selling low</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Mistake</h4>
                      <p className="text-gray-300 text-sm">
                        Seeing Bitcoin hit all-time highs on news, feeling FOMO (Fear of Missing Out), and buying 
                        large amounts at peak prices without research or strategy.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Why It's Dangerous</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Buying high:</strong> Entering at peak euphoria prices</li>
                        <li>• <strong>Emotional rollercoaster:</strong> Immediate 50%+ losses possible</li>
                        <li>• <strong>Poor timing:</strong> Market cycles often reverse after peaks</li>
                        <li>• <strong>No strategy:</strong> No plan for what to do when price drops</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Fix</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Dollar Cost Averaging:</strong> Buy fixed amounts weekly/monthly regardless of price. 
                          This averages out market volatility and removes emotional decisions.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">DCA vs FOMO Buying</h4>
                      <div className="bg-gray-800/50 border border-gray-700 rounded p-3">
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <h5 className="text-red-400 font-bold mb-1">FOMO Buyer</h5>
                            <p className="text-gray-300">Buys $10k when Bitcoin hits $60k</p>
                            <p className="text-red-300">Gets 0.167 Bitcoin</p>
                          </div>
                          <div>
                            <h5 className="text-green-400 font-bold mb-1">DCA Strategy</h5>
                            <p className="text-gray-300">Buys $500/month for 20 months</p>
                            <p className="text-green-300">Gets 0.25+ Bitcoin average</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">📉</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Panic Selling During Crashes</h3>
                      <p className="text-gray-400 text-sm">Cost: Locking in losses at worst time</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Mistake</h4>
                      <p className="text-gray-300 text-sm">
                        Watching Bitcoin drop 50-80% during bear markets and selling everything in panic, 
                        convinced it's "going to zero" and will never recover.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Why It's Dangerous</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Selling low:</strong> Locking in maximum losses</li>
                        <li>• <strong>Missing recovery:</strong> Bitcoin always rebounds stronger</li>
                        <li>• <strong>Emotional decision:</strong> Acting on fear, not logic</li>
                        <li>• <strong>Bad timing:</strong> Crashes are best buying opportunities</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Fix</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Historical perspective:</strong> Bitcoin has crashed 80%+ multiple times and always 
                          recovered to new highs. Bear markets are accumulation phases, not exits.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Bitcoin's Crash History</h4>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded p-3">
                        <div className="text-blue-300 text-sm space-y-1">
                          <div><strong>2017-2018:</strong> $20k → $3k (-85%) → $69k (+2,200%)</div>
                          <div><strong>2021-2022:</strong> $69k → $15k (-78%) → $73k (+390%)</div>
                          <div><strong>Pattern:</strong> Every crash followed by new all-time high</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">📊</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Trying to Time the Market</h3>
                      <p className="text-gray-400 text-sm">Cost: Missing gains while waiting for "perfect" entry</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Mistake</h4>
                      <p className="text-gray-300 text-sm">
                        Constantly trying to predict Bitcoin's price movements. Waiting for "the perfect dip" 
                        or trying to sell tops and buy bottoms.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Why It's Dangerous</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Analysis paralysis:</strong> Never buying while waiting for better price</li>
                        <li>• <strong>Missing big moves:</strong> Bitcoin's biggest gains happen in days</li>
                        <li>• <strong>Emotional stress:</strong> Constantly watching charts and prices</li>
                        <li>• <strong>Poor performance:</strong> Professional traders struggle to time markets</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Fix</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Time in market beats timing the market:</strong> Start buying now with DCA. 
                          Best time to buy was yesterday, second best time is today.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {selectedCategory === 'technical' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Technical Mistakes That Lose Bitcoin</h2>
              <p className="text-gray-300 mb-6">
                Simple technical errors have cost people their Bitcoin forever. Learn to avoid these pitfalls.
              </p>

              <div className="space-y-6">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">📧</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Wrong Address Copy/Paste</h3>
                      <p className="text-gray-400 text-sm">Cost: Millions in permanently lost Bitcoin</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Mistake</h4>
                      <p className="text-gray-300 text-sm">
                        Typing Bitcoin addresses manually, copying wrong addresses, or not double-checking 
                        destination addresses before sending.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Why It's Dangerous</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Irreversible transactions:</strong> No "undo" button in Bitcoin</li>
                        <li>• <strong>Wrong address types:</strong> Different formats can be incompatible</li>
                        <li>• <strong>Typos are permanent:</strong> One wrong character = lost Bitcoin</li>
                        <li>• <strong>Malware risk:</strong> Clipboard malware changes copied addresses</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Fix</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <ul className="text-green-300 text-sm space-y-1">
                          <li>• <strong>Always copy/paste:</strong> Never type addresses manually</li>
                          <li>• <strong>Double-check addresses:</strong> Verify first and last 4 characters</li>
                          <li>• <strong>Use QR codes:</strong> Scan when possible to avoid copy/paste errors</li>
                          <li>• <strong>Send test amounts:</strong> Start with $5-10 to verify address works</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Safe Sending Checklist</h4>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded p-3">
                        <ol className="text-blue-300 text-sm space-y-1">
                          <li>1. Copy recipient address carefully</li>
                          <li>2. Paste into wallet and verify first/last 4 characters</li>
                          <li>3. Send small test amount first ($5-10)</li>
                          <li>4. Wait for confirmation</li>
                          <li>5. Send remaining amount to same verified address</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Not Understanding Transaction Fees</h3>
                      <p className="text-gray-400 text-sm">Cost: Overpaying thousands in unnecessary fees</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Mistake</h4>
                      <p className="text-gray-300 text-sm">
                        Using default "fast" fees for all transactions, not understanding fee markets, 
                        or making transactions during high-congestion periods unnecessarily.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Why It's Expensive</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>High priority fees:</strong> Can be $50+ during congestion</li>
                        <li>• <strong>Wrong timing:</strong> Weekday business hours cost more</li>
                        <li>• <strong>Inefficient UTXOs:</strong> Multiple small inputs increase fees</li>
                        <li>• <strong>Emergency mindset:</strong> Always using fastest option</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Fix</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <ul className="text-green-300 text-sm space-y-1">
                          <li>• <strong>Check fee estimators:</strong> Use mempool.space before sending</li>
                          <li>• <strong>Choose appropriate priority:</strong> Low for non-urgent, high for urgent</li>
                          <li>• <strong>Weekend transactions:</strong> Often 50% cheaper</li>
                          <li>• <strong>Strike's advantage:</strong> Priority selection saves significant fees</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Fee Optimization Strategy</h4>
                      <div className="bg-gray-800/50 border border-gray-700 rounded p-3">
                        <div className="text-gray-300 text-sm space-y-1">
                          <div><strong>Non-urgent:</strong> Use 1-5 sat/vB, wait 6-24 hours</div>
                          <div><strong>Standard:</strong> Use 10-20 sat/vB, wait 1-6 hours</div>
                          <div><strong>Urgent only:</strong> Use 50+ sat/vB for emergencies</div>
                          <div><strong>Check timing:</strong> Weekend/night = cheaper</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">🔗</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Sending to Wrong Network</h3>
                      <p className="text-gray-400 text-sm">Cost: Thousands in unrecoverable funds</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Mistake</h4>
                      <p className="text-gray-300 text-sm">
                        Sending Bitcoin to Ethereum addresses, sending to smart contract addresses, 
                        or confusing different cryptocurrency networks.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Why It's Dangerous</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Different networks:</strong> Bitcoin and Ethereum are incompatible</li>
                        <li>• <strong>Permanent loss:</strong> Funds disappear into unreachable addresses</li>
                        <li>• <strong>Smart contracts:</strong> May not handle Bitcoin properly</li>
                        <li>• <strong>No recovery:</strong> Usually impossible to get funds back</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Fix</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <ul className="text-green-300 text-sm space-y-1">
                          <li>• <strong>Bitcoin addresses only:</strong> Start with 1, 3, or bc1</li>
                          <li>• <strong>Verify with recipient:</strong> Confirm they gave you Bitcoin address</li>
                          <li>• <strong>Test first:</strong> Always send small amount first</li>
                          <li>• <strong>Address validation:</strong> Use wallet address checker</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Address Recognition Guide</h4>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded p-3">
                        <div className="text-blue-300 text-sm space-y-1">
                          <div><strong>Bitcoin:</strong> 1..., 3..., bc1...</div>
                          <div><strong>Ethereum:</strong> 0x... (DON'T send Bitcoin here!)</div>
                          <div><strong>Other coins:</strong> Various formats (avoid!)</div>
                          <div><strong>When unsure:</strong> Ask recipient or test with $1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Using Fake Wallet Apps</h3>
                      <p className="text-gray-400 text-sm">Cost: Complete loss of all Bitcoin</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Mistake</h4>
                      <p className="text-gray-300 text-sm">
                        Downloading fake Bitcoin wallet apps from app stores that steal your Bitcoin 
                        or seed phrases. Not verifying app authenticity.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Why It's Dangerous</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Fake apps exist:</strong> Hundreds of copycat scam wallets</li>
                        <li>• <strong>Steal seed phrases:</strong> Apps send your keys to scammers</li>
                        <li>• <strong>Immediate theft:</strong> Bitcoin stolen as soon as you send to wallet</li>
                        <li>• <strong>Look legitimate:</strong> Professional-looking interfaces</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Fix</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <ul className="text-green-300 text-sm space-y-1">
                          <li>• <strong>Official sources only:</strong> Download from official websites</li>
                          <li>• <strong>Verify developers:</strong> Check official company name</li>
                          <li>• <strong>Read reviews:</strong> Look for recent complaints about theft</li>
                          <li>• <strong>Recommended wallets:</strong> Use established wallets like Strike, Muun</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Recommended Bitcoin Wallets</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <div className="text-green-300 text-sm space-y-2">
                          <div><strong>Top Choice (Custodial):</strong> Strike - Zero fees, Lightning Network, beginner-friendly</div>
                          <div><strong>Hardware (Cold Storage):</strong> Trezor - Open-source, auditable, maximum security</div>
                          <div><strong>Open-Source Mobile:</strong> Muun, Sparrow - Community-audited, self-custody</div>
                          <div className="pt-2 border-t border-gray-600">
                            <div className="text-yellow-300 text-xs">
                              <strong>Why open-source matters:</strong> Code can be audited by security experts worldwide, ensuring no hidden backdoors or vulnerabilities.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {selectedCategory === 'scams' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Scams & Red Flags</h2>
              <p className="text-gray-300 mb-6">
                Bitcoin scams are sophisticated and constantly evolving. Learn to recognize the warning signs.
              </p>

              <div className="space-y-6">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">🎁</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Fake Giveaways & Doubling Schemes</h3>
                      <p className="text-gray-400 text-sm">Cost: Millions stolen from victims</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Scam</h4>
                      <p className="text-gray-300 text-sm">
                        Fake social media accounts claiming to be celebrities (Elon Musk, etc.) promising to 
                        "double" or "multiply" any Bitcoin you send them.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Red Flags</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>"Send 1 BTC, get 2 BTC back"</strong> promises</li>
                        <li>• <strong>Celebrity endorsements</strong> on social media</li>
                        <li>• <strong>"Limited time offer"</strong> pressure tactics</li>
                        <li>• <strong>Fake testimonials</strong> and comments</li>
                        <li>• <strong>Ask you to send Bitcoin first</strong></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Reality</h4>
                      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded p-3">
                        <p className="text-yellow-300 text-sm">
                          <strong>No legitimate person or company will ask you to send Bitcoin to get more Bitcoin back.</strong> 
                          This is always a scam. Real giveaways never require you to send money first.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">🎣</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Phishing Websites & Fake Exchanges</h3>
                      <p className="text-gray-400 text-sm">Cost: Account takeovers and stolen funds</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Scam</h4>
                      <p className="text-gray-300 text-sm">
                        Fake websites that look exactly like real exchanges (Coinbase, Binance) designed 
                        to steal your login credentials and Bitcoin.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Red Flags</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Wrong URLs:</strong> coinbaase.com instead of coinbase.com</li>
                        <li>• <strong>Suspicious emails:</strong> Links to fake login pages</li>
                        <li>• <strong>Urgent warnings:</strong> "Account suspended, login now"</li>
                        <li>• <strong>Too-good-to-be-true offers:</strong> Fake trading bonuses</li>
                        <li>• <strong>Poor SSL certificates:</strong> No https or invalid certificates</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Protection</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <ul className="text-green-300 text-sm space-y-1">
                          <li>• <strong>Bookmark official sites:</strong> Never click email links</li>
                          <li>• <strong>Check URLs carefully:</strong> Look for typos in domain names</li>
                          <li>• <strong>Enable 2FA:</strong> Protect against stolen passwords</li>
                          <li>• <strong>Direct navigation:</strong> Type official URLs manually</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">💕</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Romance Scams with Bitcoin</h3>
                      <p className="text-gray-400 text-sm">Cost: Millions in emotional and financial damage</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Scam</h4>
                      <p className="text-gray-300 text-sm">
                        Fake romantic relationships built over months to gain trust, then requests for Bitcoin 
                        for "emergencies" or "investment opportunities."
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Red Flags</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Never met in person</strong> despite long relationship</li>
                        <li>• <strong>Asks for Bitcoin</strong> for emergencies or investments</li>
                        <li>• <strong>Professional photos</strong> that seem too perfect</li>
                        <li>• <strong>Avoids video calls</strong> or phone calls</li>
                        <li>• <strong>Stories don't add up</strong> over time</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Protection</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Never send Bitcoin to someone you haven't met in person.</strong> Real relationships 
                          don't require cryptocurrency transfers for emergencies or investments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">🎭</div>
                    <div>
                      <h3 className="text-xl font-bold text-red-400">Fake Support & Impersonation</h3>
                      <p className="text-gray-400 text-sm">Cost: Lost access and stolen funds</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Scam</h4>
                      <p className="text-gray-300 text-sm">
                        Scammers impersonate customer support from exchanges or wallet companies, 
                        asking for seed phrases or private keys to "help" with account issues.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Red Flags</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Asks for seed phrases</strong> or private keys</li>
                        <li>• <strong>Contacts you first</strong> about account problems</li>
                        <li>• <strong>Urgent warnings</strong> about account suspension</li>
                        <li>• <strong>Unofficial contact methods</strong> (Telegram, WhatsApp)</li>
                        <li>• <strong>Poor English</strong> or generic responses</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Protection</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <ul className="text-green-300 text-sm space-y-1">
                          <li>• <strong>Never share seed phrases:</strong> Real support never asks for them</li>
                          <li>• <strong>Contact support directly:</strong> Use official website contact methods</li>
                          <li>• <strong>Verify identity:</strong> Ask for ticket number or account details</li>
                          <li>• <strong>Be suspicious:</strong> Legitimate support follows strict protocols</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-yellow-400 mb-4">🚨 Universal Scam Warning Signs</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">NEVER Trust If They:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Ask for seed phrases or private keys</li>
                        <li>• Promise guaranteed returns</li>
                        <li>• Create urgency or pressure</li>
                        <li>• Ask you to send Bitcoin first</li>
                        <li>• Contact you unsolicited</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">ALWAYS Remember:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• If it sounds too good to be true, it is</li>
                        <li>• Real support never asks for seeds</li>
                        <li>• Take time to think and research</li>
                        <li>• Ask trusted friends for advice</li>
                        <li>• When in doubt, don't send Bitcoin</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Recovery and Prevention Framework</h2>
          <p className="text-gray-300 mb-4">
            What to do when mistakes happen and how to prevent them in the future.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">🔧 When Mistakes Happen</h3>
              <ol className="text-gray-300 text-sm space-y-1">
                <li>1. <strong>Stay calm:</strong> Panic leads to more mistakes</li>
                <li>2. <strong>Assess damage:</strong> Are funds actually lost?</li>
                <li>3. <strong>Check for solutions:</strong> RBF, CPFP, or other options</li>
                <li>4. <strong>Seek help:</strong> Ask experienced community members</li>
                <li>5. <strong>Learn and document:</strong> Understand what went wrong</li>
                <li>6. <strong>Improve security:</strong> Prevent similar future mistakes</li>
              </ol>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">✅ Prevention Habits</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Start small:</strong> Test everything with tiny amounts</li>
                <li>• <strong>Double-check everything:</strong> Addresses, amounts, fees</li>
                <li>• <strong>Use checklists:</strong> Follow the same process every time</li>
                <li>• <strong>Stay educated:</strong> Keep learning about security</li>
                <li>• <strong>Build slowly:</strong> Increase amounts as confidence grows</li>
                <li>• <strong>Ask questions:</strong> Community help prevents mistakes</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Building Bitcoin Confidence</h2>
          <p className="text-gray-300 mb-4">
            Confidence comes from knowledge and practice. Here's how to build both safely:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">1️⃣</span>
              <div>
                <strong className="text-white">Start with education</strong>
                <p className="text-gray-300 text-sm">Learn basics before handling significant amounts</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">2️⃣</span>
              <div>
                <strong className="text-white">Practice with small amounts</strong>
                <p className="text-gray-300 text-sm">$10-50 to learn sending, receiving, backup</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">3️⃣</span>
              <div>
                <strong className="text-white">Test recovery procedures</strong>
                <p className="text-gray-300 text-sm">Verify your backups work before trusting them</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">4️⃣</span>
              <div>
                <strong className="text-white">Build security habits</strong>
                <p className="text-gray-300 text-sm">2FA, unique passwords, careful address checking</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">5️⃣</span>
              <div>
                <strong className="text-white">Gradually increase amounts</strong>
                <p className="text-gray-300 text-sm">Scale up as knowledge and confidence grow</p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Mistakes Are Learning Opportunities</h3>
          <p className="text-gray-300 text-sm">
            Every Bitcoin expert has made mistakes while learning. The key is starting small, learning from others' errors, and building good habits from the beginning. Bitcoin is powerful precisely because it gives you complete control - and with that control comes responsibility. Take your time, ask questions, and remember that being careful is more important than being fast. Your future self will thank you for the patience you show today.
          </p>
        </div>
      </div>
    </GuideLayout>
  );
};

export default BitcoinCommonMistakes;