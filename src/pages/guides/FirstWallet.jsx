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
        "Which platform is right for where you live",
        "Essential security practices from day one",
        "How to make your first Bitcoin purchase safely",
        "When to graduate to hardware wallet storage",
        "How to set up recurring purchases to remove timing stress"
      ]}
    >
      <div className="space-y-8">
        <p className="text-gray-300">
          The moment you own Bitcoin is also the moment you have to decide something most financial products never ask: do you want someone else to hold it for you, or do you want to hold it yourself?
        </p>
        <p className="text-gray-300">
          That question — custody — is the most important concept in Bitcoin. Everything else in this guide flows from understanding it. Let's start there.
        </p>
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
          <p className="text-yellow-300 text-sm">
            <strong>Tax note:</strong> In most countries, buying and selling Bitcoin is a taxable event. This guide doesn't cover tax implications — consult a tax professional before making decisions based on your specific situation.
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
          <h2 className="text-2xl font-bold text-white mb-4">Choosing Your First Platform</h2>
          <p className="text-gray-300 mb-4">
            The right platform depends on where you live. All three options below are beginner-friendly, Bitcoin-focused, and support recurring purchases.
          </p>

          <div className="space-y-4">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-orange-400">Strike — US, Europe & most countries</h3>
                <span className="text-green-400 text-sm font-medium">0% recurring</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Available in 95+ countries. The cleanest beginner experience available — 0% fees on recurring DCA purchases, Lightning Network built-in for instant payments, and transaction priority control on withdrawals. After testing dozens of Bitcoin apps, this is the one I'd hand to a friend starting out.
              </p>
              <a href="https://invite.strike.me/MH9XPQ" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors">
                Sign up for Strike — $0 fees on first $500 →
              </a>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-green-400">Shakepay — Canada</h3>
                <span className="text-green-400 text-sm font-medium">0% after 7 days</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Bitcoin-only, clean interface, and 0% spread on recurring purchases after your first week. The most Strike-like experience available to Canadian readers. Shakepay also has a daily "shake" feature that rewards small amounts of Bitcoin — not life-changing, but a nice touch. Honest tradeoff: no Lightning Network support yet.
              </p>
              <a href="https://shakepay.me/r/37LS65K" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors">
                Sign up for Shakepay — get $20 each →
              </a>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-blue-400">Kraken — Everywhere else</h3>
                <span className="text-yellow-400 text-sm font-medium">~1% spread</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Available in most countries where Strike isn't. Solid reputation, strong security record, and good support. Honest tradeoff: Kraken charges roughly 1% spread on all purchases — on a $200/month DCA schedule that's $24/year in fees. Worth knowing before you start. Better suited to readers who want more platform features (API access, more trading options) and are willing to pay for them.
              </p>
              <a href="https://invite.kraken.com/JDNW/lzrhg3qf" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors">
                Sign up for Kraken →
              </a>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-bold text-red-400 mb-2">What to Avoid (For Now)</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• <strong>Robinhood, PayPal</strong> — you don't actually own Bitcoin, can't send it</li>
              <li>• <strong>Complex exchanges</strong> — Coinbase Pro, Binance (too overwhelming initially)</li>
              <li>• <strong>Hardware wallets</strong> — we'll cover these in a dedicated guide when you're ready for larger amounts</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Your First Bitcoin Purchase: Step by Step</h2>
          <p className="text-gray-300 mb-6">
            Once your account is set up and verified, here is exactly what to do. The whole thing takes about two minutes.
          </p>

          <div className="space-y-3">
            <div className="flex gap-4 bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="text-orange-400 font-bold text-lg w-6 shrink-0">1</div>
              <div>
                <strong className="text-white">Open your exchange app and tap "Buy"</strong>
                <p className="text-gray-300 text-sm mt-1">Find the Buy button — it's usually on the home screen. If you see multiple assets, make sure Bitcoin (BTC) is selected, not a different coin.</p>
              </div>
            </div>

            <div className="flex gap-4 bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="text-orange-400 font-bold text-lg w-6 shrink-0">2</div>
              <div>
                <strong className="text-white">Enter a small amount — $25 is enough</strong>
                <p className="text-gray-300 text-sm mt-1">Type the dollar amount, not a Bitcoin amount. You do not need to buy a whole Bitcoin. $25 buys you a fraction, and that fraction is just as real.</p>
              </div>
            </div>

            <div className="flex gap-4 bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="text-orange-400 font-bold text-lg w-6 shrink-0">3</div>
              <div>
                <strong className="text-white">Review the fee and confirm</strong>
                <p className="text-gray-300 text-sm mt-1">The app will show you the exact fee before you confirm. Read it. If it looks unexpectedly high, check that you're not using a "quick buy" at a worse rate.</p>
              </div>
            </div>

            <div className="flex gap-4 bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="text-orange-400 font-bold text-lg w-6 shrink-0">4</div>
              <div>
                <strong className="text-white">Watch the balance appear</strong>
                <p className="text-gray-300 text-sm mt-1">After confirming, you'll see your Bitcoin balance update. The number will be small — something like 0.00023 BTC. That's normal. You now own Bitcoin.</p>
              </div>
            </div>

            <div className="flex gap-4 bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="text-orange-400 font-bold text-lg w-6 shrink-0">5</div>
              <div>
                <strong className="text-white">Enable two-factor authentication (2FA) if you haven't already</strong>
                <p className="text-gray-300 text-sm mt-1">Go to your account security settings and turn on 2FA. Use an authenticator app (Google Authenticator, Authy) — not SMS. This is the single most important thing you can do to protect your account.</p>
              </div>
            </div>

            <div className="flex gap-4 bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <div className="text-orange-400 font-bold text-lg w-6 shrink-0">6</div>
              <div>
                <strong className="text-white">Consider setting up a recurring purchase</strong>
                <p className="text-gray-300 text-sm mt-1">Most exchanges let you schedule automatic weekly or monthly buys. Even $25/week removes the stress of timing the market. See our <a href="/guides/dollar-cost-averaging" className="text-orange-400 hover:text-orange-300 underline">DCA guide</a> for why this works.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">After Your First Purchase: What's Next</h2>
          <p className="text-gray-300 mb-4">
            A few things worth knowing now that you hold Bitcoin:
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">The exchange holds your Bitcoin for now — and that's fine</h3>
              <p className="text-gray-300 text-sm">
                When your balance is small, keeping it on a reputable exchange is reasonable. The risk of self-custody mistakes (losing a seed phrase) outweighs the risk of exchange custody at small amounts. Once your stack grows, read our <a href="/guides/hardware-wallets" className="text-orange-400 hover:text-orange-300 underline">hardware wallet guide</a>.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">The price will move — that's expected</h3>
              <p className="text-gray-300 text-sm">
                You may open the app tomorrow and see your $25 worth $23. Or $28. Both are normal. Bitcoin is volatile over short periods. The question is not whether it moves — it always does — but whether you understand what you own and why you bought it.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Security Fundamentals: From Day One</h2>
          <p className="text-gray-300 mb-4">
            Regardless of which platform you use, follow these security basics from day one:
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
                Bookmark your platform's official website and always navigate directly to it
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

        <p className="text-center text-gray-400 italic mt-6">
          You're not just setting up a wallet. You're taking your first step toward financial sovereignty. Welcome to Bitcoin.
        </p>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
          <h3 className="text-lg font-bold text-white mb-2">About This Guide</h3>
          <p className="text-gray-300 text-sm mb-2">
            Platform recommendations reflect honest personal testing. Strike (US/Europe), Shakepay (Canada), and Kraken (global) were chosen for their beginner-friendliness, fee transparency, and Bitcoin focus.
          </p>
          <p className="text-gray-400 text-xs italic">
            Transparency: This guide includes referral links for Strike, Shakepay, and Kraken. Strike referrals waive fees on your first $500. Shakepay referrals give $20 to both parties. Kraken referrals provide a fee discount. None involve cash commissions — and none change the honest assessments above.
          </p>
        </div>
      </div>
    </GuideLayout>
  );
};

export default FirstWallet;