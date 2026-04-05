import React from 'react';
import GuideLayout from '../../components/Guides/GuideLayout';

const WhatIsBitcoin = () => {
  return (
    <GuideLayout
      title="What is Bitcoin?"
      description="Understanding digital money, scarcity, and why Bitcoin was built"
      readTime="6 min"
      learningObjectives={[
        "Why Bitcoin was created and what problem it solves",
        "What makes it different from every previous form of money",
        "Why the 21 million supply limit matters",
        "How decentralisation works in practice, not just in theory",
        "How Bitcoin compares to gold and to other cryptocurrencies",
        "What Bitcoin doesn't solve — and what to watch out for"
      ]}
    >
      <div className="space-y-8">
        <section>
          <p className="text-gray-300 mb-4">
            In September 2008, Lehman Brothers collapsed. The US government spent $700 billion of taxpayer money bailing out the banks that caused the crisis. Regular people lost their homes. The people who made the decisions that triggered the collapse were, for the most part, made whole.
          </p>
          <p className="text-gray-300 mb-4">
            Two months later, an anonymous programmer called Satoshi Nakamoto published a nine-page document describing a different kind of money — one that no government could print more of, no bank could freeze, and no bailout could dilute. In the very first block of that system, Satoshi embedded a newspaper headline: <em className="text-orange-400">"Chancellor on brink of second bailout for banks."</em>
          </p>
          <div className="my-6">
            <img
              src="/times-chancellor-bailout-2009.webp"
              alt="The Times front page, January 3 2009: Chancellor on brink of second bailout for banks"
              className="w-full rounded-lg border border-gray-700"
            />
            <p className="text-gray-500 text-xs mt-2 text-center">The Times, 3 January 2009 — the headline Satoshi embedded in Bitcoin's first block</p>
          </div>

          <p className="text-gray-300 mb-4">
            That was not an accident. It was a mission statement.
          </p>
          <p className="text-gray-300">
            This guide explains what Bitcoin is, why it was built, and why the answer to those two questions is the same thing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What Makes It Different</h2>
          <p className="text-gray-300 mb-4">
            Most people have never thought about what it means for money to have a single point of control. Here's what it looks like in practice: in 2022, Canadian authorities froze the bank accounts of truckers who participated in protests — without a court order, within 48 hours. In 2013, Cyprus seized up to 47.5% of bank deposits over €100,000 to fund a government bailout. In both cases, the money people thought they owned turned out to be accessible to someone else.
          </p>
          <p className="text-gray-300 mb-4">
            Bitcoin was built to make that impossible. Not through policy or law — through mathematics.
          </p>
          <p className="text-gray-300 mb-4">
            There is no Bitcoin headquarters to call. No CEO to pressure. No server to shut down. The network runs on thousands of computers in dozens of countries simultaneously. To change the rules, you would need to convince the majority of that network to agree — and they are not a company, a government, or a group with a shared interest in changing them.
          </p>
          <p className="text-gray-300 mb-6">
            This is what "decentralised" actually means. Not a feature. A consequence of design.
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">The Four Properties — and Why They Matter</h3>
            <div className="space-y-4">
              <div>
                <strong className="text-blue-400">Peer-to-peer.</strong> <span className="text-gray-300">You can send Bitcoin directly to anyone in the world without a bank processing or approving the transaction. Like handing someone cash, except it works across borders instantly.</span>
              </div>
              <div>
                <strong className="text-purple-400">Decentralised.</strong> <span className="text-gray-300">As described above: no single authority controls it. This also means no single point of failure. Bitcoin has had 99.98% uptime since 2009.</span>
              </div>
              <div>
                <strong className="text-green-400">Scarce.</strong> <span className="text-gray-300">Only 21 million Bitcoin will ever exist — programmed into the code, not promised by a government. This is the first time in history that a digital asset has been made genuinely scarce. Before Bitcoin, any digital file could be copied infinitely.</span>
              </div>
              <div>
                <strong className="text-orange-400">Censorship-resistant.</strong> <span className="text-gray-300">No one can block a Bitcoin transaction or freeze a Bitcoin wallet that is properly secured. The network does not know or care who you are.</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Bitcoin vs Traditional Money</h2>
          <p className="text-gray-300 mb-4">
            Every government currency in history has one thing in common: someone decides how much of it exists. Bitcoin is the first money where that decision was made once, in code, in 2009 — and cannot be changed.
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
            <h3 className="text-lg font-bold text-blue-400 mb-2">The 21 Million Limit</h3>
            <p className="text-gray-300 text-sm mb-2">
              Bitcoin's supply cap isn't a policy choice — it's written into the code and enforced by the entire network. New Bitcoin enters circulation on a fixed, predictable schedule, and that rate halves every four years. The last Bitcoin will be mined around 2140. No committee votes on this. No central bank can override it.
            </p>
            <p className="text-gray-300 text-sm">
              Each Bitcoin divides into 100 million units called satoshis, so there is enough for everyone to hold a meaningful amount — even at scale.
            </p>
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
          <h2 className="text-2xl font-bold text-white mb-4">How It Works: The Basics</h2>
          <p className="text-gray-300 mb-4">
            You don't need to understand the engineering to use Bitcoin, but three concepts are worth knowing.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">The Double-Spend Problem</h3>
              <p className="text-gray-300 text-sm">
                Digital files can be copied perfectly. A photo, a song, a document — you can duplicate any of them without destroying the original. This creates an obvious problem for digital money: what stops someone from copying a Bitcoin and spending it twice? For decades, this was considered unsolvable without a trusted central authority to keep track. Bitcoin solved it without one. Every transaction is broadcast to thousands of computers simultaneously. Each one checks independently that the Bitcoin being spent hasn't already been spent. No single computer is in charge — the network reaches consensus. By the time a transaction is confirmed, tens of thousands of independent nodes have agreed it is valid. Copying a Bitcoin and spending it twice would require fooling all of them at once.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">The Blockchain</h3>
              <p className="text-gray-300 text-sm">
                Every Bitcoin transaction ever made is recorded in a public ledger called the blockchain. Anyone can read it. No one can alter it. Instead of trusting a bank to keep accurate records, you can verify the records yourself — or trust that thousands of other people around the world are doing so continuously.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">Mining</h3>
              <p className="text-gray-300 text-sm">
                Miners are computers that compete to add the next batch of transactions to the blockchain. To do this, they must spend real energy solving a mathematical puzzle. This energy expenditure is what makes cheating expensive — to rewrite Bitcoin's history, you would need to outspend the entire rest of the network. That is why Bitcoin's ledger is trustworthy without a central authority.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-white mb-2">Wallets and Keys</h3>
              <p className="text-gray-300 text-sm">
                A Bitcoin wallet doesn't hold Bitcoin — your Bitcoin lives on the blockchain. The wallet holds a private key: a secret that proves you have the right to move your Bitcoin. Whoever controls the key controls the coins. This is why "not your keys, not your coins" matters — if your Bitcoin sits on an exchange, the exchange holds the keys, not you.
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

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-orange-400 mb-3">Bitcoin (Proof of Work)</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Energy-backed security:</strong> Miners use real energy to secure the network</li>
                <li>• <strong>No pre-mining:</strong> Satoshi mined alongside everyone else from day one</li>
                <li>• <strong>Immutable ledger:</strong> Changing history requires massive energy expenditure</li>
                <li>• <strong>Trustless:</strong> Math and energy, not human promises</li>
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-3">Most Altcoins (Proof of Stake)</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Wealth-based control:</strong> Richest validators control the network</li>
                <li>• <strong>Pre-mined tokens:</strong> Founders often hold massive supplies</li>
                <li>• <strong>Easier to change:</strong> Rules can be altered by stakeholder votes</li>
                <li>• <strong>Trust-based:</strong> Relies on validator honesty, like traditional finance</li>
              </ul>
            </div>
          </div>

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
          <h2 className="text-2xl font-bold text-white mb-4">What Bitcoin Doesn't Solve</h2>
          <p className="text-gray-300 mb-4">
            Bitcoin is volatile. Its price in dollars has swung by 80% or more in both directions, multiple times. For someone who needs to pay rent next month, that volatility is a real problem, not a footnote.
          </p>
          <p className="text-gray-300 mb-4">
            Bitcoin is also irreversible. If you send it to the wrong address, or lose access to your private key, there is no customer service line. No one can reverse the transaction or recover your coins. This is a feature for censorship resistance and a liability for human error.
          </p>
          <p className="text-gray-300">
            None of this means Bitcoin is a bad idea. It means it rewards understanding before action — which is why this guide exists.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Next Step</h2>
          <p className="text-gray-300 mb-6">
            The most useful thing you can do now is understand why Bitcoin matters in the context of today's economy — not just what it is, but what problem it's solving for people right now.
          </p>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-400 mb-2">Read next: Why Bitcoin Matters Now</h3>
            <p className="text-gray-300 text-sm mb-4">The case for Bitcoin isn't abstract. It's about wages, housing costs, savings rates, and who benefits from the current monetary system — and who doesn't.</p>
            <a href="/guides/why-bitcoin-matters" className="text-orange-400 hover:text-orange-300 underline text-sm">Start reading →</a>
          </div>
        </section>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
          <p className="text-gray-300 text-sm">
            Bitcoin is the first money in history whose supply rules cannot be changed by any government, bank, or company. That property — genuine, mathematically enforced scarcity — is either irrelevant to you or it's the most important financial idea of your lifetime. This site exists to help you work out which.
          </p>
        </div>
      </div>
    </GuideLayout>
  );
};

export default WhatIsBitcoin;