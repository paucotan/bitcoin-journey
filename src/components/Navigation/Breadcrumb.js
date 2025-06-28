import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Breadcrumb = () => {
  const { chapterId, lessonId } = useParams();
  const { getCurrentChapter, getCurrentLesson } = useApp();
  
  const currentChapter = getCurrentChapter();
  const currentLesson = getCurrentLesson();

  return (
    <div className="bg-gray-100 px-6 py-3 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center space-x-2 text-sm">
          <Link
            to="/dashboard"
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            The Money Story
          </Link>
          
          {currentChapter && (
            <>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link
                to={`/chapter/${currentChapter.id}`}
                className="text-gray-600 hover:text-gray-900"
              >
                Chapter {currentChapter.order}: {currentChapter.title}
              </Link>
            </>
          )}
          
          {currentLesson && lessonId && (
            <>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900 font-medium">
                {currentLesson.title}
              </span>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;