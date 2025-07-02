import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Trophy, Play, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ParallelTimeline from '../components/UI/ParallelTimeline';

const ChapterCard = ({ chapter }) => {
  const status = chapter.completed ? 'complete' : 
                chapter.current ? 'in_progress' : 'locked';
  
  return (
    <Link
      to={`/chapter/${chapter.id}`}
      className={`p-6 rounded-xl border-2 transition-all cursor-pointer block ${
        status === 'complete'
          ? 'border-green-200 bg-green-50 hover:bg-green-100'
          : status === 'in_progress'
          ? 'border-orange-200 bg-orange-50 hover:bg-orange-100'
          : 'border-gray-200 bg-white hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            status === 'complete' ? 'bg-green-500 text-white' :
            status === 'in_progress' ? 'bg-orange-500 text-white' :
            'bg-gray-300 text-gray-600'
          }`}>
            {status === 'complete' ? <Check className="w-4 h-4" /> : chapter.order}
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{chapter.title}</h3>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <span className="flex items-center space-x-1">
          <BookOpen className="w-4 h-4" />
          <span>{chapter.lessons} lessons</span>
        </span>
        {status === 'in_progress' && (
          <span className="flex items-center space-x-1 text-orange-600">
            <Play className="w-4 h-4" />
            <span>Continue</span>
          </span>
        )}
      </div>
    </Link>
  );
};

const Dashboard = () => {
  const { user, chapters, getChapterProgress } = useApp();
  const chapterProgress = getChapterProgress();

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Level 1: The Money Story</h2>
            <p className="text-gray-600">Understanding the fundamentals of money and why Bitcoin matters</p>
          </div>

          <div className="space-y-4">
            {chapters.map((chapter) => (
              <ChapterCard key={chapter.id} chapter={chapter} />
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

          {/* Bitcoin Museum Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">🏛️ The Bitcoin Museum</h2>
              <p className="text-gray-600">Explore the parallel timelines that led to Bitcoin's creation</p>
            </div>
            
            <ParallelTimeline />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Lessons Completed</span>
                <span className="font-medium">{user.lessonsCompleted}/{user.totalLessons}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full h-3" 
                  style={{width: `${(user.lessonsCompleted / user.totalLessons) * 100}%`}}
                ></div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-600">Time Spent</span>
                  <div className="font-medium">{user.timeSpent} minutes</div>
                </div>
                <div>
                  <span className="text-gray-600">Streak</span>
                  <div className="font-medium">🔥 {user.streak} days</div>
                </div>
              </div>
              
              {/* Quick Progress Overview */}
              <div className="pt-2 border-t border-gray-100">
                <div className="text-xs text-gray-600 mb-2">Chapter Progress</div>
                <div className="space-y-2">
                  {chapterProgress.map(chapter => (
                    <div key={chapter.id} className="flex items-center justify-between text-xs">
                      <span>{chapter.title}</span>
                      <span className={
                        chapter.status === 'complete' ? 'text-green-600' :
                        chapter.status === 'in_progress' ? 'text-orange-600' :
                        'text-gray-400'
                      }>
                        {chapter.status === 'complete' ? '✓ Complete' :
                         chapter.status === 'in_progress' ? '📖 In Progress' :
                         '🔒 Locked'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">🔥 Keep Your Streak!</h3>
            <p className="text-yellow-800 text-sm mb-4">You're on a {user.streak}-day learning streak. Complete today's lesson to continue!</p>
            
            {/* Current Lesson Preview */}
            <div className="bg-white/50 rounded-lg p-3 mb-4">
              <div className="text-xs text-gray-600 mb-1">Up Next:</div>
              <div className="font-medium text-sm text-gray-900">Germany 1923: The Wheelbarrow Money</div>
              <div className="text-xs text-gray-600">Chapter 3 • Lesson 2 • ~6 min</div>
            </div>
            
            <Link
              to="/lesson/1"
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-all transform hover:scale-105 shadow-md block text-center"
            >
              Continue Learning →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;