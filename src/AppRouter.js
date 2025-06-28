import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Layout/Header';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import ChapterView from './pages/ChapterView';
import LessonView from './pages/LessonView';

function AppRouter() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Landing page - no header */}
            <Route path="/" element={<Landing />} />
            
            {/* All other routes have header */}
            <Route path="/*" element={
              <>
                <Header />
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/chapter/:chapterId" element={<ChapterView />} />
                  <Route path="/lesson/:lessonId" element={<LessonView />} />
                </Routes>
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default AppRouter;