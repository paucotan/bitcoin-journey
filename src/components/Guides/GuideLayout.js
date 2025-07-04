import React from 'react';
import { useNavigate } from 'react-router-dom';

const GuideLayout = ({ children, title, description, readTime, learningObjectives, nextGuide, bookRecommendation }) => {
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

      {/* Learning Objectives */}
      {learningObjectives && learningObjectives.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <h3 className="text-lg font-bold text-blue-400 mb-3">What You'll Learn</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="space-y-1">
                {learningObjectives.slice(0, Math.ceil(learningObjectives.length / 2)).map((objective, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">{objective}</span>
                  </div>
                ))}
              </div>
              {learningObjectives.length > 1 && (
                <div className="space-y-1">
                  {learningObjectives.slice(Math.ceil(learningObjectives.length / 2)).map((objective, index) => (
                    <div key={index + Math.ceil(learningObjectives.length / 2)} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{objective}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-invert prose-lg max-w-none">
          {children}
        </div>

        {/* Book Recommendation */}
        {bookRecommendation && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Recommended Reading</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:w-1/3 p-6">
                  <img
                    src={bookRecommendation.imageUrl}
                    alt={`${bookRecommendation.title} by ${bookRecommendation.author}`}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{bookRecommendation.title}</h3>
                  <p className="text-orange-400 font-medium mb-3">by {bookRecommendation.author}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {bookRecommendation.description}
                  </p>
                  {bookRecommendation.highlights && (
                    <div className="mb-4">
                      <p className="text-gray-300 text-sm mb-2"><strong>What you'll discover:</strong></p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {bookRecommendation.highlights.map((highlight, index) => (
                          <li key={index}>• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <a
                    href={bookRecommendation.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm"
                  >
                    <span>📚</span>
                    Get on Amazon
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

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