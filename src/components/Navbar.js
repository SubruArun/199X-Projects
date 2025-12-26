import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 dark:bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-2xl font-bold text-white">
              <span className="text-xl">199</span>
              <span className="text-4xl text-red-600">X</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('games')}
              className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-sm font-medium"
            >
              Games
            </button>
            <button
              onClick={() => scrollToSection('members')}
              className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-sm font-medium"
            >
              Members
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-300 hover:text-red-500 transition-colors duration-200 text-sm font-medium"
            >
              Gallery
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-300 hover:text-red-500 hover:bg-gray-800 transition-all duration-200"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;