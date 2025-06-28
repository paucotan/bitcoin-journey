import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProgressBar from '../components/Navigation/ProgressBar';
import Breadcrumb from '../components/Navigation/Breadcrumb';
import { useApp } from '../context/AppContext';

const LessonView = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { getCurrentLesson, completeLesson } = useApp();
  
  const lesson = getCurrentLesson();

  const handleComplete = () => {
    completeLesson();
    navigate('/dashboard');
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <ProgressBar current={2} total={3} />
      <Breadcrumb />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-6">
          <button 
            onClick={handleBack}
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </button>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {lesson?.title || 'Lesson Not Found'}
          </h1>
          <p className="text-gray-600">Estimated time: {lesson?.estimatedTime}</p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Story Lesson</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="text-4xl mb-4 text-center">🛒💰</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">A Trip to Buy Bread</h3>
              <p className="text-blue-800 leading-relaxed text-lg">
                In 1923 Germany, Anna pushes a wheelbarrow full of money to the bakery. 
                Not to buy bread for a week—just for one loaf. By the time she reaches the store, 
                the price has doubled again.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-green-900 mb-3">Understanding Hyperinflation</h3>
              <p className="text-green-800 leading-relaxed text-lg mb-4">
                Imagine if your favorite coffee shop raised prices every hour. Your $5 morning coffee 
                becomes $10 by lunch, $50 by dinner. That's what happened to German marks.
              </p>
              <div className="bg-white rounded-lg p-4 border border-green-300">
                <h4 className="font-medium text-green-900 mb-2">The Comparison:</h4>
                <p className="text-sm text-green-700">
                  Normal inflation: 2-3% per year | Hyperinflation: 200-300% per month
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-semibold text-orange-900 mb-3">💡 Bitcoin Connection</h3>
              <p className="text-orange-800 leading-relaxed text-lg">
                This is why Bitcoin has a fixed supply of 21 million coins. No government or 
                central bank can print more Bitcoin, making it immune to the kind of hyperinflation 
                that destroyed the German mark.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </button>
          
          <button
            onClick={handleComplete}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Complete Lesson ✓
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonView;