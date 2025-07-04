import React from 'react';
import { useNavigate } from 'react-router-dom';

const GuidesIndex = () => {
  const navigate = useNavigate();

  const guideCategories = [
    {
      id: 'fundamentals',
      title: 'Core Fundamentals',
      description: 'Essential Bitcoin knowledge to get started',
      guides: [
        {
          id: 'first-wallet',
          title: 'Your First Bitcoin Wallet',
          description: 'Learn how to safely store Bitcoin and understand custody options',
          readTime: '8 min',
          difficulty: 'Beginner',
          status: 'available',
          path: '/guides/first-wallet',
          icon: '💳'
        },
        {
          id: 'what-is-bitcoin',
          title: 'What is Bitcoin?',
          description: 'Understanding digital money and decentralization basics',
          readTime: '6 min',
          difficulty: 'Beginner',
          status: 'available',
          path: '/guides/what-is-bitcoin',
          icon: '₿'
        },
        {
          id: 'bitcoin-vs-fiat',
          title: 'Bitcoin vs Traditional Money',
          description: 'Why Bitcoin matters: inflation and censorship resistance',
          readTime: '7 min',
          difficulty: 'Beginner',
          status: 'coming-soon',
          path: '/guides/bitcoin-vs-fiat',
          icon: '🏦'
        },
        {
          id: 'send-receive-bitcoin',
          title: 'How to Send & Receive Bitcoin',
          description: 'Master Bitcoin transactions, addresses, and fees',
          readTime: '9 min',
          difficulty: 'Beginner',
          status: 'coming-soon',
          path: '/guides/send-receive-bitcoin',
          icon: '💸'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Self-Custody',
      description: 'Protect your Bitcoin with proper security practices',
      guides: [
        {
          id: 'hardware-wallets',
          title: 'Self-Custody: Hardware Wallets',
          description: 'Complete guide to Ledger, Trezor, and cold storage',
          readTime: '12 min',
          difficulty: 'Intermediate',
          status: 'coming-soon',
          path: '/guides/hardware-wallets',
          icon: '🔐'
        },
        {
          id: 'protect-private-keys',
          title: 'How to Protect Your Private Keys',
          description: 'Backup strategies and secure key management',
          readTime: '8 min',
          difficulty: 'Beginner',
          status: 'coming-soon',
          path: '/guides/protect-private-keys',
          icon: '🔑'
        },
        {
          id: 'security-checklist',
          title: 'Bitcoin Security Checklist',
          description: 'Essential security practices and common mistakes',
          readTime: '5 min',
          difficulty: 'Beginner',
          status: 'available',
          path: '/guides/security-checklist',
          icon: '✅'
        },
        {
          id: 'seed-phrases',
          title: 'Understanding Seed Phrases',
          description: 'Master 12/24-word recovery phrases and storage',
          readTime: '7 min',
          difficulty: 'Beginner',
          status: 'coming-soon',
          path: '/guides/seed-phrases',
          icon: '🌱'
        }
      ]
    },
    {
      id: 'buying-using',
      title: 'Buying & Using Bitcoin',
      description: 'Get Bitcoin and start using it in daily life',
      guides: [
        {
          id: 'buying-bitcoin',
          title: 'Buying Your First Bitcoin',
          description: 'Step-by-step guide to making your first Bitcoin purchase safely',
          readTime: '10 min',
          difficulty: 'Beginner',
          status: 'coming-soon',
          path: '/guides/buying-bitcoin',
          icon: '💰'
        },
        {
          id: 'dollar-cost-averaging',
          title: 'Dollar Cost Averaging Bitcoin',
          description: 'Smart buying strategy with automation and psychology',
          readTime: '8 min',
          difficulty: 'Beginner',
          status: 'available',
          path: '/guides/dollar-cost-averaging',
          icon: '📈'
        },
        {
          id: 'bitcoin-exchanges',
          title: 'Bitcoin Exchanges Explained',
          description: 'Compare exchanges, understand KYC, and choose safely',
          readTime: '9 min',
          difficulty: 'Beginner',
          status: 'coming-soon',
          path: '/guides/bitcoin-exchanges',
          icon: '🏢'
        },
        {
          id: 'using-bitcoin-payments',
          title: 'Using Bitcoin for Payments',
          description: 'Pay merchants, buy gift cards, and daily Bitcoin use',
          readTime: '7 min',
          difficulty: 'Beginner',
          status: 'coming-soon',
          path: '/guides/using-bitcoin-payments',
          icon: '💳'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Understanding',
      description: 'Deeper dive into how Bitcoin works',
      guides: [
        {
          id: 'lightning-basics',
          title: 'Lightning Network for Beginners',
          description: 'Understanding Bitcoin\'s instant payment layer',
          readTime: '12 min',
          difficulty: 'Intermediate',
          status: 'coming-soon',
          path: '/guides/lightning-basics',
          icon: '⚡'
        },
        {
          id: 'bitcoin-mining',
          title: 'Bitcoin Mining Explained',
          description: 'How mining works: energy, difficulty, and security',
          readTime: '11 min',
          difficulty: 'Intermediate',
          status: 'coming-soon',
          path: '/guides/bitcoin-mining',
          icon: '⛏️'
        },
        {
          id: 'bitcoin-fees',
          title: 'Understanding Bitcoin Fees',
          description: 'Mempool, priority, and fee estimation strategies',
          readTime: '6 min',
          difficulty: 'Intermediate',
          status: 'available',
          path: '/guides/bitcoin-fees',
          icon: '💸'
        },
        {
          id: 'bitcoin-addresses',
          title: 'Bitcoin Addresses Explained',
          description: 'Address types, privacy implications, and best practices',
          readTime: '8 min',
          difficulty: 'Intermediate',
          status: 'coming-soon',
          path: '/guides/bitcoin-addresses',
          icon: '📬'
        }
      ]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-16">
      {/* Header */}
      <div className="bg-black/50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <button 
            onClick={() => navigate('/')}
            className="text-orange-400 hover:text-orange-300 text-sm mb-6 flex items-center gap-2 transition-colors"
          >
            ← Back to Bitcoin Journey
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bitcoin Practical Guides
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Step-by-step tutorials to help you take concrete action with Bitcoin. 
              From your first wallet to advanced techniques - all based on real experience.
            </p>
            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-400/30 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-orange-300 font-medium">
                🎯 Start with "Your First Bitcoin Wallet" - everything builds from there
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {guideCategories.map((category) => (
          <div key={category.id} className="mb-16">
            {/* Category Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                {category.title}
              </h2>
              <p className="text-gray-400">
                {category.description}
              </p>
            </div>

            {/* Guides Carousel */}
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-4 w-max">
                {category.guides.map((guide) => (
                  <div 
                    key={guide.id}
                    className={`bg-gray-800/50 border rounded-lg p-4 w-72 flex-shrink-0 transition-all duration-300 ${
                      guide.status === 'available' 
                        ? 'border-gray-700 hover:border-orange-500/50 hover:bg-gray-800/70 cursor-pointer transform hover:scale-105' 
                        : 'border-gray-800 opacity-60'
                    }`}
                    onClick={() => guide.status === 'available' && navigate(guide.path)}
                  >
                    {/* Guide Icon & Status */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-2xl">{guide.icon}</div>
                      {guide.status === 'coming-soon' && (
                        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          Coming Soon
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-2">
                      {guide.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded border ${getDifficultyColor(guide.difficulty)}`}>
                        {guide.difficulty}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {guide.readTime}
                      </span>
                    </div>

                    {/* CTA */}
                    {guide.status === 'available' && (
                      <div className="pt-2 border-t border-gray-700">
                        <span className="text-orange-400 text-sm font-medium">
                          Start Guide →
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Coming Soon Notice */}
        <div className="mt-12 text-center">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-2">
              16 Comprehensive Guides
            </h3>
            <p className="text-gray-400 text-sm">
              We're building a complete Bitcoin education library. Each guide is thoroughly 
              researched and tested before publication. Start with the fundamentals and progress 
              through each category at your own pace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesIndex;