import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
          <div className="text-6xl mb-8 animate-bounce-gentle">₿</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            The Bitcoin Journey
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Understand money, inflation, and why Bitcoin matters through interactive stories and real-world examples
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/dashboard"
              className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-4 px-8 rounded-2xl text-lg transition-all">
              Watch Preview
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">3</div>
              <div className="text-white/80 text-sm">Learning Levels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/80 text-sm">Concepts Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">🌍</div>
              <div className="text-white/80 text-sm">Multiple Languages</div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="text-9xl absolute top-10 left-10 animate-float">💰</div>
          <div className="text-6xl absolute bottom-20 right-20 animate-float-delayed">📈</div>
          <div className="text-8xl absolute top-1/2 left-1/4 animate-bounce-gentle">🏦</div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Learn About Bitcoin?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📉</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Money Is Losing Value</h3>
              <p className="text-gray-600">
                Since 2020, the US has printed trillions of dollars. Learn how this affects your savings and purchasing power.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Complex Made Simple</h3>
              <p className="text-gray-600">
                We break down economics, inflation, and Bitcoin using stories, analogies, and interactive examples you can understand.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Future-Proof Your Knowledge</h3>
              <p className="text-gray-600">
                Whether Bitcoin succeeds or not, understanding money and inflation will help you make better financial decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Path Preview */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Your Learning Path
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Level 1: The Money Story</h3>
              <p className="text-gray-600 mb-4">
                Discover how money works, why inflation happens, and the problems with our current system.
              </p>
              <div className="text-sm text-orange-600 font-medium">8 Interactive Chapters</div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Level 2: The Practical Path</h3>
              <p className="text-gray-600 mb-4">
                Learn how to safely buy, store, and use Bitcoin. Hands-on tutorials and security best practices.
              </p>
              <div className="text-sm text-gray-500 font-medium">Coming Soon</div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Level 3: The Expert Realm</h3>
              <p className="text-gray-600 mb-4">
                Deep dive into economic principles, technical concepts, and advanced Bitcoin knowledge.
              </p>
              <div className="text-sm text-gray-500 font-medium">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Understand Money & Bitcoin?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands learning why Bitcoin might be the future of money
          </p>
          <Link
            to="/dashboard"
            className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Start Learning Free
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Landing;