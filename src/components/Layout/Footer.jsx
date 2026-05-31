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
              {/* Buy Me a Coffee */}
              <a
                href="https://buymeacoffee.com/paucotan"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-[#FFDD00] border border-gray-700 hover:border-[#FFDD00] rounded-lg transition-all duration-300"
                aria-label="Buy Me a Coffee"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z"/>
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2026 Bitcoin Journey. Built for education and awareness.
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