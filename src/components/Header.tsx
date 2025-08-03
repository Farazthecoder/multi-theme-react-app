import React from 'react';
import { useTheme } from '../contexts';
import type { PageType } from '../types';

export const Header: React.FC = () => {
  const { currentTheme, setTheme, currentPage, setCurrentPage } = useTheme();

  const getHeaderStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'bg-white shadow-md border-b border-gray-200 font-sans';
      case 'theme2':
        return 'bg-gray-900 shadow-lg border-b border-gray-700 font-serif';
      case 'theme3':
        return 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-xl border-b-4 border-yellow-400';
      default:
        return 'bg-white shadow-md';
    }
  };

  const getTextStyles = () => {
    switch (currentTheme) {
      case 'theme1':
        return 'text-gray-800';
      case 'theme2':
        return 'text-white';
      case 'theme3':
        return 'text-white font-bold';
      default:
        return 'text-gray-800';
    }
  };

  const getLinkStyles = (page: PageType) => {
    const isActive = currentPage === page;
    const baseStyles = 'px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ';
    switch (currentTheme) {
      case 'theme1':
        return baseStyles + (isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100');
      case 'theme2':
        return baseStyles + (isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800');
      case 'theme3':
        return baseStyles + (isActive ? 'bg-white text-purple-600' : 'text-yellow-100 hover:bg-white hover:bg-opacity-20');
      default:
        return baseStyles + 'text-gray-600';
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 p-4 ${getHeaderStyles()}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className={`text-2xl font-bold ${getTextStyles()}`}>
          {currentTheme === 'theme3' ? '🎨 ThemeApp' : 'ThemeApp'}
        </div>
        
        <nav className="hidden md:flex space-x-2">
          <span className={getLinkStyles('home')} onClick={() => setCurrentPage('home')}>
            Home
          </span>
          <span className={getLinkStyles('about')} onClick={() => setCurrentPage('about')}>
            About
          </span>
          <span className={getLinkStyles('contact')} onClick={() => setCurrentPage('contact')}>
            Contact
          </span>
        </nav>

        <select
          value={currentTheme}
          onChange={(e) => setTheme(e.target.value as any)}
          className={`px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
            currentTheme === 'theme1' 
              ? 'bg-white border-gray-300 text-gray-700 focus:ring-blue-500'
              : currentTheme === 'theme2'
              ? 'bg-gray-800 border-gray-600 text-white focus:ring-blue-400'
              : 'bg-white border-yellow-400 text-purple-600 focus:ring-pink-500 font-bold'
          }`}
        >
          <option value="theme1">Theme 1 - Minimal</option>
          <option value="theme2">Theme 2 - Dark</option>
          <option value="theme3">Theme 3 - Colorful</option>
        </select>
      </div>
      
      {/* Mobile Navigation */}
      <nav className="md:hidden mt-4 flex justify-center space-x-2">
        <span className={getLinkStyles('home')} onClick={() => setCurrentPage('home')}>
          Home
        </span>
        <span className={getLinkStyles('about')} onClick={() => setCurrentPage('about')}>
          About
        </span>
        <span className={getLinkStyles('contact')} onClick={() => setCurrentPage('contact')}>
          Contact
        </span>
      </nav>
    </header>
  );
};