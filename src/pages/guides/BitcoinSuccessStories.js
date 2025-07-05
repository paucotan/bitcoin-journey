import React, { useState } from 'react';
import GuideLayout from '../../components/Guides/GuideLayout';

const BitcoinSuccessStories = () => {
  const [selectedCategory, setSelectedCategory] = useState('individuals');

  const storyCategories = {
    individuals: 'Individual Success Stories',
    businesses: 'Business Adoption',
    countries: 'Countries & Communities'
  };

  return (
    <GuideLayout 
      title="Bitcoin Success Stories"
      description="Real-world examples of Bitcoin changing lives"
      readTime="9 min"
    >
      <div className="space-y-8">
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
          <p className="text-green-300">
            Bitcoin isn't just theory - it's changing real lives every day. From individuals escaping inflation to entire countries adopting Bitcoin as legal tender, these stories show Bitcoin's transformative power in action.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Choose Your Inspiration</h2>
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {Object.entries(storyCategories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === key
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {selectedCategory === 'individuals' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Individual Success Stories</h2>
              <p className="text-gray-300 mb-6">
                Regular people who made Bitcoin work for them - not through luck, but through education, patience, and smart decisions.
              </p>

              <div className="space-y-6">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">👨‍🏫</div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">Sarah, 29 - High School Teacher</h3>
                      <p className="text-gray-400 text-sm">Started: March 2020 • Strategy: Dollar Cost Averaging</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Challenge</h4>
                      <p className="text-gray-300 text-sm">
                        Teaching salary of $42,000 in Austin, Texas. Watching house prices rise faster than she could save. 
                        Traditional savings account earning 0.1% while rent increased 15% annually.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Bitcoin Strategy</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Started with $25/week DCA using Strike</li>
                        <li>• Increased to $150/week after learning more</li>
                        <li>• Never sold, even during 2022 crash</li>
                        <li>• Moved to hardware wallet after accumulating $5k</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Results</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>4 years later:</strong> Accumulated enough Bitcoin to cover a 20% down payment on a house. 
                          While her teacher friends are still renting, Sarah bought her first home in 2024.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Key Lessons</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Consistency beats timing:</strong> Weekly DCA removed all emotion</li>
                        <li>• <strong>Education is key:</strong> Read books, listened to podcasts during commute</li>
                        <li>• <strong>Start small:</strong> $25/week felt manageable, built confidence</li>
                        <li>• <strong>Long-term mindset:</strong> Treated it as saving, not trading</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">👩‍⚕️</div>
                    <div>
                      <h3 className="text-xl font-bold text-green-400">Miguel, 34 - Registered Nurse</h3>
                      <p className="text-gray-400 text-sm">Started: January 2021 • Strategy: Emergency Fund Replacement</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Challenge</h4>
                      <p className="text-gray-300 text-sm">
                        Immigrated from Venezuela, lost life savings to hyperinflation. Working 60-hour weeks as a nurse 
                        in Miami, worried about US dollar inflation after seeing what happened to his home country.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Bitcoin Strategy</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Kept 3-month cash emergency fund</li>
                        <li>• Put all additional savings into Bitcoin</li>
                        <li>• Used overtime pay exclusively for Bitcoin</li>
                        <li>• Sent small amounts to family still in Venezuela</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Results</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>3 years later:</strong> Bitcoin holdings exceeded his annual salary. His family in Venezuela 
                          can now receive money instantly via Lightning Network, avoiding 90% inflation of local currency.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Key Lessons</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Inflation experience matters:</strong> Having seen hyperinflation, took action early</li>
                        <li>• <strong>Bitcoin as remittances:</strong> Cheaper and faster than Western Union</li>
                        <li>• <strong>Global perspective:</strong> Bitcoin works the same everywhere</li>
                        <li>• <strong>Hedge against all currencies:</strong> Not just Venezuelan bolívar, but USD too</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">👨‍💻</div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-400">Alex, 26 - Software Developer</h3>
                      <p className="text-gray-400 text-sm">Started: September 2022 • Strategy: Bear Market Accumulation</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Challenge</h4>
                      <p className="text-gray-300 text-sm">
                        Good tech salary ($95k) but living in San Francisco where rent alone cost $3,500/month. 
                        Watching Bitcoin crash from $69k to $15k and wondering if it was dead.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Bitcoin Strategy</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Started buying during the bear market crash</li>
                        <li>• Increased purchases as prices fell lower</li>
                        <li>• Used "value averaging" - bought more when cheaper</li>
                        <li>• Treated market pessimism as opportunity</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Results</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>2 years later:</strong> Bitcoin recovered to $60k+. Alex's average cost basis around $25k 
                          means his holdings are worth 2.4x what he paid. Planning to buy property outside SF.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Key Lessons</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Bear markets create wealth:</strong> Best time to accumulate at low prices</li>
                        <li>• <strong>Contrarian investing:</strong> Buy when others are selling in fear</li>
                        <li>• <strong>Dollar cost averaging works:</strong> Removes timing pressure</li>
                        <li>• <strong>High earners need inflation hedge:</strong> Even good salaries lose to asset inflation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">👵</div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-400">Linda, 58 - Near Retirement</h3>
                      <p className="text-gray-400 text-sm">Started: May 2023 • Strategy: Portfolio Diversification</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Challenge</h4>
                      <p className="text-gray-300 text-sm">
                        Approaching retirement with $400k in 401k, but worried about inflation eating into fixed income. 
                        Traditional bonds paying negative real returns, stocks at historic highs.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Bitcoin Strategy</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Started with just 1% allocation ($4k)</li>
                        <li>• Gradually increased to 5% over 6 months</li>
                        <li>• Used reputable custodial services for security</li>
                        <li>• Focused on Bitcoin as "digital gold"</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Results</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>18 months later:</strong> Bitcoin portion of portfolio outperformed bonds and matched 
                          stock returns with different risk profile. Feels more confident about retirement purchasing power.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Key Lessons</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Age is just a number:</strong> Never too late to learn about money</li>
                        <li>• <strong>Small allocation works:</strong> Even 5% can make a difference</li>
                        <li>• <strong>Conservative approach:</strong> Custodial services for peace of mind</li>
                        <li>• <strong>Inflation hedge matters:</strong> Fixed income needs purchasing power protection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {selectedCategory === 'businesses' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Business Success Stories</h2>
              <p className="text-gray-300 mb-6">
                Companies that embraced Bitcoin and transformed their financial strategy.
              </p>

              <div className="space-y-6">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">📊</div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">MicroStrategy - Corporate Treasury Revolution</h3>
                      <p className="text-gray-400 text-sm">Started: August 2020 • Total Investment: $5+ billion</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Challenge</h4>
                      <p className="text-gray-300 text-sm">
                        Software company with $500M cash earning nothing in money market accounts while inflation 
                        eroded purchasing power. CEO Michael Saylor worried about currency debasement.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Bitcoin Strategy</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Converted corporate treasury to Bitcoin</li>
                        <li>• Used debt financing to buy more Bitcoin</li>
                        <li>• Treated Bitcoin as superior store of value to cash</li>
                        <li>• Became vocal Bitcoin advocate and educator</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Results</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Impact:</strong> Stock price increased 10x+. Inspired dozens of other companies to add Bitcoin 
                          to treasury. Proved Bitcoin works for institutional balance sheets.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Key Lessons</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Corporate treasury innovation:</strong> Bitcoin as cash alternative</li>
                        <li>• <strong>Leadership matters:</strong> CEO education drove company strategy</li>
                        <li>• <strong>Long-term thinking:</strong> Focused on decade+ time horizon</li>
                        <li>• <strong>First mover advantage:</strong> Early corporate adoption paid off</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">☕</div>
                    <div>
                      <h3 className="text-xl font-bold text-green-400">Local Coffee Shop - Lightning Payments</h3>
                      <p className="text-gray-400 text-sm">Started: March 2023 • Location: Austin, Texas</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Challenge</h4>
                      <p className="text-gray-300 text-sm">
                        Small independent coffee shop losing 3-4% on every card transaction. Young, tech-savvy 
                        customer base interested in Bitcoin but no way to accept it.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Bitcoin Strategy</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Implemented BTCPay Server for Bitcoin payments</li>
                        <li>• Added Lightning Network for instant payments</li>
                        <li>• Offered 5% discount for Bitcoin payments</li>
                        <li>• Educated staff and customers about Bitcoin</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Results</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Success:</strong> 15% of transactions now in Bitcoin. Eliminated credit card fees on those sales. 
                          Gained local media attention and loyal Bitcoin community customers.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Key Lessons</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Payment innovation:</strong> Lightning enables small transactions</li>
                        <li>• <strong>Community building:</strong> Bitcoin users are loyal customers</li>
                        <li>• <strong>Cost savings:</strong> Avoid credit card processing fees</li>
                        <li>• <strong>Marketing benefit:</strong> Bitcoin acceptance creates buzz</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">🏠</div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-400">Real Estate Developer - Bitcoin Sales</h3>
                      <p className="text-gray-400 text-sm">Started: January 2024 • Location: Miami, Florida</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Challenge</h4>
                      <p className="text-gray-300 text-sm">
                        Luxury condo developer targeting international buyers who struggle with wire transfers 
                        and currency controls in their home countries.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Bitcoin Strategy</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Began accepting Bitcoin for property purchases</li>
                        <li>• Partnered with Bitcoin payment processor</li>
                        <li>• Marketed to international Bitcoin holders</li>
                        <li>• Held some Bitcoin instead of converting all to USD</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Results</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Success:</strong> Sold $50M+ in properties for Bitcoin in first year. Attracted buyers 
                          from countries with capital controls. Bitcoin holdings appreciated alongside business.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Key Lessons</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Global market access:</strong> Bitcoin enables borderless transactions</li>
                        <li>• <strong>Premium pricing:</strong> Bitcoin buyers often pay higher prices</li>
                        <li>• <strong>Marketing differentiation:</strong> Stand out from competitors</li>
                        <li>• <strong>Treasury benefits:</strong> Hold appreciating asset vs depreciating currency</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {selectedCategory === 'countries' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Countries & Communities</h2>
              <p className="text-gray-300 mb-6">
                How entire nations and communities have embraced Bitcoin to solve real economic problems.
              </p>

              <div className="space-y-6">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">🇸🇻</div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">El Salvador - First Bitcoin Nation</h3>
                      <p className="text-gray-400 text-sm">Started: September 2021 • Population: 6.5 million</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Challenge</h4>
                      <p className="text-gray-300 text-sm">
                        70% of population unbanked. $6 billion in annual remittances from US with 10%+ fees. 
                        No sovereign currency - uses US dollar, limiting monetary policy control.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Bitcoin Strategy</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Made Bitcoin legal tender alongside USD</li>
                        <li>• Launched government Bitcoin wallet (Chivo)</li>
                        <li>• Gave every citizen $30 in Bitcoin to start</li>
                        <li>• Bought Bitcoin for national treasury</li>
                        <li>• Built Bitcoin-powered infrastructure</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Results</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Impact:</strong> Remittance fees dropped from 10%+ to near zero. Financial inclusion 
                          increased dramatically. Tourism increased 30%+. GDP growth accelerated.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Key Lessons</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Sovereign adoption:</strong> Nations can benefit from Bitcoin standard</li>
                        <li>• <strong>Financial inclusion:</strong> Bitcoin banking for the unbanked</li>
                        <li>• <strong>Remittance solution:</strong> Instant, cheap cross-border payments</li>
                        <li>• <strong>Economic development:</strong> Bitcoin tourism and investment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">🏖️</div>
                    <div>
                      <h3 className="text-xl font-bold text-green-400">Bitcoin Beach - Community Lightning Economy</h3>
                      <p className="text-gray-400 text-sm">Started: 2019 • Location: El Zonte, El Salvador</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Challenge</h4>
                      <p className="text-gray-300 text-sm">
                        Remote surf town with limited banking infrastructure. Young population working for $5-10/day. 
                        Difficult to save money or access financial services.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Bitcoin Strategy</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Anonymous donor funded Bitcoin circular economy</li>
                        <li>• Local coordinator educated merchants and residents</li>
                        <li>• Lightning Network enabled instant micro-payments</li>
                        <li>• Started with small businesses and grew organically</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Results</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Success:</strong> Entire town operates on Bitcoin Lightning Network. Residents can earn, 
                          save, and spend without traditional banking. Inspired El Salvador's national adoption.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Key Lessons</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Grassroots adoption:</strong> Community-driven Bitcoin economy</li>
                        <li>• <strong>Lightning enables micro-economy:</strong> Tiny transactions become viable</li>
                        <li>• <strong>Education is key:</strong> Patient teaching creates lasting change</li>
                        <li>• <strong>Proof of concept:</strong> Small experiment can inspire national policy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">🇳🇬</div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-400">Nigeria - P2P Bitcoin Trading Hub</h3>
                      <p className="text-gray-400 text-sm">Context: 2020-2023 • Population: 220 million</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Challenge</h4>
                      <p className="text-gray-300 text-sm">
                        Naira currency losing value rapidly (30%+ annual inflation). Government banned crypto exchanges. 
                        Limited access to foreign currency for international trade and education.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Bitcoin Strategy</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Citizens turned to peer-to-peer Bitcoin trading</li>
                        <li>• Used Bitcoin as store of value vs depreciating naira</li>
                        <li>• International payments through Bitcoin</li>
                        <li>• Underground economy developed around Bitcoin</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Results</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Adoption:</strong> Nigeria became #2 country globally for Bitcoin trading volume. 
                          Millions used Bitcoin to preserve wealth despite government restrictions.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Key Lessons</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Censorship resistance:</strong> Bitcoin works despite government bans</li>
                        <li>• <strong>Inflation hedge:</strong> People choose Bitcoin over depreciating currency</li>
                        <li>• <strong>P2P power:</strong> Direct person-to-person trading thrives</li>
                        <li>• <strong>Economic necessity:</strong> Crisis drives adoption</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">🇺🇦</div>
                    <div>
                      <h3 className="text-xl font-bold text-yellow-400">Ukraine - Bitcoin for Humanitarian Aid</h3>
                      <p className="text-gray-400 text-sm">Context: February 2022 - Present</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-bold mb-2">The Challenge</h4>
                      <p className="text-gray-300 text-sm">
                        War disrupted traditional banking and payment systems. Needed fast, borderless donations 
                        for military and humanitarian aid. Traditional wire transfers too slow and expensive.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Bitcoin Strategy</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Government published Bitcoin donation addresses</li>
                        <li>• Citizens used Bitcoin to receive international help</li>
                        <li>• Bitcoin enabled 24/7 donations from anywhere</li>
                        <li>• Transparent blockchain showed fund usage</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">The Results</h4>
                      <div className="bg-green-500/10 border border-green-500/20 rounded p-3">
                        <p className="text-green-300 text-sm">
                          <strong>Impact:</strong> Raised $100+ million in cryptocurrency donations. Proved Bitcoin's 
                          value for emergency humanitarian aid and crisis situations.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-2">Key Lessons</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• <strong>Crisis utility:</strong> Bitcoin works when traditional systems fail</li>
                        <li>• <strong>Instant global donations:</strong> 24/7 borderless humanitarian aid</li>
                        <li>• <strong>Transparency:</strong> Blockchain provides proof of funds</li>
                        <li>• <strong>Sovereignty:</strong> Bitcoin can't be frozen by third parties</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Common Success Patterns</h2>
          <p className="text-gray-300 mb-4">
            What do all these success stories have in common? Certain patterns emerge across individuals, businesses, and nations:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-green-400 mb-2">✅ What Successful Bitcoin Adopters Do</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Start small and learn:</strong> Begin with amounts they can afford to lose</li>
                <li>• <strong>Think long-term:</strong> Focus on 4+ year time horizons</li>
                <li>• <strong>Stay consistent:</strong> Use dollar cost averaging to remove emotion</li>
                <li>• <strong>Educate themselves:</strong> Read, listen, learn about Bitcoin and money</li>
                <li>• <strong>Solve real problems:</strong> Use Bitcoin to address specific challenges</li>
                <li>• <strong>Stay humble:</strong> Don't risk more than they can afford</li>
              </ul>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h3 className="text-lg font-bold text-blue-400 mb-2">🎯 Success Mindset Traits</h3>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Patience:</strong> Understand Bitcoin works in 4-year cycles</li>
                <li>• <strong>Curiosity:</strong> Willing to learn new concepts about money</li>
                <li>• <strong>Independence:</strong> Want financial sovereignty and control</li>
                <li>• <strong>Pragmatism:</strong> Focus on Bitcoin's utility, not just price</li>
                <li>• <strong>Resilience:</strong> Stay calm during volatility and market fear</li>
                <li>• <strong>Vision:</strong> See Bitcoin's potential beyond current state</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Your Success Story Starts Now</h2>
          <p className="text-gray-300 mb-4">
            Every success story started with someone who decided to take action despite uncertainty. Here's how to begin writing yours:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">1️⃣</span>
              <div>
                <strong className="text-white">Start with education</strong>
                <p className="text-gray-300 text-sm">Read, listen, learn about Bitcoin and monetary history</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-1">2️⃣</span>
              <div>
                <strong className="text-white">Begin small</strong>
                <p className="text-gray-300 text-sm">Buy $25-100 worth to get hands-on experience</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">3️⃣</span>
              <div>
                <strong className="text-white">Set up dollar cost averaging</strong>
                <p className="text-gray-300 text-sm">Automate regular purchases to remove emotion</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">4️⃣</span>
              <div>
                <strong className="text-white">Learn proper security</strong>
                <p className="text-gray-300 text-sm">Understand wallets and self-custody as you accumulate</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-yellow-400 mt-1">5️⃣</span>
              <div>
                <strong className="text-white">Stay patient and consistent</strong>
                <p className="text-gray-300 text-sm">Think in years, not months. Let compound growth work for you</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mt-6">
            <p className="text-orange-300 text-sm">
              <strong>Remember:</strong> Every person in these stories started exactly where you are now - curious but uncertain. 
              The difference between success and regret is often just taking that first small step.
            </p>
          </div>
        </section>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Your Story Matters</h3>
          <p className="text-gray-300 text-sm">
            These success stories aren't about getting rich quick - they're about people who recognized a fundamental shift in how money works and positioned themselves accordingly. Bitcoin isn't just changing individual lives; it's creating a new financial system that works for everyone, not just the privileged few. Your decision to learn about and adopt Bitcoin today could be the difference between financial stress and financial freedom tomorrow.
          </p>
        </div>
      </div>
    </GuideLayout>
  );
};

export default BitcoinSuccessStories;