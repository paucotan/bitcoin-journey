import React from 'react';
import { useNavigate } from 'react-router-dom';

const GuideLayout = ({ children, title, description, readTime, nextGuide }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-16">
      {/* Header */}
      <div className="bg-black/50 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <button 
            onClick={() => navigate('/guides')}
            className="text-orange-400 hover:text-orange-300 text-sm mb-4 flex items-center gap-2 transition-colors"
          >
            ← Back to Guides
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {title}
          </h1>
          {description && (
            <p className="text-gray-300 text-lg mb-3">
              {description}
            </p>
          )}
          {readTime && (
            <div className="text-orange-400 text-sm">
              📖 {readTime} read
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-invert prose-lg max-w-none">
          {children}
        </div>


        {/* Share Article */}
        <div className="mt-12 text-center">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-lg font-bold text-white mb-3">
              Found this helpful?
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Share this guide with someone who needs to learn about Bitcoin
            </p>
            <button 
              onClick={() => {
                const url = window.location.href;
                const text = `Just learned about ${title.toLowerCase()}! This Bitcoin guide is incredibly helpful for beginners:`;
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
              }}
              className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 mx-auto"
            >
              Share on 
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Back to Guides */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/guides')}
            className="text-orange-400 hover:text-orange-300 underline transition-colors"
          >
            ← Back to All Guides
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideLayout;