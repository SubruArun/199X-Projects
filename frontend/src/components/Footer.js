import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black dark:bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo and tagline */}
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold text-white mb-2">
            <span className="text-2xl">199</span>
            <span className="text-5xl text-red-600">X</span>
          </h3>
          <p className="text-gray-400 text-sm">Childhood Friends, Forever Legends</p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-8"></div>

        {/* Footer content */}
        <div className="text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-600 fill-red-600" /> by 199X Legends
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © {currentYear} 199X. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;