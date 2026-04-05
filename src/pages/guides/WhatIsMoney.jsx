import React from 'react';
import GuideLayout from '../../components/Guides/GuideLayout';

const WhatIsMoney = () => {
  return (
    <GuideLayout
      title="What Is Money?"
      description="A brief history of money — and why understanding it changes everything"
      readTime="7 min"
      learningObjectives={[
        "What money actually is and what makes it work",
        "How humanity went from barter to gold to paper",
        "What the gold standard was and why it mattered",
        "What happened in 1971 — and why nobody taught you about it",
        "How fiat money works and who controls it",
        "Why understanding money is the first step to understanding Bitcoin"
      ]}
    >
      <div className="space-y-8">
        <section>
          <p className="text-gray-300 mb-4">
            You have probably used money every day of your adult life without ever being taught what it is. Not how to earn it, or how to spend it — but what it actually <em>is</em>. Where it comes from. Who decides how much of it exists. Why it sometimes buys less than it used to.
          </p>
          <p className="text-gray-300">
            This is not an accident. Monetary history is one of the few subjects almost entirely absent from school curricula in most countries. By the end of this guide, you will understand why that gap matters — and why filling it is the first step toward understanding Bitcoin.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What Money Actually Does</h2>
          <p className="text-gray-300 mb-4">
            Before asking where money comes from, it helps to understand what it does. Money performs three functions — and almost anything can serve as money as long as it performs all three reasonably well.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">Medium of Exchange</h3>
              <p className="text-gray-300 text-sm">
                Money lets you trade without coincidence of wants. Without it, a baker who needs shoes must find a cobbler who happens to need bread, at exactly the right moment. Money breaks that constraint. You sell bread for money, and spend the money later, with anyone.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-orange-400 mb-2">Store of Value</h3>
              <p className="text-gray-300 text-sm">
                Money lets you store the economic value of your labour across time. You do work today; you hold money; you spend it next month, next year, or next decade. For this to work, the money must hold its value — it cannot rot, spoil, or be created in unlimited quantities. A fish makes a poor store of value. Gold does not.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">Unit of Account</h3>
              <p className="text-gray-300 text-sm">
                Money gives everything a common price. Without it, every trade requires negotiating an exchange ratio from scratch. With it, a house costs $400,000 and an hour of plumbing costs $120 — and those two numbers can be compared, added, and reasoned about.
              </p>
            </div>
          </div>

          <p className="text-gray-300 mt-4">
            The history of money is the history of different societies finding different things that serve these three functions — and discovering, usually the hard way, what happens when they stop working.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">A Brief History: From Barter to Gold</h2>

          <figure className="mb-6">
            <img
              src="/history-of-value-museum.png"
              alt="Museum exhibition showing the history of money: barter goods, seashells, gold coins, paper money, and Bitcoin"
              className="w-full rounded-lg"
            />
          </figure>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Barter — and its limits</h3>
              <p className="text-gray-300 text-sm mb-3">
                Primitive economies started with barter — direct exchange of goods and services. It works at small scale among people who know each other. It breaks down quickly as societies grow. The coincidence-of-wants problem becomes unsolvable. You cannot pay a surgeon in chickens if the surgeon already has enough chickens.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Commodity money — shells, salt, cattle</h3>
              <p className="text-gray-300 text-sm mb-3">
                Societies independently discovered that certain commodities worked as money: seashells in West Africa, salt in ancient Rome (the word "salary" comes from <em>sal</em>, the Latin for salt), cattle across much of the ancient world, tobacco in colonial Virginia. What these had in common: they were scarce, durable enough, and widely accepted. The word "fee" comes from the old Germanic word for cattle (<em>fihu</em>).
              </p>
              <p className="text-gray-300 text-sm">
                The problem with commodity money is that it varies in quality, is hard to transport, and tends to be destroyed through use. A cow is a poor unit of account. It is also inconvenient to carry to the market.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Gold — the long-run winner</h3>
              <p className="text-gray-300 text-sm mb-3">
                Gold emerged as the dominant commodity money across almost every major civilisation independently — not because of any edict or agreement, but because of its properties. It is scarce but not too scarce. It does not rust, rot, or degrade. It is divisible into smaller units without losing value. It is difficult to fake (density testing exposes counterfeits). And critically, its supply cannot be increased quickly: you cannot mine your way to abundance overnight.
              </p>
              <p className="text-gray-300 text-sm">
                For most of recorded human history, gold <em>was</em> money. Paper notes existed, but they were receipts for gold held in a vault — promises that could be redeemed on demand. The paper was the IOU. The gold was the money.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Gold Standard — and Bretton Woods</h2>
          <p className="text-gray-300 mb-4">
            By the nineteenth century, most major economies formalised this relationship into what became known as the gold standard: each currency was pegged to a fixed weight of gold, and governments were obligated to exchange their paper notes for gold on request. This constrained how much money governments could create — you could not print more paper than you had gold to back it.
          </p>
          <p className="text-gray-300 mb-4">
            The system had real consequences. Governments could not easily fund wars or welfare programmes by printing money, because doing so would trigger gold redemptions and collapse the peg. Savings held their value across generations, because the money supply could not expand faster than gold could be mined.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-5 mb-4">
            <h3 className="text-lg font-bold text-blue-400 mb-2">Bretton Woods, 1944</h3>
            <p className="text-gray-300 text-sm mb-3">
              After World War II, the Allied nations met in Bretton Woods, New Hampshire to design a new international monetary system. The arrangement they created made the US dollar the world's reserve currency — every other currency was pegged to the dollar, and the dollar alone was pegged to gold at $35 per ounce. The US held the world's gold; everyone else held dollars.
            </p>
            <p className="text-gray-300 text-sm">
              For two decades, this worked. The United States had the largest gold reserves and the world's dominant economy. But as the US funded both the Vietnam War and the Great Society social programmes through the 1960s, it printed more dollars than its gold reserves could support. By 1971, foreign governments were redeeming dollars for gold faster than the US could sustain.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1971 — The Moment Everything Changed</h2>
          <p className="text-gray-300 mb-4">
            On the evening of Sunday 15 August 1971, President Richard Nixon appeared on American television and announced that the United States would no longer convert dollars to gold. The dollar's link to any physical constraint was severed. This was supposed to be a temporary measure. It was never reversed.
          </p>

          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-5 mb-4">
            <h3 className="text-lg font-bold text-red-400 mb-2">What this actually meant</h3>
            <p className="text-gray-300 text-sm mb-3">
              Before 1971: the money supply was constrained by how much gold existed. Governments could not create money beyond that limit without consequences.
            </p>
            <p className="text-gray-300 text-sm mb-3">
              After 1971: the money supply was constrained by nothing except political will. Governments could — and did — create money in whatever quantities they chose, with no obligation to redeem it for anything tangible.
            </p>
            <p className="text-gray-300 text-sm">
              The dollar you hold today is backed by the full faith and credit of the United States government. That means it is worth whatever the government says it is worth, and whatever other people believe it to be worth. There is no gold in a vault. There is no physical limit on how many more can be created.
            </p>
          </div>

          <p className="text-gray-300">
            Almost every currency in the world followed suit. The entire planet moved, simultaneously, onto a monetary system with no physical constraint on supply — for the first time in recorded history. The word for this system is <strong className="text-orange-400">fiat</strong> — from the Latin for "let it be done." The money exists because a government says it does.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How Fiat Money Works — and Who Benefits</h2>
          <p className="text-gray-300 mb-4">
            Under a fiat system, money is created in two main ways. Central banks — like the US Federal Reserve — can create money directly, by purchasing assets and crediting accounts. Commercial banks create money through lending: when a bank issues a mortgage, it does not lend out money that already existed; it creates new money in the act of lending.
          </p>
          <p className="text-gray-300 mb-4">
            This is not a conspiracy. It is simply how the system works, and it is described in the Bank of England's own publications. The question is not whether money is created this way — it is — but who benefits from the creation.
          </p>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-5 mb-4">
            <h3 className="text-lg font-bold text-orange-400 mb-2">The Cantillon Effect</h3>
            <p className="text-gray-300 text-sm mb-3">
              Richard Cantillon, an eighteenth-century Irish-French economist, observed that new money does not enter an economy evenly. Whoever receives it first — before prices have adjusted — benefits most. Whoever receives it last — after prices have already risen — bears the cost.
            </p>
            <p className="text-gray-300 text-sm">
              In a modern economy, new money flows first to banks, large corporations, and asset owners. By the time it reaches wages and savings accounts, prices have already risen. The result: those who own assets (houses, stocks, businesses) see them appreciate. Those who hold cash see its purchasing power erode. The gap between them widens with every new round of money creation.
            </p>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-5">
            <h3 className="text-lg font-bold text-white mb-3">What the data shows since 1971</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>US money supply (M2)</span>
                <span className="text-red-400 font-bold">+2,100%</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>US house prices</span>
                <span className="text-red-400 font-bold">+1,600%</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>College tuition</span>
                <span className="text-red-400 font-bold">+3,000%</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>Median wages (inflation-adjusted)</span>
                <span className="text-yellow-400 font-bold">+15%</span>
              </div>
              <div className="flex justify-between">
                <span>Dollar purchasing power</span>
                <span className="text-red-400 font-bold">-87%</span>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-3">Sources: Federal Reserve, Bureau of Labor Statistics, College Board, Case-Shiller Index. Figures from 1971 to 2024.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">What This Doesn't Mean</h2>
          <p className="text-gray-300 mb-4">
            Fiat money is not pure fraud. It enabled unprecedented economic growth, allowed governments to respond to crises (the 2008 recession, the 2020 pandemic) with tools that a gold standard would have made impossible, and supports a global trade system of enormous complexity.
          </p>
          <p className="text-gray-300 mb-4">
            The honest case is narrower: fiat money transfers value from savers to borrowers, from labour to capital, and from those who receive new money last to those who receive it first. Whether those transfers are justified is a political question. But they are real, and they are systematic — not random, not accidents of individual misfortune.
          </p>
          <p className="text-gray-300">
            Understanding this is not about anger. It is about accuracy. You cannot make good decisions about money if you do not understand what money is and how it behaves.
          </p>
        </section>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Key Takeaway</h3>
          <p className="text-gray-300 text-sm">
            Money is not a natural fact. It is a technology — one that has changed many times throughout history, most recently in 1971. The version of money you have used your entire life is less than 55 years old, has no physical constraint on its supply, and systematically transfers purchasing power from savers to asset owners. Knowing this is not enough to act on — but it is where every honest conversation about Bitcoin has to start.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">The Next Step</h2>
          <p className="text-gray-300 mb-6">
            Bitcoin is a direct response to 1971. It was designed from the ground up with a fixed supply, no central authority, and rules that cannot be changed by any government or bank. Whether that makes it a good form of money is the question the rest of this site explores.
          </p>

          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-green-400 mb-2">Read next: Why Bitcoin Matters Now</h3>
            <p className="text-gray-300 text-sm mb-4">
              Now that you understand how fiat money works and who it benefits, the next guide makes the case for why Bitcoin's specific properties matter — not in theory, but in the economic conditions your generation is living through right now.
            </p>
            <a href="/guides/why-bitcoin-matters-now" className="text-orange-400 hover:text-orange-300 underline text-sm">Start reading →</a>
          </div>
        </section>
      </div>
    </GuideLayout>
  );
};

export default WhatIsMoney;
