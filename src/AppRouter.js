import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Layout/Header';
import TopNavigation from './components/Layout/TopNavigation';
import Landing from './pages/Landing';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import ChapterView from './pages/ChapterView';
import LessonView from './pages/LessonView';
import GuidesIndex from './pages/guides/GuidesIndex';
import FirstWallet from './pages/guides/FirstWallet';
import WhatIsBitcoin from './pages/guides/WhatIsBitcoin';
import SecurityChecklist from './pages/guides/SecurityChecklist';
import DollarCostAveraging from './pages/guides/DollarCostAveraging';
import BitcoinFees from './pages/guides/BitcoinFees';
import WhyBitcoinMattersNow from './pages/guides/WhyBitcoinMattersNow';
import SendReceiveBitcoin from './pages/guides/SendReceiveBitcoin';
import BitcoinSuccessStories from './pages/guides/BitcoinSuccessStories';
import BitcoinCommonMistakes from './pages/guides/BitcoinCommonMistakes';

function AppRouter() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <TopNavigation />
          <Routes>
            {/* Landing page - no header */}
            <Route path="/" element={<Landing />} />
            
            {/* About page - no header */}
            <Route path="/about" element={<About />} />
            
            {/* Guides section - no header (has its own navigation) */}
            <Route path="/guides" element={<GuidesIndex />} />
            <Route path="/guides/first-wallet" element={<FirstWallet />} />
            <Route path="/guides/what-is-bitcoin" element={<WhatIsBitcoin />} />
            <Route path="/guides/why-bitcoin-matters-now" element={<WhyBitcoinMattersNow />} />
            <Route path="/guides/send-receive-bitcoin" element={<SendReceiveBitcoin />} />
            <Route path="/guides/bitcoin-success-stories" element={<BitcoinSuccessStories />} />
            <Route path="/guides/bitcoin-common-mistakes" element={<BitcoinCommonMistakes />} />
            <Route path="/guides/security-checklist" element={<SecurityChecklist />} />
            <Route path="/guides/dollar-cost-averaging" element={<DollarCostAveraging />} />
            <Route path="/guides/bitcoin-fees" element={<BitcoinFees />} />
            
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