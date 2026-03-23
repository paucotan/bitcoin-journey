import React, { useState, useEffect } from 'react';

const BitcoinMoralCode = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('moral-code-section');
    if (element) {
      observer.observe(element);
    }

    // Fallback: Show cards after 2 seconds if intersection observer hasn't triggered
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [isVisible]);

  const comparisons = [
    {
      title: "Inflation and Purchasing Power",
      fiatProblem: "When the money supply expands, each existing unit of currency buys less. This is how inflation works — not as a natural phenomenon, but as a predictable consequence of supply increases.",
      fiatIcon: "💸",
      fiatExample: "US M2 money supply grew roughly 40% between 2020 and 2022. US inflation reached a 40-year high of 9.1% in June 2022.",
      bitcoinSolution: "Bitcoin has a fixed supply cap of 21 million coins, written into its code. No policy decision, government, or institution can change it.",
      bitcoinIcon: "🛡️",
      bitcoinExample: "Each Bitcoin is divisible into 100,000,000 satoshis — enough granularity for global adoption without ever increasing supply."
    },
    {
      title: "Financial Censorship",
      fiatProblem: "Banks and governments have the legal authority to freeze accounts and block transactions. Access to your money depends on the continued cooperation of intermediaries.",
      fiatIcon: "🏛️",
      fiatExample: "Canadian truckers' accounts frozen in 2022. WikiLeaks donation channels blocked by Visa, Mastercard, and PayPal in 2010.",
      bitcoinSolution: "Bitcoin transactions require no intermediary approval. No bank, government, or platform can block a transaction between two willing parties.",
      bitcoinIcon: "🌐",
      bitcoinExample: "24/7 global transactions settable without a bank account, credit check, or permission from any institution."
    },
    {
      title: "Confiscation Risk",
      fiatProblem: "Governments can seize assets held in banks or financial institutions through legal mechanisms — bail-ins, court orders, emergency powers, or executive action.",
      fiatIcon: "⚖️",
      fiatExample: "US gold confiscation, Executive Order 6102 (1933). Cypriot bank bail-ins (2013). Emergency asset freezes are a documented tool of state power.",
      bitcoinSolution: "Bitcoin held in self-custody can only be moved with your cryptographic private key. No third party can transfer it without your signature.",
      bitcoinIcon: "🔐",
      bitcoinExample: "Your private keys = your Bitcoin. There is no equivalent of a court order that compels the Bitcoin network to reassign funds."
    },
    {
      title: "Exclusion & Barriers",
      fiatProblem: "An estimated 1.3 billion adults worldwide have no bank account. Cross-border remittances — often sent by the world's poorest workers — carry fees averaging around 6%.",
      fiatIcon: "🚫",
      fiatExample: "A migrant worker sending $200 home loses $12–20 in fees. The transfer may take 3–5 business days and requires both sender and recipient to have bank accounts.",
      bitcoinSolution: "Anyone with internet access and a phone can send and receive Bitcoin — no bank account, credit history, or government ID required.",
      bitcoinIcon: "🌍",
      bitcoinExample: "Bitcoin transactions settle in minutes regardless of borders, with fees independent of the amount transferred."
    },
    {
      title: "Monetary Transparency",
      fiatProblem: "Monetary policy decisions are made by institutions that are not directly democratically accountable. Emergency lending, asset purchases, and money supply changes are often disclosed only after the fact.",
      fiatIcon: <img src="/assets/annuit-coeptis.jpg" alt="Monetary policy" className="w-8 h-8 rounded-full bg-gray-800 p-0.5" style={{objectFit: 'cover'}} />,
      fiatExample: "The Fed's emergency lending programs in 2008 were not publicly disclosed until Congress mandated an audit under the Dodd-Frank Act — the results were published in 2011.",
      bitcoinSolution: "Bitcoin's monetary policy is public, fixed, and enforced by code. Every transaction is visible on a public ledger. The supply schedule has never changed.",
      bitcoinIcon: "✅",
      bitcoinExample: "Anyone can verify the total Bitcoin supply, the current issuance rate, and every transaction ever made — without trusting any institution."
    },
    {
      title: "War Finance and Sound Money",
      fiatProblem: "Governments have historically used monetary expansion to fund military spending that would be politically difficult to sustain through direct taxation. Printing money spreads the cost invisibly across all currency holders.",
      fiatIcon: "⚔️",
      fiatExample: "WWI, WWII, Vietnam, and Iraq all involved significant monetary expansion to sustain spending levels beyond what tax revenues could support.",
      bitcoinSolution: "Bitcoin cannot be printed. Wars fought by a Bitcoin-standard government would need to be funded through direct taxation or voluntary borrowing — both of which require explicit public consent.",
      bitcoinIcon: "🕊️",
      bitcoinExample: "No central authority can expand the Bitcoin supply to fund anything. Every satoshi spent on conflict requires real economic resources."
    }
  ];

  return (
    <div id="moral-code-section" className="bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Two Systems, <span className="text-orange-400">Different Rules</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Every monetary system has rules. Here is what the rules of each system actually are.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="space-y-8">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Comparison Title */}
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {comparison.title}
                </h3>
                <div className="w-16 h-0.5 bg-orange-500 mx-auto"></div>
              </div>

              {/* Side-by-Side Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {/* Fiat Problem Card */}
                <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-xl p-6 hover:border-red-400/50 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{comparison.fiatIcon}</div>
                    <div>
                      <h4 className="text-red-400 font-bold text-lg">How fiat money works</h4>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-white text-base leading-relaxed">
                      {comparison.fiatProblem}
                    </p>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                      <p className="text-red-200 text-sm">
                        <span className="font-semibold">Example:</span> {comparison.fiatExample}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bitcoin Solution Card */}
                <div className="bg-gradient-to-br from-green-900/20 to-orange-900/20 border border-orange-500/30 rounded-xl p-6 hover:border-orange-400/50 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{comparison.bitcoinIcon}</div>
                    <div>
                      <h4 className="text-orange-400 font-bold text-lg">How Bitcoin works</h4>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-white text-base leading-relaxed">
                      {comparison.bitcoinSolution}
                    </p>
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                      <p className="text-orange-200 text-sm">
                        <span className="font-semibold">How:</span> {comparison.bitcoinExample}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                <span className="text-orange-500">₿</span> Something New
              </h3>
            </div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              For the first time in history, anyone with internet access can hold money that no government can print more of. That is new. That is worth understanding.
            </p>
            <p className="text-base md:text-lg text-orange-400 italic font-medium">
              Bitcoin is a peaceful revolution through mathematics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinMoralCode;
