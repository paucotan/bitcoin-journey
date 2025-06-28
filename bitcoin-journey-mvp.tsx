import React, { useState, useEffect } from 'react';
import { ChevronRight, BookOpen, Trophy, Clock, Check, Play, Calculator, Users, Globe } from 'lucide-react';

// Mock Data Structure (representing our modular backend)
const mockData = {
  learningPaths: [
    {
      id: 1,
      title: "The Money Story",
      level: "Beginner",
      description: "Discover why money matters and how it shapes our world",
      chapters: 8,
      estimatedHours: 4
    }
  ],
  chapters: [
    {
      id: 1,
      pathId: 1,
      title: "What is Money Really?",
      order: 1,
      lessons: 4,
      completed: false,
      current: true
    },
    {
      id: 2,
      pathId: 1,
      title: "The Wine Gets Watered Down",
      order: 2,
      lessons: 4,
      completed: false
    },
    {
      id: 3,
      pathId: 1,
      title: "When Money Goes Bad",
      order: 3,
      lessons: 3,
      completed: false
    },
    {
      id: 4,
      pathId: 1,
      title: "The Gold Standard Era",
      order: 4,
      lessons: 4,
      completed: false
    }
  ],
  currentLesson: {
    id: 7,
    chapterId: 3,
    title: "Germany 1923: The Wheelbarrow Money",
    estimatedTime: "6 min",
    modules: [
      {
        type: "story",
        content: {
          title: "A Trip to Buy Bread",
          story: "In 1923 Germany, Anna pushes a wheelbarrow full of money to the bakery. Not to buy bread for a week—just for one loaf. By the time she reaches the store, the price has doubled again.",
          image: "🛒💰"
        }
      },
      {
        type: "analogy",
        content: {
          concept: "Hyperinflation",
          analogy: "Imagine if your favorite coffee shop raised prices every hour. Your $5 morning coffee becomes $10 by lunch, $50 by dinner. That's what happened to German marks.",
          comparison: "Normal inflation: 2-3% per year | Hyperinflation: 200-300% per month"
        }
      },
      {
        type: "interactive",
        content: {
          title: "Hyperinflation Calculator",
          description: "See how quickly money loses value during hyperinflation"
        }
      }
    ]
  },
  concepts: [
    { id: 1, name: "Inflation", difficulty: "beginner", learned: true },
    { id: 2, name: "Hyperinflation", difficulty: "beginner", learned: false },
    { id: 3, name: "Cantillon Effect", difficulty: "intermediate", learned: false }
  ]
};

// Components
const LandingPage = ({ onGetStarted }) => (
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
          <button
            onClick={onGetStarted}
            className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Journey
          </button>
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
        <button
          onClick={onGetStarted}
          className="bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Start Learning Free
        </button>
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
  <header className="bg-white border-b border-gray-200 px-6 py-4">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">₿</div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">The Bitcoin Journey</h1>
          <p className="text-sm text-gray-600">Understanding Money & Bitcoin</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          onChange={(e) => onLanguageChange(e.target.value)}
        >
          <option value="en">🇺🇸 English</option>
          <option value="es">🇪🇸 Español</option>
          <option value="pt">🇧🇷 Português</option>
        </select>
        <div className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-medium">Level 1</span>
        </div>
      </div>
    </div>
  </header>
);

const ProgressBar = ({ current, total, streak }) => (
  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Chapter 3: When Money Goes Bad</span>
        <span className="text-sm">🔥 {streak} day streak</span>
      </div>
      <div className="w-full bg-white/20 rounded-full h-2">
        <div
          className="bg-white rounded-full h-2 transition-all duration-300"
          style={{ width: `${(current / total) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs mt-1">
        <span>Lesson {current} of {total}</span>
        <span>{Math.round((current / total) * 100)}% Complete</span>
      </div>
    </div>
  </div>
);

const HyperInflationCalculator = () => {
  const [amount, setAmount] = useState(1000);
  const [months, setMonths] = useState(1);
  const [inflationRate] = useState(300); // 300% per month like Weimar Germany

  const finalValue = amount * Math.pow(1 + inflationRate/100, months);
  const purchasing_power = amount / Math.pow(1 + inflationRate/100, months);

  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
      <div className="flex items-center space-x-2 mb-4">
        <Calculator className="w-5 h-5 text-red-600" />
        <h3 className="text-lg font-semibold text-red-900">Hyperinflation Calculator</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Starting Amount (German Marks)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Months of Hyperinflation
            </label>
            <input
              type="range"
              min="1"
              max="12"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full"
            />
            <span className="text-sm text-gray-600">{months} months</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3">Results</h4>
          <div className="space-y-2">
            <div>
              <span className="text-sm text-gray-600">Nominal Value:</span>
              <div className="text-2xl font-bold text-red-600">
                {finalValue.toLocaleString()} marks
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-600">Real Purchasing Power:</span>
              <div className="text-lg font-semibold text-green-600">
                {purchasing_power.toFixed(2)} marks (today's value)
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              At {inflationRate}% monthly inflation rate
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          💡 <strong>Key Insight:</strong> Your money's face value increases, but you can buy {((1/purchasing_power) * amount).toFixed(0)}x less with it!
        </p>
      </div>
    </div>
  );
};

const LessonModule = ({ module, index }) => {
  if (module.type === 'story') {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <div className="text-4xl mb-4 text-center">{module.content.image}</div>
        <h3 className="text-xl font-semibold text-blue-900 mb-3">{module.content.title}</h3>
        <p className="text-blue-800 leading-relaxed text-lg">{module.content.story}</p>
      </div>
    );
  }

  if (module.type === 'analogy') {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
        <h3 className="text-xl font-semibold text-green-900 mb-3">Understanding {module.content.concept}</h3>
        <p className="text-green-800 leading-relaxed text-lg mb-4">{module.content.analogy}</p>
        <div className="bg-white rounded-lg p-4 border border-green-300">
          <h4 className="font-medium text-green-900 mb-2">The Comparison:</h4>
          <p className="text-sm text-green-700">{module.content.comparison}</p>
        </div>
      </div>
    );
  }

  if (module.type === 'interactive') {
    return <HyperInflationCalculator />;
  }

  return null;
};

const ChapterCard = ({ chapter, onClick }) => (
  <div
    className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
      chapter.completed
        ? 'border-green-200 bg-green-50 hover:bg-green-100'
        : chapter.current
        ? 'border-orange-200 bg-orange-50 hover:bg-orange-100'
        : 'border-gray-200 bg-white hover:bg-gray-50'
    }`}
    onClick={onClick}
  >
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center space-x-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
          chapter.completed ? 'bg-green-500 text-white' :
          chapter.current ? 'bg-orange-500 text-white' :
          'bg-gray-300 text-gray-600'
        }`}>
          {chapter.completed ? <Check className="w-4 h-4" /> : chapter.order}
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{chapter.title}</h3>
      </div>
      {!isLocked &&       <ChevronRight className="w-5 h-5 text-gray-400" />}
    </div>
    <div className="flex items-center space-x-4 text-sm text-gray-600">
      <span className="flex items-center space-x-1">
        <BookOpen className="w-4 h-4" />
        <span>{chapter.lessons} lessons</span>
      </span>
      {chapter.current && (
        <span className="flex items-center space-x-1 text-orange-600">
          <Play className="w-4 h-4" />
          <span>Continue</span>
        </span>
      )}
    </div>
  </div>
);

const Dashboard = ({ onStartLesson }) => (
  <div className="max-w-6xl mx-auto px-6 py-8">
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Level 1: The Money Story</h2>
          <p className="text-gray-600">Understanding the fundamentals of money and why Bitcoin matters</p>
        </div>

        <div className="space-y-4">
          {mockData.chapters.map((chapter, index) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              onClick={() => onStartLesson()}
            />
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">🎓 What You'll Learn</h3>
          <ul className="text-purple-800 space-y-1">
            <li>• Why money was invented and how it evolved</li>
            <li>• How inflation silently steals your wealth</li>
            <li>• Historical examples of monetary collapse</li>
            <li>• Why Bitcoin represents a new monetary paradigm</li>
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Lessons Completed</span>
              <span className="font-medium">8/32</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 rounded-full h-2" style={{width: '25%'}}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>Time Spent Learning</span>
              <span className="font-medium">47 minutes</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Concepts Mastered</h3>
          <div className="space-y-2">
            {mockData.concepts.map(concept => (
              <div key={concept.id} className="flex items-center space-x-2">
                <div className={`w-4 h-4 rounded-full ${concept.learned ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <span className={`text-sm ${concept.learned ? 'text-gray-900' : 'text-gray-500'}`}>
                  {concept.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">🔥 Keep Your Streak!</h3>
          <p className="text-yellow-800 text-sm mb-3">You're on a 3-day learning streak. Complete today's lesson to continue!</p>
          <button
            onClick={onStartLesson}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ScrollableStoryLesson = ({ lesson, onComplete, onBack }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const storyData = {
    sections: [
      {
        id: 1,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        content: {
          year: "1923",
          location: "Berlin, Germany",
          character: "👩‍🍳 Anna",
          scene: "Anna's Kitchen",
          narrative: "Anna counts her money for today's shopping. She needs bread for her family.",
          visual: "💰",
          mood: "hopeful"
        }
      },
      {
        id: 2,
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        content: {
          time: "Morning",
          scene: "Walking to Market",
          narrative: "Anna fills her wheelbarrow with paper money. It takes both hands to carry enough for one loaf of bread.",
          visual: "🛒💸",
          revelation: "Wait... why does she need a wheelbarrow for money?",
          mood: "confused"
        }
      },
      {
        id: 3,
        background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        content: {
          time: "At the Bakery",
          scene: "Price Shock",
          narrative: "The baker shakes his head. 'Prices went up again this morning. You need twice as much now.'",
          visual: "🥖📈",
          price: "From 10,000 marks to 20,000 marks... for one loaf!",
          emotion: "😰",
          mood: "panic"
        }
      },
      {
        id: 4,
        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        content: {
          scene: "The Revelation",
          narrative: "This is hyperinflation. When governments print too much money, each bill becomes worth less and less.",
          visual: "🖨️💵",
          analogy: "Like watering down wine - more liquid, but weaker taste",
          connection: "💡 This is why Bitcoin has a fixed supply of 21 million coins",
          mood: "understanding"
        }
      }
    ]
  };

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-4 left-4 z-40 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-gray-900 font-medium text-sm px-4 py-2 rounded-full shadow-lg transition-all"
      >
        ← Dashboard
      </button>

      {/* Story Sections */}
      {storyData.sections.map((section, index) => (
        <div
          key={section.id}
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
          style={{ background: section.background }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="text-9xl animate-float absolute top-10 left-10">{section.content.visual}</div>
            <div className="text-6xl animate-float-delayed absolute bottom-20 right-20">{section.content.emotion || "💭"}</div>
          </div>

          <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
            {/* Year/Location Badge */}
            {section.content.year && (
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-lg font-semibold mb-6">
                {section.content.year} • {section.content.location}
              </div>
            )}

            {/* Character Introduction */}
            {section.content.character && (
              <div className="text-6xl mb-4">{section.content.character}</div>
            )}

            {/* Main Visual */}
            <div className="text-8xl mb-8 animate-bounce-gentle">{section.content.visual}</div>

            {/* Scene Title */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {section.content.scene}
            </h2>

            {/* Narrative */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              {section.content.narrative}
            </p>

            {/* Clickable Interactive Elements */}
            {section.content.clickableElement && (
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 mb-6 transition-all transform hover:scale-105">
                <p className="text-white font-medium">
                  🔍 {section.content.clickableElement.text}
                </p>
              </button>
            )}

            {section.content.interactiveHint && (
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
                <p className="text-white/80 text-sm">
                  {section.content.interactiveHint}
                </p>
              </div>
            )}
            {section.content.revelation && (
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6">
                <p className="text-lg text-white/80 italic">
                  {section.content.revelation}
                </p>
              </div>
            )}

            {section.content.price && (
              <div className="bg-red-500/20 backdrop-blur-sm border border-red-300/30 rounded-2xl p-6 mb-6">
                <p className="text-xl text-white font-bold">
                  {section.content.price}
                </p>
              </div>
            )}

            {section.content.analogy && (
              <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-300/30 rounded-2xl p-6 mb-6">
                <p className="text-lg text-white">
                  💡 <strong>Think of it like:</strong> {section.content.analogy}
                </p>
              </div>
            )}

            {section.content.connection && (
              <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-300/30 rounded-2xl p-6 mb-6">
                <p className="text-lg text-white font-semibold">
                  {section.content.connection}
                </p>
              </div>
            )}

            {/* Continue Indicator */}
            {index < storyData.sections.length - 1 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce text-white/60">
                  <ChevronRight className="w-6 h-6 rotate-90" />
                </div>
                <p className="text-sm text-white/60 mt-2">Scroll to continue</p>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Interactive Calculator Section */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Try It Yourself
            </h2>
            <p className="text-xl text-gray-300">
              See how hyperinflation destroys savings
            </p>
          </div>

          <HyperInflationCalculator />
        </div>
      </div>

      {/* Lesson Complete Section */}
      <div className="min-h-screen bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="text-8xl mb-8">🎉</div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            You Did It!
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            You now understand how hyperinflation works and why fixed supply matters.
            Ready for the next part of the journey?
          </p>

          <div className="space-y-4">
            <button
              onClick={onComplete}
              className="bg-white text-green-600 hover:bg-green-50 font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Continue to Next Lesson
            </button>
            <div className="text-green-200 text-sm">
              ⭐ +50 XP earned • 🔥 Streak continued
            </div>
          </div>
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

const LessonView = ({ lesson, onComplete, onBack }) => {
  return <ScrollableStoryLesson lesson={lesson} onComplete={onComplete} onBack={onBack} />;
};

const ClaudeTutor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'claude',
      content: "Hi! I'm Claude, your Bitcoin tutor. I'm here to answer any questions about what you're learning. What would you like to know more about?"
    }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [quickQuestions, setQuickQuestions] = useState([
    "Why does printing money cause inflation?",
    "How is Bitcoin different from the dollar?",
    "What backs the US dollar?"
  ]);

  // Generate dynamic follow-up questions based on conversation
  const generateFollowUpQuestions = (lastQuestion, lastAnswer) => {
    if (lastQuestion.toLowerCase().includes('inflation')) {
      return [
        "Who benefits from inflation?",
        "How can I protect my savings from inflation?",
        "Has this happened in other countries?"
      ];
    } else if (lastQuestion.toLowerCase().includes('different') || lastQuestion.toLowerCase().includes('bitcoin')) {
      return [
        "How does Bitcoin mining work?",
        "Is Bitcoin safe to use?",
        "Why is Bitcoin volatile?"
      ];
    } else if (lastQuestion.toLowerCase().includes('backs') || lastQuestion.toLowerCase().includes('dollar')) {
      return [
        "What happened in 1971?",
        "Why did we abandon the gold standard?",
        "What is fiat money?"
      ];
    } else if (lastQuestion.toLowerCase().includes('war')) {
      return [
        "How much money was printed during COVID?",
        "Who decides to print money?",
        "What is the Federal Reserve?"
      ];
    }
    return [
      "Tell me about Bitcoin's history",
      "Why do governments print money?",
      "What makes Bitcoin valuable?"
    ];
  };

  const handleSendMessage = async (question = currentInput) => {
    if (!question.trim()) return;

    const userMessage = { type: 'user', content: question };
    setMessages(prev => [...prev, userMessage]);
    setCurrentInput('');
    setIsLoading(true);

    try {
      // Simulate Claude API call - in real implementation, use window.claude.complete
      const claudeResponse = await simulateClaudeResponse(question);
      const newClaudeMessage = { type: 'claude', content: claudeResponse };
      setMessages(prev => [...prev, newClaudeMessage]);

      // Update quick questions with relevant follow-ups
      const followUps = generateFollowUpQuestions(question, claudeResponse);
      setQuickQuestions(followUps);
    } catch (error) {
      setMessages(prev => [...prev, {
        type: 'claude',
        content: "I'm having trouble connecting right now. Try asking your question again!"
      }]);
    }
    setIsLoading(false);
  };

  const simulateClaudeResponse = (question) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const q = question.toLowerCase();
        if (q.includes('inflation')) {
          resolve("Great question! When governments print more money, there's more dollars chasing the same goods. It's like if everyone at an auction suddenly got twice as much money - prices would go up! The dollar in your pocket becomes worth less because there are more dollars in circulation.");
        } else if (q.includes('different') || q.includes('bitcoin')) {
          resolve("Bitcoin is fundamentally different because it has a fixed supply of 21 million coins. No government or central bank can print more Bitcoin, unlike dollars where the Federal Reserve can create trillions at will. This makes Bitcoin 'hard money' like gold used to be.");
        } else if (q.includes('backs')) {
          resolve("Since 1971, the US dollar isn't backed by gold or anything physical - it's backed by trust in the US government. This is called 'fiat money' meaning 'by decree.' The government simply declares it has value, and we accept it because others do too.");
        } else if (q.includes('war')) {
          resolve("Wars are incredibly expensive! Governments need massive funds quickly, so they print money to pay for weapons, soldiers, and supplies. This happened in WWI, WWII, Vietnam, and recently with conflicts in Iraq and Afghanistan. Each time, the money supply expanded dramatically.");
        } else if (q.includes('invented') || q.includes('created') || q.includes('when')) {
          resolve("Bitcoin was invented in 2008 by someone using the pseudonym Satoshi Nakamoto. The Bitcoin white paper was published on October 31, 2008, and the first Bitcoin block (called the Genesis Block) was mined on January 3, 2009. Interestingly, Satoshi embedded a newspaper headline in that first block: 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks' - a reference to the financial crisis that inspired Bitcoin's creation.");
        } else if (q.includes('mining')) {
          resolve("Bitcoin mining is how new bitcoins are created and transactions are verified. Miners use powerful computers to solve complex mathematical puzzles. The first to solve it gets to add a new block of transactions to the blockchain and receives newly created bitcoins as a reward. This process secures the network and prevents cheating.");
        } else if (q.includes('volatile') || q.includes('price')) {
          resolve("Bitcoin is volatile because it's still a young asset finding its true value. Unlike stocks that represent companies with earnings, Bitcoin's value comes from its usefulness as money and store of value. As more people adopt it and institutions buy it, the price swings should reduce over time. Think of it like a new technology - early adoption is always bumpy!");
        } else {
          resolve("That's a thoughtful question! The key thing to remember is that Bitcoin's rules are set in code and can't be changed easily, while government money can be printed whenever officials decide they need more. What specific aspect would you like me to explain further?");
        }
      }, 1000);
    });
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-110"
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            🤖
          </div>
          <span className="hidden sm:block font-medium">Ask Claude</span>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            🤖
          </div>
          <div>
            <h3 className="font-semibold">Claude Tutor</h3>
            <p className="text-xs text-blue-100">Your Bitcoin learning assistant</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white/80 hover:text-white"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto p-4 space-y-3">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs p-3 rounded-2xl ${
              message.type === 'user'
                ? 'bg-blue-500 text-white rounded-br-md'
                : 'bg-gray-100 text-gray-800 rounded-bl-md'
            }`}>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-bl-md">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Questions */}
      <div className="px-4 py-2 border-t border-gray-100">
        <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
        <div className="flex flex-wrap gap-1">
          {quickQuestions.slice(0, 3).map((question, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(question)}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex space-x-2">
          <input
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask me anything about Bitcoin..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!currentInput.trim() || isLoading}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
const BitcoinJourneyApp = () => {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' | 'lesson'
  const [user, setUser] = useState({
    id: 1,
    name: 'Alex',
    level: 1,
    streak: 3,
    language: 'en'
  });

  const handleStartLesson = () => {
    setCurrentView('lesson');
  };

  const handleCompleteLesson = () => {
    // Here we would update progress in backend
    setCurrentView('dashboard');
    // Show completion animation/feedback
  };

  const handleLanguageChange = (lang) => {
    setUser(prev => ({ ...prev, language: lang }));
    // Here we would fetch content in new language
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'landing' ? (
        <LandingPage onGetStarted={handleGetStarted} />
      ) : (
        <>
          <Header user={user} onLanguageChange={handleLanguageChange} />

          {currentView === 'lesson' && (
            <ProgressBar current={2} total={3} streak={user.streak} />
          )}

          {currentView === 'dashboard' ? (
            <Dashboard onStartLesson={handleStartLesson} />
          ) : (
            <LessonView
              lesson={mockData.currentLesson}
              onComplete={handleCompleteLesson}
              onBack={() => setCurrentView('dashboard')}
            />
          )}
        </>
      )}

      {/* Claude Tutor - Always Available except on landing */}
      {currentView !== 'landing' && <ClaudeTutor />}
    </div>
  );
};

export default BitcoinJourneyApp;
