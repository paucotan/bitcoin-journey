import React, { useState, useEffect } from 'react';

const ProgressSidebar = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [isAutoHidden, setIsAutoHidden] = useState(false);

  const sections = [
    { id: 'hero', label: 'Introduction', icon: '🌅' },
    { id: 'crisis', label: 'Monetary Crisis', icon: '📈' },
    { id: 'charts', label: 'The Evidence', icon: '📊' },
    { id: 'calculator', label: 'Dollar Calculator', icon: '🧮' },
    { id: 'societal-decline', label: 'Great Divergence', icon: '📉' },
    { id: 'timeline', label: 'Timeline', icon: '⏰' },
    { id: 'moral-code-section', label: 'Bitcoin\'s Code', icon: '⚖️' },
    { id: 'bitcoin-vs-crypto', label: 'Why Bitcoin', icon: '🌳' },
    { id: 'final-cta', label: 'Choose Bitcoin', icon: '🎯' }
  ];

  useEffect(() => {
    let timer = null;

    const handleScroll = () => {
      // Show sidebar after scrolling past hero
      const shouldBeVisible = window.scrollY > 300;
      setIsVisible(shouldBeVisible);

      if (shouldBeVisible) {
        // Show sidebar immediately when scrolling
        setIsAutoHidden(false);

        // Clear existing timer
        if (timer) {
          clearTimeout(timer);
        }

        // Set new timer to hide after 1 second of no scrolling
        timer = setTimeout(() => {
          setIsAutoHidden(true);
        }, 1000);
      }

      // Find active section
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );

      let currentSection = 0;
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = index;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const progressPercentage = ((activeSection + 1) / sections.length) * 100;

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div 
        className={`relative transition-opacity duration-500 ease-out ${
          isAutoHidden && !isExpanded ? 'opacity-0' : 'opacity-100'
        }`}
        onMouseEnter={() => {
          setIsExpanded(true);
          setIsAutoHidden(false); // Override auto-hide on hover
        }}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Collapsed State - Progress Line + Current Section */}
        <div className={`transition-all duration-500 ease-out ${
          isExpanded ? 'opacity-0 blur-sm translate-y-2 scale-98' : 'opacity-100 blur-none translate-y-0 scale-100'
        }`}>
          <div className="relative flex items-center">
            {/* Progress Line */}
            <div className="relative">
              {/* Background line */}
              <div className="w-0.5 h-80 bg-gray-600/30 rounded-full"></div>
              
              {/* Progress fill */}
              <div 
                className="absolute top-0 left-0 w-0.5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full transition-all duration-500"
                style={{ height: `${(progressPercentage / 100) * 320}px` }}
              ></div>
              
              {/* Current section indicator */}
              <div
                className="absolute -left-1 w-2.5 h-2.5 bg-orange-400 rounded-full border-2 border-gray-900 transition-all duration-500"
                style={{ top: `${(activeSection / (sections.length - 1)) * 310}px` }}
              ></div>
            </div>
            
            {/* Current Section Label */}
            <div 
              className="absolute left-6 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-lg px-3 py-2 shadow-lg transition-all duration-500"
              style={{ top: `${(activeSection / (sections.length - 1)) * 300}px` }}
            >
              <div className="flex items-center gap-2 text-orange-400">
                <span className="text-sm">{sections[activeSection]?.icon}</span>
                <span className="text-sm font-medium whitespace-nowrap">
                  {sections[activeSection]?.label}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Expanded State - Spotlight Panel */}
        <div className={`absolute left-0 top-0 transition-all duration-500 ease-out transform ${
          isExpanded 
            ? 'opacity-100 scale-100 translate-x-0 blur-none translate-y-0' 
            : 'opacity-0 scale-98 -translate-x-2 blur-sm translate-y-1 pointer-events-none'
        }`}>
          {/* Spotlight Container */}
          <div className="bg-gray-900/95 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-4 shadow-2xl min-w-[220px]">
            {/* Progress Line */}
            <div className="absolute left-3 top-4 bottom-16 w-0.5 bg-gray-600/30 rounded-full"></div>
            <div 
              className="absolute left-3 top-4 w-0.5 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full transition-all duration-500"
              style={{ height: `${(progressPercentage / 100) * (sections.length * 44)}px` }}
            ></div>
            
            {/* Sections */}
            <div className="pl-6 space-y-5">
              {sections.map((section, index) => {
                const isActive = index === activeSection;
                const isCompleted = index < activeSection;
                
                return (
                  <div
                    key={section.id}
                    className={`relative cursor-pointer group transition-all duration-300 ease-out ${
                      isExpanded 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-2'
                    }`}
                    style={{ transitionDelay: isExpanded ? `${index * 50}ms` : '0ms' }}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {/* Dot */}
                    <div
                      className={`absolute -left-7 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? 'bg-orange-400 border-orange-400 scale-125'
                          : isCompleted
                          ? 'bg-orange-500 border-orange-500'
                          : 'bg-gray-600/50 border-gray-500/50 group-hover:border-orange-400/70'
                      }`}
                    ></div>

                    {/* Section Content */}
                    <div className={`flex items-center gap-2.5 transition-all duration-200 ${
                      isActive
                        ? 'text-orange-400'
                        : isCompleted 
                        ? 'text-orange-300/80'
                        : 'text-gray-400 group-hover:text-gray-300'
                    }`}>
                      <span className="text-sm">{section.icon}</span>
                      <span className={`text-sm ${
                        isActive ? 'font-medium' : 'font-normal'
                      }`}>
                        {section.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Progress Percentage */}
            <div className="mt-4 pt-3 border-t border-gray-700/50">
              <div className="text-center">
                <div className="text-orange-400 font-semibold text-lg">
                  {Math.round(progressPercentage)}%
                </div>
                <div className="text-gray-500 text-xs">
                  Progress
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Floating Progress Dot */}
      <div className={`fixed bottom-6 right-6 z-50 lg:hidden transition-opacity duration-500 ease-out ${
        isAutoHidden && !isMobileExpanded ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Floating Dot */}
        <div
          className="relative"
          onClick={() => setIsMobileExpanded(!isMobileExpanded)}
        >
          {/* Main Progress Dot */}
          <div className="bg-black/40 backdrop-blur-md rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-200 w-14 h-14 flex items-center justify-center">
            <div className="flex items-center gap-1">
              <span className="text-sm">{sections[activeSection]?.icon}</span>
              <span className="text-orange-400 font-medium text-xs">
                {activeSection + 1}/{sections.length}
              </span>
            </div>
          </div>

          {/* Progress Ring */}
          <div className="absolute inset-[-2px] rounded-full">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              {/* Progress circle only - no background circle */}
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="rgb(251 146 60)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 48}`}
                strokeDashoffset={`${2 * Math.PI * 48 * (1 - progressPercentage / 100)}`}
                className="transition-all duration-500 drop-shadow-sm"
              />
            </svg>
          </div>

          {/* Expanded Mobile Panel */}
          {isMobileExpanded && (
            <div className="absolute bottom-full right-0 mb-4 bg-gray-900/95 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-4 shadow-2xl min-w-[280px] max-h-[60vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700/50">
                <div className="text-orange-400 font-semibold">Progress</div>
                <div className="text-orange-400 font-bold text-lg">
                  {Math.round(progressPercentage)}%
                </div>
              </div>

              {/* Sections List */}
              <div className="space-y-3">
                {sections.map((section, index) => {
                  const isActive = index === activeSection;
                  const isCompleted = index < activeSection;
                  
                  return (
                    <div
                      key={section.id}
                      className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                      onClick={() => {
                        scrollToSection(section.id);
                        setIsMobileExpanded(false);
                      }}
                    >
                      {/* Status Dot */}
                      <div
                        className={`w-3 h-3 rounded-full ${
                          isActive
                            ? 'bg-orange-400'
                            : isCompleted
                            ? 'bg-orange-500'
                            : 'bg-gray-600'
                        }`}
                      ></div>

                      {/* Section Content */}
                      <div className="flex items-center gap-2 flex-1">
                        <span className="text-sm">{section.icon}</span>
                        <span className={`text-sm ${
                          isActive
                            ? 'text-orange-400 font-medium'
                            : isCompleted 
                            ? 'text-orange-300/80'
                            : 'text-gray-400'
                        }`}>
                          {section.label}
                        </span>
                      </div>

                      {/* Section Number */}
                      <div className="text-xs text-gray-500">
                        {index + 1}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default ProgressSidebar;