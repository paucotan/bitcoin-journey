import React from 'react';
import GuideLayout from '../../components/Guides/GuideLayout';

const WhatIsBitcoin = () => {
  return (
    <GuideLayout 
      title="What is Bitcoin?"
      description="Understanding digital money, scarcity, and why Bitcoin is digital gold"
      readTime="6 min"
    >
      <div className="space-y-8">
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
          <p className="text-orange-300">
            Bitcoin is the world's first truly scarce digital money. Unlike every currency in human history, no one can create more Bitcoin beyond the 21 million limit. This changes everything.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Bitcoin in Simple Terms</h2>
          <p className="text-gray-300 mb-4">
            Imagine <strong className="text-orange-400">digital cash</strong> that you can send to anyone, anywhere in the world, without needing a bank. That's Bitcoin at its core - peer-to-peer electronic cash that no government or company controls.
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">The Revolutionary Properties</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">🌐</span>
                <div>
                  <strong className="text-white">Peer-to-peer:</strong> <span className="text-gray-300">Send money directly without banks or intermediaries</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">🔒</span>
                <div>
                  <strong className="text-white">Decentralized:</strong> <span className="text-gray-300">No single point of control or failure</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">💎</span>
                <div>
                  <strong className="text-white">Scarce:</strong> <span className="text-gray-300">Only 21 million Bitcoin will ever exist</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">🛡️</span>
                <div>
                  <strong className="text-white">Censorship-resistant:</strong> <span className="text-gray-300">No one can freeze or confiscate properly secured Bitcoin</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Why Bitcoin Was Created: The 2008 Wake-Up Call</h2>
          <p className="text-gray-300 mb-4">
            Bitcoin wasn't created in a vacuum. In 2008, while banks were collapsing and governments were printing trillions to bail them out, an anonymous developer named <strong className="text-orange-400">Satoshi Nakamoto</strong> was building something different.
          </p>

          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4">
            <h3 className="text-lg font-bold text-red-400 mb-2">The 2008 Financial Crisis</h3>
            <ul className="text-gray-300 space-y-1">
              <li>• Banks took excessive risks with depositor money</li>
              <li>• When banks failed, taxpayers paid the bill</li>
              <li>• Governments printed money to "solve" the crisis</li>
              <li>• Regular people lost their homes and savings</li>
            </ul>
          </div>

          <p className="text-gray-300 mb-4">
            Satoshi embedded a message in Bitcoin's first block: <em className="text-orange-400">"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."</em> This wasn't just code - it was a statement about why Bitcoin needed to exist.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Bitcoin vs Traditional Money: The Scarcity Revolution</h2>
          <p className="text-gray-300 mb-4">
            To understand Bitcoin's revolutionary nature, you need to understand what makes it different from every other form of money in history.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">Traditional Money (Fiat)</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Unlimited supply:</strong> Governments can print more anytime</li>
                <li>• <strong>Centrally controlled:</strong> Central banks set monetary policy</li>
                <li>• <strong>Inflationary:</strong> Purchasing power decreases over time</li>
                <li>• <strong>Requires trust:</strong> You must trust banks and governments</li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">Bitcoin (Sound Money)</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Fixed supply:</strong> 21 million maximum, programmed in code</li>
                <li>• <strong>Decentralized:</strong> No single authority controls it</li>
                <li>• <strong>Deflationary:</strong> Purchasing power tends to increase</li>
                <li>• <strong>Trustless:</strong> Mathematics and code, not human promises</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-bold text-blue-400 mb-2">The 21 Million Limit: Why It Matters</h3>
            <p className="text-gray-300 text-sm mb-2">
              Bitcoin's 21 million coin limit isn't arbitrary - it's the foundation of its value proposition:
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Absolute scarcity:</strong> First time in history we have truly scarce digital asset</li>
              <li>• <strong>Predictable supply:</strong> New Bitcoin creation follows a precise schedule</li>
              <li>• <strong>Decreasing inflation:</strong> Supply growth rate halves every 4 years</li>
              <li>• <strong>Store of value:</strong> Scarcity creates digital gold properties</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Bitcoin as Digital Gold</h2>
          <p className="text-gray-300 mb-4">
            Throughout history, gold has been humanity's preferred store of value because it's <strong className="text-orange-400">scarce, durable, and portable</strong>. Bitcoin improves on gold in every way:
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-orange-400 mb-4">Bitcoin vs Gold Comparison</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="text-white font-bold">Scarcity</div>
                  <div className="text-green-400 text-sm">Bitcoin wins</div>
                  <div className="text-gray-400 text-xs">21M max vs unknown gold reserves</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="text-white font-bold">Portability</div>
                  <div className="text-green-400 text-sm">Bitcoin wins</div>
                  <div className="text-gray-400 text-xs">Instant global transfer vs physical shipping</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🔍</div>
                  <div className="text-white font-bold">Verification</div>
                  <div className="text-green-400 text-sm">Bitcoin wins</div>
                  <div className="text-gray-400 text-xs">Cryptographic proof vs physical testing</div>
                </div>
              </div>
              
              <div className="bg-orange-500/10 border border-orange-500/20 rounded p-3">
                <p className="text-orange-300 text-sm">
                  <strong>Key insight:</strong> Bitcoin is "digital gold" but with superior properties for the digital age. It's gold that you can send through the internet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How Bitcoin Works: The Basics</h2>
          <p className="text-gray-300 mb-4">
            You don't need to understand the technical details to use Bitcoin, but knowing the basics helps you appreciate why it's revolutionary.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">The Blockchain: A Public Ledger</h3>
              <p className="text-gray-300 text-sm">
                Every Bitcoin transaction is recorded on a public ledger called the blockchain. Think of it as a massive, transparent bank ledger that everyone can see but no one can cheat.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">Mining: Network Security</h3>
              <p className="text-gray-300 text-sm">
                Miners use energy and computing power to secure the network and process transactions. They're rewarded with newly created Bitcoin, but this reward decreases over time.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">Wallets: Your Bitcoin Bank</h3>
              <p className="text-gray-300 text-sm">
                Bitcoin wallets don't actually store Bitcoin - they store the private keys that give you access to your Bitcoin on the blockchain. Control your keys, control your Bitcoin.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Real-World Bitcoin Adoption</h2>
          <p className="text-gray-300 mb-4">
            Bitcoin isn't just theory - it's being used by millions of people worldwide for real economic needs:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-blue-400">Store of Value</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Individuals saving in Bitcoin instead of inflating currencies</li>
                <li>• Companies like Tesla and MicroStrategy holding Bitcoin</li>
                <li>• Pension funds and institutions allocating to Bitcoin</li>
                <li>• Protection against currency debasement</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-purple-400">Daily Use</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• El Salvador adopting Bitcoin as legal tender</li>
                <li>• International remittances with lower fees</li>
                <li>• Online merchants accepting Bitcoin payments</li>
                <li>• Lightning Network enabling instant micropayments</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Bitcoin vs "Crypto": Understanding the Difference</h2>
          <p className="text-gray-300 mb-4">
            While Bitcoin is often grouped with "cryptocurrency," it's fundamentally different from most other digital assets:
          </p>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
            <h3 className="text-lg font-bold text-orange-400 mb-3">What Makes Bitcoin Unique</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>First and most tested:</strong> Running continuously since 2009</li>
              <li>• <strong>Truly decentralized:</strong> No company or founder controls it</li>
              <li>• <strong>Clear purpose:</strong> Digital money and store of value</li>
              <li>• <strong>Limited supply:</strong> 21 million maximum, unlike most altcoins</li>
              <li>• <strong>Network effects:</strong> Largest, most secure blockchain network</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">
            Understanding Bitcoin is the first step. The next step is taking action and getting your first Bitcoin wallet.
          </p>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-400 mb-3">Your Bitcoin Journey Starts Here</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">1️⃣</span>
                <div>
                  <strong className="text-white">Set up your first wallet</strong>
                  <p className="text-gray-300 text-sm">Learn how to safely store Bitcoin with our wallet guide</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">2️⃣</span>
                <div>
                  <strong className="text-white">Start with a small amount</strong>
                  <p className="text-gray-300 text-sm">Buy $25-100 worth to get comfortable with the process</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">3️⃣</span>
                <div>
                  <strong className="text-white">Learn as you go</strong>
                  <p className="text-gray-300 text-sm">Gradually increase your knowledge and holdings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
          <p className="text-gray-300 text-sm">
            Bitcoin is the first truly scarce digital asset in human history. It's digital gold that you can send through the internet, offering a hedge against monetary debasement and financial censorship. Understanding Bitcoin's scarcity and sound money properties is crucial to appreciating its revolutionary potential.
          </p>
        </div>
      </div>
    </GuideLayout>
  );
};

export default WhatIsBitcoin;