import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

const ChapterView = () => {
  const { chapterId } = useParams();
  const { chapters } = useApp();
  
  const chapter = chapters.find(c => c.id === parseInt(chapterId));
  
  if (!chapter) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Chapter Not Found</h1>
        <Link to="/dashboard" className="text-orange-600 hover:text-orange-700">
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-6">
        <Link 
          to="/dashboard" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Chapter {chapter.order}: {chapter.title}
        </h1>
        <p className="text-gray-600">{chapter.lessons} lessons in this chapter</p>
      </div>

      <div className="bg-white rounded-xl p-8 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Chapter Overview</h2>
        <p className="text-gray-600 mb-6">
          This chapter explores the concept of monetary debasement and hyperinflation through 
          historical examples and interactive learning experiences.
        </p>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Lessons in this Chapter:</h3>
          
          <div className="space-y-3">
            <Link
              to="/lesson/1"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Lesson 1: Germany 1923: The Wheelbarrow Money</h4>
                  <p className="text-sm text-gray-600">~6 minutes • Interactive Story</p>
                </div>
                <span className="text-orange-600">Start →</span>
              </div>
            </Link>
            
            <div className="block p-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-500">Lesson 2: Coming Soon</h4>
                  <p className="text-sm text-gray-400">More lessons coming soon</p>
                </div>
                <span className="text-gray-400">🔒</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterView;