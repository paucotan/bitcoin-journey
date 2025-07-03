import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Layout/Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import ChapterView from './pages/ChapterView';
import LessonView from './pages/LessonView';
import GuidesIndex from './pages/guides/GuidesIndex';
import FirstWallet from './pages/guides/FirstWallet';

function AppRouter() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Landing page - no header */}
            <Route path="/" element={<Landing />} />
            
            {/* About page - no header */}
            <Route path="/about" element={<About />} />
            
            {/* Guides section - no header (has its own navigation) */}
            <Route path="/guides" element={<GuidesIndex />} />
            <Route path="/guides/first-wallet" element={<FirstWallet />} />
            
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