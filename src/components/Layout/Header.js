import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Trophy } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Header = () => {
  const { user, setLanguage } = useApp();
  const location = useLocation();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link 
            to="/"
            className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl hover:bg-orange-600 transition-colors"
          >
            ₿
          </Link>
          <div>
            <Link 
              to="/"
              className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors"
            >
              The Bitcoin Journey
            </Link>
            <p className="text-sm text-gray-600">Understanding Money & Bitcoin</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              to="/dashboard"
              className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                location.pathname === '/dashboard'
                  ? 'bg-orange-100 text-orange-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Dashboard
            </Link>
          </nav>
          
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            value={user.language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">🇺🇸 English</option>
            <option value="es">🇪🇸 Español</option>
            <option value="pt">🇧🇷 Português</option>
          </select>
          
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium">Level {user.level}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;