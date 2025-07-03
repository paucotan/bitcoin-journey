import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="block text-gray-400 hover:text-orange-400 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-400 hover:text-orange-400 transition-colors"
              >
                About
              </Link>
              <Link 
                to="/guides" 
                className="block text-gray-400 hover:text-orange-400 transition-colors"
              >
                Guides
              </Link>
            </div>
          </div>

          {/* Project Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Bitcoin Journey</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Educational content about Bitcoin, monetary history, and the importance of sound money.
            </p>
            <p className="text-gray-500 text-xs">
              Built with passion for Bitcoin education
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect</h3>

            {/* Social Icons */}
            <div className="flex gap-4">
              {/* Email */}
              <a
                href="mailto:droves.poetic.7k@icloud.com"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-orange-600 border border-gray-700 hover:border-orange-500 rounded-lg transition-all duration-300"
                aria-label="Send Email"
              >
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              {/* X/Twitter */}
              <a
                href="https://x.com/enjoypolosfu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-blue-600 border border-gray-700 hover:border-blue-500 rounded-lg transition-all duration-300"
                aria-label="Follow on X/Twitter"
              >
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/paucotan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-gray-600 border border-gray-700 hover:border-white rounded-lg transition-all duration-300"
                aria-label="View GitHub Profile"
              >
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Bitcoin Journey. Built for education and awareness.
            </p>
            <p className="text-gray-600 text-xs">
              Open source • Educational use only • Not financial advice
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;