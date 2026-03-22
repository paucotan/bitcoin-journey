import React from 'react';
import GuideLayout from '../../components/Guides/GuideLayout';

const FirstWallet = () => {

  return (
    <GuideLayout 
      title="Your First Bitcoin Wallet: Taking Control of Your Money"
      description="Learn how to safely store Bitcoin and understand custody options"
      readTime="8 min"
      learningObjectives={[
        "Difference between custodial and self-custody wallets",
        "Why Strike is recommended for Bitcoin beginners",
        "Essential security practices from day one",
        "How to make your first Bitcoin purchase safely",
        "When to graduate to hardware wallet storage",
        "Setting up Lightning Network for instant payments"
      ]}
    >
      <div className="space-y-8">
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
          <p className="text-orange-300">
            You've learned why Bitcoin matters. Now it's time to take the most important step: getting your first Bitcoin wallet and taking control of your money.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Critical First Decision: Custody</h2>
          <p className="text-gray-300 mb-4">
            Before we dive into specific wallets, you need to understand the most important concept in Bitcoin: <strong className="text-orange-400">custody</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">Custodial Wallet (Recommended for Beginners)</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• The company holds your Bitcoin for you</li>
                <li>• Easier to use, like a traditional bank account</li>
                <li>• You can recover access if you forget your password</li>
                <li>• Trade-off: You're trusting the company</li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Non-Custodial Wallet (For When You're Ready)</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• You control your Bitcoin directly</li>
                <li>• No company can freeze or access your funds</li>
                <li>• You're responsible for security and backups</li>
                <li>• Trade-off: If you lose access, no one can help you</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4 mt-4">
            <p className="text-gray-300">
              <span className="text-orange-400 font-bold">💡 Our Philosophy:</span> Start with custodial, graduate to non-custodial as you learn. There's no shame in training wheels.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Our Top Recommendation: Strike</h2>
          <p className="text-gray-300 mb-4">
            After testing dozens of Bitcoin apps, <strong className="text-orange-400">Strike</strong> consistently delivers the best experience for newcomers. Here's why:
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-orange-400 mb-4">Why Strike Wins for Beginners</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✅</span>
                <div>
                  <strong className="text-white">Smart fee structure</strong> - 0% fees on recurring DCA purchases, low fees on regular buys (1.29% to 0.89% depending on monthly volume)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✅</span>
                <div>
                  <strong className="text-white">Incredibly intuitive</strong> - Setting up target purchases and recurring buys is effortless
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✅</span>
                <div>
                  <strong className="text-white">Lightning-fast transfers</strong> - Move money and Bitcoin instantly, anywhere in the world, including with Lightning payments
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✅</span>
                <div>
                  <strong className="text-white">Perfect for DCA</strong> - Automated recurring purchases with zero fees make dollar-cost averaging painless
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✅</span>
                <div>
                  <strong className="text-white">Built by Bitcoiners</strong> - Founded by Jack Mallers, genuine Bitcoin advocate
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✅</span>
                <div>
                  <strong className="text-white">Global reach</strong> - Available in 95+ countries worldwide
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-6">
            <h3 className="text-lg font-bold text-blue-400 mb-3">Strike's Fee Structure (My Favorite)</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">💸</span>
                <div>
                  <strong>Recurring purchases (DCA):</strong> 0% fees - completely free
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">💳</span>
                <div>
                  <strong>Regular purchases:</strong> 1.29% to 0.89% depending on how much you buy per month
                  <div className="text-sm text-gray-400 mt-1">
                    Higher monthly volume = lower fees (reward for regular users)
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">⚡</span>
                <div>
                  <strong>Lightning Network transactions:</strong> Essentially 0% fees
                  <div className="text-sm text-gray-400 mt-1">
                    Send Bitcoin instantly worldwide with negligible costs
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1">⚙️</span>
                <div>
                  <strong>Transaction priority control:</strong> Choose your on-chain transaction speed
                  <div className="text-sm text-gray-400 mt-1">
                    Avoid unnecessary fees by selecting slow/normal/fast based on urgency
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 border border-gray-600 rounded p-3 mt-4">
                <div className="text-sm text-gray-300">
                  <strong className="text-orange-400">Why I chose Strike over Kraken:</strong>
                </div>
                <div className="text-xs text-gray-400 mt-2 space-y-1">
                  <div>• <strong>Kraken:</strong> 1.5% fees on everything, complex interface, no Lightning, no fee control</div>
                  <div>• <strong>Strike:</strong> Free DCA, lower regular fees, Lightning built-in, transaction priority control</div>
                  <div>• <strong>Winner:</strong> Strike saves me money and makes Bitcoin actually usable</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold text-white mb-3">Strike's Unique Advantage: Lightning Network</h3>
            <p className="text-gray-300 mb-4">
              Strike isn't just another Bitcoin app - it's built on the <strong className="text-orange-400">Lightning Network</strong>, Bitcoin's instant payment layer. This means:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Instant transactions</strong> instead of waiting 10+ minutes</li>
              <li>• <strong>Zero or very low fees</strong> instead of $5-50 on-chain transaction costs</li>
              <li>• <strong>Global reach</strong> - send money to family abroad instantly</li>
              <li>• <strong>Future-proof</strong> - you're learning the technology that will power Bitcoin payments</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Getting Started with Strike</h2>
          <p className="text-gray-300 mb-4">
            Rather than recreate their excellent setup process, we'll send you directly to Strike's comprehensive guide:
          </p>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-orange-400 mb-3">
              → <a href="https://strike.me/learn/how-to-buy-bitcoin/" target="_blank" rel="noopener noreferrer" className="hover:underline">Complete Strike Setup Guide</a>
            </h3>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-4">
              <p className="text-yellow-300 font-medium">
                💰 <strong>Bonus:</strong> Use our referral link to get <strong>$0 fees on your first $500</strong> of Bitcoin purchases:
              </p>
              <div className="mt-2">
                <a 
                  href="https://invite.strike.me/MH9XPQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block"
                >
                  Sign Up with Fee Waiver →
                </a>
              </div>
            </div>

            <div className="text-gray-300 text-sm">
              <p className="mb-2">Strike's guide covers:</p>
              <ul className="space-y-1">
                <li>• Account creation and verification</li>
                <li>• Connecting your bank account securely</li>
                <li>• Making your first Bitcoin purchase</li>
                <li>• Understanding the interface</li>
                <li>• Security best practices</li>
              </ul>
              <p className="text-orange-400 font-medium mt-3">Setup takes just 5 minutes</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">After You Set Up Strike: Critical Next Steps</h2>
          <p className="text-gray-300 mb-4">
            Once you follow Strike's setup guide, here are the essential steps they might not emphasize enough:
          </p>

          <div className="space-y-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">1. Start Small & Consider Dollar Cost Averaging (DCA)</h3>
              <p className="text-gray-300 mb-3">
                <strong>Don't go all-in immediately.</strong> Start with $25-100 to get comfortable with the process. You're learning a new technology - give yourself permission to start small.
              </p>
              <p className="text-gray-300 mb-3">
                <strong>Even better:</strong> Consider setting up Dollar Cost Averaging (DCA) - automatically buying a small amount of Bitcoin weekly or monthly. This reduces timing anxiety and smooths out price volatility.
              </p>
              <a 
                href="https://strike.me/learn/how-to-dollar-cost-average-into-bitcoin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 underline"
              >
                → Strike's Dollar Cost Averaging Guide
              </a>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">2. Make a Test Transaction</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Send $5 worth of Bitcoin to a friend with Strike</li>
                <li>• Experience the magic of instant, borderless money</li>
                <li>• This builds confidence and understanding</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">3. Enable All Security Features</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Turn on 2-factor authentication (2FA)</li>
                <li>• Set up account recovery options</li>
                <li>• Review privacy settings</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Alternative Options: When Strike Isn't Right</h2>
          <p className="text-gray-300 mb-4">
            While we recommend Strike for most beginners, here are tested alternatives:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Kraken (Custodial)</h3>
              <p className="text-sm text-gray-400 mb-2"><em>Best for:</em> Those who want a traditional exchange experience</p>
              <p className="text-sm text-gray-300 mb-2"><strong>Pros:</strong> Excellent reputation, strong security, good customer support</p>
              <p className="text-sm text-gray-300"><strong>Cons:</strong> More complex interface, higher learning curve for beginners</p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-purple-400 mb-2">Muun (Self-Custodial)</h3>
              <p className="text-sm text-gray-400 mb-2"><em>Best for:</em> Those ready to take full control of their Bitcoin</p>
              <p className="text-sm text-gray-300 mb-2"><strong>Pros:</strong> True self-custody, excellent UX, supports Lightning</p>
              <p className="text-sm text-gray-300"><strong>Cons:</strong> You're responsible for backups, no recovery assistance</p>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-bold text-red-400 mb-2">What to Avoid (For Now)</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• <strong>Robinhood, PayPal</strong> - You don't actually own Bitcoin, can't send it</li>
              <li>• <strong>Complex exchanges</strong> - Coinbase Pro, Binance (too overwhelming initially)</li>
              <li>• <strong>Hardware wallets</strong> - We'll cover these in a dedicated guide when you're ready for larger amounts</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Security Fundamentals: From Day One</h2>
          <p className="text-gray-300 mb-4">
            Even with a beginner-friendly app like Strike, follow these security basics:
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-400 mb-3">✅ Essential Security Checklist</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-3 text-gray-300">
                <input type="checkbox" className="w-4 h-4 text-orange-500" />
                Use a unique, strong password (password manager recommended)
              </label>
              <label className="flex items-center gap-3 text-gray-300">
                <input type="checkbox" className="w-4 h-4 text-orange-500" />
                Enable 2-factor authentication (2FA)
              </label>
              <label className="flex items-center gap-3 text-gray-300">
                <input type="checkbox" className="w-4 h-4 text-orange-500" />
                Never share your login credentials
              </label>
              <label className="flex items-center gap-3 text-gray-300">
                <input type="checkbox" className="w-4 h-4 text-orange-500" />
                Only download apps from official app stores
              </label>
              <label className="flex items-center gap-3 text-gray-300">
                <input type="checkbox" className="w-4 h-4 text-orange-500" />
                Verify you're on the real Strike website (strike.me)
              </label>
              <label className="flex items-center gap-3 text-gray-300">
                <input type="checkbox" className="w-4 h-4 text-orange-500" />
                Never invest more than you can afford to lose
              </label>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-bold text-red-400 mb-2">🚨 Red Flags: When Someone is Trying to Scam You</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• Anyone asking for your login credentials</li>
              <li>• "Bitcoin giveaway" offers (always scams)</li>
              <li>• Pressure to "act now" or send Bitcoin immediately</li>
              <li>• Promises of guaranteed returns</li>
              <li>• DMs from "customer support" on social media</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start?</h2>
          <p className="text-gray-300 mb-6">
            The hardest part of any journey is the first step. You've done the learning - now it's time for action.
          </p>

          <div className="text-center">
            <a 
              href="https://invite.strike.me/MH9XPQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg inline-block"
            >
              Set Up Your Strike Wallet Now
            </a>
            <p className="text-orange-400 text-sm mt-2">(Includes $0 fees on first $500)</p>
          </div>

          <p className="text-center text-gray-400 italic mt-6">
            Remember: You're not just setting up a wallet. You're taking your first step toward financial sovereignty. Welcome to Bitcoin. ⚡
          </p>
        </section>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
          <h3 className="text-lg font-bold text-white mb-2">About This Guide</h3>
          <p className="text-gray-300 text-sm mb-2">
            This guide reflects our honest opinion based on extensive testing of Bitcoin wallets. Strike consistently provides the best experience for newcomers, which is why we recommend it.
          </p>
          <p className="text-gray-400 text-xs italic">
            Transparency: We include Strike referral links that provide fee waivers for new users. When you sign up through our links, you get $0 fees on your first $500, and I also get fees waived on my next $500 - no cash commissions involved. It's a win-win that doesn't change our genuine recommendation that Strike is the best starting point for most people.
          </p>
        </div>
      </div>
    </GuideLayout>
  );
};

export default FirstWallet;