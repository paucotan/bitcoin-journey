import React from 'react';
import { useNavigate } from 'react-router-dom';

const GuidesIndex = () => {
  const navigate = useNavigate();

  const guides = [
    {
      id: 'first-wallet',
      title: 'Your First Bitcoin Wallet',
      description: 'Learn how to safely store Bitcoin and understand custody options',
      readTime: '8 min read',
      difficulty: 'Beginner',
      status: 'available',
      path: '/guides/first-wallet',
      icon: '💳',
      topics: ['Custodial vs Non-custodial', 'Strike Setup', 'Security Basics', 'Dollar Cost Averaging']
    },
    {
      id: 'buying-bitcoin',
      title: 'Buying Your First Bitcoin',
      description: 'Step-by-step guide to making your first Bitcoin purchase safely',
      readTime: '10 min read',
      difficulty: 'Beginner',
      status: 'coming-soon',
      path: '/guides/buying-bitcoin',
      icon: '💰',
      topics: ['Exchange Safety', 'Fee Comparison', 'Withdrawal Process', 'Common Mistakes']
    },
    {
      id: 'lightning-basics',
      title: 'Lightning Network for Beginners',
      description: 'Understanding Bitcoin\'s instant payment layer and making your first Lightning transaction',
      readTime: '12 min read',
      difficulty: 'Intermediate',
      status: 'coming-soon',
      path: '/guides/lightning-basics',
      icon: '⚡',
      topics: ['Layer 2 Explained', 'Lightning Wallets', 'First Payment', 'Use Cases']
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
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
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

      {/* Guides Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div 
              key={guide.id}
              className={`bg-gray-800/50 border rounded-xl p-6 transition-all duration-300 ${
                guide.status === 'available' 
                  ? 'border-gray-700 hover:border-orange-500/50 hover:bg-gray-800/70 cursor-pointer transform hover:scale-105' 
                  : 'border-gray-800 opacity-60'
              }`}
              onClick={() => guide.status === 'available' && navigate(guide.path)}
            >
              {/* Guide Icon & Status */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{guide.icon}</div>
                {guide.status === 'coming-soon' && (
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-2">
                {guide.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {guide.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs px-2 py-1 rounded border ${getDifficultyColor(guide.difficulty)}`}>
                  {guide.difficulty}
                </span>
                <span className="text-gray-500 text-xs">
                  {guide.readTime}
                </span>
              </div>

              {/* Topics */}
              <div className="space-y-1">
                <div className="text-xs text-gray-500 mb-2">What you'll learn:</div>
                {guide.topics.slice(0, 3).map((topic, index) => (
                  <div key={index} className="text-xs text-gray-400 flex items-center gap-2">
                    <span className="text-orange-400">•</span>
                    {topic}
                  </div>
                ))}
                {guide.topics.length > 3 && (
                  <div className="text-xs text-gray-500">
                    +{guide.topics.length - 3} more topics
                  </div>
                )}
              </div>

              {/* CTA */}
              {guide.status === 'available' && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <span className="text-orange-400 text-sm font-medium">
                    Start Guide →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-12 text-center">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-white mb-2">
              More Guides Coming Soon
            </h3>
            <p className="text-gray-400 text-sm">
              We're working on additional guides covering hardware wallets, advanced security, 
              running your own node, and more. Each guide is thoroughly tested before publication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesIndex;