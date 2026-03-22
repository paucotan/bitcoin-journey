import { useState } from 'react';
import GuideLayout from '../../components/Guides/GuideLayout';

const HardwareWallets = () => {
  const [costCalculator, setCostCalculator] = useState({
    bitcoinAmount: 0.1,
    btcPrice: 43000,
    exchangeHackProbability: 5, // percentage
    hardwareWalletCost: 79
  });

  const calculateRisk = () => {
    const portfolioValue = costCalculator.bitcoinAmount * costCalculator.btcPrice;
    const potentialLoss = portfolioValue * (costCalculator.exchangeHackProbability / 100);
    const protectionRatio = (costCalculator.hardwareWalletCost / portfolioValue) * 100;
    const riskReduction = portfolioValue - costCalculator.hardwareWalletCost;
    
    return {
      portfolioValue: portfolioValue.toFixed(0),
      potentialLoss: potentialLoss.toFixed(0),
      protectionRatio: protectionRatio.toFixed(1),
      riskReduction: riskReduction.toFixed(0)
    };
  };

  const riskAnalysis = calculateRisk();

  return (
    <GuideLayout 
      title="Self-Custody Guide: Hardware Wallets"
      description="Taking full control of your Bitcoin with hardware wallet security"
      readTime="12 min"
      learningObjectives={[
        "Why self-custody is crucial for Bitcoin ownership",
        "Hardware vs software wallet security differences",
        "Real-world Trezor Safe 3 setup and daily usage",
        "Cost-benefit analysis for hardware wallet investment",
        "Common security mistakes and how to avoid them",
        "When to upgrade from custodial to self-custody"
      ]}
    >
      <div className="space-y-8">
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
          <p className="text-orange-300">
            After 6 months keeping Bitcoin on exchanges, I finally took the leap to self-custody with a hardware wallet. Here's everything I learned from actually using the Trezor Safe 3 - the real experience, not just the specs.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Why I Finally Made the Switch</h2>
          <p className="text-gray-300 mb-4">
            Like most people, I started with Bitcoin on <strong className="text-orange-400">Strike and other custodial wallets</strong>. They're convenient, user-friendly, and perfect for getting started. But as my Bitcoin stack grew, one phrase kept echoing: <em className="text-orange-400">"Not your keys, not your coins."</em>
          </p>

          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4">
            <h3 className="text-lg font-bold text-red-400 mb-2">The Wake-Up Call</h3>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• FTX collapse - $8 billion in user funds lost overnight</li>
              <li>• Celsius bankruptcy - customers couldn't withdraw their Bitcoin</li>
              <li>• Mt. Gox hack - 850,000 Bitcoin stolen from exchange</li>
              <li>• Your exchange account could be frozen or restricted</li>
            </ul>
          </div>

          <p className="text-gray-300">
            When I realized I was trusting third parties with my financial future, the choice became clear: <strong className="text-orange-400">time for self-custody</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What is Self-Custody?</h2>
          <p className="text-gray-300 mb-4">
            Self-custody means <strong className="text-orange-400">you control your Bitcoin's private keys</strong> directly. No exchange, no third party - just you and your Bitcoin on the blockchain.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">Custodial Wallets</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Examples:</strong> Strike, Cash App, Coinbase</li>
                <li>• <strong>Convenience:</strong> Easy to use, familiar UX</li>
                <li>• <strong>Risk:</strong> Company controls your Bitcoin</li>
                <li>• <strong>Access:</strong> Can be frozen or restricted</li>
                <li>• <strong>Recovery:</strong> Depends on company policies</li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">Self-Custody Wallets</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Examples:</strong> Trezor, Ledger, Coldcard</li>
                <li>• <strong>Control:</strong> You own the private keys</li>
                <li>• <strong>Security:</strong> Offline storage, hack-resistant</li>
                <li>• <strong>Access:</strong> No one can freeze your funds</li>
                <li>• <strong>Recovery:</strong> Your seed phrase = full control</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Hardware vs Software Wallets</h2>
          <p className="text-gray-300 mb-4">
            Before choosing a hardware wallet, I considered software wallets (apps on your phone/computer). Here's why I went with hardware:
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">Security Comparison</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">📱</span>
                <div>
                  <strong className="text-white">Software Wallets:</strong> 
                  <span className="text-gray-300"> Private keys stored on internet-connected devices. Vulnerable to malware, hackers, and device theft.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">🔒</span>
                <div>
                  <strong className="text-white">Hardware Wallets:</strong> 
                  <span className="text-gray-300"> Private keys stored on air-gapped device that never touches the internet. Sign transactions offline.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-4">
            <p className="text-blue-300 text-sm">
              <strong>My Take:</strong> For any serious Bitcoin amount (over $500), hardware wallets are worth it. Think of it as insurance for your digital wealth.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">My Experience: Trezor Safe 3</h2>
          <p className="text-gray-300 mb-4">
            After researching options, I chose the <strong className="text-orange-400">Trezor Safe 3</strong>. I can only speak from experience with this device, but here's my honest review after several months of daily use:
          </p>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden mb-6">
            <div className="md:flex">
              <div className="md:w-1/3 p-6 bg-gray-800/30">
                <img
                  src="/assets/trezor-safe-3.jpg"
                  alt="Trezor Safe 3 Cosmic Black"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Trezor Safe 3 - My Daily Driver</h3>
                <p className="text-orange-400 font-medium mb-3">What I Actually Love About It</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-gray-300"><strong>Simple setup:</strong> Took 10 minutes from unboxing to sending Bitcoin</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-gray-300"><strong>Great screen:</strong> Clear display makes address verification easy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-gray-300"><strong>Solid build:</strong> Feels premium, no cheap plastic feel</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-gray-300"><strong>Open source:</strong> Code is auditable and transparent</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-gray-300"><strong>Multi-coin support:</strong> Not just Bitcoin (though that's what I use it for)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-gray-300"><strong>Recovery simulation:</strong> Built-in feature to test seed phrase recovery safely</span>
                  </div>
                </div>

                <a
                  href="https://trezor.io/trezor-safe-3-cosmic-black"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm mt-4"
                >
                  <span>🔒</span>
                  View Trezor Safe 3
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <h3 className="text-lg font-bold text-yellow-400 mb-2">Honest Assessment - Minor Quirks</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Trezor Suite software can be a bit slow to load sometimes</li>
              <li>• USB-C cable feels a bit short for desk setups</li>
              <li>• Takes a few seconds longer than mobile wallets for transactions</li>
              <li>• Learning curve if you're used to simple mobile apps</li>
            </ul>
            <p className="text-yellow-300 text-sm mt-2">
              <strong>Bottom line:</strong> These are minor inconveniences compared to the security and peace of mind.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Other Hardware Wallet Options</h2>
          <p className="text-gray-300 mb-4">
            While I can only speak from experience with the Trezor Safe 3, other popular options exist. Here's what I know from research:
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Ledger Nano S/X</h3>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Most popular brand globally</li>
                <li>• Wide app ecosystem</li>
                <li>• Compact design</li>
                <li>• Past data breach concerns</li>
                <li>• Closed source elements</li>
              </ul>
              <p className="text-xs text-gray-400 mt-2">Research before purchasing</p>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-orange-400 mb-2">Coldcard Mk4</h3>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Bitcoin-only focus</li>
                <li>• Advanced security features</li>
                <li>• Air-gapped operation</li>
                <li>• More technical setup</li>
                <li>• Power user oriented</li>
              </ul>
              <p className="text-xs text-gray-400 mt-2">For advanced users</p>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">Trezor Safe 3</h3>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• My personal choice</li>
                <li>• Open source hardware/software</li>
                <li>• Great user experience</li>
                <li>• Solid build quality</li>
                <li>• Good for beginners</li>
              </ul>
              <p className="text-xs text-green-300 mt-2">Can personally recommend</p>
            </div>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 mt-4">
            <p className="text-gray-300 text-sm">
              <strong>My Advice:</strong> I can only confidently recommend what I've used personally. Do your own research on alternatives, but any of these major brands will be infinitely safer than keeping Bitcoin on exchanges.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Is a Hardware Wallet Worth It?</h2>
          <p className="text-gray-300 mb-4">
            Use this calculator to see if a hardware wallet makes financial sense for your Bitcoin holdings:
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Hardware Wallet Cost-Benefit Calculator</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Bitcoin Amount</label>
                <input
                  type="number"
                  step="0.01"
                  value={costCalculator.bitcoinAmount}
                  onChange={(e) => setCostCalculator({...costCalculator, bitcoinAmount: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Bitcoin Price ($)</label>
                <input
                  type="number"
                  value={costCalculator.btcPrice}
                  onChange={(e) => setCostCalculator({...costCalculator, btcPrice: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Exchange Risk (%/year)</label>
                <input
                  type="number"
                  value={costCalculator.exchangeHackProbability}
                  onChange={(e) => setCostCalculator({...costCalculator, exchangeHackProbability: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Hardware Wallet Cost ($)</label>
                <input
                  type="number"
                  value={costCalculator.hardwareWalletCost}
                  onChange={(e) => setCostCalculator({...costCalculator, hardwareWalletCost: parseFloat(e.target.value)})}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 mt-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                <p className="text-sm text-blue-400">Portfolio Value</p>
                <p className="text-lg font-bold text-white">${riskAnalysis.portfolioValue}</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                <p className="text-sm text-red-400">Annual Risk Exposure</p>
                <p className="text-lg font-bold text-white">${riskAnalysis.potentialLoss}</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                <p className="text-sm text-green-400">Protection Cost</p>
                <p className="text-lg font-bold text-white">{riskAnalysis.protectionRatio}%</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                <p className="text-sm text-orange-400">Value Protected</p>
                <p className="text-lg font-bold text-white">${riskAnalysis.riskReduction}</p>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 mt-3">
              * Conservative estimates based on historical exchange risks. Your security is worth more than the cost.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">My Setup Experience: Step-by-Step</h2>
          <p className="text-gray-300 mb-4">
            Here's exactly how I set up my Trezor Safe 3, with the real experience and gotchas:
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">Step 1: Unboxing and First Impressions</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Package arrives with security seals - verify they're intact</li>
                <li>• Contents: Device, USB-C cable, recovery seed cards, instructions</li>
                <li>• Device feels solid and well-built - not cheap plastic</li>
                <li>• Download Trezor Suite software from official website only</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">Step 2: Initial Setup (10 minutes)</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Connect device to computer via USB-C</li>
                <li>• Trezor Suite walks you through setup - very straightforward</li>
                <li>• Create PIN (use something memorable but secure)</li>
                <li>• Device generates 12-word recovery seed phrase</li>
                <li>• <strong className="text-orange-400">Critical:</strong> Write seed words on provided cards, double-check spelling</li>
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">Step 3: Seed Phrase Security (Most Important)</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Never take photos or store digitally - physical backup only</li>
                <li>• Use the metal cards or engrave on steel plates for fire/water protection</li>
                <li>• Store in separate locations (e.g., home safe + bank safety deposit box)</li>
                <li>• Test recovery process before storing large amounts</li>
                <li>• Consider telling trusted family member about location</li>
              </ul>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">Step 4: Test Recovery Process (Critical!)</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Use Trezor's built-in recovery simulation feature</li>
                <li>• Practice entering your seed phrase without risk</li>
                <li>• This builds confidence and verifies your backup works</li>
                <li>• Much better than hoping your backup works during real emergency</li>
                <li>• <strong className="text-orange-400">Do this before sending large amounts!</strong></li>
              </ul>
            </div>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">Step 5: First Bitcoin Transaction</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Start with small test amount ($25-50)</li>
                <li>• Generate receiving address in Trezor Suite</li>
                <li>• Verify address on device screen (never trust computer display)</li>
                <li>• Send test amount from exchange to hardware wallet</li>
                <li>• Wait for confirmation - took about 15 minutes for me</li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">Step 6: Peace of Mind</h3>
              <p className="text-gray-300 text-sm">
                The moment you see your Bitcoin balance in your own wallet, controlled by your own keys, is incredibly empowering. No exchange can freeze it, no company can go bankrupt with your funds. It's truly yours.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Daily Usage Reality</h2>
          <p className="text-gray-300 mb-4">
            After months of use, here's what daily life with a hardware wallet actually looks like:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">What I Love</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Sleep better knowing my Bitcoin is secure</li>
                <li>• No exchange login worries or 2FA hassles</li>
                <li>• Can access from any computer with Trezor Suite</li>
                <li>• Transaction signing feels like Fort Knox security</li>
                <li>• Portfolio tracking still works with read-only addresses</li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">What Takes Getting Used To</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Need device physically present to send Bitcoin</li>
                <li>• Transactions take 30 seconds vs instant mobile wallets</li>
                <li>• Must carefully verify addresses on device screen</li>
                <li>• Software updates require some technical comfort</li>
                <li>• Recovery planning requires more thought</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-4">
            <p className="text-blue-300 text-sm">
              <strong>Honest Take:</strong> It's less convenient than mobile wallets, but infinitely more secure. The peace of mind is worth the extra 30 seconds per transaction.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Common Mistakes to Avoid</h2>
          <p className="text-gray-300 mb-4">
            Learn from mistakes I've seen others make (and almost made myself):
          </p>

          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">Critical Security Mistakes</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Never</strong> enter seed phrase on computer or phone</li>
                <li>• <strong>Never</strong> buy hardware wallets from third-party sellers</li>
                <li>• <strong>Never</strong> store seed phrase photos in cloud storage</li>
                <li>• <strong>Never</strong> share seed phrase with anyone claiming to "help"</li>
                <li>• <strong>Never</strong> skip verifying addresses on device screen</li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Setup and Usage Mistakes</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Not testing recovery process with small amounts first</li>
                <li>• Storing all backup copies in one location</li>
                <li>• Using weak PIN or sharing PIN with others</li>
                <li>• Not keeping firmware updated</li>
                <li>• Sending large amounts without testing small amounts first</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">When to Upgrade to Hardware Wallet</h2>
          <p className="text-gray-300 mb-4">
            Based on my experience and community wisdom, here are the right times to make the switch:
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">Ready for Hardware Wallet If...</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✅</span>
                <div>
                  <strong className="text-white">Portfolio value over $500:</strong> 
                  <span className="text-gray-300"> Hardware wallet cost becomes negligible insurance</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✅</span>
                <div>
                  <strong className="text-white">Comfortable with basic Bitcoin concepts:</strong> 
                  <span className="text-gray-300"> You understand addresses, private keys, and transactions</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✅</span>
                <div>
                  <strong className="text-white">Ready for responsibility:</strong> 
                  <span className="text-gray-300"> You're comfortable being your own bank</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✅</span>
                <div>
                  <strong className="text-white">Long-term holder mindset:</strong> 
                  <span className="text-gray-300"> Not day-trading or frequent transactions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mt-4">
            <p className="text-orange-300 text-sm">
              <strong>My Recommendation:</strong> Start with custodial wallets to learn, but don't wait too long to upgrade. The security benefits far outweigh the learning curve.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Estate Planning Considerations</h2>
          <p className="text-gray-300 mb-4">
            Hardware wallets require special consideration for inheritance. Here's what I've learned:
          </p>

          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-bold text-purple-400 mb-2">Inheritance Planning Basics</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Document all wallets and their seed phrase locations</li>
              <li>• Educate family members on basic Bitcoin recovery</li>
              <li>• Consider multisig setups for large amounts</li>
              <li>• Keep instructions separate from seed phrases</li>
              <li>• Review and update plans regularly</li>
              <li>• Consider professional Bitcoin estate planning services</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Key Takeaways</h2>
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
            <ul className="text-gray-300 space-y-2">
              <li>• Self-custody puts you in complete control of your Bitcoin</li>
              <li>• Hardware wallets provide the best security for serious Bitcoin holdings</li>
              <li>• The Trezor Safe 3 offers excellent user experience and security</li>
              <li>• Start small, test everything, and gradually increase confidence</li>
              <li>• Seed phrase security is absolutely critical - treat it like gold</li>
              <li>• Peace of mind is worth the initial learning curve and setup time</li>
            </ul>
          </div>
        </section>
      </div>
    </GuideLayout>
  );
};

export default HardwareWallets;