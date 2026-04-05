import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavigation from './components/Layout/TopNavigation';
import Landing from './pages/Landing';
import About from './pages/About';

const GuidesIndex = lazy(() => import('./pages/guides/GuidesIndex'));
const FirstWallet = lazy(() => import('./pages/guides/FirstWallet'));
const WhatIsBitcoin = lazy(() => import('./pages/guides/WhatIsBitcoin'));
const SecurityChecklist = lazy(() => import('./pages/guides/SecurityChecklist'));
const DollarCostAveraging = lazy(() => import('./pages/guides/DollarCostAveraging'));
const BitcoinFees = lazy(() => import('./pages/guides/BitcoinFees'));
const WhyBitcoinMattersNow = lazy(() => import('./pages/guides/WhyBitcoinMattersNow'));
const SendReceiveBitcoin = lazy(() => import('./pages/guides/SendReceiveBitcoin'));
const BitcoinSuccessStories = lazy(() => import('./pages/guides/BitcoinSuccessStories'));
const BitcoinCommonMistakes = lazy(() => import('./pages/guides/BitcoinCommonMistakes'));
const BitcoinMining = lazy(() => import('./pages/guides/BitcoinMining'));
const HardwareWallets = lazy(() => import('./pages/guides/HardwareWallets'));
const TimePreference = lazy(() => import('./pages/guides/TimePreference'));
const WhatIsMoney = lazy(() => import('./pages/guides/WhatIsMoney'));

function AppRouter() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <TopNavigation />
        <Suspense fallback={<div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
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
            <Route path="/guides/bitcoin-mining" element={<BitcoinMining />} />
            <Route path="/guides/hardware-wallets" element={<HardwareWallets />} />
            <Route path="/guides/time-preference" element={<TimePreference />} />
            <Route path="/guides/what-is-money" element={<WhatIsMoney />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default AppRouter;
