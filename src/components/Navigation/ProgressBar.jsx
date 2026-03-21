import React from 'react';
import { useApp } from '../../context/AppContext';

const ProgressBar = ({ current, total }) => {
  const { user, getCurrentChapter } = useApp();
  const currentChapter = getCurrentChapter();

  return (
    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">
            {currentChapter ? `Chapter ${currentChapter.order}: ${currentChapter.title}` : 'Learning Journey'}
          </span>
          <span className="text-sm">🔥 {user.streak} day streak</span>
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
};

export default ProgressBar;