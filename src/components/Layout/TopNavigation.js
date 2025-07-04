import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TopNavigation = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Don't show on dashboard routes since they have their own header
  const isDashboardRoute = location.pathname.startsWith('/dashboard') || 
                          location.pathname.startsWith('/chapter') || 
                          location.pathname.startsWith('/lesson');
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar if at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Only add scroll listener if not on dashboard routes
    if (!isDashboardRoute) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY, isDashboardRoute]);
  
  if (isDashboardRoute) {
    return null;
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ 
        transform: isVisible ? 'translateY(0) translateZ(0)' : 'translateY(-100%) translateZ(0)',
        willChange: 'transform',
        isolation: 'isolate'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              ₿
            </div>
            <span className="text-white font-bold text-lg hidden sm:block drop-shadow-lg">
              Bitcoin Journey
            </span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/guides"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                location.pathname.startsWith('/guides')
                  ? 'bg-orange-500 text-white shadow-lg' 
                  : 'text-gray-200 hover:text-white hover:bg-white/10 drop-shadow-lg'
              }`}
            >
              📚 Guides
            </Link>
            
            <Link
              to="/about"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/about'
                  ? 'bg-orange-500 text-white shadow-lg' 
                  : 'text-gray-200 hover:text-white hover:bg-white/10 drop-shadow-lg'
              }`}
            >
              About
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;