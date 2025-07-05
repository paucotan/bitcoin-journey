import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GuidesIndex = () => {
  const navigate = useNavigate();
  const scrollRefs = useRef({});
  const [scrollStates, setScrollStates] = useState({});

  const updateScrollState = (categoryId, scrollContainer) => {
    if (!scrollContainer) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
    const canScrollLeft = scrollLeft > 0;
    const canScrollRight = scrollLeft < scrollWidth - clientWidth - 10; // 10px threshold
    
    setScrollStates(prev => ({
      ...prev,
      [categoryId]: { canScrollLeft, canScrollRight }
    }));
  };

  const scrollCategory = (categoryId, direction) => {
    const container = scrollRefs.current[categoryId];
    if (!container) return;
    
    const scrollAmount = 320; // Width of one card + gap
    const newScrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Initialize scroll states for all categories
    Object.keys(scrollRefs.current).forEach(categoryId => {
      updateScrollState(categoryId, scrollRefs.current[categoryId]);
    });
  }, []);

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
          id: 'why-bitcoin-matters-now',
          title: 'Why Bitcoin Matters Now',
          description: 'Understanding Bitcoin\'s relevance in today\'s economic reality',
          readTime: '7 min',
          difficulty: 'Beginner',
          status: 'available',
          path: '/guides/why-bitcoin-matters-now',
          icon: '🚨'
        },
        {
          id: 'send-receive-bitcoin',
          title: 'How to Send & Receive Bitcoin',
          description: 'Master Bitcoin transactions, addresses, and fees',
          readTime: '9 min',
          difficulty: 'Beginner',
          status: 'available',
          path: '/guides/send-receive-bitcoin',
          icon: '💸'
        },
        {
          id: 'time-preference',
          title: 'Time Preference: Why Sound Money Makes Better People',
          description: 'How the type of money shapes behavior and civilization',
          readTime: '8 min',
          difficulty: 'Intermediate',
          status: 'available',
          path: '/guides/time-preference',
          icon: '⏰'
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
          status: 'available',
          path: '/guides/hardware-wallets',
          icon: '🔐'
        },
        {
          id: 'bitcoin-common-mistakes',
          title: 'Bitcoin for Beginners: Common Mistakes',
          description: 'Learn from others\' costly errors to protect your Bitcoin',
          readTime: '7 min',
          difficulty: 'Beginner',
          status: 'available',
          path: '/guides/bitcoin-common-mistakes',
          icon: '⚠️'
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
          id: 'strike-vs-other-platforms',
          title: 'Strike vs Other Platforms',
          description: 'Detailed comparison of Bitcoin platforms with Strike focus',
          readTime: '8 min',
          difficulty: 'Beginner',
          status: 'coming-soon',
          path: '/guides/strike-vs-other-platforms',
          icon: '⚖️'
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
          id: 'bitcoin-success-stories',
          title: 'Bitcoin Success Stories',
          description: 'Real-world examples of Bitcoin changing lives',
          readTime: '9 min',
          difficulty: 'Beginner',
          status: 'available',
          path: '/guides/bitcoin-success-stories',
          icon: '🌟'
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
          status: 'available',
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
      <style dangerouslySetInnerHTML={{
        __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
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
            <div className="relative overflow-hidden pb-4 group">
              {/* Left Arrow */}
              {scrollStates[category.id]?.canScrollLeft && (
                <button
                  onClick={() => scrollCategory(category.id, 'left')}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-gray-800/90 hover:bg-orange-500/90 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
                  aria-label="Scroll left"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Right Arrow */}
              {scrollStates[category.id]?.canScrollRight && (
                <button
                  onClick={() => scrollCategory(category.id, 'right')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-gray-800/90 hover:bg-orange-500/90 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
                  aria-label="Scroll right"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Fade overlays */}
              {scrollStates[category.id]?.canScrollLeft && (
                <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
              )}
              {scrollStates[category.id]?.canScrollRight && (
                <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />
              )}
              
              <div 
                ref={el => scrollRefs.current[category.id] = el}
                className="overflow-x-auto hide-scrollbar" 
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  scrollBehavior: 'smooth'
                }}
                onScroll={(e) => updateScrollState(category.id, e.target)}
              >
                <div className="flex gap-4 pr-20">
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
          </div>
        ))}

        {/* Coming Soon Notice */}
        <div className="mt-12 text-center">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-2">
              10 Available Guides & More Coming
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