import React from 'react';
import { Gamepad2, Users, Trophy } from 'lucide-react';
import { gangInfo } from '../mock';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black dark:bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-red-900/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-red-800/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Main Logo */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-8xl md:text-9xl font-black text-white mb-4">
            <span className="text-7xl md:text-8xl">199</span>
            <span className="text-9xl md:text-[12rem] text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">X</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wider">
            {gangInfo.tagline}
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16">
          <div className="flex flex-col items-center group cursor-default">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-3 group-hover:border-red-600 transition-all duration-300 group-hover:scale-110">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <p className="text-3xl font-bold text-white">5</p>
            <p className="text-sm text-gray-400">Legends</p>
          </div>

          <div className="flex flex-col items-center group cursor-default">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-3 group-hover:border-red-600 transition-all duration-300 group-hover:scale-110">
              <Gamepad2 className="w-8 h-8 text-red-600" />
            </div>
            <p className="text-3xl font-bold text-white">7+</p>
            <p className="text-sm text-gray-400">Games</p>
          </div>

          <div className="flex flex-col items-center group cursor-default">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-3 group-hover:border-red-600 transition-all duration-300 group-hover:scale-110">
              <Trophy className="w-8 h-8 text-red-600" />
            </div>
            <p className="text-3xl font-bold text-white">∞</p>
            <p className="text-sm text-gray-400">Memories</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-red-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;