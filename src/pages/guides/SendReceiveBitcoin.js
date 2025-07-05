import React, { useState } from 'react';
import GuideLayout from '../../components/Guides/GuideLayout';

const SendReceiveBitcoin = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <GuideLayout 
      title="How to Send & Receive Bitcoin"
      description="Master Bitcoin transactions, addresses, and fees"
      readTime="9 min"
      learningObjectives={[
        "How Bitcoin addresses work and why they're important",
        "Step-by-step process for receiving Bitcoin safely",
        "How to send Bitcoin without losing your money",
        "Understanding transaction fees and confirmation times",
        "Lightning vs on-chain transactions and when to use each",
        "Critical safety checks before every transaction"
      ]}
    >
      <div className="space-y-8">
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <p className="text-blue-300">
            Sending and receiving Bitcoin is easier than you think. This guide covers everything you need to know about Bitcoin transactions, from generating addresses to understanding fees.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Understanding Bitcoin Addresses</h2>
          <p className="text-gray-300 mb-4">
            Think of Bitcoin addresses like email addresses - they're unique identifiers where Bitcoin can be sent. Each address is a long string of letters and numbers that represents a destination for Bitcoin.
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">Address Types You'll See</h3>
            <div className="space-y-4">
              <div className="bg-orange-500/10 border border-orange-500/20 rounded p-3">
                <h4 className="text-orange-400 font-bold mb-1">Legacy (starts with "1")</h4>
                <p className="text-gray-300 text-sm">1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</p>
                <p className="text-gray-400 text-xs mt-1">Older format, higher fees, universal compatibility</p>
              </div>
              
              <div className="bg-blue-500/10 border border-blue-500/20 rounded p-3">
                <h4 className="text-blue-400 font-bold mb-1">SegWit (starts with "3")</h4>
                <p className="text-gray-300 text-sm">3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy</p>
                <p className="text-gray-400 text-xs mt-1">Lower fees, widely supported</p>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                <h4 className="text-green-400 font-bold mb-1">Native SegWit (starts with "bc1")</h4>
                <p className="text-gray-300 text-sm">bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4</p>
                <p className="text-gray-400 text-xs mt-1">Lowest fees, modern standard</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-yellow-300 text-sm">
              <strong>Good news:</strong> Your wallet handles address types automatically. You don't need to worry about the technical details - just copy, paste, and send!
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How to Receive Bitcoin</h2>
          <p className="text-gray-300 mb-4">
            Receiving Bitcoin is simple: generate an address, share it with the sender, and wait for the transaction to confirm.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">1️⃣</span>
              <div>
                <strong className="text-white">Open your Bitcoin wallet</strong>
                <p className="text-gray-300 text-sm">Whether it's Strike, a hardware wallet, or another Bitcoin wallet.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">2️⃣</span>
              <div>
                <strong className="text-white">Find the "Receive" button</strong>
                <p className="text-gray-300 text-sm">Usually located prominently on the main screen.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">3️⃣</span>
              <div>
                <strong className="text-white">Generate a new address</strong>
                <p className="text-gray-300 text-sm">Your wallet will create a fresh address for this transaction.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">4️⃣</span>
              <div>
                <strong className="text-white">Share the address</strong>
                <p className="text-gray-300 text-sm">Copy the address or show the QR code to the sender.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">5️⃣</span>
              <div>
                <strong className="text-white">Wait for confirmation</strong>
                <p className="text-gray-300 text-sm">Transactions typically confirm within 10 minutes to 1 hour.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mt-6">
            <h3 className="text-lg font-bold text-green-400 mb-2">✅ Receiving Best Practices</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Use a fresh address:</strong> Generate a new address for each payment for privacy</li>
              <li>• <strong>Double-check the address:</strong> Verify the first and last few characters</li>
              <li>• <strong>QR codes are safer:</strong> Less chance of copy/paste errors</li>
              <li>• <strong>Keep records:</strong> Note who sent what and when for your records</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How to Send Bitcoin</h2>
          <p className="text-gray-300 mb-4">
            Sending Bitcoin requires more care since transactions are irreversible. Follow these steps carefully.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">1️⃣</span>
              <div>
                <strong className="text-white">Get the recipient's address</strong>
                <p className="text-gray-300 text-sm">Ask them to send you their Bitcoin address or scan their QR code.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">2️⃣</span>
              <div>
                <strong className="text-white">Open your wallet's "Send" function</strong>
                <p className="text-gray-300 text-sm">Look for a "Send" or "Transfer" button in your wallet.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">3️⃣</span>
              <div>
                <strong className="text-white">Enter the recipient address</strong>
                <p className="text-gray-300 text-sm">Paste the address or scan their QR code. Never type addresses manually.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">4️⃣</span>
              <div>
                <strong className="text-white">Enter the amount</strong>
                <p className="text-gray-300 text-sm">Specify how much Bitcoin to send. You can usually enter in BTC or USD equivalent.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">5️⃣</span>
              <div>
                <strong className="text-white">Choose your fee level</strong>
                <p className="text-gray-300 text-sm">Higher fees = faster confirmation. Most wallets suggest appropriate fees.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-red-400 mt-1">6️⃣</span>
              <div>
                <strong className="text-white">Double-check everything</strong>
                <p className="text-gray-300 text-sm">Verify the address, amount, and fee before confirming. This is critical!</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-pink-400 mt-1">7️⃣</span>
              <div>
                <strong className="text-white">Send the transaction</strong>
                <p className="text-gray-300 text-sm">Confirm and broadcast the transaction to the Bitcoin network.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h3 className="text-lg font-bold text-red-400 mb-2">🚨 Critical Sending Rules</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Bitcoin transactions are irreversible:</strong> There's no "undo" button</li>
              <li>• <strong>Always start with small test amounts:</strong> Send $5-10 first to verify</li>
              <li>• <strong>Triple-check addresses:</strong> One wrong character = lost Bitcoin</li>
              <li>• <strong>Never send to exchange addresses long-term:</strong> Only for immediate trading</li>
              <li>• <strong>Keep transaction records:</strong> For taxes and tracking</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Understanding Transaction Fees</h2>
          <p className="text-gray-300 mb-4">
            Bitcoin fees pay miners to include your transaction in a block. Think of it like paying for shipping - you can choose speed vs cost.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">🐌 Low Priority</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>Time:</strong> 2-24 hours</div>
                <div><strong>Cost:</strong> $1-5</div>
                <div><strong>Best for:</strong> Non-urgent transfers</div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">⚡ Standard</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>Time:</strong> 10-60 minutes</div>
                <div><strong>Cost:</strong> $5-15</div>
                <div><strong>Best for:</strong> Most transactions</div>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-orange-400 mb-2">🚀 High Priority</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>Time:</strong> 1-20 minutes</div>
                <div><strong>Cost:</strong> $15-50+</div>
                <div><strong>Best for:</strong> Urgent payments</div>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
            <h3 className="text-lg font-bold text-purple-400 mb-2">💡 Fee Optimization Tips</h3>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Weekend transactions:</strong> Often 20-50% cheaper due to lower activity</li>
              <li>• <strong>Use Lightning Network:</strong> For small amounts (&lt;$100), fees are under $0.01</li>
              <li>• <strong>Strike's advantage:</strong> Choose priority levels when withdrawing to optimize fees</li>
              <li>• <strong>Plan ahead:</strong> Non-urgent transactions can save significant money</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Lightning vs On-Chain: When to Use Each</h2>
          <p className="text-gray-300 mb-4">
            Bitcoin has two payment layers. Understanding when to use each saves time and money.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">⚡ Lightning Network</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div><strong>Speed:</strong> Instant (sub-second)</div>
                <div><strong>Fees:</strong> $0.001 - $0.01</div>
                <div><strong>Best for:</strong> Daily payments, tips, small amounts</div>
                <div><strong>Examples:</strong> Coffee, online purchases, tips</div>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-orange-400 mb-2">🔗 On-Chain Bitcoin</h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <div><strong>Speed:</strong> 10 minutes - 2 hours</div>
                <div><strong>Fees:</strong> $1 - $50+</div>
                <div><strong>Best for:</strong> Large amounts, savings, final settlement</div>
                <div><strong>Examples:</strong> Savings, large purchases, cold storage</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 mt-4">
            <h3 className="text-lg font-bold text-white mb-2">Decision Framework</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <div>• <strong>Under $100:</strong> Use Lightning if available</div>
              <div>• <strong>$100-$1,000:</strong> Consider urgency and current fees</div>
              <div>• <strong>Over $1,000:</strong> On-chain for maximum security</div>
              <div>• <strong>Long-term storage:</strong> Always use on-chain</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Transaction Confirmations Explained</h2>
          <p className="text-gray-300 mb-4">
            Understanding confirmations helps you know when your Bitcoin has actually moved.
          </p>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Confirmation Timeline</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">📡</span>
                <div>
                  <strong className="text-white">0 Confirmations (Pending):</strong>
                  <p className="text-gray-300 text-sm">Transaction broadcast but not yet included in a block</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1">⏳</span>
                <div>
                  <strong className="text-white">1 Confirmation (~10 minutes):</strong>
                  <p className="text-gray-300 text-sm">Transaction included in a block. Safe for small amounts.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✅</span>
                <div>
                  <strong className="text-white">3+ Confirmations (~30+ minutes):</strong>
                  <p className="text-gray-300 text-sm">Very secure. Most services accept at this point.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">🔒</span>
                <div>
                  <strong className="text-white">6+ Confirmations (~1+ hours):</strong>
                  <p className="text-gray-300 text-sm">Extremely secure. Considered final for large amounts.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Common Transaction Mistakes</h2>
          <p className="text-gray-300 mb-4">
            Learn from others' expensive mistakes to keep your Bitcoin safe.
          </p>

          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">🚨 Expensive Mistakes to Avoid</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Typos in addresses:</strong> Always copy/paste, never type manually</li>
                <li>• <strong>Wrong network:</strong> Don't send Bitcoin to Ethereum addresses</li>
                <li>• <strong>Exchange deposit addresses:</strong> Don't use as long-term storage</li>
                <li>• <strong>Overpaying fees:</strong> Check current fee rates before sending</li>
                <li>• <strong>No test transactions:</strong> Always test with small amounts first</li>
              </ul>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">✅ Transaction Safety Checklist</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Verify address:</strong> Check first and last 4 characters</li>
                <li>• <strong>Confirm amount:</strong> Double-check you're sending the right amount</li>
                <li>• <strong>Review fees:</strong> Make sure fee level matches your urgency</li>
                <li>• <strong>Test first:</strong> Send a small amount to verify everything works</li>
                <li>• <strong>Keep records:</strong> Save transaction IDs and details</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Troubleshooting Common Issues</h2>
          <p className="text-gray-300 mb-4">
            Solutions to the most common transaction problems:
          </p>

          <div className="space-y-4">
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">⏰ "My transaction is stuck"</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>Cause:</strong> Fee too low for current network congestion</div>
                <div><strong>Solution:</strong> Wait (can take days) or use Replace-by-Fee if your wallet supports it</div>
                <div><strong>Prevention:</strong> Check current fee rates on mempool.space before sending</div>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-red-400 mb-2">❌ "Transaction failed"</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>Cause:</strong> Insufficient balance, invalid address, or wallet error</div>
                <div><strong>Solution:</strong> Check your balance, verify the address format, restart wallet</div>
                <div><strong>Prevention:</strong> Always double-check addresses and available balance</div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">🔍 "Can't find my transaction"</h3>
              <div className="text-gray-300 text-sm space-y-1">
                <div><strong>Cause:</strong> Transaction not yet broadcast or using wrong explorer</div>
                <div><strong>Solution:</strong> Check transaction ID on multiple block explorers</div>
                <div><strong>Prevention:</strong> Always save transaction IDs and use reputable explorers</div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Master Bitcoin Transactions</h3>
          <p className="text-gray-300 text-sm">
            Sending and receiving Bitcoin becomes second nature with practice. Start with small amounts, always double-check addresses, and choose appropriate fees for your urgency. Remember: Bitcoin transactions are irreversible, so take your time and verify everything before hitting send.
          </p>
        </div>
      </div>
    </GuideLayout>
  );
};

export default SendReceiveBitcoin;